// Template.header.helpers({ 
//      checkUser: function() {
//         if (Meteor.userId() == '4FAsQkicbAdx78JJB')
//             return true;
//           else 
//         // if (Meteor.userId() == 't75AKZRfurgSei5HK')
//           return true;
//       }
// });



Accounts.config({forbidClientAccountCreation: true});
Accounts.ui.config({ passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL' });