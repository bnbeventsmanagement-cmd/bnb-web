/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_URL: string
  readonly VITE_CONTACT_PHONE: string
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_WHATSAPP_URL: string
  readonly VITE_INSTAGRAM_URL: string
  readonly VITE_LOGIN_URL: string
  readonly VITE_DEV_MODE: string
  readonly VITE_ENABLE_AXE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
