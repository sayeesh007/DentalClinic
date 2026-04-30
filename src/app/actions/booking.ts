"use server";

import { createCalendarEvent } from "@/lib/google-calendar";

export async function submitBooking(formData: {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
}) {
  try {
    // Basic validation
    if (!formData.email || !formData.date || !formData.time) {
      return { success: false, error: "Missing required fields" };
    }

    // Prepare event times
    const [time, modifier] = formData.time.split(" ");
    const [rawHours, minutes] = time.split(":");
    let hours = rawHours;
    if (hours === "12") {
      hours = "00";
    }
    if (modifier === "PM") {
      hours = (parseInt(hours, 10) + 12).toString();
    }
    const isoDate = `${formData.date}T${hours.padStart(2, "0")}:${minutes}:00`;
    const startDateTime = new Date(isoDate).toISOString();
    const endDate = new Date(new Date(isoDate).getTime() + 60 * 60 * 1000);
    const endDateTime = endDate.toISOString();

    const result = await createCalendarEvent({
      summary: `Param Clinic: ${formData.service} - ${formData.name}`,
      description: `
        Service: ${formData.service}
        Patient: ${formData.name}
        Phone: ${formData.phone}
        Email: ${formData.email}
      `,
      start: startDateTime,
      end: endDateTime,
      attendeeEmail: formData.email,
    });

    return { success: true, message: "Appointment requested successfully!" };
  } catch (error: unknown) {
    console.error("Booking submission error:", error);
    return { success: false, error: "Failed to process booking. Please try again." };
  }
}
