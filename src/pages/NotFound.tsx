import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SERVICES } from "../data/site";
import { SERVICE_SEO } from "../data/service-seo";
import { SEOHead } from "../components/SEOHead";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Página não encontrada | Skypaint"
        description="A página que procura não existe. Volte à página inicial da Skypaint."
      />
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 md:px-8 max-w-3xl mx-auto text-center min-h-[70vh] flex flex-col items-center justify-center">
        <span className="text-8xl sm:text-9xl font-bold text-outline-variant/20 font-headline">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-3">
          Página não encontrada
        </h1>
        <p className="text-on-surface-variant mb-8 max-w-md">
          A página que procura pode ter sido movida ou não existe. Veja os
          nossos serviços ou volte à página inicial.
        </p>
        <Link
          to="/"
          className="bg-gradient-primary text-on-primary-container px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 btn-magnetic mb-12"
        >
          <ArrowLeft size={18} />
          Voltar ao início
        </Link>

        <div className="w-full">
          <h2 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">
            Os nossos serviços
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {SERVICES.map((s, i) => (
              <Link
                key={s.id}
                to={`/${SERVICE_SEO[i].slug}`}
                className="px-4 py-2 rounded-full bg-surface-container-high text-sm text-on-surface hover:bg-surface-container-highest transition-colors"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
