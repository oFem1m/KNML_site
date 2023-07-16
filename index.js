const model = [
    {type: 'title', value: "Kotlin Numerical Methods Library", options: {
        tag: 'h1',
        styles: {
            color: '#fff',
            'text-align': 'center',
        }
        }},
    {type: 'text', value: "It`s my first site!"},
    {type: 'columns', value: [
        '1', '2', '3'
        ]},
    {type: 'image', value: './assets/kotlin.jpg', options: {
        styles: {
            maxWidth: '225px', // Set the maximum width of the image
            maxHeight: '225px', // Set the maximum height of the image
        }
        }}
]

const $site = document.querySelector('#site')
const $head = document.querySelector('#head')

model.forEach(block =>{
    let html = ''
    if (block.type === 'title'){
        html = title(block)
    } else if (block.type === 'image'){
        html = image(block, css(block.options.styles))
    }
    $head.insertAdjacentHTML('beforeend', html)
})

/*
model.forEach(block =>{
    let html = ''
    if (block.type === 'text'){
        html = text(block)
    } else if (block.type === 'columns'){
        html = columns(block)
    }
    $site.insertAdjacentHTML('beforeend', html)
})

 */


//content
function title(block){
    const {tag = 'h1', styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}
function text(block){
    return row(col(`<p>${block.value}</p>`))
}
function columns(block){
    const html = block.value.map(col).join('')
    return row(html)
}

function image(block, styles=''){
    return row(`<img style="${styles}" src="${block.value}" alt=""/>`)
}


//utils
function row(content, styles=''){
    return `<div class="row" style="${styles}">
                ${content}
            </div>`
}
function col(content){
    return `<div class="col-sm">
                ${content}
            </div>`
}

function css(styles = {}) {
    const keys = Object.keys(styles)
    const array = keys.map(key => {
        return `${key} : ${styles[key]}`
    })
    return array.join(';')
}