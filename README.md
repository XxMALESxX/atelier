# Lucas Babetto Atelier — Site Oficial

## 🌟 Sobre o Projeto

Site profissional de luxo para o **Lucas Babetto Atelier** — estilista & designer de moda feminina de Maringá, PR. O site foi desenvolvido com padrão Squarespace de alta qualidade, com animações cinematográficas, video background, splash screen com música elegante e todas as funcionalidades necessárias para captar clientes.

---

## ✅ Funcionalidades Implementadas

### 🎬 Splash Screen (Pré-Entrada)
- Tela de entrada com fundo preto e partículas douradas animadas (canvas)
- Nome "Lucas Babetto Atelier" em tipografia elegante com animações sequenciais
- **Música via Web Audio API**: arpejo harp-like elegante e aconchegante (C5→E5→G5→C6→E6) tocando automaticamente
- Auto-dismiss após 4,5 segundos e transição suave (fade-out de 1,2s)
- Toque/clique antecipado também dispensa a tela

### 🎥 Video Background (Hero Section)
- **YouTube embed** (video ID: `OxWrHJE2ZzE`) em loop contínuo, sem controles, sem som, pointer-events: none
- Fallback com **gradiente animado** que simula tecido fluindo (caso o YouTube não carregue)
- Overlay semi-transparente para legibilidade do texto
- Efeitos de textura e linhas diagonais animadas

### 🧭 Navegação
- Navbar transparente no topo que fica sólida/blur no scroll
- Menu com links: Sobre, Serviços, Galeria, Vídeos, Agendamento, Contato
- Ícones de Instagram e WhatsApp
- **Menu mobile** com hamburger e overlay full-screen
- Indicador visual do link ativo ao rolar a página

### 📖 Seções do Site
1. **Hero** — Nome, tagline, CTA "Agendar Consulta" e "Fale Conosco"
2. **Sobre** — História do atelier, imagens reais do Instagram, destaques e processo em 5 etapas
3. **Serviços** — 6 cards: Formatura, Casamento, Noiva, 15 Anos, Peças Exclusivas, Bordado à Mão
4. **Galeria** — 8 imagens reais do Instagram em grid masonry, sem curtidas, com lightbox
5. **Quote** — Frase icônica do atelier
6. **Vídeos** — 3 reels do Instagram embutidos (DVZg2e1j9cK, C3bPkoYv1F3, DG1YWzXAm2U)
7. **Agendamento** — Formulário completo com EmailJS + fallback WhatsApp
8. **Footer/Contato** — Email, telefone, endereço com link Google Maps

### 📋 Formulário de Agendamento
- Campos: Nome, E-mail, WhatsApp, Tipo de Peça, Data Preferencial, Mensagem
- Validação client-side
- **EmailJS** integrado (requer configuração das chaves - ver instruções abaixo)
- **Fallback automático para WhatsApp** caso EmailJS não esteja configurado
- Mensagem de sucesso elegante após envio

### 🎨 Design & UX
- Paleta: Preto/dark + Dourado (#C9A961) + Champagne/Creme
- Tipografia: Playfair Display + Cormorant Garamond + Montserrat
- **Animações scroll-triggered** via Intersection Observer API
- Lightbox para visualizar fotos em fullscreen (navegação teclado + clique)
- **Parallax** no hero ao rolar
- **Botão flutuante WhatsApp** com animação pulse
- Scrollbar personalizada dourada

### 📱 Responsividade
- Mobile-first design
- Compatível com Android (Chrome) e iOS (Safari)
- Menu hamburger em telas menores
- Grid adaptável em todos os breakpoints (1100px, 900px, 600px)

### 🔍 SEO
- Meta tags completas (title, description, keywords, author, robots)
- Open Graph (Facebook/WhatsApp sharing)
- Twitter Card
- **Schema.org** (ClothingStore com endereço, telefone, email, coordenadas)
- Textos alternativos em todas as imagens
- ARIA labels e roles para acessibilidade

---

## ⚙️ Configuração Necessária (Proprietário)

### 📧 Configurar EmailJS (para o formulário enviar e-mails)

1. Acesse **https://www.emailjs.com/** e crie uma conta gratuita
2. Conecte seu Gmail: `atelier.lucasbabetto@gmail.com`
3. Crie um **Template** de email com as variáveis:
   - `{{nome}}` — Nome da cliente
   - `{{email}}` — Email da cliente
   - `{{whatsapp}}` — WhatsApp da cliente
   - `{{tipo}}` — Tipo de peça
   - `{{data}}` — Data preferencial
   - `{{mensagem}}` — Mensagem da cliente
4. Abra `index.html` e localize as linhas:
   ```javascript
   const EMAILJS_PUBLIC_KEY = 'SEU_PUBLIC_KEY_AQUI';
   const EMAILJS_SERVICE_ID = 'SEU_SERVICE_ID_AQUI';
   const EMAILJS_TEMPLATE_ID = 'SEU_TEMPLATE_ID_AQUI';
   ```
5. Substitua pelos seus IDs reais

> **Nota:** Mesmo sem configurar o EmailJS, o formulário funciona via fallback — ao enviar, abre o WhatsApp com a mensagem pré-preenchida.

### 🎥 Substituir Video Background (Opcional)
Para usar os vídeos reais do Instagram como background:
1. Baixe os vídeos do Instagram (usando ferramentas como SnapInsta)
2. Converta para MP4 (H.264) e WebM para compatibilidade máxima
3. Hospede os arquivos junto ao site
4. No HTML, substitua o `<iframe>` do YouTube por um `<video>` com autoplay, muted, loop

---

## 📁 Estrutura de Arquivos

```
index.html          — Site completo (arquivo único, autocontido)
README.md           — Esta documentação
```

---

## 🔗 Links Importantes

| Item | URL |
|------|-----|
| WhatsApp Atelier | https://api.whatsapp.com/message/UZQ2XM2FZ7H5E1 |
| Instagram | https://www.instagram.com/lucas.babetto/reels/ |
| E-mail | atelier.lucasbabetto@gmail.com |
| Telefone | +55 44 99900-3789 |
| Endereço Google Maps | https://maps.google.com/?q=R.+Chicago,+16+Jardim+Los+Angeles+Maringá+PR |

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Semântico, acessível
- **CSS3** — Custom Properties, Grid, Flexbox, Animations, Backdrop-filter
- **JavaScript (ES6+)** — Vanilla JS, Intersection Observer, Web Audio API
- **Google Fonts CDN** — Playfair Display, Cormorant Garamond, Montserrat
- **Font Awesome 6.5** — Ícones via CDN
- **EmailJS Browser SDK** — Envio de e-mails client-side
- **YouTube Embed API** — Video background

---

## 📞 Informações de Contato

- **Atelier:** Lucas Babetto Atelier
- **Estilista:** Lucas Babetto — Designer de Moda
- **Localização:** R. Chicago, 16 - Jardim Los Angeles, Maringá - PR, 87080-420
- **Email:** atelier.lucasbabetto@gmail.com
- **Telefone:** +55 44 99900-3789
- **Especialidade:** Vestidos sob medida, bordados à mão, peças exclusivas para momentos especiais
- **Modelo de negócio:** Somente venda (não aluguel), atendimento com hora marcada

---

## 🚀 Deploy

Para publicar o site, vá até a **aba Publish** e clique em publicar. O site é estático e compatível com qualquer hospedagem (GitHub Pages, Netlify, Vercel, etc.).

---

*© 2026 Lucas Babetto Atelier. Todos os direitos reservados.*
