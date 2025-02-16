'use strict'
// 1行目に記載している 'use strict' は削除しないでください

/////average 打率
/**
 * @param {string} name - 結果を表示したい人の名前
 * @param {number} num - 表示したい試合数
 * @returns {number} 打率を計算する
 */
function avg(name, num) {
  let average = 0;
  let sumHit = 0;
  let sumAtBat = 0;

  for (let i = 0; i <= num - 1; i++) {
    for (const personalData of record[i]) {   
      if (personalData[name]) {
        sumHit = sumHit + personalData[name]["single"] + personalData[name]["double"] + personalData[name]["triple"] + personalData[name]["HR"];
        sumAtBat = sumAtBat + personalData[name]["atBat"];
      }
    }
  }
  average = sumHit / sumAtBat;
  return average.toFixed(3);
}

// test(avg("Fujita", 2), 0.143);
// test(avg("Fujita", 1), 0.250);
// console.log(avg("BBB"));

/////On Base Percentage 出塁率
/**
 * @param {string} name - 結果を表示したい人の名前
 * @param {number} num - 計算したい試合数
 * @returns {number} 出塁率を計算する
 */
function obp(name, num) {
  let onBasePercent = 0;
  let onBase = 0;
  let denominator = 0;

  for (let i = 0; i <= num -1; i++) {
    for (const personalData of record[i]) {
      if (personalData[name]) {
        onBase = onBase + personalData[name]["single"] + personalData[name]["double"] + personalData[name]["triple"] + personalData[name]["HR"] + personalData[name]["BB"];
        denominator = denominator + personalData[name]["atBat"] + personalData[name]["BB"] + personalData[name]["sucrificefly"];
      }
    }
  }
  onBasePercent = onBase / denominator;
  return onBasePercent.toFixed(3);
}

/////Slugging Percentage 長打率
/**
 * @param {string} name - 結果を表示したい人の名前
 * @param {number} num - 計算したい試合数
 * @returns {number} 長打率を計算する
 */
function slg(name, num) {
  let slugging = 0;
  let numberOfBase = 0;
  let sumAtBat = 0;

  for (let i = 0; i <= num - 1; i++) {
    for (const personalData of record[i]) {
      if (personalData[name]) {
        numberOfBase = numberOfBase + personalData[name]["single"] + (personalData[name]["double"] * 2) + (personalData[name]["triple"] * 3) + (personalData[name]["HR"] * 4);
        sumAtBat = sumAtBat + personalData[name]["atBat"];
      }
    }
  }
  slugging = numberOfBase / sumAtBat;
  return slugging.toFixed(3);
}

/////Home Run
/**
 * @param {string} name - 結果を表示したい人の名前
 * @param {number} num - 計算したい試合数
 * @returns {number} ホームラン数を合計する
 */
function hr(name, num) {
  let numberOfHr = 0;

  for (let i = 0; i <= num - 1; i++) {
    for (const personalData of record[i]) {
      if (personalData[name]) {
        numberOfHr = numberOfHr + personalData[name]["HR"];
      }
    }
  }
  return numberOfHr;
}

/////Stolen Base 盗塁
/**
 * @param {string} name - 結果を表示したい人の名前
 * @param {number} num - 計算したい試合数
 * @returns {number} 盗塁数を合計する
 */
function sb(name, num) {
  let numberOfSb = 0;

  for (let i = 0; i <= num - 1; i++) {
    for (const personalData of record[i]) {
      if (personalData[name]) {
        numberOfSb = numberOfSb + personalData[name]["SB"];
      }
    }
  }
  return numberOfSb;
}

/////守備位置へ名前転記
/**
 * @param {string} name - 入力されている人の名前
 * @param {string} position - 選ばれたポジション名
 */
function moveField(name, position) {
  const fieldPositionP = document.getElementById("pitcher");
  const fieldPositionC = document.getElementById("catcher");
  const fieldPosition1B = document.getElementById("firstBaseMan");
  const fieldPosition2B = document.getElementById("secondBaseMan");
  const fieldPosition3B = document.getElementById("thirdBaseMan");
  const fieldPositionSS = document.getElementById("shortStop");
  const fieldPositionLF = document.getElementById("left");
  const fieldPositionCF = document.getElementById("center");
  const fieldPositionRF = document.getElementById("right");

  if (position === "P") {
    fieldPositionP.innerText = name;
  } else if (position === "C") {
    fieldPositionC.innerText = name;
  } else if (position === "1B") {
    fieldPosition1B.innerText = name;
  } else if (position === "2B") {
    fieldPosition2B.innerText = name;
  } else if (position === "3B") {
    fieldPosition3B.innerText = name;
  } else if (position === "SS") {
    fieldPositionSS.innerText = name;
  } else if (position === "LF") {
    fieldPositionLF.innerText =name;
  } else if (position === "CF") {
    fieldPositionCF.innerText = name;
  } else if (position === "RF") {
    fieldPositionRF.innerText = name;
  }
}

///// 1 枠目のイベント
function displayNumberOne() {
  const statsOneAvg = document.getElementById("avg1");
  const statsOneObp = document.getElementById("obp1");
  const statsOneSlg = document.getElementById("slg1");
  const statsOneHr = document.getElementById("hr1");
  const statsOneSb = document.getElementById("sb1");
  let personalName = document.getElementById("nameOne");
  let lastGameOne = document.getElementById("gameOne");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkOne = document.getElementById("button1");
checkOne.addEventListener("click", displayNumberOne);

function displayPositionOne() {
  let personalName = document.getElementById("nameOne");
  const positionSelect = document.getElementById("positionOne");
  moveField(personalName.value, positionSelect.value);
}
const moveOne = document.getElementById("buttonP1");
moveOne.addEventListener("click", displayPositionOne);

///// 2 枠目のイベント
function displayNumberTwo() {
  const statsOneAvg = document.getElementById("avg2");
  const statsOneObp = document.getElementById("obp2");
  const statsOneSlg = document.getElementById("slg2");
  const statsOneHr = document.getElementById("hr2");
  const statsOneSb = document.getElementById("sb2");
  let personalName = document.getElementById("nameTwo");
  let lastGameOne = document.getElementById("gameTwo");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkTwo = document.getElementById("button2");
checkTwo.addEventListener("click", displayNumberTwo);

function displayPositionTwo() {
  let personalName = document.getElementById("nameTwo");
  const positionSelect = document.getElementById("positionTwo");
  moveField(personalName.value, positionSelect.value);
}
const moveTwo = document.getElementById("buttonP2");
moveTwo.addEventListener("click", displayPositionTwo);

///// 3 枠目のイベント
function displayNumberThree() {
  const statsOneAvg = document.getElementById("avg3");
  const statsOneObp = document.getElementById("obp3");
  const statsOneSlg = document.getElementById("slg3");
  const statsOneHr = document.getElementById("hr3");
  const statsOneSb = document.getElementById("sb3");
  let personalName = document.getElementById("nameThree");
  let lastGameOne = document.getElementById("gameThree");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkThree = document.getElementById("button3");
checkThree.addEventListener("click", displayNumberThree);

function displayPositionThree() {
  let personalName = document.getElementById("nameThree");
  const positionSelect = document.getElementById("positionThree");
  moveField(personalName.value, positionSelect.value);
}
const moveThree = document.getElementById("buttonP3");
moveThree.addEventListener("click", displayPositionThree);

///// 4 枠目のイベント
function displayNumberFour() {
  const statsOneAvg = document.getElementById("avg4");
  const statsOneObp = document.getElementById("obp4");
  const statsOneSlg = document.getElementById("slg4");
  const statsOneHr = document.getElementById("hr4");
  const statsOneSb = document.getElementById("sb4");
  let personalName = document.getElementById("nameFour");
  let lastGameOne = document.getElementById("gameFour");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkFour = document.getElementById("button4");
checkFour.addEventListener("click", displayNumberFour);

function displayPositionFour() {
  let personalName = document.getElementById("nameFour");
  const positionSelect = document.getElementById("positionFour");
  moveField(personalName.value, positionSelect.value);
}
const moveFour = document.getElementById("buttonP4");
moveFour.addEventListener("click", displayPositionFour);

///// 5 枠目のイベント
function displayNumberFive() {
  const statsOneAvg = document.getElementById("avg5");
  const statsOneObp = document.getElementById("obp5");
  const statsOneSlg = document.getElementById("slg5");
  const statsOneHr = document.getElementById("hr5");
  const statsOneSb = document.getElementById("sb5");
  let personalName = document.getElementById("nameFive");
  let lastGameOne = document.getElementById("gameFive");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkFive = document.getElementById("button5");
checkFive.addEventListener("click", displayNumberFive);

function displayPositionFive() {
  let personalName = document.getElementById("nameFive");
  const positionSelect = document.getElementById("positionFive");
  moveField(personalName.value, positionSelect.value);
}
const moveFive = document.getElementById("buttonP5");
moveFive.addEventListener("click", displayPositionFive);

///// 6 枠目のイベント
function displayNumberSix() {
  const statsOneAvg = document.getElementById("avg6");
  const statsOneObp = document.getElementById("obp6");
  const statsOneSlg = document.getElementById("slg6");
  const statsOneHr = document.getElementById("hr6");
  const statsOneSb = document.getElementById("sb6");
  let personalName = document.getElementById("nameSix");
  let lastGameOne = document.getElementById("gameSix");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkSix = document.getElementById("button6");
checkSix.addEventListener("click", displayNumberSix);

function displayPositionSix() {
  let personalName = document.getElementById("nameSix");
  const positionSelect = document.getElementById("positionSix");
  moveField(personalName.value, positionSelect.value);
}
const moveSix = document.getElementById("buttonP6");
moveSix.addEventListener("click", displayPositionSix);

///// 7 枠目のイベント
function displayNumberSeven() {
  const statsOneAvg = document.getElementById("avg7");
  const statsOneObp = document.getElementById("obp7");
  const statsOneSlg = document.getElementById("slg7");
  const statsOneHr = document.getElementById("hr7");
  const statsOneSb = document.getElementById("sb7");
  let personalName = document.getElementById("nameSeven");
  let lastGameOne = document.getElementById("gameSeven");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkSeven = document.getElementById("button7");
checkSeven.addEventListener("click", displayNumberSeven);

function displayPositionSeven() {
  let personalName = document.getElementById("nameSeven");
  const positionSelect = document.getElementById("positionSeven");
  moveField(personalName.value, positionSelect.value);
}
const moveSeven = document.getElementById("buttonP7");
moveSeven.addEventListener("click", displayPositionSeven);

///// 8 枠目のイベント
function displayNumberEight() {
  const statsOneAvg = document.getElementById("avg8");
  const statsOneObp = document.getElementById("obp8");
  const statsOneSlg = document.getElementById("slg8");
  const statsOneHr = document.getElementById("hr8");
  const statsOneSb = document.getElementById("sb8");
  let personalName = document.getElementById("nameEight");
  let lastGameOne = document.getElementById("gameEight");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkEight = document.getElementById("button8");
checkEight.addEventListener("click", displayNumberEight);

function displayPositionEight() {
  let personalName = document.getElementById("nameEight");
  const positionSelect = document.getElementById("positionEight");
  moveField(personalName.value, positionSelect.value);
}
const moveEight = document.getElementById("buttonP8");
moveEight.addEventListener("click", displayPositionEight);

///// 9 枠目のイベント
function displayNumberNine() {
  const statsOneAvg = document.getElementById("avg9");
  const statsOneObp = document.getElementById("obp9");
  const statsOneSlg = document.getElementById("slg9");
  const statsOneHr = document.getElementById("hr9");
  const statsOneSb = document.getElementById("sb9");
  let personalName = document.getElementById("nameNine");
  let lastGameOne = document.getElementById("gameNine");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkNine = document.getElementById("button9");
checkNine.addEventListener("click", displayNumberNine);

function displayPositionNine() {
  let personalName = document.getElementById("nameNine");
  const positionSelect = document.getElementById("positionNine");
  moveField(personalName.value, positionSelect.value);
}
const moveNine = document.getElementById("buttonP9");
moveNine.addEventListener("click", displayPositionNine);
