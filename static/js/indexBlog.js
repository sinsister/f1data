
const allBlogs = document.querySelector(".blogAll")
function getBlogs() {
      const http = new XMLHttpRequest()
      http.open("POST", "/blog/")
      http.onreadystatechange = function () {
            if (http.readyState === 4 && http.status === 200) {
                  const result = JSON.parse(http.response)
                  if (result.length == 0) {
                        allBlogs.classList = "blogAll flex justify-center"
                        allBlogs.innerHTML = "<h6 class='text-2xl text-center items-center h-full w-full'>پستی وجود ندارد</h6>"
                  }
                  allBlogs.innerHTML = ''
                  result.forEach(f => {
                        allBlogs.innerHTML += `
                        <a href="/blog/${f.slug}">
                        <div class="optAs w-full flex flex-col gap-5">
                        <div class="imgBl relative w-full max-sm:flex max-sm:justify-center">
                            <img class="w-full max-h-48 max-sm:w-40 rounded-xl z-10" src="${f.image}" alt="">
                            <div
                                class="backDrImg transition ease-in-out opacity-0 flex justify-center items-center rounded-md absolute w-full h-full z-0">
                                <span class="text-3xl">
                                    <ion-icon name="book"></ion-icon>
                                </span>
                            </div>
                        </div>
                        <div class="textBl text-center flex flex-col gap-y-4">
                            <div class="titleBl">
                                <h2 class="text-bold max-sm:text-lg text-white text-2xl">${f.name}</h2>
                            </div>
                            <div class="textPost max-sm:flex max-sm:justify-center">
                                <p class="max-sm:text-sm max-sm:text-center max-sm:w-28">
                                   ${f.description}
                                </p>
                            </div>
                        </div>
                    </div>
                        </a>
                        `
                  })
                  const imgBl = [...document.querySelectorAll('.imgBl')]
                  imgBl.forEach(f => {
                        f.addEventListener("mouseover", (f) => {
                              f.target.parentElement.children[1].classList.remove('opacity-0');
                        })
                        f.addEventListener("mouseleave", f => {
                              console.log('object');
                              console.log(f.target.children[1].classList.add('opacity-0'))
                        })
                  })
            }
      }
      http.send()
}
getBlogs()
function searchBlog() {
      const inputSearch = document.querySelector('.inputSearch')
      let searchVal = inputSearch.value
      fetch(`/blog/search/?name=${searchVal}`)
            .then(res => {
                  if (res.status === 200) {
                        return res.json()
                  }
                  else {
                        return { message: "error" }
                  }
            })
            .then(resP => {
                  allBlogs.innerHTML = ''
                  resP.forEach(f => {
                        allBlogs.innerHTML += `
                         <a href="/blog/${f.slug}">
                        <div class="optAs w-full flex flex-col gap-5">
                        <div class="imgBl relative w-full max-sm:flex max-sm:justify-center">
                            <img class="w-full max-h-48 max-sm:w-40 rounded-xl z-10" src="${f.image}" alt="">
                            <div
                                class="backDrImg transition ease-in-out opacity-0 flex justify-center items-center rounded-md absolute w-full h-full z-0">
                                <span class="text-3xl">
                                    <ion-icon name="book"></ion-icon>
                                </span>
                            </div>
                        </div>
                        <div class="textBl text-center flex flex-col gap-y-4">
                            <div class="titleBl">
                                <h2 class="text-bold max-sm:text-lg text-white text-2xl">${f.name}</h2>
                            </div>
                            <div class="textPost max-sm:flex max-sm:justify-center">
                                <p class="max-sm:text-sm max-sm:text-center max-sm:w-28">
                                   ${f.description}
                                </p>
                            </div>
                        </div>
                    </div>
                        </a>
                        `
                  })
            })
}