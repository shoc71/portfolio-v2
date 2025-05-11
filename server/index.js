import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// routes

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/.next")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../ client /.next / server / pages / index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server is live on http://localhost:${PORT}`)
})