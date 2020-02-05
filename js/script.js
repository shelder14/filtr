var app = new Vue({
  el: '#app',
  data: {
     results: []
     // products: ['iPhone 7', 'Galaxy S8', 'Nokia N8', 'Xiaomi Mi6']
  },
mounted() {
  	fetch("https://modx-sample.se7.ru/api/products/getList")
            .then(function(response){
				var mas = ['iPhone 7', 'Galaxy S8', 'Nokia N8', 'Xiaomi Mi6']
            	results = mas;
            	console.log(this.results);
            	return mas;
                   
            })
    //         .then(function(json) {
				// this.products = json;
				// console.log(this.products["results"][0]["id"]);			 
    //         })
            .catch((error) => {
                console.log('parsing failed');
            });
  }
  })
