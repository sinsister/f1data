const mainHome = document.querySelector(".mainHome")
document.addEventListener("DOMContentLoaded", getInf())
function getInf() {
    const path = document.location.pathname.split('/')
    const xhr = new XMLHttpRequest()
    xhr.open("POST", `/blog/${path[2]}`)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4){
            const response = JSON.parse(xhr.response)
            mainHome.innerHTML = `
            <div class="container w-full h-full">
        <div class="container gap-10 w-full flex flex-col items-center h-full">
            <div
                class="postSubject max-sm:flex-col max-sm:gap-4 flex justify-between border-b border-solid p-4 w-2/3 border-b-slate-500 flex justify-between">
                <h1 class="text-bold text-2xl max-sm:text-lg">عنوان : ${response.name}</h1>
                <span class="datePublish max-sm:text-xs">
                    تاریخ انتشار:  ${response.jlast_update}
                </span>
            </div>
            <div class="mainMidMai w-2/3 h-full">
                <p class="text-lg">
                    ${response.content}
                </p>
            </div>
        </div>
            `
        }
    }
    xhr.send()
}