'use client';

import {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon } from '@/icons/menu';
import cn from 'clsx';
import { getIfPathnameEqualsItemHref, getNavData } from '@/utils/main';
import { LangSearchNav } from './lang-search-nav';

type Props = {
  lang: string;
}

export const NavMobile = ({ lang }: Props) => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const navMobileTrigger = useRef<HTMLDivElement | null>(null);
  const navMobileBody = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();

  const navData = getNavData(lang);
  const toggleNav = () => setNavVisibility((isVisible) => !isVisible);

  const handleDocumentClick = (e: MouseEvent) => {
    if (!navMobileBody.current || !navMobileTrigger.current) {
      return;
    }

    if (
      isNavVisible &&
      !navMobileBody.current.contains(e.target as Node) &&
      !navMobileTrigger.current.contains(e.target as Node)
    ) {
      setNavVisibility(false);
    }
  };

  useEffect(() => {
    document.onclick = handleDocumentClick;
    return () => {
      document.onclick = null;
    };
  }, [handleDocumentClick]);

  return (
    <nav className="nav-mobile">
      <div
        className={cn('nav-mobile__icon', {
          'nav-mobile__icon--active': isNavVisible
        })}
        onClick={toggleNav}
        ref={navMobileTrigger}

      >
        <MenuIcon />
      </div>
      <div
        className="nav-mobile__body"
        style={{display: isNavVisible ? 'block': 'none'}}
        ref={navMobileBody}
      >
        <div className="nav-mobile__menu">
          <ul className="nav-mobile__list">
            {
              navData.map((item) => (
                <li key={item.id} className={cn('nav-mobile__item', {
                  'nav-mobile__item--with-children': !!item.children,
                  'nav-mobile__item--active': item.children ?
                    item.children.some(child => pathname.includes(child.pageName)) :
                    getIfPathnameEqualsItemHref(pathname, item.href)
                })}>
                  {
                    item.children
                      ? (
                        <>
                          <span className="nav-mobile__trigger">
                              {item.label}
                          </span>
                          <ul className="nav-mobile__sublist">
                            {
                              item.children.map((subitem) => (
                                <li
                                  key={subitem.href}
                                  className={cn('nav-mobile__subitem', {
                                    'nav-mobile__subitem--active': pathname.includes(subitem.pageName)
                                  })}
                                >
                                  <Link href={subitem.href} className="nav-mobile__sublink">
                                    {subitem.label}
                                  </Link>
                                </li>
                              ))
                            }
                          </ul>
                        </>
                      )
                      : (
                        <Link href={item.href} className="nav-mobile__link">
                          {item.label}
                        </Link>
                      )
                  }
                </li>
              ))
            }
          </ul>
        </div>
        <div className="nav-mobile__utils">
          <LangSearchNav
            lang={lang}
          />
        </div>
      </div>
    </nav>
  );
};
