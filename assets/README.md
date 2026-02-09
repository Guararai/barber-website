# 🖼️ Guia de Imagens para Templates

Esta pasta é destinada a armazenar todas as imagens que você usará nos templates do site da barbearia.

## 📋 Lista de Imagens Necessárias

### Imagens Obrigatórias

Para cada template, você precisará de:

1. **Imagem Hero (Principal)**
   - Quantidade: 1
   - Tamanho recomendado: 1920x1080px (Full HD)
   - Formato: JPG ou PNG
   - Sugestão: Foto impactante da barbearia, barbeiro em ação ou ambiente estilizado

2. **Imagem "Sobre Nós"**
   - Quantidade: 1
   - Tamanho recomendado: 1200x800px
   - Formato: JPG ou PNG
   - Sugestão: Foto da equipe, interior da barbearia ou detalhes do ambiente

3. **Galeria de Trabalhos**
   - Quantidade: 6-9 fotos
   - Tamanho recomendado: 800x800px (quadrado)
   - Formato: JPG ou PNG
   - Sugestão: Fotos de cortes realizados, antes/depois, detalhes dos serviços

### Imagens Opcionais

4. **Serviços (Templates 4)**
   - Quantidade: 5 fotos
   - Tamanho recomendado: 600x400px
   - Formato: JPG ou PNG
   - Sugestão: Fotos ilustrando cada tipo de serviço

## 📁 Estrutura Recomendada

Organize suas imagens assim:

```
assets/
├── hero.jpg                 # Imagem principal
├── about.jpg               # Imagem da seção Sobre
├── galeria/
│   ├── trabalho-1.jpg
│   ├── trabalho-2.jpg
│   ├── trabalho-3.jpg
│   ├── trabalho-4.jpg
│   ├── trabalho-5.jpg
│   └── trabalho-6.jpg
└── servicos/               # Opcional
    ├── corte.jpg
    ├── barba.jpg
    └── combo.jpg
```

## 🎨 Especificações Técnicas

### Tamanhos Ideais por Seção

| Seção | Largura | Altura | Proporção |
|-------|---------|--------|-----------|
| Hero | 1920px | 1080px | 16:9 |
| Sobre | 1200px | 800px | 3:2 |
| Galeria | 800px | 800px | 1:1 |
| Serviços | 600px | 400px | 3:2 |

### Formatos Recomendados

- **JPG:** Para fotos (menor tamanho de arquivo)
- **PNG:** Para imagens com transparência ou gráficos
- **WebP:** Para melhor otimização (navegadores modernos)

### Otimização

Para melhor performance do site:
- Comprima as imagens antes de usar (recomendo: TinyPNG, Squoosh)
- Tamanho máximo de arquivo: 200KB por imagem
- Use JPG com qualidade 80-85% para bom equilíbrio

## 🔧 Como Adicionar Imagens aos Templates

### Passo 1: Preparar as Imagens

1. Escolha suas fotos
2. Redimensione para os tamanhos recomendados
3. Comprima para reduzir tamanho do arquivo
4. Renomeie com nomes descritivos (ex: `hero.jpg`, `galeria-1.jpg`)
5. Coloque na pasta `assets/`

### Passo 2: Editar o HTML

Abra o arquivo `index.html` do template escolhido e localize os placeholders.

#### Exemplo 1: Substituir Hero

**Antes (placeholder):**
```html
<section class="relative h-screen flex items-center justify-center bg-gray-100">
    <div class="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70"></div>
    <!-- conteúdo -->
</section>
```

**Depois (com imagem):**
```html
<section class="relative h-screen flex items-center justify-center">
    <img src="../assets/hero.jpg" alt="Barbearia" class="absolute inset-0 w-full h-full object-cover">
    <div class="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70"></div>
    <!-- conteúdo -->
</section>
```

#### Exemplo 2: Substituir Seção Sobre

**Antes (placeholder):**
```html
<div class="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
    <span class="text-gray-500 text-center px-6">
        [Imagem da barbearia]
    </span>
</div>
```

**Depois (com imagem):**
```html
<div class="h-96 rounded-lg overflow-hidden">
    <img src="../assets/about.jpg" alt="Nossa barbearia" class="w-full h-full object-cover">
</div>
```

#### Exemplo 3: Substituir Galeria

**Antes (placeholder):**
```html
<div class="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
    <span class="text-gray-500">[Foto 1]</span>
</div>
```

**Depois (com imagem):**
```html
<div class="h-64 rounded-lg overflow-hidden">
    <img src="../assets/galeria/trabalho-1.jpg" alt="Corte realizado" class="w-full h-full object-cover hover:scale-110 transition-transform duration-300">
</div>
```

## 🎯 Dicas de Fotografia

### Para Melhores Resultados

1. **Iluminação:**
   - Use luz natural quando possível
   - Evite sombras duras no rosto
   - Fotografe em horários com boa iluminação

2. **Composição:**
   - Enquadre bem o assunto
   - Use a regra dos terços
   - Evite fundos confusos ou desorganizados

3. **Qualidade:**
   - Use uma câmera decente (celulares modernos funcionam bem)
   - Mantenha a câmera estável (use tripé se possível)
   - Foque bem na área principal

4. **Consistência:**
   - Mantenha estilo visual similar entre as fotos
   - Use filtros/edições consistentes
   - Mantenha mesma paleta de cores quando possível

### O Que Fotografar

**Para Hero:**
- Foto do ambiente vazio, bem iluminado
- Barbeiro cortando cabelo (ação)
- Close-up de ferramentas organizadas
- Vista geral da barbearia

**Para Sobre:**
- Equipe reunida sorrindo
- Interior da barbearia bem decorado
- Detalhes do ambiente (cadeiras, espelhos)

**Para Galeria:**
- Antes e depois de cortes
- Close-ups de cortes bem feitos
- Detalhes de barba bem aparada
- Diferentes estilos de corte

## 🌐 Fontes de Imagens (Caso Não Tenha Fotos Próprias)

### Bancos de Imagens Gratuitos

Se você ainda não tem fotos da sua barbearia, pode usar imagens gratuitas temporariamente:

1. **Unsplash** - https://unsplash.com
   - Pesquise: "barber", "barbershop", "haircut"
   - Fotos profissionais gratuitas

2. **Pexels** - https://pexels.com
   - Pesquise: "barbershop", "barber cutting hair"
   - Grande variedade de fotos gratuitas

3. **Pixabay** - https://pixabay.com
   - Pesquise: "barbershop"
   - Imagens livres de direitos autorais

**⚠️ Importante:** Use fotos de bancos apenas temporariamente. Para melhor resultado, use fotos reais da sua barbearia assim que possível!

## 📱 Responsividade

As imagens se adaptarão automaticamente aos diferentes tamanhos de tela graças ao Tailwind CSS. Certifique-se de usar a classe `object-cover` para manter bom crop em todos os dispositivos.

## ✅ Checklist de Imagens

Antes de publicar seu site, verifique:

- [ ] Todas as imagens estão otimizadas (< 200KB cada)
- [ ] Imagens têm atributo `alt` descritivo para SEO
- [ ] Imagens estão nítidas e bem iluminadas
- [ ] Não há placeholders visíveis
- [ ] Imagens carregam rapidamente
- [ ] Visual está consistente em todas as seções
- [ ] Testado em mobile e desktop

## 🆘 Problemas Comuns

### Imagem não aparece
- Verifique se o caminho está correto: `../assets/nome-arquivo.jpg`
- Confirme que a imagem está na pasta assets
- Verifique se o nome do arquivo está correto (case-sensitive)

### Imagem aparece distorcida
- Adicione `object-cover` na classe da tag `<img>`
- Verifique se as proporções são adequadas

### Site carregando lento
- Comprima suas imagens
- Reduza o tamanho dos arquivos
- Use formato JPG em vez de PNG para fotos

---

**Dica Final:** Invista em boas fotos! Elas são o diferencial do seu site. Se possível, contrate um fotógrafo profissional para capturar imagens de qualidade da sua barbearia. 📸
