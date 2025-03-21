import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//! <============= routes import =============>

import userRouter from "./routes/user.routes.js";

//*  <============== routes declaration ==============>

app.use("/api/v1/users", userRouter); // ye actualy karega ye http://localhost:8000/api/v1/user or uske userRouter ke pass power jayega ab vaha kya call ho raha hai vese url banta jayega

//*  <============== routes declaration ==============>

//! <============= routes import =============>

export { app };
