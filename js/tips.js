document.addEventListener("DOMContentLoaded", function () {
    console.log("Tips.js loaded!");


    const infoContainer = document.getElementById("info-container");
    const detailView = document.getElementById("detail-view");
    const detailTitle = document.getElementById("detail-title");
    const detailContent = document.getElementById("detail-content");

    if (!infoContainer || !detailView || !detailTitle || !detailContent) {
        console.error("Error: One or more elements are missing!");
        return; 
    }

    const details = {
        beginners: {
            title: "Easy to Maintain Plants for Beginners",
            content: `
                <div class="header-container">
                    <div class="shadow"></div>
                    <div class="title">
                        <h2>Easy to Maintain Plants for Beginners</h2>
                    </div>
                </div>
    
                <div class="detailed-container">
                    <div class="detailed-box">
                        <img src="assets/images/plants/beginner/Snake_Plant.jpg" alt="Snake Plant" class="plant-img-vertical">
                        <div class="text-box">
                            <h3><b>Snake Plant (Sansevieria)</b></h3>
                            <p>This hardy plant thrives on neglect, making it perfect for beginners. 
                            It prefers bright, indirect light but can tolerate low light. 
                            Water sparingly, allowing the soil to dry out completely between waterings, as overwatering can lead to root rot. 
                            It’s also an excellent air purifier.</p>
                        </div>
                    </div>
    
                    <div class="detailed-box">
                        <div class="text-box">
                            <h3><b>ZZ Plant (Zamioculcas zamiifolia)</b></h3>
                            <p>The ZZ plant is nearly indestructible, tolerating low light and irregular watering. 
                            It stores water in its rhizomes, so let the soil dry completely before watering. 
                            Avoid direct sunlight, as it can scorch the leaves. 
                            This plant is perfect for offices or low-maintenance indoor spaces.</p>
                        </div>
                        <img src="assets/images/plants/beginner/ZZ_plant.jpg" alt="ZZ Plant" class="plant-img-horizontal">
                    </div>
    
                    <div class="detailed-box">
                        <img src="assets/images/plants/beginner/Aloe_Vera.jpg" alt="Aloe Vera" class="plant-img-vertical">
                        <div class="text-box">
                            <h3><b>Aloe Vera</b></h3>
                            <p>Aloe thrives in bright, indirect sunlight and well-draining soil. 
                            Water deeply but infrequently, allowing the soil to dry out completely between waterings. 
                            Be cautious of overwatering, as it can cause root rot. 
                            It’s also a great medicinal plant, with its gel soothing burns and skin irritations.</p>
                        </div>
                    </div>
    
                    <div class="detailed-box">
                        <div class="text-box">
                            <h3><b>Peace Lily (Spathiphyllum)</b></h3>
                            <p>This elegant plant prefers low to medium, indirect light and thrives in consistently moist soil. 
                            Water when the top inch of soil is dry, and mist the leaves for added humidity. 
                            It’s a natural air purifier but can be toxic to pets if ingested.</p>
                        </div>
                        <img src="assets/images/plants/beginner/Peace_Lily.jpg" alt="Peace Lily" class="plant-img-horizontal">
                    </div>
                </div>
            `
        },
    
        longlasting: {
            title: "Long-Lasting Plants",
            content: `
                <div class="header-container">
                    <div class="shadow"></div>
                    <div class="title">
                        <h2>Long-Lasting Plants</h2>
                    </div>
                </div>
    
                <div class="detailed-container">
                    <div class="detailed-box">
                        <img src="assets/images/plants/longlasting/Anthurium.jpg" alt="Anthurium" class="plant-img-vertical">
                        <div class="text-box">
                            <h3><b>Anthurium</b></h3>
                            <p>Anthuriums are long-lasting flowering plants that thrive in bright, indirect light but can tolerate lower light conditions. 
                            Keep the soil slightly moist but not soggy, watering only when the top inch feels dry. 
                            These plants love humidity, so misting occasionally or placing them near a humidifier will help keep them happy. 
                            With proper care, their vibrant heart-shaped flowers can last for weeks.</p>
                        </div>
                    </div>
    
                    <div class="detailed-box">
                        <div class="text-box">
                            <h3><b>Carnation</b></h3>
                            <p>Carnations are hardy flowers that can last a long time both in pots and as cut flowers. 
                            They prefer bright, indirect sunlight and well-draining soil. Water when the topsoil feels dry, but avoid overwatering to prevent root rot. 
                            Regular deadheading (removing faded flowers) encourages new blooms, extending their lifespan significantly.</p>
                        </div>
                        <img src="assets/images/plants/longlasting/Carnation.jpg" alt="Carnation" class="plant-img-vertical">
                    </div>
    
                    <div class="detailed-box">
                        <img src="assets/images/plants/longlasting/Chrysanthemum.jpg" alt="Chrysanthemum" class="plant-img-vertical">
                        <div class="text-box">
                            <h3><b>Chrysanthemum</b></h3>
                            <p>Chrysanthemums are popular for their long-lasting blooms and resilience. 
                            They thrive in bright light and require regular watering, ensuring the soil stays slightly moist. 
                            Deadheading spent flowers and providing occasional fertilizer can help extend their bloom time. 
                            These plants also do well outdoors in cool temperatures, making them a great seasonal addition.</p>
                        </div>
                    </div>
    
                    <div class="detailed-box">
                        <div class="text-box">
                            <h3><b>Orchid</b></h3>
                            <p>Orchids are elegant, long-lasting flowering plants that prefer indirect light and a well-draining orchid potting mix. 
                            Water about once a week, allowing the roots to dry slightly between waterings. Avoid letting water sit in the base, as this can cause root rot. 
                            With proper care, orchid blooms can last for months, and the plant can rebloom annually.</p>
                        </div>
                        <img src="assets/images/plants/longlasting/Orchid.jpg" alt="Orchid" class="plant-img-vertical">
                    </div>
                </div>
            `
        },
    
        lowlight: {
            title: "Plants for Low Light",
            content: `
                <div class="header-container">
                    <div class="shadow"></div>
                    <div class="title">
                        <h2>Plants for Low Light</h2>
                    </div>
                </div>
    
                    <div class="detailed-container">
                        <div class="detailed-box">
                            <img src="assets/images/plants/lowlight/Calathea.jpg" alt="Calathea" class="plant-img-vertical">
                            <div class="text-box">
                            <h3><b>Calathea</b></h3>
                            <p>Calatheas thrive in low to medium indirect light, making them perfect for dimly lit spaces. 
                            They enjoy consistently moist soil but dislike standing water. 
                            High humidity is essential for their health, so misting or using a pebble tray with water helps maintain moisture. 
                            Their striking foliage adds a vibrant touch to any low-light room.</p>
                        </div>
                    </div>
    
                    <div class="detailed-box">
                        <div class="text-box">
                            <h3><b>Cast Iron Plant</b></h3>
                            <p>As its name suggests, the Cast Iron Plant is nearly indestructible and can thrive in very low light conditions. 
                            It requires minimal watering, about every two to three weeks, and can handle neglect well. 
                            Its deep green leaves make it a great decorative plant that adapts well to indoor environments.</p>                            
                        </div>
                        <img src="assets/images/plants/lowlight/Cast_Iron_Plant.jpg" alt="Cast Iron Plant" class="plant-img-vertical">
                    </div>
    
                    <div class="detailed-box">
                        <img src="assets/images/plants/lowlight/Chinese_Evergreen.jpg" alt="Chinese Evergreen" class="plant-img-vertical">
                        <div class="text-box">
                            <h3><b>Chinese Evergreen</b></h3>
                            <p>Chinese Evergreens are highly adaptable plants that tolerate low light and occasional drought. 
                            Water only when the soil feels dry, and avoid placing them in direct sunlight, which can scorch their leaves. 
                            Their slow-growing nature and air-purifying qualities make them excellent low-maintenance houseplants.</p>
                        </div>
                    </div>
    
                    <div class="detailed-box">                        
                        <div class="text-box">
                            <h3><b>Pothos</b></h3>
                            <p>Pothos is one of the easiest plants to grow in low light. 
                            It can survive in almost any condition, including dim corners or office spaces. 
                            Water when the top inch of soil is dry, and trim the vines occasionally to keep them from getting too leggy. 
                            This hardy plant is also excellent at improving indoor air quality.</p>
                        </div>
                        <img src="assets/images/plants/lowlight/Pothos.jpg" alt="Pothos" class="plant-img-vertical">
                    </div>
                </div>
            `
        },
    
        droughtresistant: {
            title: "Plants That Need Less Watering",
            content: `
                <div class="header-container">
                    <div class="shadow"></div>
                    <div class="title">
                        <h2>Plants That Need Less Watering</h2>
                    </div>
                </div>
    
                <div class="detailed-container">
                    <div class="detailed-box">
                        <img src="assets/images/plants/droughtresistant/Cactus.jpg" alt="Cactus" class="plant-img-horizontal">
                        <div class="text-box">
                            <h3><b>Cactus</b></h3>
                            <p>Cacti are among the most drought-tolerant plants, requiring watering only every few weeks. 
                            They thrive in bright, direct sunlight and need well-draining soil to prevent root rot. 
                            These low-maintenance plants store water in their thick stems, making them perfect for forgetful plant owners.</p>
                        </div>
                    </div>
    
                    <div class="detailed-box">                        
                        <div class="text-box">
                            <h3><b>Pothos</b></h3>
                            <p>Pothos is not only great for low light but also requires minimal watering. 
                            It can go a week or two without water, only needing a drink when the soil dries out completely. 
                            Its trailing vines are easy to maintain, and even if neglected for a while, it quickly perks back up after watering.</p>
                        </div>
                        <img src="assets/images/plants/droughtresistant/Pothos.jpg" alt="Pothos" class="plant-img-horizontal">
                    </div>
    
                    <div class="detailed-box">
                        <img src="assets/images/plants/droughtresistant/Rubber_Plant.jpg" alt="Rubber Plant" class="plant-img-horizontal">
                        <div class="text-box">
                            <h3><b>Rubber Plant</b></h3>
                            <p>Rubber plants store water in their thick leaves, allowing them to survive with infrequent watering. 
                            Water only when the top few inches of soil are dry, typically every two weeks. 
                            They prefer indirect light and occasional dusting of their broad, glossy leaves to keep them healthy.</p>
                        </div>
                    </div>
    
                    <div class="detailed-box">                    
                        <div class="text-box">
                            <h3><b>Succulent</b></h3>
                            <p>Succulents come in many varieties, all of which require very little water. 
                            They prefer bright light and should only be watered when their soil is completely dry—usually every two to three weeks. 
                            Overwatering is their biggest threat, so it’s best to err on the side of underwatering. 
                            Their ability to retain water makes them an excellent choice for busy plant owners.</p>
                        </div>
                        <img src="assets/images/plants/droughtresistant/Succulent.jpg" alt="Succulent" class="plant-img-horizontal">
                    </div>
                </div>
            `
        }
    };
    
    window.showDetails = function (category) {
        console.log(`Clicked on: ${category}`);
        if (!details[category]) {
            console.error(`Error: No details found for '${category}'`);
            return;
        }
    
        document.getElementById("detail-content").innerHTML = details[category].content;
        document.getElementById("info-container").style.display = "none";
        document.getElementById("detail-view").style.display = "block";
    };

    window.goBack = function () {
        infoContainer.style.display = "flex";
        detailView.style.display = "none";
    };
});
