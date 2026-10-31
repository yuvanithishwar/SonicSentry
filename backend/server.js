const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ===============================
// DATABASE CONNECTION
// ===============================

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
    console.error("MongoDB connection failed: MONGO_URI is missing from backend/.env");
} else if (mongoUri.includes("<db_username>") || mongoUri.includes("<password>")) {
    console.error("MongoDB connection failed: replace the credential placeholders in backend/.env");
} else {
    mongoose
        .connect(mongoUri)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((error) => {
            console.error("MongoDB connection failed:");
            console.error(error.message);
        });
}

// ===============================
// NOISE DATA MODEL
// ===============================

const noiseSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },

    decibel: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        required: true
    },

    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Noise = mongoose.model("Noise", noiseSchema);

// ===============================
// HOME / TEST ROUTE
// ===============================

app.get("/", (req, res) => {
    res.json({
        message: "SonicSentry Backend is running!"
    });
});

// ===============================
// ADD NOISE READING
// ===============================

app.post("/api/noise", async (req, res) => {
    try {
        const { location, decibel } = req.body;

        if (!location || decibel === undefined) {
            return res.status(400).json({
                message: "Location and decibel are required"
            });
        }

        let status;

        if (decibel < 50) {
            status = "Normal";
        } else if (decibel < 70) {
            status = "Medium";
        } else if (decibel < 90) {
            status = "High";
        } else {
            status = "Very High";
        }

        const noise = new Noise({
            location,
            decibel,
            status
        });

        await noise.save();

        res.status(201).json({
            message: "Noise reading saved successfully",
            data: noise
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to save noise reading",
            error: error.message
        });
    }
});

// ===============================
// GET ALL NOISE HISTORY
// ===============================

app.get("/api/noise", async (req, res) => {
    try {
        const records = await Noise
            .find()
            .sort({ timestamp: -1 });

        res.json(records);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch noise history",
            error: error.message
        });
    }
});

// ===============================
// GET LATEST NOISE READING
// ===============================

app.get("/api/noise/latest", async (req, res) => {
    try {
        const latest = await Noise
            .findOne()
            .sort({ timestamp: -1 });

        res.json(latest);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch latest reading",
            error: error.message
        });
    }
});

// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => {
    console.log(`SonicSentry server running on http://localhost:${PORT}`);
});