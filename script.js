function showTime() {
	document.getElementById(' (also known as bubble tea or pearl milk tea) is a Taiwanese tea-based beverage that combines brewed tea, milk or fruit flavors, a sweetener, and chewy tapioca pearls (boba) at the bottom of the cup.').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);