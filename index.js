import express from 'express';

const app = express();

function sum(n){
    let curr = 0;
    for(let i=1; i<=n; i++)
        curr += i;

    return curr;
}

app.get('/' , (req, res) => {
    const n = req.query.n;
    let ans = sum(n);
    res.send(`The sum of first ${n} numbers is ${ans}`);
})

app.get('/about' , (req , res) => {
    res.send("This is Nishant rn learning web development");
})

app.listen(3000, () => {
  console.log("Server running on http://0.0.0.0:3000");
});