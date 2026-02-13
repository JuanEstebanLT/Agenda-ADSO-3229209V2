let aprendices = [
    { id: 1, nombre: "Ana", ficha: 3223874, nota: 4.2 },
    { id: 2, nombre: "Luis", ficha: 3223874, nota: 3.5 },
    { id: 3, nombre: "María", ficha: 3223875, nota: 4.8 },
    { id: 4, nombre: "Lucia", ficha: 3223875, nota: 2.5}
]

//Funcion filtrar aprobados
const aprobados = aprendices.filter(a => a.nota >= 3.0) 

//Calcular promedio 
const notas = aprendices.map(a => a.nota)
const suma = notas.reduce((acum, n) => {
    return acum + n;})
const prom = suma / notas.length
 
//Buscar por nombre
const nombres = aprendices.filter(u => u.nombre === "Ana")

//Nombres
const nombres2 = aprendices.map(a => a.nombre)
    