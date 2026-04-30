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
    // Assuming 1 hour duration for simplicity
    const startDateTime = new Date(`${formData.date}T${formData.time.split(" ")[0]}:00`).toISOString();
    const endDate = new Date(new Date(`${formData.date}T${formData.time.split(" ")[0]}:00`).getTime() + 60 * 60 * 1000);
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

    console.log("Booking successfully processed:", result);
    return { success: true, message: "Appointment requested successfully!" };
  } catch (error: any) {
    console.error("Booking submission error:", error);
    return { success: false, error: "Failed to process booking. Please try again." };
  }
}
