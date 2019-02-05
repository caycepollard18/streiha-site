/**
 * withPageTransitionMethods.js
 * @private
 */

const DELAY = 200;

const target = document.body;
const transitionClass = 'trans';

function delay() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, DELAY);
    });
}

function addBodyClass(className) {
    return new Promise(function(resolve) {
        resolve(target.classList.add(className));
    });
}

function removeBodyClass(className) {
    return new Promise(function(resolve) {
        resolve(target.classList.remove(className));
    });
}

export function pageFadeIn(pageClass) {
    return addBodyClass(transitionClass).then(() => addBodyClass(pageClass));
}

export function pageFadeOut(pageClass) {
    return removeBodyClass(pageClass).then(() => delay()).then(() => removeBodyClass(transitionClass));
}