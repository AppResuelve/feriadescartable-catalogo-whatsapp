"use client";
import { useState, useEffect } from "react";
import { Container } from "./Container";
import { ProductCard } from "@/components/store/ProductCard";
import { productsService } from "@/services/storeService";

export function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productsService
      .list({ limit: 6 })
      .then(({ products }) => {
        setProducts(products || []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[3/4] bg-[var(--color-border)] animate-pulse"
              />
            ))}
          </div>
        </Container>
      </section>
    );
  }

  if (products.length === 0) return null;

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
