var app = new Vue({
  el: '#app',
  data: {
     results: []
     // products: ['iPhone 7', 'Galaxy S8', 'Nokia N8', 'Xiaomi Mi6']
  },
mounted() {
  	fetch("https://modx-sample.se7.ru/api/products/getList")
            .then((response) => {
                if(response.ok) {
                    return response.json();
                } 
            })
            .then((json) => {

  				    console.log(json["results"]);
              this.results = json["results"];		 
            })
            .catch((error) => {
                console.log('parsing failed');
            });
  }
  })
