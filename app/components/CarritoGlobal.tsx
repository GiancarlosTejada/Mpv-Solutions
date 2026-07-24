'use client';

import React from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';

const EMAIL_DESTINO = 'sales@mpvelectric.com';

export default function CarritoGlobal() {
  const { carrito, isCartOpen, setIsCartOpen, actualizarCantidad, eliminarDelCarrito, totalItems, isMounted } = useCart();
  const router = useRouter();

  if (!isMounted) return null;

  const enviarOrdenGmail = () => {
    if (carrito.length === 0) return;

    const asunto = 'Nueva Solicitud de Pedido / Cotización - MPV Solutions';
    let cuerpoMensaje = 'Hola,\n\nMe gustaría solicitar una cotización para los siguientes materiales:\n\n';
    carrito.forEach(item => {
      cuerpoMensaje += `- ${item.marca} | ${item.nombre} | Medida: ${item.medida} | Cantidad: ${item.cantidad}\n`;
    });
    cuerpoMensaje += '\nQuedo a la espera de la confirmación.\nGracias.';

    // Abre directamente la ventana de "Redactar" de Gmail, ya rellenada,
    // en lugar de depender del programa de correo predeterminado de Windows.
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL_DESTINO)}&su=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpoMensaje)}`;

    window.open(gmailUrl, '_blank');
  };

  const irAlCatalogo = () => {
    setIsCartOpen(false);
    router.push('/catalogo');
  };

  return (
    <>
      <button
        onClick={() => setIsCartOpen(true)}
        aria-label="Abrir carrito"
        className="fixed bottom-8 right-8 z-40 bg-orange-500 hover:bg-orange-600 text-neutral-950 p-4 rounded-full shadow-lg shadow-orange-500/30 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-neutral-950 text-xs font-black w-6 h-6 flex items-center justify-center rounded-full shadow-md border-2 border-neutral-950">
            {totalItems}
          </span>
        )}
      </button>

      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div className={`fixed inset-y-0 right-0 z-50 w-full md:w-[450px] bg-neutral-900 border-l border-neutral-800 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>

        <div className="px-6 py-5 border-b border-neutral-800 flex justify-between items-center bg-neutral-950/50">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            Tu Pedido
            <span className="bg-orange-500 text-neutral-950 text-xs py-1 px-2.5 rounded-full">{totalItems}</span>
          </h2>
          <button onClick={() => setIsCartOpen(false)} aria-label="Cerrar carrito" className="text-neutral-400 hover:text-white p-1 rounded-md transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {carrito.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-5 px-4">
              <div className="bg-neutral-800/50 p-6 rounded-full border border-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-orange-500 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">El carrito está vacío</h3>
                <p className="text-sm text-neutral-400">Ve a revisar nuestros productos para comenzar con tu proyecto.</p>
              </div>
              <button onClick={irAlCatalogo} className="mt-2 w-full py-3.5 bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-neutral-950 font-bold rounded-xl transition-all duration-300">
                Ver Catálogo
              </button>
            </div>
          ) : (
            carrito.map(item => (
              <div key={item.id_unico} className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 flex flex-col gap-3">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h4 className="text-sm font-semibold text-white leading-tight">{item.nombre}</h4>
                    <p className="text-xs text-orange-500 mt-1">{item.marca} • {item.medida}</p>
                  </div>
                  <button onClick={() => eliminarDelCarrito(item.id_unico)} aria-label="Eliminar producto" className="text-neutral-500 hover:text-red-500 transition-colors shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center bg-neutral-900 border border-neutral-700 rounded-lg overflow-hidden">
                    <button onClick={() => actualizarCantidad(item.id_unico, -1)} className="px-4 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">-</button>
                    <span className="px-3 py-1 text-sm font-medium text-white min-w-[2rem] text-center">{item.cantidad}</span>
                    <button onClick={() => actualizarCantidad(item.id_unico, 1)} className="px-4 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {carrito.length > 0 && (
          <div className="p-6 border-t border-neutral-800 bg-neutral-950/80 backdrop-blur-sm">
            <button onClick={enviarOrdenGmail} className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-neutral-950 shadow-lg shadow-orange-500/20">
              <span>Finalizar y Cotizar</span>
            </button>
            <p className="text-center text-xs text-neutral-500 mt-4">
              Se abrirá Gmail con tu pedido listo — solo inicia sesión (si no lo estás) y presiona enviar.
            </p>
          </div>
        )}

      </div>
    </>
  );
}