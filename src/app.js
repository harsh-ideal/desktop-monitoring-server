import express from "express";
import cors from "cors";
import activityRoute from './routes/activity.routes.js'
import registerRoute from "./routes/register.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/activity", activityRoute);
app.use("/api/register", registerRoute);

export default app;
