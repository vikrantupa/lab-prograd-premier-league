let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
    return [managerName, managerAge, currentTeam, trophiesWon];
}

// Don't edit the following code
try {
    var manager = createManager(
        managerName,
        managerAge,
        currentTeam,
        trophiesWon
    );
} catch (e) {
    // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(formation) {
    if (formation.length == 0) {
        return null;
    }
    let team = {
        defender: formation[0],
        midfield: formation[1],
        forward: formation[2],
    };
    return team;
}

// Dont edit the following code

try {
    var formationObject = createFormation(formation);
} catch (e) {
    //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year) {
    return players.filter((Player) => {
        if (Player.debut == year) return Player;
    });
}
//Progression 4 - Filter players that play at the position _______

function filterByposition(position) {
    return players.filter((player) => {
        if (player.position == position) return player;
    });
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName) {
    let player_arr = [];
    for (let i = 0; i < players.length; i++)
        for (let j = 0; j < players[i].awards.length; j++)
            if (players[i].awards[j].name == awardName)
                if (!player_arr.includes(players[i])) player_arr.push(players[i]);
    return player_arr;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
    let player_arr = [];
    for (let i = 0; i < players.length; i++) {
        let count = 0;
        for (let j = 0; j < players[i].awards.length; j++)
            if (players[i].awards[j].name == awardName) count++;
        if (count == noOfTimes) player_arr.push(players[i]);
    }
    return player_arr;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
    let player_arr = [];
    for (let i = 0; i < players.length; i++)
        for (let j = 0; j < players[i].awards.length; j++)
            if (
                players[i].awards[j].name == awardName &&
                players[i].country == country
            )
                player_arr.push(players[i]);
    return player_arr;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, teamName, age) {
    let player_arr = [];
    for (let i = 0; i < players.length; i++) {
        if (
            players[i].awards.length >= noOfAwards &&
            players[i].team == teamName &&
            players[i].age < age
        )
            player_arr.push(players[i]);
    }
    return player_arr;
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order