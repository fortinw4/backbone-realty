var HomeModel = Backbone.Model.extend({
	defaults: {
		price: null, 
		realtorId: null,
		city: null,
		street: null,
		state: null
	},
	url: function(){
		var baseUrl = 'http://localhost:3000/homes/'

		if (this.isNew()) {
			return baseUrl 
		} else {
			return baseUrl + this.id
		}
	}
})  

var homes = [
	{
		price: 1000000,
		realtorId: 1,
		city: 'Muppetville',
		street: '123 Sesame St',
		state: 'NC'
	},

	{
		price: 200000,
		realtorId: 2,
		city: 'Muppetville',
		street: '234 Sesame St #B',
		state: 'NC'
	}

]

// console.log(homes[0])
// console.log(homes[1])

// var house1 = new HomeModel(homes[0])

// console.log(house1)

// house1
// 	.set('price', 23434634)
// 	.set('street', '100 Farm Ln')
// 	.set('state', 'MI')

// 	//OR

// house1.set({
// 	price: 2345546,
// 	street: '100 Farm Ln',
// 	state: 'MI'
// })

var house2 = new HomeModel({
	id: 2
})

//$.get()  data from db.JSON:

house2.fetch()  
	.done(function(house){
		console.log('AJAX Done', house)
		console.log(house2.get('city'))
	})
	.fail(function(){
		alert('Critical Failure!')
	})