'use client';

import cn from 'clsx';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { dictionary } from '@/lang/main';
import './lang-search-nav.css';
import { pageLinks, NETLIFY_LOCALE_COOKIE_NAME } from '@/constants/main';
import { SearchIcon } from '@/icons/search';

type Props = {
  lang: string;
  pageName: string;
}

const setNetlifyLangCookie = (lang: string) => {
  const year = 31536000;
  document.cookie = `${NETLIFY_LOCALE_COOKIE_NAME}=${lang};path=/;max-age=${year}`
};

export const LangSearchNav = ({ lang, pageName }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const changeLang = () => {
    const newLang = lang === 'ru' ? 'en' : 'ru';
    setNetlifyLangCookie(newLang);

    const newLocation = pathname.replace(new RegExp(`/${lang}`), `/${newLang}`);
    router.push(newLocation);
  }

  return (
    <div className="lang-search-nav">
      <ul className="lang-search-nav__list">
        <li
          className="lang-search-nav__item lang-search-nav__item--locale"
          onClick={changeLang}
        >
          {dictionary.CHANGE_LOCALE[lang]}
        </li>
        <li className={cn('lang-search-nav__item lang-search-nav__item--search', {
          'lang-search-nav__item--active': pageName === pageLinks.search
        })}>
          <i className="lang-search-nav__icon">
            <SearchIcon />
          </i>
          <Link
            className="lang-search-nav__search-link"
            href={`/${lang}/${pageLinks.search}/`}
          >
            {dictionary.SEARCH_SEARCH[lang]}
          </Link>
        </li>
      </ul>
    </div>
  );
};
