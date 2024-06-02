"use client";

import { useState } from "react";

export default function DownloadForm() {
  const [url, setUrl] = useState("");
  const [videoInfo, setVideoInfo] = useState(null);
  const [error, setError] = useState(null);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("/api/download-url", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ url }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       setVideoInfo(data);
  //       setError(null);
  //     } else {
  //       setError(data.error);
  //       setVideoInfo(null);
  //     }
  //   } catch (err) {
  //     setError("Something went wrong");
  //     setVideoInfo(null);
  //   }
  // };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter Facebook video URL"
          required
        />
        <button type="submit">Fetch Video Info</button>
      </form>
      {videoInfo && (
        <div>
          <pre>{JSON.stringify(videoInfo, null, 2)}</pre>
        </div>
      )}
      {error && <div style={{ color: "red" }}>{error}</div>} */}

      <iframe
        src="https://fdown.net/"
        frameborder="0"
        width={"100%"}
        height={"1000px"}
      ></iframe>
    </div>
  );
}
