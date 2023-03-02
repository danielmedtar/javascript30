const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  
  //! DESCOMENTAR ÚNICAMENTE LO QUE SE QUIERE PROBAR

  //? Array.prototype.filter()
  //TODO: Filtra la lista de inventores por quienes nacieron en los 1500

  //* a. Forma larga de escribirlo. Usando function completa

  // const fifteen = inventors.filter(function(inventor) {
  //   if(inventor.year >= 1500 && inventor.year < 1600) {
  //     return true;
  //   }
  // })

  //* Forma larga usando arrow function

  // const fifteen = inventors.filter(inventor => {
  //   if(inventor.year >= 1500 && inventor.year < 1600) {
  //     return true;
  //   }
  // })

  //* Forma corta. Usando arrow function pero solo pasando la condición.

  // const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)

  // console.table(fifteen);


  //? Array.prototype.map()
  //TODO: 2. Devuelve un array de los nombres y apellidos de los inventores

  //* Concatenando los valores con +
  // const nombresCompletos = inventors.map(inventor => inventor.first + ' ' + inventor.last)

  //* Concatenando usando template strings
  // const nombresCompletos = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

  // console.table(nombresCompletos);

  //? Array.prototype.sort()
  //TODO 3. Clasifica los inventores por fecha de nacimiento, del más viejo al más joven

  //* Forma larga usando function
  // const nacimientos = inventors.sort(function(viejo, joven) {
  //   if(viejo.year > joven.year) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // })

  //* Forma larga usando arrow function
  // const nacimientos = inventors.sort((viejo,joven) =>  {
  //   if(viejo.year > joven.year) {
  //     return 1
  //   } else {
  //     return -1
  //   }
  // })

  //* Forma corta usando operador ternario
  // const nacimientos = inventors.sort((viejo, joven) => viejo.year > joven.year ? 1 : -1)

  // console.table(nacimientos);

  //? Array.prototype.reduce()
  //TODO 4. Cuantos años vivieron en total todos los inventors?

  // const vida = inventors.reduce((total, inventor) => {
  //   return total + (inventor.passed - inventor.year)
  // }, 0)

  // console.log(vida);

  //? Ejercicio adicional de sort  
  //TODO 5. Clasifica los inventores por la cantidad de años que vivieron
  //* Forma larga
  // const masVida = inventors.sort(function(a, b) {
  //   const masViejo = a.passed - a.year  
  //   const masJoven = b.passed - b.year
    
  //   if(masViejo > masJoven) {
  //     return -1
  //   } else {
  //     return 1
  //   }
  // })

  //* Forma corta
//   const masVida = inventors.sort(function(a,b) {
//     const masViejo = a.passed - a.year  
//     const masJoven = b.passed - b.year

//     return masViejo > masJoven ? -1 : 1
//   })

// console.table(masVida)
  

//TODO 6. Crea una lista de Boulevards en París que contengan "de" en alguna parte de su nombre.

//? Aplicar en la consola del navegador dentro del link de Wikipedia
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  //*Forma 1.
  // const categoria = document.querySelector('.mw-category');
  // const links = Array.from(categoria.querySelectorAll('a')) 

  // const de = links
  //               .map(link => link.textContent)
  //               .filter(nombreBoulevard => nombreBoulevard.includes('de'))
  
  //*Forma 2. Spread sobre links
  // const categoria = document.querySelector('.mw-category');
  // const links = [...categoria.querySelectorAll('a')]

  // const de = links
  //               .map(link => link.textContent)
  //               .filter(nombreBoulevard => nombreBoulevard.includes('de'))

  //*Forma 3. Spread sobre categorias
  const categorias = [...document.querySelectorAll('.mw-category a')];
  // const links = [...categoria.querySelectorAll('a')]

  const de = categorias
                .map(categoria => categoria.textContent)
                .filter(nombreBoulevard => nombreBoulevard.includes('de'))




  //TODO 7. sort Exercise
  //? Clasifica los elementos del array people alfabéticamente por el apellido

  // const alfa = people.sort((ultima, siguiente) => {
  //   const [aLast, aFirst] = ultima.split(', ')
  //   const [bLast, bFirst] = siguiente.split(', ')
  //   return aLast > bLast ? 1 : -1
  // })

  // console.log(alfa);

  //TODO 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

  const transportes = data.reduce((obj, item) => {
    if(!obj[item]) {
      obj[item] = 0
    }
    obj[item]++;
    return obj;
  }, {})

  console.log(transportes);