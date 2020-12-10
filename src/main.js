export default class App {
    sumatoriaSerieUno(numero){
        let suma = 1;

        for(let i = 2; i <= numero; i++){
            suma = suma + (1/i);
        }
        return suma;
    }

    sumatoriaSerieDos(numero){
        let cont = 2, suma = 1;
        while(cont <= numero){
            if(cont % 2 == 0){
                suma = suma + (1/cont);
            }else{
                suma = suma - (1/cont);
            }
            cont++;
        }
        return suma;
    }
}

let app = new App();

//Demostracion de la funcion sumatoriaSerieUno.
console.log(app.sumatoriaSerieUno(20));

//Demostracion de la funcion sumatoriaSerieUno.
console.log(app.sumatoriaSerieDos(5));