var app = new Vue({
  el: '#app',
  data: {
    mes: 'Hello Vue!'
  }
})
var app2 = new Vue({
  el: '#app-2',
  data: {
    me1212: "item" + new Date().toLocaleString(),
    message: "title",
    href: "link"
  }
})
var app3 = new Vue({
  el: '#app3',
  data: {
    seen: false
  }
})
var app4 = new Vue({
	el: '#app4',
	data: {
		todos: [
			{text: "value1" },
			{text: "value2" }
		]
	}
})
