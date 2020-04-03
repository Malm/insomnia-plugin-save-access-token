let token = null;
let tokenProperty;
let urlRegexp;

const templateTags = [{
    name: 'apitoken',
    displayName: 'API Token',
    description: 'Inserts an API Token fetched from a earlier API login/auth  request',
    args: [
        {
            displayName: 'Login URL regexp',
            description: 'A regexp to match the login url (wrap regexp with quotes "")',
            type: 'string',
            defaultValue: '.*(localhost).*\/(login)'
        },
        {
            displayName: 'Token parameter path',
            description: 'The path of the token from the response separated by dots',
            type: 'string',
            defaultValue: 'accessToken'
        }
    ],
    async run (context, regexp, property) {
        tokenProperty = property;
        urlRegexp = regexp;
        if (!token) {
            //await alert ('To API Token is set, call your login request to set a token');
            return "no-token-fetched";
        } else {
            return token;
        }
    }
}];

// Request hook to save response to file
const responseHooks = [
  context => {
    try {
        const regexp = new RegExp(urlRegexp);
        const urlMatch = regexp.test(context.request.getUrl());
        if (urlMatch) {
            try {
                let response = JSON.parse(context.response.getBody().toString('utf-8'));
                tokenProperty = tokenProperty.split('.');
                for (var i = 0; i < tokenProperty.length; i++) {
                    if (response[tokenProperty[i]] == undefined) {
                        throw new Error(tokenProperty[i] + ' not found')
                    } else {
                        response = response[tokenProperty[i]];
                    }
                }

                if (typeof response === 'string') {
                    token = response;
                }
            } catch (err) {
                console.log(`Error getting token from request with message ${err.message}`, err);
            }
        }
    } catch (err) {
            console.log(`Error using regexp ${urlRegexp} (${err.message})`, err);
    }
  }
];


module.exports = {responseHooks, templateTags};
