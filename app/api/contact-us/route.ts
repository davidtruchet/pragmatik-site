import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend with API key
// You'll need to add your Resend API key to your environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM;

// Check if required environment variables are set
if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM) {
  console.error('Missing required environment variables: RESEND_API_KEY or RESEND_FROM');
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { subject, fullName, channel, message, userEmail } = await request.json();
    
    if (!message || !fullName || !userEmail || !channel) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if fromEmail is defined
    if (!fromEmail) {
      return NextResponse.json(
        { error: 'Server configuration error: Missing sender email' },
        { status: 500 }
      );
    }

    // Send the email
    const data = await resend.emails.send({
      from: fromEmail, 
      to: ['contact@aiventura.dev'], 
      subject: `${subject}`,
      html: `
        <h1>${subject}</h1>
        <p><strong>User Email:</strong> ${userEmail}</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>How did you hear about us?</strong> ${channel}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending feedback email:', error);
    return NextResponse.json(
      { error: 'Failed to send feedback' },
      { status: 500 }
    );
  }
}
