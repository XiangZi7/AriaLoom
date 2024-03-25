import { Icon } from "@iconify/react";
import { Switch } from "@nextui-org/react";
import { setDark } from "@/stores/modules/themeStore";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/interface/store/theme.ts";
import { UseTheme } from "@/hooks/useTheme";
const Theme = () => {
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
    <>
      <div className=" h-full flex flex-col gap-5 z-10 p-3">
        <div className="bg-white bg-default-400/20 dark:bg-default-500/30 shadow-lg rounded-lg px-8 py-4">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Theme Settings
          </h1>
          <div className="space-y-4">
            <div>
              <div className="mt-2 space-y-2">
                <label className="flex items-center cursor-pointer">
                  <div className="mr-3 bg-green-500 w-6 h-6 rounded-full shadow-sm"></div>
                  <input
                    type="radio"
                    name="colorTheme"
                    value="green"
                    className="sr-only"
                  />
                  <span className="text-gray-700 dark:text-gray-100">
                    Green Forest
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <div className="mr-3 bg-pink-500 w-6 h-6 rounded-full shadow-sm"></div>
                  <input
                    type="radio"
                    name="colorTheme"
                    value="pink"
                    className="sr-only"
                  />
                  <span className="text-gray-700 dark:text-gray-100">
                    Pink Blossom
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* 暗黑模式 */}
        <div className="bg-white bg-default-400/20 dark:bg-default-500/30  shadow-lg rounded-lg px-8 py-4">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Dark Mode
          </h1>
          <div>
            <label className="flex items-center cursor-pointer">
              <Switch
                defaultSelected
                size="lg"
                value={darkMode}
                onValueChange={handleThemeChange}
                color="success"
                startContent={<Icon icon="ph:sun-light" />}
                endContent={<Icon icon="material-symbols:dark-mode-outline" />}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Theme;
