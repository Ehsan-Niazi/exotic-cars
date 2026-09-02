"use client";

import { Clock, Phone } from "lucide-react";

export default function LocationSection() {
  const latitude = 47.60957;
  const longitude = -122.34201;

  const address = "515 Broad St, Seattle, WA 98109";

  const mapUrl = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`;

  return (
    <section id="visit" className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Visit Us
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
          Our showroom, two blocks from the Space Needle
        </h2>

        <div className="relative mt-10">
          <div className="relative h-80 w-full sm:h-96 lg:h-105 overflow-hidden rounded-2xl bg-foreground/5 ring-1 ring-foreground/10">
            <iframe
              title="Exotic Cars Hub showroom location"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.025},${latitude - 0.015},${longitude + 0.025},${latitude + 0.015}&layer=mapnik&marker=${latitude},${longitude}`}
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>

          <div className="relative mx-4 -mt-16 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-foreground/10 sm:absolute sm:bottom-6 sm:left-6 sm:mx-0 sm:mt-0 w-auto sm:w-80">
            <div className="flex items-start gap-3">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Exotic Cars Hub Showroom
                </p>

                <p className="mt-0.5 text-sm text-foreground/60">{address}</p>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

              <div className="text-sm text-foreground/60">
                <p>Mon &ndash; Sat: 9:00 AM &ndash; 6:00 PM</p>
                <p>Sunday: By appointment</p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-primary" />

              <p className="text-sm text-foreground/60">(206) 555-0142</p>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block w-full rounded-full bg-primary py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-secondary"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
