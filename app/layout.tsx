import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./components/Providers";
import CarritoGlobal from "./components/CarritoGlobal";
import BotonCotizar from "./components/BotonCotizar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MPV Electric Solution | Suministros Eléctricos Industriales",
  description: "Distribución y comercialización de materiales eléctricos certificados para minería, petróleo, gas y desarrollo industrial.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-neutral-950 text-neutral-100 min-h-screen flex flex-col`}>
        <Providers>

          <header className="fixed top-0 left-0 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 z-50">
            <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
              <a href="/" className="flex items-center gap-3 group">
                <img
                  src="/logo.webp"
                  alt="MPV Electric Solution Logo"
                  className="h-11 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
                />
                <span className="text-lg font-black text-white tracking-wider group-hover:text-yellow-500 transition-colors uppercase">
                  MPV Electric Solution
                </span>
              </a>

              <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-400">
                <a href="/" className="hover:text-white transition-colors">Inicio</a>
                <a href="/marcas" className="hover:text-white transition-colors">Marcas y Alianzas</a>
                <a href="/catalogo" className="hover:text-white transition-colors">Catálogo</a>
                <BotonCotizar />
              </nav>
            </div>
          </header>

          <main className="flex-grow pt-20">
            {children}
          </main>

          <footer className="border-t border-neutral-800 bg-neutral-950 py-12">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <img src="/logo.webp" alt="MPV Electric Solution Logo" className="h-7 w-auto object-contain grayscale opacity-60" />
                <p className="text-sm text-neutral-500">
                  &copy; {new Date().getFullYear()} MPV Electric Solution. Todos los derechos reservados.
                </p>
              </div>
              <div className="flex gap-6 text-sm text-neutral-400">
                <a href="/marcas" className="hover:text-white transition-colors">Marcas y Alianzas</a>
                <a href="/catalogo" className="hover:text-white transition-colors">Productos</a>
                <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
              </div>
            </div>
          </footer>

          <CarritoGlobal />

        </Providers>
      </body>
    </html>
  );
}