import Link from "next/link";
import { Mail, MoveRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

const CONTACT = {
  title: "Let's make the words do the heavy lifting.",
  email: "evelinelizabeth2002@gmail.com",
};

export const ContactSection = () => {
  return (
    <section id="contacts" className="px-4 pb-18 pt-14 sm:px-6 lg:px-10 lg:pb-24">
      <Container>
        <div className="section-paper rounded-[2rem] px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-xs tracking-[0.4em] text-[var(--text-muted)]">
            CONTACTS
          </p>
          <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.15rem,5vw,4rem)] leading-[0.96] tracking-[-0.04em]">
            <span className="paper-underline">{CONTACT.title}</span>
          </h2>

          <Link
            href={`mailto:${CONTACT.email}`}
            className="paper-button mt-9 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm tracking-[0.2em] text-[var(--text-primary)]"
          >
            <Mail className="size-4" strokeWidth={1.8} />
            <span>{CONTACT.email}</span>
            <MoveRight className="size-4" strokeWidth={1.8} />
          </Link>
        </div>
      </Container>
    </section>
  );
};
