import React, { useEffect, useState } from "react";

const TITLE_FONT = '"Cormorant Garamond", Georgia, serif';

function Sidebar({ onNavigate, isMobile }) {
  return (
    <aside style={sidebarStyle(isMobile)}>
      <button style={sidebarLinkStyle} onClick={() => onNavigate("golestan-info")}>
        Info
      </button>
      <button style={sidebarLinkStyle} onClick={() => onNavigate("golestan-why")}>
        Why included
      </button>
      <button style={sidebarLinkStyle} onClick={() => onNavigate("golestan-remains")}>
        What remains
      </button>
      <button
        style={sidebarLinkStyle}
        onClick={() => onNavigate("golestan-participatory")}
      >
        Participatory archive
      </button>
    </aside>
  );
}

function GolestanInfo({ onBackHome, onNavigate }) {
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
        <h1 style={titleStyle(isMobile)}>Golestan Palace</h1>
        <p style={locationStyle(isMobile)}>Tehran, Iran</p>
      </div>

      <div style={contentWrapStyle(isMobile)}>
        <Sidebar onNavigate={onNavigate} isMobile={isMobile} />

        <main style={mainStyle}>
          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle(isMobile)}>Info</h2>

            <div style={heroImageWrapStyle}>
              <img
                src="/images/golestan/golestan-facade-main.jpg"
                alt="Golestan Palace facade"
                style={heroImageStyle(isMobile)}
              />
              <p style={detailCaptionStyle}>Facade.</p>
            </div>

            <p style={bodyParagraphStyle(isMobile)}>
              Golestan Palace is a former royal complex in Tehran and one of the
              most important surviving architectural ensembles associated with
              the Qajar period. UNESCO describes it as a masterpiece of the
              Qajar era and emphasizes its successful integration of earlier
              Persian crafts and architecture with Western influences. It was
              built around a garden with pools and planted areas, and its most
              characteristic ornamental features largely date from the nineteenth
              century. <sup>[1][2]</sup>
            </p>

            <p style={bodyParagraphStyle(isMobile)}>
              UNESCO also presents the palace as an influential model for later
              Iranian artists and architects, while the wider historical record
              connects the site to Tehran’s development as the capital under the
              Qajar dynasty. In this project, Golestan matters not only as a
              monument still standing, but as a site where architecture,
              ornament, archives, and public memory continue to shape one
              another. <sup>[1][2]</sup>
            </p>

            <div style={detailGridStyle(isMobile)}>
              <div style={detailCardStyle}>
                <img
                  src="/images/golestan/golestan-facade-detail-01.jpg"
                  alt="Golestan Palace facade detail"
                  style={detailImageStyle(isMobile)}
                />
                <p style={detailCaptionStyle}>Facade detail.</p>
              </div>

              <div style={detailCardStyle}>
                <img
                  src="/images/golestan/golestan-glass-mosaic-detail.jpg"
                  alt="Golestan Palace glass mosaic detail"
                  style={detailImageStyle(isMobile)}
                />
                <p style={detailCaptionStyle}>Glass mosaic / tile detail.</p>
              </div>
            </div>

            <div style={{ ...heroImageWrapStyle, marginTop: 24 }}>
              <img
                src="/images/golestan/golestan-mirror-hall-main.jpg"
                alt="Golestan Palace Mirror Hall"
                style={heroImageStyle(isMobile)}
              />
              <p style={detailCaptionStyle}>Mirror Hall.</p>
            </div>
          </section>

          <section style={referencesSectionStyle}>
            <h3 style={referencesTitleStyle}>References</h3>
            <ol style={referencesListStyle}>
              <li>UNESCO World Heritage Centre, “Golestan Palace.”</li>
              <li>Wikipedia, “Golestan Palace.”</li>
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

const detailCaptionStyle = {
  fontSize: "14px",
  lineHeight: 1.5,
  color: "#6e6e6e",
  marginTop: "10px",
  textAlign: "left",
};

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

export default GolestanInfo;