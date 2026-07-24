'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ProductoAgrupado } from '../catalogo/data';

type ItemCarrito = {
  id_unico: string;
  producto_id: string;
  nombre: string;
  marca: string;
  medida: string;
  cantidad: number;
  item_numero: number;
};

type CartContextType = {
  carrito: ItemCarrito[];
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  agregarAlCarrito: (producto: ProductoAgrupado, indiceMedida: number) => void;
  actualizarCantidad: (id_unico: string, delta: number) => void;
  eliminarDelCarrito: (id_unico: string) => void;
  totalItems: number;
  isMounted: boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito_mpv');
    if (carritoGuardado) {
      try {
        setCarrito(JSON.parse(carritoGuardado));
      } catch (error) {
        console.error('Error leyendo el carrito', error);
      }
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('carrito_mpv', JSON.stringify(carrito));
    }
  }, [carrito, isMounted]);

  const agregarAlCarrito = (producto: ProductoAgrupado, indiceMedida: number) => {
    const opcion = producto.opciones[indiceMedida];
    const id_unico = `${producto.id}-${opcion.item}`;

    setCarrito(prev => {
      const existe = prev.find(i => i.id_unico === id_unico);
      if (existe) {
        return prev.map(i => i.id_unico === id_unico ? { ...i, cantidad: i.cantidad + 1 } : i);
      }
      return [...prev, {
        id_unico,
        producto_id: producto.id,
        nombre: producto.nombre,
        marca: producto.marca,
        medida: opcion.medida,
        cantidad: 1,
        item_numero: opcion.item
      }];
    });
  };

  const actualizarCantidad = (id_unico: string, delta: number) => {
    setCarrito(prev => prev.map(item => {
      if (item.id_unico === id_unico) {
        return { ...item, cantidad: Math.max(0, item.cantidad + delta) };
      }
      return item;
    }).filter(item => item.cantidad > 0));
  };

  const eliminarDelCarrito = (id_unico: string) => {
    setCarrito(prev => prev.filter(item => item.id_unico !== id_unico));
  };

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <CartContext.Provider value={{
      carrito, isCartOpen, setIsCartOpen, agregarAlCarrito, actualizarCantidad, eliminarDelCarrito, totalItems, isMounted
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de un CartProvider");
  return context;
}