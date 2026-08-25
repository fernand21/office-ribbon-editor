# Cambios: contador histórico + estilo Office

## Contadores
- El contador principal suma todas las descargas de assets `.exe` y `.zip` de todas las GitHub Releases publicadas.
- El contador del instalador ahora suma el histórico completo de todos los assets `.exe`.
- El contador del paquete portátil ahora suma el histórico completo de todos los assets `.zip`.
- Los contadores no inventan ni multiplican descargas: muestran los `download_count` acumulados que entrega GitHub Releases.

## Diseño
- Cabecera translúcida tipo Fluent con línea multicolor.
- Hero con fondo suave, acentos por Excel/Word/PowerPoint y chips visuales.
- Botón principal y contador con más jerarquía visual.
- Tarjetas de descarga diferenciadas para EXE y ZIP.
- Contadores de descarga más visibles.
- Franja de compatibilidad con colores por aplicación.
- Ajustes responsive para móvil.

## Archivos modificados
- `app/page.tsx`
- `app/globals.css`
