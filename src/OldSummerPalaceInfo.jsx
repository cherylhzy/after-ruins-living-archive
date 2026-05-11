import React, { useEffect, useState } from "react";

const TITLE_FONT = '"Cormorant Garamond", Georgia, serif';

function Sidebar({ onNavigate, isMobile }) {
  return (
    <aside style={sidebarStyle(isMobile)}>
      <button
        style={sidebarLinkStyle}
        onClick={() => onNavigate("old-summer-palace-info")}
      >
        Info
      </button>
      <button
        style={sidebarLinkStyle}
        onClick={() => onNavigate("old-summer-palace-why")}
      >
        Why included
      </button>
      <button
        style={sidebarLinkStyle}
        onClick={() => onNavigate("old-summer-palace-remains")}
      >
        What remains
      </button>
      <button
        style={sidebarLinkStyle}
        onClick={() => onNavigate("old-summer-palace-participatory")}
      >
        Participatory archive
      </button>
    </aside>
  );
}

function OldSummerPalaceInfo({ onBackHome, onNavigate }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div style={pageStyle}>
      <div style={topBarStyle(isMobile)}>
        <button style={backButtonStyle} onClick={onBackHome}>
          ← Back
        </button>
      </div>

      <div style={heroStyle(isMobile)}>
        <p style={eyebrowStyle}>AFTER RUINS / CASE STUDY</p>
        <h1 style={titleStyle(isMobile)}>Old Summer Palace</h1>
        <p style={locationStyle(isMobile)}>Beijing, China</p>
      </div>

      <div style={contentWrapStyle(isMobile)}>
        <Sidebar onNavigate={onNavigate} isMobile={isMobile} />

        <main style={mainStyle}>
          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle(isMobile)}>Info</h2>

            <div style={heroImageWrapStyle}>
              <img
                src="/images/old-summer-palace/old-summer-palace-main.jpg"
                alt="Old Summer Palace reconstructed view"
                style={heroImageStyle(isMobile)}
              />
            </div>

            <p style={bodyParagraphStyle(isMobile)}>
              The Old Summer Palace, or Yuanmingyuan, was not a single palace
              building but a vast imperial garden complex in northwest Beijing.
              It was composed of three gardens—Yuanmingyuan, Changchunyuan, and
              Qichunyuan—and covered roughly 3.5 square kilometers, with
              hundreds of halls, pavilions, bridges, galleries, temples, water
              features, and landscaped scenes. Although later Western observers
              often called it the “Summer Palace,” MIT Visualizing Cultures
              emphasizes that it was in fact the principal residence of the Qing
              emperors for much of the year rather than a minor seasonal retreat.
              In the eighteenth and early nineteenth centuries it became one of
              the most ambitious courtly environments ever built in China:
              administrative, residential, ceremonial, theatrical, and
              scholarly all at once. The 3D reconstruction used here does not
              restore the site as pure certainty, but helps visualize the scale,
              density, and spatial sophistication that written descriptions alone
              cannot fully convey. <sup>[1][2]</sup>
            </p>

            <p style={bodyParagraphStyle(isMobile)}>
              Its artistic achievement lay partly in range. More than 95 percent
              of the complex was composed of Chinese-style gardens and
              architecture, including carefully staged scenic zones and
              references to famous southern landscapes, while a much smaller
              section in the Eternal Spring Garden introduced the European-style
              palaces known as the Xiyang Lou. MIT’s essays show that these
              were not accidental curiosities but a deliberately designed court
              environment in which painting, hydraulic engineering, architecture,
              imperial spectacle, and global exchange were brought together. The
              “Forty Scenes” images are especially important because they remain
              among the richest visual records of the palace in its flourishing
              state. For this project, Yuanmingyuan matters as both a historical
              place and an image-world: a site known today through surviving
              ruins, documentary plans, paintings, engravings, reconstructions,
              and the afterlife of looted objects. <sup>[1][3][4]</sup>
            </p>

            <div style={detailGridStyle(isMobile)}>
              <div style={detailCardStyle}>
                <img
                  src="/images/old-summer-palace/old-summer-palace-forty-scenes-main-01.jpg"
                  alt="Old Summer Palace Forty Scenes image 1"
                  style={detailImageStyle(isMobile)}
                />
              </div>

              <div style={detailCardStyle}>
                <img
                  src="/images/old-summer-palace/old-summer-palace-forty-scenes-main-02.jpg"
                  alt="Old Summer Palace Forty Scenes image 2"
                  style={detailImageStyle(isMobile)}
                />
              </div>

              <div style={detailCardStyle}>
                <img
                  src="/images/old-summer-palace/old-summer-palace-forty-scenes-main-03.jpg"
                  alt="Old Summer Palace Forty Scenes image 3"
                  style={detailImageStyle(isMobile)}
                />
              </div>

              <div style={detailCardStyle}>
                <img
                  src="/images/old-summer-palace/old-summer-palace-forty-scenes-main-04.jpg"
                  alt="Old Summer Palace Forty Scenes image 4"
                  style={detailImageStyle(isMobile)}
                />
              </div>
            </div>
          </section>

          <section style={referencesSectionStyle}>
            <h3 style={referencesTitleStyle}>References</h3>
            <ol style={referencesListStyle}>
              <li>Wikipedia, “Old Summer Palace.”</li>
              <li>
                MIT Visualizing Cultures, “The Garden of Perfect Brightness—1.”
              </li>
              <li>
                MIT Visualizing Cultures, “The Garden of Perfect Brightness—2.”
              </li>
              <li>
                MIT Visualizing Cultures, “20 Views of the European Palaces.”
              </li>
            </ol>
          </section>
        </main>
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#f7f3ec",
  color: "#222",
  fontFamily: "Georgia, serif",
};

const topBarStyle = (isMobile) => ({
  maxWidth: "1320px",
  margin: "0 auto",
  padding: isMobile ? "16px 16px 0" : "22px 24px 0",
});

const backButtonStyle = {
  border: "1px solid #3a3328",
  background: "transparent",
  color: "#3a3328",
  padding: "8px 14px",
  cursor: "pointer",
  fontSize: "14px",
  fontFamily: "Georgia, serif",
};

const heroStyle = (isMobile) => ({
  maxWidth: "1320px",
  margin: "0 auto",
  padding: isMobile ? "14px 16px 24px" : "18px 24px 34px",
  textAlign: "center",
  borderBottom: "1px solid rgba(0,0,0,0.08)",
});

const eyebrowStyle = {
  fontSize: "14px",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "#8c93a3",
  marginBottom: "8px",
  fontFamily: TITLE_FONT,
};

const titleStyle = (isMobile) => ({
  fontSize: isMobile ? "44px" : "60px",
  lineHeight: 1.02,
  margin: "0 0 6px",
  color: "#1e1e1e",
  fontFamily: TITLE_FONT,
  fontWeight: 600,
});

const locationStyle = (isMobile) => ({
  fontSize: isMobile ? "18px" : "26px",
  margin: 0,
  color: "#5f5f5f",
  fontFamily: TITLE_FONT,
});

const contentWrapStyle = (isMobile) => ({
  maxWidth: "1320px",
  margin: "0 auto",
  padding: isMobile ? "24px 16px 48px" : "38px 24px 70px",
  display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "220px minmax(0, 1fr)",
  gap: isMobile ? "24px" : "44px",
  alignItems: "start",
});

const sidebarStyle = (isMobile) => ({
  position: isMobile ? "static" : "sticky",
  top: isMobile ? "auto" : "24px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  paddingTop: isMobile ? "0" : "10px",
  paddingBottom: isMobile ? "8px" : "0",
});

const sidebarLinkStyle = {
  color: "#3a3328",
  textDecoration: "none",
  fontSize: "15px",
  lineHeight: 1.4,
  background: "transparent",
  border: "none",
  textAlign: "left",
  padding: 0,
  cursor: "pointer",
  fontFamily: "Georgia, serif",
};

const mainStyle = {
  minWidth: 0,
};

const sectionStyle = {
  marginBottom: "54px",
};

const sectionTitleStyle = (isMobile) => ({
  fontSize: isMobile ? "32px" : "42px",
  marginBottom: "20px",
  color: "#1f1f1f",
  textAlign: "left",
  fontFamily: TITLE_FONT,
  fontWeight: 600,
});

const heroImageWrapStyle = {
  marginBottom: "24px",
};

const heroImageStyle = (isMobile) => ({
  width: "100%",
  maxHeight: isMobile ? "260px" : "560px",
  objectFit: "cover",
  display: "block",
});

const bodyParagraphStyle = (isMobile) => ({
  fontSize: isMobile ? "18px" : "22px",
  lineHeight: isMobile ? 1.75 : 1.9,
  color: "#333",
  margin: "0 0 24px",
  textAlign: "left",
});

const detailGridStyle = (isMobile) => ({
  display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
  gap: "20px",
  marginTop: "28px",
});

const detailCardStyle = {
  background: "rgba(255,255,255,0.64)",
  border: "1px solid rgba(0,0,0,0.08)",
  padding: "12px",
};

const detailImageStyle = (isMobile) => ({
  width: "100%",
  height: isMobile ? "220px" : "220px",
  objectFit: "cover",
  display: "block",
});

const referencesSectionStyle = {
  borderTop: "1px solid rgba(0,0,0,0.08)",
  paddingTop: "24px",
};

const referencesTitleStyle = {
  fontSize: "24px",
  marginBottom: "14px",
  textAlign: "left",
  fontFamily: TITLE_FONT,
  fontWeight: 600,
};

const referencesListStyle = {
  paddingLeft: "24px",
  fontSize: "16px",
  lineHeight: 1.8,
  color: "#444",
  textAlign: "left",
};

export default OldSummerPalaceInfo;