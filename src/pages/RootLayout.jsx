import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

export default function RootLayout() {
  return (
    <div className='app'>
      <Navbar />
      <aside></aside>
      <main className='app__main'>
        <Outlet />
      </main>
    </div>
  );
}
