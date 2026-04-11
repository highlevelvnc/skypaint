# Skypaint

Website institucional da **Skypaint** — empresa de pinturas, reformas e remodelações sediada em Cascais, com atendimento em toda a região de Lisboa.

## Stack
- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS 3** (com tema e animações customizadas)
- **Lucide React** (ícones)
- Reveals animados com IntersectionObserver (sem dependências pesadas)

## Serviços apresentados
1. Pintura Interior & Exterior
2. Pintura Predial (Trabalho em Corda)
3. Reforma de Banheiros
4. Deck de Madeira
5. Aplicação de Pladur
6. Revestimento Cerâmico
7. Marido de Aluguer

## Secções
- Loader animado com progresso
- Hero com entrada sequencial e galeria
- Marquee de serviços
- Lista de serviços interativa com preview sticky
- Contador de estatísticas
- Processo de trabalho (4 etapas)
- Portefólio em bento grid com filtros
- Sobre, valores e depoimentos
- Contacto com formulário + CTA telefone
- Footer com wordmark gigante
- Floating CTA WhatsApp + Ligar

## Como usar

```bash
# Instalar
npm install

# Desenvolvimento (http://localhost:5173)
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Estrutura de imagens
```
public/images/
├── painting/    (30 fotos)
├── bathroom/    (16 fotos)
├── deck/        (10 fotos)
├── pladur/      (5 fotos)
├── rope/        (21 fotos)
├── ceramic/     (11 fotos)
└── handyman/    (17 fotos)
```

Para adicionar/remover imagens, basta ajustar o `length` dos arrays em `src/data/site.ts`.

## Personalização rápida
Toda a informação editável está em **`src/data/site.ts`**:
- Dados da empresa (telefone, email, cidade)
- Lista de serviços (título, descrição, bullets, galeria)
- Passos do processo
- Depoimentos

Cores e fontes em **`tailwind.config.js`**.

## Contacto
+351 910 346 159 · Cascais — Lisboa
