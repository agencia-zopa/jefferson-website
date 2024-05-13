import { useCallback, useEffect, useState } from 'react';

import scssBreakpoints from '@/breakpoints.module.scss';
import {useWindowEvent} from "@/hooks/use-window-event";

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg';
type Breakpoints = Record<Breakpoint, Range>;
type Range = {
  min: number;
  max: number;
}

export const breakpoints = Object.fromEntries(Object.entries(scssBreakpoints).map(([name, value]) => [name, parseInt(value.slice(0, -2))])) as unknown as {
  [key in Breakpoint as `${key}-min`]: number; } & {
  [key in Breakpoint as `${key}-max`]: number;
};


export type UseBreakpointsOut = {
  [key in Breakpoint as `${key}AndDown`]: boolean;
} & {
  [key in Breakpoint as `${key}AndUp`]: boolean;
};

export function useBreakpoints(): UseBreakpointsOut {
  const [value, setValue] = useState<UseBreakpointsOut>({
    xsAndUp: false,
    xsAndDown: false,
    smAndUp: false,
    smAndDown: false,
    mdAndUp: false,
    mdAndDown: false,
    lgAndUp: false,
    lgAndDown: false
  });

  const handleResize = useCallback(() => {
    setValue({
      xsAndUp: window.innerWidth >= breakpoints['xs-min'],
      xsAndDown: window.innerWidth <= breakpoints['xs-max'],
      smAndUp: window.innerWidth >= breakpoints['sm-min'],
      smAndDown: window.innerWidth <= breakpoints['sm-max'],
      mdAndUp: window.innerWidth >= breakpoints['md-min'],
      mdAndDown: window.innerWidth <= breakpoints['md-max'],
      lgAndUp: window.innerWidth >= breakpoints['lg-min'],
      lgAndDown: window.innerWidth <= breakpoints['lg-max']
    });
  }, []);

  useWindowEvent('resize', handleResize, { initialize: true });

  return value;
}

export function useSpecificBreakpoint(type: 'gte' | 'lte',breakpoint: number): boolean {
  const [value, setValue] = useState<boolean>(false);

  const handleResize = useCallback(() => {
    setValue(
      type === 'gte'
      ? window.innerWidth >= breakpoint
      : window.innerWidth <= breakpoint
    );
  }, []);

  useWindowEvent('resize', handleResize, { initialize: true });

  return value;
}
