/*
24.	Declara el array nums=[9,4,2,8]. Verifica si la suma de todos los 
elementos del array es mayor que 20. Muestra en un alert "Sí" o "No".
*/
'use strict'

let nums6 = [9, 4, 2, 8]; 
alert(nums6.reduce((a, b) => a + b, 0) > 20 ? "Sí" : "No");