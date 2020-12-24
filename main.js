const htmlPDF = require('html-pdf')
const ejs = require('ejs')

ejs.renderFile('./pdf.ejs', {}, (error, htmlFile) => {

    if(!error)
    {
        htmlPDF.create(htmlFile, {}).toFile('./example.pdf', (error, response) => {
            if(!error)
            {
                console.log(response)
                return true
            }
        
            console.log('error: ' + error)
            return false
        })
    }

    return false
})