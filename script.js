// Funktion som gör användarens text säkrare
// Skyddar mot enkla XSS-attacker genom att ta bort < och > 
function rattaQuiz() {

    let q1 = document.getElementById("q1").value.toLowerCase().trim(); 
    let q2 = document.getElementById("q2").value.toLowerCase().trim(); 
    let q3 = document.getElementById("q3").value.toLowerCase().trim();

    let poang = 0;

    if (q1.includes("kraft")) {
        poang++;
    }

    if (q2.includes("första") || q2.includes("tröghet")) {
        poang++;
    }

    if (
        q3.includes("lika stor") ||
        q3.includes("motsatt") ||
        q3.includes("reaktion")
    ) {
        poang++;
    }

    document.getElementById("resultat").textContent =
        "Du fick " + poang + " av 3 rätt!";
}  

function sanitize(text) {
    return text
        .toLowerCase() // Gör all text till små bokstäver 
        .replace(/</g, "") // Tar bort < 
        .replace(/>/g, "")
        .trim(); 
}

function rattaQuiz() {
    // Hämtar användarens svar från input-fälten
    // sanitize används för säkrare input
    let q1 = sanitize(document.getElementById("q1").value);
    console.log(q1);
    let q2 = sanitize(document.getElementById("q2").value); 
    console.log(q2);
    let q3 = sanitize(document.getElementById("q3").value);
    console.log(q3); 

    let poang = 0;

    // Fråga 1
    if (q1.includes("kraft")) {
        poang++;
    }

    // Fråga 2
    if (q2.includes("första") || q2.includes("tröghet")) {
        poang++;
    }

    // Fråga 3
    if (
        q3.includes("motsatt") ||
        q3.includes("lika stor") ||
        q3.includes("reaktion")
    ) {
        poang++;
    } 
    // Skriver ut resultatet på sidan
 // textContent används istället för innerHTML för säkerhet
    document.getElementById("resultat").textContent =
        "Du fick " + poang + " av 3 rätt!";
}
 