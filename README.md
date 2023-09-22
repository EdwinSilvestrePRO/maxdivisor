# maxDivisor

En ocaciones es necesario una herramienta que nos
proporcione la utilidad de obtener el máximo común
divisor. Para esto está el paquete **maxdivisor**,
que contiene la función *mcd()* capaz de obtener el
**Máximo común divisor** de números naturales.

Su uso consiste en la utilización de la función *mcd()* que por
defecto si no se define parámetros numéricos retorna *null*, se
puede pasar parámetros pero esos datos deben de cumplir las siguientes
condisiones:

```javascript
// El tipo de dato siempre es numérico + 
// Debe de ser números naturales. +
// Nunca debe de ser Negativo. +
// Nunca debe de irracional o fraccionario +
```

## Aquí un ejemplo de implementación:

```javascript
import { mcd } from 'maxdivisor';

console.log( mcd() ); // null
console.log( mcd(9, 81) ); // 9
console.log( mcd(13, 14) ); // 1
console.log( mcd(7,9, 81) ); // 1
console.log( mcd(12, 81, 9) ); // 3

```
> Un paquete para encontrar el mcd, esto está chévere
-- Neverneit Sober