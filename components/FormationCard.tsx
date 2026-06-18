import Link from "next/link";
import {
  Award,
  Briefcase,
  Clock,
  GraduationCap,
  MapPin,
  Target,
} from "lucide-react";

import type { Formation } from "@/src/data/formations";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FormationCardProps {
  formation: Formation;
}

export function FormationCard({ formation }: FormationCardProps) {
  return (
    <Card className="group flex h-full flex-col rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/5">
      <CardHeader className="gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">{formation.rncp}</Badge>
          <Badge variant="secondary">{formation.niveau}</Badge>
        </div>
        <CardTitle className="text-xl text-primary">
          {formation.titreCourt}
        </CardTitle>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {formation.resume}
        </p>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-6">
        {/* Caractéristiques */}
        <dl className="grid grid-cols-1 gap-3 rounded-lg bg-secondary/60 p-4 text-sm sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <Award className="size-4 shrink-0 text-accent" aria-hidden="true" />
            <dt className="sr-only">Code RNCP</dt>
            <dd className="font-medium">{formation.rncp}</dd>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="size-4 shrink-0 text-accent" aria-hidden="true" />
            <dt className="sr-only">Niveau</dt>
            <dd>{formation.niveau}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 shrink-0 text-accent" aria-hidden="true" />
            <dt className="sr-only">Durée</dt>
            <dd>{formation.duree}</dd>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
            <dt className="sr-only">Modalité</dt>
            <dd>{formation.modalite}</dd>
          </div>
        </dl>

        {/* Objectifs */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Target className="size-4 text-accent" aria-hidden="true" />
            Objectifs
          </h3>
          <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
            {formation.objectifs.map((obj) => (
              <li key={obj} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {obj}
              </li>
            ))}
          </ul>
        </div>

        {/* Débouchés */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Briefcase className="size-4 text-accent" aria-hidden="true" />
            Débouchés
          </h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {formation.debouches.map((deb) => (
              <li key={deb}>
                <Badge variant="outline" className="font-normal">
                  {deb}
                </Badge>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-2">
          <Button asChild variant="outline" className="w-full">
            <Link
              href={`/candidater?formation=${formation.slug}`}
              aria-label={`Candidater à la formation ${formation.titreCourt}`}
            >
              Candidater à cette formation
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
