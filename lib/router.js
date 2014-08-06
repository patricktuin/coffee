Router.configure({
	layoutTemplate: 'layout',
});

Router.map(function() { 
	this.route('coffee', {path: '/'});


	this.route('addtransaction', { 
		path: '/addtransaction'
	}); 

	this.route('admin', { 
		path: '/admin'
	}); 


});