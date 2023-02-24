// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
// 	btn.addEventListener("click", function (e) {
// 		const question = e.currentTarget.parentElement.parentElement;
// 		question.classList.toggle('show-text');
// 	});
// });

const questions = document.querySelectorAll(".question");
const previous = document.querySelector(".previous-btn")

questions.forEach(function (question) {
	const btn = question.querySelector(".question-btn");
	btn.addEventListener("click", function() {
		questions.forEach(function (item) {
			if (item !== question) {
				item.classList.remove("show-text");
			}
		})
		question.classList.toggle("show-text");
	});
});


previous.addEventListener("click", function() {
	window.history.back();
});

var mapOptions = {
   center: new naver.maps.LatLng(36.6322344, 127.4582594),
   zoom: 19
};

var map = new naver.maps.Map('map', mapOptions);

var markerOptions = {
    position: new naver.maps.LatLng(36.6322344, 127.4582594),
    map: map,
    title: '면식당 충북대점'
};
var marker = new naver.maps.Marker(markerOptions);

var center = map.getCenter();
marker.setPosition(center);

var infoWindowOptions = {
    content: '<div style="padding:5px;">면식당 충북대점</div>'
};
var infoWindow = new naver.maps.InfoWindow(infoWindowOptions);
naver.maps.Event.addListener(marker, 'click', function() {
    infoWindow.open(map, marker);
});