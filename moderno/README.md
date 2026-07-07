# CuraDente — Versão Modernizada

Site sobre cura natural dos dentes, métodos alternativos para cáries e problemas de gengivas.

## 🆕 O que mudou

- **CSS moderno** com Grid, Flexbox, variáveis e design responsivo
- **JS consolidado** em um único `app.js` (search + breadcrumbs + back-to-top)
- **HTML5** padrão (XHTML migrado, Google Ads removido, comentários Wayback limpos)
- **Mobile-first** — funciona em qualquer dispositivo
- **Acessibilidade** — navegação por teclado, foco visível, ARIA labels

## Como usar

```bash
python -m http.server 8080
# Abra http://localhost:8080
```

## GitHub Pages

Para publicar no GitHub Pages:

1. Crie um repositório no GitHub
2. Envie o conteúdo desta pasta para a branch `main` (ou `gh-pages`)
3. Ative o GitHub Pages em Settings > Pages > branch `main` pasta `/`

Ou use a pasta raiz do repositório:

```bash
git init
git add .
git commit -m "CuraDente modernizado"
git remote add origin https://github.com/seu-usuario/seu-repo.git
git push -u origin main
```

## Estrutura

```
moderno/
├── index.html              ← Página principal
├── assets/
│   ├── scripts/app.js      ← JS consolidado (search + breadcrumbs + util)
│   └── templates/style.css ← CSS moderno responsivo
├── *.html                  ← 44 páginas de conteúdo
└── images/                 ← Assets originais
```

## Original vs Moderno

O conteúdo textual foi **preservado integralmente**. Apenas a apresentação (CSS/JS/estrutura HTML) foi modernizada.

## Licença

Copyright © 2018 CuraDente.com. Todos os Direitos Reservados.
