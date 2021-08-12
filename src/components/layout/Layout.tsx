import React, { useState, useEffect } from "react";
import MainNavigation from "./MainNavigation/MainNavigation";
import Sidebar from "./Sidebar/Sidebar";
import Backdrop from "./Backdrop/Backdrop";
import { useAuth } from "../../hooks/auth/use-auth";
import * as uiHelpers from "../../utils/UI/uiHelpers";
import { sidebarData } from "./Sidebar/sidebarData";
import styles from "./Layout.module.scss";

const Layout: React.FC = (props) => {
  const [isDeviceSmallScreen, setIsDeviceSmallScreen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const auth = useAuth();

  const { checkIfSmallScreenDevice } = uiHelpers;

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
  };

  useEffect(() => {
    const _isDeviceSmallScreen = checkIfSmallScreenDevice();

    setIsDeviceSmallScreen(_isDeviceSmallScreen);
    setIsSidebarVisible(!_isDeviceSmallScreen);
  }, [checkIfSmallScreenDevice]);

  return (
    <div className={styles["layout"]}>
      {auth.isAuthenticated && (
        <MainNavigation
          className={styles["main-navigation"]}
          isSidebarVisible={isSidebarVisible}
          onToggleSidebar={toggleSidebarVisibility}
        />
      )}
      {auth.isAuthenticated && (
        <Sidebar
          className={styles["sidebar"]}
          isVisible={isSidebarVisible}
          menuList={sidebarData}
        />
      )}
      <main className={styles["main-content"]}>{props.children}</main>
      {auth.isAuthenticated && isDeviceSmallScreen && isSidebarVisible && (
        <Backdrop onClick={() => setIsSidebarVisible(false)} />
      )}
    </div>
  );
};

export default Layout;
