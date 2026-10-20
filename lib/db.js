import mysql from "mysql2/promise";


// connection pool นำการเชื่อมต่อกลับมาใช้ซ้ำในทุก request แทนการเปิดการเชื่อมต่อใหม่ทุกครั้ง
export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // สิ่งที่เพิ่มเข้ามา   
  ssl:
    process.env.DB_SSL === "true"
      ? { minVersion: "TLSv1.2", rejectUnauthorized: true }
      : undefined,
});