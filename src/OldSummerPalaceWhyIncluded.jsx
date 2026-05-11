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

function OldSummerPalaceWhyIncluded({ onBackHome, onNavigate }) {
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
        <p style={locationStyle(isMobile)}>Why included</p>
      </div>

      <div style={contentWrapStyle(isMobile)}>
        <Sidebar onNavigate={onNavigate} isMobile={isMobile} />

        <main style={mainStyle}>
          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle(isMobile)}>Why included</h2>

            <div style={heroImageWrapStyle}>
              <img
                src="/images/old-summer-palace/old-summer-palace-destruction-before.jpg"
                alt="Old Summer Palace before destruction"
                style={heroImageStyle(isMobile)}
              />
            </div>

            <p style={bodyParagraphStyle(isMobile)}>
              The Old Summer Palace enters <em>After Ruins</em> as one of the
              clearest cases in which architecture, empire, collecting, and
              historical memory cannot be separated. In life, Yuanmingyuan was a
              highly controlled imperial world: a courtly landscape where the
              Qing emperors lived, governed, studied, staged ceremony, and
              experimented with forms of spatial display ranging from Chinese
              garden traditions to European-style hydraulic spectacle. In loss,
              it became something equally consequential: a site through which
              military violence, colonial collecting, national humiliation,
              restitution debates, and the politics of historical imagination
              continue to be argued. This project includes Yuanmingyuan because
              it is not only a destroyed place; it is also one of the most
              powerful examples of how destruction reorganizes cultural memory
              across archives, museums, auctions, textbooks, and ruins
              themselves. <sup>[1][2]</sup>
            </p>

            <div style={detailGridStyle(isMobile)}>
              <div style={detailCardStyle}>
                <img
                  src="/images/old-summer-palace/old-summer-palace-destruction-history-01.jpg"
                  alt="Old Summer Palace destruction history image 1"
                  style={detailImageStyle(isMobile)}
                />
              </div>

              <div style={detailCardStyle}>
                <img
                  src="/images/old-summer-palace/old-summer-palace-destruction-history-02.jpg"
                  alt="Old Summer Palace destruction history image 2"
                  style={detailImageStyle(isMobile)}
                />
              </div>

              <div style={detailCardStyle}>
                <img
                  src="/images/old-summer-palace/old-summer-palace-destruction-history-03.jpg"
                  alt="Old Summer Palace destruction history image 3"
                  style={detailImageStyle(isMobile)}
                />
              </div>

              <div style={detailCardStyle}>
                <img
                  src="/images/old-summer-palace/old-summer-palace-destruction-after.jpg"
                  alt="Old Summer Palace after destruction"
                  style={detailImageStyle(isMobile)}
                />
              </div>
            </div>

            <p style={bodyParagraphStyle(isMobile)}>
              The 1860 destruction is especially important here because it was
              not a regrettable side effect but a deliberately staged act with a
              long rhetorical afterlife. Wikipedia records that Lord Elgin
              ordered the destruction after the capture, imprisonment, and
              deaths of members of an Anglo-French delegation; MIT’s essays show
              how this act was subsequently narrated, moralized, condemned,
              photographed, and absorbed into a much larger history of looting
              and memory. In other words, Elgin framed—or claimed—the burning as
              retaliation, but the result was the systematic devastation of a
              palace complex that had come to symbolize Qing sovereignty,
              refinement, and imperial cultural power. Yuanmingyuan is therefore
              included not simply because it was ruined, but because its ruin was
              made exemplary: repeatedly used to explain the violence of foreign
              intervention and the dispersal of Chinese cultural property around
              the world. <sup>[2][3][4]</sup>
            </p>
          </section>

          <section style={referencesSectionStyle}>
            <h3 style={referencesTitleStyle}>References</h3>
            <ol style={referencesListStyle}>
              <li>
                MIT Visualizing Cultures, “The Garden of Perfect Brightness—1.”
              </li>
              <li>Wikipedia, “Old Summer Palace.”</li>
              <li>
                MIT Visualizing Cultures, “The Garden of Perfect Brightness—3:
                Destruction, Looting, and Memory.”
              </li>
              <li>
                MIT Visualizing Cultures, “Opium Wars: The Final Act / Yuanmingyuan.”
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
  maxHeight: isMobile ? "260px" : "420px",
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
  marginBottom: "24px",
});

const detailCardStyle = {
  background: "rgba(255,255,255,0.64)",
  border: "1px solid rgba(0,0,0,0.08)",
  padding: "12px",
};

const detailImageStyle = (isMobile) => ({
  width: "100%",
  height: isMobile ? "260px" : "280px",
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

export default OldSummerPalaceWhyIncluded;