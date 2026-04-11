import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Phone, MessageCircle, MapPin } from "lucide-react";
import { SERVICES, SITE } from "../data/site";
import { SERVICE_SEO, SERVICE_SLUG_MAP } from "../data/service-seo";
import { SEOHead } from "../components/SEOHead";
import { Reveal } from "../components/Reveal";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import FloatingCTA from "../components/FloatingCTA";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();

  const seoIdx = SERVICE_SEO.findIndex((s) => s.slug === slug);
  const seo = SERVICE_SEO[seoIdx];
  const service = SERVICES[seoIdx];

  if (!seo || !service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-surface text-on-surface">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
            <Link to="/" className="text-secondary hover:underline">
              Voltar à página inicial
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const canonical = `https://skypaint.pt/${seo.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: seo.metaDescription,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Skypaint",
      telephone: SITE.phoneTel,
      url: "https://skypaint.pt",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cascais",
        addressRegion: "Lisboa",
        addressCountry: "PT",
      },
    },
    areaServed: [
      { "@type": "City", name: "Cascais" },
      { "@type": "City", name: "Estoril" },
      { "@type": "City", name: "Oeiras" },
      { "@type": "City", name: "Sintra" },
      { "@type": "City", name: "Lisboa" },
    ],
    url: canonical,
  };

  // Get other services for the "more services" section
  const otherServices = SERVICES.filter((_, i) => i !== seoIdx).slice(0, 3);

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.metaDescription}
        canonical={canonical}
        keywords={seo.keywords}
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="pt-24 pb-20 bg-surface min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-8">
          <nav
            className="flex items-center gap-2 text-xs text-on-surface-variant"
            aria-label="Breadcrumb"
          >
            <Link
              to="/"
              className="hover:text-secondary transition-colors"
            >
              Início
            </Link>
            <span>/</span>
            <Link
              to="/#servicos"
              className="hover:text-secondary transition-colors"
            >
              Serviços
            </Link>
            <span>/</span>
            <span className="text-on-surface">{service.title}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 sm:mb-24">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-secondary text-sm font-bold mb-6 hover:gap-3 transition-all"
            >
              <ArrowLeft size={16} />
              Voltar
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="label-md text-secondary">{service.number}</span>
              <span className="w-8 h-px bg-secondary/40" />
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
              {seo.h1}
            </h1>

            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-3xl">
              {seo.longDescription}
            </p>
          </Reveal>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 sm:mb-24">
          <Reveal delay={100}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              O que incluímos
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.bullets.map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-3 p-4 rounded-xl bg-surface-container-high"
                >
                  <CheckCircle
                    size={18}
                    className="text-secondary shrink-0 mt-0.5"
                  />
                  <span className="text-on-surface text-sm sm:text-base">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Gallery */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 sm:mb-24">
          <Reveal delay={150}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Galeria de projetos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {service.gallery.map((src) => (
                <div
                  key={src}
                  className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-high img-zoom kinetic-hover"
                >
                  <img
                    src={src}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 sm:mb-24">
          <Reveal>
            <div className="glass-panel rounded-2xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                  Precisa de {service.title.toLowerCase()}?
                </h2>
                <p className="text-on-surface-variant mb-8 max-w-xl">
                  Peça um orçamento gratuito. A visita técnica é sem compromisso
                  e respondemos em até 24 horas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="bg-gradient-primary text-on-primary-container px-8 py-4 rounded-full font-bold text-lg btn-magnetic inline-flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    {SITE.phoneDisplay}
                  </a>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-surface-bright/20 border border-outline-variant/20 text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 hover:bg-surface-bright/40 transition-all"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>

                <div className="flex items-center gap-2 mt-6 text-xs text-on-surface-variant">
                  <MapPin size={12} className="text-secondary" />
                  Atendimento em Cascais, Estoril, Oeiras, Sintra e toda Lisboa
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Other services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Outros serviços
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {otherServices.map((s) => {
                const otherSlug =
                  SERVICE_SLUG_MAP[s.id];
                return (
                  <Link
                    key={s.id}
                    to={`/${otherSlug}`}
                    className="glass-panel rounded-xl p-6 group kinetic-hover block"
                  >
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 img-zoom">
                      <img
                        src={s.cover}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="label-md text-secondary mb-2 block">
                      {s.number}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {s.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2">
                      {s.short}
                    </p>
                    <div className="flex items-center gap-1 text-secondary text-sm font-bold mt-4 group-hover:gap-2 transition-all">
                      Ver detalhes
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
