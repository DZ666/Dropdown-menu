function deliv() {
	document.getElementById('form').innerHTML = "activeForm";
}

function back() {
	document.getElementById('card').style.cssText = `
		transform: translateX(-135px);
	`
	document.getElementById('card').innerHTML = `
	<a href="pages/cart.html">
		<img src="assets/img/cart.png" width="30">
		<p>в корзине: <span id="QuantityOfGoods">0</span></p>
	</a>
	<div onclick="moveToRight()" class="trigger"><p>открыть</p></div>
	`;
}

function moveToRight() {
	document.getElementById('card').style.cssText = `
		transform: translateX(0px);
	`
	document.getElementById('card').innerHTML = `
	<a href="pages/cart.html">
		<img src="assets/img/cart.png" width="30">
		<p>в корзине: <span id="QuantityOfGoods">0</span></p>
	</a>
	<div onclick="back()" class="trigger"><p>закрыть</p></div>
	`;
}