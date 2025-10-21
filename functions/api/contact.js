export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const body = await req.json();
    const { name, email, message } = body;

    const to = "christopherhajj4@gmail.com";
    const subject = `New contact form message from ${name || email}`;
    const html = `
      <h2>New Contact Message</h2>
      <p><b>Name:</b> ${name || "N/A"}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `;

    const response = await fetch("https://bolt.new/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.BOLT_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        to,
        subject,
        html,
      }),
    });

    if (!response.ok) {
      throw new Error(`Email sending failed with status ${response.status}`);
    }

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
