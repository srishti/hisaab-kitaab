import { UiSidebarListItem, SidebarMenuType } from "../LayoutComponents";
import { RoutePath } from "../../../routes/routes";

export const sidebarData: UiSidebarListItem[] = [
  {
    id: "1",
    active: true,
    value: SidebarMenuType.Banking,
    routePath: RoutePath.Banking,
  },
  {
    id: "2",
    value: SidebarMenuType.Accounts,
    routePath: RoutePath.AccountsList,
  },
  {
    id: "3",
    value: SidebarMenuType.Transactions,
    routePath: RoutePath.TransactionsList,
  },
];
