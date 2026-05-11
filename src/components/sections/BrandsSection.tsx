import { Container } from "@/components/layout/Container";

const BRANDS = ["HERBALLY TOUCH", "HERBALLY TOUCH AYURVEDA", "SKORA", "VOLOSY"];

export const BrandsSection = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
      <Container>
        <div className="section-paper rounded-[2rem] px-6 py-8 sm:px-10">
          <p className="text-xs tracking-[0.4em] text-[var(--text-muted)]">
            BRANDS
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {BRANDS.map((brand) => (
              <div
                key={brand}
                className="rounded-full border border-[rgba(73,58,41,0.14)] bg-[rgba(255,251,246,0.9)] px-5 py-3 text-sm tracking-[0.2em] text-[var(--text-secondary)]"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
