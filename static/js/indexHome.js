const countries = {
      Bahrain: "BH",
      "Saudi Arabia": "SA",
      Australia: "AU",
      Japan: "JP",
      China: "CN",
      USA: "US",
      Italy: "IT",
      Monaco: "MC",
      Canada: "CA",
      Spain: "ES",
      Mexico:"MX",
      Austria: "AT",
      UK: "UG",
      Hungary: "HU",
      Belgium: "BE",
      Netherlands: "NL",
      Azerbaijan: "AZ",
      Singapore: "SG",
      Brazil: "BR",
      "United States": "US",
      Qatar: "QA",
      "UAE": 'AE'
};
const trTeam = { 'red_bull': "رد بول", "ferrari": 'فراری',"mclaren":'مک لارن' }
const driverColor = { 'alfa romeo': '#900000', 'alphatauri': '#2b4562', 'alpine': '#0090ff', 'aston martin': '#006f62', 'ferrari': '#dc0000', 'haas': '#ffffff', 'mclaren': '#ff8700', 'mercedes': '#00d2be', 'red_bull': '#0600ef', 'williams': '#005aff' }
const driversTr = {
      max_verstappen: "مکس ورستپن",
      lawson: "لیام لاوسون",
      perez: "سرجیو پرز",
      hamilton: "لوئیس همیلتون",
      russell: "جورج راسل",
      schumacher: "میک شوماخر",
      leclerc: "شارل لکلرک",
      kubica: "رابرت کوبیتسا",
      mazepin: "نیکیتا مازپین",
      sainz: "کارلوس ساینز",
      albon: "الکس آلبون",
      giovinazzi: "آنتونیو جیووناتزی",
      vettel: "سباستین فتل",
      sargeant: "لوگان سارجنت",
      latifi: "نیکولاس لطیفی",
      zhou: "گوانیو ژو",
      nyck_de_vries: "نیک دوریس",
      bottas: "والتری بوتاس",
      ricciardo: "دنیل ریکاردو",
      norris: "لندو نوریس",
      piastri: "اسکار پیاستری",
      stroll: "لنس استرول",
      alonso: "فرناندو آلونسو",
      gasly: "پیر گسلی",
      ocon: "استبان اوکون",
      ysunoda: "یوکی سونودا",
      hulkenberg: "نیکو هالکنبرگ",
      magnussen: "کوین مگنوسن",
};
const imgs =
{
      'max_verstappen': 'https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png',
      'perez': 'https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png',
      'alonso': 'https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/1col/image.png',
      'sainz': 'https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/1col/image.png',
      'hamilton': 'https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png',
      'stroll': 'https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/1col/image.png',
      'russell': 'https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png',
      'bottas': 'https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/1col/image.png',
      'gasly': 'https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/1col/image.png',
      'albon': 'https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/1col/image.png',
      'tsunoda': 'https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/1col/image.png',
      'sargeant': 'https://www.formula1.com/content/dam/fom-website/drivers/L/LOGSAR01_Logan_Sargeant/logsar01.png.transform/1col/image.png',
      'kevin_magnussen': 'https://www.formula1.com/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/1col/image.png',
      'de_vries': 'https://www.formula1.com/content/dam/fom-website/drivers/N/NYCDEV01_Nyck_De%20Vries/nycdev01.png.transform/1col/image.png',
      'hulkenberg': 'https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/1col/image.png',
      'zhou': 'https://www.formula1.com/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/1col/image.png',
      'norris': 'https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/1col/image.png',
      'ocon': 'https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/1col/image.png',
      'leclerc': 'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/1col/image.png',
      'piastri': 'https://www.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/1col/image.png'
}
function getCalcu(url) {
      if (url == "https://ergast.com/api/f1/2024.json") {
            fetch(url)
                  .then((res) => {
                        if (res.ok) {
                              return res.json();
                        } else {
                              console.log("error");
                        }
                  })
                  .then((resP) => {
                        const datas = resP.MRData.RaceTable.Races;
                        for (let i = 0; i < datas.length; i++) {
                              const slidersInf = document.querySelector(".sliders");
                              slidersInf.innerHTML += `
                        <div class="slider flex noActive absolute w-full h-full gap-20 flex-col items-center">
                                          <div class="backDrSlider opacity-0 absolute h-full w-full"></div>
                                          <div class="countryAndPist z-0 max-sm:flex-col max-sm:gap-4 max-sm:text-center gap-8 flex justify-center items-center">
                                                <div class="rightLt h-32 flex items-center justify-center">
                                                      <img src='https://flagsapi.com/${countries[datas[i].Circuit.Location.country]}/flat/64.png'>
                                                </div>
                                                <div class="lefttLt flex flex-col gap-2">
                                                      <div class="cntName text-2xl">
                                                            <h5>${datas[i].Circuit.Location.country}</h5>
                                                      </div>
                                                      <div class="grandPryNm text-sm">
                                                            <h5>${datas[i].raceName}</h5>
                                                      </div>
                                                </div>
                                          </div>

                                          <div class="idnts flex w-full items-center flex-col gap-6">
                  <div class="identiesNm justify-end max-sm:justify-center w-80 w-full flex-col items-center flex gap-10">
                        <div class="regonInf max-sm:justify-center justify-end w-80 flex gap-2">
                              <h5>${datas[i].raceName}</h5>
                              <span> نام منطقه:</span>
                              <div class="idenInf">
                                    <div class="select"><ion-icon name="ellipse-outline"></ion-icon>
                                    </div>
                              </div>
            
                        </div>
                        <div class="idenDate max-sm:justify-center justify-end w-80 flex gap-2 flex-start">
                              <h5>${datas[i].date}</h5>
                              <span> تاریخ :</span>
                              <div class="idenInf">
                                    <div class="select"><ion-icon name="ellipse-outline"></ion-icon>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
                                          <div class="cirInt items-center max-sm:flex-col flex w-full justify-evenly">
                                                <div class="mapCir">
                                                      <img class="h-full w-96" src='/assets/imgs/GrandPrix/${datas[i].raceName.split(" ").join('_')}.png' />
                                                </div>
                                                <div class="infMapCir flex flex-col gap-4">
                                                      <div class="nameMap text-xl text-bold"><span> اطلاعات پیست</span>
                                                      </div>
                                                      <div class="widthMap flex gap-2 text-sm">
                                                            <h5>${datas[i].Circuit.Location.locality} mile</h5>
                                                            <span>شهر: </span>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                        `;
                        }
                        getBestDrvs()
                        const sliders = document.querySelectorAll(".slider");
                        sliders[0].classList.add("z-10");
                        sliders[0].classList.add("active");
                        sliders[0].classList.remove("noActive");
                  });
      }
      else {
            fetch(url)
                  .then(res => {
                        if (res.status == 200) {
                              return res.json()
                        }
                        else {
                              return { message: "error" }
                        }
                  })
                  .then(resp => {
                        const sliderNews = document.querySelector(".slidersHome")
                        sliderNews.innerHTML = ''
                        resp.forEach(f => {
                              sliderNews.innerHTML += `
                              <div class="newsSlider absolute noActive h-96 pt-2 flex flex-col gap-20 items-center">
                                    <div class="flex flex-col items-center">
                                          <div class="title w-80 flex justify-center">
                                                <h2 class="text-3xl text-bold flex text-center p-5 border-b border-gray-500">${f.name}</h2>
                                          </div>
                                    </div>
                                    <div class="imgNews">
                                          <img class="w-64 h-full rounded-md" src="${f.image}" alt="new">
                                    </div>
                                    
                              </div>
                              `
                        })
                        const sliders = document.querySelectorAll(".newsSlider");
                        sliders[0].classList.add("z-10");
                        sliders[0].classList.add("active");
                        sliders[0].classList.remove("noActive");
                  })
      }
}
const url = "https://ergast.com/api/f1/2024.json";

document.addEventListener("DOMContentLoaded", getCalcu(url));
document.addEventListener("DOMContentLoaded", getCalcu('/blog/news/'));
let slideHome = 0;
let slideNews = 0
function sliderNext(slider, slide) {
      const sliders = document.querySelectorAll(`.${slider}`);
      // showBackDrSlider();
      
      slide == 'news' ? slideNews++ : slideHome++
      if (slide == 'home' && slideHome > sliders.length - 1) {
            slideHome = 0;
      } else if (slide == 'news' && slideNews > sliders.length - 1) {
            slideNews = 0;
      }
      if (slide == 'news') {
            hideAll('newsSlider');
            sliders[slideNews].classList.add("active");
            sliders[slideNews].classList.add("z-10");
            sliders[slideNews].classList.remove("noActive");
      } else {
            hideAll('slider');
            sliders[slideHome].classList.add("active");
            sliders[slideHome].classList.add("z-10");
            sliders[slideHome].classList.remove("noActive");
      }
}
function hideAll(slider) {
      const sliders = document.querySelectorAll(`.${slider}`);

      sliders.forEach((f) => {
            f.classList.add("noActive");
            f.classList.remove("active");
            f.classList.remove("z-10");
      });
}
function showBackDrSlider() {
      const backDrSlide = document.querySelector(".backDrSlider");
      backDrSlide.classList.remove("opacity-0");
      setTimeout(() => {
            backDrSlide.classList.add("opacity-0");
      }, 500);
}
function sliderPrev(slider, slide) {
      const sliders = document.querySelectorAll(`.${slider}`);

      // showBackDrSlider();
      
      slide == 'news' ? slideNews-- : slideHome--
      if (slide == 'home' && slideHome < 0) {
            slideHome = sliders.length - 1;
      } else if (slide == 'news' && slideNews < 0) {
            slideNews = sliders.length - 1;
      }
      if (slide == 'news') {
            hideAll('newsSlider');
            sliders[slideNews].classList.add("active");
            sliders[slideNews].classList.add("z-10");
            sliders[slideNews].classList.remove("noActive");
      } else {
            hideAll('slider');
            sliders[slideHome].classList.add("active");
            sliders[slideHome].classList.add("z-10");
            sliders[slideHome].classList.remove("noActive");
      }
}

function getBestDrvs() {
      fetch('/api/v1/fastf1/points?year=2024')
            .then(res => {
                  if (res.status == 200) {
                        return res.json()
                  }
                  else {
                        return { message: "error" }
                  }
            })
            .then(resP => {
                  const boxWin = document.querySelector(".boxWinner")
                  const boxSec = document.querySelector(".boxSec")
                  const boxTh = document.querySelector(".boxTh")
                  boxWin.style = `--clr:${driverColor[resP.drivers_points[0].team_id]}`
                  boxSec.style = `--clr:${driverColor[resP.drivers_points[1].team_id]}`
                  boxTh.style = `--clr:${driverColor[resP.drivers_points[2].team_id]}`
                  boxWin.innerHTML = `
                        <div class="content">
                        <div class="imgDrv"><img class="imgDr" src="${imgs[resP.drivers_points[0].name]}"></div>
                        <div class="text">
                              <h3>${driversTr[resP.drivers_points[0].name]}</h3>
                              <p>${trTeam[resP.drivers_points[0].team_id]}</p>
                              <span>امتیاز ${resP.drivers_points[0].points}</span>
                        </div>
                        </div>
                  `
                  boxSec.innerHTML = `
                        <div class="content">
                        <div class="imgDrv"><img class="imgDr" src="${imgs[resP.drivers_points[1].name]}"></div>
                        <div class="text">
                              <h3>${driversTr[resP.drivers_points[1].name]}</h3>
                              <p>${trTeam[resP.drivers_points[1].team_id]}</p>
                              <span>امتیاز ${resP.drivers_points[1].points}</span>
                        </div>
                        </div>
                  `
                  boxTh.innerHTML = `
                        <div class="content">
                        <div class="imgDrv"><img class="imgDr" src="${imgs[resP.drivers_points[2].name]}"></div>
                        <div class="text">
                              <h3>${driversTr[resP.drivers_points[2].name]}</h3>
                              <p>${trTeam[resP.drivers_points[2].team_id]}</p>
                              <span>امتیاز ${resP.drivers_points[2].points}</span>
                        </div>
                        </div>
                  `

            })
}
