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

function displayNumberOne() {
  const statsOneAvg = document.getElementById("avg1");
  const statsOneObp = document.getElementById("obp1");
  const statsOneSlg = document.getElementById("slg1");
  const statsOneHr = document.getElementById("hr1");
  const statsOneSb = document.getElementById("sb1");
  let personalName = document.getElementById("nameOfNumberOne");
  let lastGameOne = document.getElementById("numberOfGameOne");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkOne = document.getElementById("button1");
checkOne.addEventListener("click", displayNumberOne);

