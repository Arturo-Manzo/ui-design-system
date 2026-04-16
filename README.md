# ui-design-system

**Librería independiente de Angular para centralizar el sistema de diseño visual estándar (migrado desde DeskIQ) para todas tus aplicaciones Angular.**

---

## Características principales
- Variables y utilidades CSS listas para uso global (modo claro/oscuro)
- Directiva `ButtonDirective` para uniformidad visual y lógica de botones
- Servicio `ThemeService` para gestión de tema light/dark/system centralizado

---
## Instalación
### 1. Instala la librería en tus aplicaciones (AScheduler, DeskIQ, etc)
```bash
npm install ../ui-design-system/dist/ui-design-system # o instala desde npm si se publica
```

---
## Uso de estilos globales
**Importa el SCSS de la librería en el global styles de tu app:**

1. Agrega en tu `src/styles.scss` o equivalente:
   ```scss
   @import 'ui-design-system/styles/ui-design-system.scss';
   ```
2. Asegúrate que el path de Node/NPM esté bien resuelto (o ajusta según configuración `angular.json` si es necesario).
3. Ahora tendrás todas las variables, utilidades y estilos base UI disponibles en tu aplicación.

---
## Uso de la Directiva `ButtonDirective`
1. Importa la directiva en tu módulo/component standalone:
```ts
import { ButtonDirective } from 'ui-design-system';
```
2. Úsala en tus plantillas:
```html
<button appButton buttonSize="md">Botón Primario</button>
```

---
## Gestión de temas: `ThemeService`
Sirve para inicializar y cambiar modo claro/oscuro/system de forma global:
1. Inyecta e inicializa el servicio (ejemplo en `AppComponent`):
```ts
import { ThemeService } from 'ui-design-system';

constructor(private themeService: ThemeService) {}

ngOnInit() {
  this.themeService.init();
}
```
2. Cambia el modo mediante:
```ts
themeService.setMode('dark' | 'light' | 'system');
```
---
## Build y publicación
- Para construir la librería:
  ```bash
  ng build ui-design-system
  ```
- Para publicarla en tu registro privado:
  ```bash
  cd dist/ui-design-system && npm publish
  ```

---
## Mejores prácticas
- Revisa los comentarios en cada archivo fuente para detalles de extensión.
- Si expandes el sistema, mantén consistencia en nombres y comentado limpio.
- Versiona la librería y actualízala en todos los proyectos cada vez que evoluciones el sistema de diseño.

---

> Para más detalles y ejemplos, revisa los archivos fuente y los comentarios del código. ¡Bienvenido a tu propio sistema de diseño reusable!