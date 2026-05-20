# Crise Ebola Bundibugyo 2026 — Remotion

Projeto Remotion em React + TypeScript para gerar vídeo MP4 de 30 segundos (1920x1080, 30fps, 900 frames), sem áudio, usando imagens manuais por cena.

## Upload manual das imagens (obrigatório)
Suba **exatamente** estes arquivos:

- `public/images/I1.png`
- `public/images/I2.png`
- `public/images/I3.png`
- `public/images/IR.png`
- `public/images/I5.png`
- `public/images/I6.png`
- `public/images/I7.png`

> ⚠️ Regra crítica: a imagem da cena 4 é `IR.png` (I + R). **Não use `I4.png`**.

### Como subir no GitHub (interface web)
1. Abra a pasta `public/images` no repositório.
2. Clique em **Add file** → **Upload files**.
3. Arraste os 7 PNGs com os nomes exatos acima.
4. Faça commit direto na branch.

### Como subir via Git local
```bash
git add public/images/I1.png public/images/I2.png public/images/I3.png public/images/IR.png public/images/I5.png public/images/I6.png public/images/I7.png
git commit -m "chore: adiciona imagens manuais das 7 cenas"
git push
```

## Validação de imagens
Antes de renderizar, rode:

```bash
npm run verify:images
```

Esse comando valida nomes e presença dos arquivos, incluindo dica para erro comum de `I4.png` e diferenças de maiúsculas/minúsculas (`IR.png` ≠ `ir.png`).

## Como rodar localmente
1. `npm install`
2. `npm run verify:images`
3. `npm run preview`
4. `npm run render:stills`
5. `npm run render`

Saída final: `out/video.mp4`.

## GitHub Actions (artifacts)
1. Aba **Actions**.
2. Workflow **Render video**.
3. **Run workflow**.
4. Baixar artifact **video-final**.
5. Baixar artifact **evidence-stills**.

## Fontes oficiais
- OMS declaração PHEIC (17 maio 2026): https://www.who.int/news/item/17-05-2026-epidemic-of-ebola-disease-in-the-democratic-republic-of-the-congo-and-uganda-determined-a-public-health-emergency-of-international-concern
- OMS DON602: https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON602
- OMS Ebola overview: https://www.who.int/health-topics/ebola
- Remotion CLI render: https://www.remotion.dev/docs/cli/render
- GitHub Actions artifacts: https://docs.github.com/actions/using-workflows/storing-workflow-data-as-artifacts
