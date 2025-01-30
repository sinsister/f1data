const teamTr = {
  Red_Bull_Racing: "ردبول",
  Ferrari: "فراری",
  Mercedes: "مرسدس",
  Aston_Martin: "استون مارتین",
  Haas_F1_Team: "هاس",
  McLaren: "مکلارن",
  Alfa_Romeo: "آلفارومئو",
  AlphaTauri: "آلفاتئوری",
  Alpine: "آلپین",
  Williams: "ویلیامز",
  Visa_Cash_Sauber_Kick: "سائوبر",
  RB: "آربی"
};
const driversTr =
{
  Max_Verstappen: "مکس ورستپن",
  Liam_Lawson: "لیام لاوسون",
  Sergio_Perez: "سرجیو پرز",
  Oliver_Bearman: "اولیور برمن",
  Lewis_Hamilton: "لوئیس همیلتون",
  George_Russell: "جورج راسل",
  Mick_Schumacher: "میک شوماخر",
  Charles_Leclerc: "شارل لکلرک",
  Robert_Kubica: "رابرت کوبیتسا",
  Nikita_Mazepin: "نیکیتا مازپین",
  Carlos_Sainz: "کارلوس ساینز",
  Alexander_Albon: "الکس آلبون",
  Antonio_Giovinazzi: "آنتونیو جیووناتزی",
  Sebastian_Vettel: "سباستین فتل",
  Logan_Sargeant: "لوگان سارجنت",
  Nicholas_Latifi: 'نیکولاس لطیفی',
  Guanyu_Zhou: "گوانیو ژو",
  Nyck_De_Vries: "نیک دوریس",
  Valtteri_Bottas: "والتری بوتاس",
  Daniel_Ricciardo: "دنیل ریکاردو",
  Lando_Norris: "لندو نوریس",
  Oscar_Piastri: "اسکار پیاستری",
  Lance_Stroll: "لنس استرول",
  Fernando_Alonso: "فرناندو آلانسو",
  Pierre_Gasly: "پیر گسلی",
  Esteban_Ocon: "استبان اوکون",
  Yuki_Tsunoda: "یوکی سونودا",
  Nico_Hulkenberg: "نیکو هالکنبرگ",
  Kevin_Magnussen: "کوین مگنوسن"
}
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
  Las_Vegas_Grand_Prix: "گرندپری لاس وگاس"
}
const nationalTr = {
  British: "بریتانیایی",
  Mexican: "مکزیکی",
  Dutch: "هلندی",
  Spanish: "اسپانیایی",
  Canadian: "کانادایی",
  Finnish: "فنلاندی",
  French: "فرانسوی",
  Thai: "تایلندی",
  Japanese: "ژاپنی",
  American: "آمریکایی",
  Danish: "دانمارکی",
  German: "آلمانی",
  Chinese: "چینی",
  Monegasque: "مونگاسک",
  Australian: "استرالیایی"
}
const numberTe = {
  1: "اول",
  2: "دوم",
  3: "سوم",
  4: "چهارم",
  5: "پنجم",
  6: "ششم",
  7: "هفتم",
  8: "هشتم",
  9: "نهم",
  10: "دهم",
  11: "یازدهم",
  12: "دوازدهم",
  13: "سیزدهم",
  14: "چهاردهم",
  15: "پانزدهم",
  16: "شانزدهم",
  17: "هفدهم",
  18: "هجدهم",
  19: "نوزدهم",
  20: "بیستم",
  21: "بیست و یکم",
  22: "بیست و دوم",
  23: "بیست و سوم",
  24: "بیست و چهارم",
  25: "بیست و پنجم",
  26: "بیست و ششم",
  27: "بیست و هفتم",
  28: "بیست و هشتم",
  29: "بیست و نهم",
  30: "سی ام",
  31: "سی و یکم",
  32: "سی و دوم",
  33: "سی و سوم",
  34: "سی و چهارم",
  35: "سی و پنجم",
  36: "سی و ششم",
  37: "سی و هفتم",
  38: "سی و هشتم",
  39: "سی و نهم",
  40: "چهلم",
  41: "چهل و یکم",
  42: "چهل و دوم",
  43: "چهل و سوم",
  44: "چهل و چهارم",
  45: "چهل و پنجم",
  46: "چهل و ششم",
  47: "چهل و هفتم",
  48: "چهل و هشتم",
  49: "چهل و نهم",
  50: "پنچاهم",
}
let isChType = false;
let isYearType = false
function chooseType(optionSelect, angleCh) {
  isChType = !isChType;
  const optCh = document.querySelector("." + optionSelect);
  const angleUpCh = document.querySelector("." + angleCh);
  if (isChType) {
    angleUpCh.style.transform = "rotate(180deg)";
    optCh.classList = "optSelsC transition ease-in-out flex w-56 flex-col";
  } else {
    angleUpCh.style.transform = "rotate(0deg)";
    optCh.classList =
      "optSelsC z-0 opacity-0 transition ease-in-out flex w-56 flex-col";
  }
}
let isDrType = false;
let country = ""
function chooseTypeD(optionSelect, angleCh) {
  if (optVal !== "") {
    country = responseGp.Country;
    const optSelsD = document.querySelector(".optSelsD");

    country.forEach((f) => {
      optSelsD.innerHTML += `
        <span class=" optSlYf max-md:text-md p-2 text-lg flex justify-center
        bg-slate-950 text-zinc-300 transition ease-in-out
        hover:bg-zinc-200 hover:text-slate-900" noTr='${f.t}'>${countryTr[f.tr] !== undefined ? countryTr[f.tr] : f.t}</span>      
        `;
    });
    sendGp();
    isDrType = !isDrType;
    const optCh = document.querySelector("." + optionSelect);
    const angleUpCh = document.querySelector("." + angleCh);
    if (isDrType) {
      angleUpCh.style.transform = "rotate(180deg)";
      optCh.classList =
        "optSelsD transition ease-in-out flex max-md:h-28 w-56 flex-col h-48 overflow-y-scroll";
    } else {
      angleUpCh.style.transform = "rotate(0deg)";
      optCh.classList =
        "optSelsD z-10 opacity-0 max-md:h-28 transition ease-in-out flex w-56 h-20 overflow-y-scroll flex-col";
    }
  }
}

let responseGp = "";
const optChoose = document.querySelector(".optSlDrivers");
let optVal = "";
optChoose.addEventListener("click", (z) => {
  optVal = z.target.innerText;
  const optTit = document.querySelector(".typeTit");
  optTit.innerText = optVal;
  const http = new XMLHttpRequest();
  http.open("GET", "api/v1/fastf1/session/gp?year=2023");
  http.setRequestHeader("Content-Type", "application/json");
  http.onreadystatechange = function () {
    if (http.readyState === 4 && http.status === 200) {
      responseGp = JSON.parse(http.response)
    }
  };
  http.send();
  chooseType("optSelsC", "angleCh");
});
function sendGp() {
  const optDr = document.querySelectorAll(".optSlYf");
  optDr.forEach((f) => {
    f.addEventListener("click", (z) => {
      const optTit = document.querySelector(".drvTit");
      optValDr = z.target.getAttribute('noTr')
      optTit.innerText = z.target.innerText;
      chooseTypeD("optSelsD", "optAngS");
    });
  });
}

const driverLst = document.querySelector(".containerdrView");
const searchAType = document.querySelector(".searchAType");
let optValDr = "";
function searchDrvs() {
  if (optValDr !== "") {
    const searchDl = document.querySelector(".chooseRng");
    const searchBtn = document.querySelector(".btnSearch");
    searchDl.classList.add("cursor-pointer");
    searchBtn.removeAttribute("disabled");
    window.scrollBy(0, 25);
    if (showInfDr.style.display !== "") {
      driverLst.classList =
        "containerdrView grid gap-x-10 gap-y-10 grid-rows-1 grid-cols-2";
    } else {
      driverLst.classList =
        "containerdrView grid gap-x-32 gap-y-10 grid-rows-4 grid-cols-3";
    }
    driverLst.innerHTML = `
      <div class="dvCntD rounded-md flex animate-pulse flex-col gap-5 bg-gray-800 w-64 h-2 rounded-xl cursor-pointer">
                    <div class="flex flex-col">
                          <div class="p-4 rounded-t-md pb-8 items-center flex justify-around gap-4">
                               <div
                                      class="imgDrv w-16 rounded bg-slate-700 rounded-2xl h-full h-16 transition-all ease-in-out">
                                </div>
                                <div
                                      class='colorTeam p-2 rounded flex text-center items-center justify-center bg-slate-700'>
                                      <span class='rankDr text-slate-950'></span>
                                </div>
                          </div>
                          <div class='colorTeam p-2 w-20 h-2 rounded-b flex text-center items-center justify-center bg-slate-700'>
                                <span class='rankDr text-slate-950 text-xl'></span>
                          </div>
                    </div>
                    <div class="mainDrO relative">
                          <div class="mainCnDrv absolute"></div>
                    </div>
                    <hr>
                    <div class="footDrO flex flex-col gap-4">
                          <div class="topFoot flex items-center justify-around">
                                <span class="text-gray-300 text-xl">
                                </span>
                                <span class="text-gray-400 text-xl"></span>
                          </div>
                          <div class="btmFoot flex justify-center">
                              <button class="showInfBtn transition ease-in-out w-40 h-4 bg-slate-700 rounded-md text-slate-300"></button>
                          </div>
                    </div>
              </div>
              <div class="dvCntD rounded-md flex animate-pulse flex-col gap-5 bg-gray-800 w-64 h-2 rounded-xl cursor-pointer">
              <div class="flex flex-col">
                    <div class="p-4 rounded-t-md pb-8 items-center flex justify-around gap-4">
                          <div
                                class="imgDrv w-16 rounded bg-slate-700 rounded-2xl h-full h-16 transition-all ease-in-out">
                          </div>
                          <div
                                class='colorTeam p-2 rounded flex text-center items-center justify-center bg-slate-700'>
                                <span class='rankDr text-slate-950'></span>
                          </div>
                    </div>
                    <div class='colorTeam p-2 w-20 h-2 rounded-b flex text-center items-center justify-center bg-slate-700'>
                          <span class='rankDr text-slate-950 text-xl'></span>
                    </div>
              </div>
              <div class="mainDrO relative">
                    <div class="mainCnDrv absolute"></div>
              </div>
              <hr>
              <div class="footDrO flex flex-col gap-4">
                    <div class="topFoot flex items-center justify-around">
                          <span class="text-gray-300 text-xl">
                          </span>
                          <span class="text-gray-400 text-xl"></span>
                    </div>
                    <div class="btmFoot flex justify-center">
                        <button class="showInfBtn transition ease-in-out w-40 h-4 bg-slate-700 rounded-md text-slate-300"></button>
                    </div>
              </div>
        </div> <div class="dvCntD rounded-md flex animate-pulse flex-col gap-5 bg-gray-800 w-64 h-2 rounded-xl cursor-pointer">
                    <div class="flex flex-col">
                          <div class="p-4 rounded-t-md pb-8 items-center flex justify-around gap-4">
                                <div
                                      class="imgDrv w-16 rounded bg-slate-700 rounded-2xl h-full h-16 transition-all ease-in-out">
                                </div>
                                <div
                                      class='colorTeam p-2 rounded flex text-center items-center justify-center bg-slate-700'>
                                      <span class='rankDr text-slate-950'></span>
                                </div>
                          </div>
                          <div class='colorTeam p-2 w-20 h-2 rounded-b flex text-center items-center justify-center bg-slate-700'>
                                <span class='rankDr text-slate-950 text-xl'></span>
                          </div>
                    </div>
                    <div class="mainDrO relative">
                          <div class="mainCnDrv absolute"></div>
                    </div>
                    <hr>
                    <div class="footDrO flex flex-col gap-4">
                          <div class="topFoot flex items-center justify-around">
                                <span class="text-gray-300 text-xl">
                                </span>
                                <span class="text-gray-400 text-xl"></span>
                          </div>
                          <div class="btmFoot flex justify-center">
                              <button class="showInfBtn transition ease-in-out w-40 h-4 bg-slate-700 rounded-md text-slate-300"></button>
                          </div>
                    </div>
              </div>
      `;
    const http = new XMLHttpRequest();
    http.open("GET", `api/v1/fastf1/drivers?kdl=true&gp=${optValDr}`);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = function () {
      if ((http.readyState === 4) & (http.status === 200)) {
        let resDrivers = JSON.parse(http.response)
        const drivers = resDrivers;
        driverLst.innerHTML = ``;
        drivers.forEach((f) => {
          driverLst.innerHTML += `
            <div class="dvCntD rounded-md flex flex-col gap-2 bg-gray-800 w-64 h-80 rounded-xl cursor-pointer">
                    <div class="flex flex-col">
                          <div class="p-4 rounded-t-md pb-8 border border-b-slate-400 border-b-solid items-center flex justify-around gap-4"
                                style="background-color:#${f.colorTeam};">
                                <img src=${f.image}
                                      class="imgDrv w-16 rounded-full bg-slate-600 -xl h-full transition-all ease-in-out">
                                <div
                                      class='colorTeam w-10 p-2 rounded flex text-center items-center justify-center bg-slate-300'>
                                      <span class='rankDr flex text-center justify-center text-slate-950'>${Number(
            f.position
          )}</span>
                                </div>
                          </div>
                          <div class='colorTeam p-2 rounded-b flex text-center items-center justify-center bg-slate-300'>
                                <span class='rankDr text-slate-950 text-xl'>${driversTr[f.name] !== undefined ? driversTr[f.name] : f.name
            }</span>
                          </div>
                    </div>
                    <div class="mainDrO relative">
                          <div class="mainCnDrv absolute"></div>
                    </div>
                    <div class="footDrO flex flex-col gap-4">
                          <div class="flex flex-col items-center gap-2 ">
                          <div class="topFoot flex items-center justify-around">
                                <span class="text-gray-400 text-large">${teamTr[f.teamName]
            }</span>
                          </div>
                          <div class="btmFoot flex justify-around">
                          <span class="text-gray-400 text-md">${f.Abbreviation
            }</span>
                          </div>
                          </div>
                          <div class="btmFoot flex justify-center">
                              <button number=${f.driver_code} class="showInfBtn hover:bg-slate-300 hover:text-violet-700 transition ease-in-out w-40 h-10 bg-violet-700 rounded-md text-slate-300">نمایش اطلاعات</button>
                          </div>
                    </div>
              </div>
            `;
          showInf();
        });
      }
    };
    http.send();
  }
}
const showInfDr = document.querySelector(".showInfDrivers");
let driverNum = ''
const drivSerach = document.querySelector(".drivSerach")
function showInf() {
  const btnInf = document.querySelectorAll(".showInfBtn");
  btnInf.forEach((fr) => {
    fr.addEventListener("click", (f) => {
      drivSerach.classList.add("hidden")
      const backDr = document.querySelector(".backDr")
      backDr.style.display = 'flex'
      const brokenName =
        f.target.parentElement.parentElement.children[0].children[1].children[0]
          .innerText;
      driverNum = f.target.getAttribute('number')
      fastTime(brokenName);
      getDelta(brokenName);
      timeAndAv(brokenName);
      getPosFst()
      const http = new XMLHttpRequest();
      http.open("GET", `api/v1/fastf1/driver-info?kdl=true&gp=${optValDr}&driver=${brokenName}`);
      http.setRequestHeader("Content-Type", "application/json");
      http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200 && fastTimeF, deltaForm, average, lapTImes !== "") {
          backDr.style.display = 'none'
          searchAType.classList.remove("flex");
          searchAType.classList.add("grid");
          const resP = JSON.parse(http.response).driver_info
          showInfDr.style.display = "block";
          driverLst.classList =
            "containerdrView grid gap-x-10 gap-y-10 grid-rows-1 grid-cols-2";
          const searchAT = document.querySelector(".searchAType");
          searchAT.classList.remove("gap-48");
          searchAT.classList.add("gap-4");
          window.scrollBy(0, -250);
          const leftD = document.querySelector(".topRightDr");
          leftD.innerHTML = `
                                      <span onclick="closeTab()"
                                            class="absolute cursor-pointer top-2 right-2 text-3xl hover:text-rose-600">
                                            <ion-icon name="close-circle-outline"></ion-icon>
                                      </span>
                                      <div class="imgDriv rounded-full items-center flex">
                                      <img src=${resP.image} class = "w-14 h-14 rounded-full bg-slate-400"/>
                                      <div
                                            class="driverName p-6 text-3xl text-bold rounded w-80 rounded flex justify-center flex items-center h-10">
                                            <span>${driversTr[resP.name]}</span>
                                      </div>
                                      </div>
                                      <div class="nameDr flex justify-center gap-8">
                                            <div class="driverTeamName w-40 flex rounded justify-center items-center bg-gray-950">
                                                  <span>${teamTr[resP.teamName]}</span>
                                            </div>
                                      </div>
                                      <div class="codeNumStl rounded w-18 h-10 flex justify-around items-center" style="background-color:#${resP.colorTeam}">
                                            <span class="codeNumber w-12 pl-28 border-l border-solid border-l-slate-400 text-bold text-slate-200 p-2">${resP.Age}</span>
                                            <span class="codeNumber w-20 text-bold text-slate-200 p-2">${nationalTr[resP.Nationality]}</span>
                                      </div>
                                `;
          const topLft = document.querySelector(".speedFst");
          topLft.innerHTML = `
                                      <div class="fasterLp bg-neutral-950 rounded p-4 flex justify-between w-64">
                                                  <span class="fstTit ">سریعترین دور:</span>
                                                  <span class="fstTime">${fastTimeF.laptime}</span>
                                            </div>
                                            <div class="fasterLp rounded bg-neutral-950 p-4 flex justify-around w-64">
                                                  <span class="fstTit">دلتا:</span>
                                                  <span class="fstTime">${deltaForm.delta}</span>
                                            </div>
                                            <div class="fasterLp rounded bg-neutral-950 p-4 flex justify-between w-64">
                                                  <span class="fstTit">میانگین دور ها:</span>
                                                  <span class="fstTime">${average}</span>
                                            </div>
                                            <div class="fasterLp rounded bg-neutral-950 p-4 flex justify-between w-64">
                                                  <span class="fstTit">رتبه در سریع ترین دور:</span>
                                                  <span class="fstTime">${positionNum.position}</span>
                                            </div>
                                `;
          const lapTimesList = document.querySelector(".LstTimeDriversR");
          lapTimesList.innerHTML = ''
          lapTImes.forEach((f) => {
            lapTimesList.innerHTML += `
                                      <div class="timesDriver justify-center items-center p-5">
                                        <span>${f}</span>
                                      </div>
                                      `;
          });
          const roundNum = document.querySelector(".roundNum")
          roundNum.innerHTML = ''
          for (let r = 1; r <= lapTImes.length; r++) {
            roundNum.innerHTML += `
              <div class="timesDriver justify-center items-center p-5">
                <span>دور ${r}</span>
              </div>
              `
          }

        }
      };
      http.send();
    });
  });
}
let fastTimeF = "";
function fastTime(btName) {
  const http = new XMLHttpRequest();
  http.open("GET", `api/v1/fastf1/fastest-lap?kdl=true&gp=${optValDr}&driver=${btName}`);
  http.setRequestHeader("Content-Type", "application/json");
  http.onreadystatechange = function () {
    if ((http.readyState === 4, http.status === 200)) {
      const response = JSON.parse(http.response)
      console.log(response)
      fastTimeF = response;
    }
  };
  http.send();
}
let positionNum = ''
function getPosFst() {
  const http = new XMLHttpRequest();
  http.open("GET", `api/v1/fastf1/fastest-position?gp=${optValDr}&driver=${driverNum}&kdl=true`);
  http.setRequestHeader("Content-Type", "application/json");
  http.onreadystatechange = function () {
    if (http.readyState === 4 && http.status === 200) {
      let responsePos = http.responseText
      positionNum = JSON.parse(http.response)
      console.log(positionNum);
    }
    else if (http.status === 404) {
      http.open("POST", `api/v1/fastf1/fastest-position?gp=${optValDr}&driver=${driverNum}&kdl=true`);
      http.setRequestHeader("Content-Type", "application/json");
      http.onreadystatechange = function () {
        positionNum = JSON.parse(http.response)
      }
    }
  }
  http.send()
}
let deltaForm = "";
function getDelta(btName) {
  const http = new XMLHttpRequest();
  http.open("GET", `api/v1/fastf1/delta?kdl=true&gp=${optValDr}&driver=${btName}`);
  http.setRequestHeader("Content-Type", "application/json");
  http.onreadystatechange = function () {
    if ((http.readyState === 4, http.status === 200)) {
      deltaForm = JSON.parse(http.response)
      console.log(deltaForm)
    }
  };
  http.send();
}
let average = "";
let lapTImes = "";
function timeAndAv(btName) {
  const http = new XMLHttpRequest();
  http.open("GET", `api/v1/fastf1/lap-time-avg?kdl=true&gp=${optValDr}&driver=${btName}`);
  http.setRequestHeader("Content-Type", "application/json");
  http.onreadystatechange = function () {
    if ((http.readyState === 4, http.status === 200)) {
      res = JSON.parse(http.response)
      average = res.avg;
      lapTImes = res.laptimes;
    }
  };
  http.send();
}
function closeTab() {
  drivSerach.classList.remove("hidden")
  showInfDr.style.display = "";
  const drView = document.querySelector(".driverView");
  drView.style.height = "100%";
  drView.style.overflowY = "hidden";
  drView.style.overflowX = "hidden";
  searchAType.classList.remove("grid");
  searchAType.classList.add("flex");
  driverLst.classList =
    "containerdrView grid gap-x-32 gap-y-10 grid-rows-4 grid-cols-3";
  const searchAT = document.querySelector(".searchAType");
  searchAT.classList.remove("gap-4");
  searchAT.classList.add("gap-48");
}
