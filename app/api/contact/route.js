import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstname, lastname, email, phone, service, message } = body;

    if (!firstname || !firstname.trim()) {
      return NextResponse.json(
        { error: "First name is required." },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "Message content cannot be empty." },
        { status: 400 }
      );
    }

    // Structured logging for inquiry auditing
    const inquiry = {
      timestamp: new Date().toISOString(),
      name: `${firstname.trim()} ${lastname ? lastname.trim() : ""}`.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : "Not provided",
      service: service || "General Inquiry",
      message: message.trim(),
    };

    console.log("[Portfolio Contact Inquiry Received]:", inquiry);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Portfolio Contact API Error]:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
