import { Button } from '../ds/Button';
import { ViewerPreview } from './ViewerPreview';
import type { ViewModel } from '../state/viewModel';

export function NotebookEditor({ v }: { v: ViewModel }) {
  return (
    <div data-screen-label="Notebook" style={{ position: "absolute", top: "56px", bottom: "0", left: "0", right: "0", background: "#fff", zIndex: 30, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0 18px", height: "52px", borderBottom: "1px solid #e6e4e0", flexShrink: 0, whiteSpace: "nowrap" }}>
        <span className="hv1" onClick={v.goNotebooks} title="Back to your notebooks" style={{ display: "flex", padding: "6px", border: "1px solid #e6e4e0", borderRadius: "6px", color: "#4a4845", cursor: "pointer" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
        </span>
        <span className="hv2" onClick={v.goNotebooks} style={{ fontSize: "13px", color: "#4a4845", cursor: "pointer" }}>Notebooks</span>
        <span style={{ color: "#a8a5a1" }}>/</span>
        <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: "12.5px", color: "#4a4845" }}>{v.ed.project}</span>
        <span style={{ color: "#a8a5a1" }}>/</span>
        <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: "13px", fontWeight: 600 }}>{v.ed.name}</span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#4a4845", background: "#f0eeeb", borderRadius: "999px", padding: "3px 10px 3px 4px" }}>
          <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#d9c7a8", color: "#5c4a2c", fontSize: "8px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>JD</span>
          <span>{v.ed.author}</span>{" · owner"}
        </span>
        {v.ed.isLinked && <span style={{ fontSize: "12px", color: "var(--cw-blue-700)", background: "var(--cw-blue-50)", borderRadius: "999px", padding: "3px 10px" }}>{"Linked to "}{v.ed.linkedLabel}</span>}
        <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#4a4845" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: v.statusDot }} />
          {v.statusLabel}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "#8a8784" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 18a4 4 0 0 1-.5-8 6 6 0 0 1 11.6-1.5A4.5 4.5 0 0 1 18 18z" />
          </svg>
          {v.saveLabel}
        </span>
        <span style={{ flex: 1 }} />
        <Button size={"sm"} iconLeft={v.playIcon} onClick={v.runNb} disabled={v.running}>{v.runLabel}</Button>
      </div>
      {v.hasBanner && (
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 18px", background: v.bannerBg, borderBottom: `1px solid ${v.bannerBorder}`, fontSize: "12.5px", color: v.bannerFg }}>
          <span style={{ flex: 1, lineHeight: 1.45 }}>{v.bannerText}</span>
          {v.bannerHasAction && (
            <span onClick={v.viewInWs} style={{ display: "flex", alignItems: "center", gap: "4px", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
              View in Workspace
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          )}
        </div>
      )}
      <div style={{ flex: 1, minHeight: "0", overflowY: "auto", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "28px 32px 60px", display: "flex", flexDirection: "column", gap: "14px", fontFamily: "'PT Sans',system-ui,sans-serif", color: "#18181b" }}>
          {v.cells.map((c, i1) => (
            <div key={i1} style={{ border: `1px solid ${c.border}`, borderRadius: "8px", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.04)", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 12px 10px 14px" }}>
                <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: "11px", color: "#a1a1aa", width: "14px", flexShrink: 0, paddingTop: "2px" }}>{c.n}</span>
                <div style={{ flex: 1, minWidth: "0", overflowX: "auto" }}>
                  <div style={{ display: "flex", flexDirection: "column", fontFamily: "'Fira Mono',monospace", fontSize: "12.5px", lineHeight: "19px" }}>
                    {c.lines.map((ln, i2) => (
                      <div key={i2} style={{ whiteSpace: "pre", height: "19px" }}>
                        {ln.toks.map((tk, i3) => (
                          <span key={i3} style={{ whiteSpace: "pre", color: tk.c, fontStyle: tk.fs }}>{tk.t}</span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {c.hasOut && (
                <div style={{ borderTop: "1px solid #e4e4e7", padding: "14px 16px", opacity: c.outOpacity, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {c.isMd && (
                    <>
                      <h1 style={{ fontFamily: "'Lora',Georgia,serif", fontWeight: 500, fontSize: "28px", lineHeight: 1.25, margin: "0" }}>{v.sel.title}</h1>
                      <p style={{ fontSize: "15px", lineHeight: 1.6, margin: "0", maxWidth: "66ch" }}>{v.sel.desc}</p>
                      <p style={{ fontSize: "13.5px", lineHeight: 1.55, margin: "0", maxWidth: "70ch", color: "#52525b" }}>This copy belongs to you. Pick where your data comes from in cell 4, then choose the artifact, run, file or URL in cell 5. Changes here don’t affect the original template, and template updates won’t overwrite this copy.</p>
                    </>
                  )}
                  {c.isCtx && <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: "12px", color: "#3f3f46" }}>{v.ctxLine}</span>}
                  {c.isSrc && (
                    <>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px" }}>
                        <span style={{ fontSize: "14px" }}>Data source</span>
                        <div style={{ display: "flex", border: "1px solid #d4d4d8", borderRadius: "6px", overflow: "hidden" }}>
                          {v.srcOpts.map((so, i2) => (
                            <span key={i2} onClick={so.pick} style={{ padding: "5px 12px", fontSize: "13px", cursor: "pointer", background: so.bg, color: so.fg, borderLeft: so.bl, whiteSpace: "nowrap" }}>{so.label}</span>
                          ))}
                        </div>
                      </div>
                      <span style={{ fontSize: "12.5px", lineHeight: 1.5, color: "#71717a" }}>{v.srcHint}</span>
                    </>
                  )}
                  {c.isCtrl && (
                    <>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "22px" }}>
                        {v.srcIsList && (
                          <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
                            {v.refLabel}{" "}
                            <select value={v.ed.ref} onChange={v.onRef} style={{ fontFamily: "'Fira Mono',monospace", fontSize: "12.5px", padding: "4px 8px", border: "1px solid #d4d4d8", borderRadius: "4px", background: "#fff", color: "#18181b" }}>
                              {v.refOpts.map((op, i2) => (
                                <option key={i2} value={op}>{op}</option>
                              ))}
                            </select>
                          </label>
                        )}
                        {v.srcIsPath && (
                          <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", flex: "1 1 360px", minWidth: "0" }}>
                            {"Path or URL "}
                            <input type="text" value={v.ed.ref} onChange={v.onRef} placeholder="s3://bucket/path/file" style={{ flex: 1, minWidth: "0", fontFamily: "'Fira Mono',monospace", fontSize: "12.5px", padding: "5px 8px", border: "1px solid #d4d4d8", borderRadius: "4px", background: "#fff", color: "#18181b" }} />
                          </label>
                        )}
                        {v.hasUpload && (
                          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 10px", border: "1px solid #d4d4d8", borderRadius: "6px", fontSize: "13px" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z" />
                              <path d="M14 3v5h5" />
                            </svg>
                            <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: "12.5px" }}>{v.ed.ref}</span>
                            <span style={{ color: "#71717a", fontSize: "12px" }}>{v.uploadSize}</span>
                            <span onClick={v.clearUpload} style={{ color: "#0284c7", fontSize: "12.5px", cursor: "pointer" }}>Remove</span>
                          </div>
                        )}
                        {v.noUpload && (
                          <div onClick={v.doUpload} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 18px", border: "1px dashed #a1a1aa", borderRadius: "6px", fontSize: "13px", color: "#52525b", cursor: "pointer", flex: "1 1 360px" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 16V4M7 9l5-5 5 5" />
                              <path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
                            </svg>
                            <span>
                              {"Drop a "}
                              <span style={{ fontFamily: "'Fira Mono',monospace" }}>{v.uploadExt}</span>
                              {" file here, or "}
                              <span style={{ color: "#0284c7" }}>choose a file</span>
                            </span>
                          </div>
                        )}
                        {v.pIsSlider && (
                          <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
                            {v.param.label}{" "}
                            <input type="range" min={v.param.min} max={v.param.max} step="1" value={v.ed.pValue} onChange={v.onParam} style={{ width: "180px", accentColor: "#0ea5e9" }} />
                            <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: "12.5px", minWidth: "30px" }}>{v.ed.pValue}</span>
                          </label>
                        )}
                        {v.pIsSelect && (
                          <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
                            {v.param.label}{" "}
                            <select value={v.ed.pValue} onChange={v.onParam} style={{ fontFamily: "'PT Sans',sans-serif", fontSize: "13px", padding: "4px 8px", border: "1px solid #d4d4d8", borderRadius: "4px", background: "#fff", color: "#18181b" }}>
                              {v.param.options.map((op, i2) => (
                                <option key={i2} value={op}>{op}</option>
                              ))}
                            </select>
                          </label>
                        )}
                      </div>
                      {v.isBench && (
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "22px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
                            {"Benchmarks "}
                            {v.benchOpts.map((bo, i2) => (
                              <label key={i2} onClick={bo.toggle} style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "13px", cursor: "pointer" }}>
                                <span style={{ width: "14px", height: "14px", borderRadius: "3px", border: `1.5px solid ${bo.ring}`, background: bo.fill, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "10px", lineHeight: 1 }}>{bo.check}</span>
                                {bo.name}
                              </label>
                            ))}
                          </div>
                          <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
                            {"Chart "}
                            <select value={v.ed.chart} onChange={v.onChart} style={{ fontFamily: "'PT Sans',sans-serif", fontSize: "13px", padding: "4px 8px", border: "1px solid #d4d4d8", borderRadius: "4px", background: "#fff", color: "#18181b" }}>
                              {v.chartOpts.map((co, i2) => (
                                <option key={i2} value={co}>{co}</option>
                              ))}
                            </select>
                          </label>
                        </div>
                      )}
                    </>
                  )}
                  {c.isLoad && (
                    <>
                      {v.loadOk && <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: "12px", color: "#166534" }}>{v.loadLine}</span>}
                      {v.loadMissing && (
                        <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "8px", background: "#fdf6e6", border: "1px solid #f3dca8", color: "#7a4e06" }}>
                          <span style={{ display: "flex", marginTop: "2px" }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 3l9 16H3z" />
                              <path d="M12 10v4M12 17h.01" />
                            </svg>
                          </span>
                          <span style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "13.5px", lineHeight: 1.5 }}>
                            <b>Expected data not found</b>
                            <span>{v.missingText}</span>
                          </span>
                        </div>
                      )}
                    </>
                  )}
                  {c.isView && (
                    <>
                      {v.viewOk && (
                        <div style={{ border: "1px solid #e4e4e7", borderRadius: "6px", overflow: "hidden" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", padding: "6px 10px", borderBottom: "1px solid #e4e4e7", fontSize: "12px", background: "#fafafa" }}>
                            <span style={{ fontWeight: 700 }}>{v.sel.viewer}</span>
                            <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: "11px", color: "#71717a" }}>{v.ranCaption}</span>
                          </div>
                          <div style={{ aspectRatio: "16/9", background: "#fff" }}>
                            <ViewerPreview kind={v.sel.kind} />
                          </div>
                        </div>
                      )}
                      {v.viewEmpty && <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "150px", border: "1px dashed #d4d4d8", borderRadius: "6px", fontSize: "13px", color: "#71717a", textAlign: "center", padding: "0 20px" }}>{v.viewPlaceholder}</div>}
                    </>
                  )}
                  {c.isStale && <span style={{ fontSize: "11px", color: "#a16207" }}>Inputs changed since the last run. Run again to update the linked panel.</span>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
