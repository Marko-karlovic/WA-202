import express from 'express';
import cors from 'cors'

const app = express()
const port = 3000 

app.use(cors())
app.use(express.json())

app.get('/sequence', (req, res) => {
    let n = parseInt(req.query.n)
    function fibSequence(n) {
        if (n<= 1) {return n;}
        else{return fibSequence(n - 1) + fibSequence(n - 2);}
    }
    
    res.json(`${fibSequence(n)}`)
})
app.listen(port, () => console.log(`Slušam na portu ${port}!`))