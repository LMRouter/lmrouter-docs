import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Github, Home } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <circle cx={12} cy={12} r={12} fill="currentColor" />
          </svg>
          LMRouter
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        icon: <Home />,
        text: 'LMRouter Homepage',
        url: 'https://lmrouter.com',
        secondary: false,
      },
      {
        icon: <Github />,
        text: 'GitHub',
        url: 'https://github.com/LMRouter/lmrouter',
        secondary: false,
      },
    ],
  };
}
