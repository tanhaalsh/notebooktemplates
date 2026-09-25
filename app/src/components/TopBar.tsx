import coreweaveMark from '../assets/coreweave-mark-blue.png';
import type { ViewModel } from '../state/viewModel';

export function TopBar({ v }: { v: ViewModel }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "0 16px", height: "56px", borderBottom: "1px solid #e6e4e0", flexShrink: 0 }}>
      <span className="hv1" onClick={v.openApps} title="Apps" style={{ display: "flex", padding: "6px", border: `1px solid ${v.appsBorder}`, borderRadius: "6px", color: "#6b6966", cursor: "pointer", background: v.appsBg }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="5" cy="5" r="1.7" />
          <circle cx="12" cy="5" r="1.7" />
          <circle cx="19" cy="5" r="1.7" />
          <circle cx="5" cy="12" r="1.7" />
          <circle cx="12" cy="12" r="1.7" />
          <circle cx="19" cy="12" r="1.7" />
          <circle cx="5" cy="19" r="1.7" />
          <circle cx="12" cy="19" r="1.7" />
          <circle cx="19" cy="19" r="1.7" />
        </svg>
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img src={coreweaveMark} alt="CoreWeave" style={{ height: "20px", width: "auto", display: "block" }} />
        <span style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.01em", color: "#1c1b1a" }}>Forge</span>
      </div>
      {v.isWbProduct && (
        <>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "#3d3b39", marginLeft: "8px" }}>Weights & Biases</span>
          <span style={{ display: "flex", alignItems: "center", gap: "18px", border: "1px solid #d6d3cf", borderRadius: "6px", padding: "0 10px", height: "32px", fontSize: "13px", color: "#3d3b39" }}>
            asteroid-detection_Q1-2025
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </>
      )}
      {v.isNbProduct && <span style={{ fontSize: "13px", fontWeight: 700, color: "#3d3b39", marginLeft: "8px" }}>Notebooks</span>}
      <span style={{ flex: 1 }} />
      <span style={{ display: "flex", color: "#4a4845" }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      </span>
      <span style={{ display: "flex", color: "#4a4845" }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11v2l12 5V6L3 11zM15 9a3 3 0 0 1 0 6M6 13l1 5h3" />
        </svg>
      </span>
      <span style={{ display: "flex", color: "#4a4845" }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .9-1 1.7M12 17h.01" />
        </svg>
      </span>
      <span style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px solid #d6d3cf", borderRadius: "6px", padding: "0 10px", height: "32px", fontSize: "13px", color: "#3d3b39" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
        </svg>
        Ask ARIA
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ textAlign: "right", lineHeight: 1.2 }}>
          <div style={{ fontSize: "13px", fontWeight: 600 }}>Jane Doe</div>
          <div style={{ fontSize: "11px", color: "#8a8784" }}>Org name</div>
        </div>
        <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#d9c7a8", color: "#5c4a2c", fontSize: "11px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>JD</span>
      </div>
    </div>
  );
}
