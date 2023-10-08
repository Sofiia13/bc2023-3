const fs = require("fs");

fs.readFile("data.json", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    try {
        const json = JSON.parse(data);
        let MaxValue = 0;
        for (const now of json) {
            if (now.rate > MaxValue) {
                MaxValue = now.rate;
            }
        } 

        const outputText = "Максимальний курс:" + MaxValue;
        fs.writeFile("output.txt", outputText, (err) => {
            if (err) {
                console.error("Error writing to file:", err);
            } else {
                console.log("Максимальний курс:", MaxValue);
            }
        });
    } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
    }
});
