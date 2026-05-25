// Funktion som rättar quizet
function rattaQuiz() {

    // Hämtar användarens svar från frågorna
    // Gör texten till små bokstäver och tar bort mellanslag
    let q1 = document.getElementById("q1").value.toLowerCase().trim();

    let q2 = document.getElementById("q2").value.toLowerCase().trim();

    let q3 = document.getElementById("q3").value.toLowerCase().trim();


    // Variabel som håller koll på poängen
    let poang = 0;


    // Fråga 1
    // Om svaret innehåller ordet "kraft"
    if (q1.includes("kraft")) {

        // Lägg till 1 poäng
        poang++;
    }


    // Fråga 2
    // Godkänner både "första" och "tröghet"
    if (
        q2.includes("första") ||
        q2.includes("tröghet")
    ) {

        poang++;
    }


    // Fråga 3
    // Godkänner flera olika rätta svar
    if (

        q3.includes("lika stor") ||
        q3.includes("motsatt") ||
        q3.includes("reaktion")
    ) {

        poang++;
    }


    // Visar resultatet på hemsidan
    document.getElementById("resultat").textContent =

        "Du fick " + poang + " av 3 rätt!";
}

// Skyddar mot enkla XSS-attacker
function sanitize(text) {

    return text

        // Gör texten till små bokstäver
        .toLowerCase()
   .replace(/</g, "")

   .replace(/>/g, "")

        // Tar bort extra mellanslag
        .trim();
}  