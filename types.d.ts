declare global {
    interface ImportMeta {
        readonly env: {
            VITE_APP_VERSION: string,
            VITE_APP_API_BASE_URL: string,
            MODE: string
        }
    }

    interface Window {
        __VERCEL_INSIGHTS__?: {
            routeChange: (path: string) => void;
        };
    }
}

export {};