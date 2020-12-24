const htmlPDF = require('html-pdf');

const content = `

    <div style="text-align: center">

        <h1 style="font-weight: light">HTML PDF - NODE JS</h1>

        <p class="color: #333">Lorem ipsum dolor sit amet culpa eu</p>

        <nav>
            <a href="https://www.npmjs.com/package/html-pdf">read more</a>
        </nav>

    </div>
`

htmlPDF.create(content, {}).toFile('./example.pdf', (error, response) => {
    if(!error)
    {
        console.log(response)
        return true
    }

    console.log('error: ' + error)
})