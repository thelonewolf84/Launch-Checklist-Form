// Write your JavaScript code here!
window.addEventListener("load", function() {

	let fetchJson = document.getElementById("missionTarget");

	const fetchPromise = fetch("https://handlers.education.launchcode.org/static/planets.json");
			fetchPromise.then( function(response) {
			   const jsonPromise = response.json();
			   jsonPromise.then( function(json) {
			   	for(let i = 0; i < json.length; i++){
			   		let random = Math.floor(Math.random() * json.length)
				    fetchJson.innerHTML =
		            `<h2>Mission Destination</h2>
					<ol>
					   <li>Name: ${json[random].name}</li>
						<li>Diameter: ${json[random].diameter}</li>
						<li>Star: ${json[random].star}</li>
						<li>Distance from Earth: ${json[random].distance}</li>
						<li>Number of Moons: ${json[random].moons}</li>
				    </ol>
					<img src="${json[random].image}">
					` 
				}	
			});
		});

	let form = document.querySelector("form");

	form.addEventListener("submit", function(event) {

        let pilotNameInput = document.querySelector("input[name=pilotName]");
        
        let copilotNameInput = document.querySelector("input[name=copilotName]");

        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");

        let cargoMassInput = document.querySelector("input[name=cargoMass]");

        const numbers = /^[0-9]+$/;

        const letters = /^[A-Za-z]+$/;

        let pName = document.getElementById("pilotStatus");

        let cpName = document.getElementById("copilotStatus");

        let visible = document.getElementById("faultyItems");

        let fl = document.getElementById("fuelStatus");

        let cargo = document.getElementById("cargoStatus");

        let launchStatus = document.getElementById("launchStatus");

        if (pilotNameInput.value.match(letters)){
        	pName.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
        }else{
        	alert("Pilot name is required!");
        }

        if (copilotNameInput.value.match(letters)){
        	cpName.innerHTML = `Co-Pilot ${copilotNameInput.value} is ready for launch`;
        }else{
        	alert("Co-pilot name is required!");
        }	

        if (fuelLevelInput.value.match(numbers)){
            console.log(fuelLevelInput.value)
        }else{
        	alert("Fuel level number is required!");
        }

        if (cargoMassInput.value.match(numbers)){
            console.log(cargoMassInput.value)
        }else{
        	alert("Cargo Mass number is required!");
        }

        if(fuelLevelInput.value < 10000){
        	visible.style.visibility = "visible";
        	fl.innerHTML = "Fuel level too low for launch";
        	launchStatus.innerHTML = "Shuttle not ready for launch";
        	launchStatus.style.color = "red"
        }else if(cargoMassInput.value > 10000){
        	visible.style.visibility = "visible";
        	cargo.innerHTML = "Cargo mass is too much for the shuttle to take off";
        	launchStatus.innerHTML = "Shuttle not ready for launch";
        	launchStatus.style.color = "red";
        }else{
        	visible.style.visibility = "visible";
        	cargo.innerHTML = "Cargo mass is ready for launch";
        	fl.innerHTML = "Fuel level is ready for launch";
        	launchStatus.innerHTML = "Shuttle is ready for launch";
        	launchStatus.style.color = "green";
        }

        event.preventDefault();
    });
 });

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
