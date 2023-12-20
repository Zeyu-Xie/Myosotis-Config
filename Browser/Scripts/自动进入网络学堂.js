// ==UserScript==
// @name        自动进入网络学堂
// @icon        https://zeyu-xie.github.io/Myosotis-Profile/favicon/favicon.svg
// @version     2.0.0
// @description 自动进入网络学堂
// @author      Acan
// @license     MIT
// @run-at      document-end
// @match       *://learn.tsinghua.edu.cn/*
// ==/UserScript==

(function () {

    // 输入用户名及密码
    const func1 = () => {
        const config = [
            {
                href: /^https:\/\/learn\.tsinghua\.edu\.cn.*/,
                elements: [
                    "input[name='i_user']",
                    "input[name='i_pass']",
                    "input[id='loginButtonId']",
                    "a[class='gotoin']"
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
                        eval: "click()"
                    },
                    {
                        index: 3,
                        eval: "click()"
                    }
                ]
            }
        ]
        console.log("# Password Filler by Acan")
        config.forEach(website => {
            if (window.location.href.match(website.href)) {
                const ele_num = website.elements.length
                const man_num = website.manipulations.length
                let ele = []
                for (let i = 0; i < ele_num; i++) {
                    ele.push(document.querySelector(website.elements[i]))
                }
                for (let i = 0; i < man_num; i++) {
                    console.log(`Step ${i + 1}. ` + website.elements[website.manipulations[i].index] + ": " + website.manipulations[i].eval)
                    eval(`ele[${website.manipulations[i].index}].${website.manipulations[i].eval}`)
                }
            }
        })
    }

    // 欢迎界面 - 已登录，需点击“进入网络学堂”
    const func2 = () => {
        const config = [
            {
                href: /^https:\/\/learn\.tsinghua\.edu\.cn.*/,
                elements: [
                    "a[class='gotoin']"
                ],
                manipulations: [
                    {
                        index: 0,
                        eval: "click()"
                    }
                ]
            }
        ]
        console.log("# Password Filler by Acan")
        config.forEach(website => {
            if (window.location.href.match(website.href)) {
                const ele_num = website.elements.length
                const man_num = website.manipulations.length
                let ele = []
                for (let i = 0; i < ele_num; i++) {
                    ele.push(document.querySelector(website.elements[i]))
                }
                for (let i = 0; i < man_num; i++) {
                    console.log(`Step ${i + 1}. ` + website.elements[website.manipulations[i].index] + ": " + website.manipulations[i].eval)
                    eval(`ele[${website.manipulations[i].index}].${website.manipulations[i].eval}`)
                }
            }
        })
    }

    // 提示界面 - 未登录，需点击“登录网络学堂”
    const func3 = () => {
        const _login = document.querySelector("a[class='chongxin']")
        _login.click()
    }

    try {
        func1()
    } catch (err) {
        console.log("ERROR from func1", err)
    }

    try {
        func2()
    } catch (err) {
        console.log("ERROR from func2", err)
    }

    try {
        func3()
    } catch (err) {
        console.log("ERROR from func3", err)
    }

})();