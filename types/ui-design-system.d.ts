import * as i0 from '@angular/core';
import { OnInit } from '@angular/core';

/**
 * ButtonDirective
 * Directiva para estandarizar el estilo y comportamiento de los botones
 * Uso recomendado: <button appButton [buttonSize]="'sm' | 'md' | 'lg'">...</button>
 * Variantes: 'primary', 'secondary', 'neutral', 'info', 'warning', 'danger'
 */
type ButtonVariant = 'primary' | 'secondary' | 'neutral' | 'info' | 'warning' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';
declare class ButtonDirective implements OnInit {
    private readonly elementRef;
    private explicitVariant;
    private explicitSize;
    private inferredVariant;
    private inferredSize;
    set appButton(value: ButtonVariant | null | undefined);
    set buttonSize(value: ButtonSize | null | undefined);
    readonly uiButtonClass = true;
    get variantAttr(): ButtonVariant;
    get sizeAttr(): ButtonSize;
    ngOnInit(): void;
    private detectVariant;
    private detectSize;
    private isVariant;
    private isSize;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonDirective, "button:not([fd-button])", never, { "appButton": { "alias": "appButton"; "required": false; }; "buttonSize": { "alias": "buttonSize"; "required": false; }; }, {}, never, never, true, never>;
}

/**
 * ThemeService
 * Provee gestión centralizada de tema claro/oscuro/sistema.
 * Expone un signal para el modo y un signal 'activeTheme' para el tema efectivo.
 * Para inicializar el tema al cargar la app, llama themeService.init().
 */
type ThemeMode = 'system' | 'light' | 'dark';
declare class ThemeService {
    private readonly document;
    private static readonly STORAGE_KEY;
    private readonly mediaQuery;
    readonly mode: i0.WritableSignal<ThemeMode>;
    readonly activeTheme: i0.WritableSignal<"light" | "dark">;
    constructor(document: Document);
    /** Inicializa el tema tomando en cuenta preferencia y almacenamiento local */
    init(): void;
    setMode(mode: ThemeMode): void;
    private readStoredMode;
    /**
     * Aplica clases en <html> y colorScheme según el modo.
     * theme-light / theme-dark para CSS y colorScheme para formularios nativos
     */
    private applyTheme;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThemeService>;
}

export { ButtonDirective, ThemeService };
export type { ThemeMode };
