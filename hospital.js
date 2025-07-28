import express from 'express';
const app = express();

let users = [{
    name : "John",
    kidneys : [{
        healthy : true
    }]
}];

app.get('/' , (req , res) => {
    let johnkidneys = users[0].kidneys;
    let noofkidneys = users[0].kidneys.length;
    let healthykidneys = 0;

    for(let i=0; i<noofkidneys; i++){
        if(johnkidneys[i].healthy == true){
            healthykidneys++;
        }
    }

    let unhealthykidneys = noofkidneys-healthykidneys;

    res.json({
        // johnkidneys,
        noofkidneys,
        healthykidneys,
        unhealthykidneys,
    })
})

app.use(express.json());

app.post('/' , (req , res) => {
    const isHealthy = req.body.isHealthy;

    users[0].kidneys.push({
        healthy : isHealthy
    })

    res.json({
        msg : "Done!"
    })
})

app.put('/' , (req , res) => {
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }

    res.json({
        msg : "update Done!"
    })
})

app.delete('/' , (req , res) => {
    let newKidneys = [];

    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push(users[0].kidneys[i]);
        } 
    }

    users[0].kidneys = newKidneys;

    res.json({
        msg : "unhealthy kidney removed"
    })
})


app.listen(3000);