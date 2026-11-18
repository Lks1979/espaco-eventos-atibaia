# Espaço para Eventos em Atibaia

Site desenvolvido com Angular 21.

## Requisitos

- Node.js 20.19+, 22.12+ ou 24+
- npm

## Desenvolvimento

```bash
npm install
npm start
```

O servidor de desenvolvimento estará disponível em `http://localhost:4200`.

## Build de produção

```bash
npm run build
```

Os arquivos prontos para publicação serão gerados em `dist/espaco-eventos-atibaia/browser`.

## Publicar no Netlify

1. Importe o repositório no Netlify.
2. Configure o comando de build como `npm run build`.
3. Configure o diretório de publicação como `dist/espaco-eventos-atibaia/browser`.

## Alterar conteúdo e mídias

- Cada seção possui um componente próprio em `src/app/components`.
- As listas da galeria e dos vídeos ficam em seus respectivos componentes.
- `src/app/app.component.html` organiza as seções da página.
- Os estilos globais ficam em `style.css`.
- Para substituir fotos ou vídeos, mantenha os nomes dos arquivos dentro de `assets`.

Observação: a disponibilidade é consultada pelo WhatsApp; o site não possui agenda online.
