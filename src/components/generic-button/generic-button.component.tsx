import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import styles from './generic-button.module.scss'
import React from "react";

export interface GenericButtonProps {
  text: string;
  href?: string;
  iconSrc?: StaticImport;
  iconAlt?: string;
  backgroundColor: string;
  textColor: string;
  fill?: boolean;
  outline?: boolean;
}

export function GenericButton({text, iconSrc, iconAlt, href, backgroundColor, textColor, fill, outline}: GenericButtonProps) {
  // @ts-ignore
  const iconSrcStr = iconSrc !== undefined ? iconSrc.src ?? iconSrc.default.src : undefined;

  return <a
    className={`${styles.genericButton} ${outline ? styles.outline : ''} ${fill ? styles.fill : ''}`}
    href={href}
    style={{'--background-color': backgroundColor, '--color': textColor} as React.CSSProperties}
  >
    <span>{text}</span>
    {iconSrc && <div className={styles.icon} style={{'--src': `url(${iconSrcStr})`} as React.CSSProperties}/>}
  </a>
}
