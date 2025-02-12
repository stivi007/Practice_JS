


//bucles 

// let count = 0;
// let encontrar = 2;
//while
// while (count < 20) {
//     if(encontrar < count){
//         throw new Error("Error");
//     }
//     if(count == encontrar){
//         encontrar = count;
//         console.log(`el numero que se buscas es: ${encontrar}`);
//         count = 20;
//     }
//     console.log(count);
//     count++;
// }
//--------------------------------------------------------------------------------------------
// arreglos
// let arrNumbers = [1,2,3,4,5,6,7,8,9];
// console.log('-------------------------------------------------------');

//for
// for (let i = 0; i < arrNumbers.length; i++) {
//     console.log(arrNumbers[i]);
// }
// // metodo map
// if(arrNumbers.length == 0){
//     throw new Error('El arrelo esta basio')
// }
// let arrNumbers2 = arrNumbers.map((number) => {
//     return number * 2;
// });
// console.log(arrNumbers2);


//--------------------------------------------------------------------------------------------
// reduce
// const products=[
//     {name: 'laptop', price: 2000},
//     {name: 'desktop', price: 1500},
// ]

// const totalPrice = products.reduce((total, product) => {
//     return total + product.price;
// },0);
// console.log('El total a pagar es: ',totalPrice);

// //filter
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const evenNumbers = numbers.filter((number) => {
//     return number % 2 == 0;
// });
// console.log(evenNumbers);

//--------------------------------------------------------------------------------------------
// funcion que recibe un arreglo de nombres y retorna el nombre mas largo
// const largestNameOfArray=( nameArray ) =>{

//     let largestName = '';

//     for( let i = 0; i < nameArray.length; i ++ ) {

//         let name = nameArray[i];

//         if ( name.length > largestName.length ) {
//             largestName = name;
//         }

//     }

//     return largestName;
// }


// let heroes = ['Deadpool', 'Ciclope', 'Magnetooooooooooooooooooooooooooooooooooo', 'Profesor Charles Xavier']; 
// let hero = largestNameOfArray( heroes );
// console.log( hero ); // Profesor Charles Xavier

//--------------------------------------------------------------------------------------------
// funcion que recibe un arreglo de nombres y retorna los nombres que empiezan con una letra en especifico
// const heroesThatStartsWith= ( nameList, letter )=> {
   
//     letter = letter.toUpperCase();
//     let newNameList = [];

//     for( let name of nameList ) {
//         if ( name.startsWith(letter) ) {
//             newNameList.push( name );
//         }
//     }

//     return newNameList;
// }


// let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']; 
// let herosWithLetterS = heroesThatStartsWith( heroes, 'd' );
// console.log( herosWithLetterS ); // She Hulk, Spiderman

//--------------------------------------------------------------------------------------------
//destructuracion de objetos
// const person={
//     names: 'Juan',
//     age: 25,
//     isStudent: false,
//     school: 'Udemy',
//     courses: ['React', 'Node', 'MongoDB']
// }

// const {name, age, isStudent, school, courses} = person;
// console.log(`Hola soy ${names} tengo ${age} años y estudio en ${school}`);
// console.log(`Los cursos que tome en ${school} son: ${courses}`);

// // //--------------------------------------------------------------------------------------------
// //destructuracion de arreglos
// const numbers = [12,22,32,42,5,6,7,8,9,10];
// const [first, second, third, fourth] = numbers;
// console.log(first, second, third, fourth);


// class NameAnalyzer {
//     constructor(nameArray) {
//         this.nameArray = nameArray;
//     }

//     largestName() {
//         let largestName = '';

//         for (let i = 0; i < this.nameArray.length; i++) {
//             let name = this.nameArray[i];

//             if (name.length > largestName.length) {
//                 largestName = name;
//             }
//         }

//         return largestName;
//     }
// }

// let heroes = ['Deadpool and iron man and spider man', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
// let nameAnalyzer = new NameAnalyzer(heroes);
// let hero = nameAnalyzer.largestName();
// console.log(hero);

// const heroesThatStartsWith= ( nameList, letter )=> {
   
//     letter = letter.toUpperCase();
//     let newNameList = [];

//     for( let name of nameList ) {
//         if ( name.startsWith(letter) ) {
//             newNameList.push( name );
//         }
//     }

//     return newNameList;
// }




class HerosAnalyzer {
    constructor(nameList,letter){
        this.nameList = nameList;
        this.letter = letter;
    }
    heroesThatStartsWith(){
        this.letter = this.letter.toUpperCase();
    let newNameList = [];

    for( let name of this.nameList ) {
        if ( name.startsWith(this.letter) ) {
            newNameList.push( name );
        }
    }

    return newNameList;
    }
}
let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']; 
let herosAnalyzer = new HerosAnalyzer( heroes, 'h' );
let herosWithLetterS = herosAnalyzer.heroesThatStartsWith();
console.log( herosWithLetterS ); 