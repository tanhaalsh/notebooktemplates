import type { ViewModel } from '../state/viewModel';

export function AddPanelsDrawer({ v }: { v: ViewModel }) {
  return (
    <div onClick={v.stop} data-screen-label="Add panels drawer" style={{ position: "absolute", top: "92px", right: "0", bottom: "0", width: "420px", background: "#fff", borderLeft: "1px solid #e6e4e0", boxShadow: "-8px 0 24px rgba(28,27,26,0.08)", zIndex: 36, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 24px", borderBottom: "1px solid #e6e4e0", flexShrink: 0 }}>
        <span style={{ fontSize: "20px", fontWeight: 700, color: "#1c1b1a" }}>Add panels</span>
        <span className="hv1" onClick={v.closeMenu} style={{ display: "flex", padding: "4px", borderRadius: "4px", cursor: "pointer", color: "#4a4845" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </span>
      </div>
      <div style={{ flex: 1, minHeight: "0", overflowY: "auto" }}>
        <div style={{ padding: "12px 0", borderBottom: "1px solid #e6e4e0" }}>
          <div className="hv1" onClick={v.pickChart} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 16px", margin: "0 8px", borderRadius: "8px", cursor: "pointer" }}>
            <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#edf6e6", color: "#3f8a2a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M14 14l2 5 1.5-2 2 2 1-1-2-2 2-1.5z" />
              </svg>
            </span>
            <span style={{ flex: 1, minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 700, color: "#1c1b1a" }}>Quick panel builder</span>
              <span style={{ fontSize: "13px", lineHeight: 1.4, color: "#6b6966" }}>Use regex to quickly build panels from keys.</span>
            </span>
          </div>
        </div>
        <div style={{ borderBottom: "1px solid #e6e4e0", paddingBottom: v.dsec.charts.pad }}>
          <div onClick={v.dsec.charts.toggle} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", cursor: "pointer", userSelect: "none" }}>
            <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em", color: "#6b6966" }}>CHARTS</span>
            <span style={{ display: "flex", color: "#4a4845", transform: `rotate(${v.dsec.charts.rot})`, transition: "transform 160ms" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 15l6-6 6 6" />
              </svg>
            </span>
          </div>
          {v.dsec.charts.open && (
            <>
              <div className="hv1" onClick={v.pickChart} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 16px", margin: "0 8px", borderRadius: "8px", cursor: "pointer" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#eaf1ff", color: "#2f6fe0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4v16h16" />
                    <path d="M7 15l4-5 3 3 5-6" />
                  </svg>
                </span>
                <span style={{ flex: 1, minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 700, color: "#1c1b1a" }}>Line plot</span>
                  <span style={{ fontSize: "13px", lineHeight: 1.4, color: "#6b6966" }}>Display data trends and changes over time.</span>
                </span>
              </div>
              <div className="hv1" onClick={v.pickChart} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 16px", margin: "0 8px", borderRadius: "8px", cursor: "pointer" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#eaf1ff", color: "#2f6fe0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 20h16" />
                    <rect x="6" y="12" width="4" height="8" />
                    <rect x="14" y="6" width="4" height="14" />
                  </svg>
                </span>
                <span style={{ flex: 1, minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 700, color: "#1c1b1a" }}>Bar chart</span>
                  <span style={{ fontSize: "13px", lineHeight: 1.4, color: "#6b6966" }}>Compare categories using vertical or horizontal bars.</span>
                </span>
              </div>
              <div className="hv1" onClick={v.pickChart} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 16px", margin: "0 8px", borderRadius: "8px", cursor: "pointer" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#eaf1ff", color: "#2f6fe0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4v16h16" />
                    <circle cx="9" cy="14" r="1" />
                    <circle cx="12" cy="9" r="1" />
                    <circle cx="16" cy="12" r="1" />
                    <circle cx="17" cy="6" r="1" />
                  </svg>
                </span>
                <span style={{ flex: 1, minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 700, color: "#1c1b1a" }}>Scatter plot</span>
                  <span style={{ fontSize: "13px", lineHeight: 1.4, color: "#6b6966" }}>Display relationships and correlations between data.</span>
                </span>
              </div>
              <div className="hv1" onClick={v.pickChart} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 16px", margin: "0 8px", borderRadius: "8px", cursor: "pointer" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#eaf1ff", color: "#2f6fe0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 4v16M12 4v16M19 4v16" />
                    <path d="M5 8l7 8 7-10M5 16l7-6 7 6" />
                  </svg>
                </span>
                <span style={{ flex: 1, minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 700, color: "#1c1b1a" }}>Parallel coordinates</span>
                  <span style={{ fontSize: "13px", lineHeight: 1.4, color: "#6b6966" }}>Compare multiple parameters across several dimensions.</span>
                </span>
              </div>
              <div style={{ padding: "6px 24px 4px 96px" }}>
                <span onClick={v.pickChart} style={{ fontSize: "15px", fontWeight: 700, color: "#2f6fe0", cursor: "pointer" }}>More</span>
              </div>
            </>
          )}
        </div>
        <div style={{ padding: "12px 0", borderBottom: "1px solid #e6e4e0" }}>
          <div className="hv1" onClick={v.pickChart} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 16px", margin: "0 8px", borderRadius: "8px", cursor: "pointer" }}>
            <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#f1ecff", color: "#6d4ad8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="9" height="7" rx="2" />
                <rect x="11" y="13" width="9" height="7" rx="2" />
                <path d="M8 11v2a3 3 0 0 0 3 3" />
              </svg>
            </span>
            <span style={{ flex: 1, minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 700, color: "#1c1b1a" }}>Weave traces</span>
              <span style={{ fontSize: "13px", lineHeight: 1.4, color: "#6b6966" }}>View and analyze Weave traces for selected runs.</span>
            </span>
          </div>
        </div>
        <div style={{ borderBottom: "1px solid #e6e4e0" }}>
          <div onClick={v.dsec.query.toggle} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", cursor: "pointer", userSelect: "none" }}>
            <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em", color: "#6b6966" }}>QUERY PANELS</span>
            <span style={{ display: "flex", color: "#4a4845", transform: `rotate(${v.dsec.query.rot})`, transition: "transform 160ms" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 15l6-6 6 6" />
              </svg>
            </span>
          </div>
          {v.dsec.query.open && (
            <div className="hv1" onClick={v.pickChart} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 16px", margin: "0 8px", borderRadius: "8px", cursor: "pointer" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#eaf1ff", color: "#2f6fe0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="5" width="16" height="14" rx="2" />
                  <path d="M4 10h16M10 10v9" />
                </svg>
              </span>
              <span style={{ flex: 1, minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 700, color: "#1c1b1a" }}>Query panel</span>
                <span style={{ fontSize: "13px", lineHeight: 1.4, color: "#6b6966" }}>Query and transform your runs, tables and artifacts.</span>
              </span>
            </div>
          )}
        </div>
        <div style={{ borderBottom: "1px solid #e6e4e0" }}>
          <div onClick={v.dsec.media.toggle} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", cursor: "pointer", userSelect: "none" }}>
            <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em", color: "#6b6966" }}>MEDIA</span>
            <span style={{ display: "flex", color: "#4a4845", transform: `rotate(${v.dsec.media.rot})`, transition: "transform 160ms" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 15l6-6 6 6" />
              </svg>
            </span>
          </div>
          {v.dsec.media.open && (
            <div className="hv1" onClick={v.pickChart} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 16px", margin: "0 8px", borderRadius: "8px", cursor: "pointer" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#eaf1ff", color: "#2f6fe0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="5" width="16" height="14" rx="2" />
                  <circle cx="9" cy="10" r="1.5" />
                  <path d="M20 16l-5-5-9 8" />
                </svg>
              </span>
              <span style={{ flex: 1, minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 700, color: "#1c1b1a" }}>Media</span>
                <span style={{ fontSize: "13px", lineHeight: 1.4, color: "#6b6966" }}>Display images, video, audio and 3D logged to runs.</span>
              </span>
            </div>
          )}
        </div>
        <div style={{ paddingBottom: "16px" }}>
          <div onClick={v.dsec.text.toggle} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", cursor: "pointer", userSelect: "none" }}>
            <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em", color: "#6b6966" }}>TEXT AND CODE</span>
            <span style={{ display: "flex", color: "#4a4845", transform: `rotate(${v.dsec.text.rot})`, transition: "transform 160ms" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 15l6-6 6 6" />
              </svg>
            </span>
          </div>
          {v.dsec.text.open && (
            <>
              <div className="hv1" onClick={v.pickChart} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 16px", margin: "0 8px", borderRadius: "8px", cursor: "pointer" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#e6f6f8", color: "#11849a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
                  </svg>
                </span>
                <span style={{ flex: 1, minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 700, color: "#1c1b1a" }}>Code</span>
                  <span style={{ fontSize: "13px", lineHeight: 1.4, color: "#6b6966" }}>Display and compare code diffs across runs.</span>
                </span>
              </div>
              <div className="hv1" onClick={v.pickMarimo} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 16px", margin: "0 8px", borderRadius: "8px", cursor: "pointer" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#e6f6f8", color: "#11849a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M7 9l3 3-3 3M13 15h4" />
                  </svg>
                </span>
                <span style={{ flex: 1, minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 700, color: "#1c1b1a" }}>
                    Notebook
                    <span style={{ fontSize: "10px", fontWeight: 700, color: "#fff", background: "var(--cw-blue-500)", borderRadius: "999px", padding: "1px 7px" }}>New</span>
                  </span>
                  <span style={{ fontSize: "13px", lineHeight: 1.4, color: "#6b6966" }}>Interactive Python panels from a template or your own notebook.</span>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 16px", margin: "0 8px", borderRadius: "8px", opacity: 0.5 }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#e6f6f8", color: "#11849a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
                  </svg>
                </span>
                <span style={{ flex: 1, minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "#1c1b1a" }}>HTML</span>
                  <span style={{ fontSize: "13px", lineHeight: 1.4, color: "#6b6966" }}>Display HTML content directly.</span>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px", padding: "5px 8px", borderRadius: "4px", background: "#f0eeeb", fontSize: "13px", fontWeight: 700, color: "#1c1b1a" }}>
                  Docs
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
              <div className="hv1" onClick={v.pickMarkdown} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 16px", margin: "0 8px", borderRadius: "8px", cursor: "pointer" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#e6f6f8", color: "#11849a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 18l4-12 4 12M5.5 14h5" />
                    <path d="M20 18v-4.5a2.5 2.5 0 0 0-5 0M15 16a2 2 0 1 0 5 0" />
                  </svg>
                </span>
                <span style={{ flex: 1, minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 700, color: "#1c1b1a" }}>Markdown</span>
                  <span style={{ fontSize: "13px", lineHeight: 1.4, color: "#6b6966" }}>Add formatted notes to track insights and observations.</span>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
