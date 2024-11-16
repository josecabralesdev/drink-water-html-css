const $ = el => document.querySelector(el)
const $$ = el => document.querySelectorAll(el)

const percent = '%'
const full = $(".full")
let fullPercent = 0
let fullNumber = 0
full.style.height = fullNumber + percent
const empty = $(".empty")
let emptyNumber = 100
empty.style.height = emptyNumber + percent
let litters = $("strong")
let litterNumber = 2
const litterL = 'L'
litters.innerText = litterNumber + litterL
let glasses = $$(".glasses")
glasses = [...glasses]

glasses.forEach(glass => {
  glass.addEventListener('click', e => {
    let glass = e.target.classList

    glass.toggle('drank')

    let drank = false
    glass.forEach(item => {
      if (item === 'drank') {
        drank = true
        return
      }
    })

    if (drank) {
      fullNumber += 12.5
      fullFunction(fullNumber)

      emptyNumber -= 12.5
      emptyFunction(emptyNumber)
    } else {
      fullNumber -= 12.5
      fullFunction(fullNumber)

      emptyNumber += 12.5
      const emptyHeight = emptyNumber + percent
      empty.style.height = emptyHeight
      litterNumber += 0.25
      litters.innerText = litterNumber + litterL
    }
  })
})

const fullFunction = fullNumber => {
  const fullHeight = fullNumber + percent
  full.style.height = fullHeight
  full.innerText = fullHeight
}

const emptyFunction = emptyNumber => {
  const emptyHeight = emptyNumber + percent
  empty.style.height = emptyHeight
  litterNumber -= 0.25
  litters.innerText = litterNumber + litterL
}