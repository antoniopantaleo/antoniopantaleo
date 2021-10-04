import  * as replacer from './replacers'
import {readFile, writeFile} from 'fs'

export function main(filename: string, joke: {question?: string, answer: string}) {
    const replacers = Object.values(replacer)
    readFile(filename,'utf8',((_,data) => {
        for (const repl of replacers) {
            data = repl(data,joke)
        }
        writeFile(filename,data,'utf8',(() => {}))
    }))
}