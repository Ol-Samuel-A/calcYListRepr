

class Calculadora{

    suma(var1,var2)
    {
        let res;
        res = var1 +var2;
        console.log("EL resultado de la suma es " + res);
    }  

    resta(var1,var2)
    {
        let res;
        res = var1 - var2;
        console.log("EL resultado de la resta es " + res);
    }

    mulplicacion(var1,var2)
    {
        let res;
        res = var1 * var2;
        console.log("EL resultado de la multiplicacion es " + res);

    }

    division(var1,var2)
    {
        if(var2 == 0)
        {
            console.log("no se puede dividir entre 0")
        }
        else
        {
            let res;
            res = var1/var2;
            console.log("EL resultado de la division es " + res);
        }
    }
}


const var1 =2;
const var2=10;
let calculadora = new Calculadora();
calculadora.suma(var1,var2);
calculadora.resta(var1,var2);
calculadora.mulplicacion(var1,var2);
calculadora.division(var1,var2);

