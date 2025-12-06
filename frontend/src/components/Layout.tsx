import React, { ReactNode } from "react";
/** @jsxImportSource react */
import { Sidebar } from "./sidebar";
import { TopBar } from "./topbar";
import "./layout.css";

interface LayoutProps {
children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
return (
    <div className="app-shell">
    <Sidebar />
    <div className="app-main">
        <TopBar />
        <main className="app-content">
        {children}
        </main>
    </div>
    </div>
);
};
