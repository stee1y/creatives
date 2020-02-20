
import scss from './styles/main.scss'
import icon_1_2 from './img/Write.png'
import icon_4 from './img/Simon says.png'
import icon_3 from './img/Search (and thou shall find).png'
import phone from './img/phone.png'
import map from './img/map.jpg'
import main from './img/main.jpg'
import bg from './img/bg.jpg'
import bg_form from './img/bg-form.jpg'
import team_1 from './img/1_team.jpg'
import team_2 from './img/2_team.jpg'
import team_3 from './img/3_team.jpg'
import team_4 from './img/4_team.jpg'
import blog_1 from './img/1_blog.jpg'
import blog_2 from './img/2_blog.jpg'
import blog_3 from './img/3_blog.jpg'
import img_1 from './img/1_img.jpg'
import img_2 from './img/2_img.jpg'

const menu = document.querySelector('.nav__menu')
const toggle = document.querySelector('.nav__toggle')

const menuToggle = function () {
  menu.classList.toggle('active')
  toggle.classList.toggle('toggle-close')
}

toggle.addEventListener('click', menuToggle)


let links = document.querySelectorAll('a[href*="#"]')

for(let link of links) {
  link.addEventListener('click', (e)=> {
    e.preventDefault();

    const idLink = link.getAttribute('href')

    for(let key of menu.classList) {
      if (key === 'active') {
        menuToggle()
      }
    }

    document.querySelector(''+idLink).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
