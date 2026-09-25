import type { ViewModel } from '../state/viewModel';
import { TopBar } from './TopBar';
import { WorkspaceRail } from './WorkspaceRail';
import { WorkspacePage } from './WorkspacePage';
import { NotebooksPage } from './NotebooksPage';
import { AppSwitcher } from './AppSwitcher';
import { AddPanelsDrawer } from './AddPanelsDrawer';
import { NotebookEditor } from './NotebookEditor';
import { TemplatesDrawer } from './TemplatesDrawer';
import { Toast } from './Toast';

export function AppShell({ v }: { v: ViewModel }) {
  return (
    <div style={{ width: "100vw", height: "100vh", minWidth: "1280px", position: "relative", overflow: "hidden", fontFamily: "var(--font-brand)", color: "#1c1b1a", background: "#fff", display: "flex", flexDirection: "column" }}>
      <TopBar v={v} />
      <div style={{ flex: 1, minHeight: "0", display: "flex" }}>
        {v.isWsPage && <WorkspaceRail v={v} />}
        {v.isWsPage && <WorkspacePage v={v} />}
        {v.isNbPage && <NotebooksPage v={v} />}
      </div>
      {v.anyMenu && <div onClick={v.closeMenu} style={{ position: "absolute", inset: "0", zIndex: 35 }} />}
      {v.appsOpen && <AppSwitcher v={v} />}
      {v.menuHdrOpen && <AddPanelsDrawer v={v} />}
      {v.nbOpen && <NotebookEditor v={v} />}
      {v.modalOpen && <TemplatesDrawer v={v} />}
      {v.hasToast && <Toast v={v} />}
    </div>
  );
}
