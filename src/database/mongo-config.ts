import mongoose from "mongoose";

const database = async (connection: any, host: any, user: any, password: any, db: any) => {
  try {
    const URI = `${connection}://${host}`;
    await mongoose.connect(URI, {
      user,
      pass: password,
      dbName: db,
    });
    console.log("Successful connection to Database");
  } catch (error) {
    console.log("Failed connection to Database");
  }
};

export default database;
