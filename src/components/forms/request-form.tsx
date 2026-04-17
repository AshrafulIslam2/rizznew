"use client";

import { FormEvent, useMemo, useState } from "react";
import { FormField } from "@/components/forms/form-field";
import { CONTACT } from "@/lib/site";

type FormType = "oem-quote" | "wholesale-apply";

type Labels = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  submit: string;
  success: string;
  error: string;
  whatsappFallback: string;
};

type Props = {
  formType: FormType;
  locale: "en" | "bn";
  labels: Labels;
};

export function RequestForm({ formType, locale, labels }: Props) {
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const whatsappUrl = useMemo(() => {
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || CONTACT.whatsappNumber;
    const text = encodeURIComponent(
      `Form: ${formType}\nLocale: ${locale}\nName: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nCompany: ${payload.company}\nMessage: ${payload.message}`
    );
    return `https://wa.me/${number}?text=${text}`;
  }, [formType, locale, payload]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, locale, ...payload })
      });

      if (response.ok) {
        setStatus("success");
        return;
      }
    } catch (error) {
      console.error("Form submission request failed:", error);
    }

    setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} className="surface-panel space-y-4 rounded-xl border p-4 sm:p-6">
      <FormField
        label={labels.name}
        inputProps={{
          required: true,
          placeholder: labels.name,
          value: payload.name,
          onChange: (event) => setPayload((prev) => ({ ...prev, name: event.target.value }))
        }}
      />
      <FormField
        label={labels.email}
        inputProps={{
          required: true,
          type: "email",
          placeholder: labels.email,
          value: payload.email,
          onChange: (event) => setPayload((prev) => ({ ...prev, email: event.target.value }))
        }}
      />
      <FormField
        label={labels.phone}
        inputProps={{
          required: true,
          placeholder: labels.phone,
          value: payload.phone,
          onChange: (event) => setPayload((prev) => ({ ...prev, phone: event.target.value }))
        }}
      />
      <FormField
        label={labels.company}
        inputProps={{
          placeholder: labels.company,
          value: payload.company,
          onChange: (event) => setPayload((prev) => ({ ...prev, company: event.target.value }))
        }}
      />
      <FormField
        as="textarea"
        label={labels.message}
        textareaProps={{
          required: true,
          rows: 5,
          placeholder: labels.message,
          value: payload.message,
          onChange: (event) => setPayload((prev) => ({ ...prev, message: event.target.value }))
        }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:opacity-60 sm:w-auto"
      >
        {labels.submit}
      </button>
      {status === "success" ? <p className="text-[var(--primary)]">{labels.success}</p> : null}
      {status === "error" ? <p className="text-[var(--muted)]">{labels.error}</p> : null}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="btn-whatsapp w-full sm:w-auto"
      >
        {labels.whatsappFallback}
      </a>
    </form>
  );
}
