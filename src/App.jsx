import React from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { TaskListNumbers } from "./components/others/TaskListNumbers";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

export default function App(){
  return(
    <div>
    {/* <Login/> */}
    {/* <EmployeeDashboard/> */}
    <AdminDashboard/>
  
    </div>
  )
}