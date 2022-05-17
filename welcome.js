var defaultURL = 'https://api.ipfind.com';
		var key = '3768fbdd-45a9-4178-9e94-f0e746ced147';
		var ip = "";
		let url;
		var rawData;
		var returnData;
		var parseData;
	
		var mymap;

		function getResult() {	
			ip = document.getElementById('ip_input').value;
			url = defaultURL + '?ip=' + ip + '&auth=' + key;
		
			fetch(url)
				.then(response => response.json())
				.then(function(rawData) {
					console.log(rawData);
					returnData = JSON.stringify(rawData);
					parseData = JSON.parse(returnData);
					if (ip === ""){
						window.alert("Please input a valid IP address.");
					} else {
						mymap = L.map('mapid').setView([parseData.latitude, parseData.longitude], 12);
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
							maxZoom: 19,
							attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
						}).addTo(mymap);
						L.marker([parseData.latitude, parseData.longitude]).bindPopup(parseData.city).addTo(mymap);
					}
				})
				.catch(function() {
					console.log("No IP found");
				});
		}	