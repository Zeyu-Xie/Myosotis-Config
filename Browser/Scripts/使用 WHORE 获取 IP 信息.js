// ==UserScript==
// @name        使用 WHORE 获取 IP 信息
// @icon        https://zeyu-xie.github.io/Myosotis-Profile/favicon/favicon.svg
// @version     2.0.0
// @description 使用 WHORE 获取 IP 信息
// @author      Acan
// @license     MIT
// @run-at      document-end
// @match       *://*/*
// ==/UserScript==

(function () {

    const f_time = () => {
        var currentDate = new Date();

        var year = currentDate.getFullYear();
        var month = currentDate.getMonth() + 1;
        var day = currentDate.getDate();

        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();

        var formattedDate = year + '-' +
            (month < 10 ? '0' : '') + month + '-' +
            (day < 10 ? '0' : '') + day;

        var formattedTime = (hours < 10 ? '0' : '') + hours + ':' +
            (minutes < 10 ? '0' : '') + minutes + ':' +
            (seconds < 10 ? '0' : '') + seconds;

        return formattedDate + " " + formattedTime;

    }

    const btn = document.createElement("button")
    btn.style.zIndex = "100"
    btn.style.position = "fixed"
    btn.style.top = "10px"
    btn.style.right = "10px"
    btn.innerText = "WHOER"
    btn.addEventListener("click", () => {
        window.open("https://whoer.com/zh/")
    })

    const _body = document.getElementsByTagName("body")[0]
    _body.appendChild(btn)

    if (window.location.href === "https://whoer.com/zh/") {
        setTimeout(() => {

            const ip = document.getElementById("copyTarget0").innerText
            const region = document.querySelector("#__nuxt > div > div.indexWarp > div.header-ip-search > div.head-content > div.local").innerText
            const isp = document.querySelector("#__nuxt > div > div.indexWarp > div.header-ip-search > div > div.message-content > div > div:nth-child(1) > div.t2 > span").innerText
            const dns = document.querySelector("#__nuxt > div > div.indexWarp > div.header-ip-search > div > div.message-content > div > div:nth-child(2) > div.t2 > span.dns").innerText
            const dns_region = document.querySelector("#__nuxt > div > div.indexWarp > div.header-ip-search > div > div.message-content > div > div:nth-child(2) > div.t2 > span.country").innerText
            const host_name = document.querySelector("#__nuxt > div > div.indexWarp > div.header-ip-search > div > div.message-content > div > div:nth-child(3) > div.t2 > span:nth-child(3)").innerText
            const proxy = document.querySelector("#__nuxt > div > div.indexWarp > div.header-ip-search > div > div.message-content > div > div:nth-child(4) > div.t2 > span:nth-child(4)").innerText
            const os = document.querySelector("#__nuxt > div > div.indexWarp > div.header-ip-search > div > div.message-content > div > div:nth-child(5) > div.t2 > span").innerText
            const anonymizer = document.querySelector("#__nuxt > div > div.indexWarp > div.header-ip-search > div > div.message-content > div > div:nth-child(6) > div.t2 > span:nth-child(4)").innerText
            const browser = document.querySelector("#__nuxt > div > div.indexWarp > div.header-ip-search > div > div.message-content > div > div:nth-child(7) > div.t2 > span").innerText
            const blacklist = document.querySelector("#__nuxt > div > div.indexWarp > div.header-ip-search > div > div.message-content > div > div:nth-child(8) > div.t2 > span:nth-child(4)").innerText
            const canvas = document.querySelector("#__nuxt > div > div.indexWarp > div.header-ip-search > div > div.message-content > div > div:nth-child(9) > div.t2 > span").innerText
            const fraud_score = document.querySelector("#__nuxt > div > div.indexWarp > div.header-ip-search > div > div.message-content > div > div:nth-child(10) > div.t2 > span").innerText
            const ip_type = document.querySelector("#__nuxt > div > div.indexWarp > div.header-ip-search > div > div.message-content > div > div:nth-child(11) > div.t2 > span").innerText
            const asn = document.querySelector("#__nuxt > div > div.indexWarp > div.header-ip-search > div > div.message-content > div > div:nth-child(12) > div.t2 > span").innerText

            let str = ""

            str += ("Time: " + f_time())
            str += "\n"
            str += ("IP: " + ip)
            str += "\n"
            str += ("Region: " + region)
            str += "\n"
            str += ("ISP: " + isp)
            str += "\n"
            str += ("DNS: " + dns)
            str += "\n"
            str += ("DNS Region: " + dns_region)
            str += "\n"
            str += ("Host Name: " + host_name)
            str += "\n"
            str += ("Proxy: " + proxy)
            str += "\n"
            str += ("OS: " + os)
            str += "\n"
            str += ("Anonymizer: " + anonymizer)
            str += "\n"
            str += ("Browser: " + browser)
            str += "\n"
            str += ("Blacklist: " + blacklist)
            str += "\n"
            str += ("Canvas: " + canvas)
            str += "\n"
            str += ("Fraud Score: " + fraud_score)
            str += "\n"
            str += ("IP Type: " + ip_type)
            str += "\n"
            str += ("ASN: " + asn)
            str += "\n"

            console.log(str)
            window.alert(str)

        }, 8e3);
    }

})();
