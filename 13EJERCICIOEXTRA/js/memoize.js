/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}



console.log("=== Ejemplo 1: Suma ===");
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2)); 
console.log(memoizedSum(2, 2)); 
console.log(memoizedSum(1, 2)); 

console.log("\n=== Ejemplo 2: Objetos diferentes ===");
const merge = (a, b) => ({...a, ...b});
const memoizedMerge = memoize(merge);

console.log(memoizedMerge({}, {})); 
console.log(memoizedMerge({}, {})); 
console.log(memoizedMerge({}, {})); 

console.log("\n=== Ejemplo 3: Mismo objeto ===");
const memoizedMerge2 = memoize(merge);
const o = {};
console.log(memoizedMerge2(o, o)); 
console.log(memoizedMerge2(o, o)); 
console.log(memoizedMerge2(o, o));


console.log("\n=== Ejemplo adicional: Factorial ===");
const factorial = (n) => {
    console.log(`  Calculando factorial de ${n}`);
    return n <= 1 ? 1 : n * factorial(n - 1);
};
const memoizedFactorial = memoize(factorial);

console.log("Primera vez factorial(5):", memoizedFactorial(5));
console.log("Segunda vez factorial(5):", memoizedFactorial(5)); // Desde caché
console.log("factorial(3):", memoizedFactorial(3)); // Nueva llamada