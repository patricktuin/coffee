if (Meteor.isServer) {
    Meteor.startup(function () {
        // bootstrap the admin user if they exist -- You'll be replacing the id later
        if (Meteor.users.findOne("Bm2cG9CYFWdAM3KtC"))
            Roles.addUsersToRoles("Bm2cG9CYFWdAM3KtC", ['admin']);

    });
}

Accounts.config({forbidClientAccountCreation: true});