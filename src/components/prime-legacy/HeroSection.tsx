'use client';

export default function HeroSection() {
  const scrollToCTA = () => {
    const element = document.getElementById('cta-final');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] pt-20">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Aprenda a Vender Online e<br />
          <span className="text-[#FFD700]">Conquiste Sua Liberdade Financeira</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#cccccc] mb-8 max-w-4xl mx-auto">
          O guia completo para quem quer começar no mercado digital e transformar conhecimento em renda real
        </p>

        <button
          onClick={scrollToCTA}
          className="btn-gold text-lg px-8 py-4"
        >
          Quero Começar Agora
        </button>

        {/* E-book Exclusive Features Card */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="card-prime text-left">
            <div className="flex items-start space-x-4">
              {/* Book Icon */}
              <div className="flex-shrink-0">
                <svg
                  className="w-12 h-12 text-[#FFD700]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>

              {/* Features List */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">E-book Exclusivo</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#FFD700] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#cccccc]">Guia de Marketing Digital</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#FFD700] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#cccccc]">Estratégias de Vendas Online</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#FFD700] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#cccccc]">Passo a Passo Completo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
