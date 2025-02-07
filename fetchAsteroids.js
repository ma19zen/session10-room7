async function fetchAsteroids() {
    const API_KEY = "eMvVO9h5ISxqj01hmqavuwmHZdfKY1K3Zm6bty8N"; // Replace with your NASA API Key
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    const sevenDaysLater = new Date();
    sevenDaysLater.setDate(sevenDaysLater.getDate() + 7);
    const endDate = sevenDaysLater.toISOString().split("T")[0]; // 7 days later in YYYY-MM-DD
    
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${endDate}&api_key=${API_KEY}`;
    
    try {
    const response = await fetch(url);
    if (!response.ok) {
    throw new Error("API request failed");
    }
    const data = await response.json();
    
    const asteroidsList = [];
    
    for (const date in data.near_earth_objects) {
    const asteroids = data.near_earth_objects[date];
    
    asteroids.forEach(asteroid => {
    const diameter = asteroid.estimated_diameter.kilometers.estimated_diameter_max;
    asteroidsList.push({ name: asteroid.name, diameter });
    });
    }
    
    console.log("Asteroids approaching Earth in the next 7 days:");
    console.table(asteroidsList);
    } catch (error) {
    console.error("Error fetching asteroid data:", error);
    }
    }
    
    fetchAsteroids();