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
function deleteClub() {
    const emailClub = document.getElementById('mail_club').value;

    const data = {
        mail_club: emailClub
    };

    fetch('http://localhost:3000/api/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error); // Error al eliminar
        } else {
            alert(data.message); // Club eliminado exitosamente
            // Aquí puedes limpiar los campos o actualizar la interfaz
        }
    })
    .catch(error => console.error('Error:', error));
}