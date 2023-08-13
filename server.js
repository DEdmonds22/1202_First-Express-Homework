const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h2>99 Glasses of Wine on the Wall. 99 Glasses of Wine...</h2>
        <a href="/98">Take one down, pass it around</a>
        `);
});

// Bonus Section Start
let bugCt = 127;
app.get("/bugs", (req, res) => {
    res.send(`
        <h2>99 little bugs in the code.<h2>
        <h2>99 little bugs</2>
        <h2>Take on down</h2>
        <h2>Patch it around</h2>
        <h2>127 bugs in the code</h2>
        <a href="/bugs/98">Next</a>
    `);
});

app.get("/bugs/:count", (req, res) => {
    const littleBugs = req.params.count;
    const lessBugs = littleBugs - 1;
    bugCt += Math.floor(Math.random() * 3 - 1)
    if (littleBugs > 0) {
        res.send(`
            <h2>${littleBugs} little bugs in the code.<h2>
            <h2>${littleBugs} little bugs</2>
            <h2>Take on down</h2>
            <h2>Patch it around</h2>
            <h2>${bugCt} bugs in the code</h2>
            <a href="/bugs/${lessBugs}">Next</a>
        `);
    } else {
        res.send(`
            <h2>No little bugs, but ${bugCt} bugs still remain. Send the remaining code to the newest intern and make it there problem now :)</h2>
        `);
    };
});
// Bonus Section End

app.get("/:numOfBottles", (req, res) => {
    const currentGlassCt = req.params.numOfBottles;
    const nxtGlassCt = currentGlassCt - 1;

    if (currentGlassCt > 0) {
        res.send(`
        <h2>${currentGlassCt} Glasses of Wine on the Wall. ${currentGlassCt} Glasses of Wine.</h2>
        <a href="/${nxtGlassCt}">Take one down, pass it arround</a>
        `);
    } else {
        res.send(`
            <h2>${currentGlassCt} Glasses of Wine on the Wall. ${currentGlassCt} Glasses of Wine...</h2>
            <a href="/99">Want to buy more?</a>
        `)
    }
});

app.listen(3000, function() {
    console.log("listening");
});