require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./db/db.js");
const userRoute = require("./routes/userRoute.js");
const avatarRoute = require("./routes/avatarRoute.js");
const cookieParser = require('cookie-parser')
const createWebSocketServer = require("./wsServer.js");
const path = require("path");
//database connection
connection();
app.use(express.json())
app.use(cookieParser())
//middlewares
app.use(express.json());
const allowedOrigins = [
"http://localhost:5173",
"http://localhost:4000",
"https://swifty-chatty-appy.onrender.com"
];

const corsOptions = {origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
    callback(null, true);
    } else {
    callback(new Error("Not allowed by CORS"));
    }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
    credentials: true, // Allow credentials like cookies
    };
    
app.use(cors(corsOptions));
app.use("/api/user", userRoute);
app.use("/api/avatar", avatarRoute);
const port = process.env.PORT || 8000;
    
const server = app.listen(port, () => console.log(`Application running on port ${port}`));

createWebSocketServer(server);

app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'), (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(err.status).end(); // Respond with error status
        }
    });
});