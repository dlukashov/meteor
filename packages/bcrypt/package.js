Package.describe({
      summary: "bcrypt is a library help you hash passwords",
        internal: false
});

//Will add in client side later if there is an interest for it

Package.on_use(function (api) {
	api.add_files('bcrypt.js', 'server');
});
