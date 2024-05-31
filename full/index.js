
document.addEventListener("DOMContentLoaded", () => {
    // Get references to the buttons and the animal details container
    const catsButton = document.getElementById("catsButton");
    const rabbitsButton = document.getElementById("rabbitsButton");
    const deerButton = document.getElementById("deerButton");
    const zebraButton = document.getElementById("zebraButton");
    const animalDetailsContainer = document.getElementById("animalDetailsContainer");

    // Add event listeners to the buttons
    catsButton.addEventListener("click", () => fetchDataAndDisplay("cat"));
    rabbitsButton.addEventListener("click", () => fetchDataAndDisplay("rabbit"));
    deerButton.addEventListener("click", () => fetchDataAndDisplay("deer"));
    zebraButton.addEventListener("click", () => fetchDataAndDisplay("zebra"));

    // Function to fetch data and display animal information
    function fetchDataAndDisplay(animal) {
        // Fetch data from the API endpoint
        fetch("http://localhost:3000/animals")
            .then(response => response.json())
            .then(data => {
                // Find the corresponding animal data
                const selectedAnimal = data.find(item => item.name.toLowerCase() === animal.toLowerCase());
                if (selectedAnimal) {
                    displayAnimalInfo(selectedAnimal);
                } else {
                    console.error("Animal data not found");
                }
            })
            .catch(error => {
                console.error("Error fetching animal data:", error);
            });
    }

    // Function to display animal information
    function displayAnimalInfo(animal) {
        // Clear previous content
        animalDetailsContainer.innerHTML = "";

        // Create elements to display animal's name, image, and vote button
        const animalNameElement = document.createElement("h2");
        animalNameElement.textContent = `${animal.name} - Votes: ${animal.votes || 0}`;

        const animalImage = document.createElement("img");
        animalImage.src = animal.image;
        animalImage.alt = animal.name;

        const voteButton = document.createElement("button");
        voteButton.textContent = "Vote";
        // Add event listener to vote button
        voteButton.addEventListener("click", () => {
            // Increment the vote count for the animal
            animal.votes = (animal.votes || 0) + 1;
            // Display the updated vote count
            animalNameElement.textContent = `${animal.name} - Votes: ${animal.votes}`;
        });

        // Append elements to the container
        animalDetailsContainer.appendChild(animalNameElement);
        animalDetailsContainer.appendChild(animalImage);
        animalDetailsContainer.appendChild(voteButton);
    }
});