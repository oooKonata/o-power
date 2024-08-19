// vite: glob函数导入多模块，动态导入静态资源
const staticResourceModules: Record<string, any> = import.meta.glob(
  ['./**/*.png', './**/*.jpg'],
  {
    import: 'default',
    eager: true,
  }
)

export function loadStaticResource(url: string): string {
  return url.startsWith('/')
    ? staticResourceModules[`.${url}`]
    : staticResourceModules[`./${url}`]
}
