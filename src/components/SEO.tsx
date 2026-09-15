import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

/** Lightweight per-page SEO — sets document title & meta description without extra dependencies. */
export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    const prevContent = meta.getAttribute("content");
    meta.setAttribute("content", description);
    return () => {
      if (prevContent) meta?.setAttribute("content", prevContent);
    };
  }, [title, description]);

  return null;
}
