"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { formations } from "@/src/data/formations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "loading" | "success" | "error";

const situations = [
  "Lycéen(ne) / Étudiant(e)",
  "Demandeur(se) d'emploi",
  "En reconversion professionnelle",
  "Salarié(e)",
  "Autre",
];

export function CandidatureForm() {
  const searchParams = useSearchParams();
  const presetFormation = searchParams.get("formation") ?? "";
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      // 👉 À BRANCHER PLUS TARD : appel API / service email.
      //
      // const res = await fetch("/api/candidature", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });
      // if (!res.ok) throw new Error("Échec de l'envoi");

      // Simulation d'envoi (à supprimer une fois l'API connectée).
      await new Promise((resolve) => setTimeout(resolve, 900));
      // eslint-disable-next-line no-console
      console.log("Candidature (démo) :", payload);

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto size-12 text-accent" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-primary">
          Votre candidature a bien été envoyée
        </h3>
        <p className="mt-2 text-muted-foreground">
          Merci pour votre confiance. Notre équipe revient vers vous sous 48 à
          72 heures ouvrées pour étudier votre dossier.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Envoyer une autre candidature
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nom">
            Nom <span className="text-destructive">*</span>
          </Label>
          <Input id="nom" name="nom" autoComplete="family-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="prenom">
            Prénom <span className="text-destructive">*</span>
          </Label>
          <Input id="prenom" name="prenom" autoComplete="given-name" required />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="vous@exemple.fr"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telephone">
            Téléphone <span className="text-destructive">*</span>
          </Label>
          <Input
            id="telephone"
            name="telephone"
            type="tel"
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            required
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="formation">
            Formation souhaitée <span className="text-destructive">*</span>
          </Label>
          <Select
            id="formation"
            name="formation"
            defaultValue={presetFormation}
            required
          >
            <option value="" disabled>
              Sélectionnez une formation
            </option>
            {formations.map((f) => (
              <option key={f.slug} value={f.slug}>
                {f.titreCourt}
              </option>
            ))}
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="situation">
            Situation actuelle <span className="text-destructive">*</span>
          </Label>
          <Select id="situation" name="situation" defaultValue="" required>
            <option value="" disabled>
              Sélectionnez votre situation
            </option>
            {situations.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Votre message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Présentez votre projet, vos motivations, vos questions…"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-destructive">
          Une erreur est survenue lors de l&apos;envoi. Merci de réessayer ou de
          nous contacter directement.
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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
              Envoyer ma candidature
            </>
          )}
        </Button>
        <p className="text-xs text-muted-foreground">
          Les champs marqués d&apos;un <span className="text-destructive">*</span>{" "}
          sont obligatoires.
        </p>
      </div>
    </form>
  );
}
