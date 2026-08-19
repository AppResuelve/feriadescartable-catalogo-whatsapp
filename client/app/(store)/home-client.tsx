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

      <BannerSection />

      <Container>
        <SectionTitle
          badge="Categorías"
          title="Todo lo que necesitás"
          subtitle="Productos para cada tipo de negocio y evento."
        />
      </Container>
      <CategoryShowcase />

      <StorySection />

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
