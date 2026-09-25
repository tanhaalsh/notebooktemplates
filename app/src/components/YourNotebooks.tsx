import { Button } from '../ds/Button';
import type { ViewModel } from '../state/viewModel';

export function YourNotebooks({ v }: { v: ViewModel }) {
  return (
    <div data-screen-label="Notebooks · Your notebooks" style={{ padding: "24px 24px 40px", display: "flex", flexDirection: "column", gap: "14px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
        <span style={{ fontSize: "16px", fontWeight: 700 }}>Your notebooks</span>
        <Button size={"sm"} iconLeft={v.plusIcon} onClick={v.newFromTemplate}>Create notebook</Button>
      </div>
      <div style={{ border: "1px solid #e6e4e0", borderRadius: "8px", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", borderBottom: "1px solid #e6e4e0" }}>
          <div style={{ width: "360px", maxWidth: "100%", display: "flex", alignItems: "center", gap: "8px", border: "1px solid #d6d3cf", borderRadius: "6px", padding: "0 10px", height: "30px" }}>
            <span style={{ display: "flex", color: "#8a8784" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </span>
            <input value={v.nbq} onChange={v.onNbq} placeholder="Search" style={{ border: "none", outline: "none", fontFamily: "var(--font-brand)", fontSize: "13px", width: "100%", background: "transparent", color: "#1c1b1a" }} />
          </div>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", padding: "0 10px", height: "30px", borderRadius: "6px", background: "#f0eeeb", fontSize: "12.5px", color: "#3d3b39" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4 6h16M7 12h10M10 18h4" />
            </svg>
            Filters
          </span>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "10px 12px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "#4a4845", borderBottom: "1px solid #e6e4e0" }}>NOTEBOOK</th>
              <th style={{ textAlign: "left", padding: "10px 12px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "#4a4845", borderBottom: "1px solid #e6e4e0" }}>AUTHOR</th>
              <th style={{ textAlign: "left", padding: "10px 12px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "#4a4845", borderBottom: "1px solid #e6e4e0" }}>PROJECT</th>
              <th style={{ textAlign: "left", padding: "10px 12px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "#4a4845", borderBottom: "1px solid #e6e4e0" }}>LAST UPDATED</th>
              <th style={{ textAlign: "left", padding: "10px 12px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "#4a4845", borderBottom: "1px solid #e6e4e0" }}>CREATED</th>
              <th style={{ width: "36px", borderBottom: "1px solid #e6e4e0" }} />
            </tr>
          </thead>
          <tbody>
            {v.savedRows.map((nb, i1) => (
              <tr key={i1} className="hv3" onClick={nb.open} style={{ cursor: "pointer", background: nb.bg }}>
                <td style={{ padding: "11px 12px", borderBottom: "1px solid #eeece9", maxWidth: "320px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{nb.title}</span>
                    {nb.isNew && <span style={{ fontSize: "10px", fontWeight: 700, color: "#fff", background: "var(--cw-blue-500)", borderRadius: "999px", padding: "1px 7px" }}>new</span>}
                  </span>
                </td>
                <td style={{ padding: "11px 12px", borderBottom: "1px solid #eeece9" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#e6f6f8", color: "#11849a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21a8 8 0 0 1 16 0" />
                      </svg>
                    </span>
                    {nb.author}
                  </span>
                </td>
                <td style={{ padding: "11px 12px", borderBottom: "1px solid #eeece9", color: "#3d3b39" }}>{nb.projectLabel}</td>
                <td style={{ padding: "11px 12px", borderBottom: "1px solid #eeece9", color: "#4a4845" }}>{nb.savedAt}</td>
                <td style={{ padding: "11px 12px", borderBottom: "1px solid #eeece9", color: "#4a4845" }}>{nb.created}</td>
                <td style={{ padding: "11px 12px", borderBottom: "1px solid #eeece9", color: "#8a8784", textAlign: "center" }}>···</td>
              </tr>
            ))}
          </tbody>
        </table>
        {v.noSaved && <div style={{ padding: "32px", textAlign: "center", fontSize: "13px", color: "#6b6966" }}>No notebooks match “{v.nbq}”.</div>}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "14px", padding: "10px 14px", fontSize: "12px", color: "#6b6966" }}>
          {v.pageLabel}
          <span style={{ color: "#c4c1bc" }}>‹</span>
          <span style={{ color: "#c4c1bc" }}>›</span>
        </div>
      </div>
    </div>
  );
}
