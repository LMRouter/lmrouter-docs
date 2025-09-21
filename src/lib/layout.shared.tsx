import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Home } from 'lucide-react';

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
          <img src="/icon.svg" alt="LMRouter" className="size-6" />
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
    ],
    githubUrl: 'https://github.com/LMRouter/lmrouter',
  };
}
