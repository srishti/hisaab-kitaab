import { UiSidebarListItem, SidebarMenuType } from "../LayoutComponents";
import { RoutePath } from "../../../routes/routes";

export const sidebarData: UiSidebarListItem[] = [
  {
    id: "1",
    value: SidebarMenuType.Dashboard,
    active: true,
    routePath: RoutePath.Login,
  },
  {
    id: "2",
    value: SidebarMenuType.Accounts,
    routePath: RoutePath.AccountsList,
  },
  {
    id: "3",
    value: SidebarMenuType.Transactions,
    routePath: RoutePath.Dashboard,
  },
];
