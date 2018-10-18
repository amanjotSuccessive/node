rawData = {
    "title": "Nest eggs",
    "tags": ["cash", "shares"],
    "members": [{
            "name": "John Smith",
            'Sports': ['Cricket', 'Football']
        },
        {
            "name": "Alice White",
            'Sports': ['Cricket', 'Hockey']
        }
    ]
}
let i = 0;
rawData.members.forEach(d => {
    //for(key in d) {
    //if(d.hasOwnProperty(key))  

    console.log(Object.keys(rawData)[0], " : ", Object.values(rawData)[0], Object.keys(rawData)[1], " : ", Object.values(rawData)[1][0], Object.keys(rawData)[2],   Object.keys(d)[i], Object.values(d)[0],Object.keys(d)[i + 1], Object.values(d)[1][0]);

    console.log(Object.keys(rawData)[0], " : ", Object.values(rawData)[0], Object.keys(rawData)[1], " : ", Object.values(rawData)[1][0], Object.keys(rawData)[2], Object.keys(d)[i], Object.values(d)[0], Object.keys(d)[i + 1], Object.values(d)[1][1]);
})

i = 0
rawData.members.forEach(d => {
    //for(key in d) {
    //if(d.hasOwnProperty(key))  

    console.log(Object.keys(rawData)[0], " : ", Object.values(rawData)[0], Object.keys(rawData)[1], " : ", Object.values(rawData)[1][1], Object.keys(rawData)[2], Object.keys(d)[i], Object.values(d)[0], Object.keys(d)[i + 1], Object.values(d)[1][0]);

    console.log(Object.keys(rawData)[0], " : ", Object.values(rawData)[0], Object.keys(rawData)[1], " : ", Object.values(rawData)[1][1], Object.keys(rawData)[2], Object.keys(d)[i], Object.values(d)[0], Object.keys(d)[i + 1], Object.values(d)[1][1]);
})