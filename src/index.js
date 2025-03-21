import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/dbConnect.js";
import { app } from "./app.js";

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`👀👀 server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log(" ❌ mongo db connection failed !! : ", err);
  });
