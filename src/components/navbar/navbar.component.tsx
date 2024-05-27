'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { SectionIDs } from '@/app/section-ids';
import { LogoWithDetails } from '@/components/logo-with-details/logo-with-details.component';
import { NavItems } from '@/components/nav-items/nav-items.component';
import { scrollToId } from '@/hooks/scroll-to-id';
import { breakpoints, useSpecificBreakpoint } from '@/hooks/use-breakpoints';
import { useScrollDetection } from '@/hooks/use-scroll-detection';

import { ScheduleAppointment } from '../schedule-appointment/schedule-appointment.component';
import styles from './navbar.module.scss';

export function Navbar() {
  const isMobile = useSpecificBreakpoint('lte', 900);

  const hideLogoDetails = useSpecificBreakpoint('lte', 1100);

  const isScrolled = useScrollDetection(10);

  if (isMobile) {
    return null;
  }

  return (
    <nav className={`${styles.container} ${isScrolled ? styles.shadow : ''}`}>
      <LogoWithDetails hideDetails={hideLogoDetails} />
      <div className={styles.items}>
        <NavItems
          onClick={(e, path, id) =>
            id !== undefined ? scrollToId(e, path, id) : undefined
          }
        />
      </div>
      <div className={styles.ctaWrapper}>
        <ScheduleAppointment hasShadow={true} />
      </div>
    </nav>
  );
}
