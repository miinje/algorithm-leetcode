/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransomList = [...ransomNote];
    const magazineList = {};
    
    [...magazine].forEach((string, index) => {
        if (magazineList[string]) {
            magazineList[string] = magazineList[string] + 1;
        } else {
            magazineList[string] = 1;
        }
    });

    while (true) {
        const note = ransomList.pop();
        
    if (!note) {
        break;
    }

        if (!magazineList[note] || magazineList[note] === 0) {
            return false;
            
            break; 
        }

        magazineList[note] = magazineList[note] - 1;
    }

    return true;
};