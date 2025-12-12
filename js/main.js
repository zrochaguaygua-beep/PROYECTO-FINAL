// --- VARIABLES GLOBALES (Nuestra "Base de Datos" temporal) ---
var usuarioGuardado = "";
var passGuardada = "";
var totalCarrito = 0;
// Lista de mascotas registradas para ejemplo
var mascotasRegistradas = []; 

// --- FUNCIONES DE SESIÓN ---

// 1. Guardar el registro
function guardarUsuario() {
    var u = document.getElementById("nuevo-usuario").value;
    var p = document.getElementById("nueva-pass").value;
    var msg = document.getElementById("msg-registro"); // Obtener el párrafo del mensaje

    // Validar campos vacíos
    if (u === "" || p === "") {
        msg.innerText = "🚨 Por favor, complete todos los campos para crear su cuenta.";
        msg.style.color = "red";
        return; // Detener la función
    }

    usuarioGuardado = u;
    passGuardada = p;
    msg.innerText = "✅ ¡Cuenta creada con éxito! Ahora inicie sesión.";
    msg.style.color = "green";
    
    // Pasamos al Login después de un breve momento
    setTimeout(function() {
        document.getElementById("registro-usuario").style.display = "none";
        document.getElementById("login-module").style.display = "block";
        document.getElementById("msg-registro").innerText = ""; // Limpiar el mensaje
    }, 1500); 
}

// 2. Validar el Login
function validarLogin() {
    var u = document.getElementById("user-login").value;
    var p = document.getElementById("pass-login").value;
    var msg = document.getElementById("msg-login");

    if (u === usuarioGuardado && p === passGuardada) {
        msg.innerText = "👍 Ingreso exitoso.";
        msg.style.color = "green";
        
        // Entrar al sistema
        setTimeout(function() {
            document.getElementById("login-module").style.display = "none";
            document.getElementById("sistema-spa").style.display = "block";
            cambiarVista('seccion-mascotas'); // Mostrar la primera sección del sistema
        }, 500);

    } else {
        msg.innerText = "❌ Datos incorrectos. Intente de nuevo.";
        msg.style.color = "red";
    }
}

// 3. Cerrar Sesión
function cerrarSesion() {
    document.getElementById("sistema-spa").style.display = "none";
    document.getElementById("login-module").style.display = "block";
    document.getElementById("msg-login").innerText = "👋 Sesión cerrada.";
    document.getElementById("msg-login").style.color = "blue";
}

// --- FUNCIONES DEL SPA ---

// Cambiar entre pestañas (Mascotas, Agenda, Carrito)
function cambiarVista(idSeccion) {
    document.getElementById("seccion-mascotas").style.display = "none";
    document.getElementById("seccion-agenda").style.display = "none";
    document.getElementById("seccion-carrito").style.display = "none";

    document.getElementById(idSeccion).style.display = "block";
}

// 4. Registrar Mascota (Modificado)
function registrarMascota() {
    var n = document.getElementById("nom-mascota").value;
    var r = document.getElementById("raza-mascota").value;
    var msg = document.getElementById("msg-mascota");

    if (n === "" || r === "") {
        msg.innerText = "🚨 Por favor, complete el nombre y la raza.";
        msg.style.color = "red";
        return;
    }
    
    // Simulación de guardado
    mascotasRegistradas.push({ nombre: n, raza: r });
    
    // Limpiar campos
    document.getElementById("nom-mascota").value = "";
    document.getElementById("raza-mascota").value = "";

    msg.innerText = "🐕 " + n + " de raza " + r + " registrado correctamente.";
    msg.style.color = "green";
}

function agendar() {
    var f = document.getElementById("fecha-cita").value;
    var m = document.getElementById("mascota-cita").value;
    var msg = document.getElementById("msg-agenda");
    
    if (f === "" || m === "") {
        msg.innerText = "🚨 Por favor, ingrese la fecha y el nombre de la mascota.";
        msg.style.color = "red";
        return;
    }

    msg.innerText = "📅 Cita guardada para " + m + " el " + f;
    msg.style.color = "green";
    
    // Limpiar campos
    document.getElementById("fecha-cita").value = "";
    document.getElementById("mascota-cita").value = "";
}

function agregar(precio) {
    totalCarrito = totalCarrito + precio;
    document.getElementById("total-precio").innerText = totalCarrito;
}