// Browse topics navigation functionality
let topicsNav = document.querySelector('#browseTopics > nav > ul')
let design = document.getElementById('navDesign')
let marketing = document.getElementById('navMarketing')
let finance = document.getElementById('navFinance')
let music = document.getElementById('navMusic')
let education = document.getElementById('navEducation')

let designGrid = document.querySelector(
  '#browseTopics > div.grid-container.mb-5.designGrid'
)
let marketingGrid = document.querySelector(
  '#browseTopics > div.grid-container.mb-5.marketingGrid'
)
let financeGrid = document.querySelector(
  '#browseTopics > div.grid-container.mb-5.financeGrid'
)
let musicGrid = document.querySelector(
  '#browseTopics > div.grid-container.mb-5.musicGrid'
)
let educationGrid = document.querySelector(
  '#browseTopics > div.grid-container.mb-5.educationGrid'
)

function designClicked () {
  design.setAttribute('class', 'btn active')
  marketing.setAttribute('class', 'btn')
  finance.setAttribute('class', 'btn')
  music.setAttribute('class', 'btn')
  education.setAttribute('class', 'btn')

  designGrid.style.display = 'grid';
  marketingGrid.style.display = 'none';
  financeGrid.style.display = 'none';
  musicGrid.style.display = 'none';
  educationGrid.style.display = 'none';
}

function marketingClicked () {
  design.setAttribute('class', 'btn')
  marketing.setAttribute('class', 'btn active')
  finance.setAttribute('class', 'btn')
  music.setAttribute('class', 'btn')
  education.setAttribute('class', 'btn')

  designGrid.style.display = 'none';
  marketingGrid.style.display = 'grid';
  financeGrid.style.display = 'none';
  musicGrid.style.display = 'none';
  educationGrid.style.display = 'none';
}

function financeClicked () {
  design.setAttribute('class', 'btn')
  marketing.setAttribute('class', 'btn')
  finance.setAttribute('class', 'btn active')
  music.setAttribute('class', 'btn')
  education.setAttribute('class', 'btn')

  designGrid.style.display = 'none';
  marketingGrid.style.display = 'none';
  financeGrid.style.display = 'grid';
  musicGrid.style.display = 'none';
  educationGrid.style.display = 'none';
}

function musicClicked () {
  design.setAttribute('class', 'btn')
  marketing.setAttribute('class', 'btn')
  finance.setAttribute('class', 'btn')
  music.setAttribute('class', 'btn active')
  education.setAttribute('class', 'btn')

  designGrid.style.display = 'none';
  marketingGrid.style.display = 'none';
  financeGrid.style.display = 'none';
  musicGrid.style.display = 'grid';
  educationGrid.style.display = 'none';
}

function educationClicked () {
  design.setAttribute('class', 'btn')
  marketing.setAttribute('class', 'btn')
  finance.setAttribute('class', 'btn')
  music.setAttribute('class', 'btn')
  education.setAttribute('class', 'btn active')

  designGrid.style.display = 'none';
  marketingGrid.style.display = 'none';
  financeGrid.style.display = 'none';
  musicGrid.style.display = 'none';
  educationGrid.style.display = 'grid';
}
