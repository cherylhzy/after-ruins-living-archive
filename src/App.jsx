import { useEffect, useMemo, useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

function App() {
  const [count, setCount] = useState(0);
  const [files, setFiles] = useState([]);

  const totalTiles = 100;
  const gridSize = 10;
  const caseName = "golestan";

  const randomOrder = useMemo(() => {
    const arr = Array.from({ length: totalTiles }, (_, i) => i);

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.abs(Math.sin(i * 999) * 10000)) % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }, []);

  const revealedTiles = randomOrder.slice(0, count);

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    const folderRef = ref(storage, `${caseName}/`);
    const result = await listAll(folderRef);

    const urls = await Promise.all(
      result.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return {
          name: item.name,
          url,
        };
      })
    );

    setFiles(urls);
    setCount(urls.length);
  };

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileRef = ref(storage, `${caseName}/${Date.now()}-${file.name}`);
    await uploadBytes(fileRef, file);

    await loadFiles();
    event.target.value = "";
  };

  const isRevealed = (index) => revealedTiles.includes(index);

  return (
    <div style={pageStyle}>
      <h1>Golestan Palace Memory Archive</h1>

      <p style={descStyle}>
        Upload memories, files, images, videos, or documents. Each contribution
        restores one fragment of Golestan Palace.
      </p>

      <h2>
        Uploads: {count} / {totalTiles}
      </h2>

      <input type="file" onChange={handleUpload} />

      <div style={{ marginTop: 20 }}>
        <button style={buttonStyle} onClick={() => setCount(100)}>
          Demo Complete
        </button>

        <button style={buttonStyle} onClick={() => setCount(0)}>
          Reset View
        </button>
      </div>

      <div style={gridStyle(gridSize)}>
        {Array.from({ length: totalTiles }).map((_, index) => {
          const row = Math.floor(index / gridSize);
          const col = index % gridSize;
          const revealed = isRevealed(index);

          const fileIndex = revealedTiles.indexOf(index);
          const linkedFile = fileIndex >= 0 ? files[fileIndex] : null;

          return (
            <div
              key={index}
              onClick={() => {
                if (linkedFile) {
                  window.open(linkedFile.url, "_blank");
                }
              }}
              title={linkedFile ? linkedFile.name : "Unrevealed memory"}
              style={{
                backgroundImage: "url('/golestan-palace.jpg')",
                backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
                backgroundPosition: `${(col / (gridSize - 1)) * 100}% ${
                  (row / (gridSize - 1)) * 100
                }%`,
                filter: revealed ? "none" : "blur(3px) grayscale(1)",
                opacity: revealed ? 1 : 0.08,
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "all 0.5s ease",
                cursor: linkedFile ? "pointer" : "default",
              }}
            />
          );
        })}
      </div>

      {count >= 100 && (
        <div style={boxStyle}>
          <h2>The Palace Has Been Reconstructed</h2>
          <p>Now the archive can open into a future 3D walkthrough.</p>
          <button style={buttonStyle}>Enter 3D Walkthrough</button>
        </div>
      )}

      <div style={{ marginTop: 50 }}>
        <h2>Shared Memory Archive</h2>

        <div style={galleryStyle}>
          {files.map((file, i) => {
            const lowerName = file.name.toLowerCase();

            const isImage =
              lowerName.endsWith(".jpg") ||
              lowerName.endsWith(".jpeg") ||
              lowerName.endsWith(".png") ||
              lowerName.endsWith(".gif") ||
              lowerName.endsWith(".webp");

            const isVideo =
              lowerName.endsWith(".mp4") ||
              lowerName.endsWith(".mov") ||
              lowerName.endsWith(".webm");

            const isAudio =
              lowerName.endsWith(".mp3") ||
              lowerName.endsWith(".wav") ||
              lowerName.endsWith(".m4a");

            const isPdf = lowerName.endsWith(".pdf");

            return (
              <div key={i} style={fileCard}>
                {isImage && (
                  <img
                    src={file.url}
                    alt={file.name}
                    style={mediaPreviewStyle}
                  />
                )}

                {isVideo && (
                  <video
                    src={file.url}
                    controls
                    style={mediaPreviewStyle}
                  />
                )}

                {isAudio && (
                  <audio
                    src={file.url}
                    controls
                    style={audioPreviewStyle}
                  />
                )}

                {isPdf && (
                  <p style={{ fontSize: "12px", margin: "8px 0" }}>
                    PDF Document
                  </p>
                )}

                <a href={file.url} target="_blank" rel="noreferrer">
                  {file.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#f7f3ec",
  padding: "40px 20px",
  textAlign: "center",
  fontFamily: "Georgia, serif",
};

const descStyle = {
  maxWidth: "700px",
  margin: "0 auto 20px",
  lineHeight: 1.6,
};

const buttonStyle = {
  margin: "8px",
  padding: "10px 16px",
  border: "1px solid #3a3328",
  background: "#3a3328",
  color: "white",
  cursor: "pointer",
};

const boxStyle = {
  marginTop: 25,
  padding: 20,
  background: "#fffaf0",
  border: "1px solid #3a3328",
  display: "inline-block",
};

const galleryStyle = {
  maxWidth: "900px",
  margin: "20px auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  gap: "10px",
};

const fileCard = {
  padding: "10px",
  background: "white",
  border: "1px solid #ccc",
  textDecoration: "none",
  color: "#222",
  fontSize: "12px",
  overflow: "hidden",
};

const mediaPreviewStyle = {
  width: "100%",
  height: "90px",
  objectFit: "cover",
  marginBottom: "8px",
};

const audioPreviewStyle = {
  width: "100%",
  height: "32px",
  marginBottom: "8px",
};

const gridStyle = (gridSize) => ({
  width: "min(90vw, 600px)",
  aspectRatio: "1 / 1",
  margin: "35px auto",
  display: "grid",
  gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
  gridTemplateRows: `repeat(${gridSize}, 1fr)`,
  border: "2px solid #3a3328",
  overflow: "hidden",
});

export default App;