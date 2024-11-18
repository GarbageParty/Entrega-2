// Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:

// Si la nota es 90 o más, el estudiante aprueba con "Excelente".
// Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
// Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
// Si la nota es menor de 60, el estudiante no aprueba.

let nota = 100

if (nota >= 90){
    console.log("Exelente")
} else if (nota >= 75 && nota < 89) { 
    console.log("Bien")
} else if (nota >= 60 && nota < 74) {
    console.log("Suficiente")
} else if (nota <= 59) {
    console.log("No aprueba");
}

// Adicionalmente - Prueba diferentes valores para la variable nota (por ejemplo, 45, 60, 75, 0) para ver cómo cambia el resultado.

let notaAdicional = 100

if (notaAdicional >= 75){
    console.log("Exelente")
} else if (notaAdicional >= 60 && notaAdicional < 74) { 
    console.log("Bien")
} else if (notaAdicional >= 45 && notaAdicional < 59) {
    console.log("Suficiente")
} else if (notaAdicional <= 44) {
    console.log("No aprueba");
}