import "./layout.css";
import { ReactNode } from "react";
import { LogoIcon } from "@/icons/logo";
import { LangSearchNav } from './lang-search-nav';
import { Nav } from './nav';
import { NavMobile } from './nav-mobile';

type Props = {
  lang: string;
  title: string;
  description: string;
  pageName: string;
  newsItems: any; // todo
  children: ReactNode;
};

export const Layout = ({ lang, title, description, pageName, newsItems, children }: Props) => (
  <html lang={lang}>
  <head>
    <meta name="description" content={description} />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16" />
    <link rel="manifest" href="/favicons/manifest.json" />
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#d30609" />
    <link rel="shortcut icon" href="/favicons/favicon.ico" />
    <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
    <meta name="theme-color" content="#ffffff" />
    <title>{title}</title>
  </head>
  <body>
  <section className="layout">
    <header className="layout__header">
      <div className="layout__head">
        <div className="layout__logo">
          <div className="layout__logo-icon">
            <LogoIcon />
          </div>
        </div>
        <div className="layout__nav-mobile">
          <NavMobile lang={lang} pageName={pageName} />
        </div>
        <div className="layout__nav">
          <Nav lang={lang} pageName={pageName} />
        </div>
        <div className="layout__utils">
          <LangSearchNav lang={lang} pageName={pageName} />
        </div>
      </div>
      <div className="layout__slider">
        slider
      </div>
    </header>
    <div className="layout__main">
      {children}
    </div>
    <div className="layout__footer">
      Zebrano Model, {new Date().getFullYear()} &copy;
    </div>
  </section>
  </body>
  </html>
);
