import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './ds/styles.css';
import './styles/global.css';
import './styles/hover.css';
import { QuickstartsApp, type Step } from './state/QuickstartsApp';
import type { TemplateId } from './data/templates';

// `?step=workspace|menu|gallery|notebook|getting-started&template=rerun|foxglove|splat|bench|graph`
// opens the prototype on a specific screen, like the design's Tweaks panel.
const params = new URLSearchParams(window.location.search);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QuickstartsApp
      initialStep={(params.get('step') as Step | null) ?? undefined}
      initialTemplate={(params.get('template') as TemplateId | null) ?? undefined}
    />
  </StrictMode>,
);
