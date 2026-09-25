import { Button } from '../ds/Button';
import type { ViewModel } from '../state/viewModel';

export function GettingStarted({ v }: { v: ViewModel }) {
  return (
    <div data-screen-label="Notebooks · Getting started" style={{ maxWidth: "920px", margin: "0 auto", padding: "72px 32px 48px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", textAlign: "center" }}>
      <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#f0eeeb", color: "#4a4845", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h4" />
        </svg>
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
        <span style={{ fontSize: "20px", fontWeight: 700 }}>Get started with notebooks</span>
        <span style={{ fontSize: "14px", lineHeight: 1.55, color: "#4a4845", maxWidth: "62ch", textWrap: "pretty" }}>Welcome to notebooks. Create, find, and manage live Python notebooks for seamless support of exploratory work and data apps.</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "12px", width: "100%", textAlign: "left" }}>
        <div style={{ border: "1px solid #d6d3cf", borderRadius: "8px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px", boxShadow: "0 2px 8px rgba(28,27,26,0.08)" }}>
          <span style={{ fontSize: "13px", fontWeight: 700, lineHeight: 1.4 }}>Fine-tune an LLM with W&B, Agent Pulse, Training and Inference</span>
          <span style={{ fontSize: "12px", lineHeight: 1.5, color: "#6b6966" }}>Fine-tune, track, evaluate, and run inference on an LLM.</span>
          <div style={{ display: "flex", paddingTop: "6px" }}>
            <Button size={"sm"} onClick={v.tutorialToast}>View</Button>
          </div>
        </div>
        <div className="hv5" onClick={v.tutorialToast} style={{ border: "1px solid #e6e4e0", borderRadius: "8px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px", cursor: "pointer" }}>
          <span style={{ fontSize: "13px", fontWeight: 700, lineHeight: 1.4 }}>Monitor an agent with Agent Pulse</span>
          <span style={{ fontSize: "12px", lineHeight: 1.5, color: "#6b6966" }}>Instrument an agent and explore its behavior in Agent Pulse.</span>
        </div>
        <div className="hv6" onClick={v.browseTemplates} style={{ border: "1px solid #e6e4e0", borderRadius: "8px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px", cursor: "pointer" }}>
          <span style={{ fontSize: "13px", fontWeight: 700, lineHeight: 1.4 }}>Start from a template</span>
          <span style={{ fontSize: "12px", lineHeight: 1.5, color: "#6b6966" }}>Preview a ready-made notebook, then copy it and run it with starter data.</span>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "8px" }}>
        <Button variant={"support"} appearance={"outline"} size={"sm"} onClick={v.tutorialToast}>Documentation</Button>
        <Button size={"sm"} iconLeft={v.plusIcon} onClick={v.createScratch}>Create from scratch</Button>
      </div>
    </div>
  );
}
