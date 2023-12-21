let userName = ""
let password = ""
let cuenta = false
let userNameLog = ""
let passwordLog = ""
let cambiar = false
let copiaUser = ""
let copiaPass = ""
// ~~~~~~~~~~FUNCIONES~~~~~~~~~~~~~

// No se me ocurrio otra profe, esta funcion me sirve para reemplazar los alert
function mostrarMensaje(mensaje) {
    alert(mensaje);
}

mostrarMensaje("Bienvenido a la calculadora de Rulo19")
mostrarMensaje("Cree una cuenta")


// Crear cuenta del usuario y guardarla en la variable userName y password 
while (cuenta == false) {

// Cada vez que utilice en un while la condicion ( var == "") lo hago para que se cree un bucle infinito obligando al usuario a ingresar cualquier caracter 
while (userName == "" ) {
    userName = prompt ("Ingresar nombre de usuario")
}


while (password == "") {
    password = prompt ("Ingresar contraseña")
}

mostrarMensaje("cuenta creada")

cuenta = true
}
// Ahora ingresamos los datos de la cuenta que creamos
mostrarMensaje("Ingrese su usuario y contraseña")

while (userNameLog == "" && passwordLog == "") {
        userNameLog = prompt ("Ingresar su nombre de usuario")
        passwordLog = prompt ("Ingresar su contraseña")
    }

// ¿Que pasa si nos equivocamos al ingresar los datos?
    while (userNameLog != userName || passwordLog != password) {
    mostrarMensaje("El usuario o la contraseña ingresados son incorrectos")
// Podes intentar de nuevo o cambiar los datos de tu cuenta
    cambiar = confirm ("¿Desea cambiar su nombre de usuario o contraseña?")
    if (cambiar == true) {
                while (copiaUser == "") {  
                userName = prompt ("Ingresar nuevo nombre de usuario")
                copiaUser = userName
                }
                
                while (copiaPass == "") {
                password = prompt ("Ingresar nueva contraseña")
                copiaPass = password
                }
                
                mostrarMensaje("Usuario y/o contraseña cambiados")
                cambiar = false
        }
// Volvemos a ingresar los datos para entrar a nuestra cuenta
        userNameLog = prompt ("Ingresar su nombre de usuario")
        passwordLog = prompt ("Ingresar su contraseña")
    }
// Ingresamos B)
    mostrarMensaje("Has ingresado correctamente")
