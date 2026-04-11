import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  jsonLd?: object;
}

/**
 * Updates document <head> meta tags for SEO.
 * Lightweight alternative to react-helmet — no deps needed.
 */
export function SEOHead({
  title,
  description,
  canonical,
  keywords,
  jsonLd,
}: SEOHeadProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute("content", description);

    // Keywords
    if (keywords) {
      let kw = document.querySelector('meta[name="keywords"]');
      if (!kw) {
        kw = document.createElement("meta");
        kw.setAttribute("name", "keywords");
        document.head.appendChild(kw);
      }
      kw.setAttribute("content", keywords);
    }

    // Canonical
    if (canonical) {
      let link = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // OG tags
    const setOg = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="og:${prop}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", `og:${prop}`);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setOg("title", title);
    setOg("description", description);
    if (canonical) setOg("url", canonical);

    // JSON-LD
    if (jsonLd) {
      // Remove previous service-specific LD
      const prev = document.getElementById("page-jsonld");
      if (prev) prev.remove();
      const script = document.createElement("script");
      script.id = "page-jsonld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
      return () => {
        script.remove();
      };
    }
  }, [title, description, canonical, keywords, jsonLd]);

  return null;
}
