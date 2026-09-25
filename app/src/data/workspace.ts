// Mock workspace, project and org content for the prototype.
export const CUR = 'asteroid-detection_Q1-2025';
export const ENTITY = 'jane-doe';

export const APPS: { label: string; items: [key: string, name: string, desc: string, icon: string][] }[] = [
  { label: 'FORGE', items: [
    ['aria', 'ARIA', 'Coding agent for the AI loop', 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z'],
    ['wb', 'Weights & Biases', 'Track ML experiments and evaluate AI applications', 'M4 19V9M10 19V5M16 19v-7M22 19H2'],
    ['post', 'Post-Training', 'Distillation, RL and SFT', 'M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18 3v4h-4M6 21v-4h4'],
    ['lens', 'Agent Lens', 'Intelligent agent observability and improvement', 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5'],
    ['inf', 'Inference', 'Leverage the latest models', 'M4 17l6-6 4 4 6-8'],
    ['sand', 'Sandboxes', 'On-demand, isolated CPU and GPU compute', 'M4 20L20 4M8 4h12v12'],
    ['nb', 'Notebooks', 'Reactive Python notebooks', 'M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 8h6M9 12h6M9 16h4'],
    ['reg', 'Registry', 'System of record and controls for assets', 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z'],
  ] },
  { label: 'INFRASTRUCTURE', items: [
    ['home', 'Home', 'Infrastructure at a glance', 'M4 11l8-7 8 7v9H4z'],
    ['mc', 'Mission Control', 'Ask anything across Infrastructure', 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z'],
    ['ic', 'Infra Control', 'Compute, networking, data and storage', 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8v4l3 2'],
    ['obs', 'Observability', 'Dashboards, alerts, and telemetry', 'M3 12h4l3-7 4 14 3-7h4'],
    ['wl', 'Workloads', 'SUNK, inference, and sandboxes', 'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5'],
    ['ac', 'Access Control', 'Users, groups, and access policies', 'M12 8a4 4 0 1 0 0-.01M4 21a8 8 0 0 1 16 0'],
  ] },
];
export const OTHER_NBS: { title: string; author: string; projectLabel: string; savedAt: string; created: string }[] = [
  { title: 'Quick Data Cleaning for Eval Set', author: 'Zara Davis', projectLabel: 'zara.davis/temp-data-prep', savedAt: '2h ago', created: '3 minutes ago' },
  { title: 'Team Image Labeling Tool v3', author: 'Sarah Miller', projectLabel: 'lab-ops/dataset-labeling', savedAt: '3d ago', created: '2 hours ago' },
  { title: 'Real-Time Monitoring Dashboard', author: 'Dave Kim', projectLabel: 'production/service-monitor', savedAt: '1w ago', created: '4 days ago' },
];
