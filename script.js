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
        .toLowerCase()
        .replace(/</g, "")
        .replace(/>/g, "")
        .trim(); 
}

