import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function RootLayout() {
  return (
    <div className='app'>
      <header className='app__header'>
        <Navbar />
      </header>
      <main className='app__main'>
        <Outlet />
      </main>
    </div>
  );
}
