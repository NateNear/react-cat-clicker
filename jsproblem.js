const fs = require('fs');

//1st question
const rawData = fs.readFileSync('input.json');
const data = JSON.parse(rawData);

const percentages = {};
for (const skill in data) {
  const score2019 = data[skill]['2019 score'];
  const score2024 = data[skill]['2024 score'];
  percentages[skill] = { '2019 score': score2019, '2024 score': score2024 };
}

//2nd question
const sortedPercentages = Object.values(percentages).map(skill => skill['2019 score']).sort((a, b) => b - a);
const ranksToday = {};
const ranksFuture = {};
for (const skill in percentages) {
  const score2019 = percentages[skill]['2019 score'];
  const score2024 = percentages[skill]['2024 score'];
  const rankToday = sortedPercentages.indexOf(score2019) + 1;
  const rankFuture = sortedPercentages.indexOf(score2024) + 1;
  ranksToday[skill] = rankToday;
  ranksFuture[skill] = rankFuture;
}

const sortedSkillsToday = Object.keys(ranksToday).sort((a, b) => ranksToday[a] - ranksToday[b]);
const sortedSkillsFuture = Object.keys(ranksFuture).sort((a, b) => ranksFuture[a] - ranksFuture[b]);


const top3Today = sortedSkillsToday.slice(0, 3);
const bottom3Today = sortedSkillsToday.slice(-3);
const top3Future = sortedSkillsFuture.slice(0, 3);
const bottom3Future = sortedSkillsFuture.slice(-3);

//3rd question
const acceleratingSkills = [];
const deceleratingSkills = [];
for (const skill in percentages) {
  const rankToday = ranksToday[skill];
  const rankFuture = ranksFuture[skill];
  const rate = rankToday - rankFuture;
  if (rate < 0) {
    acceleratingSkills.push({ skill, rate });
  } else if (rate > 0) {
    deceleratingSkills.push({ skill, rate });
  }
}
acceleratingSkills.sort((a, b) => b.rate - a.rate);
deceleratingSkills.sort((a, b) => a.rate - b.rate);
const top3Accelerating = acceleratingSkills.slice(0, 3).map(skill => skill.skill);
const top3Decelerating = deceleratingSkills.slice(0, 3).map(skill => skill.skill);

console.log('Top-3 skills today:');
console.log(top3Today);
console.log('Bottom-3 skills today:');
console.log(bottom3Today);
console.log('Top-3 skills in 2024:');
console.log(top3Future);
console.log('Bottom-3 skills in 2024:');
console.log(bottom3Future);
console.log('Top-3 accelerating skills:');
console.log(top3Accelerating);
console.log('Top-3 decelerating skills:');
console.log(top3Decelerating);
