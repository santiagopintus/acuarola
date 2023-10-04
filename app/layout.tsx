import "./App.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MPProvider from "./components/context/MPContext";
import Header from "./components/Header";
import ProductsFetcher from "./components/fetcher/ProductsFetcher";
import ProductsProvider from "./components/context/ProductsContext";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acuarola",
  description: "Consigue arte original en acuarelas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="favicon.svg" type="image/svg" />
      </head>
      <body className={inter.className}>
        <ProductsProvider>
          <MPProvider>
            <Header />
            {children}
            <Footer />
            {/* UTILS */}
            <ProductsFetcher />
          </MPProvider>
        </ProductsProvider>
      </body>
    </html>
  );
}
