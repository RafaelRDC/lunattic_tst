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
				total: produtos[i].total
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
		img:'./oi1.png',
		nome:'oi1',
		preco:3,
		cart:false,
		qnt:1,
		total:0
	},
	{
		id:2,
		img:'./oi2.png',
		nome:'oi2',
		preco:4,
		cart:false,
		qnt:1,
		total:0
	},
];

  //RENDER
  (() =>{

  })();