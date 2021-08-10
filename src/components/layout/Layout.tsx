import { useState, useEffect } from "react";
import MainNavigation from "./MainNavigation/MainNavigation";
import Sidebar from "./Sidebar/Sidebar";
import { sidebarData } from "../../pages/Dashboard/sidebarData";
import * as uiHelpers from "../../utils/UI/uiHelpers";

const Layout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { checkIfSmallScreenDevice } = uiHelpers;

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
  };

  useEffect(() => {
    setIsSidebarVisible(() => !checkIfSmallScreenDevice());
  }, [checkIfSmallScreenDevice]);

  return (
    <>
      <MainNavigation
        isSidebarVisible={isSidebarVisible}
        onToggleSidebar={toggleSidebarVisibility}
      />
      <Sidebar menuList={sidebarData} isVisible={isSidebarVisible} />
    </>
  );
};

export default Layout;
