import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Book, Github } from "lucide-react";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "🌊 SEA CLI",
      transparentMode: "top",
    },
    links: [
      {
        text: "Documentação",
        url: "/docs",
        icon: <Book className="w-5 h-5" />,
        active: "nested-url",
      },
      {
        text: "GitLab",
        url: "https://gitlab.seatecnologia.com.br",
        icon: <Github className="w-5 h-5" />,
        external: true,
      },
    ],
  };
}
