export function rateNameFromObj(rateNameObj : string,firstLetterUpper:boolean){
    if(firstLetterUpper){
        const word = rateNameObj.split("_")[0].split("")
        word[0] = word[0].toUpperCase()
        return word.join("")
    }
    return rateNameObj.split("_")[0]
}