# insomnia-plugin-save-access-token

An [Insomnia](https://insomnia.rest/) plugin to save a access token from a login/auth request to be used in subsequent request through a template variable. 

![](/Users/malm/Code/Plugins/insomnia/save-access-token/screen-1.png)

The saved token is accessed thourgh a template variable and can be used in request parameters, headers etc.

![](/Users/malm/Code/Plugins/insomnia/save-access-token/screen-2.png)

Edit the settings of the template variable in order to define which URL the plugin should listen to and what the parameter is called that contains the access token. Note that before you run your login request there will be no token to preview.