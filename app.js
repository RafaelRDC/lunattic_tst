function setup(){
	var firebaseConfig = {
	    apiKey: "AIzaSyBmfC4Oc7QKKy-w0HVTylCjzuBkcfww1RA",
	    authDomain: "lunattic-acd25.firebaseapp.com",
	    databaseURL: "https://lunattic-acd25.firebaseio.com",
	    projectId: "lunattic-acd25",
	    storageBucket: "lunattic-acd25.appspot.com",
	    messagingSenderId: "754179235652",
	    appId: "1:754179235652:web:412b413d897d7bc0074111"
	  };
	  firebase.initializeApp(firebaseConfig);
	  db = firebase.database();

	  var ref = db.ref('produtos').child('tiedie').child('camisas');
	  ref.on('value', gotData, errData);
}

function gotData(data)
{
	var produtos = data.val();
	var keys = Object.keys(produtos);
	console.log(keys);

	var produto = keys[0];
	var id = produtos[produto]['id'];
	var nome = produtos[produto]['nome'];
	var quantidade = produtos[produto]['quantidade'];
	var preco = produtos[produto]['preco'];

	(() =>{
		document.getElementById('row1').innerHTML+=`
		<h4>${nome}</h4>`;
		})();

	

	/*for (var i = 0; i < keys.length; i++)
	{
		var produto = keys[i];
		var id = produtos[produto]['id'];
		var nome = produtos[produto]['nome'];
		var quantidade = produtos[produto]['quantidade'];
		var preco = produtos[produto]['preco'];

		(() =>{
			document.getElementById('row1').innerHTML+=`
			<h4>${nome}</h4>`;
  		})();


		//var li = createElement('li', initials + ": " + score);
		//li.parent('row1');
	}*/
}

function errData(err){
	console.log('Error!!');
	console.log(err);
}











/* -------------------------------------------------------------------------------------
const cafeList = document.querySelector('#cafe-list');

function renderCafe(doc){
	let li = document.createElement('li');
	let nome = document.createElement('span');
	let preco = document.createElement('span');

	li.setAttribute('data-id', doc.id);
	nome.textContent = doc.data().nome;
	preco.textContent =  doc.data().preco;

	li.appendChild(nome);
	li.appendChild(preco);

	cafeList.appendChild(li); 
}

db.collection('produtos').get().then((snapshot) =>{
	snapshot.docs.forEach(doc => {
		renderCafe(doc);
	})
}) 

*/

















/*------------------------------------------------------------------------------------   

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
*/

 /* //RENDER
  (() =>{
  	setup();
	document.getElementById('row1').innerHTML+=`
		<h4>${produto[0]}</h4>
	`;
  })();
 */