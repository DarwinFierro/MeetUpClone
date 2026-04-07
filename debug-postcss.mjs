import postcss from 'postcss';
import tailwind from '@tailwindcss/postcss';
import fs from 'fs';

const css = fs.readFileSync('src/tailwind.css', 'utf8');

const abs = '/sessions/quirky-charming-bohr/mnt/MeetUpClone/src/tailwind.css';

const r1 = await postcss([tailwind]).process(css, { from: abs });
console.log(`absolute: .sticky=${r1.css.includes('.sticky')}, size=${r1.css.length}`);

const r2 = await postcss([tailwind]).process(css, { from: undefined });
console.log(`undefined: .sticky=${r2.css.includes('.sticky')}, size=${r2.css.length}`);
