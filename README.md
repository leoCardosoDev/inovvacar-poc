# Inovva Car POC

Repositório base da Inovva Car. A regra principal é simples: manter a estrutura extremamente organizada, usar o Design System v0 como referência visual e nunca depender de arquivos descartáveis de `temp/`, `context/`, `.codex/` ou `.agents/`.

## Design System a ser usado

Fonte de verdade visual:

- `design-system/README.md`
- `design-system/manifest.json`
- `design-system/index.html`
- `design-system/styles/tokens.css`
- `design-system/styles/base.css`
- `design-system/styles/components.css`
- `design-system/styles/motion.css`
- `design-system/script.js`

Esse é o Design System v0 aprovado. Ele define a paleta, tipografia, motion e a lógica de composição do site institucional e do showroom.

O Design System é um guia de decisão e documentação visual. Ele não deve ser convertido diretamente no site institucional nem no showroom final.

## Site institucional — estado atual

- `index.html` contém a primeira entrega da Landing Page: apenas a Hero Section.
- `assets/css/institutional.css` contém os estilos específicos da Landing Page.
- `assets/js/institutional.js` contém o menu móvel e o replay da entrada da Hero.
- A Hero usa `design-system/styles/tokens.css` como fonte de tokens e aplica a composição em camadas inspirada no Sonic Link.
- A imagem dominante da Hero é a Ferrari Portofino M, usada como referência de narrativa Signature, sem afirmar disponibilidade comercial.

## Estrutura do projeto

Use esta árvore como padrão:

```text
/assets
  /css
    institutional.css
  /js
    institutional.js
  /images
    favicon.webp
    logo_claro.webp
    logo_escuro.webp
    /vehicles
    /frames
/context
/design-system
  manifest.json
  README.md
  /assets
    /brand
    /references
      /institutional
      /showroom
    /mood
    /institutional
    /showroom
  /styles
  index.html
  script.js
/temp
```

## Regra dos assets

- `assets/css/` recebe estilos do site.
- `assets/js/` recebe scripts do site.
- `assets/images/` recebe imagens oficiais, logos e mídias estáticas.
- `assets/images/frames/` recebe sequências frame a frame para os heroes do showroom.

Arquivos canônicos de marca:

- `assets/images/favicon.webp`
- `assets/images/logo_claro.webp`
- `assets/images/logo_escuro.webp`

Os logos devem manter a marca fielmente, sem redesenho, sem efeito e sem fundo falso.

## Como a IA deve trabalhar aqui

Antes de criar ou alterar qualquer coisa:

1. Ler `design-system/README.md`.
2. Ler `design-system/manifest.json`.
3. Respeitar o Design System v0 como base.
4. Usar `assets/images/logo_claro.webp` apenas em fundo escuro.
5. Usar `assets/images/logo_escuro.webp` apenas em fundo claro.
6. Guardar imagens novas do site em `assets/images/`.
7. Guardar sequências de animação do site em `assets/images/frames/`.
8. Dentro do Design System, respeitar `brand`, `references`, `mood`, `institutional` e `showroom`.
9. Evitar scroll horizontal.
10. Organizar tudo por blocos verticais de section.
11. Preservar a identidade da Inovva Car, sem copiar cores de referências externas.
12. Usar `.webp` para imagens raster e validar caminhos, nomes e extensões antes de concluir.

## Direção visual

- Institucional: usa a ideia de composição e entrada em camadas inspirada no Sonic Link, mas com as cores e a tipografia da Inovva Car.
- Showroom: usa heróis frame a frame inspirados em Iron Man e Thor, um carro por página.
- Sempre priorizar clareza, hierarquia e leitura em mobile.

## Regras de segurança do projeto

- Não usar conteúdo de `temp/` como dependência final.
- Não misturar arquivos de referência com arquivos de produção.
- Não criar uma segunda linguagem visual fora do Design System v0.
- Não quebrar a organização dos diretórios.

## Estado atual

- Git inicializado.
- Branch principal: `main`.
- Remote: `origin`.
- Estrutura base pronta para evolução do site institucional e do showroom.
