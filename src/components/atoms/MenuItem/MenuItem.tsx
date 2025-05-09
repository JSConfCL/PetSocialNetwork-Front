import classNames from 'classnames';
import Link, { type LinkProps } from "next/link";
import type { PropsWithChildren, ReactElement } from "react";

export interface MenuItemProps extends LinkProps, PropsWithChildren {
  isActive: boolean;
}

export const MenuItem = (props: MenuItemProps): ReactElement => {
  const { isActive, children, ...otherProps } = props;

  const componentClasses = classNames([
    'active:bg-purple-200',
    'active:scale-[0.98]',
    'dark:hover:bg-purple-950/40',
    'dark:hover:text-purple-300',
    'dark:text-purple-300',
    'flex',
    'gap-2',
    'hover:scale-[1.05]',
    'hover:bg-purple-100',
    'hover:text-purple-700',
    'items-center',
    'p-2',
    'rounded-md',
    'text-purple-500',
    'transition-all',
    'duration-300',
    'ease-in-out',
    isActive && 'bg-purple-200 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300',
  ]);

  return (
    <Link
      {...otherProps}
      className={componentClasses}
    >
      { children }
    </Link>
  );
}

export default MenuItem;
