var updateBtns  = document.getElementsByClassName('update-cart')
for (var i = 0; i<updateBtns.length;i++){
	updateBtns[i].addEventListener('click',function(){
		var productId = this.dataset.product  //this = self, dataset.product = data-product
		var action = this.dataset.action // data-action = 'add'
		console.log('productId:', productId,'action:',action)

		console.log("USER:", user)
		if(user === 'AnonymousUser'){
			console.log('Not logged in')

		}else{
			updateUserOrder(productId,action)
			// console.log('User is logged in, sending data..')
		}
	})

}

// instead of just showing msg, we add functionality when logged in.
function updateUserOrder(productId, action){
	console.log('User is authenticated, sending data...')

		var url = '/update_item/'

// fetch -> send our POST data to urll, and what kind of data.
		fetch(url, {
			method:'POST',
			headers:{
				'Content-Type':'application/json',
				'X-CSRFToken':csrftoken,
			}, 
			body:JSON.stringify({'productId':productId, 'action':action}) //body = data we want to send, as a string and in json form.
		})
		//promise.
		.then((response) => {
		   return response.json();
		})
		// .then((data) => {
		// 	console.log('data',data)
		//  })
 
		.then((data) => {
		    location.reload() //reload the page
		});
}

// var updateBtns = document.getElementsByClassName('update-cart')

// for (i = 0; i < updateBtns.length; i++) {
// 	updateBtns[i].addEventListener('click', function(){
// 		var productId = this.dataset.product
// 		var action = this.dataset.action
// 		console.log('productId:', productId, 'Action:', action)
// 		console.log('USER:', user)

// 		if (user == 'AnonymousUser'){
// 			addCookieItem(productId, action)
// 		}else{
// 			updateUserOrder(productId, action)
// 		}
// 	})
// }

// function updateUserOrder(productId, action){
// 	console.log('User is authenticated, sending data...')

// 		var url = '/update_item/'

// 		fetch(url, {
// 			method:'POST',
// 			headers:{
// 				'Content-Type':'application/json',
// 				'X-CSRFToken':csrftoken,
// 			}, 
// 			body:JSON.stringify({'productId':productId, 'action':action})
// 		})
// 		.then((response) => {
// 		   return response.json();
// 		})
// 		.then((data) => {
// 		    location.reload()
// 		});
// }

// function addCookieItem(productId, action){
// 	console.log('User is not authenticated')

// 	if (action == 'add'){
// 		if (cart[productId] == undefined){
// 		cart[productId] = {'quantity':1}

// 		}else{
// 			cart[productId]['quantity'] += 1
// 		}
// 	}

// 	if (action == 'remove'){
// 		cart[productId]['quantity'] -= 1

// 		if (cart[productId]['quantity'] <= 0){
// 			console.log('Item should be deleted')
// 			delete cart[productId];
// 		}
// 	}
// 	console.log('CART:', cart)
// 	document.cookie ='cart=' + JSON.stringify(cart) + ";domain=;path=/"
	
// 	location.reload()
// }