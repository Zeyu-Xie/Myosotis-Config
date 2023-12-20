// ==UserScript==
// @name        自动填写 Hydrangea Quick Mailer
// @icon        https://zeyu-xie.github.io/Myosotis-Profile/favicon/favicon.svg
// @version     2.0.0
// @description 自动填写 Hydrangea Quick Mailer
// @author      Acan
// @license     MIT
// @run-at      document-end
// @match       *://localhost:3000/*
// @match       *://zeyu-xie.github.io/Hydrangea-Quick-Mailer/*
// ==/UserScript==

(function () {

    const _serviceProvider = document.getElementById("serviceProvider")
    _serviceProvider.value = "your_service_provider"

    const _username = document.getElementById("username")
    const _password = document.getElementById("password")
    _username.value = "your_email_address",
    _password.value = "your_email_password"

    const _name = document.getElementById("name")
    const _from = document.getElementById("from")
    const _to = document.getElementById("to")
    _name.value = "your_name"
    _from.value = "your_from"
    _to.value = "your_to"

    const _subject = document.getElementById("subject")
    _subject.value = "your_title"

    const _text = document.getElementById("text")
    _text.value = "This is a test sentence."

})();