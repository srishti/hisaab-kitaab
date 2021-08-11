import { useState, useEffect } from "react";
import MainNavigation from "./MainNavigation/MainNavigation";
import Sidebar from "./Sidebar/Sidebar";
import Backdrop from "./Backdrop/Backdrop";
import { sidebarData } from "../../pages/Dashboard/sidebarData";
import * as uiHelpers from "../../utils/UI/uiHelpers";

const Layout = () => {
  const [isDeviceSmallScreen, setIsDeviceSmallScreen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
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
      <MainNavigation
        isSidebarVisible={isSidebarVisible}
        onToggleSidebar={toggleSidebarVisibility}
      />
      <Sidebar menuList={sidebarData} isVisible={isSidebarVisible} />
      {isDeviceSmallScreen && isSidebarVisible && (
        <Backdrop onClick={() => setIsSidebarVisible(false)} />
      )}
    </>
  );
};

export default Layout;
