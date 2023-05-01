type NavDataItemMain = {
  id: number;
  label: string;
  pageName: string;
  href: string;
};

type NavDataItemChild = {
  label: string;
  pageName: string;
  href: string;
};

type NavDataItemWithChildren = {
  id: number;
  label: string;
  children: NavDataItemChild[];
};

export type NavDataItem = NavDataItemMain | NavDataItemWithChildren;

export type BaseItem = {
  name: Record<string, string>;
  slug: string;
  article: string;
  visible: boolean;
  subsection: string;
  sortOrder: number;
  type: string;
  lifeCycleState: string;
  scale: string;
  boxImage: string;
  boxImageSmall?: string;
  boxType?: string;
}

export type ItemExtended = BaseItem & {
  title: Record<string, string>;
  description: Record<string, string>;
  text: Record<string, string>;
  newsImage: string;
  bucketOfImages: string[];
};
