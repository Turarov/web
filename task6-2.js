let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Taraz","Aktobe","Oral"],"Russia":["Moscow","Belogorsk","Kohma"],"England":["Oksford","Kembridzh","Lester"],"France":["Bordo","Paris","Ren"]};
var select = document.getElementById('countries');
for (var country of countries){
	var newitem = document.createElement('option');
	newitem.textContent = country;
	
	select.appendChild(newitem);
}

function City() {

	document.getElementById('cities').length = 1;

	var selector = event.currentTarget.value;
	var select = document.getElementById('cities');
	for(var i = 0; i < cities_by_country[selector].length; i++){
		
		var option = document.createElement('option');
		option.textContent = cities_by_country[selector][i];
		select.appendChild(option);
	}
}



document.querySelector("#countries").addEventListener('change',City);