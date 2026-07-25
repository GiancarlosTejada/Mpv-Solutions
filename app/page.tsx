import BotonContactarVentas from './components/BotonContactarVentas';

export default function Home() {
  const marcas = [
    "SCI", "CROUSE-HINDS", "EATON", "CANTEX", "SOUTHWIRE",
    "PENN CONDUIT", "SYP", "THOMPSON", "FLOWCOM", "APPLETON",
    "FLORIDA STRUT", "SEPCO", "PRODUIT", "COPEFLEX", "COPLEFLEX", "IPEX"
  ];

  const industrias = [
    {
      titulo: "Minería de Alta Exigencia",
      descripcion: "Suministramos canalizaciones, conectores y cables de alto rendimiento diseñados para resistir ambientes corrosivos, vibraciones extremas y el desgaste propio de la actividad subterránea y a tajo abierto.",
      imagen: "/min.jpg"
    },
    {
      titulo: "Oil & Gas (Petróleo y Gas)",
      descripcion: "Equipamiento eléctrico con certificación antiexplosión (NEMA/IEC) indispensable para refinerías, plataformas y plantas de compresión, asegurando la contención absoluta de riesgos.",
      imagen: "/oil.png"
    },
    {
      titulo: "Infraestructura de Energía",
      descripcion: "Soluciones para subestaciones, tendidos eléctricos y proyectos de distribución de media y baja tensión. Materiales resistentes a la intemperie que garantizan la continuidad del flujo eléctrico.",
      imagen: "/elec.jpg"
    },
    {
      titulo: "Desarrollo Industrial Pesado",
      descripcion: "Soporte integral para plantas cementeras, siderúrgicas, complejos logísticos y puertos. Sistemas de montaje rápidos, duraderos y normalizados bajo estándares internacionales de seguridad.",
      imagen: "/des.webp"
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carrusel-activo {
          display: flex;
          width: max-content;
          animation: marquee-infinite 75s linear infinite;
        }
      `}} />

      {/* SECCIÓN HERO */}
      <section className="relative overflow-hidden pt-12 md:pt-24 pb-16 md:pb-32">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Equipa tus Proyectos con <span className="text-yellow-500">MPV Electric Solution</span>
            </h1>
            <p className="text-base md:text-xl text-neutral-400 mb-8 leading-relaxed">
              Distribución y comercialización de materiales eléctricos certificados para minería, petróleo, gas y desarrollo industrial.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="/catalogo" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition">
                Explorar Catálogo
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </a>
              <BotonContactarVentas />
            </div>
          </div>

          {/* Imagen Derecha */}
          <div className="relative flex justify-center items-center h-[300px] sm:h-[380px] md:h-[450px] mt-4 lg:mt-0">
             <div className="absolute z-10 right-0 sm:right-2 top-2 md:top-4 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-yellow-500 rounded-lg shadow-2xl transform rotate-12 flex items-center justify-center p-4 md:p-6 text-neutral-900 border-4 border-yellow-400">
                <div className="font-black text-xl sm:text-2xl md:text-4xl text-center transform -rotate-12">MPV<br/>CERTIFIED</div>
             </div>

             <div className="group absolute z-20 left-2 sm:left-4 bottom-2 md:bottom-4 w-52 h-64 sm:w-64 sm:h-80 md:w-80 md:h-96 bg-neutral-800 rounded-lg shadow-2xl transform -rotate-6 border border-neutral-700 p-4 md:p-6 flex flex-col justify-between">
                <div className="text-white font-bold text-base md:text-xl drop-shadow-md z-10">Industrial Grade</div>

                <div className="relative w-full h-2/3 bg-neutral-900 rounded-md overflow-hidden border border-neutral-700/50 shadow-inner">
                  <img
                    src="/cable.webp"
                    alt="Cables Industriales MPV Electric Solution"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent pointer-events-none" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: MARCAS EN MOVIMIENTO INFINITO */}
      <section className="border-y border-neutral-800 bg-neutral-950/40 py-8 md:py-10 overflow-hidden w-full">
        <div className="w-full">
          <p className="text-neutral-500 text-center text-xs font-semibold tracking-widest uppercase mb-6 px-4">
            Distribuidor Autorizado de Marcas Líderes
          </p>

          <div className="relative w-full overflow-hidden flex">
            <div className="carrusel-activo flex items-center gap-8 md:gap-16 pr-8 md:pr-16">
              {[...marcas, ...marcas, ...marcas].map((marca, index) => (
                <span
                  key={index}
                  className="text-lg md:text-2xl font-black text-neutral-400 hover:text-white tracking-wide transition-colors uppercase whitespace-nowrap cursor-default"
                >
                  {marca}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: SOLUCIONES POR INDUSTRIA */}
      <section id="industrias" className="py-16 md:py-32 bg-neutral-900/30">
        <div className="container mx-auto px-4 md:px-8">

          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-3">
              Especialización Estratégica
            </h2>
            <p className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
              Soluciones de Ingeniería por Industria
            </p>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              Suministramos materiales críticos que cumplen con las normativas más exigentes a nivel global.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrias.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-neutral-950 border border-neutral-800 rounded-xl h-auto min-h-[300px] md:h-[420px] p-6 md:p-8 transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1 flex flex-col justify-end overflow-hidden"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="w-full h-full object-cover opacity-25 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                    {item.descripcion}
                  </p>
                  <div className="flex items-center text-xs font-semibold text-neutral-500 group-hover:text-white transition-colors gap-1">
                    Ver Soluciones
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECCIÓN CARACTERÍSTICAS */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">

          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Soluciones a las Exigencias Industriales
            </h2>
            <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
              En MPV Electric Solution, enfrentamos los retos únicos del sector energético e industrial. Desde equipos certificados hasta logística avanzada, estamos dedicados a ayudarte a superar obstáculos y alcanzar tus metas operativas.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

            <div>
              <div className="text-orange-500 mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Equipos Dedicados</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Benefíciate de nuestros equipos comprometidos que aseguran que tu éxito sea personal. Cuenta con soporte experto y resultados excepcionales en cada etapa de tu proyecto.
              </p>
            </div>

            <div>
              <div className="text-orange-500 mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Calidad Certificada</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Encuentra soluciones certificadas y accesibles. Nuestros productos simplifican las compras y mantienen los proyectos dentro del presupuesto sin sacrificar seguridad.
              </p>
            </div>

            <div>
              <div className="text-orange-500 mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Documentación Técnica</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Integra con facilidad utilizando nuestras exhaustivas guías y fichas técnicas. Logra una adopción perfecta de productos con nuestro conjunto completo de documentación.
              </p>
            </div>

            <div>
              <div className="text-orange-500 mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Logística Eficiente</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Experimenta la diferencia con nuestra red de distribución. Garantizamos entregas oportunas y un suministro confiable directamente a tus instalaciones operativas.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}