// ==========================================
// SONICSENTRY NOISE ANALYSIS
// SIMULATED SENSOR DATA
// ==========================================

const currentDb =
    document.getElementById("currentDb");


function updateAnalysisNoise() {

    // Simulated reading

    const noise =
        Math.floor(Math.random() * 51) + 45;


    // Update display

    currentDb.textContent =
        noise + " dB";


    console.log(
        "Analysis Noise:",
        noise,
        "dB"
    );
}


// Initial reading

updateAnalysisNoise();


// Update every 3 seconds

setInterval(
    updateAnalysisNoise,
    3000
);