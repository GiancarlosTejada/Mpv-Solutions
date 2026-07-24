'use client';

import React, { useState, useMemo } from 'react';
import { catalogoAgrupado, ProductoAgrupado } from './data';
import { useCart } from '../context/CartContext';

export default function CatalogoPage() {
  const { agregarAlCarrito } = useCart();

  const [busqueda, setBusqueda] = useState('');
  const [marcaSeleccionada, setMarcaSeleccionada] = useState('Todas');
  const [tabActivo, setTabActivo] = useState('Todas');
  const [medidasSeleccionadas, setMedidasSeleccionadas] = useState<Record<string, number>>({});
  const [agregado, setAgregado] = useState<string | null>(null);

  const familias = useMemo(() => {
    const unicas = Array.from(new Set(catalogoAgrupado.map(p => p.familia)));
    return ['Todas', ...unicas];
  }, []);

  const marcas = useMemo(() => {
    const unicas = Array.from(new Set(catalogoAgrupado.map(p => p.marca)));
    return ['Todas', ...unicas.sort()];
  }, []);

  const productosFiltrados = useMemo(() => {
    return catalogoAgrupado.filter(prod => {
      const coincideBusqueda = prod.nombre.toLowerCase().includes(busqueda.toLowerCase());
      const coincideMarca = marcaSeleccionada === 'Todas' || prod.marca === marcaSeleccionada;
      const coincideFamilia = tabActivo === 'Todas' || prod.familia === tabActivo;
      return coincideBusqueda && coincideMarca && coincideFamilia;
    });
  }, [busqueda, marcaSeleccionada, tabActivo]);

  const handleCambioMedida = (productoId: string, indexMedida: number) => {
    setMedidasSeleccionadas(prev => ({ ...prev, [productoId]: indexMedida }));
  };

  const handleAgregar = (producto: ProductoAgrupado) => {
    const indiceSeleccionado = medidasSeleccionadas[producto.id] || 0;
    agregarAlCarrito(producto, indiceSeleccionado);
    setAgregado(producto.id);
    setTimeout(() => setAgregado(null), 1200);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans pb-24">
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Catálogo de <span className="text-orange-500">Materiales</span>
          </h1>
          <p className="text-neutral-400 mt-2">Selecciona los productos y sus medidas para armar tu orden.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar productos por nombre..."
              className="w-full bg-neutral-900 border border-neutral-800 text-neutral-200 placeholder-neutral-500 rounded-lg px-5 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
          <div className="w-full md:w-72">
            <select
              className="w-full bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-lg px-5 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all cursor-pointer"
              value={marcaSeleccionada}
              onChange={(e) => setMarcaSeleccionada(e.target.value)}
            >
              {marcas.map(marca => (
                <option key={marca} value={marca}>{marca === 'Todas' ? 'Todas las Marcas' : marca}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-2 pb-2 mb-8 border-b border-neutral-800 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {familias.map(familia => (
            <button
              key={familia}
              onClick={() => setTabActivo(familia)}
              className={`whitespace-nowrap px-5 py-3 rounded-t-lg font-medium transition-all duration-200 border-b-2 ${
                tabActivo === familia
                  ? 'bg-neutral-900 border-orange-500 text-orange-500'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50'
              }`}
            >
              {familia}
            </button>
          ))}
        </div>

        {productosFiltrados.length === 0 ? (
          <div className="text-center py-20 text-neutral-500 bg-neutral-900 rounded-2xl border border-neutral-800">
            <p className="text-xl">No se encontraron productos con estos filtros.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
                <div className="mb-6">
                  <span className="text-[11px] font-bold tracking-widest text-orange-500 uppercase mb-3 block">{producto.marca}</span>
                  <h2 className="text-lg font-semibold text-white leading-snug">{producto.nombre}</h2>
                </div>

                <div className="mt-auto space-y-4">
                  {producto.opciones.length > 1 ? (
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Seleccionar medida</label>
                      <select
                        className="w-full bg-neutral-950 border border-neutral-700 text-sm text-neutral-200 rounded-lg p-2.5 focus:outline-none focus:border-orange-500 cursor-pointer transition-colors"
                        value={medidasSeleccionadas[producto.id] || 0}
                        onChange={(e) => handleCambioMedida(producto.id, Number(e.target.value))}
                      >
                        {producto.opciones.map((opcion, index) => (
                          <option key={opcion.item} value={index}>{opcion.medida}</option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Medida</span>
                      <div className="w-full bg-neutral-950/50 border border-neutral-800 text-sm text-neutral-300 rounded-lg p-2.5">
                        {producto.opciones[0].medida}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => handleAgregar(producto)}
                    className={`w-full font-bold py-3 rounded-lg transition-all duration-200 active:scale-[0.98] ${
                      agregado === producto.id ? 'bg-green-600 text-white' : 'bg-orange-500 hover:bg-orange-600 text-neutral-950'
                    }`}
                  >
                    {agregado === producto.id ? '✓ Agregado' : 'Agregar al carrito'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}