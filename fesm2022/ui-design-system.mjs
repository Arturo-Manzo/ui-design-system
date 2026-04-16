import * as i0 from '@angular/core';
import { inject, ElementRef, HostBinding, Input, Directive, signal, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

class ButtonDirective {
    elementRef = inject((ElementRef));
    explicitVariant = null;
    explicitSize = null;
    inferredVariant = 'secondary';
    inferredSize = 'md';
    set appButton(value) {
        this.explicitVariant = this.isVariant(value) ? value : null;
    }
    set buttonSize(value) {
        this.explicitSize = this.isSize(value) ? value : null;
    }
    uiButtonClass = true;
    get variantAttr() {
        return this.explicitVariant ?? this.inferredVariant;
    }
    get sizeAttr() {
        return this.explicitSize ?? this.inferredSize;
    }
    ngOnInit() {
        const classes = this.elementRef.nativeElement.classList;
        this.inferredVariant = this.detectVariant(classes, this.elementRef.nativeElement.type);
        this.inferredSize = this.detectSize(classes);
    }
    detectVariant(classes, type) {
        if (classes.contains('btn-success'))
            return 'primary';
        if (classes.contains('btn-warning'))
            return 'warning';
        if (classes.contains('btn-danger'))
            return 'danger';
        if (classes.contains('btn-info'))
            return 'info';
        if (classes.contains('btn-neutral'))
            return 'neutral';
        return type === 'submit' ? 'primary' : 'secondary';
    }
    detectSize(classes) {
        if (classes.contains('text-xs') || classes.contains('rounded-md'))
            return 'sm';
        if (classes.contains('px-6') || classes.contains('py-3') || classes.contains('rounded-xl'))
            return 'lg';
        return 'md';
    }
    isVariant(value) {
        return (value === 'primary' ||
            value === 'secondary' ||
            value === 'neutral' ||
            value === 'info' ||
            value === 'warning' ||
            value === 'danger');
    }
    isSize(value) {
        return value === 'sm' || value === 'md' || value === 'lg';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: ButtonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.8", type: ButtonDirective, isStandalone: true, selector: "button:not([fd-button])", inputs: { appButton: "appButton", buttonSize: "buttonSize" }, host: { properties: { "class.ui-btn": "this.uiButtonClass", "attr.data-btn-variant": "this.variantAttr", "attr.data-btn-size": "this.sizeAttr" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: ButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button:not([fd-button])',
                    standalone: true,
                }]
        }], propDecorators: { appButton: [{
                type: Input,
                args: ['appButton']
            }], buttonSize: [{
                type: Input
            }], uiButtonClass: [{
                type: HostBinding,
                args: ['class.ui-btn']
            }], variantAttr: [{
                type: HostBinding,
                args: ['attr.data-btn-variant']
            }], sizeAttr: [{
                type: HostBinding,
                args: ['attr.data-btn-size']
            }] } });

class ThemeService {
    document;
    static STORAGE_KEY = 'ui-theme-mode';
    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mode = signal('system', ...(ngDevMode ? [{ debugName: "mode" }] : /* istanbul ignore next */ []));
    activeTheme = signal('dark', ...(ngDevMode ? [{ debugName: "activeTheme" }] : /* istanbul ignore next */ []));
    constructor(document) {
        this.document = document;
    }
    /** Inicializa el tema tomando en cuenta preferencia y almacenamiento local */
    init() {
        const savedMode = this.readStoredMode();
        this.mode.set(savedMode);
        this.applyTheme(savedMode);
        this.mediaQuery.addEventListener('change', () => {
            if (this.mode() === 'system') {
                this.applyTheme('system');
            }
        });
    }
    setMode(mode) {
        this.mode.set(mode);
        window.localStorage.setItem(ThemeService.STORAGE_KEY, mode);
        this.applyTheme(mode);
    }
    readStoredMode() {
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
    applyTheme(mode) {
        const theme = mode === 'system' ? (this.mediaQuery.matches ? 'dark' : 'light') : mode;
        this.activeTheme.set(theme);
        const root = this.document.documentElement;
        root.classList.toggle('theme-light', theme === 'light');
        root.classList.toggle('theme-dark', theme === 'dark');
        root.style.colorScheme = theme;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: ThemeService, deps: [{ token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: ThemeService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: ThemeService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }] });

/*
 * Public API Surface of ui-design-system
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonDirective, ThemeService };
//# sourceMappingURL=ui-design-system.mjs.map
