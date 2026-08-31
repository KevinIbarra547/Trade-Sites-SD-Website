import { type ReactNode } from 'react';
import { ArrowRight, Check, CircleAlert, Clock3, FileText, Image, Phone, ShieldCheck, Wrench, Zap } from 'lucide-react';
import { Link } from 'wouter';
import { useLanguage } from './site-shell';

export function PageIntro({ kicker, title, children }: { kicker: string; title: string; children: ReactNode }) {
  return <section className="paper-grid border-b border-[hsl(var(--border))] py-16 md:py-24"><div className="container-site"><div className="max-w-3xl reveal"><p className="section-kicker mb-4">{kicker}</p><h1 className="section-title !text-4xl md:!text-6xl">{title}</h1><div className="section-copy mt-6 text-lg">{children}</div></div></div></section>;
}

export function TextCta({ label, compact = false }: { label?: string; compact?: boolean }) {
  const { lang } = useLanguage();
  return <Link href="/contact" className={`btn-primary ${compact ? '!px-3 !py-2 !text-xs' : ''}`} data-testid="link-text-cta"><Phone size={compact ? 14 : 16} /> {label || (lang === 'en' ? 'Text Kevin to start' : 'Escríbele a Kevin para empezar')} <ArrowRight size={15} /></Link>;
}

export function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return <div className="max-w-2xl reveal"><p className="section-kicker mb-4">{kicker}</p><h2 className="section-title">{title}</h2>{copy && <p className="section-copy mt-5">{copy}</p>}</div>;
}

export function PhoneMockup() {
  const { lang } = useLanguage();
  return <div className="phone-card reveal-delay-2"><div className="phone-screen">
    <div className="mock-top"><div className="flex items-center justify-between"><div><p className="font-mono-ui text-[9px] tracking-[.12em] text-orange-200">NOE IBARRA</p><p className="text-xs mt-1 text-slate-200">{lang === 'en' ? 'Construction · San Diego' : 'Construcción · San Diego'}</p></div><span className="rounded-full border border-white/20 px-2 py-1 text-[9px] text-orange-200">#001</span></div><h3 className="mt-8 text-2xl font-bold tracking-tight text-white">{lang === 'en' ? 'Built right.' : 'Hecho bien.'}</h3><p className="mt-1 text-[11px] text-slate-300">{lang === 'en' ? '20 years of work, now easy to find.' : '20 años de trabajo, ahora fácil de encontrar.'}</p></div>
    <div className="mock-photo-grid"><div className="mock-photo" /><div className="mock-photo" /><div className="mock-photo" /></div>
    <div className="mock-body"><p className="font-bold text-[hsl(var(--primary))]">{lang === 'en' ? 'Services' : 'Servicios'}</p><div className="mock-list"><span>Framing</span><span>Drywall</span><span>Concrete</span><span>Remodels</span></div><div className="mt-6 flex items-center gap-2 text-[11px] text-[hsl(150_43%_31%)]"><ShieldCheck size={14} /> {lang === 'en' ? 'License status shown here' : 'Licencia visible aquí'}</div></div>
    <div className="mock-bottom"><div style={{ background: 'hsl(var(--accent))' }}>{lang === 'en' ? 'Call' : 'Llamar'}</div><div style={{ background: 'hsl(var(--primary))' }}>{lang === 'en' ? 'Text' : 'Texto'}</div></div>
  </div></div>;
}

export function FeatureIcon({ kind }: { kind: 'phone' | 'image' | 'wrench' | 'shield' | 'zap' | 'file' }) {
  const icons = { phone: Phone, image: Image, wrench: Wrench, shield: ShieldCheck, zap: Zap, file: FileText };
  const Icon = icons[kind];
  return <span className="feature-icon"><Icon size={19} /></span>;
}

export function StatusCard() {
  const { lang } = useLanguage();
  return <div className="outline-card overflow-hidden"><div className="placeholder-art"><div className="relative z-10 text-center"><div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-[hsl(var(--primary))] text-white"><Clock3 size={20} /></div><p className="font-mono-ui text-[10px] uppercase tracking-[.12em] text-[hsl(var(--primary))]">{lang === 'en' ? 'Work in progress' : 'Trabajo en proceso'}</p><p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">{lang === 'en' ? 'Future job photos will live here' : 'Aquí irán las fotos de futuros trabajos'}</p></div></div><div className="p-5"><div className="flex items-center justify-between gap-3"><h3 className="font-bold text-[hsl(var(--primary))]">Noe Ibarra</h3><span className="status-badge"><span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />{lang === 'en' ? 'Underway' : 'En proceso'}</span></div><p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">{lang === 'en' ? 'Construction · Build #001 · San Diego' : 'Construcción · Página #001 · San Diego'}</p><p className="mt-4 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{lang === 'en' ? 'The first build is underway while Kevin gathers real photos, services, license status, and past-client words.' : 'La primera página está en proceso mientras Kevin reúne fotos reales, servicios, licencia y palabras de clientes anteriores.'}</p></div></div>;
}

export function EmptyPortfolioCard({ number }: { number: number }) {
  const { lang } = useLanguage();
  return <div className="outline-card flex min-h-[310px] items-center justify-center border-dashed bg-[hsl(var(--muted))] p-7 text-center"><div><span className="font-mono-ui text-3xl text-[hsl(var(--primary)/.18)]">0{number}</span><h3 className="mt-3 font-bold text-[hsl(var(--primary))]">{lang === 'en' ? 'This spot is for your site.' : 'Este espacio es para tu página.'}</h3><p className="mt-2 max-w-[230px] text-sm leading-6 text-[hsl(var(--muted-foreground))]">{lang === 'en' ? 'First clients get the $150 introductory price while Kevin builds the portfolio.' : 'Los primeros clientes reciben el precio inicial de $150 mientras Kevin arma su portafolio.'}</p></div></div>;
}

export function IncludedList({ items }: { items: string[] }) {
  return <ul className="grid gap-3">{items.map((item, i) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[hsl(var(--muted-foreground))]"><span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[hsl(var(--accent)/.14)] text-[hsl(var(--accent))]"><Check size={11} strokeWidth={3} /></span><span data-testid={`text-included-${i}`}>{item}</span></li>)}</ul>;
}

export function HonestNote({ children }: { children: ReactNode }) {
  return <div className="flex gap-3 rounded-xl border border-[hsl(var(--accent)/.28)] bg-[hsl(var(--accent)/.06)] p-4 text-sm leading-6 text-[hsl(var(--muted-foreground))]"><CircleAlert className="mt-1 shrink-0 text-[hsl(var(--accent))]" size={17} /> <div>{children}</div></div>;
}