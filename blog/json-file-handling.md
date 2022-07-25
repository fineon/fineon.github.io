---
slug: json-file-handling
title: A simple utility script to combine two JSON files together
author: Ian Nguyen
author_title: Author
author_url: https://github.com/fineon
author_image_url: https://avatars.githubusercontent.com/u/38566281?v=4
date: 2022-07-24 
tags: [json, nodejs]
---

# A simple utility script to combine two JSON files together

So I have been working on some REST API and JSON. One of the task that had to be done was how to manage multiple people editing a single API data point. So I came up with an idea of splitting a single JSON API data file into multiple files called “fragments”. Each “fragment” will hold a smaller amount of data created by a single author or contributor. The fragments will always adhere to the JSON data schema of course. Here’s an example of a JSON file as the API data. This fragment is named `api-data.json`

```js
[ //Array can hold multiple objects
    { //Object
        "year": "2329", //"string". Only one value
        "allContinents": [ //Array can hold multiple objects
            { //Object. Only contain the below keys/values
                "continent": "asia", // string. Only one value
                "country": "malaysia", // string. Only one value
                "events": [ //array. Can hold multiple objects
                    { // Object. Can only contain the below keys/values
                        "event": "launched the first teleportation as a service", // string. Only one value
                        "date": "3320-2-10", // string. Only one value
                        "image": "", // string. Only one value 
                        "video": "", // string. Only one value
                        "links": [ //Array. Can hold multiple strings
                            ""
                        ]
                    },
                    { // Object. Can only contain the below keys/values
                        "event": "launched the first teleportation as a service", // string. Only one value
                        "date": "3320-2-10", // string. Only one value YYYY-MM-DD
                        "image": "https://i.imgur.com/dBm6h3p.png", // string. Only one value 
                        "video": "", // string. Only one value
                        "links": [ //Array. Can hold multiple strings
                            "https://en.wikipedia.org/wiki/Teleportation",
                            "https://en.wikipedia.org/wiki/Teleportation"
                        ]
                    },
                ]
            }
        ]
    }
]
```

To include newer JSON data, I created a javascript file to process the data, concatenate everything and write to a new file. Let’s call this file `data-processing.js`

All of the JSON data fragments are in the `fragments` folder.

```js
/**
 * All data files should have all continent and country names in lowercase
 * all data fragment files will merged into the main data.json file
 *
 *
 */
const { allYearsAllLocation } = require("../pages/api/api-data.json");
const fs = require("fs/promises");

//read and parse JSON data files
let dataString = JSON.stringify(allYearsAllLocation);

//read dir => require all JSON files => parse all => flat merge all arrays => write to data.json file
let dataArr = [];
let allFragmentNames = [];

const readFilesAll = async () => {
  try {
		// Read and return all of the files' names
    let fileNames = await fs.readdir("./fragments");

    dataArr = [...fileNames];

    dataArr.forEach((item) => {
      allFragmentNames.push(require("./fragments/" + item));
    });

    let flattened = allFragmentNames.flat();
    let mergeAll = allYearsAllLocation.concat(flattened);

    let writeAll = await fs.writeFile("./data.json", JSON.stringify(mergeAll));

    //will return undefined upon successful write
    console.log(writeAll);
  } catch (error) {
    console.log(error);
  }
};

readFilesAll();
```

After writing the script to handle JSON files and file editing, I can run the `data-processing.js` in Node.js runtime environment: `node data-processing.js`

I will now see a new JSON file with the new data combined.