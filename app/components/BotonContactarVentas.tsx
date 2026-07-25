'use client';

import React from 'react';

const EMAIL_DESTINO = 'sales@mpvelectric.com';

export default function BotonContactarVentas() {
  const abrirCorreoInfo = () => {
    const asunto = 'Solicitud de Información - MPV Electric Solution';
    const cuerpoMensaje = 'Hola, quería tener más información sobre sus productos y servicios.\n\nQuedo atento/a a su respuesta.\nGracias.';

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL_DESTINO)}&su=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpoMensaje)}`;

    window.open(gmailUrl, '_blank');
  };

  return (
    <button
      onClick={abrirCorreoInfo}
      className="w-full sm:w-auto text-center bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white font-semibold px-8 py-4 rounded-lg transition"
    >
      Contactar Ventas
    </button>
  );
}