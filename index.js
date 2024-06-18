let date = new Date()
currYear = date.getFullYear()
currMonth = date.getMonth()
let year = document.querySelector(".year")
let month = document.querySelector(".month")
let dayTag = document.querySelector(".day")
let prevNextbtn = document.querySelectorAll(".icons i")



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


const calenderFunc = () => {
    //getting last date of this month
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    //getting first day of this month
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    //getting last day of this month
    let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
    //getting last date of previous month
    let lastDateOfPrevMonth = new Date(currYear, currMonth, 0).getDate();


    liTag = ""
    //to get previous month last days
    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfPrevMonth - i + 1}</li>`
    }


    //to get present month all days
    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        console.log(isToday)
        liTag += `<li class=${isToday}>${i}</li>`
    }

    //to get next month first days
    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`
    }


    year.innerHTML = currYear
    month.innerHTML = months[currMonth]

    dayTag.innerHTML = liTag
}
calenderFunc();

prevNextbtn.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth()
        }
        calenderFunc();
    })
});