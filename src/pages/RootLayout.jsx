import React from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className='app'>
      <header className='app__header'>
      </header>
      <main className='app__main'>
        <Outlet />
      </main>
    </div>
  );
}
