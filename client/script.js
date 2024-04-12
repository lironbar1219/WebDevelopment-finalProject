function selectRoute() {
    var selectedRouteType = document.getElementById("routeType").value;
    var routesMenu = document.getElementById("routesMenu");

    if (selectedRouteType) {
        var routesList = document.getElementById("routesList");
        routesList.innerHTML = ""; // Clear previous routes

        if (selectedRouteType === "on_foot") {
            routesList.innerHTML += '<li><a href="on_foot_route1.html">Route 1</a></li>';
            routesList.innerHTML += '<li><a href="on_foot_route2.html">Route 2</a></li>';
            routesList.innerHTML += '<li><a href="on_foot_route3.html">Route 3</a></li>';
        } else if (selectedRouteType === "by_car") {
            routesList.innerHTML += '<li><a href="by_car_route1.html">Route 1</a></li>';
            routesList.innerHTML += '<li><a href="by_car_route2.html">Route 2</a></li>';
            routesList.innerHTML += '<li><a href="by_car_route3.html">Route 3</a></li>';
        } else if (selectedRouteType === "by_bike") {
            routesList.innerHTML += '<li><a href="by_bike_route1.html">Route 1</a></li>';
            routesList.innerHTML += '<li><a href="by_bike_route2.html">Route 2</a></li>';
            routesList.innerHTML += '<li><a href="by_bike_route3.html">Route 3</a></li>';
        }

        routesMenu.style.display = "block";
    } else {
        routesMenu.style.display = "none";
    }
}
