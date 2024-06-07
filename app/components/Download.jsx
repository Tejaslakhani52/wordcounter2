import { useRef, useState } from "react";

const formatDuration = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

async function fetchData(inputUrl, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(
        `https://theofficialvkr.xyz/data/trial.php?vkr=${inputUrl}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${error.message}`);

      if (i < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw new Error("Failed to fetch data after multiple attempts");
      }
    }
  }
}

export default function Download() {
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(null);
  console.log("duration", duration);
  const [inputUrl, setInputUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [openVideoModal, setOpenVideoModal] = useState(false);
  console.log("data", data);

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputUrl(e.target.value);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      console.log("videoRef.current", videoRef.current);
      const totalSeconds = Math.floor(videoRef.current.duration);
      setDuration(formatDuration(totalSeconds));
    }
  };

  const handleDownload = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    fetchData(inputUrl)
      .then((data) => {
        handleSuccessResponse(data);
        setLoading(false);
      })
      .catch((error) => setLoading(false));
  };

  const handleSuccessResponse = (data) => {
    setData(data);
  };

  const handleDownload360 = () => {
    const link = document.createElement("a");
    link.href = data?.dl0?.url;
    link.download = "FacebookVideo.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload720 = () => {
    const link = document.createElement("a");
    link.href = data?.dl1?.url;
    link.download = "FacebookVideo.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-[75%] mx-auto py-8 max-md:w-[95%]">
      {!data && (
        <>
          <h1 className="text-[25px] font-semibold text_linear text-center mb-3">
            Facebook Downloader
          </h1>
          <p className="text-center">
            Convert and download Facebook videos in MP4, MP3 for free
          </p>

          {loading ? (
            <div className="py-5">
              <img
                src="/images/ajax.gif"
                style={{ width: "100px", display: "block", margin: "auto" }}
              />

              <p className="text-center text_linear text-[15px]">
                Retrieving data, please wait a few seconds!
              </p>
            </div>
          ) : (
            <div className="flex w-[70%] mx-auto my-5 border_linear  max-sm:w-full">
              <div className="flex w-full ">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Enter the Facebook video link here"
                    className="h-full px-[15px] w-full"
                    value={inputUrl}
                    onChange={handleInputChange}
                  />
                </div>
                {/* <div className="flex items-center justify-center bg-white cursor-pointer">
                <i class="fa-solid fa-clipboard text-[20px] px-[20px]"></i>
              </div> */}
              </div>
              <div className="">
                <button
                  className="bg_linear text-white px-[45px] max-sm:px-[20px] py-[12px] max-sm:py-[7px]"
                  onClick={handleDownload}
                >
                  Download
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {data && (
        <div>
          <video
            ref={videoRef}
            src={data?.dl0?.url}
            onLoadedMetadata={handleLoadedMetadata}
            style={{ display: "none" }}
          />

          <div className="flex gap-3">
            <div
              className="h-[100px] w-[100px]  cursor-pointer rounded-[5px]"
              style={{
                backgroundImage: `url(${data?.data?.thumb})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => setOpenVideoModal(true)}
            >
              <div className="h-full w-full bg-[#00000075] flex items-center justify-center rounded-[5px]">
                <i class="fa-solid fa-play text_linear text-[25px] shadow"></i>
              </div>
            </div>

            <div>
              <h2 className="text-[14px]">Facebook Video</h2>
              <p className="text-[14px]">{duration}</p>
            </div>
          </div>

          <div class="relative overflow-x-auto mt-5">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead class="text-[15px] text-gray-700 border-b-2  ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Quality
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Render
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <th
                    scope="row"
                    class="px-6 py-2 font-medium whitespace-nowrap "
                  >
                    720p (HD)
                  </th>
                  <td class="px-6 py-2">No</td>
                  <td class="px-6 py-2">
                    <button
                      className="bg_linear text-white px-[15px] py-[5px] text-[12px] rounded-[4px]"
                      onClick={handleDownload720}
                    >
                      Download
                    </button>
                  </td>
                </tr>
                <tr class="bg-white">
                  <th
                    scope="row"
                    class="px-6 py-2 font-medium whitespace-nowrap "
                  >
                    360p (SD)
                  </th>
                  <td class="px-6 py-2">No</td>
                  <td class="px-6 py-2">
                    {" "}
                    <button
                      className="bg_linear text-white px-[15px] py-[5px] text-[12px] rounded-[4px]"
                      onClick={handleDownload360}
                    >
                      Download
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-5">
            <button
              className="bg-[#363636] text-white w-full text-[14px] py-2 rounded-[4px]"
              onClick={() => {
                window.location.reload();
              }}
            >
              Download more videos
            </button>
          </div>
        </div>
      )}

      {openVideoModal && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#000000ab] z-[10000000000] flex items-center justify-center">
          <video src={data?.dl1?.url} controls={true}></video>

          <button
            className="fixed right-[15px] top-[15px]"
            onClick={() => setOpenVideoModal(false)}
          >
            <i class="fa-solid fa-xmark text-white text-[25px]"></i>
          </button>
        </div>
      )}
    </div>
  );
}
