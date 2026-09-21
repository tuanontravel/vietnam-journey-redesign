import type { ImgHTMLAttributes } from "react";

import halong from "@/assets/journey/hero-halong.jpg";
import halongAvif from "@/assets/journey/hero-halong.jpg?w=360;720;1200&format=avif&as=srcset";
import halongWebp from "@/assets/journey/hero-halong.jpg?w=360;720;1200&format=webp&as=srcset";
import hanoi from "@/assets/journey/hanoi.jpg";
import hanoiAvif from "@/assets/journey/hanoi.jpg?w=360;720;1200&format=avif&as=srcset";
import hanoiWebp from "@/assets/journey/hanoi.jpg?w=360;720;1200&format=webp&as=srcset";
import hoiAn from "@/assets/journey/hoi-an.jpg";
import hoiAnAvif from "@/assets/journey/hoi-an.jpg?w=360;720;1200&format=avif&as=srcset";
import hoiAnWebp from "@/assets/journey/hoi-an.jpg?w=360;720;1200&format=webp&as=srcset";
import kayaking from "@/assets/journey/kayaking.jpg";
import kayakingAvif from "@/assets/journey/kayaking.jpg?w=360;720;900&format=avif&as=srcset";
import kayakingWebp from "@/assets/journey/kayaking.jpg?w=360;720;900&format=webp&as=srcset";
import mekong from "@/assets/journey/mekong.jpg";
import mekongAvif from "@/assets/journey/mekong.jpg?w=240;480&format=avif&as=srcset";
import mekongWebp from "@/assets/journey/mekong.jpg?w=240;480&format=webp&as=srcset";
import team from "@/assets/journey/team.jpg";
import teamAvif from "@/assets/journey/team.jpg?w=480;800;1200&format=avif&as=srcset";
import teamWebp from "@/assets/journey/team.jpg?w=480;800;1200&format=webp&as=srcset";
import heroDesktop from "@/assets/journey/hero-emotional-desktop.jpg?w=1280&format=webp";
import heroDesktopAvif from "@/assets/journey/hero-emotional-desktop.jpg?w=768;1280;1920&format=avif&as=srcset";
import heroDesktopWebp from "@/assets/journey/hero-emotional-desktop.jpg?w=768;1280;1920&format=webp&as=srcset";
import heroMobileAvif from "@/assets/journey/hero-emotional-mobile.jpg?w=540;1080&format=avif&as=srcset";
import heroMobileWebp from "@/assets/journey/hero-emotional-mobile.jpg?w=540;1080&format=webp&as=srcset";

type Variant = { avif: string; webp: string };

const variants: Record<string, Variant> = {
  [halong]: { avif: halongAvif, webp: halongWebp },
  [hanoi]: { avif: hanoiAvif, webp: hanoiWebp },
  [hoiAn]: { avif: hoiAnAvif, webp: hoiAnWebp },
  [kayaking]: { avif: kayakingAvif, webp: kayakingWebp },
  [mekong]: { avif: mekongAvif, webp: mekongWebp },
  [team]: { avif: teamAvif, webp: teamWebp },
};

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  sizes?: string;
};

export function OptimizedImage({ src, sizes = "100vw", loading = "lazy", decoding = "async", ...props }: OptimizedImageProps) {
  const variant = variants[src];
  if (!variant) return <img src={src} sizes={sizes} loading={loading} decoding={decoding} {...props} />;

  return (
    <picture>
      <source type="image/avif" srcSet={variant.avif} sizes={sizes} />
      <source type="image/webp" srcSet={variant.webp} sizes={sizes} />
      <img src={src} sizes={sizes} loading={loading} decoding={decoding} {...props} />
    </picture>
  );
}

export function HeroPicture({ alt, className }: { alt: string; className: string }) {
  return (
    <picture>
      <source media="(max-width: 767px)" type="image/avif" srcSet={heroMobileAvif} sizes="100vw" />
      <source media="(max-width: 767px)" type="image/webp" srcSet={heroMobileWebp} sizes="100vw" />
      <source type="image/avif" srcSet={heroDesktopAvif} sizes="100vw" />
      <source type="image/webp" srcSet={heroDesktopWebp} sizes="100vw" />
      <img src={heroDesktop} alt={alt} width={1920} height={1080} fetchPriority="high" decoding="sync" className={className} />
    </picture>
  );
}