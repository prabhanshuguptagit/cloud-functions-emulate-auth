Barebones wrapper for testing google cloud functions locally. Make authenticated requests to HTTPS callable functions.

Currently there is no way to emulate authenticated requests (firebase auth)to firebase functions.(https://firebase.google.com/docs/functions/local-emulator#invoke_https_callable_functions) This is a quick workaround.

# How to use

- Add api keys and configure authentication in configure.js.

- Run firebase functions:shell in your project directory. Open functions-shim.html in browser or serve locally.


Todo:

- prettify json

- add more auth methods