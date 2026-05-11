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

function OldSummerPalaceWhatRemains({ onBackHome, onNavigate }) {
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
        <p style={locationStyle(isMobile)}>What remains</p>
      </div>

      <div style={contentWrapStyle(isMobile)}>
        <Sidebar onNavigate={onNavigate} isMobile={isMobile} />

        <main style={mainStyle}>
          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle(isMobile)}>What remains</h2>

            <div style={detailGridStyle(isMobile)}>
              <div style={detailCardStyle}>
                <img
                  src="/images/old-summer-palace/old-summer-palace-plan-01.jpg"
                  alt="Old Summer Palace plan 1"
                  style={detailImageStyle(isMobile)}
                />
              </div>

              <div style={detailCardStyle}>
                <img
                  src="/images/old-summer-palace/old-summer-palace-plan-02.jpg"
                  alt="Old Summer Palace plan 2"
                  style={detailImageStyle(isMobile)}
                />
              </div>
            </div>

            <p style={bodyParagraphStyle(isMobile)}>
              What remains of Yuanmingyuan is not a single ruin but a fractured
              field of traces: plans, place-names, excavated foundations,
              landscape alignments, surviving stonework, dispersed objects, and
              above all the persistent recognizability of specific ruined forms.
              The site’s plans are crucial because they restore a sense of scale.
              They remind viewers that the destruction of 1860 did not erase one
              pavilion or one façade, but devastated an immense three-garden
              complex whose total extent far exceeded the portion most visitors
              now associate with the site. MIT’s essays and Wikipedia together
              make clear that the European palaces were always only one section
              of a much larger imperial environment. Yet because those stone
              remains proved more photographable and legible after destruction,
              they became the dominant visual shorthand for the whole palace.
              The plans therefore matter here not simply as orientation devices,
              but as evidence of the magnitude of what was lost. <sup>[1][2]</sup>
            </p>

            <div style={detailGridStyle(isMobile)}>
              <div style={detailCardStyle}>
                <img
                  src="/images/old-summer-palace/old-summer-palace-ruins-01.jpg"
                  alt="Old Summer Palace ruins 1"
                  style={detailImageStyle(isMobile)}
                />
              </div>

              <div style={detailCardStyle}>
                <img
                  src="/images/old-summer-palace/old-summer-palace-heads.jpg"
                  alt="Old Summer Palace zodiac heads"
                  style={detailImageStyle(isMobile)}
                />
              </div>

              <div style={detailCardStyle}>
                <img
                  src="/images/old-summer-palace/old-summer-palace-ruins-02.jpg"
                  alt="Old Summer Palace ruins 2"
                  style={detailImageStyle(isMobile)}
                />
              </div>

              <div style={detailCardStyle}>
                <img
                  src="/images/old-summer-palace/old-summer-palace-ruins-dashuifa.jpg"
                  alt="Old Summer Palace Dashuifa ruins"
                  style={detailImageStyle(isMobile)}
                />
              </div>

              <div style={{ ...detailCardStyle, gridColumn: isMobile ? "auto" : "1 / span 2" }}>
                <img
                  src="/images/old-summer-palace/old-summer-palace-dashuifa-engraving.jpg"
                  alt="Old Summer Palace Dashuifa engraving"
                  style={wideImageStyle(isMobile)}
                />
              </div>
            </div>

            <p style={bodyParagraphStyle(isMobile)}>
              The most visible remains today are concentrated in the Xiyang Lou,
              especially the area around Haiyantang and Dashuifa. This is where
              architecture, hydraulic engineering, image circulation, and the
              afterlife of looted objects most clearly intersect. Wikipedia notes
              that the zodiac heads belonged to a clock-fountain in front of
              Haiyantang, designed in relation to Jesuit artistic and hydraulic
              expertise; MIT further shows how engravings and later photographs
              preserved the forms of the European palaces for later viewers. The
              bronze heads are especially important because they condense several
              histories at once: technical ingenuity, court taste, violent
              seizure, circulation through the art market, and continuing debates
              over return. Their appearance in auctions means that what remains
              of Yuanmingyuan is not only in Beijing. It also survives as
              dispersed material culture, as reproducible images, and as ruins
              whose fragments continue to stand in for an entire destroyed world.
              Dashuifa and Haiyantang thus remain central not because they were
              the whole palace, but because they became the most enduring visual
              and political emblems of its afterlife. <sup>[2][3][4][5]</sup>
            </p>
          </section>

          <section style={referencesSectionStyle}>
            <h3 style={referencesTitleStyle}>References</h3>
            <ol style={referencesListStyle}>
              <li>Wikipedia, “Old Summer Palace.”</li>
              <li>
                MIT Visualizing Cultures, “The Garden of Perfect Brightness—2.”
              </li>
              <li>
                MIT Visualizing Cultures, “The Garden of Perfect Brightness—3:
                Destruction, Looting, and Memory.”
              </li>
              <li>
                MIT Visualizing Cultures, “Ernst Ohlmer’s 1873 Photos of the
                Ruins.”
              </li>
              <li>Wikipedia, “Old Summer Palace bronze heads.”</li>
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
  height: isMobile ? "240px" : "260px",
  objectFit: "cover",
  display: "block",
});

const wideImageStyle = (isMobile) => ({
  width: "100%",
  height: isMobile ? "240px" : "320px",
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

export default OldSummerPalaceWhatRemains;