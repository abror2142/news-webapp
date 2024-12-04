function timeFormatManager(dateTime, timeOnly=false, dateOnly=false){
    const time = new Date(dateTime)
    if(timeOnly){
        return `${time.getHours()}:${time.getMinutes()}`
    } else if(dateOnly){
        return `${time.getDate()}.${time.getMonth()}.${time.getFullYear()}`
    }
    return `${time.getHours()}:${time.getMinutes()} / ${time.getDate()}.${time.getMonth()}.${time.getFullYear()}`
}

export default timeFormatManager