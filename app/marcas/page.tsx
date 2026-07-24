import React from 'react';

export default function MarcasPage() {
  // Información detallada de las marcas
  const detalleMarcas = [
    { nombre: "SCI", desc: "Especialistas en sistemas de sellado, empaquetaduras y soluciones de aislamiento crítico para fluidos y gases en alta presión." },
    { nombre: "CROUSE-HINDS", desc: "Líder global en envolventes, tableros y luminarias con certificación antiexplosión (Proof), ideales para áreas clasificadas de Oil & Gas." },
    { nombre: "EATON", desc: "Gigante industrial en gestión de energía, interruptores de potencia, subestaciones y sistemas de distribución eléctrica en media y baja tensión." },
    { nombre: "CANTEX", desc: "Fabricante de tuberías conduit de PVC rígido, accesorios y canalizaciones enterradas de alta durabilidad para proyectos de infraestructura." },
    { nombre: "SOUTHWIRE", desc: "Uno de los mayores productores de cableado del mundo; ofrece conductores de cobre y aluminio para transmisión y distribución de energía pesada." },
    { nombre: "PENN CONDUIT", desc: "Especialistas en tuberías de acero galvanizado rígido (RMC) y EMT que garantizan la máxima protección mecánica de los conductores eléctricos." },
    { nombre: "SYP", desc: "Sistemas de soportería y canalizaciones metálicas diseñadas para resistir cargas mecánicas severas en plantas de procesamiento y minería." },
    { nombre: "THOMPSON", desc: "Sistemas de protección contra descargas atmosféricas (pararrayos) y mallas de puesta a tierra indispensables para la seguridad de activos industriales." },
    { nombre: "FLOWCOM", desc: "Soluciones de instrumentación y control de flujo industrial, conectores y acoples rápidos para instrumentación de procesos automatizados." },
    { nombre: "FLORIDA STRUT", desc: "Sistemas de perfiles Strut, abrazaderas y herrajes modulares galvanizados para el montaje rápido y seguro de bandejas y tuberías." },
    { nombre: "SEPCO", desc: "Conectores y accesorios metálicos de precisión para tuberías conduit, asegurando la continuidad eléctrica de la canalización." },
    { nombre: "PRODUIT", desc: "Conductores eléctricos especiales y cables de control apantallados para automatización industrial y señales libres de interferencias." },
    { nombre: "COPEFLEX / COPLEFLEX", desc: "Tuberías flexibles herméticas a líquidos (Liquidtight) y conectores diseñados para absorber vibraciones en motores y maquinaria pesada." },
    { nombre: "IPEX", desc: "Sistemas integrados de tuberías plásticas industriales (PVC/CPVC) para el manejo de fluidos de proceso y canalizaciones eléctricas avanzadas." }
  ];

  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Encabezado de la página */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Con las Marcas que <span className="text-yellow-500">Trabajamos</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Garantizamos la continuidad y seguridad de tus operaciones distribuyendo únicamente componentes certificados bajo los más estrictos estándares internacionales (UL, NEMA, IEC).
          </p>
        </div>

        {/* Cuadrícula de Marcas con sus Descripciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detalleMarcas.map((marca, idx) => (
            <div 
              key={idx} 
              className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl hover:border-yellow-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-black text-white tracking-wide uppercase">
                    {marca.nombre}
                  </h2>
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {marca.desc}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-neutral-800/60 flex justify-between items-center text-xs font-semibold text-neutral-500">
                <span>LINEA CERTIFICADA</span>
                <span className="text-neutral-400">MPV Solutions</span>
              </div>
            </div>
          ))}
        </div>

        {/* Botón de regreso */}
        <div className="mt-16 text-center">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 px-6 py-3 rounded-lg font-semibold transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-180"><path d="m9 18 6-6-6-6"/></svg>
            Volver al Inicio
          </a>
        </div>

      </div>
    </div>
  );
}