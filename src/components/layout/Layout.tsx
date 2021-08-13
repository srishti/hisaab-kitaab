import React, { useState, useEffect } from "react";
import MainNavigation from "./MainNavigation/MainNavigation";
import Sidebar from "./Sidebar/Sidebar";
import Backdrop from "./Backdrop/Backdrop";
import { useAuth } from "../../hooks/auth/use-auth";
import * as utilsUiHelpers from "../../utils/UI/uiHelpers";
import { sidebarData } from "./Sidebar/sidebarData";
import styles from "./Layout.module.scss";

const Layout: React.FC = (props) => {
  const [isDeviceSmallScreen, setIsDeviceSmallScreen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [sidebarMenuItems, setSidebarMenuItems] = useState(sidebarData);

  const auth = useAuth();

  const { checkIfSmallScreenDevice } = utilsUiHelpers;

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
  };

  const selectSidebarMenuItem = (menuItemId: string) => {
    let updatedSidebarMenuItems = [...sidebarMenuItems];
    updatedSidebarMenuItems = updatedSidebarMenuItems.map((menuItem) => {
      menuItem.active = menuItem.id === menuItemId ? true : false;
      return menuItem;
    });
    setSidebarMenuItems(updatedSidebarMenuItems);
  };

  useEffect(() => {
    const _isDeviceSmallScreen = checkIfSmallScreenDevice();

    setIsDeviceSmallScreen(_isDeviceSmallScreen);
    setIsSidebarVisible(!_isDeviceSmallScreen);
  }, [checkIfSmallScreenDevice]);

  const mainContentToRender = (
    <main className={styles["main-content"]}>{props.children}</main>
  );

  return !auth.isAuthenticated ? (
    mainContentToRender
  ) : (
    <div className={styles["layout"]}>
      <MainNavigation
        className={styles["main-navigation"]}
        isSidebarVisible={isSidebarVisible}
        onToggleSidebar={toggleSidebarVisibility}
      />
      <Sidebar
        className={styles["sidebar"]}
        isVisible={isSidebarVisible}
        menuList={sidebarData}
        onClickMenu={selectSidebarMenuItem}
      />
      {mainContentToRender}
      {isDeviceSmallScreen && isSidebarVisible && (
        <Backdrop onClick={() => setIsSidebarVisible(false)} />
      )}
    </div>
  );
};

export default Layout;
