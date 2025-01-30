function getPod(){
    fetch("/podcast/",{ method: "POST"})
        .then(res=>{
            if(res.status ===200){
                return res.json()
            }
            return {message:"error"}
        })
        .then(resp=>{
            const bodyPod = document.querySelector(".podcastAll")
            bodyPod.innerHTML = ''
            resp.forEach(f=>{
                bodyPod.innerHTML += `
                <a href="/podcast/${f.slug}">
              <div class="optAs w-full flex flex-col gap-5">
                <div class="imgBl relative w-44">
                  <img
                    class="max-sm:w-2/3 w-44 h-32 rounded-xl z-10"
                    src=${f.image}
                    alt=""
                  />
                  <div
                    class="backDrImg transition ease-in-out opacity-0 flex justify-center items-center rounded-md absolute w-full h-full z-0"
                  >
                    <span class="text-3xl">
                      <ion-icon name="book"></ion-icon>
                    </span>
                  </div>
                </div>
                <div class="textBl w-44 max-sm:w-2/3 text-center flex flex-col gap-y-4">
                  <div class="titleBl">
                    <h2 class="text-bold text-white text-2xl">${f.name}</h2>
                  </div>
                  <div class="textPost">
                    <p>${f.description}</p>
                  </div>
                </div>
              </div>
            </a>
                `
            })
        })
}
getPod()