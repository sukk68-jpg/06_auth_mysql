"use client";

import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  // โหลดข้อมูลผู้ใช้ที่ Login อยู่จาก API
    const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login"; // โหลดหน้าใหม่ ล้างหน้า Dashboard ที่ cache ไว้
  };
  useEffect(() => {
    fetch("/api/me")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="auth-box">
      <h1>Dashboard</h1>
      <p>Welcome, {user.fullname}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}