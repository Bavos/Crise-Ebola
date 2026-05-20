# Remotion — Ebola Bundibugyo (2026)

Projeto Remotion para gerar vídeo MP4 de **30 segundos** (900 frames, 30 fps, 1920x1080), sem áudio e sem uso de imagens/vídeos externos.

## Como executar

1. `npm install`
2. `npm run preview`
3. `npm run render`

Arquivo final: `out/video.mp4`.

## Render pelo GitHub Actions

1. Abra a aba **Actions**.
2. Selecione **Render video**.
3. Clique em **Run workflow**.
4. Ao final, baixe o artifact **video-final**.

## Especificações

- Composition ID: `Main`
- Duração: `900 frames` (30s)
- FPS: `30`
- Resolução: `1920x1080`
- Sem narração, música ou áudio
- Sem `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif` ou `.mp4` externos
- Todos os visuais gerados por React + Remotion + SVG + CSS inline

## Fontes

- OMS declaração PHEIC, 17 maio 2026:  
  https://www.who.int/news/item/17-05-2026-epidemic-of-ebola-disease-in-the-democratic-republic-of-the-congo-and-uganda-determined-a-public-health-emergency-of-international-concern
- OMS Disease Outbreak News DON602:  
  https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON602
- OMS Ebola overview:  
  https://www.who.int/health-topics/ebola
- Remotion render CLI:  
  https://www.remotion.dev/docs/cli/render
- GitHub Actions artifacts:  
  https://docs.github.com/actions/using-workflows/storing-workflow-data-as-artifacts
