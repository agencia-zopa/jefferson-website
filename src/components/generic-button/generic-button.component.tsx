import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React from 'react';

import styles from './generic-button.module.scss';

export interface GenericButtonProps {
  className?: string;
  text: string;
  href?: string;
  iconSrc?: StaticImport;
  iconAlt?: string;
  backgroundColor: string;
  textColor: string;
  fill?: boolean;
  outline?: boolean;
}

export function GenericButton({
  className,
  text,
  iconSrc,
  href,
  backgroundColor,
  textColor,
  fill,
  outline
}: GenericButtonProps) {
  const iconSrcStr =
    // @ts-ignore Shitty code :)
    iconSrc !== undefined ? iconSrc.src ?? iconSrc.default.src : undefined;

  return (
    <a
      className={`${styles.genericButton} ${outline ? styles.outline : ''} ${fill ? styles.fill : ''} ${className ?? ''}`}
      href={href}
      style={
        {
          '--background-color': backgroundColor,
          '--color': textColor
        } as React.CSSProperties
      }
    >
      <span>{text}</span>
      {iconSrc && (
        <div
          className={styles.icon}
          style={{ '--src': `url(${iconSrcStr})` } as React.CSSProperties}
        />
      )}
    </a>
  );
}
