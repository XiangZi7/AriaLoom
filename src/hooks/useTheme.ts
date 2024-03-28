export const UseTheme = () => {
  // 简写
  const isDark = themeStore((state) => state.isDark);

  // 切换暗黑模式
  const switchDark = () => {
    const body = document.documentElement;
    isDark == 'isDark' ? body.classList.add('dark') : body.classList.remove('dark');
  };
  return { switchDark };
};
