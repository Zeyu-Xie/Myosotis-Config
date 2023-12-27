const author = "Acan"

// year, month, monthName, date, day, dayName, hour, minute, second
const init_date = () => {
    const date_array_1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const date_array_2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const currentDate = new Date()

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const monthName = date_array_1[month]
    const date = currentDate.getDate()
    const day = currentDate.getDay()
    const dayName = date_array_2[day]
    const hour = currentDate.getHours()
    const minute = currentDate.getMinutes()
    const second = currentDate.getSeconds()

    const _current_year = document.getElementsByClassName("current_year")
    Array.from(_current_year).forEach(item => {
        item.innerText = year
    })
    const _current_month = document.getElementsByClassName("current_month")
    Array.from(_current_month).forEach(item => {
        item.innerText = month
    })
    const _current_monthName = document.getElementsByClassName("current_monthName")
    Array.from(_current_monthName).forEach(item => {
        item.innerText = monthName
    })
    const _current_date = document.getElementsByClassName("current_date")
    Array.from(_current_date).forEach(item => {
        item.innerText = date
    })
    const _current_day = document.getElementsByClassName("current_day")
    Array.from(_current_day).forEach(item => {
        item.innerText = day
    })
    const _current_dayName = document.getElementsByClassName("current_dayName")
    Array.from(_current_dayName).forEach(item => {
        item.innerText = dayName
    })
    const _current_hour = document.getElementsByClassName("current_hour")
    Array.from(_current_hour).forEach(item => {
        item.innerText = hour
    })
    const _current_minute = document.getElementsByClassName("current_minute")
    Array.from(_current_minute).forEach(item => {
        item.innerText = minute
    })
    const _current_second = document.getElementsByClassName("current_second")
    Array.from(_current_second).forEach(item => {
        item.innerText = second
    })
}

// author
const init_author = () => {
    const _author = document.getElementsByClassName("author")
    Array.from(_author).forEach(item => {
        item.innerText = author
    })
}

init_date()
init_author()

// select-view
const init_select_view = () => {

    const _select_views = document.getElementsByClassName("select-view")

    Array.from(_select_views).forEach(item => {

        const _select_view_select = item.querySelector(":scope > .select-view-select")
        const _select_view_views = item.querySelectorAll(":scope > .select-view-view")

        const _select_view_views_selected = item.querySelectorAll(`:scope > .select-view-view.option-${_select_view_select.value}`)
        Array.from(_select_view_views).forEach(_item => _item.style.display = "none")
        Array.from(_select_view_views_selected).forEach(_item => _item.style.display = "block")

        _select_view_select.onchange = () => {

            const _select_view_views_selected = item.querySelectorAll(`:scope > .select-view-view.option-${_select_view_select.value}`)
            Array.from(_select_view_views).forEach(_item => _item.style.display = "none")
            Array.from(_select_view_views_selected).forEach(_item => _item.style.display = "block")
        }

    })
}

init_select_view()
