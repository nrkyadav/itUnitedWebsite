import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const data = req.body || {};

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; font-size: 14px;">
        ${Object.entries(data)
        .map(
          ([key, value]) => `
            <tr>
              <td style="font-weight: bold; text-transform: capitalize;">${key}</td>
              <td>${value || "N/A"}</td>
            </tr>
          `
        )
        .join("")}
      </table>
      <p style="margin-top: 20px; font-size: 12px; color: #555;">
        This message was automatically generated from your website contact form.
      </p>
    `;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_ADDRESS,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    });

    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_ADDRESS}>`,
      to: ["theitunited@gmail.com"],
      subject: "📩 New Inquiry from Website",
      replyTo: data.email || process.env.EMAIL_ADDRESS,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error("❌ Email sending failed:", err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
}
