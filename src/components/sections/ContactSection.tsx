import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { Container } from "@/components/layout/Container";
import aboutImage from "../../../public/images/about.png";
import sketchUnderlineImage from "../../../public/images/sketch_underline.png";

const CONTACT = {
  name: "Evelin Elizabeth V P",
  greeting: "Feel free to say hi to Joey and me",
  note: "(We don't bite)",
  phoneLabel: "+91 92127 60551",
  phoneHref: "tel:+919212760551",
  email: "evelinelizabeth2002@gmail.com",
};

export const ContactSection = () => {
  return (
    <section
      id="contacts"
      className="px-4 pb-18 pt-14 sm:px-6 lg:px-10 lg:pb-24"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[2rem]">
          <div className="mb-10 px-4 sm:px-8 md:px-12 lg:mb-14">
            <h2
              className="
              relative inline-block
              font-[family-name:var(--font-display)]
              text-[clamp(3.5rem,10vw,8.5rem)]
              leading-[0.9]
              tracking-[-0.04em]
              text-[var(--text-primary)]
            "
            >
              CONTACTS
              <Image
                src={sketchUnderlineImage}
                alt=""
                aria-hidden="true"
                className="
                absolute -bottom-3 left-10
                h-auto w-[60%]
                sm:-bottom-4 sm:w-[54%]
              "
              />
            </h2>


          </div>
          <div className="relative grid gap-10 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14 lg:px-14">
            <div className="mx-auto w-full max-w-[22rem] lg:max-w-[25rem]">
              <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[1.5rem] border-[10px] border-white bg-[#e9dccf] shadow-[0_18px_45px_rgba(42,28,17,0.16)]">
                <div className="paper-tape paper-tape-left" />
                <div className="paper-tape paper-tape-right" />
                <Image
                  src={aboutImage}
                  alt="Evelin Elizabeth V P smiling in a portrait placeholder for the Joey contact photo."
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 80vw, 32vw"
                  priority={false}
                />
              </div>
            </div>

            <div className="flex flex-col items-start justify-center">


              <h2 className="mt-4 max-w-[14ch] font-[family-name:var(--font-display)] text-[clamp(2.5rem,5.5vw,4.7rem)] leading-[0.95] tracking-[-0.04em] text-[var(--text-primary)]">
                {CONTACT.greeting}
              </h2>

              <p className="mt-3 font-[family-name:var(--font-handwritten)] text-[1.55rem] text-[var(--accent-primary)] sm:text-[1.8rem]">
                {CONTACT.note}
              </p>

              <p className="mt-8 text-sm tracking-[0.3em] text-[var(--text-muted)]">
                {CONTACT.name}
              </p>

              <div className="mt-8 flex w-full flex-col gap-4 sm:max-w-[28rem]">
                <Link
                  href={CONTACT.phoneHref}
                  className="paper-button inline-flex items-center gap-3 rounded-full px-5 py-4 text-sm tracking-[0.14em] text-[var(--text-primary)]"
                >
                  <Phone className="size-4 shrink-0" strokeWidth={1.8} />
                  <span>{CONTACT.phoneLabel}</span>
                </Link>

                <Link
                  href={`mailto:${CONTACT.email}`}
                  className="paper-button inline-flex items-center gap-3 rounded-full px-5 py-4 text-sm tracking-[0.04em] text-[var(--text-primary)] sm:tracking-[0.08em]"
                >
                  <Mail className="size-4 shrink-0" strokeWidth={1.8} />
                  <span className="break-all">{CONTACT.email}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
