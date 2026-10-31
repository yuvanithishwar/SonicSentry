// ==========================================
// SONICSENTRY DASHBOARD
// DEMO DATA
// ==========================================


const currentNoise =
    document.getElementById("currentNoise");

const bigNoise =
    document.getElementById("bigNoise");

const noiseStatus =
    document.getElementById("noiseStatus");

const lastUpdated =
    document.getElementById("lastUpdated");

const aiAssessment =
    document.getElementById("aiAssessment");



function updateDashboard() {


    // Demo sound level

    const noise =
        Math.floor(
            Math.random() * 45
        ) + 45;


    // Update current noise

    currentNoise.innerHTML =
        noise + ' <span>dB</span>';


    // Update large noise value

    bigNoise.innerHTML =
        noise + ' <span>dB</span>';



    // =========================
    // NOISE STATUS
    // =========================

    if (noise < 60) {

        noiseStatus.innerHTML =
            '<span></span> Within acceptable range';

        noiseStatus.style.color =
            "#43805A";

        noiseStatus
            .querySelector("span")
            .style.background =
            "#42B883";

        aiAssessment.textContent =
            "Low";

        aiAssessment.style.color =
            "#43805A";

    }


    else if (noise < 75) {

        noiseStatus.innerHTML =
            '<span></span> Moderately elevated';

        noiseStatus.style.color =
            "#B8751B";

        noiseStatus
            .querySelector("span")
            .style.background =
            "#F0A500";

        aiAssessment.textContent =
            "Moderate";

        aiAssessment.style.color =
            "#B8751B";

    }


    else {

        noiseStatus.innerHTML =
            '<span></span> High noise detected';

        noiseStatus.style.color =
            "#C94C4C";

        noiseStatus
            .querySelector("span")
            .style.background =
            "#E05252";

        aiAssessment.textContent =
            "High";

        aiAssessment.style.color =
            "#C94C4C";

    }



    // =========================
    // TIME
    // =========================

    const now =
        new Date();


    lastUpdated.textContent =
        now.toLocaleTimeString();


    console.log(
        "SonicSentry:",
        noise,
        "dB"
    );

}



// Initial reading

updateDashboard();


// Update every 3 seconds

setInterval(
    updateDashboard,
    3000
);