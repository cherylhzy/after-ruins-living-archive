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

function GolestanWhyIncluded({ onBackHome, onNavigate }) {
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
        <p style={locationStyle}>Why included</p>
      </div>

      <div style={contentWrapStyle}>
        <Sidebar onNavigate={onNavigate} />

        <main style={mainStyle}>
          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle}>Why included</h2>

            <div style={verticalSingleWrapStyle}>
              <div style={detailCardStyle}>
                <img
                  src="/images/golestan/golestan-before-after-comparison-05.jpg"
                  alt="Golestan Palace before and after comparison"
                  style={verticalLargeImageStyle}
                />
                <p style={detailCaptionStyle}>Before / after comparison.</p>
              </div>
            </div>

            <p style={bodyParagraphStyle}>
              Golestan Palace is included in <em>After Ruins</em> not because it
              represents total disappearance, but because it makes visible a
              more complicated condition: survival under pressure, partial loss,
              state preservation, and renewed vulnerability. UNESCO presents the
              palace as one of the most significant monuments of the Qajar era
              and as an important synthesis of Persian and European architectural
              languages. Wikipedia also notes that a large portion of the wider
              complex was destroyed between 1925 and 1945 under Reza Shah during
              urban modernization. <sup>[1][2]</sup>
            </p>

            <div style={verticalPairGridStyle}>
              <div style={detailCardStyle}>
                <img
                  src="/images/golestan/golestan-before-after-comparison-01.jpg"
                  alt="Golestan Palace comparison image 1"
                  style={verticalImageStyle}
                />
                <p style={detailCaptionStyle}>Comparison image 1.</p>
              </div>

              <div style={detailCardStyle}>
                <img
                  src="/images/golestan/golestan-before-after-comparison-02.jpg"
                  alt="Golestan Palace comparison image 2"
                  style={verticalImageStyle}
                />
                <p style={detailCaptionStyle}>Comparison image 2.</p>
              </div>
            </div>

            <p style={bodyParagraphStyle}>
              The site therefore fits the project not as a complete ruin, but as
              a place where memory is structured through what remains, what was
              removed, and what must now be reinterpreted. That logic became
              even more urgent in 2026, when multiple reports described damage
              to the palace after nearby strikes. Hyperallergic reported
              shattered windows, damaged ceilings, and broken marble statues
              following shockwaves from a nearby attack. Al Jazeera likewise
              described shattered halls and broken mirrored surfaces, while
              quoting Iran’s minister of cultural heritage as saying that dozens
              of sites had been damaged nationwide. <sup>[3][4]</sup>
            </p>

            <div style={verticalPairGridStyle}>
              <div style={detailCardStyle}>
                <img
                  src="/images/golestan/golestan-before-after-comparison-03.jpg"
                  alt="Golestan Palace comparison image 3"
                  style={verticalImageStyle}
                />
                <p style={detailCaptionStyle}>Comparison image 3.</p>
              </div>

              <div style={detailCardStyle}>
                <img
                  src="/images/golestan/golestan-before-after-comparison-04.jpg"
                  alt="Golestan Palace comparison image 4"
                  style={verticalImageStyle}
                />
                <p style={detailCaptionStyle}>Comparison image 4.</p>
              </div>
            </div>
          </section>

          <section style={referencesSectionStyle}>
            <h3 style={referencesTitleStyle}>References</h3>
            <ol style={referencesListStyle}>
              <li>UNESCO World Heritage Centre, “Golestan Palace.”</li>
              <li>Wikipedia, “Golestan Palace.”</li>
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

const bodyParagraphStyle = {
  fontSize: "22px",
  lineHeight: 1.9,
  color: "#333",
  margin: "28px 0",
  textAlign: "left",
};

const detailCardStyle = {
  background: "rgba(255,255,255,0.64)",
  border: "1px solid rgba(0,0,0,0.08)",
  padding: "12px",
};

const verticalSingleWrapStyle = {
  maxWidth: "720px",
  marginBottom: "18px",
};

const verticalLargeImageStyle = {
  width: "100%",
  height: "760px",
  objectFit: "cover",
  display: "block",
};

const verticalPairGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "20px",
  marginTop: "8px",
};

const verticalImageStyle = {
  width: "100%",
  height: "620px",
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

export default GolestanWhyIncluded;