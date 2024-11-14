let estudiantes= [
    {nombre: "Luis", semestre: 5, nota:15},
    {nombre: "María", semestre: 6, nota:7},
    {nombre: "Paola", semestre: 1, nota:6},
    {nombre: "Eva", semestre: 4, nota:14},
    {nombre: "Daniel", semestre: 5, nota:18},
    {nombre: "José", semestre: 3, nota:20},
    {nombre: "Alejandro", semestre: 5, nota:17},
    {nombre: "Sergio", semestre: 8, nota:1},
    {nombre: "Johel", semestre: 1, nota:9},
    {nombre: "Patricia", semestre: 6, nota:10}
];

let nombresDeAprobados = (estudiantes) =>{
    let estudiantesFiltrados=[];
    for(let i=0; i<estudiantes.length;i++){
        if(estudiantes[i].nota>=10){
            estudiantesFiltrados.push(estudiantes[i].nombre);
    }
}
    return estudiantesFiltrados;
};

let salida= document.getElementById("salida");
salida.innerHTML= `Estudiantes Aprobados:<br><br>`;
salida.innerHTML+=JSON.stringify(nombresDeAprobados(estudiantes)) + "<br>";