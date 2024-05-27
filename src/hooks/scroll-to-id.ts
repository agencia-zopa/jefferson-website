import React from 'react';

export function scrollToId(
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  path: string,
  id: string
) {
  if (window.location.pathname === path) {
    e.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 80; // account for the header
      window.scrollTo({ top, behavior: 'smooth' });
      history.pushState(null, '', `#${id}`);
    }
  }
}
