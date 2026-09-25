
export function RunsSidebar() {
  return (
    <div style={{ width: "296px", flexShrink: 0, borderRight: "1px solid #e6e4e0", display: "flex", flexDirection: "column", minHeight: "0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "14px 16px 10px" }}>
        <span style={{ fontSize: "14px", fontWeight: 700 }}>Runs</span>
        <span style={{ fontSize: "10px", color: "#4a4845", background: "#f0eeeb", border: "1px solid #e6e4e0", borderRadius: "3px", padding: "0 5px" }}>15</span>
        <span style={{ flex: 1 }} />
        <span style={{ display: "flex", color: "#6b6966" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 4h6v6M20 4l-8 8M18 14v6H4V6h6" />
          </svg>
        </span>
        <span style={{ display: "flex", color: "#6b6966" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
          </svg>
        </span>
        <span style={{ display: "flex", color: "#6b6966" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
          </svg>
        </span>
      </div>
      <div style={{ padding: "0 16px 10px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", border: "1px solid #d6d3cf", borderRadius: "6px", padding: "0 10px", height: "32px", color: "#8a8784", fontSize: "13px" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          Search runs
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ display: "flex", padding: "6px", border: "1px solid #e6e4e0", borderRadius: "6px", color: "#4a4845" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M7 12h10M10 18h4" />
            </svg>
          </span>
          <span style={{ display: "flex", padding: "6px", border: "1px solid #e6e4e0", borderRadius: "6px", color: "#4a4845" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M8 9h8M8 13h8" />
            </svg>
          </span>
          <span style={{ display: "flex", padding: "6px", border: "1px solid #e6e4e0", borderRadius: "6px", color: "#4a4845" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 4v16M4 8l4-4 4 4M16 20V4M12 16l4 4 4-4" />
            </svg>
          </span>
          <span style={{ flex: 1 }} />
          <span style={{ display: "flex", padding: "6px", border: "1px solid #e6e4e0", borderRadius: "6px", color: "#4a4845" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16M10 6v12" />
            </svg>
          </span>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "7px 16px", borderTop: "1px solid #e6e4e0", borderBottom: "1px solid #e6e4e0", background: "#faf9f7", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "#4a4845" }}>
        NAME
        <span style={{ fontSize: "10px", fontWeight: 400, background: "#f0eeeb", border: "1px solid #e6e4e0", borderRadius: "3px", padding: "0 5px" }}>15</span>
      </div>
      <div style={{ flex: 1, minHeight: "0", overflowY: "auto" }}>
        <div className="hv3" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 16px", borderBottom: "1px solid #e6e4e0", fontSize: "13px", cursor: "pointer" }}>
          <span style={{ display: "flex", color: "#6b6966" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#5b6270">
              <path d="M14 3l7 7-3 1-4 4 1 5-2 1-4-4-5 5-1-1 5-5-4-4 1-2 5 1 4-4z" />
            </svg>
          </span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0, border: "2px solid #16b3c7" }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>some-external-run</span>
        </div>
        <div className="hv3" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 16px", fontSize: "13px", cursor: "pointer" }}>
          <span style={{ display: "flex", color: "#6b6966" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0, background: "#f0364f" }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>cellar-door-11</span>
        </div>
        <div className="hv3" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 16px", fontSize: "13px", cursor: "pointer" }}>
          <span style={{ display: "flex", color: "#6b6966" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0, background: "#f7a57a" }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>stellated-octahedron-24</span>
        </div>
        <div className="hv3" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 16px", fontSize: "13px", cursor: "pointer" }}>
          <span style={{ display: "flex", color: "#6b6966" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0, background: "#a855f7" }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>quantum-paradigm-12</span>
        </div>
        <div className="hv3" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 16px", fontSize: "13px", cursor: "pointer" }}>
          <span style={{ display: "flex", color: "#6b6966" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0, background: "#f5c542" }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>deviled-egg-1</span>
        </div>
        <div className="hv3" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 16px", fontSize: "13px", cursor: "pointer" }}>
          <span style={{ display: "flex", color: "#6b6966" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0, background: "#16b3c7" }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>luminous-lagoon-12</span>
        </div>
        <div className="hv3" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 16px", fontSize: "13px", cursor: "pointer" }}>
          <span style={{ display: "flex", color: "#6b6966" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0, background: "#f0364f" }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>enigmatic-emu-11</span>
        </div>
        <div className="hv3" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 16px", fontSize: "13px", cursor: "pointer" }}>
          <span style={{ display: "flex", color: "#6b6966" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0, background: "#12a150" }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>sapphire-sky-7</span>
        </div>
        <div className="hv3" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 16px", fontSize: "13px", cursor: "pointer" }}>
          <span style={{ display: "flex", color: "#6b6966" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0, background: "#5b6270" }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>rabid-raccoon-5</span>
        </div>
        <div className="hv3" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 16px", fontSize: "13px", cursor: "pointer" }}>
          <span style={{ display: "flex", color: "#6b6966" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0, background: "#8b5cf6" }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>nebulous-nightingale-3</span>
        </div>
        <div className="hv3" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 16px", fontSize: "13px", cursor: "pointer" }}>
          <span style={{ display: "flex", color: "#6b6966" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0, background: "#f7a57a" }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>cryptic-cube-8</span>
        </div>
        <div className="hv3" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 16px", fontSize: "13px", cursor: "pointer" }}>
          <span style={{ display: "flex", color: "#6b6966" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0, background: "#6aa8f7" }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>striking-moon-7</span>
        </div>
        <div className="hv3" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 16px", fontSize: "13px", cursor: "pointer" }}>
          <span style={{ display: "flex", color: "#6b6966" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0, background: "#7c3aed" }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>purple-rain-3</span>
        </div>
        <div className="hv3" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 16px", fontSize: "13px", cursor: "pointer" }}>
          <span style={{ display: "flex", color: "#6b6966" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0, background: "#14b8a6" }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>sea-monster-11</span>
        </div>
        <div className="hv3" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 16px", fontSize: "13px", cursor: "pointer" }}>
          <span style={{ display: "flex", color: "#6b6966" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0, background: "#e879f9" }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>redundant-rain-3</span>
        </div>
      </div>
    </div>
  );
}
