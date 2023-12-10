"use strict";

const fileCleaner = () => {
    const fs = require("fs");
    fs.readFile("fileCleaner.txt", "utf-8", (err, data) => {
        const dataTobeCleaned = data;
        // console.log(dataTobeCleaned);
        const cleanedData = dataTobeCleaned.split(" ").filter(data => data != "").join(' ');
        return cleanedData;
    })
}
fileCleaner();