function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
const data = gameObject();
function numPointsScored(playerName) {
  for (const teamKey of ["home", "away"]) {
    const players = data[teamKey].players;
    if (players[playerName]) return players[playerName].points;
  }
}

function shoeSize(playerName) {
  for (const teamKey of ["home", "away"]) {
    const players = data[teamKey].players;
    if (players[playerName]) return players[playerName].shoe;
  }
}


function teamColors(teamName) {
  for (const teamKey of ["home", "away"]) {
    if (data[teamKey].teamName === teamName) {
      return data[teamKey].colors;
    }
  }
}

function teamNames() {
  return [data.home.teamName, data.away.teamName];
}


function playerNumbers(teamName) {
  const data = gameObject();
  for (const teamKey of ["home", "away"]) {
    if (data[teamKey].teamName === teamName) {
      const players = data[teamKey].players;
      return Object.values(players).map((p) => p.number);
    }
  }
}

function playerStats(playerName) {
  for (const teamKey of ["home", "away"]) {
    const players = data[teamKey].players;
    if (players[playerName]) return players[playerName];
  }
}


function bigShoeRebounds() {
  let biggestShoe = 0;
  let reboundsForBiggestShoe = 0;

  for (const teamKey of ["home", "away"]) {
    const players = data[teamKey].players;
    for (const name in players) {
      const player = players[name];
      if (player.shoe > biggestShoe) {
        biggestShoe = player.shoe;
        reboundsForBiggestShoe = player.rebounds;
      }
    }
  }
  return reboundsForBiggestShoe;
}





function mostPointsScored() {
  let topScorer = "";
  let mostPoints = 0;

  for (const teamKey of ["home", "away"]) {
    const players = data[teamKey].players;
    for (const name in players) {
      if (players[name].points > mostPoints) {
        mostPoints = players[name].points;
        topScorer = name;
      }
    }
  }
  return topScorer;
}

function winningTeam() {
  const homePlayers = data.home.players;
  const awayPlayers = data.away.players;

  let homeScore = 0;
  let awayScore = 0;

  for (const name in homePlayers) homeScore += homePlayers[name].points;
  for (const name in awayPlayers) awayScore += awayPlayers[name].points;

  return homeScore > awayScore ? data.home.teamName : data.away.teamName;
}

function playerWithLongestName() {
  let longestName = "";

  for (const teamKey of ["home", "away"]) {
    const players = data[teamKey].players;
    for (const name in players) {
      if (name.length > longestName.length) {
        longestName = name;
      }
    }
  }
  return longestName;
}





function doesLongNameStealATon() {
  const longestNamePlayer = playerWithLongestName();

  let mostSteals = 0;
  let stealsLeader = "";

  for (const teamKey of ["home", "away"]) {
    const players = data[teamKey].players;
    for (const name in players) {
      if (players[name].steals > mostSteals) {
        mostSteals = players[name].steals;
        stealsLeader = name;
      }
    }
  }

  return longestNamePlayer === stealsLeader;
}

// ===== Console.log tests =====

// 3.1 Retrieve Player Information
console.log("numPointsScored:", numPointsScored("Alan Anderson")); // expect 22
console.log("shoeSize:", shoeSize("Brook Lopez")); // expect 17

// 3.2 Retrieve Team Information
console.log("teamColors:", teamColors("Brooklyn Nets")); // expect ["Black", "White"]
console.log("teamNames:", teamNames()); // expect ["Brooklyn Nets", "Charlotte Hornets"]

// 3.3 Retrieve Player Numbers and Stats
console.log("playerNumbers:", playerNumbers("Charlotte Hornets")); // expect [4, 0, 2, 8, 33]
console.log("playerStats:", playerStats("Ben Gordon")); // expect full stats object

// 3.4 Advanced Challenge
console.log("bigShoeRebounds:", bigShoeRebounds()); // biggest shoe = Mason Plumlee (19) -> rebounds 12

// Bonus Questions
console.log("mostPointsScored:", mostPointsScored()); // expect "Ben Gordon" (33 points)
console.log("winningTeam:", winningTeam()); // compares total points, home vs away
console.log("playerWithLongestName:", playerWithLongestName()); // expect "Bismack Biyombo" or "Brendan Haywood" (tie-check below)

// Super Bonus Challenge
console.log("doesLongNameStealATon:", doesLongNameStealATon()); // true or false