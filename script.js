// =========================
// MAIN FUNCTION
// =========================
async function uploadResume() {

    // Get file input
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    // Result box
    const resultBox = document.getElementById("resultBox");

    // Validate file
    if (!file) {
        alert("Please select a file");
        return;
    }

    // Show loading message
    resultBox.innerHTML = "⏳ Analyzing resume...";

    // Prepare form data
    let formData = new FormData();
    formData.append("file", file);

    try {

        // Call backend API
        const response = await fetch("http://127.0.0.1:8000/analyze", {
            method: "POST",
            body: formData
        });

        // Convert response to JSON
        const data = await response.json();

        // Extract result safely
        const result = data.result || {};

        // SAFE FALLBACKS (prevents crashes)
        const strengths = result.strengths || [];
        const weaknesses = result.weaknesses || [];
        const missing = result.missing_skills || [];
        const improvements = result.improvements || [];

        const score = result.ats_score ?? "N/A";

        // =========================
        // DISPLAY RESULT
        // =========================
        resultBox.innerHTML = `
            <div class="card result-card">

                <!-- ATS SCORE -->
                <h2 class="ats-score">📊 ATS Score: ${score}</h2>

                <!-- STRENGTHS -->
                <h3>💪 Strengths</h3>
                <ul>
                    ${strengths.map(item => `<li>${item}</li>`).join("")}
                </ul>

                <!-- WEAKNESSES -->
                <h3>⚠️ Weaknesses</h3>
                <ul>
                    ${weaknesses.map(item => `<li>${item}</li>`).join("")}
                </ul>

                <!-- MISSING SKILLS -->
                <h3>🎯 Missing Skills</h3>
                <ul>
                    ${missing.map(item => `<li>${item}</li>`).join("")}
                </ul>

                <!-- IMPROVEMENTS -->
                <h3>🚀 Improvements</h3>
                <ul>
                    ${improvements.map(item => `<li>${item}</li>`).join("")}
                </ul>

            </div>
        `;

    } catch (error) {

        // ERROR HANDLING
        resultBox.innerHTML = "❌ Error: " + error.message;
    }
}