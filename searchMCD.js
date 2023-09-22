class MCDException extends Error {}
// El tipo de dato siempre es numérico + 
// Debe de ser números naturales. +
// Nunca debe de ser Negativo. +
// Nunca debe de irracional o fraccionario +
export function mcd (...dividendos) {
    try {
        // Deteción de errores de inserciones de datos:
		if(dividendos.length >= 1) {
			for (let factor of dividendos) {
				if(typeof factor !== "number" || factor < 1 || factor.toString().indexOf(".") !== -1) 
					throw new MCDException(`Los datos introducidos deben ser números naturales, "${factor}" no es un número natural porque ${factor} no pertenece al conjunto de los números naturales {1,2,3,...,n}.`);
				if(Number.isNaN(factor))
					throw new MCDException(`El tipo de dato ${factor} no es un número. Los valores deben de ser números naturales.`)
			}
		}
        if(dividendos.length == 0) return null;

        else if (dividendos.length == 1) 
        return dividendos[0];

        else {
            const maxValue = Math.max(...dividendos),
            { length } = dividendos;

            let factors = [];
            for (let factor = 1; factor <= maxValue; factor++) {
                let isDivisible = true;

                for (let dividendo of dividendos) {
                    let cosiente = dividendo / factor;
                    if(cosiente.toString().indexOf(".") !== -1) isDivisible = false;
                }
                if(isDivisible) {
                    function setFactor () {
                        factors.push(factor);
                        for (let index = 0; index < length; index++) {
                            let cosiente = dividendos[index] / factor;
                            dividendos[index] = cosiente;
                            if((cosiente / factor).toString().indexOf(".") !== -1) isDivisible = false;
                        }
                        if(isDivisible && factor !== 1) setFactor();
                    }
                    setFactor();
                }
                else if (dividendos.indexOf(1) !== -1) {
                    let theMcd = 1; factors.forEach(el=> theMcd*= el);
                    return theMcd;
                }
                else if (factor == maxValue) {
                    let theMcd = 1; factors.forEach(el=> theMcd*= el);
                    return theMcd;
                }
                else 0;                
            }
        }
    } catch (error) {
        return error;
    }
}