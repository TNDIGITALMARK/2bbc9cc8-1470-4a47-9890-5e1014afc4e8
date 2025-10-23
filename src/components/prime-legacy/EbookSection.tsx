'use client';

export default function EbookSection() {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/BXkOCLE', '_blank');
  };

  return (
    <section id="ebook" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre o <span className="text-[#FFD700]">E-book</span>
          </h2>
          <p className="text-xl text-[#cccccc] max-w-3xl mx-auto">
            Um guia completo com tudo que você precisa para começar a vender online e construir sua renda digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Feature Card 1 */}
          <div className="card-prime">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Como Escolher Produtos Certos</h3>
                <p className="text-[#cccccc]">
                  Descubra as estratégias para identificar produtos rentáveis e nichos lucrativos no mercado digital
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="card-prime">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Estratégias Práticas de Vendas</h3>
                <p className="text-[#cccccc]">
                  Técnicas comprovadas para aumentar suas conversões e escalar suas vendas online rapidamente
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="card-prime">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Como Atrair Clientes nas Redes</h3>
                <p className="text-[#cccccc]">
                  Aprenda a usar as redes sociais para construir audiência e gerar vendas consistentes
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 4 */}
          <div className="card-prime">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Tráfego Orgânico e Pago</h3>
                <p className="text-[#cccccc]">
                  Passo a passo completo para dominar tráfego gratuito e investir corretamente em anúncios
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 5 */}
          <div className="card-prime md:col-span-2">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Como Construir Renda Real e Sustentável</h3>
                <p className="text-[#cccccc]">
                  Sistema completo para transformar sua operação digital em uma fonte de renda consistente e escalável
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleCTAClick}
            className="btn-gold text-lg px-8 py-4"
          >
            Começar Agora
          </button>
        </div>

        {/* About Prime Legacy */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-[#0a0a0a] rounded-lg p-8 md:p-12 border border-[#FFD700]/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Sobre a <span className="text-[#FFD700]">Prime Legacy</span>
            </h2>
            <p className="text-lg text-[#cccccc] leading-relaxed mb-6">
              A Prime Legacy é uma marca dedicada a transformar vidas através da educação digital. Nossa missão é capacitar pessoas comuns a alcançarem a liberdade financeira através do empreendedorismo online.
            </p>
            <p className="text-lg text-[#cccccc] leading-relaxed mb-6">
              Acreditamos que todos merecem a oportunidade de construir um negócio digital lucrativo, independentemente de sua experiência prévia. Por isso, desenvolvemos métodos práticos e estratégias comprovadas que realmente funcionam no mercado digital brasileiro.
            </p>
            <p className="text-lg text-[#cccccc] leading-relaxed">
              Com a Prime Legacy, você não está apenas comprando um e-book - está entrando para uma comunidade de empreendedores digitais que estão conquistando sua liberdade financeira e construindo o futuro que sempre sonharam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
