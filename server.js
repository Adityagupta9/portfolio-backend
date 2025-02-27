const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Back working");
});

app.post("/leetcode", async (req, res) => {
    try {
        const response = await axios.post("https://leetcode.com/graphql", req.body, {
            headers: { "Content-Type": "application/json" },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data from LeetCode" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
