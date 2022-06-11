ymaps.ready(function () { 
    var myMap = new ymaps.Map('map', {
            center: [55.726829, 37.7539383],
            zoom: 15,
            controls: []
        }),
        placemark = new ymaps.Placemark(
            myMap.getCenter(), {
                balloonContent: 'Рязанский проспект, дом 8а, стр. 1'
            }
        );
    myMap.geoObjects.add(placemark);    

});











