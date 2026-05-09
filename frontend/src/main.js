const app = document.querySelector('#app')

let index = 0

async function loadData() {
    const response = await fetch(`/api/${index}`)
    const data = await response.json()

    document.querySelector('#content').textContent = data
    document.querySelector('#index').textContent = index
}

app.innerHTML = `
    <div style="
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:20px;
        margin-top:100px;
        font-family:sans-serif;
    ">
        <h1 id="content">Loading...</h1>

        <div>
            <button id="left">← Left</button>
            <span id="index" style="margin:0 20px">0</span>
            <button id="right">Right →</button>
        </div>
    </div>
`

document.querySelector('#left').addEventListener('click', async () => {
    if (index > 0) {
        index--
        await loadData()
    }
})

document.querySelector('#right').addEventListener('click', async () => {
    if (index < 2) {
        index++
        await loadData()
    }
})

loadData()