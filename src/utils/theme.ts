export function setInitialTheme() {
  const localStorageTheme = localStorage.getItem('theme');
  if (localStorageTheme !== null) {
    document.documentElement.setAttribute('data-theme', localStorageTheme);
  } else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
}

export const themeInitializerScript = `(function() {
  ${setInitialTheme.toString()}
  setInitialTheme();
})()
`;
