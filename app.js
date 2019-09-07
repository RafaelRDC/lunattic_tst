var firebaseConfig = {
    apiKey: "AIzaSyBmfC4Oc7QKKy-w0HVTylCjzuBkcfww1RA",
    authDomain: "lunattic-acd25.firebaseapp.com",
    databaseURL: "https://lunattic-acd25.firebaseio.com",
    projectId: "lunattic-acd25",
    storageBucket: "lunattic-acd25.appspot.com",
    messagingSenderId: "754179235652",
    appId: "1:754179235652:web:412b413d897d7bc0074111"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function buy(){
	var produtosF =[];
	for (let i = 0; i < produtos.length; i++) {
		if (produtos[i].cart){
			var produto = {
				nome: produtos[i].nome,
				preco: produtos[i].preco,
				qnt: produtos[i].qnt,
				total: produtos[i].total,
			}
			produtosF.push(produto)
		}

	}
	firebase().database().ref('cart').push({
		total:total(),
		produtos:produtosF 
	});
	clean();
}

var produtos = [
	{
		id:1,
		img:'img/product/l-product-1.png',
		nome:'oi1',
		preco:3,
		cart:false,
		qnt:1,
		total:0
	},
	{
		id:2,
		img:'img/product/l-product-2.png',
		nome:'oi2',
		preco:4,
		cart:false,
		qnt:1,
		total:0
	},
];

function total(){
	let total = 0;
	for (let i = 0; i < produtos.length; i++) {
		if (produtos[i].cart){
			total+= produtos[i].total;
		}
	}
	return total
}

var con = 0;
var con2 = []; //position at table

function clean() {
	for (let i = 0; i < produtos.length; i++) {
		produtos[i].cart=false;
		produtos[i].qnt=1,
		produtos[i].total=0,
		con2=[];
		updateCart();
	}
}
  //RENDER
  (() =>{
  	for (let i = 0; i < produtos.length; i++) {
  		document.getElementById('row1').innerHTML+=`
  			<div class="card m-2" style="width:10rem;">
  			<img src="${produtos[i].img}" class="card-img-top>
  			<div class="card-body">
  			<h5 class= "card-title">${produtos[i].nome}</h5>
  			</div>
  			</div>

  		`;
  	}
  })();