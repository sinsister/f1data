const moveRingTh = document.querySelector(".ringTh")
const moveRingF = document.querySelector(".ringF")
const moveRingSec = document.querySelector(".ringSec")
moveRingTh.addEventListener("mouseover", f => {
      moveRingF.style.borderColor = "yellow"
      moveRingTh.style.borderColor = "green"
      moveRingSec.style.borderColor = "orange"
})
moveRingTh.addEventListener("mouseout", f => {
      moveRingF.style.borderColor = ""
      moveRingTh.style.borderColor = ""
      moveRingSec.style.borderColor = ""
})
let body = {
      email: "",
      password: "",
      username: ""
}
function setInputs(el, val, err) {
      const input = document.querySelector("." + el)
      const errTit = document.querySelector("." + err)
      body[val] = input.value
      if (input.value == '') {
            input.style.borderColor = '#ff2c2c'
            errTit.innerText = 'این فیلد اجباری است'
      }
      else {
            input.style.borderColor = ''
            errTit.innerText = ''
      }
      if (body.email !== '' && body.password !== '') {
            const subLogin = document.querySelector(".subLogin")
            subLogin.classList.add('cursor-pointer')
      }
      else {
            const subLogin = document.querySelector(".subLogin")
            subLogin.classList.remove('cursor-pointer')
      }
}
function loginUser() {
      if (body.email !== '' && body.password !== '') {
            const xhr = new XMLHttpRequest()
            xhr.open('POST', '/api/v1/auth/login')
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                  if (xhr.status === 4 & xhr.status == 200) {
                        console.log('login');
                  }
                  else if (xhr.status == 403) {
                        const errorTgAll = document.querySelector(".errorTgAll")
                        errorTgAll.innerText = "نام کاربری یا رمز عبور صحیح نیست"
                  }
            }
            xhr.send(JSON.stringify(body))
      }
}