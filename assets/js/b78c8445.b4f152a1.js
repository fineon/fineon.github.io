"use strict";(self.webpackChunkdocsaur_ian=self.webpackChunkdocsaur_ian||[]).push([[7272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={slug:"json-file-handling",title:"A simple utility script to combine two JSON files together",author:"Ian Nguyen",author_title:"Author",author_url:"https://github.com/fineon",author_image_url:"https://avatars.githubusercontent.com/u/38566281?v=4",date:new Date("2022-07-24T00:00:00.000Z"),tags:["json","nodejs"]},o="A simple utility script to combine two JSON files together",i={permalink:"/blog/json-file-handling",editUrl:"https://github.com/fineon/fineon.github.io/tree/main/blog/json-file-handling.md",source:"@site/blog/json-file-handling.md",title:"A simple utility script to combine two JSON files together",description:"So I have been working on some REST API and JSON. One of the task that had to be done was how to manage multiple people editing a single API data point. So I came up with an idea of splitting a single JSON API data file into multiple files called \u201cfragments\u201d. Each \u201cfragment\u201d will hold a smaller amount of data created by a single author or contributor. The fragments will always adhere to the JSON data schema of course. Here\u2019s an example of a JSON file as the API data. This fragment is named api-data.json",date:"2022-07-24T00:00:00.000Z",formattedDate:"July 24, 2022",tags:[{label:"json",permalink:"/blog/tags/json"},{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:2.37,hasTruncateMarker:!1,authors:[{name:"Ian Nguyen",title:"Author",url:"https://github.com/fineon",imageURL:"https://avatars.githubusercontent.com/u/38566281?v=4"}],frontMatter:{slug:"json-file-handling",title:"A simple utility script to combine two JSON files together",author:"Ian Nguyen",author_title:"Author",author_url:"https://github.com/fineon",author_image_url:"https://avatars.githubusercontent.com/u/38566281?v=4",date:"2022-07-24T00:00:00.000Z",tags:["json","nodejs"]},prevItem:{title:"Xubuntu Terminal Commands for File and Folder Management",permalink:"/blog/xubuntu-commands-terminal"},nextItem:{title:"Migrating from WordPress to Docusaurus",permalink:"/blog/migrate-wordpress-to-docusaurus"}},s={authorsImageUrls:[void 0]},u=[],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So I have been working on some REST API and JSON. One of the task that had to be done was how to manage multiple people editing a single API data point. So I came up with an idea of splitting a single JSON API data file into multiple files called \u201cfragments\u201d. Each \u201cfragment\u201d will hold a smaller amount of data created by a single author or contributor. The fragments will always adhere to the JSON data schema of course. Here\u2019s an example of a JSON file as the API data. This fragment is named ",(0,r.kt)("inlineCode",{parentName:"p"},"api-data.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'[ //Array can hold multiple objects\n    { //Object\n        "year": "2329", //"string". Only one value\n        "allContinents": [ //Array can hold multiple objects\n            { //Object. Only contain the below keys/values\n                "continent": "asia", // string. Only one value\n                "country": "malaysia", // string. Only one value\n                "events": [ //array. Can hold multiple objects\n                    { // Object. Can only contain the below keys/values\n                        "event": "launched the first teleportation as a service", // string. Only one value\n                        "date": "3320-2-10", // string. Only one value\n                        "image": "", // string. Only one value \n                        "video": "", // string. Only one value\n                        "links": [ //Array. Can hold multiple strings\n                            ""\n                        ]\n                    },\n                    { // Object. Can only contain the below keys/values\n                        "event": "launched the first teleportation as a service", // string. Only one value\n                        "date": "3320-2-10", // string. Only one value YYYY-MM-DD\n                        "image": "https://i.imgur.com/dBm6h3p.png", // string. Only one value \n                        "video": "", // string. Only one value\n                        "links": [ //Array. Can hold multiple strings\n                            "https://en.wikipedia.org/wiki/Teleportation",\n                            "https://en.wikipedia.org/wiki/Teleportation"\n                        ]\n                    },\n                ]\n            }\n        ]\n    }\n]\n')),(0,r.kt)("p",null,"To include newer JSON data, I created a javascript file to process the data, concatenate everything and write to a new file. Let\u2019s call this file ",(0,r.kt)("inlineCode",{parentName:"p"},"data-processing.js")),(0,r.kt)("p",null,"All of the JSON data fragments are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"fragments")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * All data files should have all continent and country names in lowercase\n * all data fragment files will merged into the main data.json file\n *\n *\n */\nconst { allYearsAllLocation } = require("../pages/api/api-data.json");\nconst fs = require("fs/promises");\n\n//read and parse JSON data files\nlet dataString = JSON.stringify(allYearsAllLocation);\n\n//read dir => require all JSON files => parse all => flat merge all arrays => write to data.json file\nlet dataArr = [];\nlet allFragmentNames = [];\n\nconst readFilesAll = async () => {\n  try {\n        // Read and return all of the files\' names\n    let fileNames = await fs.readdir("./fragments");\n\n    dataArr = [...fileNames];\n\n    dataArr.forEach((item) => {\n      allFragmentNames.push(require("./fragments/" + item));\n    });\n\n    let flattened = allFragmentNames.flat();\n    let mergeAll = allYearsAllLocation.concat(flattened);\n\n    let writeAll = await fs.writeFile("./data.json", JSON.stringify(mergeAll));\n\n    //will return undefined upon successful write\n    console.log(writeAll);\n  } catch (error) {\n    console.log(error);\n  }\n};\n\nreadFilesAll();\n')),(0,r.kt)("p",null,"After writing the script to handle JSON files and file editing, I can run the ",(0,r.kt)("inlineCode",{parentName:"p"},"data-processing.js")," in Node.js runtime environment: ",(0,r.kt)("inlineCode",{parentName:"p"},"node data-processing.js")),(0,r.kt)("p",null,"I will now see a new JSON file with the new data combined."))}d.isMDXComponent=!0}}]);