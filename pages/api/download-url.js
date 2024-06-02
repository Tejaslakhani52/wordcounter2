// pages/api/download-url.js

const { ndown } = require("nayan-media-downloader");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    try {
      const downloadUrl = await ndown(url);
      res.status(200).json({ downloadUrl });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch download URL" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
