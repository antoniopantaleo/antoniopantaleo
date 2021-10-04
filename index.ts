import { main } from './functions/replacer'
import axios from 'axios'

axios.get("https://joke-of-the-day-api.herokuapp.com/joke-of-the-day")
.then((res) => {
    const joke = res.data as {question?: string, answer: string}
    main('README.md', joke)
})