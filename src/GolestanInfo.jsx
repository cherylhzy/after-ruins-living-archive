import React from "react";

const TITLE_FONT = '"Cormorant Garamond", Georgia, serif';

function Sidebar({ onNavigate }) {
  return (
    <aside style={sidebarStyle}>
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
  return (
    <div style={pageStyle}>
      <div style={topBarStyle}>
        <button style={backButtonStyle} onClick={onBackHome}>
          ← Back
        </button>
      </div>

      <div style={heroStyle}>
        <p style={eyebrowStyle}>AFTER RUINS / CASE STUDY</p>
        <h1 style={titleStyle}>Golestan Palace</h1>
        <p style={locationStyle}>Tehran, Iran</p>
      </div>

      <div style={contentWrapStyle}>
        <Sidebar onNavigate={onNavigate} />

        <main style={mainStyle}>
          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle}>Info</h2>

            <div style={heroImageWrapStyle}>
              <img
                src="/images/golestan/golestan-facade-main.jpg"
                alt="Golestan Palace facade"
                style={heroImageStyle}
              />
              <p style={detailCaptionStyle}>Facade.</p>
            </div>

            <p style={bodyParagraphStyle}>
              Golestan Palace is a former royal complex in Tehran and one of the
              most important surviving architectural ensembles associated with
              the Qajar period. UNESCO describes it as a masterpiece of the
              Qajar era and emphasizes its successful integration of earlier
              Persian crafts and architecture with Western influences. It was
              built around a garden with pools and planted areas, and its most
              characteristic ornamental features largely date from the nineteenth
              century. <sup>[1][2]</sup>
            </p>

            <p style={bodyParagraphStyle}>
              UNESCO also presents the palace as an influential model for later
              Iranian artists and architects, while the wider historical record
              connects the site to Tehran’s development as the capital under the
              Qajar dynasty. In this project, Golestan matters not only as a
              monument still standing, but as a site where architecture,
              ornament, archives, and public memory continue to shape one
              another. <sup>[1][2]</sup>
            </p>

            <div style={detailGridStyle}>
              <div style={detailCardStyle}>
                <img
                  src="/images/golestan/golestan-facade-detail-01.jpg"
                  alt="Golestan Palace facade detail"
                  style={detailImageStyle}
                />
                <p style={detailCaptionStyle}>Facade detail.</p>
              </div>

              <div style={detailCardStyle}>
                <img
                  src="/images/golestan/golestan-glass-mosaic-detail.jpg"
                  alt="Golestan Palace glass mosaic detail"
                  style={detailImageStyle}
                />
                <p style={detailCaptionStyle}>Glass mosaic / tile detail.</p>
              </div>
            </div>

            <div style={{ ...heroImageWrapStyle, marginTop: 24 }}>
              <img
                src="/images/golestan/golestan-mirror-hall-main.jpg"
                alt="Golestan Palace Mirror Hall"
                style={heroImageStyle}
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

const topBarStyle = {
  maxWidth: "1320px",
  margin: "0 auto",
  padding: "22px 24px 0",
};

const backButtonStyle = {
  border: "1px solid #3a3328",
  background: "transparent",
  color: "#3a3328",
  padding: "8px 14px",
  cursor: "pointer",
  fontSize: "14px",
  fontFamily: "Georgia, serif",
};

const heroStyle = {
  maxWidth: "1320px",
  margin: "0 auto",
  padding: "18px 24px 34px",
  textAlign: "center",
  borderBottom: "1px solid rgba(0,0,0,0.08)",
};

const eyebrowStyle = {
  fontSize: "14px",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "#8c93a3",
  marginBottom: "8px",
  fontFamily: TITLE_FONT,
};

const titleStyle = {
  fontSize: "60px",
  lineHeight: 1.02,
  margin: "0 0 6px",
  color: "#1e1e1e",
  fontFamily: TITLE_FONT,
  fontWeight: 600,
};

const locationStyle = {
  fontSize: "26px",
  margin: 0,
  color: "#5f5f5f",
  fontFamily: TITLE_FONT,
};

const contentWrapStyle = {
  maxWidth: "1320px",
  margin: "0 auto",
  padding: "38px 24px 70px",
  display: "grid",
  gridTemplateColumns: "220px minmax(0, 1fr)",
  gap: "44px",
  alignItems: "start",
};

const sidebarStyle = {
  position: "sticky",
  top: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  paddingTop: "10px",
};

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

const sectionTitleStyle = {
  fontSize: "42px",
  marginBottom: "20px",
  color: "#1f1f1f",
  textAlign: "left",
  fontFamily: TITLE_FONT,
  fontWeight: 600,
};

const heroImageWrapStyle = {
  marginBottom: "24px",
};

const heroImageStyle = {
  width: "100%",
  maxHeight: "560px",
  objectFit: "cover",
  display: "block",
};

const bodyParagraphStyle = {
  fontSize: "22px",
  lineHeight: 1.9,
  color: "#333",
  margin: "0 0 24px",
  textAlign: "left",
};

const detailGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "20px",
  marginTop: "28px",
};

const detailCardStyle = {
  background: "rgba(255,255,255,0.64)",
  border: "1px solid rgba(0,0,0,0.08)",
  padding: "12px",
};

const detailImageStyle = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
  display: "block",
};

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