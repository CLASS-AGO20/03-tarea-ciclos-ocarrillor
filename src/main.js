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

    obtenerMultiplos(inicio, fin){
        let cont = inicio, cadena = "";
        do{
            if(cont % 3 == 0){
                cadena = cadena + cont;
            }
            cont++;
        }while(cont <= fin);
        return cadena;
    }

    obtenerImpares(numero1, numero2){
        let mayor, menor, cont = 1, impares = "";
        if(numero1 > numero2){
            mayor = numero1;
            menor = numero2;
        }else{
            mayor = numero2;
            menor = numero1;
        }

        for(let i = mayor; i >= menor; i--){
            if(i % 2 != 0){
                if(cont == 1){
                    impares = impares + i;
                    cont++;
                }else{
                    impares = impares + "," + i;
                }
            }
        }
        return impares;
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

//Demostracion de la funcion obtenerMultiplos.
console.log(app.obtenerMultiplos(10,25));

//Demostracion de la funcion obtenerImpares.
console.log(app.obtenerImpares(5,10));
console.log(app.obtenerImpares(10,5));