import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// __dirname workaround for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// API Routes

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
    const clientPath = path.join(__dirname, "../client/out");
    app.use(express.static(clientPath));

    app.get("*", (req, res) => {
        res.sendFile(path.join(clientPath, "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
