type SendPasswordResetEmailArgs = {
  email: string;
  code: string;
};

export async function sendPasswordResetEmail({
  email,
  code,
}: SendPasswordResetEmailArgs) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    throw new Error("Email service is not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject: "Your Exotic Cars Hub password reset code",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px;color:#171717">
          <h2 style="margin:0 0 12px">Reset your password</h2>
          <p style="font-size:14px;line-height:1.6;color:#555">
            We received a request to reset your Exotic Cars Hub password.
          </p>
          <div style="margin:28px 0;padding:20px;text-align:center;background:#f7f7f7;border-radius:12px">
            <div style="font-size:12px;color:#777;margin-bottom:8px">
              Your confirmation code
            </div>
            <div style="font-size:32px;font-weight:700;letter-spacing:8px">
              ${code}
            </div>
          </div>
          <p style="font-size:13px;color:#777">
            This code expires in 10 minutes. If you didn't request a password
            reset, you can safely ignore this email.
          </p>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Email service failed: ${body}`);
  }
}
