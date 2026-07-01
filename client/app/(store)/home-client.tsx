"use client";
import { Container } from "@/components/store/Home/Container";
import { Hero } from "@/components/store/Home/Hero";
import { SectionTitle } from "@/components/store/Home/SectionTitle";
import { CategoryShowcase } from "@/components/store/Home/CategoryShowcase";
import { StorySection } from "@/components/store/Home/StorySection";
import { FeaturedProducts } from "@/components/store/Home/FeaturedProducts";
import { BenefitsSection } from "@/components/store/Home/BenefitsSection";
import { GallerySection } from "@/components/store/Home/GallerySection";
import { CTASection } from "@/components/store/Home/CTASection";

export default function HomeClient() {
  return (
    <main>
      <Hero />

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

      <GallerySection />

      <CTASection />
    </main>
  );
}
