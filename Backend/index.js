import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import connectDB from "./Config/db.js";
import authRoute from "./Routes/authRoute.js";
import accountRoute from "./Routes/accountRoute.js";

//App init
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 8080;

//Built-in Middlewares and Imported ones
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Serving static files from the 'Public' directory
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "Public")));

app.use("/Images", express.static(path.join(__dirname, "Public", "Images")));
app.use(
    "/Images/WeatherImg",
    express.static(path.join(__dirname, "Public", "WeatherImages"))
);

//HTTP GET Method Test
app.get("/api/v1/", (req, res) => {
    res.status(200).json({ success: true, message: "HTTP Method Success!" });
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Views/about.html");
});

//API's
app.use("/api/v1/users/auth", authRoute);
app.use("/api/v1/users/account", accountRoute);

//App listen
app.listen(PORT, () => {
    console.log(`Server started and running on http://localhost:${PORT}`);
});

//Exporting the app
export default app;
