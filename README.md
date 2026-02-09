# 🪒 Urban Barber - Site de Barbearia

Site moderno e responsivo para barbearia, construído com **HTML5** e **Tailwind CSS**.

## 🎨 Design

**Estilo:** Geometric Modern - Design urbano e contemporâneo

**Características:**
- ✨ Elementos geométricos e formas angulares
- 🎯 Tipografia bold e impactante
- 🎨 Paleta de cores: Branco, cinza e teal (verde-água)
- 📱 100% responsivo (mobile, tablet, desktop)
- ⚡ Performance otimizada

## 📁 Estrutura do Projeto

```
barber_website/
├── index.html          # Arquivo principal do site
├── assets/             # Pasta para suas imagens
│   └── README.md      # Guia de imagens
└── README.md          # Este arquivo
```

## 🚀 Como Usar

### 1. Visualizar o Site

Abra o arquivo `index.html` no seu navegador para ver o site funcionando.

### 2. Personalizar Conteúdo

Edite o arquivo `index.html` para alterar:

- **Nome da barbearia** (linha 10 e 95): Atualmente "Urban Barber"
- **Textos e descrições**
- **Serviços e preços** (seção de serviços)
- **Informações de contato** (footer)
- **Horários de funcionamento**

### 3. Adicionar Suas Imagens

Consulte o guia completo em [assets/README.md](assets/README.md) para:
- Tamanhos recomendados
- Como substituir os placeholders
- Dicas de fotografia

**Imagens necessárias:**
- 1 foto para Hero (principal)
- 1 foto para seção "Sobre"
- 6-9 fotos para galeria de trabalhos

### 4. Configurar Agendamento

Substitua todos os `href="#agendar"` pelo link da sua plataforma:

**Exemplo com WhatsApp:**
```html
<a href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar" class="...">
    Agendar Agora →
</a>
```

**Exemplo com plataforma externa:**
```html
<a href="https://sua-plataforma.com/agendar" class="...">
    Agendar Agora →
</a>
```

## 🎨 Personalização de Cores

As cores principais estão definidas no início do HTML:

```html
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    accent: '#0D9488',      // Cor principal (teal)
                    accentdark: '#115E59',  // Teal escuro
                }
            }
        }
    }
</script>
```

Para mudar a cor accent:
- Substitua `#0D9488` pela cor desejada (em hexadecimal)
- Exemplo: `#3B82F6` para azul, `#EF4444` para vermelho

## 📱 Seções do Site

### 🏠 Hero (Início)
Seção principal com título impactante e call-to-action

### 📖 Sobre
História e filosofia da barbearia com estatísticas

### 💈 Serviços
Cards com todos os serviços e preços:
- Corte Social - R$ 40
- Barba - R$ 30
- Combo - R$ 60
- Sobrancelha - R$ 15
- Platinado - R$ 80
- VIP Pack - R$ 100

### 🖼️ Galeria
Grid em estilo mosaic/masonry com trabalhos realizados

### 📞 Contato/Footer
Informações de contato, horários e redes sociais

## ✅ Recursos Incluídos

- ✨ HTML5 semântico
- 🎨 Tailwind CSS 3.x via CDN
- 📱 Design responsivo (mobile-first)
- 🔄 Navegação smooth scroll
- 🎯 Otimizado para SEO
- ⚡ Carregamento rápido
- 🎭 Animações e efeitos hover

## 🔧 Modificações Comuns

### Alterar Nome da Barbearia

Procure por "URBAN BARBER" e "Urban Barber" no arquivo e substitua.

### Alterar Telefone e Endereço

Vá até a seção `<footer id="contato">` e modifique:
- 📱 Telefone
- ✉️ Email
- 📍 Endereço

### Alterar Horários

Também no footer, seção de horários.

### Adicionar/Remover Serviços

Na seção `<section id="servicos">`, você pode:
- Duplicar um card de serviço
- Modificar título, descrição e preço
- Remover serviços não oferecidos

## 🌐 Publicação

Para colocar o site no ar:

1. **GitHub Pages** (gratuito):
   - Crie um repositório no GitHub
   - Faça upload dos arquivos
   - Ative GitHub Pages nas configurações

2. **Netlify** (gratuito):
   - Arraste a pasta do projeto no site do Netlify
   - Site publicado automaticamente

3. **Hospedagem tradicional**:
   - Faça upload via FTP
   - Certifique-se que o index.html está na raiz

## 📱 Compatibilidade

✅ Testado e compatível com:
- Chrome/Edge
- Firefox
- Safari (iOS e macOS)
- Dispositivos móveis

## 💡 Dicas

1. **Fotos de qualidade** fazem toda a diferença
2. **Mantenha informações atualizadas** (preços, horários)
3. **Teste em diferentes dispositivos** antes de publicar
4. **Otimize imagens** para carregamento rápido
5. **Configure analytics** (Google Analytics) para acompanhar visitas

## 🆘 Precisa de Ajuda?

- Consulte o guia de imagens: [assets/README.md](assets/README.md)
- Documentação Tailwind CSS: https://tailwindcss.com
- Para modificações avançadas, considere contratar um desenvolvedor

---

**Desenvolvido com ❤️ usando HTML5 e Tailwind CSS**

Pronto para colocar sua barbearia online! 🚀
