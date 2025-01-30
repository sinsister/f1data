const imgBl = [...document.querySelectorAll('.imgBl')]
imgBl.forEach(f => {
      f.addEventListener("mouseover", (f) => {
            f.target.parentElement.children[1].classList.remove('opacity-0');
      })
      f.addEventListener("mouseleave", f => {
            console.log('object');
            console.log(f.target.children[1].classList.add('opacity-0'))
      })
})