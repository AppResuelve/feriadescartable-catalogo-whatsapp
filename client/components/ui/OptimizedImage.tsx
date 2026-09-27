// components/ui/OptimizedImage.tsx
"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { getImageLoader } from "@/utils/imageOptimization";

type OptimizedImageProps = Omit<ImageProps, "loader" | "src" | "onLoad"> & {
  src?: string | null;
  isLocal?: boolean;
};

export function OptimizedImage({
  src,
  alt,
  isLocal = false,
  className = "",
  ...props
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  if (!src) return null;

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-[var(--color-surface)]" />
      )}
      <Image
        loader={getImageLoader(isLocal)}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        {...props}
      />
    </>
  );
}
