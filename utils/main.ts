import { dictionary } from '@/lang/main';
import { pageLinks } from '@/constants/main';

export const getIfPathnameEqualsItemHref = (pathname: string, href: string) => {
    if (pathname[pathname.length - 1] === '/') {
        return pathname === href;
    }
    return pathname === href.slice(0, -1);
};

export const getNavData = (lang: string) => ([
    {
        id: 1,
        label: dictionary.NAV_HOME[lang],
        pageName: pageLinks.home,
        href: `/${lang}/`
    },
    {
        id: 2,
        label: dictionary.NAV_ARMOR[lang],
        children: [
            {
                label: `${dictionary.SECTION_LINKS_ARMOR_PLASTIC_TITLE[lang]} 1/72`,
                pageName: pageLinks.armorPlasticKits172,
                href: `/${lang}/${pageLinks.armorPlasticKits172}/`
            },
            {
                label: `${dictionary.SECTION_LINKS_ARMOR_PLASTIC_TITLE[lang]} 1/35`,
                pageName: pageLinks.armorPlasticKits135,
                href: `/${lang}/${pageLinks.armorPlasticKits135}/`
            },
            {
                label: `${dictionary.SECTION_LINKS_ARMOR_RESIN_TITLE[lang]} 1/72`,
                pageName: pageLinks.armorResinKits172,
                href: `/${lang}/${pageLinks.armorResinKits172}/`
            },
            {
                label: `${dictionary.SECTION_LINKS_ARMOR_RESIN_TITLE[lang]} 1/100`,
                pageName: pageLinks.armorResinKits1100,
                href: `/${lang}/${pageLinks.armorResinKits1100}/`
            }
        ]
    },
    {
        id: 3,
        label: dictionary.NAV_FIGURES[lang],
        children: [
            {
                label: `${dictionary.SCALE[lang]} 1/72`,
                pageName: pageLinks.figures172,
                href: `/${lang}/${pageLinks.figures172}/`
            },
            {
                label: `${dictionary.SCALE[lang]} 1/43`,
                pageName: pageLinks.figures143,
                href: `/${lang}/${pageLinks.figures143}/`
            },
            {
                label: `${dictionary.SCALE[lang]} 1/35`,
                pageName: pageLinks.figures135,
                href: `/${lang}/${pageLinks.figures135}/`
            }
        ]
    },
    {
        id: 4,
        label: dictionary.NAV_ACCESSORIES[lang],
        children: [
            {
                label: `${dictionary.SCALE[lang]} 1/72`,
                pageName: pageLinks.accessories172,
                href: `/${lang}/${pageLinks.accessories172}/`
            },
            {
                label: `${dictionary.SCALE[lang]} 1/35`,
                pageName: pageLinks.accessories135,
                href: `/${lang}/${pageLinks.accessories135}/`
            }
        ]
    },
    {
        id: 5,
        label: dictionary.NAV_WHERE_TO_BUY[lang],
        pageName: pageLinks.whereToBuy,
        href: `/${lang}/${pageLinks.whereToBuy}/`
    }
]);

// export const getPagesArray = (pagesNum) => {
//     const pages = [];
//
//     for (let i = 1; i <= pagesNum; i++) {
//         pages.push(i);
//     }
//
//     return pages;
// };

// export const getJSON = (url, onSuccess, onError) => {
//     const xhr = new XMLHttpRequest();
//
//     xhr.onload = xhr.onerror = () => {
//         if (xhr.status === 200) {
//             onSuccess(xhr.responseText);
//         } else {
//             onError(xhr.status);
//         }
//     };
//
//     xhr.open('GET', url, true);
//     xhr.send(null);
// };
