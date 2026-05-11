import { useEffect, useMemo, useState } from "react";
import Walkthrough from "./Walkthrough";
import GolestanInfo from "./GolestanInfo";
import GolestanWhyIncluded from "./GolestanWhyIncluded";
import GolestanWhatRemains from "./GolestanWhatRemains";
import GolestanParticipatoryArchive from "./GolestanParticipatoryArchive";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

const TITLE_FONT = '"Cormorant Garamond", Georgia, serif';

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showWalkthrough, setShowWalkthrough] = useState(false);
  const [count, setCount] = useState(0);
  const [files, setFiles] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const totalTiles = 100;
  const gridSize = 10;
  const caseName = "golestan";

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const randomOrder = useMemo(() => {
    const arr = Array.from({ length: totalTiles }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.abs(Math.sin(i * 999) * 10000)) % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  const revealedTiles = randomOrder.slice(0, Math.min(count, totalTiles));

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    try {
      const folderRef = ref(storage, `${caseName}/`);
      const result = await listAll(folderRef);

      const urls = await Promise.all(
        result.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return { name: item.name, url };
        })
      );

      setFiles(urls);
      setCount(urls.length);
    } catch (error) {
      console.error("Failed to load files:", error);
    }
  };

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const fileRef = ref(storage, `${caseName}/${Date.now()}-${file.name}`);
      await uploadBytes(fileRef, file);
      await loadFiles();
      event.target.value = "";
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const isRevealed = (index) => revealedTiles.includes(index);

  if (showWalkthrough) {
    return (
      <Walkthrough
        onExit={() => setShowWalkthrough(false)}
        isMobile={isMobile}
      />
    );
  }

  if (currentPage === "golestan-info") {
    return (
      <GolestanInfo
        onBackHome={() => setCurrentPage("home")}
        onNavigate={(page) => setCurrentPage(page)}
      />
    );
  }

  if (currentPage === "golestan-why") {
    return (
      <GolestanWhyIncluded
        onBackHome={() => setCurrentPage("home")}
        onNavigate={(page) => setCurrentPage(page)}
      />
    );
  }

  if (currentPage === "golestan-remains") {
    return (
      <GolestanWhatRemains
        onBackHome={() => setCurrentPage("home")}
        onNavigate={(page) => setCurrentPage(page)}
      />
    );
  }

  if (currentPage === "golestan-participatory") {
    return (
      <GolestanParticipatoryArchive
        onBackHome={() => setCurrentPage("home")}
        onNavigate={(page) => setCurrentPage(page)}
      />
    );
  }

  if (currentPage === "golestan-memory") {
    return (
      <div style={pageStyle}>
        <button
          style={backToInfoButtonStyle}
          onClick={() => setCurrentPage("golestan-participatory")}
        >
          ← Back
        </button>

        <h1 style={archiveTitleStyle}>Golestan Palace Memory Archive</h1>

        <h3 style={archiveSubtitleStyle}>
          A Participatory Memory Archive of Golestan Palace
        </h3>

        <p style={descStyle}>
          Upload memories, files, images, videos, or documents. Each contribution
          restores one fragment of Golestan Palace.
        </p>

        <h2 style={counterStyle}>
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

        {isMobile && (
          <div style={mobileNoticeStyle}>
            The 3D walkthrough is currently available on desktop only.
          </div>
        )}

        <div style={gridStyle(gridSize, isMobile)}>
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
                  if (linkedFile) window.open(linkedFile.url, "_blank");
                }}
                title={linkedFile ? linkedFile.name : "Unrevealed memory"}
                style={{
                  backgroundImage:
                    "url('/images/golestan/golestan-pixel-art-style-main.jpg')",
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
          <div style={boxStyle(isMobile)}>
            <h2 style={reconstructedTitleStyle}>The Palace Has Been Reconstructed</h2>
            <p style={reconstructedTextStyle}>
              Now the archive can open into a future 3D walkthrough.
            </p>
            <button
              style={buttonStyle}
              onClick={() => setShowWalkthrough(true)}
            >
              {isMobile ? "Desktop Only" : "Enter 3D Walkthrough"}
            </button>
          </div>
        )}

        <div style={{ marginTop: 44 }}>
          <h2 style={sharedArchiveTitleStyle(isMobile)}>Shared Memory Archive</h2>

          <div style={galleryStyle(isMobile)}>
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
                    <img src={file.url} alt={file.name} style={mediaPreviewStyle} />
                  )}

                  {isVideo && (
                    <video src={file.url} controls style={mediaPreviewStyle} />
                  )}

                  {isAudio && (
                    <audio src={file.url} controls style={audioPreviewStyle} />
                  )}

                  {isPdf && <p style={{ fontSize: "12px", margin: "8px 0" }}>PDF Document</p>}

                  {!isImage && !isVideo && !isAudio && !isPdf && (
                    <p style={{ fontSize: "12px", margin: "8px 0" }}>File</p>
                  )}

                  <a
                    href={file.url}
                    target="_blank"
                    rel="noreferrer"
                    style={fileLinkStyle}
                  >
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

  return (
    <div style={homePageStyle}>
      <header style={homeHeroStyle}>
        <h1 style={homeTitleStyle}>After Ruins</h1>
        <p style={homeSubtitleStyle}>
          A living and participatory archive of cultural memory
        </p>
      </header>

      <main style={homeMainStyle}>
        <h2 style={homeSectionTitleStyle}>
          Destruction, absence, and ongoing memory
        </h2>

        <div style={homeBodyWrapStyle}>
          <p style={homeBodyLineStyle}>
            This website extends a physical exhibition on cultural heritage loss.
          </p>
          <p style={homeBodyLineStyle}>
            Each case study invites discovery, reflection, and contribution.
          </p>
        </div>

        <div style={homeGridStyle(isMobile)}>
          <button
            style={archiveCardStyle}
            onClick={() => setCurrentPage("golestan-info")}
          >
            <div style={archiveTabStyle} />
            <div style={archiveCardInnerStyle}>
              <h3 style={caseTitleStyle}>Golestan Palace</h3>
              <p style={caseLocationStyle}>Tehran, Iran</p>
            </div>
          </button>

          <button style={archiveCardStyle} disabled>
            <div style={archiveTabStyle} />
            <div style={archiveCardInnerStyle}>
              <h3 style={caseTitleStyle}>Old Summer Palace</h3>
              <p style={caseLocationStyle}>Beijing, China</p>
            </div>
          </button>

          <button style={archiveCardStyle} disabled>
            <div style={archiveTabStyle} />
            <div style={archiveCardInnerStyle}>
              <h3 style={caseTitleStyle}>Bamiyan Buddhas</h3>
              <p style={caseLocationStyle}>Bamiyan, Afghanistan</p>
            </div>
          </button>

          <button style={archiveCardStyle} disabled>
            <div style={archiveTabStyle} />
            <div style={archiveCardInnerStyle}>
              <h3 style={caseTitleStyle}>Palmyra</h3>
              <p style={caseLocationStyle}>Palmyra, Syria</p>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#f7f3ec",
  padding: "40px 20px 56px",
  textAlign: "center",
  fontFamily: "Georgia, serif",
};

const backToInfoButtonStyle = {
  marginBottom: "22px",
  padding: "10px 16px",
  border: "1px solid #3a3328",
  background: "transparent",
  color: "#3a3328",
  cursor: "pointer",
  fontFamily: "Georgia, serif",
  fontSize: "14px",
};

const archiveTitleStyle = {
  fontSize: "48px",
  margin: "0 0 4px",
  color: "#1e1e1e",
  lineHeight: 1.1,
  fontFamily: TITLE_FONT,
  fontWeight: 600,
};

const archiveSubtitleStyle = {
  marginTop: 0,
  marginBottom: "20px",
  fontWeight: "normal",
  fontSize: "26px",
  lineHeight: 1.2,
  color: "#8c93a3",
  fontFamily: TITLE_FONT,
};

const descStyle = {
  maxWidth: "760px",
  margin: "0 auto 20px",
  lineHeight: 1.6,
  fontSize: "18px",
  color: "#5d5d6f",
};

const counterStyle = {
  color: "#8c93a3",
  fontWeight: "normal",
  fontSize: "24px",
  marginBottom: "14px",
  fontFamily: TITLE_FONT,
};

const buttonStyle = {
  margin: "8px",
  padding: "10px 16px",
  border: "1px solid #3a3328",
  background: "#3a3328",
  color: "white",
  cursor: "pointer",
  fontFamily: "Georgia, serif",
};

const mobileNoticeStyle = {
  margin: "18px auto 6px",
  maxWidth: "520px",
  padding: "12px 16px",
  border: "1px solid rgba(58, 51, 40, 0.18)",
  background: "#fffaf4",
  color: "#5b584f",
  fontSize: "15px",
};

const boxStyle = (isMobile) => ({
  marginTop: 25,
  padding: isMobile ? 16 : 20,
  background: "#fffaf0",
  border: "1px solid #3a3328",
  display: "inline-block",
  width: isMobile ? "100%" : "auto",
  maxWidth: isMobile ? "100%" : "none",
  boxSizing: "border-box",
});

const reconstructedTitleStyle = {
  color: "#3a3328",
  fontFamily: TITLE_FONT,
  fontWeight: 600,
  fontSize: "20px",
  marginBottom: "10px",
};

const reconstructedTextStyle = {
  fontFamily: TITLE_FONT,
  fontSize: "18px",
  color: "#8c93a3",
  marginTop: 0,
  marginBottom: "10px",
};

const sharedArchiveTitleStyle = (isMobile) => ({
  fontSize: isMobile ? "20px" : "24px",
  marginBottom: "16px",
  textAlign: "left",
  maxWidth: "900px",
  marginLeft: "auto",
  marginRight: "auto",
  fontFamily: TITLE_FONT,
  fontWeight: 600,
});

const galleryStyle = (isMobile) => ({
  maxWidth: "900px",
  margin: "20px auto",
  display: "grid",
  gridTemplateColumns: isMobile
    ? "repeat(2, minmax(0, 1fr))"
    : "repeat(auto-fit, minmax(120px, 1fr))",
  gap: "10px",
});

const fileCard = {
  padding: "10px",
  background: "white",
  border: "1px solid #ccc",
  color: "#222",
  fontSize: "12px",
  overflow: "hidden",
  textAlign: "left",
};

const fileLinkStyle = {
  color: "#222",
  textDecoration: "none",
  wordBreak: "break-word",
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

const gridStyle = (gridSize, isMobile) => ({
  width: isMobile ? "100%" : "min(90vw, 600px)",
  aspectRatio: "1 / 1",
  margin: "35px auto",
  display: "grid",
  gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
  gridTemplateRows: `repeat(${gridSize}, 1fr)`,
  border: "2px solid #3a3328",
  overflow: "hidden",
});

const homePageStyle = {
  minHeight: "100vh",
  background: "#f7f3ec",
  color: "#3a3328",
  fontFamily:
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const homeHeroStyle = {
  textAlign: "center",
  padding: "32px 20px 40px",
  borderBottom: "1px solid rgba(58, 51, 40, 0.08)",
};

const homeTitleStyle = {
  fontSize: "64px",
  lineHeight: 1.02,
  margin: "0 0 10px",
  color: "#1f1f1f",
  fontFamily: TITLE_FONT,
  fontWeight: 700,
  textDecoration: "underline",
  textDecorationThickness: "1.5px",
  textUnderlineOffset: "10px",
};

const homeSubtitleStyle = {
  fontSize: "16px",
  color: "#6f7286",
  margin: 0,
};

const homeMainStyle = {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "56px 24px 80px",
};

const homeSectionTitleStyle = {
  fontSize: "44px",
  marginBottom: "22px",
  lineHeight: 1.12,
  color: "#1f1f1f",
  fontFamily: TITLE_FONT,
  fontWeight: 700,
  textDecoration: "underline",
  textDecorationThickness: "1.2px",
  textUnderlineOffset: "8px",
  textAlign: "center",
};

const homeBodyWrapStyle = {
  maxWidth: "1100px",
  margin: "0 auto 44px",
  textAlign: "center",
};

const homeBodyLineStyle = {
  fontSize: "18px",
  lineHeight: 1.7,
  color: "#4a463f",
  margin: "0 0 4px",
};

const homeGridStyle = (isMobile) => ({
  display: "grid",
  gridTemplateColumns: isMobile
    ? "1fr"
    : "repeat(3, 280px)",
  gap: "24px",
  justifyContent: "center",
  alignItems: "start",
});

const archiveCardStyle = {
  position: "relative",
  background: "transparent",
  border: "none",
  padding: "18px 0 0 0",
  minHeight: "120px",
  textAlign: "left",
  cursor: "pointer",
  display: "block",
  width: "100%",
  maxWidth: "280px",
  justifySelf: "center",
};

const archiveTabStyle = {
  position: "absolute",
  top: "-2px",
  left: "7px",
  width: "126px",
  height: "30px",
  background: "#5a4632",
  borderRadius: "18px 18px 0 0",
  zIndex: 2,
};

const archiveCardInnerStyle = {
  background: "#fffaf4",
  border: "18px solid #5a4632",
  borderRadius: "28px",
  minHeight: "95px",
  padding: "18px 20px 14px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  color: "#3a3328",
  position: "relative",
  zIndex: 1,
};

const caseTitleStyle = {
  fontSize: "18px",
  margin: 0,
  color: "#2a241d",
  fontFamily: TITLE_FONT,
  fontWeight: 600,
  lineHeight: 1.08,
};

const caseLocationStyle = {
  fontSize: "16px",
  color: "#5b584f",
  margin: 0,
  fontFamily: "Georgia, serif",
};

export default App;