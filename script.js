'use strict';

const warning = document.querySelector('.js-warning');
const notification = document.querySelector('.js-notification');
const inputBlock = document.querySelector('.js-input-block');
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');

function isValidEmail(email) {
    const emailRegex =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return emailRegex.test(email);
}

function checkSumbission(evt) {
    console.log(input.value);
    if (!isValidEmail(input.value)) {
        evt.preventDefault();
        showWarnings();
    }
}

function showWarnings() {
    inputBlock.classList.add('input-block__elements--invalid');
    notification.hidden = false;
    warning.hidden = false;
}

function hideWarnings() {
    if (!notification.hidden) {
        inputBlock.classList.remove('input-block__elements--invalid');
        notification.hidden = true;
        warning.hidden = true;
    }
}

form.addEventListener('submit', checkSumbission);
input.addEventListener('input', hideWarnings);
