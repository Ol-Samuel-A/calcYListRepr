class Persona
{
    constructor (nommbre, edad)
    {
        this.nommbre=nommbre;
        this.edad=edad;
    }
    presentarse()
    {
        console.log("Hola mi nombre es: " + nombre + " y tengo " + edad + " años");
    }
}
class Profesor extends Persona
{
    constructor (nombre, edad, materia, grupo)
    {
        super(nombre, edad)
        this.materia=materia;
        this.grupo=grupo;
    }
    presentarse()
    {
        console.log("Hola mi nombre es: " + nombre + " y tengo " + edad + " años y doy la materia de " + materia);
    }
}
class Alumno extends Persona
{
    constructor(nombre, edad, grupo, promedio, calificaciones)
    {
        super(nombre, edad)
        this.grupo=grupo;
        this.promedio = promedio;
        this.calificaciones=calificaciones
    }
    presentarse()
    {
        console.log("Hola mi nombre es: " + nombre + " y tengo " + edad + " años y estroy en el grupo " + grupo);
    }
    obtenerprom()
    {
        let suma=0
        for(let i=0;i <this.calificaciones.lenght;i++)
        {
            suma+=this.calificaciones[i];
        }
        this.promedio = suma/this.calificaciones.lenght;
        console.log("El promedio de " + this.nombre + "fue de " + this.promedio)
    }
    obtenerMax()
    {
        let maximo = Math(this.calificaciones);
        console.log("La calificacion mas alta es de " + maximo);
    }
}

let alumno1 = new Alumno("Nicho", 19, "61D", 8);

let profesoron = new Profesor("Carlos", 29, "Computacion", "61D");

alumno1.presentarse();
profesoron.presentarse();