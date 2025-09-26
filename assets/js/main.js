import './utils.js';
import './cart.js';
import './products.js';

// Conexión con otros archivos JS y CSS en tu proyecto

// Ejemplo: Importar otros módulos JS (si usas módulos ES6)

// Ejemplo: Agregar archivos CSS dinámicamente (opcional)
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '../css/styles.css';
document.head.appendChild(link);

// Si usas jQuery o Bootstrap desde CDN, puedes agregarlos así:
const scriptJquery = document.createElement('script');
scriptJquery.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(scriptJquery);

// Puedes agregar más conexiones según los archivos que tengas en tu proyecto