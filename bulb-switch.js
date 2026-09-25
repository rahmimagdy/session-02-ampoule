document.querySelector("#ampoule").onclick = toggle;

function toggle(event) {
  let etat = document.querySelector("#etat");
  
  /* À modifier : remplacer true par une condition */
  if (etat.textContent == 'éteinte') {
    event.target.setAttribute("src", "ampoule_on.png");
    etat.textContent = "allumée";
  } else {   event.target.setAttribute("src", "ampoule_off.png");
    etat.textContent = "éteinte";

  }
  event.target.setAttribute("alt", "Ampoule " + etat.textContent);
}
