import {readFile, writeFile} from 'fs'
import axios from 'axios'

async function main() {
    const res = await axios.get("https://joke-of-the-day-api.herokuapp.com/joke-of-the-day")
    const joke = res.data as {question?: string, answer: string}
    readFile('README.md','utf8',((_,data) => {
        let question = "**"+joke.question!+"**"
        const answer = "*"+joke.answer+"*"
        const date = new Date().toLocaleDateString('en-US')
        const md =  `${question}\n\n${answer}\n`
        let newData = data.replace(/(?<=<!-- script:start JOKE -->\s).*(?=<!-- script:end JOKE -->)/gs,md)
        newData = newData.replace(/(?<=<!-- script:start TODAY -->.).*(?=<!-- script:end TODAY -->)/gs,`(${date}) `)
        writeFile('README.md',newData,'utf8',(() => {}))
    }))
}

main()