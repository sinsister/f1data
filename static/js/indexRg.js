document.addEventListener("DOMContentLoaded", recaptcha())

function recaptcha() {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', '/api/v1/captcha/get')
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
            const otpCode = document.querySelector('.otpCode')
            if (xhr.readyState === 4 && xhr.status === 200) {
                  const response = JSON.parse(xhr.response)
                  otpCode.innerHTML = `
                              <img src='api/v1/media/${response.filename}' />
                        `
            }
      }
      xhr.send()
}

let body = {
      email: "",
      password1: "",
      fullname: "",
      username: "",
      password2: "",
      city: "",
      captcha: ""
}
function vrfEmail() {
      const xhr = new XMLHttpRequest()
      xhr.open('POST', '/api/v1/userverify-otp')
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                  setInterval(Toastify({
                        text: "ایمیل با موفقیت تایید شد",
                        className: "info",
                        style: {
                              background: "linear-gradient(to right, #00b09b, #96c93d)",
                              width: "300px",
                              height: "55px"
                        },
                        gravity: "bottom",

                  }).showToast(), 3000)
                  window.location = "/login"
            }
      }
      const bodyVrf = {
            email: body.email,
            otp: Number(otp)
      }
      xhr.send(JSON.stringify(bodyVrf))
}
let otp = ''
function checkVrf(el, err) {
      const inps = document.querySelector("." + el)
      const errTit = document.querySelector("." + err)
      if (inps.value == "") {
            inps.style.borderColor = '#ff2c2c'
            errTit.innerText = 'این فیلد اجباری است'
      }
      else {
            inps.style.borderColor = ''
            errTit.innerText = ''
            otp = inps.value
      }
}
let isReg = false
function setInputs(el, val, err) {
      let passWd = ''
      const input = document.querySelector("." + el)
      const errTit = document.querySelector("." + err)
      body[val] = input.value
      if (input.value == "") {
            if (input.getAttribute("inpType") == "city") {
                  input.style.borderColor = ''
                  errTit.innerText = ''
            }
            else if (input.getAttribute("inpType") !== "city") {
                  input.style.borderColor = '#ff2c2c'
                  errTit.innerText = 'این فیلد اجباری است'
            }
      }
      else {
            input.style.borderColor = ''
            errTit.innerText = ''
      }
      if (input.getAttribute("inpType") == "pass" && input.value.length < 8) {
            input.style.borderColor = '#ff2c2c'
            isReg = false
            errTit.innerText = 'کاراکتر های رمز عبور باید بیشتر از 8 باشد'
      }
      else {
            const inpPassTh = document.querySelector(".inpPass")
            passWd = inpPassTh.value
      }
      if (input.getAttribute("inpType") == "passR") {
            if (input.value !== passWd) {
                  input.style.borderColor = '#ff2c2c'
                  isReg = false
                  errTit.innerText = 'تکرار رمز عبور با رمز عبور مطابقت ندارد'
            } else {
                  input.style.borderColor = ''
                  isReg = true
                  errTit.innerText = ''
                  if (isReg == true) {
                        subSign.disabled = false
                  }
            }
      }
}

setInputs("inpCity", "city", "errorTgC")
const subSign = document.querySelector(".subSign")
subSign.addEventListener("click", f => {
      signUp()
})
function signUp() {
      const xhr = new XMLHttpRequest()
      xhr.open('POST', 'api/v1/auth/register')
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                  const frmRg = document.querySelector(".frmRg")
                  frmRg.innerHTML = `
                              <div class="contVrf">
                  <div class="headerFrm flex justify-center pb-8">
                        <h1 class="text-large text-slate-300">تایید ایمیل</h1>
                  </div>
                  <div class="formsLog flex items-center justify-center h-48 flex-col gap-10">
                        <div class="inpEr flex flex-col rtl">
                              <div class="inpTit flex flex-col gap-2 rtl">
                                    <span class="titleInp">
                                          کد تایید
                                    </span>
                                    <input type="number" maxlength=6 inputmode="numeric" inpType="Vrf"
                                          class="inpVrf transition ease-in-out text-slate-900 w-72 pr-2 text-gray-950 z-10 h-10 rounded-md"
                                          placeholder="کد تایید را وارد کنید"
                                          oninput="checkVrf('inpVrf', 'errorTgVrf')">
                              </div>
                              <span class="errorTgVrf h-4 text-rose-800">

                              </span>
                        </div>
                        <div class="subInp flex flex-col gap-4">
                              <input type="button" value="تایید کد" onclick="vrfEmail()"
                                    class="subSign w-72 z-10 cursor-pointer transition ease-in-out hover:bg-slate-300 rounded-md hover:text-violet-950 bg-violet-950 h-10">
                        </div>
                  </div>
            </div>
                              `
            }
      }
      xhr.send(JSON.stringify(body))
}