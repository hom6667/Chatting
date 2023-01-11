import React from "react";
import BottomNavigation from "../components/BottomNavigation";
import TopNavigation from "../components/TopNavigation";

const RoomList: React.FC = () => {
  return <div>
    <TopNavigation title="Rooms" />
    <BottomNavigation />
  </div>;
};

export default RoomList;
