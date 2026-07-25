"use client";
import { Container } from "@/components/store/Home/Container";
import { Hero } from "@/components/store/Home/Hero";
import { SectionTitle } from "@/components/store/Home/SectionTitle";
import { BannerSection } from "@/components/store/Home/BannerSection";
import { CategoryShowcase } from "@/components/store/Home/CategoryShowcase";
import { StorySection } from "@/components/store/Home/StorySection";
import { FeaturedProducts } from "@/components/store/Home/FeaturedProducts";
import { BenefitsSection } from "@/components/store/Home/BenefitsSection";
import { CTASection } from "@/components/store/Home/CTASection";

export default function HomeClient() {
  return (
    <main>
      <Hero />

      <section
        className="relative py-12 md:py-20"
        style={{ boxShadow: "0 8px 10px 0px rgba(0,0,0,0.26)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none bg-trama-full"
          style={{
            boxShadow:
              "inset 0 12px 0 var(--color-brown-dark), inset 0 -12px 0 var(--color-brown-dark)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,180,80,0.75) 0%, rgba(255,140,40,0.40) 10%, transparent 40%)",
          }}
        />
        <BannerSection />
      </section>

      <Container>
        <SectionTitle
          badge="Categorías"
          title="Todo lo que necesitás"
          subtitle="Productos para cada tipo de negocio y evento."
        />
      </Container>
      <CategoryShowcase />

      <StorySection />

      <div
        className="relative w-full h-[100px] -mt-[50px] -mb-[50px] z-10"
        style={{
          backgroundImage: 'url("/cinta-bordada.png")',
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
          backgroundSize: "auto 100px",
          filter: "drop-shadow(0 10px 6px rgba(0,0,0,0.20))",
        }}
      />

      <Container>
        <SectionTitle
          title="Productos destacados"
          subtitle="Los más elegidos por nuestros clientes."
        />
      </Container>
      <FeaturedProducts />

      <BenefitsSection />

      <CTASection />
    </main>
  );
}
