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

function GolestanWhatRemains({ onBackHome, onNavigate }) {
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
        <p style={locationStyle(isMobile)}>What remains</p>
      </div>

      <div style={contentWrapStyle(isMobile)}>
        <Sidebar onNavigate={onNavigate} isMobile={isMobile} />

        <main style={mainStyle}>
          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle(isMobile)}>What remains</h2>

            <p style={bodyParagraphStyle(isMobile)}>
              What remains at Golestan Palace is not only a standing architectural
              ensemble, but a layered system of material, visual, and archival
              survival. UNESCO describes the palace as a walled complex built
              around gardens, pools, and planted areas, with 19th-century
              ornament among its most characteristic features. Travel and
              heritage guides also consistently identify the Mirror Hall,
              Brilliant Hall, Salam Hall, Marble Throne Veranda, Diamond Hall,
              Badgir Building, and other named spaces as among the surviving
              parts of the complex. <sup>[1][2][3]</sup>
            </p>

            <div style={singleImageWrapStyle}>
              <div style={detailCardStyle}>
                <img
                  src="/images/golestan/golestan-damage-exterior-01.jpg"
                  alt="Golestan Palace damage exterior"
                  style={wideImageStyle(isMobile)}
                />
                <p style={detailCaptionStyle}>Damage, exterior.</p>
              </div>
            </div>

            <p style={bodyParagraphStyle(isMobile)}>
              At the same time, what remains after damage is different from what
              remained before it. Hyperallergic and Al Jazeera both describe
              shattered windows, broken mirrored surfaces, damaged ceilings, and
              debris inside historic halls after the 2026 strikes. These reports
              do not erase the palace’s architectural presence; instead, they
              make its vulnerability newly visible. What remains is therefore
              both the monument and its scarred material condition. <sup>[4][5]</sup>
            </p>

            <div style={detailGridStyle(isMobile)}>
              <div style={detailCardStyle}>
                <img
                  src="/images/golestan/golestan-damage-interior-01.jpg"
                  alt="Golestan Palace damage interior"
                  style={detailImageStyle(isMobile)}
                />
                <p style={detailCaptionStyle}>Damage, interior.</p>
              </div>

              <div style={detailCardStyle}>
                <img
                  src="/images/golestan/golestan-damage-detail-remains.jpg"
                  alt="Golestan Palace damage detail"
                  style={detailImageStyle(isMobile)}
                />
                <p style={detailCaptionStyle}>Damage detail / remains.</p>
              </div>
            </div>
          </section>

          <section style={referencesSectionStyle}>
            <h3 style={referencesTitleStyle}>References</h3>
            <ol style={referencesListStyle}>
              <li>UNESCO World Heritage Centre, “Golestan Palace.”</li>
              <li>SurfIran, “Golestan Palace Guide.”</li>
              <li>Iran Safar, “Golestan Palace in Tehran.”</li>
              <li>
                Hyperallergic, “Israel-US Strikes Damage Tehran’s Historic
                Golestan Palace.”
              </li>
              <li>
                Al Jazeera, “‘Permanent scar’: Iran minister on US-Israeli
                attacks on monuments.”
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

const bodyParagraphStyle = (isMobile) => ({
  fontSize: isMobile ? "18px" : "22px",
  lineHeight: isMobile ? 1.75 : 1.9,
  color: "#333",
  margin: "0 0 24px",
  textAlign: "left",
});

const singleImageWrapStyle = {
  marginBottom: "24px",
};

const detailGridStyle = (isMobile) => ({
  display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
  gap: "20px",
});

const detailCardStyle = {
  background: "rgba(255,255,255,0.64)",
  border: "1px solid rgba(0,0,0,0.08)",
  padding: "12px",
};

const wideImageStyle = (isMobile) => ({
  width: "100%",
  height: isMobile ? "260px" : "380px",
  objectFit: "cover",
  display: "block",
});

const detailImageStyle = (isMobile) => ({
  width: "100%",
  height: isMobile ? "260px" : "320px",
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

export default GolestanWhatRemains;