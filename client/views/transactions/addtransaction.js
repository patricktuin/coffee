Coffee = new Meteor.Collection('coffee');
Money = new Meteor.Collection('money');

Template.addtransaction.events({ 
	'submit form': function(e) {
	e.preventDefault();

	priceString = $(e.target).find('[id=price]').val();
	priceNumber = parseFloat(priceString);

	var transaction = {
		date: $(e.target).find('[id=date]').val(),
		action: $(e.target).find('[id=action]').val(),
		coffeebrand: $(e.target).find('[id=brand]').val(),
		type: $(e.target).find('[id=type]').val(),
		amount: $(e.target).find('[id=amount]').val(),
		price: priceNumber
	}

	transaction = Coffee.insert(transaction);

	Router.go('addtransaction', transaction); 
	}
});
