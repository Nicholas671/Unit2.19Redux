//list of names to be randomized
const names = [
    "Alice", "Bob", "Charlie", "David", "Eve",
    "Frank", "Grace", "Hank", "Ivy", "Jack",
    "Kathy", "Leo", "Mona", "Nina", "Oscar"
];
console.log(names);
//list of jobs to be randomized

const jobs = [
    "Biologist", "Geologist", "Psychologist", "Sociologist", "Anthropologist",
    "Archaeologist", "Astrobiologist", "Ecologist", "Epidemiologist", "Hydrologist",
    "Meteorologist", "Paleontologist", "Radiologist", "Seismologist", "Toxicologist"
];

console.log(jobs);

// Generate an array of 15 random prices in US dollars
const randomPrices = Array.from({ length: 15 }, () => (Math.random() * 100).toFixed(2));

console.log(randomPrices);

//list on initial freelancers
const freeLancers = [
    { name: "Alice", job: "Demonologist", price: 100 },
    { name: "Bob", job: "Geologist", price: 75 },
]
//max 
const max = 20;
//function to render the list of freelancers
function render() {
    const freeLanceList = document.getElementById("freelancers");
    freeLanceList.innerHTML = '';
    const freeLanceElements = freeLancers.map(freeLancer => {
        const freeLanceElement = document.createElement("li");
        freeLanceElement.textContent = `${freeLancer.name} - ${freeLancer.job} - $${freeLancer.price}`;
        return freeLanceElement;
    });
    freeLanceElements.forEach(element => freeLanceList.appendChild(element));
}

//function to add a new freelancer
function addFreeLancer() {
    const newFreeLancer = {
        name: names[Math.floor(Math.random() * names.length)],
        job: jobs[Math.floor(Math.random() * jobs.length)],
        price: randomPrices[Math.floor(Math.random() * randomPrices.length)]
    };
    freeLancers.push(newFreeLancer);

}
//average the price of all freelancers
function averagePrice() {
    const total = freeLancers.reduce((acc, freeLancer) => acc + parseFloat(freeLancer.price), 0);
    return total / freeLancers.length;
}
//display the average price of the freelancers
function updateAveragePrice() {
    const averagePriceElement = document.getElementById("average-price");
    averagePriceElement.textContent = `Average Price: $${averagePrice().toFixed(2)}`;
}

//set the interval of freelancers
const addFreeLancerInterval = setInterval(() => {
    addFreeLancer();
    render();
    updateAveragePrice();
    if (freeLancers.length >= max) {
        clearInterval(addFreeLancerInterval);
    }
}, 1500
);
//inital render
render();
updateAveragePrice();