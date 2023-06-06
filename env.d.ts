// 环境变量类型声明
interface ImportMetaEnv {
    VITE_BASE_API: string,
    VITE_APP_PORT: number,
    VITE_PUBLIC_PATH: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}