import Link from "next/link";
import { ArrowRight, Github, Book, Zap, Shield, TestTube } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 px-4 py-16">
      {/* Hero Section */}
      <div className="max-w-4xl mb-16">
        <div className="text-6xl mb-6">🌊</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          SEA CLI
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Automação de Qualidade de Código para Liferay DXP
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Configure ESLint, Prettier, Husky, Jest e scripts de automação em
          minutos. O que levaria horas para configurar manualmente, o SEA CLI
          faz automaticamente.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link
            href="/docs/getting-started/quickstart"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
          >
            Começar Agora
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:bg-accent text-foreground font-medium rounded-lg transition-colors"
          >
            <Book className="w-5 h-5" />
            Documentação
          </Link>
          <a
            href="https://gitlab.seatecnologia.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:bg-accent rounded-lg font-medium transition-colors"
          >
            <Github className="w-5 h-5" />
            GitLab
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mb-16">
        <div className="p-6 rounded-lg border border-border bg-card">
          <Zap className="w-12 h-12 text-cyan-500 mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Automação Completa</h3>
          <p className="text-muted-foreground">
            ESLint, Prettier, Husky, Jest e scripts configurados automaticamente
          </p>
        </div>

        <div className="p-6 rounded-lg border border-border bg-card">
          <Shield className="w-12 h-12 text-cyan-500 mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Validação Automática</h3>
          <p className="text-muted-foreground">
            Hooks pre-commit garantem qualidade antes de cada commit
          </p>
        </div>

        <div className="p-6 rounded-lg border border-border bg-card">
          <TestTube className="w-12 h-12 text-cyan-500 mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Testes Integrados</h3>
          <p className="text-muted-foreground">
            Jest + Testing Library pré-configurados em cada módulo
          </p>
        </div>
      </div>

      {/* Quick Install */}
      <div className="max-w-3xl w-full p-6 rounded-lg border border-border bg-card">
        <h2 className="text-2xl font-bold mb-4">Instalação Rápida</h2>
        <div className="text-left">
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-2">
            <code>npm i -g @sea-quality-code/sea-cli</code>
          </pre>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>sea-cli init</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
