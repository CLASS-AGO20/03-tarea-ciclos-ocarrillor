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

    esPrimo(numero){
        let cont = 1, acum = 0;
            do{
                if(numero % cont == 0){
                    acum++;
                }
                cont++;
            }while(cont <= numero);
        
        if(acum == 2){
            return true;
        }else{
            return false;
        }
    }
}

let app = new App();

//Demostracion de la funcion sumatoriaSerieUno.
console.log(app.sumatoriaSerieUno(20));

//Demostracion de la funcion sumatoriaSerieDos.
console.log(app.sumatoriaSerieDos(5));

//Demostracion de la funcion esPrimo.
console.log(app.esPrimo(5));
console.log(app.esPrimo(6));