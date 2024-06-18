function calorieCalculator() {
  const größe = Number(document.getElementById("größe").value);

  const alter = Number(document.getElementById("alter").value);

  const gewicht = Number(document.getElementById("gewicht").value);

  const gender = document.querySelector("input[name= 'gender']:checked").value;

  const PAL = Number(document.querySelector("#belastung").value);

  let grundumsatzKcal = 0;
  let gesamtumsatzKcal = 0;
  let grundumsatzKj = 0;
  let gesamtumsatzKj = 0;

  if (gender === "weiblich") {
    grundumsatzKcal = 655.1 + 9.6 * gewicht + 1.8 * größe - 4.7 * alter;
  } else {
    grundumsatzKcal = 66.47 + 13.7 * gewicht + 5 * größe - 6.8 * alter;
  }

  grundumsatzKj = grundumsatzKcal * 4.184;
  gesamtumsatzKcal = grundumsatzKcal * PAL;
  gesamtumsatzKj = gesamtumsatzKcal * 4.184;

  // console.log({grundumsatzKcal});
  // console.log({grundumsatzKj});
  // console.log({gesamtumsatzKcal});
  // console.log({gesamtumsatzKj});

  const tabGrundumsatzKcal = document.querySelector("#GrundumsatzKcal");
  const tabGrundumsatzKj = document.querySelector("#GrundumsatzKj");
  const tabGesamtumsatzKcal = document.querySelector("#GesamtumsatzKcal");
  const tabGesamtumsatzKj = document.querySelector("#GesamtumsatzKj");

  tabGrundumsatzKcal.innerHTML = grundumsatzKcal.toFixed(2);
  tabGrundumsatzKj.innerHTML = grundumsatzKj.toFixed(2);
  tabGesamtumsatzKcal.innerHTML = gesamtumsatzKcal.toFixed(2);
  tabGesamtumsatzKj.innerHTML = gesamtumsatzKj.toFixed(2);
}
