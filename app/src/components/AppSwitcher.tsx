import type { ViewModel } from '../state/viewModel';

export function AppSwitcher({ v }: { v: ViewModel }) {
  return (
    <div onClick={v.stop} data-screen-label="App switcher" style={{ position: "absolute", top: "50px", left: "12px", width: "300px", maxHeight: "880px", overflowY: "auto", background: "#fff", border: "1px solid #e6e4e0", borderRadius: "8px", boxShadow: "0 8px 24px rgba(28,27,26,0.14)", zIndex: 36, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "12px 14px", borderBottom: "1px solid #e6e4e0", fontSize: "13px", fontWeight: 600 }}>CoreWeave</div>
      {v.appSections.map((sec, i1) => (
        <div key={i1} style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "10px 8px", borderBottom: "1px solid #e6e4e0" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.05em", color: "#6b6966", padding: "2px 8px 6px" }}>{sec.label}</span>
          {sec.items.map((it, i2) => (
            <div key={i2} className="hv1" onClick={it.go} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "6px 8px", borderRadius: "6px", cursor: "pointer", background: it.bg }}>
              <span style={{ display: "flex", color: it.fg, paddingTop: "1px" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d={it.icon} />
                </svg>
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: "0" }}>
                <span style={{ fontSize: "13px", color: it.fg }}>{it.name}</span>
                <span style={{ fontSize: "11px", color: "#6b6966" }}>{it.desc}</span>
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
