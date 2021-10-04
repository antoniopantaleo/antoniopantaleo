import  * as replacer from './replacers'
import {readFile, writeFile} from 'fs'

export async function main(filename: string, joke: {question?: string, answer: string}) : Promise<string>{
    return new Promise((resolve,_) => {
        const replacers = Object.values(replacer)
        readFile(filename,'utf8',((_,data) => {
            //? reduce
            replacers.forEach((repl) => { data = repl(data,joke) })
            resolve(data)
        }))
    })
}