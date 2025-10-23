'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Santos",
      text: "Eu achava impossível vender online, até aplicar as estratégias da Prime Legacy",
      role: "Empreendedora Digital"
    },
    {
      name: "Carlos Oliveira",
      text: "Com o método certo, consegui fazer minhas primeiras vendas em poucos dias",
      role: "Vendedor Online"
    },
    {
      name: "Ana Costa",
      text: "Agora entendo o poder do digital. Meu resultado mudou completamente",
      role: "Afiliada de Sucesso"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Depoimentos e <span className="text-[#FFD700]">Resultados</span>
          </h2>
          <p className="text-xl text-[#cccccc] max-w-3xl mx-auto">
            Veja o que nossos alunos estão dizendo sobre a transformação em suas vidas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-testimonial">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-[#1a1a1a] border-2 border-[#FFD700] flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-[#cccccc] text-center mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Name and Role */}
              <div className="text-center">
                <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                <p className="text-[#FFD700] text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#FFD700] mb-2">5000+</div>
            <p className="text-[#cccccc] text-lg">Alunos Transformados</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#FFD700] mb-2">87%</div>
            <p className="text-[#cccccc] text-lg">Taxa de Sucesso</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#FFD700] mb-2">250%</div>
            <p className="text-[#cccccc] text-lg">Aumento Médio de Renda</p>
          </div>
        </div>
      </div>
    </section>
  );
}
