import type { QuickstartsApp } from './QuickstartsApp';

/** Flat, render-ready values every screen reads from. */
export type ViewModel = ReturnType<QuickstartsApp['renderVals']>;
