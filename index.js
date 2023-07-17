const model = [
    {type: 'title', value: "Kotlin Numerical Methods Library", options: {
        tag: 'h1',
        styles: {
            color: '#fff',
            'text-align': 'center',
        }
        }},
    {type: 'text', value: "KNML - библиотека на языке Kotlin<br>" +
            "Содержит различные численные методы решения математических задач", options: {
        tag: 'h2',
        styles: {
            'text-align': 'center',
        }
        }}
]

const $site = document.querySelector('#site')
const $title = document.querySelector('#title')

model.forEach(block =>{
    let html = ''
    if (block.type === 'title'){
        html = title(block)
        $title.insertAdjacentHTML('beforeend', html)
    } else if (block.type === 'text'){
        html = text(block)
        $site.insertAdjacentHTML('beforeend', html)
    }
})


//content
function title(block){
    const {tag = 'h1', styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}
function text(block){
    const {tag='p', styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
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
