"use strict";

/*
## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fileWriter = () => {
    const fs = require("fs");
    fs.writeFile("4-write-to-file.md", "Hey There how are you doing", (err, data) => {
        if (err) throw err;
        console.log('Updated');
    })
}

fileWriter();