# SEA CLI - Documentação

Documentação completa do SEA CLI construída com [Fumadocs](https://fumadocs.dev).

## Sobre

Esta é a documentação oficial do **SEA CLI** - ferramenta de automação de qualidade de código para projetos Liferay DXP desenvolvida pela **SEA Tecnologia**.

## Desenvolvimento

### Pré-requisitos

- Node.js 16+
- pnpm (recomendado) ou npm

### Instalação

```bash
# Instalar dependências
pnpm install
# ou
npm install
```

### Executar em desenvolvimento

```bash
pnpm dev
# ou
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

### Build de produção

```bash
pnpm build
# ou
npm run build
```

### Iniciar servidor de produção

```bash
pnpm start
# ou
npm start
```

## Estrutura do Projeto

```
sea-cli-docs/
├── app/                          # Aplicação Next.js
│   ├── (home)/                  # Landing page
│   ├── docs/                    # Layout da documentação
│   ├── layout.tsx               # Layout root
│   └── global.css               # Estilos globais (tema SEA)
├── content/
│   └── docs/                    # Conteúdo MDX da documentação
│       ├── getting-started/     # Guias de início
│       ├── guides/              # Guias práticos
│       ├── features/            # Documentação de features
│       ├── cli-reference/       # Referência de comandos
│       ├── api-reference/       # Referência de APIs
│       ├── workflows/           # Workflows de desenvolvimento
│       ├── advanced/            # Tópicos avançados
│       ├── faq/                 # FAQ
│       └── changelog/           # Changelog e roadmap
├── components/                   # Componentes React
├── lib/                         # Utilitários
│   ├── source.ts               # Configuração de source
│   └── layout.shared.tsx       # Configuração do layout
├── mdx-components.tsx          # Componentes MDX customizados
├── source.config.ts            # Configuração Fumadocs
└── next.config.mjs             # Configuração Next.js
```

## Adicionando Conteúdo

### Criar nova página

1. Crie um arquivo `.mdx` na pasta apropriada em `content/docs/`
2. Adicione frontmatter:

```mdx
---
title: Título da Página
description: Descrição da página
---

# Conteúdo aqui
```

3. Adicione referência no `meta.json` da pasta

### Componentes disponíveis

```mdx
<Callout type="info">Informação importante</Callout>

<Steps>
### Passo 1
Descrição

### Passo 2

Descrição

</Steps>

<Cards>
  <Card title="Título" href="/link">
    Descrição
  </Card>
</Cards>
```

## Scripts Disponíveis

```bash
pnpm dev              # Desenvolvimento
pnpm build            # Build de produção
pnpm start            # Servidor de produção
pnpm types:check      # Verificar tipos TypeScript
pnpm lint             # Lint do código
```

## Recursos

- [Fumadocs Documentation](https://fumadocs.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)

## Contribuindo

Esta documentação é mantida pela **SEA Tecnologia**. Para contribuir:

1. Faça fork do repositório
2. Crie uma branch para sua feature
3. Faça commit das mudanças
4. Abra um Pull Request

## 📄 Licença

MIT © SEA Tecnologia
