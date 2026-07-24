'use client';

import React, { useState } from 'react';
import BotonCotizar from './BotonCotizar';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cerrarMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full max-w-[100vw] bg-neutral-950/95 md:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 z-50">
      <div className="w-full px-4 md:container md:mx-auto md:px-8 h-20 flex items-center justify-between gap-2">

        <a href="/" className="flex items-center gap-2 md:gap-3 group shrink-0 min-w-0" onClick={cerrarMenu}>
          <img
            src="/logo.webp"
            alt="MPV Electric Solution Logo"
            className="h-9 md:h-11 w-auto object-contain shrink-0 transition-transform group-hover:scale-105 duration-300"
          />
          <span className="hidden sm:inline text-base md:text-lg font-black text-white tracking-wider group-hover:text-yellow-500 transition-colors uppercase whitespace-nowrap truncate">
            MPV Electric Solution
          </span>
        </a>

        {/* Menú de escritorio */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-400 shrink-0">
          <a href="/" className="hover:text-white transition-colors">Inicio</a>
          <a href="/marcas" className="hover:text-white transition-colors">Marcas y Alianzas</a>
          <a href="/catalogo" className="hover:text-white transition-colors">Catálogo</a>
          <BotonCotizar />
        </nav>

        {/* Botón hamburguesa — ahora con fondo propio para que SIEMPRE sea visible */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden shrink-0 flex items-center justify-center w-11 h-11 rounded-lg bg-neutral-800 border border-neutral-700 text-white active:bg-neutral-700"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-4 pb-6 pt-2 bg-neutral-950 border-t border-neutral-800 text-sm font-semibold text-neutral-300 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <a href="/" onClick={cerrarMenu} className="py-3 px-3 rounded-lg hover:bg-neutral-900 hover:text-white transition-colors">
            Inicio
          </a>
          <a href="/marcas" onClick={cerrarMenu} className="py-3 px-3 rounded-lg hover:bg-neutral-900 hover:text-white transition-colors">
            Marcas y Alianzas
          </a>
          <a href="/catalogo" onClick={cerrarMenu} className="py-3 px-3 rounded-lg hover:bg-neutral-900 hover:text-white transition-colors">
            Catálogo
          </a>
          <div className="pt-2 px-3" onClick={cerrarMenu}>
            <BotonCotizar />
          </div>
        </nav>
      )}
    </header>
  );
}