'use client';

import React from 'react';
import { useCart } from '../context/CartContext';

export default function BotonCotizar() {
  const { setIsCartOpen } = useCart();
  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20"
    >
      Cotizar Proyecto
    </button>
  );
}