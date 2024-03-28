import { Icon } from '@iconify/react';
import { Switch, Card, CardBody } from '@nextui-org/react';
import { useShallow } from 'zustand/react/shallow';

const Theme = () => {
  const { switchDark } = UseTheme();

  const { isDark, updateDark } = themeStore(
    useShallow((state) => ({
      isDark: state.isDark,
      updateDark: state.updateDark,
    })),
  );

  // 事件处理函数，用于处理主题切换
  const handleThemeChange = (isSelected: boolean) => {
    updateDark(isSelected ? 'isDark' : 'isLight');
    switchDark();
  };
  return (
    <>
      <div className="h-full flex flex-col gap-5 z-10 p-3">
        <Card className="bg-default-400/20 dark:bg-default-500/30 py-2 px-4">
          <CardBody>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Theme Settings</h1>
            <div className="space-y-4">
              <div>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <div className="mr-3 bg-green-500 w-6 h-6 rounded-full shadow-sm"></div>
                    <input type="radio" name="colorTheme" value="green" className="sr-only" />
                    <span className="text-gray-700 dark:text-gray-100">Green Forest</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <div className="mr-3 bg-pink-500 w-6 h-6 rounded-full shadow-sm"></div>
                    <input type="radio" name="colorTheme" value="pink" className="sr-only" />
                    <span className="text-gray-700 dark:text-gray-100">Pink Blossom</span>
                  </label>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="bg-default-400/20 dark:bg-default-500/30 py-2 px-4">
          <CardBody>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Dark Mode</h1>
            <Switch
              isSelected={isDark == 'isLight' ? false : true}
              size="lg"
              color="success"
              value={isDark}
              onValueChange={handleThemeChange}
              thumbIcon={({ isSelected, className }) => (
                <Icon
                  icon={`${isSelected ? 'material-symbols:dark-mode-outline' : 'emojione:sun'}`}
                  className={className}
                />
              )}
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Theme;
