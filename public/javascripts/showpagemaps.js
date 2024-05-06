
mapboxgl.accessToken = 'pk.eyJ1IjoicHJpeWFuc2h1OTI4IiwiYSI6ImNsdDN6cjVlaDFvbjgycmx6eGp4a2RkY2kifQ.qApWqubQ2ClFy_qOOW-dBg';
const map = new mapboxgl.Map({
container: 'map', // container ID
style:'mapbox://styles/mapbox/light-v10',
center: campground.geometry.coordinates,  // starting position [lng, lat]
zoom: 9, // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());
new mapboxgl.Marker()
.setLngLat(campground.geometry.coordinates)
.setPopup(
    new mapboxgl.Popup({offset: 30})
.setHTML(
    `<h3> ${campground.title}</h3><p>${campground.location}</p>`
)
)
.addTo(map)