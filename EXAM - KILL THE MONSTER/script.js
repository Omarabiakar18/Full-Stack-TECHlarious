
const yourhealth = document.getElementById("your-health");
const monsterhealth = document.getElementById("monster-health");
const randomNum = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);
const clamp = (val) => Math.min(Math.max(0, val), 100);


function attack() {
    let random1 = randomNum(5, 25);
    let random2 = randomNum(5, 25);
    const currentHealthYour = parseInt(yourhealth.style.width);
    const currentHealthMonster = parseInt(monsterhealth.style.width);
    monsterhealth.style.width = (clamp(currentHealthMonster - random1) + "%");
    yourhealth.style.width = (clamp(currentHealthYour - random2) + "%");
    document.getElementById("battlelogMonster").innerHTML = "Monster attacks and deals " + random1 + "\n" + "You attack and deal " + random2 + "\n" + document.getElementById("battlelogMonster").innerHTML;
    if (yourhealth.style.width === "0%" && monsterhealth.style.width === "0%") {
        document.getElementById("battlelogMonster").innerHTML = "IT IS A DRAW!!!";

    } else if (yourhealth.style.width === "0%") {
        document.getElementById("battlelogMonster").innerHTML = "You Lose!!!";

    } else if (monsterhealth.style.width === "0%") {
        document.getElementById("battlelogMonster").innerHTML = "You WIN!!!";

    }

}

function special() {
    const currentHealthYour = parseInt(yourhealth.style.width);
    const currentHealthMonster = parseInt(monsterhealth.style.width);
    if (currentHealthYour < (currentHealthMonster - 20)) {
        let random = randomNum(25, 35);
        monsterhealth.style.width = (clamp(currentHealthMonster - random) + "%");
        document.getElementById("battlelogMonster").innerHTML = "You attack and deal " + random + "\n" + document.getElementById("battlelogMonster").innerHTML;

    }
}

var healed = 0;
function heal() {
    healed += 1;
    const currentHealthYour = parseInt(yourhealth.style.width);
    if ((currentHealthYour < 100) && (healed <= 3)) {
        let random = randomNum(5, 15);
        yourhealth.style.width = (clamp(currentHealthYour + random) + "%");
        document.getElementById("battlelogMonster").innerHTML = "You heal by " + random + "\n" + document.getElementById("battlelogMonster").innerHTML;
    }
}
function giveup() {
    document.getElementById("battlelogMonster").innerHTML = "You Lose";
    monsterhealth.style.width = (100 + "%");
    yourhealth.style.width = (100 + "%");
}

