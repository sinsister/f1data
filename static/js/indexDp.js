
const typeTr = {
  Practice_1: "تمرین اول",
  Practice_2: "تمرین دوم",
  Practice_3: "تمرین سوم",
  Sprint: "اسپرینت",
  Sprint_Shootout: "اسپرینت شوت آوت",
  Qualifying: "تعیین خط",
  Race: "مسابقه",
};
const driversTr = {
  Max_Verstappen: "مکس ورستپن",
  Liam_Lawson: "لیام لاوسون",
  Sergio_Perez: "سرجیو پرز",
  Lewis_Hamilton: "لوئیس همیلتون",
  George_Russell: "جورج راسل",
  Oliver_Bearman: "اولیور برمن",
  Mick_Schumacher: "میک شوماخر",
  Charles_Leclerc: "شارل لکلرک",
  Robert_Kubica: "رابرت کوبیتسا",
  Nikita_Mazepin: "نیکیتا مازپین",
  Carlos_Sainz: "کارلوس ساینز",
  Alexander_Albon: "الکس آلبون",
  Antonio_Giovinazzi: "آنتونیو جیووناتزی",
  Sebastian_Vettel: "سباستین فتل",
  Logan_Sargeant: "لوگان سارجنت",
  Nicholas_Latifi: "نیکولاس لطیفی",
  Guanyu_Zhou: "گوانیو ژو",
  Nyck_De_Vries: "نیک دوریس",
  Valtteri_Bottas: "والتری بوتاس",
  Daniel_Ricciardo: "دنیل ریکاردو",
  Lando_Norris: "لندو نوریس",
  Oscar_Piastri: "اسکار پیاستری",
  Lance_Stroll: "لنس استرول",
  Fernando_Alonso: "فرناندو آلونسو",
  Pierre_Gasly: "پیر گسلی",
  Esteban_Ocon: "استبان اوکون",
  Yuki_Tsunoda: "یوکی سونودا",
  Nico_Hulkenberg: "نیکو هالکنبرگ",
  Kevin_Magnussen: "کوین مگنوسن",
};
const countryTr = {
  Bahrain_Grand_Prix: "گرندپری بحرین",
  Saudi_Arabian_Grand_Prix: "گرندپری عربستان",
  Australian_Grand_Prix: "گرندپری استرالیا ",
  Azerbaijan_Grand_Prix: "گرندپری آذربایجان",
  United_States_Grand_Prix: "گرندپری آمریکا",
  Miami_Grand_Prix: "گرندپری میامی",
  Monaco_Grand_Prix: "گرندپری موناکو",
  Spanish_Grand_Prix: "گرندپری اسپانیا",
  Canadian_Grand_Prix: "گرندپری کانادا",
  Austrian_Grand_Prix: "گرندپری اتریش",
  British_Grand_Prix: "گرندپری بریتانیا",
  Hungarian_Grand_Prix: "گرندپری مجارستان",
  Belgian_Grand_Prix: "گرندپری بلژیک",
  Dutch_Grand_Prix: "گرندپری هلند",
  Italian_Grand_Prix: "گرندپری ایتالیا",
  Singapore_Grand_Prix: "گرندپری سنگاپور",
  Japanese_Grand_Prix: "گرندپری ژاپن",
  Qatar_Grand_Prix: "گرندپری قطر",
  Mexico_City_Grand_Prix: "گرندپری مکزیک",
  São_Paulo_Grand_Prix: "گرندپری برزیل",
  Abu_Dhabi_Grand_Prix: "گرندپری ابوظبی",
  Las_Vegas_Grand_Prix: "گرندپری لاس وگاس",
  Emilia_Romagna_Grand_Prix: "گرندپری امیلیا رومانیا",
  Portuguese_Grand_Prix: "گرند پری پرتغال",
  French_Grand_Prix: "گرند پری فرانسه",
  Styrian_Grand_Prix: "گرند پری استراین",
  Turkish_Grand_Prix: "گرند پری ترکیه",
  Russian_Grand_Prix: "گرند پری روسیه",
  Tuscan_Grand_Prix: "گرند پری توسکان",
  Eifel_Grand_Prix: "گرند پری ایفل",
  Sakhir_Grand_Prix: "گرند پری ساخیر",
  Chinese_Grand_Prix: "گرند پری چین",
};

let isYearTp = true;
function chooseYear(optionSelect, angleCh) {
  isYearTp = !isYearTp;
  const optCh = document.querySelector("." + optionSelect);
  const angleUpCh = document.querySelector("." + angleCh);
  if (isYearTp) {
    angleUpCh.style.transform = "rotate(180deg)";
    optCh.classList = "optSelsY flex-col max-sm:w-32 z-10 transition ease-in-out flex w-56 max-lg:flex-col max-lg:h-40 max-lg:overflow-scroll";
  } else {
    angleUpCh.style.transform = "rotate(0deg)";
    optCh.classList =
      "optSelsY z-0 flex-col max-sm:w-32 opacity-0 transition ease-in-out flex w-56 max-lg:flex-col max-lg:h-40 max-lg:overflow-scroll";
  }
}
let isChType = false;
function chooseType(optionSelect, angleCh) {
  if (optValY !== "") {
    const optSl = document.querySelector(".optSelsC");
    const optTp = responseGr.sessions;
    optSl.innerHTML = "";
    optTp.forEach((f) => {
      optSl.innerHTML += `
                   <span raceOf=${f} class="optSlDrivers p-2 max-sm:text-xs text-lg flex justify-center bg-slate-950 text-zinc-300 transition ease-in-out hover:bg-zinc-200 hover:text-slate-900">${typeTr[f]}</span>
                  `;
    });
    optClick();
    isChType = !isChType;
    const optCh = document.querySelector("." + optionSelect);
    const angleUpCh = document.querySelector("." + angleCh);
    if (isChType) {
      angleUpCh.style.transform = "rotate(180deg)";
      optCh.classList = "optSelsC max-sm:w-32 transition z-10 ease-in-out flex w-56 flex-col";
    } else {
      angleUpCh.style.transform = "rotate(0deg)";
      optCh.classList =
        "optSelsC z-0 max-sm:w-32 opacity-0 transition ease-in-out flex w-56 flex-col";
    }
  }
}
let isDrType = false;
function chooseTypeD(optionSelect, angleCh) {
  if (optValY !== "") {
    const country = responseGp.Country;
    const optSelsD = document.querySelector(".optSelsD");
    optSelsD.innerHTML = "";
    country.forEach((f) => {
      optSelsD.innerHTML += `
      <span cntValue = ${f.t} class=" optSlYf p-2 max-sm:text-xs text-lg flex justify-center
      bg-slate-950 text-zinc-300 transition ease-in-out
      hover:bg-zinc-200 hover:text-slate-900" noTr="${f.t}">${countryTr[f.tr] !== undefined ? countryTr[f.tr] : f.t
        }</span>      
      `;
    });
    sendGp();
    isDrType = !isDrType;
    const optCh = document.querySelector("." + optionSelect);
    const angleUpCh = document.querySelector("." + angleCh);
    if (isDrType) {
      angleUpCh.style.transform = "rotate(180deg)";
      optCh.classList =
        "optSelsD max-sm:w-32 z-10 transition ease-in-out flex w-56 flex-col h-48 overflow-y-scroll";
    } else {
      angleUpCh.style.transform = "rotate(0deg)";
      optCh.classList =
        "optSelsD max-sm:w-32 z-10 opacity-0 transition ease-in-out flex w-56 h-20 overflow-y-scroll flex-col";
    }
  }
}

let optVal = "";
let optIden = "";
function optClick() {
  const optChoose = document.querySelectorAll(".optSlDrivers");
  optChoose.forEach((f) => {
    f.addEventListener("click", (z) => {
      optVal = z.target.innerText;
      const optTit = document.querySelector(".typeTit");
      optTit.innerText = optVal;
      chooseType("optSelsC", "angleCh");
      let optSen = z.target.getAttribute("raceOf");
      optIden = optSen.split("_").join(" ");
    });
  });
}
let responseGp = "";
const optChooseY = document.querySelectorAll(".optSlDriversY");
let optValY = "";
optChooseY.forEach((f) => {
  f.addEventListener("click", (z) => {
    optValY = z.target.innerText;
    const optTitY = document.querySelector(".typeTitY");
    optTitY.innerText = optValY;
    chooseYear("optSelsY", "angleChY");
    const http = new XMLHttpRequest();
    http.open("GET", `api/v1/fastf1/session/gp?year=${optValY}`);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = function () {
      if (http.readyState === 4 && http.status === 200) {
        responseGp = JSON.parse(http.response);
      }
    };
    http.send();
  });
});
const optChooseGr = document.querySelectorAll(".optSlYf");
let responseGr = "";
let resSendGr = "";
function sendGp() {
  const optDr = document.querySelectorAll(".optSlYf");
  optDr.forEach((f) => {
    f.addEventListener("click", (z) => {
      const optTit = document.querySelector(".drvTitGr");
      optValDr = z.target.getAttribute("noTr");
      optTit.innerText = z.target.innerText;
      chooseTypeD("optSelsD", "optAngS");
      const http = new XMLHttpRequest();
      http.open(
        "GET",
        `api/v1/fastf1/session?year=${optValY}&country=${optValDr}`
      );
      http.setRequestHeader("Content-Type", "application/json");
      http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
          responseGr = JSON.parse(this.responseText);
          resSendGr = z.target.getAttribute("cntValue");
        }
      };
      http.send();
    });
  });
}

const driverLst = document.querySelector(".containerdrView");
const searchAType = document.querySelector(".searchAType");
let optValDr = "";
function searchDrvs() {
  console.log(optIden);
  if (optIden !== "") {
    const searchDl = document.querySelector(".chooseRng");
    const searchBtn = document.querySelector(".btnSearch");
    searchDl.classList.add("cursor-pointer");
    searchBtn.removeAttribute("disabled");
    window.scrollBy(0, 25);
    if (showInfDr.style.display !== "") {
      driverLst.classList =
        "containerdrView  max-xl:grid-cols-1 max-sm: grid max-lg:grid-cols-1 max-lg:gap-x-4  gap-x-10 gap-y-10 grid-rows-1 grid-cols-2";
    } else {
      driverLst.classList =
        "containerdrView  max-sm:grid-cols-1 max-sm:gap-y-5 grid max-lg:grid-cols-2 max-lg:gap-x-10 gap-x-32 gap-y-10 grid-rows-4 grid-cols-3";
    }
    driverLst.innerHTML = `
    <div class="searchLoading justify-center items-center flex flex-col w-20 h-20 rounded-full cursor-pointer" style="background-image: url('./imgs/loading.png');"></div>
    `;
    const http = new XMLHttpRequest();
    http.open(
      "GET",
      `/api/v1/fastf1/get-fast-image?year=${optValY}&gp=${optValDr}&identifire=${optIden}`
    );
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = function () {
      if ((http.readyState === 4) & (http.status === 200)) {
        let resDrivers = JSON.parse(http.response);
        console.log(resDrivers.path);
        driverLst.innerHTML = `<img style="z-index:0" src='${resDrivers.path}' />`;
      }
    };
    http.send();
    const showGp = document.querySelector(".grand-peri .info");
    const showEvent = document.querySelector(".event .info");
    const showYear = document.querySelector(".year .info");
    const showBuild = document.querySelector(".build .info");
    const picInf = document.querySelector('.info-pic')
    let d = new Date();
    picInf.innerHTML = `
    <div class="grand-peri">
                <span>گرندپری: </span>
                <span class="info">${countryTr[optValDr.split(" ").join("_")]}</span>
              </div>
              <div class="event">
                <span>رویداد: </span>
                <span class="info">${" " + optVal}</span>
              </div>
              <div class="year">
                <span>سال: </span>
                <span class="info">${" " + optValY}</span>
              </div>
              <div class="build">
                <span>تولید در تاریخ: </span>
                <span class="info">${" " + d.toLocaleTimeString()}</span>
              </div>
      `
  }
}
const showInfDr = document.querySelector(".showInfDrivers");
const searchR = document.querySelector(".lstSearch");
