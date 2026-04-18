// Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

Array.prototype.sameStructureAs = function (other) {
    if (this.length !== other.length) return false;
    for (let i = 0; i < this.length; i++) {
        const isThisArr = Array.isArray(this[i])
        const isOtherArr = Array.isArray(other[i])
        if (isThisArr !== isOtherArr) return false
        if (isThisArr) {
            if (!this[i].sameStructureAs(other[i])) {
                return false
            }
        }
    }
    return true
};