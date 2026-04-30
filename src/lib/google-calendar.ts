import { google } from "googleapis";

// These should be in your .env.local file
const SCOPES = ["https://www.googleapis.com/auth/calendar"];
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

const auth = new google.auth.JWT(
  GOOGLE_CLIENT_EMAIL,
  undefined,
  GOOGLE_PRIVATE_KEY,
  SCOPES
);

const calendar = google.calendar({ version: "v3", auth });

export async function createCalendarEvent(eventData: {
  summary: string;
  description: string;
  start: string; // ISO string
  end: string;   // ISO string
  attendeeEmail: string;
}) {
  try {
    const event = {
      summary: eventData.summary,
      description: eventData.description,
      start: {
        dateTime: eventData.start,
        timeZone: "UTC",
      },
      end: {
        dateTime: eventData.end,
        timeZone: "UTC",
      },
      attendees: [{ email: eventData.attendeeEmail }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 30 },
        ],
      },
    };

    // If environment variables are missing, simulate a successful booking for development
    if (!GOOGLE_PRIVATE_KEY || !GOOGLE_CLIENT_EMAIL) {
      console.warn("Google Calendar credentials missing. Simulating successful booking.");
      return { status: "simulated", data: event };
    }

    const response = await calendar.events.insert({
      calendarId: GOOGLE_CALENDAR_ID,
      requestBody: event,
    });

    return { status: "success", data: response.data };
  } catch (error) {
    console.error("Error creating Google Calendar event:", error);
    throw error;
  }
}
