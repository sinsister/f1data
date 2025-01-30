function getSinBlog() {
  const path = window.location.pathname.split("/");
  fetch(`/podcast/${path[2]}`, { method: "POST" })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return { message: "error" };
    })
    .then((resP) => {
      const container = document.querySelector(".containerHome");
      container.innerHTML = `
            <div
                class="postSubject max-sm:flex-col max-sm:gap-4 flex justify-between border-b border-solid p-4 w-2/3 border-b-slate-500 flex justify-between">
                <h1 class="text-bold text-2xl">عنوان : ${resP.name}</h1>
                <span class="datePublish max-sm:text-xs">
                    تاریخ انتشار:  ${resP.jlast_update}
                </span>
            </div>
            <div class="mainMidMai w-2/3 h-full flex flex-col gap-8">
                <div class="flex justify-center">
                <audio controls>
                    <source class="max-sm:w-40" src="${resP.sound}" type="audio/ogg">
                </audio>
                </div>
                <p class="text-lg">
                    ${resP.content}
                </p>
            </div>
            `;
    });
}
getSinBlog();
