// // estas son funciones

// esta funcion obtiene los atletas que practiquen gimnasia ritmica
// define la funcion flecha con el nombre getRhythmicGymnastics y se exporta para hacerlo accesible en otros documentos o archivos
// regresa el valor esperado filtrando la data que recibe por propiedades
// te dice el atleta por el que esta iterando
// devuelve el atleta que su event sea igual a Rhythmic Gymnastics Women's Group
export const getRhythmicGymnastics = (data) => {
  return data.filter(
    (currentAthlete) =>
      currentAthlete.event === "Rhythmic Gymnastics Women's Group"
  );
};

export const filterTeam = (data, selectTeam) => {
  return data.filter((currentTeam) => currentTeam.team === selectTeam);
};

// export const sortDataName = (data, selectOrder) => {
//   if (selectOrder === "A-Z") {
//     return data.sort(
//       (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0) // si a.name es menor que b.name devuelve -1, si eso no se cumple verifica si a.name es mayor que b.name si esa condicion se cumple devuelve 1, de caso contrario devuelve 0
//     );
//   } else {
//     return data.sort(
//       (a, b) => (a.name < b.name ? 1 : a.name > b.name ? -1 : 0) // si a.name es menor que b.name devuelve 1 si no cumple la condicion verifica que a.name es mayor que b.name y si cumple devuelve -1 de lo contrario devuelve 0
//     );
//   }
// };

export const sortDataName = (data, selectOrder) => {
  if (selectOrder === "A-Z") {
    return data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  } else {
    return data.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }
};

export const getMedals = (athletes, uniqueArrayTeams) => {
  const countryMedals = {};
  let totalMedals = 0;
  uniqueArrayTeams.map(
    (currentTeam) =>
      (countryMedals[currentTeam.toLowerCase()] = {
        bronze: 0,
        gold: 0,
        silver: 0,
      })
  );
  // console.log(uniqueArrayTeams);
  athletes.map((currentAthlete) => {
    countryMedals[currentAthlete.team.toLowerCase()][
      currentAthlete.medal.toLowerCase()
    ] += 1;
    totalMedals += 1;
  });
  return { countryMedals, totalMedals };
};

/* 
 console.log(getElementsByType(athletes, "team"))
 console.log(getAthletesByTeam(athletes, "Italy"))
console.log(sortData(athletes, "name", "Desc")) */
