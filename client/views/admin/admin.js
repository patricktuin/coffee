if (Meteor.isClient) {
    Template.admin.helpers({
        // check if user is an admin
        isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        }
    })
}

if (Meteor.isClient) {
    Template.header.helpers({
        // check if user is an admin
        checkUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        }
    })
}

if (Meteor.isClient) {
    Template.coffee.helpers({
        // check if user is an admin
        checkUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        }
    })
}