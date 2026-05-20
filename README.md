# Remotion — Ebola Bundibugyo (2026)

Projeto completo em Remotion para renderizar um vídeo **MP4 de 40 segundos** (sem áudio e sem imagens externas/binárias), com estética documental moderna.

## Como rodar localmente

1. `npm install`
2. `npm run preview`
3. `npm run render`

O render final será salvo em: `out/video.mp4`.

## Render via GitHub Actions

1. Abra a aba **Actions** no GitHub.
2. Selecione o workflow **Render video**.
3. Clique em **Run workflow**.
4. Ao finalizar, baixe o artifact **video-final**.

## Detalhes técnicos

- Composition ID: `Main`
- Duração: `1200 frames` (40 segundos)
- FPS: `30`
- Resolução: `1920x1080`
- Sem narração e sem trilha de áudio
- Sem uso de `.png`, `.jpg`, `.webp`, `.gif` ou vídeos externos
