import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sea-cli-docs.vercel.app"),
  title: {
    default: "SEA CLI - Automação de Qualidade para Liferay",
    template: "%s | SEA CLI",
  },
  description:
    "Ferramenta de linha de comando para automatizar configuração de qualidade de código em projetos Liferay DXP",
  keywords: [
    "Liferay",
    "CLI",
    "ESLint",
    "Prettier",
    "Jest",
    "Husky",
    "SEA Tecnologia",
    "Quality Code",
  ],
  authors: [{ name: "SEA Tecnologia" }],
  openGraph: {
    title: "SEA CLI - Automação de Qualidade para Liferay",
    description:
      "Automatize a configuração de ESLint, Prettier, Jest e mais em projetos Liferay",
    type: "website",
    locale: "pt_BR",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
