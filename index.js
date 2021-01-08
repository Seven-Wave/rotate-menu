// ===================================================
// data:

const btn = document.getElementById('btn')
const wrap = document.getElementById('wrap')
const shadow = document.getElementById('shadow')
let toggle = false

// ===================================================
// main:

btn.addEventListener('click', () => {
    if (toggle) {
        CloseMenu()
    } else {
        OpenMenu()
    }
    console.log('click')
})

shadow.addEventListener('click', () => {
    CloseMenu()
})

// ===================================================
// functions:

function OpenMenu() {
    wrap.style.transform = 'rotate(-25deg)'
    wrap.style.overflow = 'hidden'
    shadow.style.opacity = 0.3
    shadow.style.zIndex = 4
    shadow.style.transform = 'rotate(-25deg)'
    // btn.style.color = 'black'
    // btn.style.
    toggle = true
    
}

function CloseMenu() {
    wrap.style.transform = 'rotate(0)'
    wrap.style.overflow = 'auto'
    shadow.style.opacity = 0
    shadow.style.transform = 'rotate(0)'
    setTimeout(() => {
        shadow.style.zIndex = -1
    }, 300)

    toggle = false
}

// ===================================================
