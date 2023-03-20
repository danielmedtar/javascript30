 // ## Array Cardio Day 2

 const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  //? Some and Every Checks
  //ToDo Array.prototype.some() // is at least one person 19 or older?
  //*Forma Larga
//   const adulto = people.some(function(persona) {
//     const currentYear = new Date().getFullYear()
//     if(currentYear - persona.year >= 19) {
//         return true
//     }
//   })

  //*Forma Corta
//   const adulto = people.some(persona => ((new Date()).getFullYear()) - persona.year >= 19)
//   console.log(adulto);

  //ToDo Array.prototype.every() // is everyone 19 or older?
//   const todosMayores = people.every(persona => ((new Date()).getFullYear()) - persona.year >= 19)

//   console.log({todosMayores});


  //? Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  //ToDo Encuentra el comentario con el ID 823423
    //*Forma larga
//   const comment = comments.find(function(comment) {
//     if(comment.id === 823423) {
//         return true
//     }
//   })

    //*Forma corta
//     const comment = comments.find(comment => comment.id === 823423)
//   console.log(comment);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423

  const index = comments.findIndex(comment => comment.id === 823423)

// Sacando el comentario del array original:
// comments.splice(index, 1)
console.table(comments);

// Creando un nuevo array con la info editada

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
]
  console.table(newComments);

  