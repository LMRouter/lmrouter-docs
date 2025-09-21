import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/',
  source: docs.toFumadocsSource(),
  icon(iconName) {
    if (!iconName) {
      return;
    }

    if (iconName in icons) {
      return createElement(icons[iconName as keyof typeof icons]);
    }
  },
});
