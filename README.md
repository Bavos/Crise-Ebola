# Crise Ebola Bundibugyo 2026 — Remotion

Projeto Remotion em React + TypeScript para gerar um vídeo MP4 de 30 segundos (1920x1080, 30fps, 900 frames) sobre o alerta global de Ebola Bundibugyo em 2026.

## Imagens manuais (obrigatório)
Este projeto **não gera imagens**. Você deve subir manualmente os arquivos:

- `public/images/I1.png`
- `public/images/I2.png`
- `public/images/I3.png`
- `public/images/IR.png`
- `public/images/I5.png`
- `public/images/I6.png`
- `public/images/I7.png`

> Atenção: a imagem da cena 4 deve ser `IR.png`. **Não use `I4.png`**.

## Como rodar localmente
1. `npm install`
2. `npm run preview`
3. `npm run render:stills`
4. `npm run render`

Saída final esperada: `out/video.mp4`.

## GitHub Actions (download de artifacts)
1. Abra a aba **Actions** no GitHub.
2. Selecione o workflow **Render video**.
3. Clique em **Run workflow**.
4. Baixe o artifact **video-final**.
5. Baixe o artifact **evidence-stills**.

## Fontes oficiais
- OMS declaração PHEIC 17 maio 2026: https://www.who.int/news/item/17-05-2026-epidemic-of-ebola-disease-in-the-democratic-republic-of-the-congo-and-uganda-determined-a-public-health-emergency-of-international-concern
- OMS Disease Outbreak News DON602: https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON602
- OMS Ebola overview: https://www.who.int/health-topics/ebola
- Remotion CLI render: https://www.remotion.dev/docs/cli/render
- GitHub Actions artifacts: https://docs.github.com/actions/using-workflows/storing-workflow-data-as-artifacts
