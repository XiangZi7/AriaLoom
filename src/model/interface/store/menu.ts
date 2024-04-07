export interface MenuState {
  Breadcrumbs: boolean;
  BreadcrumbTtile: string;
  updateBreadcrumbs: (params: boolean) => void;
  updateBreadcrumbTtile: (params: string) => void;
}
