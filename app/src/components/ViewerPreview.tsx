import { useId } from "react";

export type ViewerKind = "Rerun" | "Foxglove" | "Splat" | "Bench" | "Graph";

// Static preview art for each template viewer. Clip-path and filter ids are
// made unique per instance because the same preview renders in several places.
export function ViewerPreview({ kind }: { kind: ViewerKind }) {
  const uid = "vp" + useId().replace(/[^a-zA-Z0-9_-]/g, "");
  switch (kind) {
    case "Rerun":
      return (
        <svg viewBox="0 0 320 180" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
          <rect width="320" height="180" fill="#fff" />
          <defs>
            <clipPath id={uid + "-cpR"}>
              <rect x="8" y="8" width="186" height="164" rx="3" />
            </clipPath>
          </defs>
          <rect x="8" y="8" width="186" height="164" rx="3" fill="#fff" stroke="#e4e4e7" />
          <text x="14" y="19" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#71717a">3D view</text>
          <g clipPath={`url(#${uid}-cpR)`} stroke="#e4e4e7" strokeWidth="0.7">
            <line x1="8" y1="84" x2="194" y2="84" />
            <line x1="8" y1="100" x2="194" y2="100" />
            <line x1="8" y1="122" x2="194" y2="122" />
            <line x1="8" y1="150" x2="194" y2="150" />
            <line x1="84.9" y1="70" x2="-60" y2="170" />
            <line x1="92.9" y1="70" x2="20" y2="170" />
            <line x1="101" y1="70" x2="101" y2="170" />
            <line x1="109.1" y1="70" x2="182" y2="170" />
            <line x1="117.1" y1="70" x2="262" y2="170" />
          </g>
          <g fill="#4c78a8" opacity="0.55">
            <circle cx="122" cy="72" r="1.4" />
            <circle cx="128" cy="66" r="1.4" />
            <circle cx="134" cy="78" r="1.4" />
            <circle cx="140" cy="62" r="1.4" />
            <circle cx="146" cy="74" r="1.4" />
            <circle cx="152" cy="60" r="1.4" />
            <circle cx="158" cy="70" r="1.4" />
            <circle cx="164" cy="64" r="1.4" />
            <circle cx="170" cy="76" r="1.4" />
            <circle cx="130" cy="86" r="1.4" />
            <circle cx="142" cy="84" r="1.4" />
            <circle cx="154" cy="82" r="1.4" />
            <circle cx="166" cy="88" r="1.4" />
            <circle cx="136" cy="58" r="1.4" />
            <circle cx="160" cy="54" r="1.4" />
            <circle cx="148" cy="90" r="1.4" />
            <circle cx="174" cy="68" r="1.4" />
          </g>
          <path d="M30 150 C 60 125, 90 140, 115 118 S 150 95, 162 100" stroke="#f58518" strokeWidth="1.5" fill="none" />
          <rect x="160" y="96" width="10" height="8" rx="1.5" fill="#fff" stroke="#3f3f46" strokeWidth="1" />
          <line x1="16" y1="164" x2="186" y2="164" stroke="#e4e4e7" strokeWidth="1.5" />
          <line x1="16" y1="164" x2="120" y2="164" stroke="#4c78a8" strokeWidth="1.5" />
          <circle cx="120" cy="164" r="2.5" fill="#fff" stroke="#4c78a8" strokeWidth="1" />
          <rect x="200" y="8" width="112" height="164" rx="3" fill="#fff" stroke="#e4e4e7" />
          <text x="206" y="19" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#71717a">joint angles</text>
          <g stroke="#f0f0f0" strokeWidth="0.7">
            <line x1="212" y1="40" x2="304" y2="40" />
            <line x1="212" y1="80" x2="304" y2="80" />
            <line x1="212" y1="120" x2="304" y2="120" />
          </g>
          <line x1="212" y1="156" x2="304" y2="156" stroke="#a1a1aa" strokeWidth="0.7" />
          <polyline points="212,70 224,62 236,66 248,52 260,58 272,48 284,54 296,46 304,50" fill="none" stroke="#4c78a8" strokeWidth="1.2" />
          <polyline points="212,104 224,110 236,98 248,102 260,90 272,96 284,88 296,94 304,90" fill="none" stroke="#f58518" strokeWidth="1.2" />
          <polyline points="212,136 224,132 236,138 248,128 260,134 272,126 284,130 296,124 304,128" fill="none" stroke="#54a24b" strokeWidth="1.2" />
          <line x1="262" y1="28" x2="262" y2="156" stroke="#3f3f46" strokeWidth="0.7" strokeDasharray="2,2" />
          <text x="212" y="166" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#71717a">frame 412</text>
        </svg>
      );
    case "Foxglove":
      return (
        <svg viewBox="0 0 320 180" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
          <rect width="320" height="180" fill="#fff" />
          <rect x="8" y="8" width="150" height="100" rx="3" fill="#fff" stroke="#e4e4e7" />
          <text x="14" y="19" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#71717a">/camera/front</text>
          <rect x="14" y="24" width="138" height="78" rx="2" fill="#f4f4f5" />
          <polygon points="40,102 126,102 96,52 70,52" fill="#e4e4e7" />
          <rect x="92" y="60" width="24" height="17" fill="none" stroke="#4c78a8" strokeWidth="1.2" />
          <rect x="46" y="68" width="18" height="14" fill="none" stroke="#f58518" strokeWidth="1.2" />
          <rect x="164" y="8" width="148" height="100" rx="3" fill="#fff" stroke="#e4e4e7" />
          <text x="170" y="19" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#71717a">/lidar/points</text>
          <g fill="none" stroke="#e4e4e7">
            <circle cx="238" cy="62" r="12" />
            <circle cx="238" cy="62" r="26" />
            <circle cx="238" cy="62" r="40" />
          </g>
          <g fill="#4c78a8" opacity="0.6">
            <circle cx="222" cy="50" r="1.4" />
            <circle cx="228" cy="44" r="1.4" />
            <circle cx="250" cy="48" r="1.4" />
            <circle cx="256" cy="58" r="1.4" />
            <circle cx="252" cy="72" r="1.4" />
            <circle cx="226" cy="76" r="1.4" />
            <circle cx="216" cy="64" r="1.4" />
            <circle cx="244" cy="40" r="1.4" />
            <circle cx="260" cy="66" r="1.4" />
            <circle cx="232" cy="82" r="1.4" />
            <circle cx="212" cy="56" r="1.4" />
            <circle cx="266" cy="52" r="1.4" />
            <circle cx="238" cy="34" r="1.4" />
            <circle cx="246" cy="84" r="1.4" />
          </g>
          <rect x="234" y="58" width="8" height="8" rx="1" fill="#3f3f46" />
          <rect x="8" y="114" width="150" height="58" rx="3" fill="#fff" stroke="#e4e4e7" />
          <text x="14" y="125" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#71717a">/imu</text>
          <line x1="16" y1="164" x2="150" y2="164" stroke="#a1a1aa" strokeWidth="0.7" />
          <polyline points="16,150 32,142 48,146 64,132 80,138 96,128 112,134 128,126 150,130" fill="none" stroke="#4c78a8" strokeWidth="1.2" />
          <polyline points="16,158 32,156 48,152 64,158 80,150 96,154 112,148 128,152 150,149" fill="none" stroke="#f58518" strokeWidth="1.2" />
          <rect x="164" y="114" width="148" height="58" rx="3" fill="#fff" stroke="#e4e4e7" />
          <g fontFamily="PT Sans, sans-serif" fontSize="6.5">
            <text x="172" y="126" fill="#18181b" fontWeight="700">topic</text>
            <text x="300" y="126" fill="#18181b" fontWeight="700" textAnchor="end">Hz</text>
            <line x1="164" y1="130" x2="312" y2="130" stroke="#e4e4e7" />
            <text x="172" y="140" fill="#3f3f46">/camera/front</text>
            <text x="300" y="140" fill="#3f3f46" textAnchor="end">30</text>
            <line x1="164" y1="144" x2="312" y2="144" stroke="#f4f4f5" />
            <text x="172" y="154" fill="#3f3f46">/lidar/points</text>
            <text x="300" y="154" fill="#3f3f46" textAnchor="end">10</text>
            <line x1="164" y1="158" x2="312" y2="158" stroke="#f4f4f5" />
            <text x="172" y="167" fill="#3f3f46">/imu</text>
            <text x="300" y="167" fill="#3f3f46" textAnchor="end">200</text>
          </g>
        </svg>
      );
    case "Splat":
      return (
        <svg viewBox="0 0 320 180" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
          <rect width="320" height="180" fill="#fff" />
          <defs>
            <filter id={uid + "-sbl"} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.4" />
            </filter>
          </defs>
          <rect x="8" y="8" width="304" height="164" rx="3" fill="#fafafa" stroke="#e4e4e7" />
          <text x="14" y="19" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#71717a">garden.ply · 1.24M splats</text>
          <g filter={`url(#${uid}-sbl)`}>
            <ellipse cx="160" cy="146" rx="110" ry="14" fill="#d6d0c4" opacity="0.8" />
            <rect x="118" y="112" width="84" height="8" rx="3" fill="#9d755d" opacity="0.7" />
            <rect x="124" y="120" width="6" height="26" fill="#9d755d" opacity="0.55" />
            <rect x="190" y="120" width="6" height="26" fill="#9d755d" opacity="0.55" />
            <ellipse cx="160" cy="102" rx="16" ry="11" fill="#b8866b" opacity="0.75" />
            <ellipse cx="160" cy="76" rx="30" ry="20" fill="#54a24b" opacity="0.6" />
            <ellipse cx="140" cy="64" rx="16" ry="10" transform="rotate(-30 140 64)" fill="#88c27a" opacity="0.65" />
            <ellipse cx="182" cy="62" rx="16" ry="10" transform="rotate(28 182 62)" fill="#88c27a" opacity="0.6" />
            <ellipse cx="160" cy="50" rx="14" ry="10" fill="#a6d49b" opacity="0.6" />
            <ellipse cx="60" cy="96" rx="22" ry="40" fill="#c9d8c5" opacity="0.5" />
            <ellipse cx="262" cy="92" rx="24" ry="44" fill="#c9d8c5" opacity="0.5" />
            <ellipse cx="96" cy="130" rx="18" ry="10" fill="#72b7b2" opacity="0.35" />
            <ellipse cx="228" cy="132" rx="20" ry="10" fill="#72b7b2" opacity="0.35" />
          </g>
          <g strokeWidth="1.2" strokeLinecap="round">
            <line x1="290" y1="160" x2="302" y2="160" stroke="#e45756" />
            <line x1="290" y1="160" x2="290" y2="148" stroke="#54a24b" />
            <line x1="290" y1="160" x2="282" y2="166" stroke="#4c78a8" />
          </g>
        </svg>
      );
    case "Bench":
      return (
        <svg viewBox="0 0 320 180" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
          <rect width="320" height="180" fill="#fff" />
          <line x1="40" y1="24" x2="310" y2="24" stroke="#eeeeee" strokeWidth="0.7" />
          <text x="36" y="26" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#71717a" textAnchor="end">1.0</text>
          <line x1="40" y1="53" x2="310" y2="53" stroke="#eeeeee" strokeWidth="0.7" />
          <text x="36" y="55" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#71717a" textAnchor="end">0.75</text>
          <line x1="40" y1="82" x2="310" y2="82" stroke="#eeeeee" strokeWidth="0.7" />
          <text x="36" y="84" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#71717a" textAnchor="end">0.50</text>
          <line x1="40" y1="111" x2="310" y2="111" stroke="#eeeeee" strokeWidth="0.7" />
          <text x="36" y="113" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#71717a" textAnchor="end">0.25</text>
          <line x1="40" y1="140" x2="310" y2="140" stroke="#eeeeee" strokeWidth="0.7" />
          <text x="36" y="142" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#71717a" textAnchor="end">0</text>
          <line x1="40" y1="140" x2="310" y2="140" stroke="#888" strokeWidth="0.8" />
          <rect x="50" y="72.7" width="16" height="67.3" fill="#4c78a8" />
          <rect x="68" y="66.9" width="16" height="73.1" fill="#f58518" />
          <rect x="86" y="64.6" width="16" height="75.4" fill="#e45756" />
          <text x="77" y="150" fontFamily="PT Sans, sans-serif" fontSize="7" fill="#3f3f46" textAnchor="middle">MMLU</text>
          <rect x="116" y="100.6" width="16" height="39.4" fill="#4c78a8" />
          <rect x="134" y="79.7" width="16" height="60.3" fill="#f58518" />
          <rect x="152" y="72.7" width="16" height="67.3" fill="#e45756" />
          <text x="143" y="150" fontFamily="PT Sans, sans-serif" fontSize="7" fill="#3f3f46" textAnchor="middle">GSM8K</text>
          <rect x="182" y="108.7" width="16" height="31.3" fill="#4c78a8" />
          <rect x="200" y="95.9" width="16" height="44.1" fill="#f58518" />
          <rect x="218" y="92.4" width="16" height="47.6" fill="#e45756" />
          <text x="209" y="150" fontFamily="PT Sans, sans-serif" fontSize="7" fill="#3f3f46" textAnchor="middle">HumanEval</text>
          <rect x="248" y="79.7" width="16" height="60.3" fill="#4c78a8" />
          <rect x="266" y="70.4" width="16" height="69.6" fill="#f58518" />
          <rect x="284" y="65.8" width="16" height="74.2" fill="#e45756" />
          <text x="275" y="150" fontFamily="PT Sans, sans-serif" fontSize="7" fill="#3f3f46" textAnchor="middle">ARC-C</text>
          <text x="12" y="82" fontFamily="PT Sans, sans-serif" fontSize="7" fontWeight="700" fill="#3f3f46" transform="rotate(-90 12 82)" textAnchor="middle">score</text>
          <text x="175" y="166" fontFamily="PT Sans, sans-serif" fontSize="7" fontWeight="700" fill="#3f3f46" textAnchor="middle">task</text>
          <rect x="196" y="8" width="6" height="6" fill="#4c78a8" />
          <text x="205" y="13.5" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#3f3f46">base-7b</text>
          <rect x="236" y="8" width="6" height="6" fill="#f58518" />
          <text x="245" y="13.5" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#3f3f46">sft-7b</text>
          <rect x="276" y="8" width="6" height="6" fill="#e45756" />
          <text x="285" y="13.5" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#3f3f46">dpo-7b</text>
        </svg>
      );
    case "Graph":
      return (
        <svg viewBox="0 0 320 180" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
          <rect width="320" height="180" fill="#fff" />
          <g stroke="#d4d4d8" strokeWidth="0.9">
            <line x1="160" y1="86" x2="92" y2="52" />
            <line x1="160" y1="86" x2="228" y2="48" />
            <line x1="160" y1="86" x2="236" y2="122" />
            <line x1="160" y1="86" x2="98" y2="130" />
            <line x1="92" y1="52" x2="48" y2="74" />
            <line x1="92" y1="52" x2="124" y2="24" />
            <line x1="228" y1="48" x2="276" y2="30" />
            <line x1="228" y1="48" x2="282" y2="82" />
            <line x1="236" y1="122" x2="282" y2="82" />
            <line x1="236" y1="122" x2="270" y2="152" />
            <line x1="98" y1="130" x2="52" y2="148" />
            <line x1="98" y1="130" x2="152" y2="156" />
            <line x1="48" y1="74" x2="38" y2="112" />
            <line x1="124" y1="24" x2="182" y2="20" />
            <line x1="160" y1="86" x2="152" y2="156" />
          </g>
          <circle cx="160" cy="86" r="9" fill="#4c78a8" stroke="#fff" strokeWidth="1" />
          <circle cx="92" cy="52" r="7" fill="#4c78a8" stroke="#fff" strokeWidth="1" />
          <circle cx="228" cy="48" r="7" fill="#4c78a8" stroke="#fff" strokeWidth="1" />
          <circle cx="236" cy="122" r="7" fill="#4c78a8" stroke="#fff" strokeWidth="1" />
          <circle cx="98" cy="130" r="6" fill="#4c78a8" stroke="#fff" strokeWidth="1" />
          <circle cx="48" cy="74" r="4.5" fill="#f58518" stroke="#fff" strokeWidth="1" />
          <circle cx="124" cy="24" r="4.5" fill="#f58518" stroke="#fff" strokeWidth="1" />
          <circle cx="276" cy="30" r="4.5" fill="#f58518" stroke="#fff" strokeWidth="1" />
          <circle cx="282" cy="82" r="5" fill="#54a24b" stroke="#fff" strokeWidth="1" />
          <circle cx="270" cy="152" r="4.5" fill="#f58518" stroke="#fff" strokeWidth="1" />
          <circle cx="52" cy="148" r="4.5" fill="#f58518" stroke="#fff" strokeWidth="1" />
          <circle cx="152" cy="156" r="5" fill="#54a24b" stroke="#fff" strokeWidth="1" />
          <circle cx="38" cy="112" r="4.5" fill="#f58518" stroke="#fff" strokeWidth="1" />
          <circle cx="182" cy="20" r="4.5" fill="#f58518" stroke="#fff" strokeWidth="1" />
          <text x="160" y="103" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#3f3f46" textAnchor="middle">Attention Is All You Need</text>
          <text x="92" y="67" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#3f3f46" textAnchor="middle">BERT</text>
          <text x="228" y="63" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#3f3f46" textAnchor="middle">GPT-2</text>
          <text x="236" y="137" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#3f3f46" textAnchor="middle">T5</text>
          <text x="98" y="144" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#3f3f46" textAnchor="middle">ViT</text>
          <text x="282" y="95" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#3f3f46" textAnchor="middle">NeurIPS</text>
          <text x="152" y="169" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#3f3f46" textAnchor="middle">ICLR</text>
          <circle cx="12" cy="172" r="3" fill="#4c78a8" />
          <text x="18" y="174.5" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#3f3f46">paper</text>
          <circle cx="50" cy="172" r="3" fill="#f58518" />
          <text x="56" y="174.5" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#3f3f46">author</text>
          <circle cx="88" cy="172" r="3" fill="#54a24b" />
          <text x="94" y="174.5" fontFamily="PT Sans, sans-serif" fontSize="6.5" fill="#3f3f46">venue</text>
        </svg>
      );
  }
}
