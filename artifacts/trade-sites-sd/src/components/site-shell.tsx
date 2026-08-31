import { useState, createContext, useContext, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ArrowUpRight, MessageSquareText } from 'lucide-react';

type Language = 'en' | 'es';
const LanguageContext = createContext<{ lang: Language; setLang: (lang: Language) => void }>({ lang: 'en', setLang: () => undefined });

export function useLanguage() {
  return useContext(LanguageContext);
}

const navItems = [
  { href: '/', en: 'Home', es: 'Inicio' },
  { href: '/work', en: 'The work', es: 'El trabajo' },
  { href: '/services', en: 'What you get', es: 'Qué incluye' },
  { href: '/process', en: 'How it works', es: 'Cómo funciona' },
  { href: '/about', en: 'About Kevin', es: 'Sobre Kevin' },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const copy = lang === 'en';
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="site-shell">
        <header className="site-nav">
          <div className="nav-inner">
            <Link href="/" className="flex items-center gap-2.5 shrink-0" data-testid="link-brand">
              <span className="brand-mark" aria-hidden="true">TS</span>
              <span>
                <span className="brand-type">TRADE SITES SD</span>
                <span className="brand-sub">BUILT FOR THE NEXT JOB</span>
              </span>
            </Link>
            <nav className="nav-links" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={`nav-link ${location === item.href ? 'active' : ''}`} data-testid={`link-nav-${item.href === '/' ? 'home' : item.href.slice(1)}`}>
                  {copy ? item.en : item.es}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2.5 nav-action">
              <button className="btn-ghost !rounded-full !px-3 !py-2 !text-xs" onClick={() => setLang(copy ? 'es' : 'en')} data-testid="button-language">
                {copy ? 'ES' : 'EN'}
              </button>
              <Link href="/contact" className="btn-primary !py-2.5" data-testid="link-nav-contact">
                <MessageSquareText size={15} /> {copy ? 'Text Kevin' : 'Escríbele a Kevin'}
              </Link>
            </div>
            <button className="nav-mobile" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
          {menuOpen && (
            <div className="mobile-menu">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="nav-link" data-testid={`link-mobile-${item.href === '/' ? 'home' : item.href.slice(1)}`}>
                  {copy ? item.en : item.es}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-3">
                <button className="btn-ghost flex-1" onClick={() => setLang(copy ? 'es' : 'en')} data-testid="button-mobile-language">{copy ? 'Ver en español' : 'View in English'}</button>
                <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary flex-1" data-testid="link-mobile-contact">{copy ? 'Text Kevin' : 'Escríbele a Kevin'}</Link>
              </div>
            </div>
          )}
        </header>
        <main>{children}</main>
        <div className="mobile-action">
          <Link href="/contact" className="btn-primary" data-testid="link-mobile-sticky-cta">
            <MessageSquareText size={17} /> {copy ? 'Text Kevin — start here' : 'Escríbele a Kevin — empieza aquí'} <ArrowUpRight size={16} />
          </Link>
        </div>
        <footer className="footer">
          <div className="container-site py-14">
            <div className="grid gap-10 md:grid-cols-[1.4fr_.8fr_.8fr]">
              <div>
                <div className="flex items-center gap-2.5 mb-4"><span className="brand-mark">TS</span><span className="brand-type !text-white">TRADE SITES SD</span></div>
                <p className="max-w-sm text-sm leading-7">{copy ? 'Affordable hire-me websites for San Diego trade workers with a good reputation and no easy place online to send customers.' : 'Páginas web accesibles para trabajadores de oficios en San Diego que tienen buena reputación, pero ningún lugar sencillo en internet para enviar a sus clientes.'}</p>
                <p className="font-mono-ui text-[10px] tracking-[.12em] uppercase mt-6 text-slate-400">{copy ? 'A small local build, done carefully.' : 'Un trabajo local, hecho con cuidado.'}</p>
              </div>
              <div>
                <p className="font-mono-ui text-[10px] uppercase tracking-[.14em] text-orange-300 mb-4">{copy ? 'Explore' : 'Explora'}</p>
                <div className="grid gap-2 text-sm">
                  {navItems.slice(1).map((item) => <Link key={item.href} href={item.href} className="hover:text-white transition-colors" data-testid={`link-footer-${item.href.slice(1)}`}>{copy ? item.en : item.es}</Link>)}
                </div>
              </div>
              <div>
                <p className="font-mono-ui text-[10px] uppercase tracking-[.14em] text-orange-300 mb-4">{copy ? 'Start a conversation' : 'Empieza la conversación'}</p>
                <p className="text-sm leading-6 mb-4">{copy ? 'Phone and email are placeholders until Kevin confirms the final business details.' : 'El teléfono y correo son ejemplos hasta que Kevin confirme los datos finales.'}</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-white text-sm font-bold hover:text-orange-300" data-testid="link-footer-contact">{copy ? 'Contact Kevin' : 'Contacta a Kevin'} <ArrowUpRight size={14} /></Link>
              </div>
            </div>
            <div className="border-t border-slate-700/70 mt-12 pt-5 flex flex-col gap-2 sm:flex-row sm:justify-between text-xs">
              <span>© 2025 Trade Sites SD · San Diego, CA</span>
              <span>{copy ? 'Contact details shown on this first version are placeholders.' : 'Los datos de contacto en esta primera versión son ejemplos.'}</span>
            </div>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
}