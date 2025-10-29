const prompt = require("prompt-sync")({ sigint: true });

let tareas = [];

function menu() {
    console.log("\n== LISTA DE TAREAS : ==");
    console.log("1. Ver todas las tareas");
    console.log("2. Agregar una tarea");
    console.log("3. Buscar tarea por título");
    console.log("4. Editar descripción");
    console.log("5. Cambiar estado");
    console.log("0. Salir");
}

function verTareas() {
    if (tareas.length === 0) {
        console.log("No hay tareas registradas.");
    } else {
        tareas.forEach((tarea, index) => {
            console.log(`\nTarea #${index + 1}`);
            console.log("Título:", tarea.titulo);
            console.log("Descripción:", tarea.descripcion);
            console.log("Dificultad:", tarea.dificultad);
            console.log("Estado:", tarea.estado);
        });
    }
}

function agregarTarea (){
    let titulo = prompt("Ingrese el título de la tarea: ");
    let descripcion = prompt("Ingrese la descripción: ");
    let dificultad = prompt("Ingrese la dificultad (fácil, media, difícil): ");
    let estado = "pendiente"; //El Estado es inicial por defecto

    tareas.push({ titulo, descripcion, dificultad, estado });
    console.log("Tarea agregada con éxito.");
}

function buscarTarea() {
    let busqueda = prompt("Ingrese el título a buscar: ");
    let tarea = tareas.find(t => t.titulo.toLowerCase() === busqueda.toLowerCase());

    if (tarea) {
        console.log("Título:", tarea.titulo);
        console.log("Descripción:", tarea.descripcion);
        console.log("Dificultad:", tarea.dificultad);
        console.log("Estado:", tarea.estado);
    } else {
        console.log("Tarea no encontrada.");
    }
}

function editarDescripcion() {
    let tituloBuscar = prompt("Ingrese el título de la tarea a editar: ");
    let tarea = tareas.find(t => t.titulo.toLowerCase() === tituloBuscar.toLowerCase());

    if (tarea) {
        tarea.descripcion = prompt("Ingrese la nueva descripción: ");
        console.log("Descripción actualizada.");
    } else {
        console.log("Tarea no encontrada.");
    }
}

function cambiarEstado() {
    let tituloBuscar = prompt("Ingrese el título de la tarea a modificar: ");
    let tarea = tareas.find(t => t.titulo.toLowerCase() === tituloBuscar.toLowerCase());

    if (tarea) {
        console.log("Estados disponibles: pendiente, en curso, terminada");
        let nuevoEstado = prompt("Ingrese el nuevo estado: ");
        if (["pendiente", "en curso", "terminada"].includes(nuevoEstado.toLowerCase())) {
            tarea.estado = nuevoEstado.toLowerCase();
            console.log("Estado actualizado.");
        } else {
            console.log("Estado no válido.");
        }
    } else {
        console.log("Tarea no encontrada.");
    }
}

// Bucle principal
let opcion;
do {
    menu();
    opcion = prompt("Seleccione una opción: ");
    switch (opcion) {
        case "1":
            verTareas();
            break;
        case "2":
            agregarTarea();
            break;
        case "3":
            buscarTarea();
            break;
        case "4":
            editarDescripcion();
            break;
        case "5":
            cambiarEstado();
            break;
        case "0":
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción inválida.");
            break;
    }
} while (opcion !== "0");