document.addEventListener("DOMContentLoaded", function() {
    const shopItemsContainer = document.getElementById("shop-items");
    const categoryFilters = document.querySelectorAll(".category-filter");
    const sortDropdown = document.getElementById("sort-options");

    let plants = [
        // Beginner Plants
        { name: "Aloe Vera", price: 12.99, category: "beginner", img: "assets/images/plants/beginner/Aloe_Vera.jpg" },
        { name: "Peace Lily", price: 18.98, category: "beginner", img: "assets/images/plants/beginner/Peace_Lily.jpg" },
        { name: "Snake Plant", price: 15.99, category: "beginner", img: "assets/images/plants/beginner/Snake_Plant.jpg" },
        { name: "ZZ Plant", price: 35.90, category: "beginner", img: "assets/images/plants/beginner/ZZ_Plant.JPG" },

        // Drought-resistant Plants
        { name: "Cactus", price: 9.99, category: "droughtresistant", img: "assets/images/plants/droughtresistant/Cactus.jpg" },
        { name: "Pothos", price: 14.99, category: "droughtresistant", img: "assets/images/plants/droughtresistant/Pothos.jpg" },
        { name: "Rubber Plant", price: 24.50, category: "droughtresistant", img: "assets/images/plants/droughtresistant/Rubber_Plant.jpg" },
        { name: "Succulent", price: 10.99, category: "droughtresistant", img: "assets/images/plants/droughtresistant/Succulent.jpg" },

        // Long-lasting Plants
        { name: "Anthurium", price: 22.99, category: "longlasting", img: "assets/images/plants/longlasting/Anthurium.jpg" },
        { name: "Carnation", price: 19.99, category: "longlasting", img: "assets/images/plants/longlasting/Carnation.jpg" },
        { name: "Chrysanthemum", price: 20.50, category: "longlasting", img: "assets/images/plants/longlasting/Chrysanthemum.jpg" },
        { name: "Orchid", price: 29.99, category: "longlasting", img: "assets/images/plants/longlasting/Orchid.jpg" },

        // Low-light Plants
        { name: "Calathea", price: 17.49, category: "lowlight", img: "assets/images/plants/lowlight/Calathea.jpg" },
        { name: "Cast Iron Plant", price: 21.99, category: "lowlight", img: "assets/images/plants/lowlight/Cast_Iron_Plant.jpg" },
        { name: "Chinese Evergreen", price: 18.50, category: "lowlight", img: "assets/images/plants/lowlight/Chinese_Evergreen.jpg" },
        { name: "Pothos", price: 14.99, category: "lowlight", img: "assets/images/plants/lowlight/Pothos.jpg" }
    ];

    let filteredPlants = [...plants];

    function renderPlants() {
        shopItemsContainer.innerHTML = "";

        filteredPlants.forEach(plant => {
            const plantCard = document.createElement("div");
            plantCard.classList.add("plant-card");
            plantCard.innerHTML = `
                <img src="${plant.img}" alt="${plant.name}">
                <h2>${plant.name}</h2>
                <p>€ ${plant.price.toFixed(2)}</p>
                <button class="add-to-cart" data-name="${plant.name}" data-price="${plant.price}">Add to Cart</button>
            `;
            shopItemsContainer.appendChild(plantCard);
        });

        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", addToCart);
        });
    }

    function filterByCategory(category) {
        if (category === "all") {
            filteredPlants = [...plants];
        } else {
            filteredPlants = plants.filter(plant => plant.category === category);
        }
        sortPlants(sortDropdown.value);
    }

    function sortPlants(order) {
        if (order === "low-to-high") {
            filteredPlants.sort((a, b) => a.price - b.price);
        } else if (order === "high-to-low") {
            filteredPlants.sort((a, b) => b.price - a.price);
        } else if (order === "featured") {
            filteredPlants = [...plants.filter(p => filteredPlants.includes(p))];
        }
        renderPlants();
    }

    function showToast(message) {
        const toastContainer = document.getElementById("toast-container");
    
        const toast = document.createElement("div");
        toast.classList.add("toast");
        toast.innerText = message;
        toastContainer.appendChild(toast);
    
        setTimeout(() => {
            toast.classList.add("show");
        }, 100); 
    
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }
    
    

    function addToCart(event) {
        let plantName = event.target.getAttribute("data-name");
        let plantPrice = event.target.getAttribute("data-price");

        showToast(`${plantName} which costs €${plantPrice} added to cart!`);
    }

    categoryFilters.forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".category-filter.active").classList.remove("active");
            this.classList.add("active");
            filterByCategory(this.dataset.category);
        });
    });

    sortDropdown.addEventListener("change", function() {
        sortPlants(this.value);
    });

    renderPlants();
});
