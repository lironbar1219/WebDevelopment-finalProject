function selectRoute() {
    let selectedRouteType = document.getElementById("routeType").value;
    let routesMenu = document.getElementById("routesMenu");

    if (selectedRouteType) {
        let routesList = document.getElementById("routesList");
        routesList.innerHTML = ""; // Clear previous routes

        routesList.innerHTML += '<Button class="fromListRouts" onclick=fetchRoutes()>Route 1</Button>';
        routesList.innerHTML += '<Button class="fromListRouts" onclick=fetchRoutes()>Route 2</Button>';
        routesList.innerHTML += '<Button class="fromListRouts" onclick=fetchRoutes()>Route 3</Button>';
        routesMenu.style.display = "block";
    } else {
        routesMenu.style.display = "none";
    }
}

// TODO: Implement fetchRoutes function, to fetch routes from the server
async function fetchRoutes() {
    let selectedRouteType = document.getElementById("routeType").value;
    let selectedCountry = document.getElementById("country").value;
    let routesMenu = document.getElementById("routesMenu");
    let routesList = document.getElementById("routesList");

    if (!selectedRouteType || !selectedCountry) {
        routesMenu.style.display = "none";
        return; // Exit if selections are not completed
    }

    // Clear previous routes
    routesList.innerHTML = "";

    try {
        const response = await fetch(`/get-routes?type=${selectedRouteType}&country=${selectedCountry}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const routes = await response.json();

        // Dynamically add routes to the list
        routes.forEach(route => {
            routesList.innerHTML += `<li><a href="${route}">Route</a></li>`;
        });

        routesMenu.style.display = "block";
    } catch (error) {
        console.error('Error fetching routes:', error);
        routesMenu.style.display = "none";
    }
}

