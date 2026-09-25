// Minimal Python syntax highlighter for notebook cells (GitHub light palette).
export interface Token { t: string; c: string; fs: string }
export interface Line { n: number; toks: Token[] }

const HL = /(#.*$)|("[^"\n]*"|'[^'\n]*')|\b(import|from|as|def|return|for|in|if|else|with|lambda|True|False|None|and|or|not)\b|\b(\d+(?:\.\d+)?)\b|([A-Za-z_]\w*)(?=\()/g;
const COL: ([string, string] | null)[] = [null, ['#6e7781', 'italic'], ['#0a3069', 'normal'], ['#cf222e', 'normal'], ['#0550ae', 'normal'], ['#8250df', 'normal']];
const INK = '#24292f';
const tokLine = (line: string): Token[] => {
  const out: Token[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  HL.lastIndex = 0;
  while ((m = HL.exec(line))) {
    if (m.index > last) out.push({ t: line.slice(last, m.index), c: INK, fs: 'normal' });
    const g = m.findIndex((x, i) => i > 0 && x !== undefined);
    const [c, fs] = COL[g]!;
    out.push({ t: m[0], c, fs });
    last = m.index + m[0].length;
  }
  if (last < line.length) out.push({ t: line.slice(last), c: INK, fs: 'normal' });
  if (!out.length) out.push({ t: ' ', c: INK, fs: 'normal' });
  return out;
};
export const tok = (code: string): Line[] => code.split('\n').map((l, i) => ({ n: i + 1, toks: tokLine(l) }));
