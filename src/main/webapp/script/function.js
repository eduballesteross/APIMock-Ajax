/**
 * Esta función envía los datos de registro de un club a una API para guardar la información en el servidor. 
 * Se ejecuta al intentar registrar un nuevo club.
 * 
 * @author ebp
 * @date 31/10/24 
 */
function registerClub() {
    const nombreClub = document.getElementById('nombre_club').value;
    const coloresClub = document.getElementById('colores_club').value;
    const emailClub = document.getElementById('mail_club').value;
    const passwordClub = document.getElementById('contraseña_club').value;
    const confirmPassword = document.getElementById('confirmar_contraseña').value;

    if (passwordClub !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    const data = {
        nombre_club: nombreClub,
        colores_club: coloresClub,
        mail_club: emailClub,
        contraseña_club: passwordClub
    };

    fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            alert(data.message); // Club registrado exitosamente
        }
    })
    .catch(error => console.error('Error:', error));
}

/**
 * Esta función intenta iniciar sesión con los datos proporcionados por el usuario, enviándolos a la API y validando la respuesta.
 * @author rp
 * @date 31/10/24
 */
function loginClub() {
    
    const emailClub = document.getElementById('mail_club_login').value;
    const passwordClub = document.getElementById('contraseña_club_login').value;

    const data = {
        mail_club: emailClub,
        contraseña_club: passwordClub
    };

    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error); // Error de inicio de sesión
        } else {
            alert(data.message); // Inicio de sesión exitoso
            window.location.href = "delete.html";
            // Aquí puedes redirigir al usuario o actualizar la interfaz
        }
    })
    .catch(error => console.error('Error:', error));
}

/**
 * Esta función intenta borrar los clubes con los datos proporcionados por el usuario, enviándolos a la API y borrandolos de la misma.
 * @author rp
 * @date 31/10/24
 */

document.addEventListener("DOMContentLoaded", () => {
    const deleteBtn = document.getElementById('deleteBtn');
    const confirmation = document.getElementById('confirmation');
    const confirmDelete = document.getElementById('confirmDelete');
    const clubNameInput = document.getElementById('clubName');
    const mailClubInput = document.getElementById('mail_club');
    const passwordClubInput = document.getElementById('contraseña_club');
    const message = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    // Mostrar confirmación cuando se hace clic en eliminar
    deleteBtn.addEventListener('click', () => {
        // Verificar si el correo y la contraseña están completos
        const email = mailClubInput.value.trim();
        const password = passwordClubInput.value.trim();
        
        if (email === '' || password === '') {
            message.textContent = 'Por favor, ingresa el correo y la contraseña del club.';
            message.style.color = '#ff4747'; // Error
            return;
        }

        // Mostrar el cuadro de confirmación
        confirmation.style.display = 'block';
        message.textContent = ''; // Limpiar mensaje de error
    });

    // Confirmar eliminación
    confirmDelete.addEventListener('click', () => {
        const clubName = clubNameInput.value.trim();
        const email = mailClubInput.value.trim();
        const password = passwordClubInput.value.trim();

        // Verificar si el nombre del club coincide
        if (clubName === '') {
            message.textContent = 'Por favor, ingresa el nombre del club para confirmar.';
            message.style.color = '#ff4747'; // Error en el nombre
            return;
        }

        // Llamada a la API para eliminar el club
        const data = { 
            mail_club: email,
            contraseña_club: password 
        };

        fetch('http://localhost:3000/api/delete', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                message.textContent = data.error;
                message.style.color = '#ff4747';
                successMessage.textContent = ''; // Limpiar mensaje de éxito
            } else {
                successMessage.textContent = data.message;
                successMessage.style.color = '#4caf50';
                message.textContent = ''; // Limpiar mensaje de error
                clubNameInput.value = ''; // Limpiar el campo del nombre
                passwordClubInput.value = ''; // Limpiar la contraseña
                confirmation.style.display = 'none'; // Ocultar el cuadro de confirmación
            }
        })
        .catch(error => {
            console.error('Error:', error);
            message.textContent = 'Hubo un error al intentar eliminar el club.';
            message.style.color = '#ff4747';
        });
    });
});



