
export function WorkspaceCharts() {
  return (
    <div style={{ padding: "12px 16px 16px", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "10px" }}>
      <div style={{ border: "1px solid #e6e4e0", borderRadius: "6px", background: "#fff", padding: "0 0 10px", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px 0" }}>
          <span style={{ fontSize: "13px", fontWeight: 700, flex: 1, textAlign: "center" }}>Training Loss</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,max-content)", gap: "3px 20px", justifyContent: "center" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#f5c542" }} />
            deviled-egg-1
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#12a150" }} />
            sapphire-sky-7
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#16b3c7" }} />
            luminous-lagoon-12
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#5b6270" }} />
            rabid-raccoon-5
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#f0364f" }} />
            enigmatic-emu-11
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#8b5cf6" }} />
            nebulous-nightingale-3
          </span>
        </div>
        <div style={{ padding: "0 10px" }}>
          <svg viewBox="0 0 460 200" width="100%" style={{ display: "block", fontFamily: "sans-serif" }}>
            <line x1="34" y1="180.0" x2="452" y2="180.0" stroke="#eeece9" />
            <text x="28" y="183.0" fontSize="9" fill="#6b6966" textAnchor="end">0</text>
            <line x1="34" y1="122.7" x2="452" y2="122.7" stroke="#eeece9" />
            <text x="28" y="125.7" fontSize="9" fill="#6b6966" textAnchor="end">1</text>
            <line x1="34" y1="65.3" x2="452" y2="65.3" stroke="#eeece9" />
            <text x="28" y="68.3" fontSize="9" fill="#6b6966" textAnchor="end">2</text>
            <line x1="34" y1="8.0" x2="452" y2="8.0" stroke="#eeece9" />
            <text x="28" y="11.0" fontSize="9" fill="#6b6966" textAnchor="end">3</text>
            <text x="34.0" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">0</text>
            <text x="117.6" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">5k</text>
            <text x="201.2" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">10k</text>
            <text x="284.8" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">15k</text>
            <text x="368.4" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">20k</text>
            <text x="452.0" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">25k</text>
            <polyline points="34.0,20.7 47.9,29.5 61.9,43.1 75.8,51.4 89.7,62.5 103.7,72.3 117.6,82.6 131.5,88.9 145.5,89.8 159.4,99.6 173.3,107.4 187.3,108.2 201.2,114.5 215.1,116.4 229.1,125.5 243.0,125.5 256.9,127.7 270.9,133.1 284.8,137.5 298.7,139.3 312.7,142.4 326.6,141.3 340.5,141.8 354.5,144.3 368.4,148.2 382.3,146.8 396.3,149.9 410.2,149.0 424.1,151.5 438.1,156.9 452.0,154.8" fill="none" stroke="#f5c542" strokeWidth="1.4" strokeLinejoin="round" />
            <polyline points="34.0,12.1 47.9,27.2 61.9,39.5 75.8,51.2 89.7,61.0 103.7,69.4 117.6,79.6 131.5,86.4 145.5,95.6 159.4,104.1 173.3,109.8 187.3,110.2 201.2,116.7 215.1,123.3 229.1,125.8 243.0,129.7 256.9,131.9 270.9,133.8 284.8,134.4 298.7,140.8 312.7,139.0 326.6,142.5 340.5,147.7 354.5,146.0 368.4,144.7 382.3,150.3 396.3,152.4 410.2,152.5 424.1,153.0 438.1,155.8 452.0,156.4" fill="none" stroke="#12a150" strokeWidth="1.4" strokeLinejoin="round" />
            <polyline points="34.0,9.7 47.9,23.8 61.9,37.3 75.8,50.7 89.7,63.0 103.7,71.3 117.6,80.3 131.5,87.6 145.5,97.7 159.4,104.7 173.3,111.5 187.3,116.4 201.2,116.7 215.1,120.4 229.1,126.7 243.0,128.9 256.9,133.6 270.9,133.8 284.8,139.7 298.7,135.6 312.7,142.9 326.6,140.3 340.5,145.0 354.5,144.8 368.4,149.0 382.3,145.8 396.3,151.1 410.2,149.8 424.1,149.2 438.1,152.3 452.0,153.8" fill="none" stroke="#16b3c7" strokeWidth="1.4" strokeLinejoin="round" />
            <polyline points="34.0,9.7 47.9,22.6 61.9,36.4 75.8,51.5 89.7,65.9 103.7,73.7 117.6,84.7 131.5,90.5 145.5,95.2 159.4,106.9 173.3,111.2 187.3,115.2 201.2,118.5 215.1,121.2 229.1,126.5 243.0,125.7 256.9,133.2 270.9,134.7 284.8,133.8 298.7,138.7 312.7,138.2 326.6,141.1 340.5,142.8 354.5,141.8 368.4,145.4 382.3,143.0 396.3,143.0 410.2,144.4 424.1,143.9 438.1,146.3 452.0,149.1" fill="none" stroke="#5b6270" strokeWidth="1.4" strokeLinejoin="round" />
            <polyline points="34.0,9.7 47.9,19.4 61.9,36.7 75.8,51.7 89.7,61.8 103.7,75.3 117.6,84.8 131.5,90.4 145.5,98.9 159.4,103.5 173.3,107.4 187.3,115.9 201.2,115.8 215.1,120.4 229.1,126.3 243.0,128.2 256.9,128.5 270.9,129.2 284.8,132.6 298.7,137.3 312.7,136.8 326.6,141.0 340.5,137.9 354.5,140.1 368.4,137.6 382.3,142.0 396.3,143.8 410.2,140.5 424.1,140.1 438.1,145.2 452.0,140.4" fill="none" stroke="#f0364f" strokeWidth="1.4" strokeLinejoin="round" />
            <polyline points="34.0,9.7 47.9,12.9 61.9,30.1 75.8,46.3 89.7,61.4 103.7,75.6 117.6,85.6 131.5,89.6 145.5,95.4 159.4,102.6 173.3,107.8 187.3,112.7 201.2,119.7 215.1,117.2 229.1,121.1 243.0,123.3 256.9,131.1 270.9,126.8 284.8,132.9 298.7,134.4 312.7,135.2 326.6,133.0 340.5,132.2 354.5,137.3 368.4,135.4 382.3,136.1 396.3,137.8 410.2,137.5 424.1,136.6 438.1,140.9 452.0,136.9" fill="none" stroke="#8b5cf6" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div style={{ border: "1px solid #e6e4e0", borderRadius: "6px", background: "#fff", padding: "0 0 10px", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px 0" }}>
          <span style={{ fontSize: "13px", fontWeight: 700, flex: 1, textAlign: "center" }}>Eval Accuracy</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,max-content)", gap: "3px 20px", justifyContent: "center" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#f5c542" }} />
            deviled-egg-1
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#12a150" }} />
            sapphire-sky-7
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#16b3c7" }} />
            luminous-lagoon-12
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#5b6270" }} />
            rabid-raccoon-5
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#f0364f" }} />
            enigmatic-emu-11
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#8b5cf6" }} />
            nebulous-nightingale-3
          </span>
        </div>
        <div style={{ padding: "0 10px" }}>
          <svg viewBox="0 0 460 200" width="100%" style={{ display: "block", fontFamily: "sans-serif" }}>
            <line x1="34" y1="180.0" x2="452" y2="180.0" stroke="#eeece9" />
            <text x="28" y="183.0" fontSize="9" fill="#6b6966" textAnchor="end">0.00</text>
            <line x1="34" y1="137.0" x2="452" y2="137.0" stroke="#eeece9" />
            <text x="28" y="140.0" fontSize="9" fill="#6b6966" textAnchor="end">0.25</text>
            <line x1="34" y1="94.0" x2="452" y2="94.0" stroke="#eeece9" />
            <text x="28" y="97.0" fontSize="9" fill="#6b6966" textAnchor="end">0.50</text>
            <line x1="34" y1="51.0" x2="452" y2="51.0" stroke="#eeece9" />
            <text x="28" y="54.0" fontSize="9" fill="#6b6966" textAnchor="end">0.75</text>
            <line x1="34" y1="8.0" x2="452" y2="8.0" stroke="#eeece9" />
            <text x="28" y="11.0" fontSize="9" fill="#6b6966" textAnchor="end">1.00</text>
            <text x="34.0" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">0</text>
            <text x="117.6" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">5k</text>
            <text x="201.2" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">10k</text>
            <text x="284.8" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">15k</text>
            <text x="368.4" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">20k</text>
            <text x="452.0" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">25k</text>
            <polyline points="34.0,135.0 47.9,124.7 61.9,119.9 75.8,109.9 89.7,99.7 103.7,96.9 117.6,89.6 131.5,83.3 145.5,77.6 159.4,75.1 173.3,71.5 187.3,63.6 201.2,63.0 215.1,61.1 229.1,56.7 243.0,55.3 256.9,53.9 270.9,48.7 284.8,49.0 298.7,47.3 312.7,47.2 326.6,41.5 340.5,43.8 354.5,39.3 368.4,40.4 382.3,40.7 396.3,38.0 410.2,38.3 424.1,35.8 438.1,35.7 452.0,37.8" fill="none" stroke="#f5c542" strokeWidth="1.4" strokeLinejoin="round" />
            <polyline points="34.0,145.6 47.9,132.7 61.9,124.1 75.8,109.8 89.7,104.8 103.7,96.1 117.6,89.7 131.5,82.3 145.5,80.3 159.4,75.1 173.3,70.7 187.3,67.4 201.2,62.0 215.1,61.2 229.1,58.6 243.0,57.2 256.9,55.3 270.9,50.9 284.8,52.5 298.7,50.3 312.7,46.5 326.6,44.9 340.5,43.3 354.5,42.6 368.4,42.1 382.3,42.0 396.3,41.9 410.2,41.8 424.1,38.9 438.1,42.0 452.0,41.5" fill="none" stroke="#12a150" strokeWidth="1.4" strokeLinejoin="round" />
            <polyline points="34.0,152.5 47.9,138.3 61.9,125.1 75.8,114.6 89.7,108.1 103.7,96.8 117.6,89.7 131.5,87.0 145.5,80.6 159.4,76.8 173.3,74.6 187.3,66.4 201.2,66.1 215.1,61.3 229.1,60.4 243.0,59.0 256.9,58.9 270.9,53.9 284.8,52.0 298.7,54.1 312.7,49.1 326.6,52.6 340.5,49.0 354.5,48.3 368.4,47.9 382.3,46.3 396.3,49.1 410.2,45.6 424.1,48.6 438.1,43.8 452.0,48.5" fill="none" stroke="#16b3c7" strokeWidth="1.4" strokeLinejoin="round" />
            <polyline points="34.0,155.2 47.9,142.9 61.9,128.6 75.8,117.5 89.7,111.6 103.7,101.7 117.6,96.9 131.5,89.7 145.5,83.4 159.4,81.2 173.3,75.8 187.3,73.1 201.2,69.9 215.1,64.9 229.1,66.2 243.0,64.2 256.9,58.3 270.9,58.9 284.8,60.6 298.7,57.9 312.7,58.6 326.6,55.9 340.5,55.6 354.5,52.0 368.4,52.8 382.3,54.0 396.3,52.2 410.2,54.0 424.1,50.6 438.1,51.5 452.0,51.7" fill="none" stroke="#5b6270" strokeWidth="1.4" strokeLinejoin="round" />
            <polyline points="34.0,166.0 47.9,149.1 61.9,136.7 75.8,120.9 89.7,115.0 103.7,106.7 117.6,99.0 131.5,92.4 145.5,83.5 159.4,81.4 173.3,78.6 187.3,75.8 201.2,72.4 215.1,68.3 229.1,68.3 243.0,67.3 256.9,67.5 270.9,62.4 284.8,62.6 298.7,62.6 312.7,59.8 326.6,60.4 340.5,61.1 354.5,58.0 368.4,58.1 382.3,60.2 396.3,59.5 410.2,58.3 424.1,57.7 438.1,56.8 452.0,58.6" fill="none" stroke="#f0364f" strokeWidth="1.4" strokeLinejoin="round" />
            <polyline points="34.0,169.1 47.9,153.1 61.9,137.2 75.8,126.9 89.7,118.4 103.7,105.2 117.6,100.2 131.5,93.8 145.5,90.2 159.4,84.2 173.3,80.6 187.3,79.2 201.2,77.1 215.1,72.9 229.1,72.1 243.0,74.1 256.9,71.4 270.9,69.9 284.8,66.4 298.7,67.5 312.7,69.5 326.6,66.4 340.5,68.6 354.5,68.1 368.4,66.2 382.3,67.1 396.3,63.2 410.2,63.4 424.1,65.6 438.1,62.8 452.0,66.0" fill="none" stroke="#8b5cf6" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div style={{ border: "1px solid #e6e4e0", borderRadius: "6px", background: "#fff", padding: "0 0 10px", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px 0" }}>
          <span style={{ fontSize: "13px", fontWeight: 700, flex: 1, textAlign: "center" }}>GPU Utilization</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,max-content)", gap: "3px 20px", justifyContent: "center" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#f5c542" }} />
            deviled-egg-1
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#12a150" }} />
            sapphire-sky-7
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#16b3c7" }} />
            luminous-lagoon-12
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#5b6270" }} />
            rabid-raccoon-5
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#f0364f" }} />
            enigmatic-emu-11
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#3d3b39" }}>
            <span style={{ width: "14px", height: "2px", background: "#8b5cf6" }} />
            nebulous-nightingale-3
          </span>
        </div>
        <div style={{ padding: "0 10px" }}>
          <svg viewBox="0 0 460 200" width="100%" style={{ display: "block", fontFamily: "sans-serif" }}>
            <line x1="34" y1="180.0" x2="452" y2="180.0" stroke="#eeece9" />
            <text x="28" y="183.0" fontSize="9" fill="#6b6966" textAnchor="end">0%</text>
            <line x1="34" y1="137.0" x2="452" y2="137.0" stroke="#eeece9" />
            <text x="28" y="140.0" fontSize="9" fill="#6b6966" textAnchor="end">25%</text>
            <line x1="34" y1="94.0" x2="452" y2="94.0" stroke="#eeece9" />
            <text x="28" y="97.0" fontSize="9" fill="#6b6966" textAnchor="end">50%</text>
            <line x1="34" y1="51.0" x2="452" y2="51.0" stroke="#eeece9" />
            <text x="28" y="54.0" fontSize="9" fill="#6b6966" textAnchor="end">75%</text>
            <line x1="34" y1="8.0" x2="452" y2="8.0" stroke="#eeece9" />
            <text x="28" y="11.0" fontSize="9" fill="#6b6966" textAnchor="end">100%</text>
            <text x="34.0" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">0</text>
            <text x="117.6" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">5k</text>
            <text x="201.2" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">10k</text>
            <text x="284.8" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">15k</text>
            <text x="368.4" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">20k</text>
            <text x="452.0" y="195" fontSize="9" fill="#6b6966" textAnchor="middle">25k</text>
            <polyline points="34.0,126.8 47.9,119.8 61.9,56.5 75.8,52.3 89.7,62.7 103.7,54.1 117.6,56.5 131.5,54.4 145.5,61.8 159.4,64.3 173.3,61.8 187.3,60.8 201.2,57.6 215.1,53.7 229.1,47.7 243.0,46.8 256.9,53.8 270.9,59.8 284.8,55.0 298.7,57.4 312.7,50.3 326.6,62.2 340.5,57.4 354.5,53.0 368.4,60.5 382.3,59.7 396.3,60.0 410.2,56.1 424.1,56.9 438.1,64.4 452.0,56.4" fill="none" stroke="#f5c542" strokeWidth="1.4" strokeLinejoin="round" />
            <polyline points="34.0,121.7 47.9,127.2 61.9,55.4 75.8,55.8 89.7,46.3 103.7,53.7 117.6,50.2 131.5,56.2 145.5,54.2 159.4,45.6 173.3,43.1 187.3,39.8 201.2,52.4 215.1,44.6 229.1,47.7 243.0,52.3 256.9,41.8 270.9,44.5 284.8,52.5 298.7,55.2 312.7,50.3 326.6,58.9 340.5,49.1 354.5,57.0 368.4,50.1 382.3,57.8 396.3,58.1 410.2,47.7 424.1,48.4 438.1,49.0 452.0,47.6" fill="none" stroke="#12a150" strokeWidth="1.4" strokeLinejoin="round" />
            <polyline points="34.0,112.4 47.9,107.4 61.9,44.6 75.8,40.4 89.7,36.2 103.7,47.2 117.6,44.6 131.5,35.5 145.5,36.6 159.4,38.9 173.3,32.7 187.3,36.1 201.2,46.2 215.1,36.3 229.1,39.8 243.0,46.0 256.9,39.0 270.9,39.9 284.8,44.2 298.7,46.6 312.7,42.3 326.6,46.9 340.5,38.2 354.5,40.6 368.4,48.4 382.3,36.4 396.3,44.2 410.2,44.8 424.1,37.5 438.1,35.8 452.0,32.5" fill="none" stroke="#16b3c7" strokeWidth="1.4" strokeLinejoin="round" />
            <polyline points="34.0,103.3 47.9,102.9 61.9,28.1 75.8,37.3 89.7,37.2 103.7,32.5 117.6,27.4 131.5,26.1 145.5,39.6 159.4,27.4 173.3,36.6 187.3,29.1 201.2,30.3 215.1,33.6 229.1,34.8 243.0,42.1 256.9,36.9 270.9,34.9 284.8,41.4 298.7,39.5 312.7,37.1 326.6,36.7 340.5,36.6 354.5,37.2 368.4,37.8 382.3,38.4 396.3,31.6 410.2,27.4 424.1,27.2 438.1,29.7 452.0,28.0" fill="none" stroke="#5b6270" strokeWidth="1.4" strokeLinejoin="round" />
            <polyline points="34.0,98.9 47.9,97.7 61.9,21.3 75.8,25.6 89.7,25.3 103.7,21.0 117.6,32.5 131.5,21.7 145.5,27.6 159.4,29.9 173.3,24.4 187.3,33.1 201.2,37.4 215.1,25.4 229.1,29.9 243.0,34.0 256.9,31.9 270.9,25.9 284.8,28.2 298.7,25.4 312.7,30.6 326.6,29.9 340.5,29.9 354.5,26.8 368.4,21.9 382.3,27.7 396.3,23.7 410.2,26.3 424.1,26.7 438.1,28.6 452.0,36.2" fill="none" stroke="#f0364f" strokeWidth="1.4" strokeLinejoin="round" />
            <polyline points="34.0,89.4 47.9,89.6 61.9,17.4 75.8,27.2 89.7,20.5 103.7,18.4 117.6,30.3 131.5,23.2 145.5,19.7 159.4,21.8 173.3,20.9 187.3,27.5 201.2,22.2 215.1,21.0 229.1,22.3 243.0,26.4 256.9,19.1 270.9,13.8 284.8,17.2 298.7,11.7 312.7,12.4 326.6,18.1 340.5,22.1 354.5,13.2 368.4,23.9 382.3,16.7 396.3,23.3 410.2,27.2 424.1,29.0 438.1,21.0 452.0,20.0" fill="none" stroke="#8b5cf6" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
