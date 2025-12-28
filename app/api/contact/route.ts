import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const toEmail = process.env.CONTACT_TO_EMAIL || "bridgetobits@gmail.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER || "no-reply@bridgetobits.com";
const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

function validatePayload(body: unknown) {
  if (typeof body !== "object" || body === null) return null;
  const { firstName, lastName, email, phone, message } = body as Record<string, string>;
  const cleaned = {
    firstName: firstName?.toString().trim() || "",
    lastName: lastName?.toString().trim() || "",
    email: email?.toString().trim() || "",
    phone: phone?.toString().trim() || "",
    message: message?.toString().trim() || "",
  };
  if (!cleaned.firstName || !cleaned.lastName || !cleaned.email || !cleaned.message) return null;
  return cleaned;
}

export async function POST(request: Request) {
  try {
    const payload = validatePayload(await request.json());
    if (!payload) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json({ error: "Email transport is not configured." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const fullName = `${payload.firstName} ${payload.lastName}`.trim();
    const submittedAt = new Date().toISOString();

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: payload.email,
      subject: `New contact form submission from ${fullName}`,
      text: [
        `Name: ${fullName}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone || "(not provided)"}`,
        `Submitted At: ${submittedAt}`,
        "",
        payload.message,
      ].join("\n"),
      html: `
        <h2>New contact form submission</h2>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${payload.email}</li>
          <li><strong>Phone:</strong> ${payload.phone || "(not provided)"}</li>
          <li><strong>Submitted At:</strong> ${submittedAt}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit;">${payload.message}</pre>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send error", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
