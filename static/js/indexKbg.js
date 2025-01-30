const gp_obj = {
  "Spanish Grand Prix": "گرندپری اسپانیا",
  "Monaco Grand Prix": "گرندپری موناکو",
  "Bahrain Grand Prix": "گرندپری بحرین",
  "Australian Grand Prix": "گرندپری استرالیا",
  "Azerbaijan Grand Prix": "گرندپری آذربایجان",
  "Miami Grand Prix": "گرندپری میامی آمریکا",
  "Saudi Arabian Grand Prix": "گرندپری عربستان",
  "Emilia Romagna Grand Prix": "گرندپری ایمولا ایتالیا",
  "Canadian Grand Prix": "گرندپری کانادا",
  "Austrian Grand Prix": "گرندپری اتریش",
  "Dutch Grand Prix": "گرندپری هلند",
  "British Grand Prix": "گرندپری بریتانیا",
  "Italian Grand Prix": "گرندپری مونزا ایتالیا",
  "Hungarian Grand Prix": "گرندپری مجارستان",
  "Singapore Grand Prix": "گرندپری سنگاپور",
  "Belgian Grand Prix": "گرندپری بلژیک",
  "French Grand Prix": "گرندپری فرانسه",
  "Qatar Grand Prix": "گرندپری قطر",
  "United States Grand Prix": "گرندپری تگزاس آمریکا",
  "Mexico City Grand Prix": "گرندپری مکزیک",
  "Las Vegas Grand Prix": "گرندپری لاس وگاس آمریکا",
  "Abu Dhabi Grand Prix": "گرندپری ابوظبی",
  "São Paulo Grand Prix": "گرندپری برزیل",
  "Brazilian Grand Prix": "گرندپری برزیل",
  "Japanese Grand Prix": "گرندپری ژاپن",
  "Russian Grand Prix": "گرندپری روسیه",
  "Chinese Grand Prix": "گرندپری چین",
  "Styrian Grand Prix": "گرندپری اتریش ( دوم )",
  "Mexican Grand Prix": "گرندپری مکزیک",
  "Malaysian Grand Prix": "گرندپری مالزی",
  "German Grand Prix": "گرندپری آلمان",
  "Turkish Grand Prix": "گرندپری ترکیه",
  "Portuguese Grand Prix": "گرندپری پرتغال",
  "Korean Grand Prix": "گرندپری کره",
  "Indian Grand Prix": "گرندپری هند",
};
const driver_obj = {
  "Fernando Alonso": "فرناندو آلونسو",
  "Alexander Albon": "الکس آلبون",
  "Valtteri Bottas": "والتری بوتاس",
  "Lewis Hamilton": "لوئیس همیلتون",
  "Kevin Magnussen": "کوین مگنوسن",
  "Carlos Sainz": "کارلوس ساینز",
  "Yuki Tsunoda": "یوکی سونودا",
  "Guanyu Zhou": "گوانیو ژو",
  "Max Verstappen": "مکس ورستپن",
  "Lance Stroll": "لنس استرول",
  "Nyck de Vries": "نیک دوریس",
  "Charles Leclerc": "شارل لکلر",
  "Oscar Piastri": "اسکار پیاستری",
  "George Russell": "جورج راسل",
  "Logan Sargeant": "لوگان سارجنت",
  "Pierre Gasly": "پیر گسلی",
  "Lando Norris": "لندو نوریس",
  "Esteban Ocon": "استبان اوکون",
  "Sergio Pérez": "سرجیو پرز",
  "Nico Hülkenberg": "نیکو هالکنبرگ",
  "Nicholas Latifi": "نیکولاس لطیفی",
  "Daniel Ricciardo": "دنیل ریکاردو",
  "Mick Schumacher": "میک شوماخر",
  "Nico Rosberg": "نیکو رزبرگ",
  "Daniil Kvyat": "دنیل کویات",
  "Nikita Mazepin": "نیکیتا مازپین",
  "Kimi Räikkönen": "کیمی رایکونن",
  "Antonio Giovinazzi": "آنتونیو جوویناتزی",
  "Sebastian Vettel": "سباستین فتل",
  "Felipe Massa": "فلیپه ماسا",
  "Marcus Ericsson": "مارکوس اریکسون",
  Guanyu: "ژو",
};
const trFirstHead = document.querySelector(".drvFrNameTit");
const trSecHead = document.querySelector(".drvSecNameTit");
const bodyDrvFrLap = document.querySelector(".drvFrName");
const bodyDrvSecLap = document.querySelector(".drvSecName");
const drvNum = document.querySelector(".drvNum");
let lpInfFr = "";
let raceName = "";
let round = "";
let optValY = "";
let brokenNameFr = "";
let brokenNameSec = "";
let driverFr = "";
let isShowLp = false;
let driverSec = "";
let optValDr = "";
let isYearTp = true;
let setYear = false;
let setGp = false;
function chooseYear(optionSelect, angleCh) {
  isYearTp = !isYearTp;
  const optCh = document.querySelector("." + optionSelect);
  const angleUpCh = document.querySelector("." + angleCh);
  if (isYearTp) {
    angleUpCh.style.transform = "rotate(180deg)";
    optCh.classList.add("opacity-0");
  } else {
    angleUpCh.style.transform = "rotate(0deg)";
    optCh.classList.remove("opacity-0");
  }
}
let isGpTp = true;
function chooseGp(optionSelect, angleCh) {
  isGpTp = !isGpTp;
  const optCh = document.querySelector("." + optionSelect);
  const angleUpCh = document.querySelector("." + angleCh);
  if (isGpTp) {
    angleUpCh.style.transform = "rotate(180deg)";
    optCh.classList = `optSelsGp max-sm:w-28 transition ease-in-out flex w-56 h-48 overflow-y-scroll flex-col`;
  } else {
    angleUpCh.style.transform = "rotate(0deg)";
    optCh.classList = `optSelsGp max-sm:w-28 z-0 opacity-0 transition ease-in-out flex w-56 h-48 overflow-y-scroll flex-col`;
  }
}

function getGr() {
  let responseGp = "";
  const optChooseY = document.querySelectorAll(".optSlDriversY");
  optChooseY.forEach((f) => {
    f.addEventListener("click", (z) => {
      setYear = true;
      const optGp = document.querySelector(".optSelsGp");
      chooseYear("optSelsY", "angleChY");
      optValY = z.target.innerText;
      const optTitY = document.querySelector(".typeTitY");
      optTitY.innerText = optValY;
      fetch(`https://ergast.com/api/f1/${optValY}.json?limit=100`)
        .then((res) => {
          if (res.status == 200) {
            return res.json();
          } else {
            return { message: "error" };
          }
        })
        .then((resP) => {
          const data = resP.MRData.RaceTable.Races;
          optGp.innerHTML = "";
          data.forEach((f) => {
            optGp.innerHTML += `
                            <span noTr=${f.raceName} round=${f.round
              } class=" optSlYf p-2 text-lg flex justify-center
    bg-slate-950 text-zinc-300 transition ease-in-out
    hover:bg-zinc-200 hover:text-slate-900">${gp_obj[f.raceName]}</span> `;
            getDrivers();
          });
        });
    });
  });
}
function getDrivers() {
  const optDr = document.querySelectorAll(".optSlYf");
  optDr.forEach((f) => {
    f.addEventListener("click", (z) => {
      const optTit = document.querySelector(".drvTitGr");
      optValDr = z.target.getAttribute("noTr");
      round = z.target.getAttribute("round");
      optTit.innerText = z.target.innerText;
      const drvFr = document.querySelector(".optSelsDrFr");
      const drvSec = document.querySelector(".optSelsDrSec");
      chooseGp("optSelsGp", "optAngSGp");
      fetch(
        `https://ergast.com/api/f1/${optValY}/${round}/drivers.json?limit=100`
      )
        .then((res) => {
          if (res.status == 200) {
            return res.json();
          } else {
            return { message: "error" };
          }
        })
        .then((resP) => {
          const data = resP.MRData.DriverTable.Drivers;
          drvFr.innerHTML = "";

          drvSec.innerHTML = "";
          data.forEach((f) => {
            drvFr.innerHTML += `
                        <span noNmTr=${f.givenName} drvCode=${f.code} noFmTr=${f.familyName
              } class="optSlDrF p-2 text-lg flex justify-center
                        bg-slate-950 text-zinc-300 transition ease-in-out
                        hover:bg-zinc-200 hover:text-slate-900">${driver_obj[f.givenName + " " + f.familyName]
              }</span>  
                        `;
            drvSec.innerHTML += `
                        <span drvCode=${f.code} noNmTr=${f.givenName} noFmTr=${f.familyName
              } class="optSlDrSec p-2 text-lg flex justify-center
                        bg-slate-950 text-zinc-300 transition ease-in-out
                        hover:bg-zinc-200 hover:text-slate-900">${driver_obj[f.givenName + " " + f.familyName]
              }</span>  
                        `;
            getDrvFr();
            getDrvSec();
          });
        });
    });
  });
}
getGr();
let isDrvFirst = false;
let isToDrvSec = false;
function chooseDriverFirst(optionSelect, angleCh) {
  isDrvFirst = !isDrvFirst;
  const optCh = document.querySelector("." + optionSelect);
  const angleUpCh = document.querySelector("." + angleCh);
  if (isDrvFirst) {
    angleUpCh.style.transform = "rotate(180deg)";
    optCh.classList.remove("opacity-0");
  } else {
    angleUpCh.style.transform = "rotate(0deg)";
    optCh.classList.add("opacity-0");
  }
}
let drvFrId = "";
function getDrvFr() {
  if (setYear) {
    const drvsFirst = document.querySelectorAll(".optSlDrF");
    drvsFirst.forEach((f) => {
      f.addEventListener("click", (f) => {
        chooseDriverFirst("optSelsDrFr", "optAngSFr");

        driverFr =
          f.target.getAttribute("noNmTr") +
          " " +
          f.target.getAttribute("noFmTr");
        const drvTit = document.querySelector(".drvTitFr");
        drvTit.innerText = f.target.innerHTML;
        drvFrId = f.target.getAttribute("noFmTr").toLowerCase();
        brokenNameFr = f.target.getAttribute("drvCode");
        isToDrvSec = true;
        if (isSetDrvSec) {
          getLpTimes();
        }
      });
    });
  }
}
let isDrvSec = false;
function chooseDriverSec(optionSelect, angleCh) {
  if (isToDrvSec) {
    isDrvSec = !isDrvSec;
    const optCh = document.querySelector("." + optionSelect);
    const angleUpCh = document.querySelector("." + angleCh);
    if (isDrvSec) {
      angleUpCh.style.transform = "rotate(180deg)";
      optCh.classList.remove("opacity-0");
    } else {
      angleUpCh.style.transform = "rotate(0deg)";
      optCh.classList.add("opacity-0");
    }
  }
}
let drvSecId = "";
let isSetDrvSec = false;
function getDrvSec() {
  const drvSec = document.querySelectorAll(".optSlDrSec");
  const optTit = document.querySelector(".drvTitSec");
  drvSec.forEach((f) => {
    f.addEventListener("click", (f) => {
      isSetDrvSec = true;
      optTit.innerHTML = f.target.innerHTML;
      chooseDriverSec("optSelsDrSec", "optAngDrvSec");
      driverSec =
        f.target.getAttribute("noNmTr") + " " + f.target.getAttribute("noFmTr");
      drvSecId = f.target.getAttribute("noFmTr").toLowerCase();
      brokenNameSec = f.target.getAttribute("drvCode");
    });
  });
}

function searchDrv() {
  if (isSetDrvSec) {
    getLpTimes();
  }
}

function getLpTimes() {
  fetch(
    `https://ergast.com/api/f1/${optValY}/${round}/drivers/${drvFrId}/laps.json?limit=1000`
  )
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      } else {
        return { message: "error" };
      }
    })
    .then((resP) => {
      lpInfFr = resP.MRData.RaceTable.Races[0].Laps;
      bodyDrvFrLap.innerHTML = "";
      drvNum.innerHTML = "";
      lpInfFr.forEach((f) => {
        trFirstHead.innerHTML = `<span
                class="drvFrNameTit border-b-0 text-center flex items-center justify-center border border-slate-400 w-full h-12">${driver_obj[driverFr]}</span>`;
        bodyDrvFrLap.innerHTML += `<span
                class="lpFirst text-center border-l-0 border-r-0 flex items-center justify-center border border-slate-400 w-full h-12">${f.Timings[0].time}</span>`;
        drvNum.innerHTML += `<span
                class="drvNumb text-center  flex flex-col items-center justify-center border border-slate-400 w-full h-12">${f.number}</span>`;
      });
    });
  fetch(
    `https://ergast.com/api/f1/${optValY}/${round}/drivers/${drvSecId}/laps.json?limit=1000`
  )
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      } else {
        return { message: "error" };
      }
    })
    .then((resP) => {
      let lpInfSec = resP.MRData.RaceTable.Races[0].Laps;
      bodyDrvSecLap.innerHTML = "";
      lpInfSec.forEach((f) => {
        trSecHead.innerHTML = `<th class="w-2/3 border border-slate-300 dark:border-slate-600 font-semibold text-center p-4 dark:text-slate-200 text-left">${driver_obj[driverSec]}</th>`;
        bodyDrvSecLap.innerHTML += `<span
                class="lpSec text-center border-l-0 border-r-0 border-b-0 flex items-center justify-center border border-slate-400 w-full h-12">${f.Timings[0].time}</span>`;
        isShowLp = true;
      });
    });
  fetch(
    `api/v1/fastf1/time-minus?year=${optValY}&gp=${round}&identifire=R&driver_one=${drvFrId}&driver_two=${drvSecId}`
  )
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return { message: "error" };
      }
    })
    .then((resP) => {
      const minus = document.querySelector(".drvsMinus");
      const mainT = document.querySelector(".mainT");
      const mainBest = document.querySelector(".mainBest");
      const mainWorse = document.querySelector(".mainWorse");
      const mainAvgFr = document.querySelector(".mainAvgFr");
      const mainAvgSec = document.querySelector(".mainAvgSec");
      minus.innerHTML = "";
      const minusLst = resP.minus;
      mainT.innerHTML = `<span class="text-xl max-sm:text-xs">${resP.total_times} دور</span>`;
      mainBest.innerHTML = `<span class="text-xl max-sm:text-xs">${resP.winner_time} دور برتر</span>`;
      mainWorse.innerHTML = `<span class="text-xl max-sm:text-xs">${resP.worse_time} دور بدتر</span>`;
      mainAvgFr.innerHTML = `<span class="text-xl max-sm:text-xs">${resP.avg_one} </span>`;
      mainAvgSec.innerHTML = `<span class="text-xl max-sm:text-xs">${resP.avg_two}</span>`;
      minusLst.forEach((f) => {
        x = f.toString();
        if (x[0] === "-") {
          x = x.substring(1);
          x = "+" + x;
        } else {
          x = "-" + x;
        }
        minus.innerHTML += `<span
                class="drvSp border-b-0 ltr text-center ${f >= 0 ? "text-green-500" : "text-red-500"
          } flex flex-col items-center justify-center border border-slate-400 w-full h-12">${x}</span>`;
      });
    });
  fetch(
    `/api/v1/fastf1/fastest-lap?year=${optValY}&gp=${optValDr}&identifire=R&driver=${brokenNameFr}`
  )
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return { message: "error" };
      }
    })
    .then((resP) => {
      const mainFastFr = document.querySelector(".mainFastFr");
      mainFastFr.innerHTML = `<span class="text-xl max-sm:text-xs">${resP.laptime}</span>`;
    });
  fetch(
    `/api/v1/fastf1/fastest-lap?year=${optValY}&gp=${optValDr}&identifire=R&driver=${brokenNameSec}`
  )
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return { message: "error" };
      }
    })
    .then((resP) => {
      const mainFastFr = document.querySelector(".mainFastSec");
      mainFastFr.innerHTML = `<span class="text-xl max-sm:text-xs">${resP.laptime}</span>`;
    });
}
