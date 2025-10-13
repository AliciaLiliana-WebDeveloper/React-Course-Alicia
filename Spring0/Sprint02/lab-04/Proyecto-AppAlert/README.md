1. Importo el componente: <script type="module" src="app-alert.js"></script>
2. Uso el tag <app-alert type="success|info|warning|error" message="Texto" open></app-alert>
3. Cambio dinámicamente atributos con setAttribute('type'|'message'|'open', value)
4. Escucho el evento 'alert-close' para manejar cierres: addEventListener('alert-close', ...)
5. Shadow DOM encapsula estilos, iconos SVG y asegura accesibilidad automáticamente
