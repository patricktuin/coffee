if (Meteor.isClient) {
  Template.coffee.coffeeData = function () {
    return Coffee.find({}, {sort: {date: -1}});
  };
}

// Template.coffee.helpers({ 
//      checkUser: function() {
//         if (Meteor.userId() == '4FAsQkicbAdx78JJB')
//             return true;
//           else 
//         if (Meteor.userId() == 't75AKZRfurgSei5HK')
//           return true;
//       }
// });

Template.coffee.balance = function() {
    var total =0;
    var data = Coffee.find().map(function(coffee) {
        total += coffee.price;
        total = Math.round(total*100)/100;
    });
    return total;
}

// Template.coffee.helpers({ 
//      currentBalance: function() {
//          return Coffee.aggregate([ {$group: {_id: null,total: {$sum: "$price"}}}]);
//       }
// });

Template.coffee.events({ 
     'click #deletetransaction': function() {
          Coffee.remove({_id: this._id})
      }
});

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}






// db.coffee.find( { 'price' : { $type : 1 } } ).forEach( function (x) {   
//   x.bad = new Int(x.price); // convert field to string
//   db.coffee.save(x);
// });
