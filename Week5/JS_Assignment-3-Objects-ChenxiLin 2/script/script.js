
// Declared a basketball team object variable. It has 4 properties and 1 method.
var team = {
    name: "Raptors", // Name of the team
    players: ["Scottie Barnes", "Pascal Siamkam", "Fred Vanvleet", "OG Anunoby", "RJ Barrett"], // Array of players in the team
    coach: "Nick Nurse", // Name of the coach on the team
    championshipWon: 1, // Amount of championship the team won

    // addPlayer method will add a new player to the players array
    // then it will have a pop up alert with a string that return a string with the added player name
    addPlayer: function(newPlayer) {
        team.players.push(newPlayer);
        alert("Added new player to roster: " + newPlayer);
    }
}
// Output the team object to the console
console.log(team)

// Send a popup prompt 
var champWon = prompt("How many Championship rings has the team won?", team.championshipWon);
// Update the championshipWon property with the returned champWon value
team.championshipWon = parseInt(champWon);

// Send a second popup prompt to change coach return with a coach name as a string
var newCoach = prompt("Please change Coach", team.coach);
// Update to new coach with the returned newCoach value
team.coach = newCoach;

// Called the addPlayer method to add a new player to the team
team.addPlayer("Michael Jordan");

// Output the updated team object to the console
console.log(team);
