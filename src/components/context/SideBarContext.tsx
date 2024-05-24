"use client";
import { PropsWithChildren, createContext, useState } from "react";

const SideBarContext = createContext({
  isCollapsed: false,
  toggleSideBarCollapse: () => {},
});

const SideBarProvider = ({ children }: PropsWithChildren) => {
  const [isCollapsed, setCollapse] = useState(false);

  const toggleSideBarCollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  return (
    <SideBarContext.Provider value={{ isCollapsed, toggleSideBarCollapse }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SideBarContext, SideBarProvider };
