import MainNavigation from "../../components/layout/MainNavigation/MainNavigation";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import { sidebarData } from "./sidebarData";

const Dashboard: React.FC = () => {
  return (
    <>
      <MainNavigation />
      <Sidebar menuList={sidebarData} />
    </>
  );
};

export default Dashboard;
