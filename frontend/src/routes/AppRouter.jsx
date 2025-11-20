import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../features/dashboard/home/Home";
import Student from "../features/dashboard/students/Student";
import Teacher from "../features/dashboard/teacher/Teacher";

function AppRouter() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>about Page</h1>} />
          <Route path="/login" element={<h1>login Page</h1>} />
          <Route path="/register" element={<h1>register Page</h1>} />
        </Route>

        <Route path="/dashboard/" element={<DashboardLayout />}>
          <Route index element={<Home/>} />
          <Route path="students" element={<Student/>} />
          <Route path="teachers" element={<Teacher/>} />
          <Route path="attendance" element={<h1>dashboard attendance</h1>} />
          <Route path="addstudent" element={<h1>dashboard addstudent</h1>} />
          <Route path="addteacher" element={<h1>dashboard addteacher</h1>} />
          <Route path="porfile" element={<h1>dashboard porfile</h1>} />
          <Route path="roles" element={<h1>dashboard roles</h1>} />
          <Route path="setting" element={<h1>dashboard setting</h1>} />
        </Route>

        <Route path="*" element={<h1>Not Found 404</h1>} />

      </Routes>
    </div>
  );
}

export default AppRouter;
