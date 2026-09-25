import type { ViewModel } from '../state/viewModel';

export function Toast({ v }: { v: ViewModel }) {
  return (
    <div style={{ position: "absolute", left: "50%", bottom: "24px", transform: "translateX(-50%)", background: "#1c1b1a", color: "#fff", fontSize: "12px", fontWeight: 600, padding: "9px 14px", borderRadius: "6px", zIndex: 60, display: "flex", alignItems: "center", gap: "14px" }}>
      {v.toast}
      {v.hasToastAction && <span onClick={v.toastGo} style={{ color: "#9DC7FE", cursor: "pointer" }}>{v.toastActionLabel}</span>}
    </div>
  );
}
