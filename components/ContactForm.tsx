"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "loading" | "success" | "error";

interface ContactFormProps {
  /** Sujet pré-rempli (ex. "Être rappelé"). */
  defaultSubject?: string;
  /** Identifiant unique si plusieurs formulaires sur la même page. */
  idPrefix?: string;
}

export function ContactForm({
  defaultSubject = "",
  idPrefix = "contact",
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      // 👉 À BRANCHER PLUS TARD : appel API / service email.
      //
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });
      // if (!res.ok) throw new Error("Échec de l'envoi");

      await new Promise((resolve) => setTimeout(resolve, 800));
      // eslint-disable-next-line no-console
      console.log("Message de contact (démo) :", payload);

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/5 p-6"
      >
        <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-accent" aria-hidden="true" />
        <div>
          <h3 className="font-semibold text-primary">Message envoyé</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Merci, nous avons bien reçu votre message et reviendrons vers vous
            rapidement.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-nom`}>
            Nom et prénom <span className="text-destructive">*</span>
          </Label>
          <Input
            id={`${idPrefix}-nom`}
            name="nom"
            autoComplete="name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-email`}>
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="vous@exemple.fr"
            required
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-telephone`}>Téléphone</Label>
          <Input
            id={`${idPrefix}-telephone`}
            name="telephone"
            type="tel"
            autoComplete="tel"
            placeholder="06 12 34 56 78"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-sujet`}>Sujet</Label>
          <Input
            id={`${idPrefix}-sujet`}
            name="sujet"
            defaultValue={defaultSubject}
            placeholder="Objet de votre message"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-message`}>
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id={`${idPrefix}-message`}
          name="message"
          placeholder="Votre message…"
          required
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-destructive">
          Une erreur est survenue lors de l&apos;envoi. Merci de réessayer.
        </p>
      )}

      <Button
        type="submit"
        variant="accent"
        size="lg"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="animate-spin" aria-hidden="true" />
            Envoi en cours…
          </>
        ) : (
          <>
            <Send aria-hidden="true" />
            Envoyer le message
          </>
        )}
      </Button>
    </form>
  );
}
