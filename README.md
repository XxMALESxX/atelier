# Lucas Babetto Atelier — Site Oficial

🌐 **Site profissional de alta moda** para o Lucas Babetto Atelier, ateliê de moda feminina exclusivo em Maringá, PR.

---

## 🎯 Sobre o Projeto

Site inspirado nos melhores templates Squarespace, com visual luxuoso, minimalista e sofisticado, desenvolvido para o estilista Lucas Babetto. O site reflete a identidade do atelier: elegante, exclusivo e artesanal.

---

## ✅ Funcionalidades Implementadas

### Splash Screen (Pré-entrada)
- Tela de entrada com o nome "Lucas Babetto Atelier" em tipografia elegante
- Animações suaves de partículas douradas
- Música ambiente curtinha que toca automaticamente (com fallback para interação do usuário)
- Auto-transição após ~4 segundos OU ao clicar em qualquer lugar
- Fade-out elegante para o site principal

### Hero Section (Video Background)
- Vídeo de fundo em loop, sem controles, sem som, sem possibilidade de interação
- Playlist de 5 vídeos reais do Instagram do atelier que alternam suavemente
- Overlay gradiente para legibilidade do texto
- Título "LUCAS BABETTO + Atelier" em tipografia premium
- Badges informativos: Sob Medida | Somente Venda | Hora Marcada
- CTA "Agende sua Consulta" com efeito hover

### Navegação
- Navbar transparente no topo, sólida com blur ao scroll
- Links: Início | Sobre | Trabalhos | Agendar | Contato
- Botão WhatsApp na navbar (desktop)
- Menu hambúrguer responsivo (mobile)

### Sobre / About
- Texto descritivo completo do atelier
- 4 cards de diferenciais: Sob Medida | Somente Venda | Hora Marcada | Bordado Artesanal
- Botões CTA para agendamento e Instagram

### Marquee Strip
- Faixa dourada animada com os diferenciais do atelier em loop contínuo

### Nossos Trabalhos / Portfolio
- 3 cards com fotos REAIS do Instagram (3 posts especificados)
- 3 cards com vídeos (2 downloadados do Instagram + 1 embed do Instagram)
- Filtro por tipo: Todos | Fotos | Vídeos
- Lightbox para ampliar fotos
- Hover effects elegantes

### Depoimentos
- 3 depoimentos de clientes reais com sistema de estrelas
- Cards com hover dourado e layout elegante

### Agendamento
- Formulário completo: Nome, E-mail, Telefone/WhatsApp, Mensagem
- Validação client-side em tempo real
- Envio via FormSubmit.co (envia para atelier.lucasbabetto@gmail.com com CC para o cliente)
- Mensagem de auto-resposta para a cliente
- Mensagem de sucesso bonita após envio
- Nota sobre horários: Segunda a Sexta com hora marcada

### Contato
- E-mail, Telefone/WhatsApp, Endereço, Horário
- Google Maps embed do endereço
- Botões de redes sociais: Instagram + WhatsApp

### Footer
- Marca, links de navegação, redes sociais
- Copyright: © 2026 Lucas Babetto Atelier
- "Maringá – PR, Brasil"

### Extras
- WhatsApp floating button (bottom-right) sempre visível com pulse animation
- Cursor trail de partículas douradas (desktop)
- Scroll parallax sutil no hero
- Scroll animado para todas as seções
- Custom scrollbar dourada

---

## 📂 Estrutura de Arquivos

```
index.html          — Página principal completa
css/
  style.css         — Estilos completos (luxury fashion brand)
js/
  main.js           — JavaScript: splash, nav, vídeo, forms, animações
README.md           — Documentação do projeto
```

---

## 🔗 Links e Contatos

| Item | Detalhe |
|------|---------|
| WhatsApp | https://api.whatsapp.com/message/UZQ2XM2FZ7H5E1?autoload=1&app_absent=0&utm_source=ig |
| Instagram | https://www.instagram.com/lucas.babetto/reels/ |
| E-mail | atelier.lucasbabetto@gmail.com |
| Telefone | +55 44 99900-3789 |
| Endereço | R. Chicago, 16 - Jardim Los Angeles, Maringá - PR, 87080-420 |
| Horário | Segunda a Sexta-feira, com hora marcada |

---

## 🎨 Design System

| Elemento | Valor |
|----------|-------|
| Cor principal | `#0a0a0a` (preto elegante) |
| Cor destaque | `#c9a96e` / `#d4af37` (dourado/champanhe) |
| Cor cream | `#f5f0eb` |
| Tipografia heading | Cormorant Garamond (serif) |
| Tipografia body | Montserrat (sans-serif) |
| Tipografia script | Great Vibes |

---

## 🔧 Dependências (CDN)

- Google Fonts: Cormorant Garamond, Montserrat, Great Vibes
- Font Awesome 6.4.0
- FormSubmit.co (envio de formulários sem backend)

---

## 📋 Para Ativar o Formulário de Contato

O formulário usa [FormSubmit.co](https://formsubmit.co) sem necessidade de backend.

**Na primeira submissão**, você receberá um e-mail de confirmação em `atelier.lucasbabetto@gmail.com`. Clique no link para ativar o endpoint.

Após a ativação, todo formulário será enviado automaticamente para o e-mail do atelier, com cópia para o e-mail da cliente.

---

## 🚀 Para publicar o site

Vá à aba **Publish** e publique com um clique. O site ficará online com uma URL pública.

---

## 🔄 Funcionalidades Futuras Sugeridas

- [ ] Sistema de galeria com mais fotos do Instagram (via API)
- [ ] Sistema de agendamento com calendário integrado (ex: Calendly)
- [ ] Página de detalhes de cada peça
- [ ] Blog com dicas de moda
- [ ] Portfólio filtrado por categoria (formatura, casamento, festa, etc.)
- [ ] Chat ao vivo integrado
