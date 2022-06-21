//TODO CONTROL DE FLUJO 

//? IF ESLE ELSE IF

//* IF: BASICO
//# ejemplo de contraseña para ingresar una pagina
// let number = Number(prompt('Enter the password: '));

// if(number == 222){
//     alert('Welcome');
// }else{
//     alert('Incorrect password');
// }

// console.log('asd')

//* IF ELSE IF Y ELSE
//# Ejemplo basico con la edad sin usar "and" dentro del parentesis
// let age = Number(prompt('Enter your age: '))

// if(age < 16){
//         alert('You can not work');
// }
// else if(age < 18){
//     alert('You can work with restrictions');
// }
// else if(age < 65){
//     alert('You can work')
// }
// else{
//     alert('You can retire')
// }

//* === y !==: Extrictamente
//# forma correcta de igualar y diferenciar.
// let numeral_texto = '4';
// let numeral = 4;

// console.log(numeral === numeral_texto)
// console.log(numeral !== numeral_texto)


//* &&: y.
let age_gab = prompt('Enter you age: ')

if(age_gab <=13){
    console.log('You can not work')
} else if((age_gab >= 14) && (age_gab <= 17)){
    console.log('You work with restrictions')
} else if((age_gab >= 18) && (age_gab <= 65)){
    console.log('You can work')
} 










//? BOOLEAN

//* BOOLEAN: BASICO
//# usar el comando boolean cuando ya este asignado.
//# ejemplo: validar si la casa es habitable por su cantidad de baños.
// let aseo = Number(prompt('Ingrese la cantidad: '));
// let casa = (aseo >= 4);

// if(casa == true){
//     console.log('La casa es habitable'); 
// }
// else{
//     console.log('la casa no es habitable');
// }






