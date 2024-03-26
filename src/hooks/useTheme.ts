import { useSelector } from "react-redux";
import { AppState } from "@/interface/store/theme.ts";
export const UseTheme = () => {
    const darkMode = useSelector((state: AppState) => state.themeStore.isDark);

    // 切换暗黑模式
    const switchDark = () => {
        const body = document.documentElement;
        darkMode == 'isDark'
            ? body.classList.add("dark")
            : body.classList.remove("dark");
    };
    return { switchDark }
}
