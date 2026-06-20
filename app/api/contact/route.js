import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.TO_EMAIL],
      replyTo: email,
      subject: `New message from ${name}  Portfolio`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ededed; padding: 40px; border-radius: 12px; border: 1px solid #1f1f1f;">
          <h2 style="margin: 0 0 8px; font-size: 22px; color: #fff;">New Contact Message</h2>
          <p style="margin: 0 0 32px; color: #888; font-size: 14px;">Received via your portfolio contact form</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #888; font-size: 13px; width: 80px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #ededed; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #888; font-size: 13px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #ededed; font-size: 14px;">
                <a href="mailto:${email}" style="color: #ededed;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 0 0; color: #888; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 16px 0 0; color: #ededed; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #1f1f1f; color: #555; font-size: 12px;">
            Sent from farhankhan.dev portfolio
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
