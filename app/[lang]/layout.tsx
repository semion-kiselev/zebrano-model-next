import '@/styles/index.scss';
import React, { ReactNode } from 'react';
import { LogoIcon } from '@/icons/logo';
import { NavMobile } from '@/components/layout/nav-mobile';
import { Nav } from '@/components/layout/nav';
import { LangSearchNav } from '@/components/layout/lang-search-nav';
import { Slider } from '@/components/layout/slider';

type Props = {
  children: ReactNode;
  params: { lang: string };
}

const RootLayout = ({ children, params: { lang } }: Props) => {
  return (
    <html lang={lang}>
    <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16" />
      <link rel="manifest" href="/favicons/manifest.json" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#d30609" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
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
            <NavMobile lang={lang} />
          </div>
          <div className="layout__nav">
            <Nav lang={lang} />
          </div>
          <div className="layout__lang-search-nav">
            <LangSearchNav lang={lang} />
          </div>
        </div>
        <div className="layout__slider">
          <Slider lang={lang} />
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
  )
};

export default RootLayout;
