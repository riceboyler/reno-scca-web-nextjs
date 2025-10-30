import sql, { type config } from "mssql";

const dbConfig: config = {
  server: process.env.DB_SERVER ?? "localhost",
  port: 1433,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    trustServerCertificate: true,
  },
};

let pool: sql.ConnectionPool;

export const getConnection = async () => {
  if (!pool) {
    pool = await sql.connect(dbConfig);
  }
  return pool;
};
