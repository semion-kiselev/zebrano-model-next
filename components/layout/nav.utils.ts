import { getIfPathnameEqualsItemHref } from '@/utils/main'
import { NavDataItem } from '@/types/main';

const getIfNavItemWithChildrenIsActive = (
  itemId: number,
  itemChildren: { label: string; href: string; pageName: string }[],
  activeMenuItemId: number | null,
  pathname: string
) => {
  const childIsActive = itemChildren.some(child => pathname.includes(child.pageName));
  return childIsActive || activeMenuItemId === itemId;
};

export const getIfActiveMenuItem = (
  item: NavDataItem,
  activeMenuItemId: number | null,
  pathname: string,
) => {
  if ("children" in item) {
    return getIfNavItemWithChildrenIsActive(item.id, item.children, activeMenuItemId, pathname);
  }
  return getIfPathnameEqualsItemHref(pathname, item.href);
}
