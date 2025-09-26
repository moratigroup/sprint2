document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registroForm');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Captura los datos del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Construye el objeto de usuario
            const usuario = {
                nombre,
                email,
                password
            };

            try {
                // Envía los datos al backend para registrarlos en la base de datos
                const response = await fetch('/api/usuarios/registrar', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(usuario)
                });

                const data = await response.json();

                if (response.ok) {
                    alert('Usuario registrado exitosamente');
                    form.reset();
                } else {
                    alert(data.error || 'Error al registrar usuario');
                }
            } catch (error) {
                alert('Error de conexión con el servidor');
            }
        });
    }
});

function registerUser() {
    // Esta función puede ser llamada desde el HTML si es necesario
    const form = document.getElementById('registroForm');
    form.dispatchEvent(new Event('submit'));
}   