const model = [
    {type: 'title', value: "Hello, world"},
    {type: 'text', value: "It`s my first site!"},
    {type: 'columns', value: [
        '1', '2', '3'
        ]}
]

const $site = document.querySelector('#site')

model.forEach(block =>{
    let html = ''
    if (block.type === 'title'){
        html = title(block)
    } else if (block.type === 'text'){
        html = text(block)
    }
    $site.insertAdjacentHTML('beforeend', html)
})


function title(block){
    return `
    <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>
    `
}

function text(block){
    return `
    <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>
    `
}