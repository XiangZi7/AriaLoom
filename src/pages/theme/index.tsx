import { Icon } from '@iconify/react';
import { Switch, Card, CardBody } from '@nextui-org/react';
import { useShallow } from 'zustand/react/shallow';

const Theme = () => {
  const { switchDark } = UseTheme();

  // const {updateBreadcrumbs} = menuStore(
  //   useShallow((state))=>({
  //   upBreadcrumbs:state.upBreadcrumbs
  // }))
  const { updateBreadcrumbs, Breadcrumbs } = menuStore(
    useShallow((state) => ({
      updateBreadcrumbs: state.updateBreadcrumbs,
      Breadcrumbs: state.Breadcrumbs,
    })),
  );

  const { isDark, updateDark } = themeStore(
    useShallow((state) => ({
      isDark: state.isDark,
      updateDark: state.updateDark,
    })),
  );

  // 事件处理函数，用于处理主题切换
  const handleThemeChange = (isSelected: any) => {
    updateDark(isSelected);
    switchDark();
  };
  const handleMenuChange = (isSelected: boolean) => {
    updateBreadcrumbs(isSelected);
  };
  return (
    <>
      <div className="h-full flex flex-col gap-5 z-10 p-3">
        <Card className="bg-default-400/20 dark:bg-default-500/30 py-2 px-4">
          <CardBody>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Dark Mode
            </h1>
            <Switch
              isSelected={isDark}
              size="lg"
              color="success"
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
        <Card className="bg-default-400/20 dark:bg-default-500/30 py-2 px-4">
          <CardBody>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Breadcrumbs
            </h1>
            <Switch
              isSelected={Breadcrumbs}
              size="lg"
              color="success"
              onValueChange={handleMenuChange}
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Theme;
