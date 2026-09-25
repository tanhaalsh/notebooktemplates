import type { ViewModel } from '../state/viewModel';
import { GettingStarted } from './GettingStarted';
import { YourNotebooks } from './YourNotebooks';

export function NotebooksPage({ v }: { v: ViewModel }) {
  return (
    <div data-screen-label="Notebooks" style={{ flex: 1, minWidth: "0", display: "flex", background: "#fff" }}>
      <div style={{ width: "220px", flexShrink: 0, borderRight: "1px solid #e6e4e0", display: "flex", flexDirection: "column", gap: "4px", padding: "12px 10px" }}>
        <div className="hv1" onClick={v.nbNav.start.go} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "7px 10px", borderRadius: "6px", cursor: "pointer", fontSize: "13px", color: v.nbNav.start.fg, background: v.nbNav.start.bg }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 2" />
          </svg>
          Getting started
        </div>
        <div className="hv1" onClick={v.nbNav.overview.go} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "7px 10px", borderRadius: "6px", cursor: "pointer", fontSize: "13px", color: v.nbNav.overview.fg, background: v.nbNav.overview.bg }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 11l8-7 8 7v9H4z" />
            <path d="M10 20v-5h4v5" />
          </svg>
          Overview
        </div>
        <span style={{ flex: 1 }} />
        <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "10px", borderTop: "1px solid #e6e4e0", color: "#8a8784" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 12H8M12 8l-4 4 4 4M4 5v14" />
          </svg>
        </div>
      </div>
      <div style={{ flex: 1, minWidth: "0", overflowY: "auto" }}>{v.nbIsStart && <GettingStarted v={v} />}{v.nbIsOverview && <YourNotebooks v={v} />}</div>
    </div>
  );
}
