// code your solution here
function superbowlWin(record) {
    let obj = record.find(o => o.result === 'W');
    if (obj != undefined) {
        let yearWon = obj.year;
        return yearWon;
    }
    return obj;
}