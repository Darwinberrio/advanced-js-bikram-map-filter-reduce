//RESUELVE LOS EJERCICIOS AQUI

// - [ ] 1.- Dado el array **numbers** cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función **elevados** que sea el resultado de elevar cada número a si mismo. 

    const numbers = [4, 5, 6, 7, 8, 9, 10];

    function elevados(arr) {
      return arr.map(num => Math.pow(num, num));
    }
        console.log(elevados(numbers));

//  [ ] 2.- Dado el array **foodList** con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.
// [
//     'Como soy de Italia, amo comer Pizza',
//     'Como soy de Japón, amo comer Ramen',
//     'Como soy de Valencia, amo comer Paella',
//     'Aunque no como carne, el Entrecot es sabroso'
// ]

    const foodList=['Pizza', 'Ramen', 'Paella', 'Entrecot'];
      const mensaje = foodList.map(foodList =>{
        if (foodList === 'pizza'){
          return 'Como soy de Italia, amo comer Pizza';
        }else if (foodList === 'Ramen'){
          return 'Como soy de Japón, amo comer Ramen';
        }else if (foodList === 'Paella'){
          return 'Como soy de Valencia, amo comer Paella';
        }else if (foodList === 'Entrecot'){
          return 'Aunque no como carne, el Entrecot es sabroso';
        }
    });

          console.log(mensaje);
     
// - [ ] 3.- Dado el  array **staff**, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:

// Resultado esperado
// 
//   [
//     'Pepe es The Boss y le gusta leer y ver pelis',
//     'Ana es becaria y le gusta nadar y bailar',
//     'Luis es programador y le gusta dormir y comprar',
//     'Ana es becaria y le gusta nadar y bailar',
//     'Carlos es secretario y le gusta futbol y queso'
//   ]

    const staff = [
      {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
      },
      {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
      },
      {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
      },
      {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
      }
    ];

      const frases = staff.map(persona => {
      return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies.join(' y ')}`;
    });

        console.log(frases);

// ### Filter ###

// - [ ] 4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares


    const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result4 = numbers2.filter(num => num % 2 !== 0);

        console.log(result4);



// - [ ] 5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo
// ```
// ['Que rico Tempeh me voy a comer!',
// 'Que rica Tofu burguer me voy a comer!']

    const foodList2 =[
      {
        name: 'Tempeh',
        isVeggie: true
      },
      {
        name: 'Cheesbacon burguer',
        isVeggie: false
      },
      {
        name: 'Tofu burguer',
        isVeggie: true
      },
      {
        name: 'Entrecot',
        isVeggie: false
    }];

      const result5 = foodList2.filter(foodList2 => foodList2).map(foodList2 => { return `Que rico ${foodList2.name} me voy a comer!`;
     });
            console.log(result5);


// - [ ] 6.- Dado el array **inventory**, devolver un array con los nombres de los elementos que valgan más de 300 euros.

      //    [
      //   'TV Samsung',
      //   'Viaje a Cancún'
      // ]

    const inventory = [
      {
        name: 'Mobile phone',
        price: 199
      },
      {
        name: 'TV Samsung',
        price: 459
      },
      {
        name: 'Viaje a Cancún',
        price: 600
      },
      {
        name: 'Mascarilla',
        price: 1
      }
    ];

    const mayor = inventory.filter(propiedad => propiedad.price > 300).map(propiedad => propiedad.name);

        console.log(mayor);

  


// ### Reduce ###

// - [ ] 6.- Dado el siguiente array **numeros** [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array

    const numeros = [39, 2, 4, 25, 62];

    const multi = numeros.reduce(function (acumulador, num){
      return acumulador * num;}, 1);

        console.log(multi); 

// - [ ] 7.- Concatena todos los elementos del array con reduce para que devuelva una sola frase

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

    const sentenceElements = [
      'Me',
      'llamo',
      'Darwin',
      'y',
      'quiero',
      'sentir',
      'la',
      'fuerza',
      'con',
      'javascript'
    ];

    const Concatena = sentenceElements.reduce(function (acumulador, num){ return `${acumulador} ${num}`});

        console.log(Concatena); 

// - [ ] 8.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.

// Resultado --> 60

const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];


  const montoTotal = books
  .filter(book => book.category === 'code')
  .reduce((total, book) => total + book.price, 0);

console.log(montoTotal);