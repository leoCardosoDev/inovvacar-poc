# Inovva Car — Design System v0

Sistema de referência visual da Inovva Car. Ele não é o site institucional nem o showroom final; ele guia as decisões de ambos, mantendo a marca consistente, a estrutura organizada e o movimento sob controle.

## Papel do sistema

- Guiar o site institucional.
- Guiar o showroom, carro a carro.
- Servir como fonte de verdade para cores, tipografia, motion, composição e comportamento.
- Evitar que cada página invente sua própria linguagem visual.

## Estrutura

- `index.html` — documentação visual e página de espécimes do sistema.
- `manifest.json` — contrato operacional, contextos, regras de assets, convenção de nomes e quality gates.
- `styles/tokens.css` — tokens de cor, tipografia, espaçamento, raios, sombras e motion.
- `styles/base.css` — reset, estrutura, tipografia base e utilitários.
- `styles/components.css` — header, hero, buttons, cards, campos, accordion, entrada coreografada, galerias em blocos, sequência de hero, matriz de referências, footer e responsividade.
- `styles/motion.css` — reveal, beam e suporte a `prefers-reduced-motion`.
- `script.js` — menu mobile, reveal por viewport, accordion, glow de cards, replay da entrada institucional e scrub de sequência do Showroom.
- `assets/brand/` — logos oficiais da Inovva e da Inovva Car.
- `assets/references/` — amostras locais, separadas em `institutional/` e `showroom/`, sem função de produção.
- `assets/mood/` — imagens de atmosfera e direção visual usadas nos espécimes.
- `assets/institutional/` — reservado para assets aprovados do futuro site institucional.
- `assets/showroom/` — reservado para assets aprovados do futuro showroom e dos veículos.
- `assets/brand/logo-inovvacar-claro.webp` — logo claro, com lettering branco, para fundos `Deep Ink` e superfícies escuras.
- `assets/brand/logo-inovvacar-escuro.webp` — logo escuro, com lettering `Deep Ink`, para fundos claros.
- As duas versões do logo são WEBP RGBA com transparência real; o xadrez de visualização não faz parte dos arquivos.

### Árvore canônica de assets

```text
assets/
├── brand/
│   ├── logo-inovva-claro.webp
│   ├── logo-inovva-escuro.webp
│   ├── logo-inovvacar-claro.webp
│   └── logo-inovvacar-escuro.webp
├── references/
│   ├── institutional/
│   └── showroom/
├── mood/
├── institutional/
└── showroom/
```

Os nomes de arquivos usam português do Brasil, `kebab-case`, sem acentos e com extensão compatível com o formato real. Nomes oficiais de marcas permanecem reconhecíveis. A regra completa está em `manifest.json`.

## Direção v0

- Base editorial branca, com `Deep Ink` como âncora de contraste.
- Azul Inovva como ação, direção e detalhe técnico.
- Tipografia canônica provisória: Manrope para títulos, Inter para corpo e Geist Mono para dados e labels.
- Os arquivos de fonte não estão incluídos nos assets disponíveis; por isso o v0 declara as famílias canônicas e fallbacks locais. O empacotamento definitivo deve ser validado antes da produção.
- Grid amplo, respiro controlado, bordas finas e componentes com poucos elementos.
- Motion discreto: entradas verticais, resposta tátil curta e linhas ambiente.
- Hero Institucional: composição de filme do Sonic Link — palco central, wave, títulos em fases, elemento central, cards flutuantes, flash e meta rail — traduzida para a paleta e tipografia Inovva Car.
- Toda animação possui fallback para usuários com movimento reduzido.

## Separação de contextos

O sistema documenta dois territórios que compartilham tokens, tipografia e linguagem de interação, mas têm funções diferentes:

| Contexto | Usar | Evitar |
| --- | --- | --- |
| Institucional | Hero com a composição de filme do Sonic Link, capítulos editoriais, bento de imagens, processo, prova social, depoimentos e parallax discreto. | Cores neon da referência, hero frame a frame, WebGL obrigatório e estética de catálogo. |
| Showroom | Hero frame a frame por carro, inspirado em Iron Man e Thor, galeria exterior/interior, detalhes, especificações, status, CTA comercial e cards técnicos. | Misturar sequências de carros, movimento sem fallback, informações escondidas e atmosfera que compete com o veículo. |

### Referências incorporadas

- **AEX** — narrativa em capítulos, imagem full-bleed e parallax; serve aos dois contextos, com lifestyle no Showroom.
- **AI Intelligence SaaS** — pipeline, status, prova e interações de processo; principalmente Institucional, adaptado para dossiê no Showroom.
- **Bloomava Creative** — galeria art-directed, bento e grandes recortes; principalmente Institucional, aplicado a exterior/interior no Showroom.
- **Cogni** — atmosfera cinematográfica e showcase de módulos; usar pontualmente no Showroom e em campanhas institucionais de tecnologia.
- **Iron Man** — hero sticky com sequência frame a frame; reservado às páginas internas do Showroom.
- **Savory Plate** — editorial, swipe deck e prova social; galeria Institucional e deck de detalhes do veículo.
- **Sonic Link** — estrutura do hero Institucional: palco, wave, títulos em fases, elemento central, cards flutuantes, flash e meta rail; não copiar suas cores.
- **Thor** — hero frame a frame e cards modernos; reservado às páginas internas do Showroom, com adaptação da temática para a linguagem Inovva Car.

As imagens em `assets/references/` são amostras visuais copiadas localmente para a documentação. Elas não são assets finais de campanha nem de veículos. Os componentes incluem slots substituíveis para receber fotografia, vídeo ou sequência aprovada da operação. Os diretórios `assets/institutional/` e `assets/showroom/` estão reservados para essa futura incorporação aprovada.

## Arquitetura de seções

O v0 organiza a experiência em blocos verticais de seção. Galerias usam grid responsivo e o Showroom usa módulos empilhados; o scroll horizontal não é estrutural. A exceção deve ser deliberada, localizada e nunca necessária para descobrir uma informação comercial.

## Regras de evolução

1. Tokens devem ser alterados antes de estilos específicos de página.
2. Componentes novos devem preservar foco de teclado e leitura em mobile.
3. Os assets desta pasta são independentes e não dependem de `temp/`, `context/`, `.codex/` ou `.agents/`.
4. A identidade oficial do logo deve ser preservada; não redesenhar nem aplicar efeitos no arquivo. Usar `logo-inovvacar-claro` somente em fundo escuro e `logo-inovvacar-escuro` somente em fundo claro.
5. Referências devem permanecer em `assets/references/`; nunca misturar uma amostra externa com um asset aprovado de produção.
6. O sistema ainda é v0: tipografia final, estados comerciais, escala de mídia, sequência real de imagens e componentes de showroom serão refinados antes da primeira implementação das páginas finais.

## Manifest e validação

`manifest.json` é o contrato que a IA deve consultar antes de criar ou alterar assets. Ele define os contextos, a finalidade de cada diretório, o padrão de nomes e os critérios mínimos de qualidade. Se uma decisão não estiver coberta pelo manifest, registrar a nova regra neste README e no próprio manifest antes de criar uma exceção.

## Como visualizar

Abra `index.html` diretamente no navegador. A demonstração não depende de CDN, framework ou runtime externo.
