'use client';

import {useRef, SyntheticEvent} from 'react';
import SlickSlider from 'react-slick';
import { useRouter } from 'next/navigation';
import cn from 'clsx';
import { SLIDER_SETTINGS, IMAGE_URL, NEWS_IMAGE, itemStatuses, itemsSlugsToDisplayInNews } from '@/constants/main'
import {dictionary} from "@/lang/main";
import { ItemExtended } from '@/types/main';
import items from "@/public/items.json";

type Props = {
  lang: string;
}

const newsItems = items.filter(item => itemsSlugsToDisplayInNews.includes(item.slug)) as ItemExtended[];

export const Slider = ({ lang }: Props) => {
  const router = useRouter();
  const urlToNavigateRef = useRef<string | null>(null);

  const handleSliderRootClick = (e: SyntheticEvent) => {
    if (e.target && (e.target as HTMLElement).classList.contains('slick-arrow')) {
      return;
    }

    if (urlToNavigateRef.current) {
      router.push(urlToNavigateRef.current);
    }
  };

  const handleItemClick = (url: string, itemLifeCycleState: string) => () => {
    if (itemLifeCycleState === itemStatuses.COMING) {
      urlToNavigateRef.current = null;
      return;
    }
    urlToNavigateRef.current = url;
  }

  return (
    <div
      className="slider"
      onClick={handleSliderRootClick}
    >
      <SlickSlider {...SLIDER_SETTINGS}>
        {newsItems.map(item => (
          <div
            key={item.slug}
            className="slider__item-wrapper"
            onClick={handleItemClick(
              `/${lang}/${item.subsection}/${item.slug}`,
              item.lifeCycleState
            )}
          >
            <span className={cn('slider__item-link', {
              'slider__item-link--hovered': item.lifeCycleState !== itemStatuses.COMING
            })}>
              <div className="slider__item">
                <div className="slider__item-image-wrapper">
                  <div className={cn('slider__item-status', {
                    'slider__item-status--coming': item.lifeCycleState === itemStatuses.COMING
                  })}>
                    {
                      item.lifeCycleState === itemStatuses.COMING
                        ? dictionary.NEW_ITEM_COMING_TITLE[lang]
                        : dictionary.NEW_ITEM_ON_TITLE[lang]
                    }
                  </div>
                  <img
                    src={`${IMAGE_URL}/${NEWS_IMAGE}/${item.newsImage}`}
                    alt={item.description[lang]}
                    className="slider__item-image"
                  />
                </div>
                <div className="slider__item-name">
                <span className={cn('slider__item-name-text', {
                  'slider__item-name-text--simple': item.lifeCycleState === itemStatuses.COMING
                })}>
                    {item.name[lang]}
                </span>
                </div>
              </div>
            </span>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};
