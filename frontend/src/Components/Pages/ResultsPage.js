const main = document.querySelector('main');
const ResultsPage = () => {
    const resultsLayout = `
    <section id="results">
    <h1>Voici vos résultats</h1>
    <p>Type de peau : "Peau sèche"</p>
    <p>Routine de peau proposée</p>
    <h2>AM</h2>

    <h2>PM</h2>

    </section>
    `;

    main.innerHTML = resultsLayout;
}

export default ResultsPage;