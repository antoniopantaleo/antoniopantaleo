import { expect } from 'chai'
import { replaceJoke, replaceDate } from '../functions/replacers'
import { readFile } from 'fs'
import { main } from '../functions/replacer'

describe('Unit Test', () => {
    it('Replace Date', () => {
        readFile('test/dateMock.md','utf8',(err,data) => {
            expect(err).to.be.null
            const today = new Date().toLocaleDateString('en-US')
            const expected = `# Today is <!-- script:start TODAY --> (${today}) <!-- script:end TODAY -->`
            expect(replaceDate(data)).to.be.eq(expected)
        })
    })

    it('Replace Joke', () => {
        readFile('test/jokeMock.md','utf8',(err,data) => {
            expect(err).is.null
            const joke = {question: "QQ", answer: "AA"}
            const expected = `## A joke for you\n<!-- script:start JOKE -->\n**QQ**\n\n*AA*\n<!-- script:end JOKE -->`
            expect(replaceJoke(data,joke)).to.be.eq(expected)
        })
    })

    it('Replacer', async () => {
        const today = new Date().toLocaleDateString('en-US')
        const joke = {question: "QQQQ", answer: "AAAA"}
        const expected = `Data: <!-- script:start TODAY --> (${today}) <!-- script:end TODAY -->\nJoke:\n<!-- script:start JOKE -->\n**QQQQ**\n\n*AAAA*\n<!-- script:end JOKE -->`
        const newData = await main('test/mock.md', joke)
        expect(newData).is.not.null
        expect(newData).to.be.eq(expected)
    })
})

