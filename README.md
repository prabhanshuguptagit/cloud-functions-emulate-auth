Simple wrapper for testing google cloud functions locally. Make authenticated requests to HTTPS callable functions.

Currently there is [no way to emulate][1] authenticated requests to firebase functions (using firebase auth). This is a quick workaround.

# How to use
- Add api keys and configure authentication in configure.js.

- Run firebase functions:shell in your project directory. Open functions-shim.html in browser or serve locally.


Todo:
- prettify json

- add more auth methods

[1]: https://firebase.google.com/docs/functions/local-emulator#invoke_https_callable_functions
