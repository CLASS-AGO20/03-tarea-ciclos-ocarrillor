export default class App {
    sumatoriaSerieUno(numero){
        let suma = 1;

        for(let i = 2; i <= numero; i++){
            suma = suma + (1/i);
        }
        return suma;
    }
}

let app = new App();

//Demostracion de la funcion sumatoriaSerieUno.
console.log(app.sumatoriaSerieUno(20));