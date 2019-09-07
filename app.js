db.collection('produtos').get().then((snapshot) => {
	console.log(snapshot.docs);
})