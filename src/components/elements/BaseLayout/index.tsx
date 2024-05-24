import React from "react";
import { SideBar } from "../SideBar";
import { BaseLayoutProps } from "./interface";

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen relative">
      <SideBar />
      <main className="flex-grow-1 w-full flex justify-center items-center">
        {children}
      </main>
    </div>
  );
};

export default BaseLayout;
