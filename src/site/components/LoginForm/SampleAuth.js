/**
 * SampleAuth.js
 * @private
 */


export default function SampleAuth(username, password) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(console.log("Username: " + username + " Password: " + password));
        }, 1000);
    });
}