export default class App {
    sumatoriaSerieUno(numero){
        let suma;
        for(let i = 1; i <= numero; i++){
            console.log(i + 1);
        }
    }
}

let app = new App();

//Demostracion de la funcion sumatoriaSerieUno.
console.log(app.sumatoriaSerieUno(20));