interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_COOKIE_API: string
  readonly VITE_SHOPIFY_SECRET_API: string
  readonly VITE_SHOPIFY_API_KEY: string
  readonly VITE_BASE_URL: string
  readonly VITE_MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
