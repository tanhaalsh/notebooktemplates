import type { ViewModel } from '../state/viewModel';

export function WorkspaceRail({ v }: { v: ViewModel }) {
  return (
    <div style={{ width: "48px", flexShrink: 0, borderRight: "1px solid #e6e4e0", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", padding: "14px 0" }}>
      <span className="hv2" title="Overview" style={{ display: "flex", padding: "7px", borderRadius: "6px", cursor: "pointer", color: "#8a8784", background: "transparent" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5M12 8h.01" />
        </svg>
      </span>
      <span className="hv2" title="Workspace" onClick={v.rail.ws.go} style={{ display: "flex", padding: "7px", borderRadius: "6px", cursor: "pointer", color: v.rail.ws.fg, background: v.rail.ws.bg }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M7 20h10M9 9h2M13 9h2M9 12h6" />
        </svg>
      </span>
      <span className="hv2" title="Notebooks" onClick={v.rail.nb.go} style={{ display: "flex", padding: "7px", borderRadius: "6px", cursor: "pointer", color: v.rail.nb.fg, background: v.rail.nb.bg }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 8h6M9 12h6M9 16h4" />
        </svg>
      </span>
      <span className="hv2" title="Settings" style={{ display: "flex", padding: "7px", borderRadius: "6px", cursor: "pointer", color: "#8a8784", background: "transparent" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
        </svg>
      </span>
      <span className="hv2" title="Runs" style={{ display: "flex", padding: "7px", borderRadius: "6px", cursor: "pointer", color: "#8a8784", background: "transparent" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" />
        </svg>
      </span>
      <span className="hv2" title="Reports" style={{ display: "flex", padding: "7px", borderRadius: "6px", cursor: "pointer", color: "#8a8784", background: "transparent" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h4" />
        </svg>
      </span>
      <span className="hv2" title="Artifacts" style={{ display: "flex", padding: "7px", borderRadius: "6px", cursor: "pointer", color: "#8a8784", background: "transparent" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l9 5-9 5-9-5z" />
          <path d="M3 13l9 5 9-5" />
        </svg>
      </span>
      <span className="hv2" title="Code" style={{ display: "flex", padding: "7px", borderRadius: "6px", cursor: "pointer", color: "#8a8784", background: "transparent" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
        </svg>
      </span>
      <span style={{ flex: 1 }} />
      <span title="Comments" style={{ display: "flex", padding: "7px", color: "#8a8784" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M12 8v6M9 11h6" />
        </svg>
      </span>
      <span title="Collapse" style={{ display: "flex", padding: "7px", color: "#8a8784" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h12M12 8l4 4-4 4M20 5v14" />
        </svg>
      </span>
    </div>
  );
}
