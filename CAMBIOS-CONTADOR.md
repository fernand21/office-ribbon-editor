# Contador de descargas

Se agregó un contador público de descargas basado en la API de GitHub Releases del repositorio `fernand21/ribbon-ui-studio`.

Cambios principales:
- Total acumulado de descargas de los assets oficiales de releases publicadas.
- Los instaladores se identifican como archivos `.exe` que no contienen `portable` en el nombre.
- El portable actual se identifica como `Ribbon.UI.Studio_Portable.exe`.
- Los antiguos paquetes `.zip` portables siguen sumando al historial para no perder las descargas de versiones anteriores.
- El EXE portable ya no se suma al contador de instaladores.
- Se conservan 2 descargas históricas del Portable v3.0.0 anterior que GitHub dejó de exponer al eliminar y volver a subir ese asset.
- El total mostrado combina las descargas actuales de la API con ese histórico conocido, evitando que el contador retroceda por reemplazar un asset.
- Los contadores se ocultan si la API de GitHub no está disponible, sin bloquear la página.
- Textos localizados para el indicador de descargas.

Archivos principales modificados:
- `app/page.tsx`
- `app/globals.css`
