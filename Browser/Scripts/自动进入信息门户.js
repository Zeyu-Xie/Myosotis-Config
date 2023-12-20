// ==UserScript==
// @name        自动进入信息门户
// @icon        https://zeyu-xie.github.io/Myosotis-Profile/favicon/favicon.svg
// @version     2.0.0
// @description 自动进入信息门户
// @author      Acan
// @license     MIT
// @run-at      document-end
// @match       *://info.tsinghua.edu.cn/*
// ==/UserScript==

(function () {

    const config = [
        {
            href: /^http:\/\/info\.tsinghua\.edu\.cn.*/,
            elements: [
                "input[name='userName']",
                "input[name='password']",
                "td[class='but']"
            ],
            manipulations: [
                {
                    index: 0,
                    eval: "value='<Your Student ID>'"
                },
                {
                    index: 1,
                    eval: "value='<Your Password>'"
                },
                {
                    index: 2,
                    eval: "firstElementChild.click()"
                }
            ]
        }
    ]
    console.log("# Password Filler_2 by Acan")
    config.forEach(website => {
        if (window.location.href.match(website.href)) {
            const ele_num = website.elements.length
            const man_num = website.manipulations.length
            let ele=[]
            for (let i = 0; i < ele_num; i++) {
                ele.push(document.querySelector(website.elements[i]))
            }
            for (let i = 0; i < man_num; i++) {
                console.log(`Step ${i + 1}. ` + website.elements[website.manipulations[i].index] + ": " + website.manipulations[i].eval)
                eval(`ele[${website.manipulations[i].index}].${website.manipulations[i].eval}`)
            }
        }
    })
})();
