import React from "react";
import { Outlet } from "react-router-dom";

function OutletFunction() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default OutletFunction;
