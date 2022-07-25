"use strict";(self.webpackChunkdocsaur_ian=self.webpackChunkdocsaur_ian||[]).push([[3354],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6926:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],o={slug:"json-file-handling",title:"A simple utility script to combine two JSON files together",author:"Ian Nguyen",author_title:"Author",author_url:"https://github.com/fineon",author_image_url:"https://avatars.githubusercontent.com/u/38566281?v=4",date:new Date("2022-07-24T00:00:00.000Z"),tags:["json","nodejs"]},s="A simple utility script to combine two JSON files together",c={permalink:"/blog/json-file-handling",editUrl:"https://github.com/fineon/fineon.github.io/tree/main/blog/json-file-handling.md",source:"@site/blog/json-file-handling.md",title:"A simple utility script to combine two JSON files together",description:"So I have been working on some REST API and JSON. One of the task that had to be done was how to manage multiple people editing a single API data point. So I came up with an idea of splitting a single JSON API data file into multiple files called \u201cfragments\u201d. Each \u201cfragment\u201d will hold a smaller amount of data created by a single author or contributor. The fragments will always adhere to the JSON data schema of course. Here\u2019s an example of a JSON file as the API data. This fragment is named api-data.json",date:"2022-07-24T00:00:00.000Z",formattedDate:"July 24, 2022",tags:[{label:"json",permalink:"/blog/tags/json"},{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:2.37,truncated:!1,authors:[{name:"Ian Nguyen",title:"Author",url:"https://github.com/fineon",imageURL:"https://avatars.githubusercontent.com/u/38566281?v=4"}],nextItem:{title:"H\xe3y nh\u1edb r\u1eb1ng n\u1ed7i \u0111au ch\u1ec9 l\xe0 nh\u1ea5t th\u1eddi",permalink:"/blog/hay-nho-rang-noi-dau-chi-la-nhat-thoi"}},u={authorsImageUrls:[void 0]},p=[],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"So I have been working on some REST API and JSON. One of the task that had to be done was how to manage multiple people editing a single API data point. So I came up with an idea of splitting a single JSON API data file into multiple files called \u201cfragments\u201d. Each \u201cfragment\u201d will hold a smaller amount of data created by a single author or contributor. The fragments will always adhere to the JSON data schema of course. Here\u2019s an example of a JSON file as the API data. This fragment is named ",(0,l.kt)("inlineCode",{parentName:"p"},"api-data.json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'[ //Array can hold multiple objects\n    { //Object\n        "year": "2329", //"string". Only one value\n        "allContinents": [ //Array can hold multiple objects\n            { //Object. Only contain the below keys/values\n                "continent": "asia", // string. Only one value\n                "country": "malaysia", // string. Only one value\n                "events": [ //array. Can hold multiple objects\n                    { // Object. Can only contain the below keys/values\n                        "event": "launched the first teleportation as a service", // string. Only one value\n                        "date": "3320-2-10", // string. Only one value\n                        "image": "", // string. Only one value \n                        "video": "", // string. Only one value\n                        "links": [ //Array. Can hold multiple strings\n                            ""\n                        ]\n                    },\n                    { // Object. Can only contain the below keys/values\n                        "event": "launched the first teleportation as a service", // string. Only one value\n                        "date": "3320-2-10", // string. Only one value YYYY-MM-DD\n                        "image": "https://i.imgur.com/dBm6h3p.png", // string. Only one value \n                        "video": "", // string. Only one value\n                        "links": [ //Array. Can hold multiple strings\n                            "https://en.wikipedia.org/wiki/Teleportation",\n                            "https://en.wikipedia.org/wiki/Teleportation"\n                        ]\n                    },\n                ]\n            }\n        ]\n    }\n]\n')),(0,l.kt)("p",null,"To include newer JSON data, I created a javascript file to process the data, concatenate everything and write to a new file. Let\u2019s call this file ",(0,l.kt)("inlineCode",{parentName:"p"},"data-processing.js")),(0,l.kt)("p",null,"All of the JSON data fragments are in the ",(0,l.kt)("inlineCode",{parentName:"p"},"fragments")," folder."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * All data files should have all continent and country names in lowercase\n * all data fragment files will merged into the main data.json file\n *\n *\n */\nconst { allYearsAllLocation } = require("../pages/api/api-data.json");\nconst fs = require("fs/promises");\n\n//read and parse JSON data files\nlet dataString = JSON.stringify(allYearsAllLocation);\n\n//read dir => require all JSON files => parse all => flat merge all arrays => write to data.json file\nlet dataArr = [];\nlet allFragmentNames = [];\n\nconst readFilesAll = async () => {\n  try {\n        // Read and return all of the files\' names\n    let fileNames = await fs.readdir("./fragments");\n\n    dataArr = [...fileNames];\n\n    dataArr.forEach((item) => {\n      allFragmentNames.push(require("./fragments/" + item));\n    });\n\n    let flattened = allFragmentNames.flat();\n    let mergeAll = allYearsAllLocation.concat(flattened);\n\n    let writeAll = await fs.writeFile("./data.json", JSON.stringify(mergeAll));\n\n    //will return undefined upon successful write\n    console.log(writeAll);\n  } catch (error) {\n    console.log(error);\n  }\n};\n\nreadFilesAll();\n')),(0,l.kt)("p",null,"After writing the script to handle JSON files and file editing, I can run the ",(0,l.kt)("inlineCode",{parentName:"p"},"data-processing.js")," in Node.js runtime environment: ",(0,l.kt)("inlineCode",{parentName:"p"},"node data-processing.js")),(0,l.kt)("p",null,"I will now see a new JSON file with the new data combined."))}m.isMDXComponent=!0}}]);