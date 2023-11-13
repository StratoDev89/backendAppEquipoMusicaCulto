import "dotenv/config";

const config = {
  port: process.env.PORT,
  dbConnection: process.env.DB_CONNECTION,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  secretKey: process.env.SECRET_KEY,
  adminPassword: process.env.ADMIN_PASSWORD,
};

export default config;
