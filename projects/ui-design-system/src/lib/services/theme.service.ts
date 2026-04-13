import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal, Inject } from '@angular/core';

/**
 * ThemeService
 * Provee gestión centralizada de tema claro/oscuro/sistema.
 * Expone un signal para el modo y un signal 'activeTheme' para el tema efectivo.
 * Para inicializar el tema al cargar la app, llama themeService.init().
 */
export type ThemeMode = 'system' | 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private static readonly STORAGE_KEY = 'ui-theme-mode';

  private readonly mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  readonly mode = signal<ThemeMode>('system');
  readonly activeTheme = signal<'light' | 'dark'>('dark');

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  /** Inicializa el tema tomando en cuenta preferencia y almacenamiento local */
  init(): void {
    const savedMode = this.readStoredMode();
    this.mode.set(savedMode);
    this.applyTheme(savedMode);

    this.mediaQuery.addEventListener('change', () => {
      if (this.mode() === 'system') {
        this.applyTheme('system');
      }
    });
  }

  setMode(mode: ThemeMode): void {
    this.mode.set(mode);
    window.localStorage.setItem(ThemeService.STORAGE_KEY, mode);
    this.applyTheme(mode);
  }

  private readStoredMode(): ThemeMode {
    const raw = window.localStorage.getItem(ThemeService.STORAGE_KEY);
    if (raw === 'light' || raw === 'dark' || raw === 'system') {
      return raw;
    }
    return 'system';
  }

  /**
   * Aplica clases en <html> y colorScheme según el modo.
   * theme-light / theme-dark para CSS y colorScheme para formularios nativos
   */
  private applyTheme(mode: ThemeMode): void {
    const theme = mode === 'system' ? (this.mediaQuery.matches ? 'dark' : 'light') : mode;
    this.activeTheme.set(theme);
    const root = this.document.documentElement;
    root.classList.toggle('theme-light', theme === 'light');
    root.classList.toggle('theme-dark', theme === 'dark');
    root.style.colorScheme = theme;
  }
}
