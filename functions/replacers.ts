export function replaceDate(text: string, joke?: {question?: string, answer: string}) : string {
    const date = new Date().toLocaleDateString('en-US')
    return text.replace(/(?<=<!-- script:start TODAY -->.).*(?=<!-- script:end TODAY -->)/gs,`(${date}) `)
}

export function replaceJoke(text: string, joke?: {question?: string, answer: string}) : string {
    const question = "**"+joke!.question!+"**"
    const answer = "*"+joke!.answer+"*"
    const md =  `${question}\n\n${answer}\n`
    return text.replace(/(?<=<!-- script:start JOKE -->\s).*(?=<!-- script:end JOKE -->)/gs,md)
}
