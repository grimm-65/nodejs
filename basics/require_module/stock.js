const stock = function (){
	console.log('Stock is currently empty');
}

const price = function(){
	console.log('Current price is unavailable');
}

const quant = function(){
	console.log('Current Quantity is unnown');
}
//Exporting more than one ()

//module.exports = stock;
//module.exports.price = price;
//module.exports.quant = quant;

module.exports = {
	price,
	quant
}
