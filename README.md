# InovvaCar POC

Repositório base da InovvaCar. A regra principal é simples: manter a estrutura extremamente organizada, usar o Design System v0 como referência visual e nunca depender de arquivos descartáveis de `temp/`, `context/`, `.codex/` ou `.agents/`.

## Design System a ser usado

Fonte de verdade visual:

- `design-system/README.md`
- `design-system/index.html`
- `design-system/styles/tokens.css`
- `design-system/styles/base.css`
- `design-system/styles/components.css`
- `design-system/styles/motion.css`
- `design-system/script.js`

Esse é o Design System v0 aprovado. Ele define a paleta, tipografia, motion e a lógica de composição do site institucional e do showroom.

## Estrutura do projeto

Use esta árvore como padrão:

```text
/assets
  /css
  /js
  /images
    logo_claro.png
    logo_escuro.png
    /frames
/context
/design-system
/temp
```

## Regra dos assets

- `assets/css/` recebe estilos do site.
- `assets/js/` recebe scripts do site.
- `assets/images/` recebe imagens oficiais, logos e mídias estáticas.
- `assets/images/frames/` recebe sequências frame a frame para os heroes do showroom.

Arquivos canônicos de marca:

- `assets/images/logo_claro.png`
- `assets/images/logo_escuro.png`

Os logos devem manter a marca fielmente, sem redesenho, sem efeito e sem fundo falso.

## Como a IA deve trabalhar aqui

Antes de criar ou alterar qualquer coisa:

1. Ler `design-system/README.md`.
2. Respeitar o Design System v0 como base.
3. Usar `assets/images/logo_claro.png` apenas em fundo escuro.
4. Usar `assets/images/logo_escuro.png` apenas em fundo claro.
5. Guardar imagens novas em `assets/images/`.
6. Guardar sequências de animação em `assets/images/frames/`.
7. Evitar scroll horizontal.
8. Organizar tudo por blocos verticais de section.
9. Preservar a identidade da InovvaCar, sem copiar cores de referências externas.

## Direção visual

- Institucional: usa a ideia de composição e entrada em camadas inspirada no Sonic Link, mas com as cores e a tipografia da InovvaCar.
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
