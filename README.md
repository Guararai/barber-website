# Distrito Barber 💈

**[Ver site ao vivo](https://distrito-barber.web.app/)**

> ⚠️ **Nota:** Este é um projeto de uma barbearia **fictícia**, criado exclusivamente para fins de estudo e demonstração de boas práticas de desenvolvimento web, alcançando **nota máxima no Google PageSpeed Insights**.

📊 **[Ver resultado no PageSpeed](https://pagespeed.web.dev/analysis/https-distrito-barber-web-app/chpg3e1rtm?form_factor=mobile)**

---

## Sobre o Projeto

O Distrito Barber é um site institucional de página única (SPA) desenvolvido com foco em **performance**, **SEO** e **acessibilidade**. O objetivo principal foi aplicar e demonstrar todas as boas práticas de desenvolvimento web moderno, resultando em pontuação máxima nas quatro categorias do Google PageSpeed Insights:

- **Performance** — 100
- **Acessibilidade** — 100
- **Boas Práticas** — 100
- **SEO** — 100

---

## Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| **HTML5** | Marcação semântica |
| **Tailwind CSS** | Estilização utility-first |
| **JavaScript Vanilla** | Interatividade sem dependências externas |
| **Firebase Hosting** | Hospedagem com CDN global |
| **WebP** | Formato moderno de imagem para melhor compressão |

---

## Otimizações Aplicadas

### Performance
- Imagens em formato **WebP** com fallback JPG via `<picture>`
- **Lazy loading** em imagens abaixo da dobra
- **Fetch priority** em recursos críticos acima da dobra
- Dimensões explícitas em todas as imagens (evita layout shift)
- CSS e JS **embutidos** no HTML — zero requisições externas após o carregamento inicial
- CSS minificado via Tailwind CLI
- Cache estratégico no Firebase (7 dias para assets, sem cache para HTML)

### SEO
- Meta tags completas (Open Graph, Twitter Card)
- **Dados estruturados** (JSON-LD) com schema `BarberShop`
- `robots.txt` e `sitemap.xml` configurados
- URL canônica definida
- Hierarquia correta de headings

### Acessibilidade
- Atributos **ARIA** em elementos interativos
- HTML semântico com hierarquia de headings adequada
- Navegação por teclado (lightbox com suporte a Escape, Enter e Space)
- Textos alternativos descritivos em todas as imagens

---

## Funcionalidades

- Menu responsivo com animação
- Efeito de revelação ao scroll (scroll reveal)
- Contadores animados
- Carrossel de imagens com navegação
- Galeria com lightbox em modal
- Navegação suave com destaque da seção ativa
- Design mobile-first totalmente responsivo

---


## Estrutura do Projeto

```
barber-website/
├── public/
│   ├── index.html          # Página principal (HTML + CSS + JS embutidos)
│   ├── styles.css           # CSS compilado do Tailwind
│   ├── robots.txt           # Configuração para crawlers
│   ├── sitemap.xml          # Mapa do site para SEO
│   └── imagens/             # Imagens otimizadas (WebP + JPG)
├── src/
│   └── input.css            # Arquivo fonte do Tailwind CSS
├── tailwind.config.js       # Configuração do Tailwind (cores, animações)
├── firebase.json            # Configuração do Firebase Hosting (cache, rewrites)
└── package.json             # Dependências e scripts
```

---

## Licença

Este projeto é de uso livre para fins educacionais.
