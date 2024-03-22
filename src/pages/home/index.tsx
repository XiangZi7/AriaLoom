import { Switch } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { setDark } from "@/stores/modules/themeStore";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/interface/store/theme.ts";
import { UseTheme } from "@/hooks/useTheme";
export default function Home() {
  const dispatch = useDispatch();
  const { switchDark } = UseTheme();

  // 假设redux store中存储的主题状态是这样访问的
  const darkMode = useSelector((state: AppState) => state.themeStore.isDark);

  // 事件处理函数，用于处理主题切换
  const handleThemeChange = (isSelected: boolean) => {
    dispatch(setDark(isSelected ? "isDark" : "isLight"));
    switchDark();
  };
  return (
    <div className="p-2">
      <Switch
        defaultSelected
        size="lg"
        value={darkMode}
        onValueChange={handleThemeChange}
        color="success"
        startContent={<Icon icon="ph:sun-light" />}
        endContent={<Icon icon="material-symbols:dark-mode-outline" />}
      />
    </div>
  );
}
