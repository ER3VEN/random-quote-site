const quotes = [
    "Je cuisinerais toujours ce que l'on me commandera. - Cuistot McDo",
    "Bonjour, bienvenue chez Sephora. - Vendeuse Sephora",
    "On est 55 milliards sur Terre et faut que ce genre de truc sa arrive à quelqu'un, et cette personne c'est qui, c'est moi. - Tk78",
    "Es ce que c'est bon pour vous. - Squeezie",
    "La racaille de shanghai. - Eric Judor",
    "Je suis rapide. - Kylian Mbappé qui imite Flash Macqueen",
    "La meilleure façon de prédire l'avenir c'est d'aller dans le futur. - Anonyme",
    "Le présent c'est ce qui se passe maintenant. - Anonyme",
    "Tu as mal, arrête. - ThéoBabac",
    "Si tu as faim, il est conseillé de consommer de la nourriture. - Mattéo",
];

document.getElementById('new-quote').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
});
