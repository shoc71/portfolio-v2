import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: (process.env.EMAIL_PORT),
    secure: false, // true for SSL, false for TLS/starttls
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
  

router.post("/send-reminder", async (req, res) => {
    const { to, datetime } = req.body;

    if (!to || !datetime) {
        return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const mailOptions = {
        from: `"Appointment Bot" <${process.env.EMAIL_USER}>`,
        to,
        subject: "Appointment Reminder",
        text: `This is a reminder for your appointment on ${datetime}.`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Reminder sent!" });
    } catch (err) {
        console.error("Email send error:", err);
        res.status(500).json({ success: false, message: "Failed to send email" });
    }
});

export default router;
