import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type FormPayload = {
  formType?: "oem-quote" | "wholesale-apply";
  locale?: "en" | "bn";
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
};

function missing(values: string[]) {
  return values.filter((value) => !process.env[value]);
}

export async function POST(request: Request) {
  const body = (await request.json()) as FormPayload;

  if (!body.formType || !body.name || !body.email || !body.phone || !body.message) {
    return NextResponse.json({ error: "Missing required form fields." }, { status: 400 });
  }

  const missingEnv = missing(["FORMS_TO_EMAIL", "SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM"]);
  if (missingEnv.length > 0) {
    return NextResponse.json({ error: `Missing environment variables: ${missingEnv.join(", ")}` }, { status: 500 });
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const subjectPrefix = body.formType === "oem-quote" ? "OEM Quote" : "Wholesale Apply";
  await transport.sendMail({
    from: process.env.SMTP_FROM,
    to: process.env.FORMS_TO_EMAIL,
    subject: `[${subjectPrefix}] ${body.company ?? body.name}`,
    text: [
      `Form: ${body.formType}`,
      `Locale: ${body.locale ?? "en"}`,
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      `Phone: ${body.phone}`,
      `Company: ${body.company ?? "-"}`,
      `Message: ${body.message}`
    ].join("\n")
  });

  return NextResponse.json({ ok: true });
}
