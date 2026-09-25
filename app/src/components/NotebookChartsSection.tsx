import { ViewerPreview } from './ViewerPreview';
import type { ViewModel } from '../state/viewModel';

export function NotebookChartsSection({ v }: { v: ViewModel }) {
  return (
    <div ref={v.marimoRef} data-screen-label="Notebook charts section" style={{ background: "#fff", borderBottom: "1px solid #e6e4e0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", background: "#fff", borderBottom: "1px solid #e6e4e0", cursor: "pointer", userSelect: "none" }} onClick={v.sec.marimo.toggle}>
        <span style={{ display: "flex", color: "#6b6966", transform: `rotate(${v.sec.marimo.rot})`, transition: "transform 160ms" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
        <span style={{ fontSize: "13px", fontWeight: 700 }}>Notebook charts</span>
        <span style={{ fontSize: "10px", color: "#4a4845", background: "#f0eeeb", border: "1px solid #e6e4e0", borderRadius: "3px", padding: "0 5px" }}>{v.marimoCount}</span>
      </div>
      {v.sec.marimo.open && (
        <div style={{ padding: "12px 16px 16px", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "10px" }}>
          {v.panels.map((ap, i1) => (
            <div key={i1} data-screen-label="Notebook panel tile" style={{ border: "1px solid #e6e4e0", borderRadius: "6px", background: "#fff", display: "flex", flexDirection: "column", minWidth: "0", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", borderBottom: "1px solid #e6e4e0" }}>
                <span style={{ fontSize: "13px", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{ap.name}</span>
                <span style={{ fontSize: "11px", color: ap.statusColor, whiteSpace: "nowrap" }}>{ap.statusText}</span>
                <span style={{ flex: 1 }} />
                <span className="hv4" onClick={ap.view} title="Open the source notebook in a new tab" style={{ display: "flex", alignItems: "center", gap: "4px", padding: "3px 6px", borderRadius: "4px", cursor: "pointer", fontSize: "12px", fontWeight: 600, color: "var(--cw-blue-700)", whiteSpace: "nowrap" }}>
                  View notebook
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 4h6v6M20 4l-8 8M18 14v6H4V6h6" />
                  </svg>
                </span>
              </div>
              <div style={{ aspectRatio: "16/9", background: "#fff", padding: "4px", position: "relative" }}>
                {ap.loading && (
                  <div style={{ position: "absolute", inset: "10px", borderRadius: "6px", background: "#f7f6f4", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <div style={{ width: "60%", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ height: "8px", borderRadius: "4px", background: "#ebe9e5", width: "70%" }} />
                      <span style={{ height: "8px", borderRadius: "4px", background: "#ebe9e5", width: "100%" }} />
                      <span style={{ height: "8px", borderRadius: "4px", background: "#ebe9e5", width: "85%" }} />
                    </div>
                    <span style={{ fontSize: "12px", color: "#6b6966" }}>
                      {"Loading saved output from "}
                      <span style={{ fontFamily: "'Fira Mono',monospace" }}>{ap.nb}</span>
                      …
                    </span>
                  </div>
                )}
                {ap.showViz && <ViewerPreview kind={ap.kind} />}
                {ap.showEmpty && (
                  <div style={{ position: "absolute", inset: "10px", border: "1px dashed #d6d3cf", borderRadius: "6px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", padding: "20px", textAlign: "center" }}>
                    <span style={{ display: "flex", color: "#8a8784" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z" />
                        <path d="M5 17a3 3 0 0 1 3-3h11" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: 700 }}>{ap.emptyTitle}</span>
                    <span style={{ fontSize: "12px", lineHeight: 1.5, color: "#4a4845", maxWidth: "40ch" }}>{ap.emptyText}</span>
                    <span onClick={ap.view} style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: 600, color: "var(--cw-blue-700)", cursor: "pointer" }}>
                      View notebook
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 4h6v6M20 4l-8 8M18 14v6H4V6h6" />
                      </svg>
                    </span>
                  </div>
                )}
              </div>
              {ap.showFailNote && <div style={{ padding: "7px 12px", borderTop: "1px solid #f3dca8", background: "#fdf6e6", fontSize: "11.5px", lineHeight: 1.45, color: "#7a4e06" }}>{"Last run failed: "}{ap.failMsg}{" Showing the last successful output."}</div>}
              <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "7px 12px", borderTop: "1px solid #e6e4e0", fontSize: "11px", color: "#6b6966" }}>
                <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {"Source notebook "}
                  <span style={{ fontFamily: "'Fira Mono',monospace", color: "#3d3b39" }}>{ap.nb}</span>
                </span>
                <span style={{ whiteSpace: "nowrap", fontFamily: "'Fira Mono',monospace" }}>{ap.caption}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
