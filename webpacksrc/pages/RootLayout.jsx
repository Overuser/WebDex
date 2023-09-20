import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import { SideBar } from "./components/sidebar";


export default function RootLayout() {
  return (
    <div className='app'>
      <Navbar />
      <main className='app__main'>
        <SideBar />
        <Outlet />
      </main>
    </div>
  );
}
