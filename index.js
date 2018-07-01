function theBeatlesPlay(musiciansArray, instrumentsArray){
    var array = []
    for (let i = 0; i < musiciansArray.length; i++)
        array.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
    return array
}

function johnLennonFacts(factsArray){
    var array = []
    for (let i = 0; i < factsArray.length; i++)
        array[i] = factsArray[i] + '!!!'
    return array
}
