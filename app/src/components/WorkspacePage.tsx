import { Button } from '../ds/Button';
import type { ViewModel } from '../state/viewModel';
import { RunsSidebar } from './RunsSidebar';
import { WorkspaceCharts } from './WorkspaceCharts';
import { NotebookChartsSection } from './NotebookChartsSection';

export function WorkspacePage({ v }: { v: ViewModel }) {
  return (
    <div data-screen-label="Workspace" style={{ flex: 1, minWidth: "0", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "0 16px", height: "56px", borderBottom: "1px solid #e6e4e0", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap" }}>
          <span style={{ fontSize: "18px", fontWeight: 700 }}>Buzz Aldrin’s workspace</span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#4a4845", background: "#f0eeeb", borderRadius: "999px", padding: "3px 10px 3px 4px" }}>
            <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#b9ad99" }} />
            Personal workspace
          </span>
          <span style={{ display: "flex", color: "#3aa46a" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
            </svg>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#4a4845", whiteSpace: "nowrap" }}>
          {"Auto-saved just now "}
          <span style={{ display: "flex", padding: "6px", border: "1px solid #e6e4e0", borderRadius: "6px", color: "#4a4845" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 14L4 9l5-5M4 9h11a5 5 0 0 1 0 10h-3" />
            </svg>
          </span>
          <span style={{ display: "flex", padding: "6px", border: "1px solid #e6e4e0", borderRadius: "6px", color: "#4a4845" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 14l5-5-5-5M20 9H9a5 5 0 0 0 0 10h3" />
            </svg>
          </span>
          <span style={{ display: "flex", padding: "6px", border: "1px solid #e6e4e0", borderRadius: "6px", color: "#4a4845" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="5" cy="12" r="1" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
            </svg>
          </span>
        </div>
      </div>
      <div style={{ flex: 1, minHeight: "0", display: "flex" }}>
        <RunsSidebar />
        <div style={{ flex: 1, minWidth: "0", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", borderBottom: "1px solid #e6e4e0", flexShrink: 0 }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "8px", border: "1px solid #d6d3cf", borderRadius: "6px", padding: "0 10px", height: "32px", color: "#8a8784", fontSize: "13px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              Search panels and sections
            </div>
            <span style={{ display: "flex", padding: "8px", border: "1px solid #e6e4e0", borderRadius: "6px", color: "#4a4845" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="5" cy="12" r="1" />
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
              </svg>
            </span>
            <Button variant={"support"} appearance={"outline"} size={"sm"}>Settings</Button>
            <div style={{ position: "relative" }}>
              <Button size={"sm"} iconLeft={v.plusIcon} onClick={v.openHdrMenu}>Add panels</Button>
            </div>
          </div>
          <div ref={v.wsScrollRef} style={{ flex: 1, minHeight: "0", overflowY: "auto", background: "#fff" }}>
            <div style={{ background: "#fff", borderBottom: "1px solid #e6e4e0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", background: "#fff", borderBottom: "1px solid #e6e4e0", cursor: "pointer", userSelect: "none" }} onClick={v.sec.charts.toggle}>
                <span style={{ display: "flex", color: "#6b6966", transform: `rotate(${v.sec.charts.rot})`, transition: "transform 160ms" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
                <span style={{ fontSize: "13px", fontWeight: 700 }}>Charts</span>
                <span style={{ fontSize: "10px", color: "#4a4845", background: "#f0eeeb", border: "1px solid #e6e4e0", borderRadius: "3px", padding: "0 5px" }}>{v.panelCount}</span>
              </div>
              {v.sec.charts.open && <WorkspaceCharts />}
            </div>
            {v.hasPanels && <NotebookChartsSection v={v} />}
          </div>
        </div>
      </div>
    </div>
  );
}
