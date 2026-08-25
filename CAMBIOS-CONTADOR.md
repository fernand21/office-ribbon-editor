# Contador de descargas

Se agregó un contador público de descargas basado en la API de GitHub Releases del repositorio `fernand21/office-ribbon-editor`.

Cambios principales:
- Total acumulado de descargas de assets `.exe` y `.zip` de releases publicadas.
- Conteo de descargas del instalador `.exe` de la release estable más reciente.
- Conteo de descargas del paquete `.zip` de la release estable más reciente.
- Los contadores se ocultan si la API de GitHub no está disponible, sin bloquear la página.
- Textos localizados para el indicador de descargas.

Archivos principales modificados:
- `app/page.tsx`
- `app/globals.css`
