const diamond = []
const diamond_logo = []
let side_area = []
const base_delay = 200
const base_width = 2
const window_h = window.innerHeight
const window_w = window.innerWidth
const diagonal = window_w / 5
const row_n = 1 + Math.ceil(window_h * 2 / (diagonal))
const org_col_n = Math.ceil(window_w / diagonal)
const col_n = org_col_n + Math.floor(row_n / 2)
const diamond_n = row_n * col_n;
const origin_top = "100%"
const origin_left_1 = "3%"
const origin_left_2 = "-7%"


const svg_icon = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?\> <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"viewBox=\"0 0 321.145 321.145\" style=\"enable-background:new 0 0 321.145 321.145;\" xml:space=\"preserve\"><g><g><path d=\"M320.973,200.981c-0.8-18.4-4-38.8-8.8-58c-4.8-18.4-10.8-35.6-18-48.8c-28-49.2-58.4-41.6-94.8-32 c-11.6,2.8-24,6-36.8,7.2h-4c-12.8-1.2-25.2-4.4-36.8-7.2c-36.4-9.2-66.8-17.2-94.8,32.4c-7.2,13.2-13.6,30.4-18,48.8 c-4.8,19.2-8,39.6-8.8,58c-0.8,20.4,1.2,35.2,5.6,45.6c4.4,9.6,10.8,15.6,19.2,18c7.6,2,16.4,1.2,25.6-2.8 c15.6-6.4,33.6-20,51.2-36.4c12.4-12,35.6-18,58.8-18s46.4,6,58.8,18c17.6,16.4,35.6,30,51.2,36.4c9.2,3.6,18,4.8,25.6,2.8 c8-2.4,14.8-8,19.2-18.4C319.773,236.581,321.773,221.781,320.973,200.981z M301.773,240.981c-2.4,5.6-5.6,8.8-9.6,10 c-4.4,1.2-10,0.4-16.4-2c-14-5.6-30.4-18-46.4-33.2c-15.2-15.2-42-22.8-68.8-22.8s-53.6,7.6-69.2,22c-16.4,15.2-32.8,28-46.4,33.2 c-6.4,2.4-12,3.6-16.4,2c-4-1.2-7.2-4.4-9.6-10c-3.2-7.6-4.8-20-4-38.4c0.8-17.2,3.6-36.8,8.4-55.2c4.4-17.2,10-33.2,16.8-45.2 c22-39.6,47.6-33.2,78-25.2c12.4,3.2,25.2,6.4,39.2,7.6c0.4,0,0.4,0,0.8,0h4.4c0.4,0,0.4,0,0.8,0c14.4-1.2,27.2-4.4,39.6-7.6 c30.4-7.6,56-14.4,78,25.2c6.8,12,12.4,27.6,16.8,45.2c4.4,18.4,7.6,37.6,8.4,55.2 C306.973,220.181,305.373,232.581,301.773,240.981z\"/>    </g> </g> <g> <g> <path d=\"M123.773,122.981c-4-3.6-8.8-6.4-14.4-6.8c-0.4-5.2-2.8-10.4-6.4-14l-0.4-0.4c-4.4-4.4-10-6.8-16.4-6.8 c-6.4,0-12.4,2.8-16.4,6.8c-3.6,3.6-6.4,8.8-6.8,14.4c-5.6,0.4-10.4,2.8-14.4,6.4l-0.4,0.4c-4.4,4.4-6.8,10-6.8,16.4 c0,6.4,2.8,12.4,6.8,16.4c4,4,8.8,6.4,14.8,6.8c0.4,5.6,2.8,10.8,6.8,14.4c4.4,4.4,10,6.8,16.4,6.8c6.4,0,12.4-2.8,16.4-6.8 c3.6-4,6.4-8.8,6.8-14.4c5.6-0.4,10.8-2.8,14.4-6.8c4.4-4.4,6.8-10,6.8-16.4C130.573,132.981,127.773,126.981,123.773,122.981z M113.773,145.381c-1.6,1.6-3.6,2.4-6,2.4h-5.6c-4,0-7.6,3.2-7.6,7.6v5.2c0,2.4-0.8,4.4-2.4,6c-1.6,1.6-3.6,2.4-6,2.4 c-2.4,0-4.4-0.8-6-2.4c-1.6-1.6-2.4-3.6-2.4-6v-5.6c0-4-3.2-7.6-7.6-7.6h-5.6c-2.4,0-4.4-0.8-6-2.4c-1.2-1.2-2.4-3.2-2.4-5.6 c0-2.4,0.8-4.4,2.4-6c0,0,0,0,0.4-0.4c1.6-1.2,3.6-2,5.6-2h5.6c4,0,7.6-3.2,7.6-7.6v-5.6c0-2.4,0.8-4.4,2.4-6 c1.6-1.6,3.6-2.4,6-2.4c2.4,0,4.4,0.8,6,2.4c0,0,0,0,0.4,0.4c1.2,1.6,2,3.6,2,5.6v5.6c0,4,3.2,7.6,7.6,7.6h5.6 c2.4,0,4.4,0.8,6,2.4c1.6,1.6,2.4,3.6,2.4,6C116.173,141.781,115.373,143.781,113.773,145.381z\"/>    </g></g><g>    <g>        <circle cx=\"230.173\" cy=\"110.981\" r=\"14\"/>    </g></g><g>    <g>        <circle cx=\"230.173\" cy=\"167.781\" r=\"14\"/>    </g></g><g>    <g>        <circle cx=\"201.773\" cy=\"139.381\" r=\"14\"/>    </g></g><g>    <g>        <circle cx=\"258.573\" cy=\"139.381\" r=\"14\"/>    </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g> </g> <g> </g> </svg>"


let i = 0
let trigger_i = 0
let trigger_r = 0
let trigger_c = 0

for (let i = 1; i <= diamond_n; i++) {
    diamond.push(document.querySelector(`.diamond:nth-child(${i})`))
    diamond_logo.push(document.querySelector(`.diamond:nth-child(${i}) .logo`))
}

 console.log(diamond_n)
 console.log(row_n, org_col_n)

trigger_r = Math.ceil(row_n / 2) - 1
trigger_r -= (((trigger_r % 2) + org_col_n) % 2) ? 0 : 1
trigger_c = Math.ceil(((trigger_r % 2) + org_col_n) / 2) - 1

window.addEventListener("load", e => {
    for (let r = 0; r < row_n; r++) {
        const col_count = org_col_n + (r%2 == 0 ? 1 : 0)
        for (let c = 0; c < col_count; c++) {
            if (r == trigger_r && c == trigger_c) {
                trigger_i = i
            }

            diamond[i].classList.toggle("visible")
            diamond[i].style.top = `calc(${origin_top} - ${(diagonal * 100 * (r + 0.7) / (window_w * 2))}vw)`
            diamond[i].style.left = `calc(${(r%2) ? origin_left_2 : origin_left_1} + ${(diagonal * 100 * c / window_w)}vw)`

            i++;
        }
    }
    
    console.log(trigger_i, trigger_r, trigger_c)
    diamond_logo[trigger_i].innerHTML = svg_icon
    diamond_logo[trigger_i].style.transition = "transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    
    i = 0
    for (let r = 0; r < row_n; r++) {
        for (let c = 0; c < org_col_n + (r%2); c++) {
            const dr = trigger_r - r
            const dc = trigger_c - c
            const dist = dr * dr + dc * dc

            diamond[i].borderWidth = `${base_width * dist}px`
            diamond[i].style.transitionDelay = `${base_delay * (dist)}ms`
            diamond_logo[i].style.transitionDelay = `${base_delay * (dist) * Math.random()}ms`
            diamond[i].style.opacity = 0.75

            i++
        }
    }

    diamond[trigger_i].classList.toggle("opaque")
    diamond_logo[trigger_i].classList.toggle("opaque")
    diamond_logo[trigger_i].style.transform = "rotateZ(-45deg)"

    side_area = [1,3,2,7,8,9,10,11,12,14,15,18,19,20,21,23,24,25,30,31]

    diamond[trigger_i].addEventListener("click", e => {
        const svg = document.querySelector("svg")
        svg.style.fill = svg.style.fill === "black" ? "white" : "black"
        svg.style.stroke = svg.style.stroke === "black" ? "white" : "black"
        diamond[trigger_i].style.backgroundColor = diamond[trigger_i].style.backgroundColor === "white" ? "black" : "white"
        diamond_logo[trigger_i].style.transform = diamond_logo[trigger_i].style.transform === "rotateZ(-45deg)" ? "rotateZ(135deg)" : "rotateZ(-45deg)"

        for (let i = 0; i < side_area.length; i++) {
            diamond[side_area[i]].classList.toggle("black_bg")
            diamond[side_area[i]].classList.toggle("half_opaque")
            diamond_logo[side_area[i]].style.backgroundImage = `url(img/icons/game_icon${i+1}.png)`
            diamond_logo[side_area[i]].classList.toggle("opaque")
            diamond_logo[side_area[i]].classList.toggle("rotate_back")
        }
    })
})



