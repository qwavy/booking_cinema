export function dateToDayWeek(date:string){
    return new Date(date).toLocaleString("en-GB",{ weekday: "short" })
}
export function dateToDay(date:string){
    return new Date(date).getDate()
}

export function getDaysInMonth(month:number){
    const todayYear = new Date().getFullYear()
    return new Date(todayYear,month + 1,0).getDate()
}