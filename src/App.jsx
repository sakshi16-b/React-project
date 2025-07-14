import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { TaskListNumbers } from "./components/others/TaskListNumbers";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

export default function App() {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('admin')
      console.log(user)
    }
    else if (email == 'user@me.com' && password == '123') {
      setUser('user')
      console.log(user)
    }
    else {
      alert("Invalid Credential")
    }

  }

  useEffect(() => {
    // //  setLocalStorage ()
    // getLocalStorage();
  })

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
{
  user=='admin'?<AdminDashboard/>:<EmployeeDashboard/>
}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}

    </div>
  )
}