'use client';

import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Kiwify payment page
    window.open('https://pay.kiwify.com.br/BXkOCLE', '_blank');
  };

  const handleDirectCTA = () => {
    window.open('https://pay.kiwify.com.br/BXkOCLE', '_blank');
  };

  return (
    <section id="cta-final" className="py-20 bg-[#1a1a1a] border-t border-[#FFD700]/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Sua <span className="text-[#FFD700]">Liberdade Financeira</span> Começa Agora
          </h2>

          <p className="text-2xl text-[#cccccc] mb-12">
            Não espere o momento perfeito — <span className="text-[#FFD700] font-semibold">crie o seu momento</span>
          </p>

          {/* Lead Capture Form */}
          <div className="max-w-xl mx-auto mb-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Digite seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-4 rounded-full bg-[#252525] border border-[#FFD700] text-white placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              />
              <button
                type="submit"
                className="btn-gold w-full text-lg py-4"
              >
                Quero Começar Agora
              </button>
            </form>

            {isSubmitted && (
              <div className="mt-4 p-4 bg-[#FFD700]/20 border border-[#FFD700] rounded-lg">
                <p className="text-[#FFD700] font-semibold">
                  Sucesso! Em breve você receberá mais informações sobre o e-book.
                </p>
              </div>
            )}
          </div>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 text-[#FFD700] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-[#cccccc] text-sm">Conteúdo 100% Seguro</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 text-[#FFD700] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[#cccccc] text-sm">Acesso Imediato</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 text-[#FFD700] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-[#cccccc] text-sm">Suporte Dedicado</p>
            </div>
          </div>

          {/* Price Information */}
          <div className="mt-12 bg-[#0a0a0a] border border-[#FFD700]/30 rounded-lg p-8">
            <p className="text-[#cccccc] text-lg mb-2">Valor Promocional</p>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-[#888] line-through text-2xl">R$ 197,00</span>
              <span className="text-[#FFD700] text-5xl font-bold">R$ 97,00</span>
            </div>
            <p className="text-[#cccccc] mt-4">
              Oferta por tempo limitado • Acesso vitalício ao conteúdo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
