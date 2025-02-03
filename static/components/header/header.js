let headerApp = document.createElement("template");
headerApp.innerHTML = `
      <link rel="stylesheet" href="/assets/tailwind/style.css">
      <link rel="stylesheet" href="/assets/fonts/fontAwa.css">
      <link rel="stylesheet" href="/assets/font/font.css">
      <link rel="stylesheet" href="/assets/headerApp.css">
      <div class="headerSite flex rtl items-center justify-center p-10">
            <header class="w-full transition ease-in-out top-0 z-20 flex justify-center h-20">
                  <ul class="flex headerUl relative w-full justify-between items-center">
                        <div class="leftHeader justify-start text-lg flex gap-20 max-lg:gap-10 max-lg:w-1/2 w-2/3">
                              <li class="headerOpt cursor-pointer">
                                    <a href="/">خانه</a>
                              </li>
                              <li class="headerOpt cursor-pointer">
                                    <a href="/data-archive">دیتا</a>
                              </li>
                              <li class="headerOpt cursor-pointer">
                                    <a href="/about-us">درباره ی ما</a>
                              </li>
                              <li class="headerOpt cursor-pointer">
                                    <a href="/rules">قوانین و مقررات</a>
                              </li>
                        </div>
                        <div class="rightHeader pl-4">
                        <img src='/assets/img/icons/Logo.png' class='w-40 bg-slate-700 h-full' />
                        </div>
                  </ul>
            </header>
      </div>
      <div class="responsiveHeader ltr" id="responsiveHeader">
            <div class="containRes" id="containRes">
                  <div class="topHeader">
                        <img class="imgTopH" src="/assets/img/icons/Logo.png" alt="">
                        <div class="closeTab">
                              <ion-icon class="toggleHeader" name="menu-outline"></ion-icon>
                        </div>
                  </div>
                  <div class="mainHead">
                        <ul class="listUl">
                                    <li class="lists">
                                          <a href="/">
                                                <span>خانه</span>
                                                <ion-icon class="iconHeader" name="home-outline"></ion-icon>

                                          </a>
                                    </li>
                                    <li class="lists">
                                          <a href="/blog">
                                                <span>بلاگ</span>
                                                <ion-icon class="iconHeader" name="book-outline"></ion-icon>

                                          </a>
                                    </li>
                                    <li class="lists">
                                          <a href="/podcast">
                                                <span>پادکست</span>
                                                <ion-icon class="iconHeader" name="musical-notes-outline"></ion-icon>

                                          </a>
                                    </li>
                                    <li class="lists">
                                          <a href="/data-archive">
                                                <span>دیتا</span>
                                                <ion-icon class="iconHeader" name="musical-notes-outline"></ion-icon>

                                          </a>
                                    </li>
                                    <li class="lists">
                                          <a href="/drivers">
                                                <span>رانندگان</span>
                                                <ion-icon class="iconHeader" name="information-outline"></ion-icon>

                                          </a>
                                    </li>
                                    <li class="lists">
                                          <a href="/information-archive">
                                                <span>اطلاعات رانندگان</span>
                                                <ion-icon class="iconHeader" name="information-outline"></ion-icon>

                                          </a>
                                    </li>
                                    <li class="lists">
                                          <a href="/drivers-quality">
                                                <span>عملکرد رانندگان</span>
                                                <ion-icon class="iconHeader" name="podium-outline"></ion-icon>

                                          </a>
                                    </li>
                                    <li class="lists">
                                          <a href="/about-us">
                                                <span>درباره ی ما</span>
                                                <ion-icon class="iconHeader" name="information-circle-outline"></ion-icon>

                                          </a>
                                    </li>
                                    <li class="lists">
                                          <a href="/rules">
                                                <span>قوانین</span>
                                                <ion-icon class="iconHeader" name="cog-outline"></ion-icon>

                                          </a>
                                    </li>
                        </ul>
                  </div>
            </div>
      </div>
      <script async src="/assets/js/indexHeader.js""></script>
      <script async src="/assets/tailwindCss/indexTail.js"></script>
`;
class headerCr extends HTMLElement {
      constructor() {
            super();
            this.attachShadow({ mode: "open" });
            this.shadowRoot.appendChild(headerApp.content.cloneNode(true));
      }
}
export { headerCr };
