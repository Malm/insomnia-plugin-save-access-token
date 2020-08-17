# insomnia-plugin-save-access-token

An [Insomnia](https://insomnia.rest/) plugin to save a access token from a login/auth request to be used in subsequent request through a template variable.

![](https://raw.githubusercontent.com/Malm/insomnia-plugin-save-access-token/master/screen-1.png)

The saved token is accessed through a template variable and can be used in request parameters, headers etc.

![](https://raw.githubusercontent.com/Malm/insomnia-plugin-save-access-token/master/screen-2.png)

Edit the settings of the template variable in order to define which URL the plugin should listen to and what the parameter is called that contains the access token. Note that before you run your login request there will be no token to preview.
