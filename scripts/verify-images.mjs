import {existsSync, readdirSync} from 'node:fs';
import {join} from 'node:path';

const required = ['I1.png', 'I2.png', 'I3.png', 'IR.png', 'I5.png', 'I6.png', 'I7.png'];
const base = 'public/images';

if (!existsSync(base)) {
  console.error(`[ERRO] Diretório ausente: ${base}`);
  process.exit(1);
}

const files = readdirSync(base);
const missing = required.filter((f) => !existsSync(join(base, f)));

if (missing.length > 0) {
  console.error('[ERRO] Imagens obrigatórias ausentes:');
  for (const m of missing) console.error(` - ${base}/${m}`);
  if (files.includes('I4.png')) {
    console.error('[DICA] Encontrado I4.png, mas o nome correto da cena 4 é IR.png');
  }
  console.error('[DICA] Nomes são case-sensitive no CI (Linux). Exemplo: IR.png != ir.png');
  process.exit(1);
}

console.log('[OK] Todas as imagens obrigatórias foram encontradas em public/images.');
