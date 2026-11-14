
function showInfo(type) {

    const infoBox = document.getElementById("info-box");

    const information = {

        planet: `
            <h3>Planet X</h3>
            <p>
                Planet X, often discussed in connection
                with the Planet Nine hypothesis, is a
                hypothetical distant planet. Its existence
                has not been confirmed.
            </p>
        `,

        spherex: `
            <h3>NASA SPHEREx</h3>
            <p>
                SPHEREx is NASA's space telescope mission.
                It surveys the entire sky in near-infrared
                light and helps scientists study galaxies,
                stars and cosmic history.
            </p>
        `,

        gaia: `
            <h3>Gaia Mission</h3>
            <p>
                ESA's Gaia mission created a detailed
                map of our Milky Way by observing
                stars and measuring their positions
                and motions.
            </p>
        `

    };

    infoBox.innerHTML = information[type] ||
        "Information unavailable.";

    infoBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
