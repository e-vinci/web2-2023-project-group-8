const main = document.querySelector('main');
const ResultsPage = () => {
    const resultsLayout = `
    <section id="results">
    <h1>Voici vos résultats</h1>
    <p>Type de peau : "Peau sèche"</p>
    <p></p>
    </section>
    `

    main.innerHTML = resultsLayout;
}

export default ResultsPage;