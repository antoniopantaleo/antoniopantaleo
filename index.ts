import { getRandomJoke } from "./prisma/joke_dao";
import {readFile, writeFile} from 'fs'

async function main() {
    const joke = await getRandomJoke()
    readFile('README.md','utf8',((_,data) => {
        const question = "**"+joke.question+"**"
        const answer = "*"+joke.answer+"*"
        const date = new Date().toLocaleDateString('en-US')
        const md =  `${question}\n\n${answer}\n`
        let newData = data.replace(/(?<=<!-- script:start JOKE -->\s).*(?=<!-- script:end JOKE -->)/gs,md)
        newData = newData.replace(/(?<=<!-- script:start TODAY -->.).*(?=<!-- script:end TODAY -->)/gs,`(${date}) `)
        writeFile('README.md',newData,'utf8',(() => {}))
    }))
}

main()