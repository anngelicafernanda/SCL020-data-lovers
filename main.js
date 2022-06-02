// importamos la data de atletas y las Funciones
import data from "./data/athletes/athletes.js";
import {
  getRhythmicGymnastics,
  filterTeam,
  sortDataName,
  getMedals,
} from "./data.js"; // traigo la funcion desde el archivo data.js

const showAthletes = (rhythmicGymnastics) => {
  return rhythmicGymnastics
    .map(
      (currentAthlete) =>
        `<div class="athlete_Container">
        <img class="imgAthlete" src=${currentAthlete.img} alt="atleta" />        
        <h3>${currentAthlete.name}</h3>
        <p>${currentAthlete.team}</p>
        <button class="button_show_Atlethe" type="submit">
        Ver Atletas
          <img
            src="img_proyecto/icono_siguiente.png"
            alt="icono siguiente"
            width="25px"
            height="auto"
          />
        </div>`
    )
    .join("");
};

const rhythmicGymnastics = getRhythmicGymnastics(data.athletes);
console.log("🚀 ~ rhythmicGymnastics", rhythmicGymnastics);

const athletesContainer = document.querySelector(".show_athletes");
athletesContainer.innerHTML = showAthletes(rhythmicGymnastics);

// const uniqueArrayTeams = [
//   ...new Set(rhythmicGymnastics.map((currentAthlete) => currentAthlete.team)), // el new, un unico seccion de team
// ];
// console.log(uniqueArrayTeams);

const uniqueArray = (value, index, self) => {
  return self.indexOf(value) === index;
};
const teams = rhythmicGymnastics.map((currentAthlete) => currentAthlete.team);
const uniqueArrayTeams = teams.filter(uniqueArray);

// console.log("PRUEBA", getMedals(rhythmicGymnastics, uniqueArrayTeams));

// console.log(teams);
const teamAthletesSelector = (uniqueArrayTeams) => {
  return uniqueArrayTeams
    .map((currentTeamOption) => `<option>${currentTeamOption}</option>`)
    .join("");
};

const filterTeamContainer = document.querySelector("#filter_country");
filterTeamContainer.innerHTML = teamAthletesSelector(uniqueArrayTeams);

const filterTeamContainerInput = document.querySelector(
  "#filter_country_input"
);

console.log(uniqueArrayTeams);

filterTeamContainerInput.addEventListener("change", (event) => {
  const athletesFiltered = filterTeam(rhythmicGymnastics, event.target.value);
  if (event.target.value === "") {
    athletesContainer.innerHTML = showAthletes(rhythmicGymnastics);
  } else {
    athletesContainer.innerHTML = showAthletes(athletesFiltered);
  }
  console.log(athletesFiltered.length);
});

// sortOrder

const orderTeamContainerInput = document.querySelector("#order_name_input");

orderTeamContainerInput.addEventListener("change", (eventOrder) => {
  const athletesOrganized = sortDataName(
    rhythmicGymnastics,
    eventOrder.target.value
  );
  if (eventOrder.target.value === "") {
    athletesContainer.innerHTML = showAthletes(rhythmicGymnastics);
  } else {
    athletesContainer.innerHTML = showAthletes(athletesOrganized);
  }
  console.log(sortDataName(rhythmicGymnastics, eventOrder.target.value));
});

// Estadistica

console.log("PRUEBA", getMedals(rhythmicGymnastics, uniqueArrayTeams));
// const {
//   countryMedals: { bulgaria, spain, russia },
// } = getMedals(rhythmicGymnastics, uniqueArrayTeams);

const { countryMedals } = getMedals(rhythmicGymnastics, uniqueArrayTeams);

const medalsContainer = document.querySelector(".show_Statistics");
const countryMedalsArray = [];

Object.entries(countryMedals).forEach(([key, value]) => {
  countryMedalsArray.push(
    `<div class="medals_Container"><img src="img_proyecto/medalla-de-oro.png" alt="atleta" /> <p>País: ${key}</p><p>Medallas de Oro: ${value.gold}</p><p>Medallas de Plata: ${value.silver}</p><p>Medallas de Bronce: ${value.bronze}</p></div>`
  );
});
medalsContainer.innerHTML = countryMedalsArray.join("");

console.log("🚀 ~ countryMedalsArray", countryMedalsArray);

// console.log(bulgaria, spain, russia);

// console.log("🚀 ~ rhythmicGymnastics", rhythmicGymnastics);

//console.log(rhythmicGymnastics);

// console.log(sortDataName(rhythmicGymnastics, rhythmicGymnastics.name));
