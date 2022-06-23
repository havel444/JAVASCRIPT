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
// let age_gab = prompt('Enter you age: ')

// if(age_gab === ''){
//     console.log('ERROR')
// } else if(age_gab <= 13){
//     console.log('You can not work')
// } else if((age_gab >= 14) && (age_gab <= 17)){
//     console.log('You work with restrictions')
// } else if((age_gab >= 18) && (age_gab <= 65)){
//     console.log('You can work')
// } else{
//     console.log('You can retire')
// } 


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

//TODO PRACTICA

//? EJEMPLO

//* IF CONSULTORIO
// let nombre_peticion = prompt('Ingrese su nombre: ')
// let peticion = Number(prompt('Ingrese su nemero de la maquina: '));
// let cantidad = Number(prompt('Ingrese su cantidad de errores: '));
// let hola = prompt('Marco: Bienvenido, hola');


// if((peticion > 1000 ) && (hola === 'hola') && ((cantidad >= 10) && (cantidad <= 50))){
//     alert(`Marcos: Hola, ${nombre_peticion} su maquina ${peticion} fue reparada de ${cantidad} errores y esta lista para retirar.`)
// }else{
//     alert('Datos incompletos. Vuelva a intentarlo.')
// }


//* IF UBICACION
// let localidad = prompt('Ingrese su localidad: ');
// let altura = new Number(prompt('Ingrese su altura:'));
// let comuna = new Number(prompt('Ingrese su numero de comuna: '));

// if((localidad === (('castillo') || ('argentina') || ('saavedra'))) && ((altura < 4000) && (altura > 2000)) && ((comuna < 10) && (comuna > 5))){
//     alert('Usted vive en el barrio "Flores".');
// }else if((localidad === '') || (altura === '') || (comuna === '')){  
//     alert('Datos incompletos.')
// }else{
//     alert('Datos incorrectos.')
// }


//* IF DATOS
// let nombre_dato = prompt('Ingrese el nombre completo:');
// let numero_telefono = Number(prompt('Ingrese el numero de telefono: '));
// let numero_id = Number(prompt('Ingrese la id: '));

// if(nombre_dato != ''){
//     console.log(`El telefono de ${nombre_dato} es 1146278888`);
// } else if(numero_telefono > 1000){
//     console.log('El numero de telefono esta asociado al nombre de: Juan.');
// } else if((numero_id < 50) && (numero_id > 10)){
//     console.log('La id esta asociada al trabajador: Pedro.')
// } else if((nombre_dato == '') && (numero_telefono == '') && (numero_id == '')){ 
//     console.log('Datos incompletos')
// } else{
//     console.log('Datos incorrectos.')
// } 


//* IF EJEMPLO CODE
// let age_s = Number(prompt('Enter you age: '))

// if(age_s == ''){
//     console.log('Aun no naces.')
// } else if(age_s <= 6){
//     console.log('Eres muy joven.')
// } else if(age_s <= 12){
//     console.log('Estas en la flor de la juventud.')
// } else if(age_s <= 17){
//     console.log('Tratas con la adolescencia.')
// } else if(age_s >= 18 && age_s < 40){
//     console.log('Empiezas tu vida adulta.')
// } else if(age_s >= 40 && age_s < 60){
//     console.log('Empiezas la segunda etapa de tu vida.')
// } else if(age_s < 80){
//     console.log('Vives los ultimos dias de tu vida.')
// } else{
//     console.log('SIGUES CON VIDA???!!!.')
// }












