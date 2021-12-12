const THEMES_MODULES = import.meta.glob('/src/themes/*.css');
let THEMES: string[] = []
Object.keys(THEMES_MODULES).forEach(path => {
  const theme = THEMES_MODULES[path];
  const themeName = path.split('/')[3].split('.')[0];
  THEMES.push(themeName)
  theme()
})

export default THEMES