import { Button } from '../ds/Button';
import { ViewerPreview } from './ViewerPreview';
import type { ViewModel } from '../state/viewModel';

export function TemplatesDrawer({ v }: { v: ViewModel }) {
  return (
    <div onClick={v.closeModal} style={{ position: "absolute", inset: "0", background: "rgba(28,27,26,0.18)", display: "flex", alignItems: "stretch", justifyContent: "flex-end", zIndex: 40 }}>
      <div data-screen-label="Templates drawer" onClick={v.stop} style={{ width: "760px", maxWidth: "100%", height: "100%", background: "#fff", borderLeft: "1px solid #e6e4e0", boxShadow: "-8px 0 24px rgba(28,27,26,0.08)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0 18px", height: "52px", borderBottom: "1px solid #e6e4e0", flexShrink: 0 }}>
          {v.canBack && (
            <span className="hv1" onClick={v.mBack} title="Back" style={{ display: "flex", padding: "4px", borderRadius: "4px", cursor: "pointer", color: "#4a4845" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </span>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", whiteSpace: "nowrap" }}>
            {v.crumbs.map((cr, i1) => (
              <span key={i1} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "#a8a5a1", display: cr.sepDisplay }}>/</span>
                <span onClick={cr.go} style={{ fontWeight: cr.fw, color: cr.fg, cursor: cr.cursor }}>{cr.label}</span>
              </span>
            ))}
          </div>
          <span style={{ flex: 1 }} />
          <span className="hv1" onClick={v.closeModal} title="Close" style={{ display: "flex", padding: "4px", borderRadius: "4px", cursor: "pointer", color: "#4a4845" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </span>
        </div>
        {v.stepExisting && (
          <div style={{ flex: 1, minHeight: "0", overflowY: "auto", padding: "20px 24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontSize: "15px", fontWeight: 700 }}>Existing notebooks</span>
              <div style={{ border: "1px solid #e6e4e0", borderRadius: "8px", overflow: "hidden" }}>
                {v.savedRows.map((nb, i1) => (
                  <div key={i1} className="hv3" onClick={nb.link} style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr) minmax(0,1fr) 110px", gap: "12px", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid #e6e4e0", cursor: "pointer", fontSize: "13px" }}>
                    <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: "12.5px", fontWeight: 500 }}>{nb.name}</span>
                    <span>{nb.tplTitle}</span>
                    <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: "12px", color: "#6b6966" }}>{nb.project}</span>
                    <span style={{ color: "#6b6966", textAlign: "right" }}>{nb.savedAt}</span>
                  </div>
                ))}
              </div>
              <span style={{ fontSize: "12px", color: "#6b6966" }}>Selecting a notebook adds its latest output as a panel.</span>
            </div>
          </div>
        )}
        {v.stepGallery && (
          <div style={{ flex: 1, minHeight: "0", overflowY: "auto", padding: "20px 24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                  <span style={{ fontSize: "18px", fontWeight: 700 }}>{v.galleryTitle}</span>
                  <span style={{ fontSize: "13px", lineHeight: 1.5, color: "#4a4845" }}>{v.gallerySub}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", border: "1px solid #d6d3cf", borderRadius: "6px", padding: "0 10px", height: "30px", width: "220px", flexShrink: 0 }}>
                  <span style={{ display: "flex", color: "#8a8784" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7" />
                      <path d="M21 21l-4.3-4.3" />
                    </svg>
                  </span>
                  <input value={v.q} onChange={v.onQ} placeholder="Search by name or file format" style={{ border: "none", outline: "none", fontFamily: "var(--font-brand)", fontSize: "12px", width: "100%", background: "transparent", color: "#1c1b1a" }} />
                </div>
              </div>
              {v.showExistingLink && (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "14px" }}>
                    <div className="hv8" onClick={v.startExisting} style={{ border: "1px solid #e6e4e0", borderRadius: "8px", padding: "14px", display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
                      <span style={{ width: "36px", height: "36px", borderRadius: "8px", background: "var(--cw-blue-50)", color: "var(--cw-blue-700)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
                          <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
                        </svg>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                        <span style={{ fontSize: "14px", fontWeight: 700 }}>Link an existing notebook</span>
                        <span style={{ fontSize: "12px", lineHeight: 1.4, color: "#4a4845" }}>Show the output of a notebook you already have.</span>
                      </span>
                    </div>
                    <div className="hv8" onClick={v.startBlank} style={{ border: "1px solid #e6e4e0", borderRadius: "8px", padding: "14px", display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
                      <span style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#f5f4f2", color: "#4a4845", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z" />
                          <path d="M14 3v5h5M12 11v6M9 14h6" />
                        </svg>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                        <span style={{ fontSize: "14px", fontWeight: 700 }}>Start from a blank notebook</span>
                        <span style={{ fontSize: "12px", lineHeight: 1.4, color: "#4a4845" }}>Write your own cells and link the output here.</span>
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", color: "#6b6966", paddingTop: "6px" }}>OR START FROM A TEMPLATE</span>
                </>
              )}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "14px" }}>
                {v.items.map((t, i1) => (
                  <div key={i1} className="hv6" onClick={t.open} style={{ border: "1px solid #e6e4e0", borderRadius: "8px", overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "column", transition: "border-color 120ms" }}>
                    <div style={{ height: "170px", flexShrink: 0, padding: "6px", borderBottom: "1px solid #e6e4e0", background: "#fff" }}>
                      <ViewerPreview kind={t.kind} />
                    </div>
                    <div style={{ padding: "12px 14px 14px", display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
                      <span style={{ fontSize: "14px", fontWeight: 700 }}>{t.title}</span>
                      <span style={{ fontSize: "12px", lineHeight: 1.45, color: "#4a4845" }}>{t.blurb}</span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "auto", paddingTop: "4px" }}>
                        {t.exts.map((ex, i2) => (
                          <span key={i2} style={{ fontFamily: "'Fira Mono',monospace", fontSize: "10.5px", color: "#3d3b39", background: "#f5f4f2", border: "1px solid #e6e4e0", borderRadius: "4px", padding: "1px 6px" }}>{ex}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {v.noItems && <span style={{ fontSize: "12px", color: "#6b6966" }}>No templates match “{v.q}”.</span>}
            </div>
          </div>
        )}
        {v.stepDetail && (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 18px", borderBottom: "1px solid #e6e4e0", background: "#faf9f7", flexShrink: 0 }}>
              <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: "12.5px", fontWeight: 600 }}>{v.copyName}</span>
              <span style={{ fontSize: "11px", color: "#4a4845", background: "#f0eeeb", borderRadius: "999px", padding: "2px 9px" }}>Preview · read-only</span>
              <span style={{ flex: 1 }} />
              <span style={{ fontSize: "11.5px", color: "#6b6966" }}>{"Runs with "}{v.sel.sample}</span>
            </div>
            <div style={{ flex: 1, minHeight: "0", overflowY: "auto", background: "#fff" }}>
              <div style={{ padding: "20px 24px 32px", display: "flex", flexDirection: "column", gap: "14px", fontFamily: "'PT Sans',system-ui,sans-serif", color: "#18181b" }}>
                <div style={{ border: "1px solid #e4e4e7", borderRadius: "8px", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.04)", display: "flex", gap: "10px", padding: "14px 16px 14px 14px" }}>
                  <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: "11px", color: "#a1a1aa", width: "14px", flexShrink: 0, paddingTop: "4px" }}>1</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "0" }}>
                    <h1 style={{ fontFamily: "'Lora',Georgia,serif", fontWeight: 500, fontSize: "24px", lineHeight: 1.25, margin: "0" }}>{v.sel.title}</h1>
                    <p style={{ fontSize: "14px", lineHeight: 1.6, margin: "0", maxWidth: "66ch" }}>{v.sel.desc}</p>
                  </div>
                </div>
                <div style={{ border: "1px solid #e4e4e7", borderRadius: "8px", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.04)", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 12px 10px 14px" }}>
                    <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: "11px", color: "#a1a1aa", width: "14px", flexShrink: 0, paddingTop: "2px" }}>2</span>
                    <div style={{ flex: 1, minWidth: "0", overflowX: "auto" }}>
                      <div style={{ display: "flex", flexDirection: "column", fontFamily: "'Fira Mono',monospace", fontSize: "12.5px", lineHeight: "19px" }}>
                        {v.sel.lines.map((ln, i1) => (
                          <div key={i1} style={{ whiteSpace: "pre", height: "19px" }}>
                            {ln.toks.map((tk, i2) => (
                              <span key={i2} style={{ whiteSpace: "pre", color: tk.c, fontStyle: tk.fs }}>{tk.t}</span>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div style={{ borderTop: "1px solid #e4e4e7", padding: "14px 16px" }}>
                    <div style={{ border: "1px solid #e6e4e0", borderRadius: "8px", overflow: "hidden" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 12px", borderBottom: "1px solid #e6e4e0", fontSize: "12px" }}>
                        <span style={{ fontWeight: 700 }}>{v.sel.viewer}</span>
                        <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: "11px", color: "#6b6966" }}>{v.sel.sample}</span>
                      </div>
                      <div style={{ aspectRatio: "16/9", background: "#fff" }}>
                        <ViewerPreview kind={v.sel.kind} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ border: "1px solid #e4e4e7", borderRadius: "8px", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.04)", display: "flex", gap: "10px", padding: "14px 16px 14px 14px" }}>
                  <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: "11px", color: "#a1a1aa", width: "14px", flexShrink: 0, paddingTop: "2px" }}>3</span>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "14px", minWidth: "0" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontSize: "10px", letterSpacing: "0.05em", color: "#8a8784" }}>SUPPORTED FORMATS</span>
                      <div style={{ border: "1px solid #e6e4e0", borderRadius: "6px", overflow: "hidden" }}>
                        {v.sel.formats.map((f, i1) => (
                          <div key={i1} style={{ display: "grid", gridTemplateColumns: "100px minmax(0,1fr)", gap: "10px", padding: "7px 10px", borderBottom: "1px solid #e6e4e0" }}>
                            <span style={{ fontFamily: "'Fira Mono',monospace", fontSize: "11px", color: "#3d3b39" }}>{f.ext}</span>
                            <span style={{ fontSize: "11.5px", lineHeight: 1.45, color: "#4a4845" }}>
                              <b style={{ color: "#1c1b1a" }}>{f.name}.</b>
                              {" "}{f.note}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontSize: "10px", letterSpacing: "0.05em", color: "#8a8784" }}>WHERE YOUR DATA CAN COME FROM</span>
                      <div style={{ border: "1px solid #e6e4e0", borderRadius: "6px", overflow: "hidden" }}>
                        {v.sel.sources.map((sr, i1) => (
                          <div key={i1} style={{ display: "grid", gridTemplateColumns: "100px minmax(0,1fr)", gap: "10px", padding: "7px 10px", borderBottom: "1px solid #e6e4e0" }}>
                            <span style={{ fontSize: "11.5px", fontWeight: 700, color: "#1c1b1a" }}>{sr.label}</span>
                            <span style={{ fontSize: "11.5px", lineHeight: 1.45, color: "#4a4845" }}>{sr.note}</span>
                          </div>
                        ))}
                      </div>
                      <span style={{ fontSize: "11.5px", lineHeight: 1.45, color: "#6b6966" }}>You can switch the source in the notebook after you copy it.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "8px", padding: "12px 18px", borderTop: "1px solid #e6e4e0", flexShrink: 0 }}>
              {v.isNbOrigin && (
                <label onClick={v.toggleIncludeWs} style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", marginRight: "auto", userSelect: "none" }}>
                  <span style={{ width: "16px", height: "16px", borderRadius: "4px", border: `1.5px solid ${v.incWs.border}`, background: v.incWs.bg, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {v.incWs.on && (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5 9-10" />
                      </svg>
                    )}
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#1c1b1a" }}>Include in workspace panel</span>
                    <span style={{ fontSize: "11.5px", color: "#6b6966" }}>{"Adds its output to the "}{v.copyProject}{" workspace"}</span>
                  </span>
                </label>
              )}
              <Button variant={"support"} appearance={"outline"} size={"sm"} onClick={v.mBack}>Back</Button>
              <Button size={"sm"} onClick={v.useTpl}>Use template</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
