const { util } = require('prettier');
var SpotifyWebApi = require('spotify-web-api-node');

var scopes = ['user-read-private', 'user-read-email'],
    redirectUri = 'https://example.com/callback',
    clientId = 'e6e5efd969cf4545907c2a721119f11d',
    state = 'belgium';

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
    redirectUri: redirectUri,
    clientId: clientId
});

// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
console.log(authorizeURL);

// var credentials = {
//     clientId: 'e6e5efd969cf4545907c2a721119f11d',
//     clientSecret: 'efdbff8a203d420a8005f351bfc02ae5',
//     redirectUri: 'http://www.michaelthelin.se/test-callback'
// };

// var spotifyApi = new SpotifyWebApi(credentials);

// // The code that's returned as a query parameter to the redirect URI
// var code = 'MQCbtKe23z7YzzS44KzZzZgjQa621hgSzHN';

// // Retrieve an access token and a refresh token
// spotifyApi.authorizationCodeGrant(code).then(
//     function (data) {
//         console.log('The token expires in ' + data.body['expires_in']);
//         console.log('The access token is ' + data.body['access_token']);
//         console.log('The refresh token is ' + data.body['refresh_token']);

//         // Set the access token on the API object to use it in later calls
//         spotifyApi.setAccessToken(data.body['access_token']);
//         spotifyApi.setRefreshToken(data.body['refresh_token']);
//     },
//     function (err) {
//         console.log('Something went wrong!', err);
//     }
// );
/**
 * This example uses the Client Credentials authorization flow.
 */

/**
 * Get the credentials from Spotify's Dashboard page.
 * https://developer.spotify.com/dashboard/applications
 */
// const spotifyApi = new SpotifyWebApi({
//     clientId: 'e6e5efd969cf4545907c2a721119f11d',
//     clientSecret: 'efdbff8a203d420a8005f351bfc02ae5'
// });
// spotifyApi.setAccessToken('BQCnvd_aXLGCL2zuj7_hnhVqDZ2XEoMpuurmOImluQ1SI_Hv6JGd2PINVhUItDrJyJm9EngFNh5lRBMBc-arIW2ZtHscmD48DD7HBt-tAgOAgOX74O0');
// Retrieve an access token using your credentials
// spotifyApi.clientCredentialsGrant().
//     then(function (result) {
//         console.log('It worked! Your access token is: ' + result.body.access_token);
//     }).catch(function (err) {
//         console.log('If this is printed, it probably means that you used invalid ' +
//             'clientId and clientSecret values. Please check!');
//         console.log('Hint: ');
//         console.log(err);
//     });

// Get a playlist
// spotifyApi.getPlaylist('5ieJqeLJjjI8iJWaxeBLuK')
//     .then(function (data) {
//         spotifyApi.play(data)
//             .then(function () {
//                 console.log('Playback started');
//             }, function (err) {
//                 //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
//                 console.log('Something went wrong!', err);
//             });
//         console.log('Some information about this playlist', data.body);
//     }, function (err) {
//         console.log('Something went wrong!', err);
//     });
// Start/Resume a User's Playback
// spotifyApi.play()
//     .then(function () {
//         console.log('Playback started');
//     }, function (err) {
//         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
//         console.log('Something went wrong!', err);
//     });

// Pause a User's Playback
// spotifyApi.pause()
//     .then(function () {
//         console.log('Playback paused');
//     }, function (err) {
//         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
//         console.log('Something went wrong!', err);
//     });

// Seek To Position In Currently Playing Track
// spotifyApi.seek(positionMs)
//     .then(function () {
//         console.log('Seek to ' + positionMs);
//     }, function (err) {
//         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
//         console.log('Something went wrong!', err);
//     });

// // Set Repeat Mode On User’s Playback
// spotifyApi.setRepeat('track')
//     .then(function () {
//         console.log('Repeat track.');
//     }, function (err) {
//         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
//         console.log('Something went wrong!', err);
//     });

// Set Volume For User's Playback
// spotifyApi.setVolume(50)
//     .then(function () {
//         console.log('Setting volume to 50.');
//     }, function (err) {
//         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
//         console.log('Something went wrong!', err);
//     });

// // Skip User’s Playback To Next Track
// spotifyApi.skipToNext()
//     .then(function () {
//         console.log('Skip to next');
//     }, function (err) {
//         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
//         console.log('Something went wrong!', err);
//     });

// // Skip User’s Playback To Previous Track
// spotifyApi.skipToPrevious()
//     .then(function () {
//         console.log('Skip to previous');
//     }, function (err) {
//         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
//         console.log('Something went wrong!', err);
//     });

