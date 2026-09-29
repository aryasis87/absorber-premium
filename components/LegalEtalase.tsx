import Link from 'next/link';
import EtalaseHead from '@/components/EtalaseHead';
import type { Bagian } from '@/lib/legal';

/* Halaman legal gaya "Etalase": pasal bernomor dua digit pada kisi garis
   rambut. Isinya dari lib/legal.ts — khusus bisnis B2B ini. */
export default function LegalEtalase({
  judul,
  updated,
  intro,
  bagian,
}: {
  judul: string;
  updated: string;
  intro: string;
  bagian: Bagian[];
}) {
  return (
    <>
      <EtalaseHead no="—" tag={`Legal · diperbarui ${updated}`} title={judul} lead={intro} />
      <section className="bg-bone py-14 md:py-20">
        <ol className="mx-auto max-w-4xl border-t border-ink px-6">
          {bagian.map((b, i) => (
            <li key={b.h} className="grid gap-3 border-b border-ink/15 py-8 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-8">
              <span className="text-3xl font-bold tracking-[-0.05em] text-sage">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="text-xl font-semibold text-ink">{b.h}</h2>
                {b.p && <p className="mt-3 leading-relaxed text-ink-soft">{b.p}</p>}
                {b.daftar && (
                  <ul className="mt-3 space-y-2">
                    {b.daftar.map((d) => (
                      <li key={d} className="flex gap-3 leading-relaxed text-ink-soft">
                        <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-ink" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
        <p className="tag mx-auto mt-8 max-w-4xl px-6 leading-[1.7] text-ink-soft">
          Draf untuk purwarupa desain — perlu ditinjau bagian legal PT Dickson Synergy.{' '}
          <Link href="/kontak" className="text-ink underline underline-offset-4">Hubungi kami</Link>
        </p>
      </section>
    </>
  );
}
