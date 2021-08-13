import { UiSidebarListItem, SidebarMenuType } from "../LayoutComponents";
import { RoutePath } from "../../../routes/routes";

export const sidebarData: UiSidebarListItem[] = [
  {
    id: "1",
    active: true,
    value: SidebarMenuType.Accounts,
    routePath: RoutePath.AccountsList,
  },
  {
    id: "2",
    value: SidebarMenuType.Transactions,
    routePath: RoutePath.TransactionsList,
  },
];
