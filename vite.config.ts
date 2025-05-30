import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { flatRoutes } from 'remix-flat-routes';

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      routes(defineRoutes) {
        return flatRoutes('routes', defineRoutes, {
          ignoredRouteFiles: [
            '**/.*', // Ignore dot files (like .DS_Store)
            '**/index.tsx', // Ignore index.tsx files
            '**/index.ts', // Ignore index.ts files
            '**/components/**', // Ignore component files
            '**/sections/**', // Ignore section files
          ],
          // eslint-disable-next-line no-useless-escape
          routeRegex: /((\${nestedDirectoryChar}[\/\\][^\/\\:?*]+)|[\/\\]((route|layout)|(_[^\/\\:?*]+)))\.(ts|tsx|js|jsx|md|mdx)$/,
        });
      },
    }),
    tsconfigPaths(),
  ],
  css: {
    devSourcemap: true, // Enable CSS source maps in dev
  },
});
