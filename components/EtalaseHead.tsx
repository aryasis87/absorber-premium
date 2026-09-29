import React from 'react';

/* Kop halaman dalam "Etalase": kisi garis rambut, angka besar beroutline,
   label kapital renggang, judul tegas. Tanpa sudut bulat, bayangan, gradasi. */
export default function EtalaseHead({
  no,
  tag,
  title,
  lead,
  children,
}: {
  no: string;
  tag: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-ink/12 bg-bone pt-32 pb-14 sm:pt-40 md:pb-20">
      <div aria-hidden="true" className="hairlines absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[auto_minmax(0,1fr)] md:gap-12">
        <span aria-hidden="true" className="numeral text-ink">{no}</span>
        <div className="max-w-3xl">
          <p className="tag mb-4 text-sage">{tag}</p>
          <h1 className="text-[2.4rem] leading-[1.04] font-semibold tracking-[-0.04em] text-ink sm:text-5xl lg:text-[3.6rem]">{title}</h1>
          {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{lead}</p>}
          {children}
        </div>
      </div>
    </header>
  );
}
