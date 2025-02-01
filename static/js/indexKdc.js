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
  Monegasque: "موناکو",
  Australian: "استرالیایی",
};
const typeTr = {
  Practice_1: "تمرین اول",
  Practice_2: "تمرین دوم",
  Practice_3: "تمرین سوم",
  Sprint: "اسپرینت",
  Sprint_Shootout: "اسپرینت شوت آوت",
  Sprint_Qualifying: "تعیین خط اسپرینت",
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
  "70th_Anniversary_Grand_Prix":"گرند پری سالگرد هفتادمین مسابقه اتوموبیل رانی",
  Bahrain_Grand_Prix: "گرندپری بحرین",
  Saudi_Arabian_Grand_Prix: "گرندپری عربستان",
  Australian_Grand_Prix: "گرندپری استرالیا ",
  Azerbaijan_Grand_Prix: "گرندپری آذربایجان",
  United_States_Grand_Prix: "گرندپری آمریکا",
  Miami_Grand_Prix: "گرندپری میامی",
  Monaco_Grand_Prix: "گرندپری موناکو",
  Spanish_Grand_Prix: "گرندپری اسپانیا",
  German_Grand_Prix:"گرند پری آلمان",
  Mexican_Grand_Prix:"گرند پری مکزیک",
  Brazilian_Grand_Prix:"گرند پری برزیل",
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
const optSelsY = document.querySelector(".optSelsY")
const optSlDriversY = document.querySelector(".optSlDriversY")
const optSelsD = document.querySelector(".optSelsD");
    const optSl = document.querySelector(".optSelsC");
class KdcClass{
  constructor(_year){
    this.isSetYear = false
    this.isSetRace = false
    this.isSetGr = false
    this.year = undefined
    this.zone = undefined
    this.grandPray = undefined
    this.raceInfo = undefined
  }
  static clickOnBtn(clickHnd,e){
    this[clickHnd] = !this[clickHnd]
    this.showOptionValues(clickHnd)
    if(this.year !== undefined&&clickHnd == "isSetGr"){
      this[clickHnd] = !this[clickHnd]
      this.showOptionValues(clickHnd)
    }
    else if(this.grandPray !== undefined&&clickHnd == "isSetGr"){
      this[clickHnd] = !this[clickHnd]
      this.showOptionValues(clickHnd)
    }
  }
  static selectValue(ev,valueSet,changeHead,isSet){
    this[valueSet] = ev.target.innerText
    this[isSet] = false
    this.showOptionValues(isSet)
      document.querySelector(`.${changeHead}`).innerText = this[valueSet]
  }
  static showOptionValues(showOpt){
    if(this[showOpt]&&showOpt == "isSetYear"){
      optSelsY.classList = "optSelsY flex-col max-sm:w-32 z-0 transition ease-in-out flex w-56 max-lg:flex-col max-lg:h-40 max-lg:overflow-scroll"
    }
    else if(this[showOpt] == false&&showOpt == "isSetYear"){
      optSelsY.classList = "optSelsY flex-col max-sm:w-32 max-lg:flex-col z-0 opacity-0 transition ease-in-out flex w-56 max-lg:h-40 max-lg:overflow-scroll flex-col"
    }
      else if(this[showOpt]&&showOpt=="isSetGr"){
        if(optSelsD.innerHTML == ''){
          fetch(`api/v1/fastf1/session/gp?year=${this.year}`)
        .then(res=>{return res.json()})
        .then(async(response)=>{
          const gps = await response.Country
          await gps.forEach((f) => {
                  optSelsD.innerHTML += `
                <span onclick=KdcClass.selectValue(event,'grandPray','drvTitGr','isSetGr') class=" optSlYf p-2 max-sm:text-xs text-lg flex justify-center
                bg-slate-950 text-zinc-300 transition ease-in-out
                hover:bg-zinc-200 hover:text-slate-900 ${f.t == "Pre-Season Test"?"hidden":f.t =="Pre-Season Test 2"?"hidden":""}">${countryTr[f.tr] !== undefined ? countryTr[f.tr] : f.t}</span>      
                `;
                })
          optSelsD.classList = "optSelsD max-sm:w-32 transition ease-in-out flex w-56 flex-col h-48 overflow-y-scroll"
        })
        }
        
      }
      else if(this[showOpt] == false&&showOpt=="isSetGr"){
        optSelsD.innerHTML = ''
        optSelsD.classList = "max-sm:w-32 z-10 opacity-0 transition ease-in-out flex w-56 h-20 overflow-y-scroll flex-col"
      }
      else if(this[showOpt]&&showOpt=="isSetRace"){
        if(this.grandPray !==undefined){
          fetch(`api/v1/fastf1/session?year=${this.year}&country=${this.grandPray}`)
        .then(res=>{return res.json()})
        .then(async(response)=>{
          const responseRc = response.sessions
          optSl.classList = "optSelsC max-sm:w-32 transition ease-in-out flex w-56 flex-col"
          responseRc.forEach((f) => {
            optSl.innerHTML += `
              <span onclick=KdcClass.selectValue(event,'raceInfo','typeTit','isSetRace') raceOf=${f} class="optSlDrivers p-2 max-sm:text-xs text-lg flex justify-center bg-slate-950 text-zinc-300 transition ease-in-out hover:bg-zinc-200 hover:text-slate-900">${typeTr[f]}</span>
                `;
                });
        })
        }
      }
      else if(this[showOpt]==false&&showOpt=="isSetRace"){
        optSl.innerHTML = ''
        optSl.classList = 'optSelsC max-sm:w-32 opacity-0 z-0 transition ease-in-out flex w-56 flex-col'
      }
  }
}
// let isYearTp = true;
// function chooseYear(optionSelect, angleCh) {
//   isYearTp = !isYearTp;
//   const optCh = document.querySelector("." + optionSelect);
//   const angleUpCh = document.querySelector("." + angleCh);
//   if (isYearTp) {
//     angleUpCh.style.transform = "rotate(180deg)";
//     optCh.classList = "optSelsY flex-col max-sm:w-32 z-0 transition ease-in-out flex w-56 max-lg:flex-col max-lg:h-40 max-lg:overflow-scroll";
//   } else {
//     angleUpCh.style.transform = "rotate(0deg)";
//     optCh.classList =
//       "optSelsY z-0 flex-col max-sm:w-32 opacity-0 transition ease-in-out flex w-56 max-lg:flex-col max-lg:h-40 max-lg:overflow-scroll";
//   }
// }
// let isChType = false;
// function chooseType(optionSelect, angleCh) {
//   if (optValY !== "") {
//     const optSl = document.querySelector(".optSelsC");
//     const optTp = responseGr.sessions;
//     optSl.innerHTML = "";
//     optTp.forEach((f) => {
//       optSl.innerHTML += `
//                  <span raceOf=${f} class="optSlDrivers p-2 max-sm:text-xs text-lg flex justify-center bg-slate-950 text-zinc-300 transition ease-in-out hover:bg-zinc-200 hover:text-slate-900">${typeTr[f]}</span>
//                 `;
//     });
//     optClick();
//     isChType = !isChType;
//     const optCh = document.querySelector("." + optionSelect);
//     const angleUpCh = document.querySelector("." + angleCh);
//     if (isChType) {
//       angleUpCh.style.transform = "rotate(180deg)";
//       optCh.classList = "optSelsC max-sm:w-32 transition ease-in-out flex w-56 flex-col";
//     } else {
//       angleUpCh.style.transform = "rotate(0deg)";
//       optCh.classList =
//         "optSelsC z-0 max-sm:w-32 opacity-0 transition ease-in-out flex w-56 flex-col";
//     }
//   }
// }
// let isDrType = false;
// function chooseTypeD(optionSelect, angleCh) {
//   if (optValY !== "") {
//     const country = responseGp.Country;
//     const optSelsD = document.querySelector(".optSelsD");
//     optSelsD.innerHTML = "";
//     country.forEach((f) => {
//       optSelsD.innerHTML += `
//     <span cntValue = ${f.t} class=" optSlYf p-2 max-sm:text-xs text-lg flex justify-center
//     bg-slate-950 text-zinc-300 transition ease-in-out
//     hover:bg-zinc-200 hover:text-slate-900" noTr="${f.t}">${countryTr[f.tr] !== undefined ? countryTr[f.tr] : f.t
//         }</span>      
//     `;
//     });
//     sendGp();
//     isDrType = !isDrType;
//     const optCh = document.querySelector("." + optionSelect);
//     const angleUpCh = document.querySelector("." + angleCh);
//     if (isDrType) {
//       angleUpCh.style.transform = "rotate(180deg)";
//       optCh.classList =
//         "optSelsD max-sm:w-32 transition ease-in-out flex w-56 flex-col h-48 overflow-y-scroll";
//     } else {
//       angleUpCh.style.transform = "rotate(0deg)";
//       optCh.classList =
//         "optSelsD max-sm:w-32 z-10 opacity-0 transition ease-in-out flex w-56 h-20 overflow-y-scroll flex-col";
//     }
//   }
// }

// let optVal = "";
// let optIden = "";
// function optClick() {
//   const optChoose = document.querySelectorAll(".optSlDrivers");
//   optChoose.forEach((f) => {
//     f.addEventListener("click", (z) => {
//       optVal = z.target.innerText;
//       const optTit = document.querySelector(".typeTit");
//       optTit.innerText = optVal;
//       chooseType("optSelsC", "angleCh");
//       let optSen = z.target.getAttribute("raceOf");
//       optIden = optSen.split("_").join(" ");
//     });
//   });
// }
// let responseGp = "";
// const optChooseY = document.querySelectorAll(".optSlDriversY");
// let optValY = "";
// optChooseY.forEach((f) => {
//   f.addEventListener("click", (z) => {
//     optValY = z.target.innerText;
//     const optTitY = document.querySelector(".typeTitY");
//     optTitY.innerText = optValY;
//     chooseYear("optSelsY", "angleChY");
//     const http = new XMLHttpRequest();
//     http.open("GET", `api/v1/fastf1/session/gp?year=${optValY}`);
//     http.setRequestHeader("Content-Type", "application/json");
//     http.onreadystatechange = function () {
//       if (http.readyState === 4 && http.status === 200) {
//         responseGp = JSON.parse(http.response);
//       }
//     };
//     http.send();
//   });
// });
// const optChooseGr = document.querySelectorAll(".optSlYf");
// let responseGr = "";
// let resSendGr = "";
// async function sendGp() {
//   const optDr = document.querySelectorAll(".optSlYf");
//   optDr.forEach((f) => {
//     f.addEventListener("click", async(z) => {
//       const optTit = document.querySelector(".drvTitGr");
//       optValDr = z.target.getAttribute("noTr");
//       optTit.innerText = z.target.innerText;
//       chooseTypeD("optSelsD", "optAngS");
//       await fetch(`api/v1/fastf1/session?year=${optValY}&country=${optValDr}`)
//         .then(resP=>{
//           return resP.json()
//         })
//         .then(response=>{
//           responseGr = response
//           resSendGr = z.target.getAttribute("cntValue");
//         })
//     });
//   });
// }

// const driverLst = document.querySelector(".containerdrView");
// const searchAType = document.querySelector(".searchAType");
// let optValDr = "";
// function searchDrvs() {
//   if (optIden !== "") {
//     const searchDl = document.querySelector(".chooseRng");
//     const searchBtn = document.querySelector(".btnSearch");
//     searchDl.classList.add("cursor-pointer");
//     searchBtn.removeAttribute("disabled");
//     window.scrollBy(0, 25);
//     if (showInfDr.style.display !== "") {
//       driverLst.classList =
//         "containerdrView  max-xl:grid-cols-1 max-sm: grid max-lg:grid-cols-1 max-lg:gap-x-4  gap-x-10 gap-y-10 grid-rows-1 grid-cols-2";
//     } else {
//       driverLst.classList =
//         "containerdrView  max-sm:grid-cols-1 max-sm:gap-y-5 grid max-lg:grid-cols-2 max-lg:gap-x-10 gap-x-32 gap-y-10 grid-rows-4 grid-cols-3";
//     }
//     driverLst.innerHTML = `
//   <div class="dvCntD rounded-md flex animate-pulse flex-col gap-5 bg-gray-800 w-64 h-2 rounded-xl cursor-pointer">
//                 <div class="flex flex-col">
//                       <div class="p-4 rounded-t-md pb-8 items-center flex justify-around gap-4">
//                             <div
//                                   class="imgDrv w-16 rounded bg-slate-700 rounded-2xl h-full h-16 transition-all ease-in-out">
//                             </div>
//                             <div
//                                   class='colorTeam p-2 rounded flex text-center items-center justify-center bg-slate-700'>
//                                   <span class='rankDr text-slate-950'></span>
//                             </div>
//                       </div>
//                       <div class='colorTeam p-2 w-20 h-2 rounded-b flex text-center items-center justify-center bg-slate-700'>
//                             <span class='rankDr text-slate-950 text-xl'></span>
//                       </div>
//                 </div>
//                 <div class="mainDrO relative">
//                       <div class="mainCnDrv absolute"></div>
//                 </div>
//                 <hr>
//                 <div class="footDrO flex flex-col gap-4">
//                       <div class="topFoot flex items-center justify-around">
//                             <span class="text-gray-300 text-xl">
//                             </span>
//                             <span class="text-gray-400 text-xl"></span>
//                       </div>
//                       <div class="btmFoot flex justify-center">
//                           <button class="showInfBtn transition ease-in-out w-40 h-4 bg-slate-700 rounded-md text-slate-300"></button>
//                       </div>
//                 </div>
//           </div>
//           <div class="dvCntD rounded-md flex animate-pulse flex-col gap-5 bg-gray-800 w-64 h-2 rounded-xl cursor-pointer">
//           <div class="flex flex-col">
//                 <div class="p-4 rounded-t-md pb-8 items-center flex justify-around gap-4">
//                       <div
//                             class="imgDrv w-16 rounded bg-slate-700 rounded-2xl h-full h-16 transition-all ease-in-out">
//                       </div>
//                       <div
//                             class='colorTeam p-2 rounded flex text-center items-center justify-center bg-slate-700'>
//                             <span class='rankDr text-slate-950'></span>
//                       </div>
//                 </div>
//                 <div class='colorTeam p-2 w-20 h-2 rounded-b flex text-center items-center justify-center bg-slate-700'>
//                       <span class='rankDr text-slate-950 text-xl'></span>
//                 </div>
//           </div>
//           <div class="mainDrO relative">
//                 <div class="mainCnDrv absolute"></div>
//           </div>
//           <hr>
//           <div class="footDrO flex flex-col gap-4">
//                 <div class="topFoot flex items-center justify-around">
//                       <span class="text-gray-300 text-xl">
//                       </span>
//                       <span class="text-gray-400 text-xl"></span>
//                 </div>
//                 <div class="btmFoot flex justify-center">
//                     <button class="showInfBtn transition ease-in-out w-40 h-4 bg-slate-700 rounded-md text-slate-300"></button>
//                 </div>
//           </div>
//     </div> <div class="dvCntD rounded-md flex animate-pulse flex-col gap-5 bg-gray-800 w-64 h-2 rounded-xl cursor-pointer">
//                 <div class="flex flex-col">
//                       <div class="p-4 rounded-t-md pb-8 items-center flex justify-around gap-4">
//                             <div
//                                   class="imgDrv w-16 rounded bg-slate-700 rounded-2xl h-full h-16 transition-all ease-in-out">
//                             </div>
//                             <div
//                                   class='colorTeam p-2 rounded flex text-center items-center justify-center bg-slate-700'>
//                                   <span class='rankDr text-slate-950'></span>
//                             </div>
//                       </div>
//                       <div class='colorTeam p-2 w-20 h-2 rounded-b flex text-center items-center justify-center bg-slate-700'>
//                             <span class='rankDr text-slate-950 text-xl'></span>
//                       </div>
//                 </div>
//                 <div class="mainDrO relative">
//                       <div class="mainCnDrv absolute"></div>
//                 </div>
//                 <hr>
//                 <div class="footDrO flex flex-col gap-4">
//                       <div class="topFoot flex items-center justify-around">
//                             <span class="text-gray-300 text-xl">
//                             </span>
//                             <span class="text-gray-400 text-xl"></span>
//                       </div>
//                       <div class="btmFoot flex justify-center">
//                           <button class="showInfBtn transition ease-in-out w-40 h-4 bg-slate-700 rounded-md text-slate-300"></button>
//                       </div>
//                 </div>
//           </div>
//   `;
//     const http = new XMLHttpRequest();
//     http.open(
//       "GET",
//       `api/v1/fastf1/drivers?year=${optValY}&gp=${optValDr}&identifire=${optIden}`
//     );
//     http.setRequestHeader("Content-Type", "application/json");
//     http.onreadystatechange = function () {
//       if ((http.readyState === 4) & (http.status === 200)) {
//         let resDrivers = JSON.parse(http.response);
//         const drivers = resDrivers;
//         driverLst.innerHTML = ``;
//         drivers.forEach((f) => {
//           console.log(f)
//           driverLst.innerHTML += `
//         <div class="dvCntD rounded-md flex flex-col gap-2 bg-gray-800 w-64 h-80 rounded-xl cursor-pointer">
//                 <div class="flex flex-col">
//                       <div class="p-4 rounded-t-md pb-8 border border-b-slate-400 border-b-solid items-center flex justify-around gap-4"
//                             style="background-color:#${f.colorTeam};">
//                             <img src=${f.image}
//                                    class="imgDrv w-16 rounded-full bg-slate-600 -xl h-full transition-all ease-in-out">
//                             <div
//                                   style=${isNaN(f.position)
//               ? "display:none"
//               : "background-color:#e5e7eb"
//             } class='colorTeam w-10 p-2 rounded flex text-center items-center justify-center bg-slate-300'>
//                                   <span class='rankDr flex text-center justify-center text-slate-950'>${Number(
//               f.position
//             )}</span>
//                             </div>
//                       </div>
//                       <div class='colorTeam p-2 rounded-b flex text-center items-center justify-center bg-slate-300'>
//                             <span class='rankDr text-slate-950 text-xl'>${driversTr[f.name] !== undefined
//               ? driversTr[f.name]
//               : f.name
//             }</span>
//                       </div>
//                 </div>
//                 <div class="mainDrO relative">
//                       <div class="mainCnDrv absolute"></div>
//                 </div>
//                 <div class="footDrO flex flex-col gap-4">
//                       <div class="flex flex-col items-center gap-2 ">
//                       <div class="topFoot flex items-center justify-around">
//                             <span class="text-gray-400 text-large">${teamTr[f.teamName]
//             }</span>
//                       </div>
//                       <div class="btmFoot flex justify-around">
//                       <span class="text-gray-400 text-md">${f.Abbreviation
//             }</span>
//                       </div>
//                       </div>
//                       <div class="btmFoot flex justify-center">
//                           <button number=${f.driver_code
//             } class="showInfBtn hover:bg-slate-300 hover:text-violet-700 transition ease-in-out w-40 h-10 bg-violet-700 rounded-md text-slate-300">نمایش اطلاعات</button>
//                       </div>
//                 </div>
//           </div>
//         `;
//           showInf();
//         });
//       }
//     };
//     http.send();
//   }
// }
// const showInfDr = document.querySelector(".showInfDrivers");
// const searchR = document.querySelector(".lstSearch");
// let drvNum = "";

// let deltaForm = "";
// function getDelta(btName) {
//     const http = new XMLHttpRequest();
//     http.open(
//       "GET",
//       `/api/v1/fastf1/delta?year=${optValY}&gp=${optValDr}&identifire=${optIden}&driver=${btName}`
//     );
//     http.setRequestHeader("Content-Type", "application/json");
//     http.onreadystatechange = function () {
//       if ((http.readyState === 4, http.status === 200)) {
//         deltaForm = JSON.parse(http.response);
//       }
//     };
//     const body = {
//       year: optValY,
//       gp: optValDr,
//       identifire: optIden,
//       driver: btName,
//     };
//     http.send();
//   }
//   let average = "";
//   let lapTImes = "";
//   function timeAndAv(btName) {
//     const http = new XMLHttpRequest();
//     http.open(
//       "GET",
//       `api/v1/fastf1/lap-time-avg?year=${optValY}&gp=${optValDr}&identifire=${optIden}&driver=${btName}`
//     );
//     http.setRequestHeader("Content-Type", "application/json");
//     http.onreadystatechange = function () {
//       if ((http.readyState === 4, http.status === 200)) {
//         res = JSON.parse(http.response);
//         average = res.avg;
//         lapTImes = res.laptimes;
//       }
//     };
//     const body = {
//       year: optValY,
//       gp: optValDr,
//       identifire: optIden,
//       driver: btName,
//     };
//     http.send();
//   }
//   let sectors = "";
//   function getSectors(brokenName) {
//     const http = new XMLHttpRequest();
//     http.open(
//       "GET",
//       `api/v1/fastf1/sectors?year=${optValY}&gp=${optValDr}&identifire=${optIden}&driver=${brokenName}`
//     );
//     http.setRequestHeader("Content-Type", "application/json");
//     http.onreadystatechange = function () {
//       if ((http.readyState === 4, http.status === 200)) {
//         sectors = JSON.parse(http.response);
//       }
//     };
//     http.send();
//   }
//   function closeTab() {
//     searchR.style.display = "";
//     showInfDr.style.display = "";
//     const drView = document.querySelector(".driverView");
//     drView.style.height = "100%";
//     drView.style.overflowY = "hidden";
//     drView.style.overflowX = "hidden";
//     searchAType.classList.remove("grid");
//     searchAType.classList.add("flex");
//     driverLst.classList =
//       "containerdrView max-sm:grid-cols-1 grid gap-x-32 gap-y-10 grid-rows-4 grid-cols-3";
//     const searchAT = document.querySelector(".searchAType");
//   }
//   function getLapTime(brName) {
//     const http = new XMLHttpRequest();
//     http.open(
//       "GET",
//       `api/v1/fastf1/fastest-lap?year=${optValY}&gp=${optValDr}&identifire=${optIden}&driver=${brName}`
//     );
//     http.setRequestHeader("Content-Type", "application/json");
//     http.onreadystatechange = function () {
//       if ((http.readyState === 4, http.status === 200)) {
//         var stringExample = JSON.parse(http.response);
//         console.log(stringExample);
//         laptimeVal = stringExample;
//       }
//     };
//     http.send();
//   }
// function showInf() {
//   document.body.scrollBy(0, 0);
//   const btnInf = document.querySelectorAll(".showInfBtn");
//   btnInf.forEach((fr) => {
//     fr.addEventListener("click", (f) => {
//       const backDr = document.querySelector(".backDr");
//       backDr.style.display = "flex";
//       searchR.style.display = "none";
//       drvNum = f.target.getAttribute("number");
//       const brokenName =
//         f.target.parentElement.parentElement.children[0].children[1].children[0]
//           .innerText;
//       fastTime();
//       getDelta(brokenName);
//       timeAndAv(brokenName);
//       getSectors(brokenName);
//       getLapTime(brokenName);
//       const http = new XMLHttpRequest();
//       http.open(
//         "GET",
//         `api/v1/fastf1/driver-info?year=${optValY}&gp=${optValDr}&identifire=${optIden}&driver=${brokenName}`
//       );
//       http.setRequestHeader("Content-Type", "application/json");
//       http.onreadystatechange = function () {
//         if (http.readyState === 4 && http.status === 200) {
//           backDr.style.display = "none";
//           searchAType.classList.remove("flex");
//           searchAType.classList.add("grid");
//           const resP = JSON.parse(http.response).driver_info;
//           showInfDr.style.display = "block";
//           driverLst.classList =
//             "containerdrView max-sm:grid-cols-1 grid gap-x-10 gap-y-10 grid-rows-1 grid-cols-2";
//           const searchAT = document.querySelector(".searchAType");
//           searchAT.classList.remove("gap-48");
//           searchAT.classList.add("gap-4");
//           window.scrollBy(0, -250);
//           const leftD = document.querySelector(".topRightDr");
//           leftD.innerHTML = `
//                                   <span onclick="closeTab()"
//                                         class="absolute cursor-pointer top-2 right-2 text-3xl hover:text-rose-600">
//                                         <ion-icon name="close-circle-outline"></ion-icon>
//                                   </span>
//                                   <div class="imgDriv rounded-full max-sm:flex-col items-center flex">
//                                   <img src=${resP.image
//             } class = "w-14 h-14 rounded-full bg-slate-400"/>
//                                   <div
//                                         class="driverName max-sm:flex-col max-sm:gap-3 justify-between text-3xl pr-4 text-bold rounded w-80 rounded flex gap-4 flex items-center h-10">
//                                         <span>${driversTr[resP.name]}</span>
//                                         <span class="text-3xl italic text-bold">#${drvNum}</span>
//                                   </div>
//                                   </div>
//                                   <div class="nameDr max-sm:justify-center max-sm:gap-4 flex justify-between gap-8">
//                                         <div class="driverTeamName flex text-2xl rounded-md justify-center p-2 h-12 items-center bg-gray-950">
//                                               <span>${teamTr[resP.teamName]
//             }</span>
//                                         </div>
//                                         <div class="driverTeamName flex text-2xl rounded-md justify-center p-2 h-12 items-center bg-gray-950">
//                                               <span>${nationalTr[resP.Nationality]
//             }</span>
//                                         </div>
//                                   </div>
//                                   <div class="codeNumStl max-sm:h-full max-sm:flex-col rounded h-10 flex justify-around items-center" style="background-color:#${resP.colorTeam
//             }">
//                                         <span class="codeNumber w-1/3 text-bold text-slate-200 p-2">سن: ${resP.Age
//             }</span>
//                                         <span class="codeNumber w-2/3 text-bold text-slate-200 p-2">پیست: ${countryTr[
//             optValDr.split(" ").join("_")
//             ]
//             }</span>
//                                   </div>
//                             `;
//           const topLft = document.querySelector(".speedFst");
//           topLft.innerHTML = `
//                                   <div class="fasterLp bg-neutral-950 rounded p-4 flex justify-between w-64">
//                                               <span class="fstTit ">سریعترین دور:</span>
//                                               <span class="fstTime">${laptimeVal.laptime
//             }</span>
//                                         </div>
//                                         <div class="fasterLp rounded bg-neutral-950 p-4 flex justify-around w-64">
//                                               <span class="fstTit">دلتا:</span>
//                                               <span class="fstTime">${deltaForm.delta
//             }</span>
//                                         </div>
//                                         <div class="fasterLp rounded bg-neutral-950 p-4 flex justify-between w-64">
//                                               <span class="fstTit">میانگین دور ها:</span>
//                                               <span class="fstTime">${average}</span>
//                                         </div>
//                                         <div class="fasterLp rounded bg-neutral-950 ${fastTimeF.position == undefined ||
//               null
//               ? "hidden"
//               : ""
//             } p-4 flex justify-between w-64">
//                                               <span class="fstTit">رتبه در سریع ترین دور:</span>
//                                               <span class="fstTime">${fastTimeF.position ==
//               undefined || NaN
//               ? "داده ی نامشخص"
//               : fastTimeF.position
//             }</span>
//                                         </div>
//                             `;
//           const sectorF = document.querySelector(".sectorF");
//           const sectorSec = document.querySelector(".sectorSec");
//           const sectorTh = document.querySelector(".sectorTh");
//           sectorF.innerHTML = "";
//           sectorSec.innerHTML = "";
//           sectorTh.innerHTML = "";
//           let sectorR1 = 0;

//           sectors.sectors.sector1.forEach((f) => {
//             sectorR1++;
//             sectorF.innerHTML += `
//                                   <div class="timesDriver max-sm:text-xs justify-center items-center flex gap-4 p-5">
//                                         <span>${f}</span>
//                                   </div>`;
//           });
//           let sectorR2 = 0;
//           sectors.sectors.sector2.forEach((f) => {
//             sectorR2++;
//             sectorSec.innerHTML += `
//                                   <div class="timesDriver max-sm:text-xs justify-center items-center flex gap-4 p-5" >
//                                         <span>${f}</span>
//                                   </div> `;
//           });
//           let sectorR3 = 0;
//           sectors.sectors.sector3.forEach((f) => {
//             sectorR3++;
//             sectorTh.innerHTML += `
//                                   <div class="timesDriver max-sm:text-xs justify-center items-center flex gap-4 p-5" >
//                                         <span>${f}</span>
//                                   </div> `;
//           });
//           let lapTime = document.querySelector(".lapTime");
//           lapTime.innerHTML = "";
//           let i = 0;
//           lapTImes.forEach((f) => {
//             i++;
//             lapTime.innerHTML += `
//                                   <div class="timesDriver max-sm:text-xs justify-center items-center flex gap-4 p-5" >
//                                         <span>${f}</span>
//                                   </div>
//                                   `;
//           });
//           let columnVal =
//             lapTImes.length > sectors.sectors.sector1.length &&
//               sectors.sectors.sector2.length &&
//               sectors.sectors.sector3.length
//               ? lapTImes.length
//               : sectors.sectors.sector3.length > lapTImes.length &&
//                 sectors.sectors.sector2.length &&
//                 sectors.sectors.sector3.length
//                 ? sectors.sectors.sector3.length
//                 : ((sectors.sectors.sector2.length ==
//                   sectors.sectors.sector1.length) ==
//                   sectors.sectors.sector3.length) ==
//                   lapTImes.length
//                   ? lapTImes.length
//                   : sectors.sectors.sector2.length > sectors.sectors.sector3.length
//                     ? sectors.sectors.sector2.length
//                     : lapTImes.length;
//           let roundNum = document.querySelector(".roundNum");
//           roundNum.innerHTML = "";
//           for (let r = 1; r <= columnVal; r++) {
//             roundNum.innerHTML += `
//                                   <div class="timesNum max-sm:text-xs justify-center items-center flex gap-4 p-5" >
//                                         <span>${r}</span>
//                                   </div>
//                                   `;
//           }
//         }
//       };
//       http.send();
//     });
//   });
// }

// let fastTimeF = "";
// function fastTime(btName) {
//   const http = new XMLHttpRequest();
//   http.open(
//     "GET",
//     `api/v1/fastf1/fastest-position?year=${optValY}&gp=${optValDr}&identifire=${optIden}&driver=${drvNum}`
//   );
//   http.setRequestHeader("Content-Type", "application/json");
//   let splIden = optIden.split(" ");
//   http.onreadystatechange = function () {
//     if (
//       (http.readyState === 4, http.status === 200 && splIden[0] !== "Practice")
//     ) {
//       const responseF = JSON.parse(http.response);
//       fastTimeF = responseF;
//     }
//     else if (http.status === 404) {
//       http.open(
//         "POST",
//         `api/v1/fastf1/fastest-position?year=${optValY}&gp=${optValDr}&identifire=${optIden}&driver=${drvNum}`
//       );
//       http.setRequestHeader("Content-Type", "application/json");
//       let splIden = optIden.split(" ");
//       http.onreadystatechange = function () {
//         if (
//           (http.readyState === 4, http.status === 200 && splIden[0] !== "Practice")
//         ) {
//           const responseF = JSON.parse(http.response);
//           fastTimeF = responseF;
//         }
//       }
//     };
//     http.send();
//   }
//   let laptimeVal = "";
  

// }