import React, { useState, useEffect } from "react";
import MainNavigation from "./MainNavigation/MainNavigation";
import Sidebar from "./Sidebar/Sidebar";
import Backdrop from "./Backdrop/Backdrop";
import { useAuth } from "../../hooks/auth/use-auth";
import * as uiHelpers from "../../utils/UI/uiHelpers";
import { sidebarData } from "./Sidebar/sidebarData";

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
    <>
      {auth.isLoggedIn && (
        <>
          <MainNavigation
            isSidebarVisible={isSidebarVisible}
            onToggleSidebar={toggleSidebarVisibility}
          />
          <Sidebar menuList={sidebarData} isVisible={isSidebarVisible} />
          {isDeviceSmallScreen && isSidebarVisible && (
            <Backdrop onClick={() => setIsSidebarVisible(false)} />
          )}
        </>
      )}
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
