'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import cn from 'clsx';
import { getNavData } from '@/utils/main';
import { usePathname } from 'next/navigation';
import { getIfActiveMenuItem } from './nav.utils';

type Props = {
  lang: string;
}

export const Nav = ({ lang }: Props) => {
  const [activeMenuItemId, setActiveMenuItemId] = useState<number| null>(null);

  const pathname = usePathname();

  const navData = getNavData(lang);

  const handleTriggerClick = (id: number) => {
    if (id === activeMenuItemId) {
      setActiveMenuItemId(null);
      return;
    }
    setActiveMenuItemId(id);
  };

  const handleDocumentClick = (e: MouseEvent) => {
    const activeItemWithChildren = document.querySelector('.nav__item--with-opened-children');

    if (activeItemWithChildren && !activeItemWithChildren.contains(e.target as Node)) {
      setActiveMenuItemId(null);
    }
  };

  useEffect(() => {
    document.onclick = handleDocumentClick;
    return () => {
      document.onclick = null;
    };
  }, [handleDocumentClick]);

  return (
    <nav className="nav">
      <ul className="nav__list">
        {
          navData.map((item) => (
            <li key={item.id} className={cn('nav__item', {
              'nav__item--with-opened-children': activeMenuItemId === item.id,
              'nav__item--with-children': !!item.children,
              'nav__item--active': getIfActiveMenuItem(item, activeMenuItemId, pathname)
            })}>
              {
                item.children
                  ? (
                    <>
                      <span
                        className="nav__trigger"
                        onClick={() => handleTriggerClick(item.id)}
                      >
                          {item.label}
                      </span>
                      <ul
                        className="nav__sublist"
                        style={{display: activeMenuItemId === item.id ? 'block' : 'none'}}
                      >
                        {
                          item.children.map((subitem) => (
                            <li
                              key={subitem.href}
                              className={cn('nav__subitem', {
                                'nav__subitem--active': pathname.includes(subitem.pageName)
                              })}
                            >
                              <Link href={subitem.href} className="nav__sublink">
                                {subitem.label}
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                    </>
                  )
                  : (
                    <Link href={item.href} className="nav__link">
                      {item.label}
                    </Link>
                  )
              }
            </li>
          ))
        }
      </ul>
    </nav>
  );
};
