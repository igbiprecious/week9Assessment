function diffArray (arr1, arr2) {

    var a = [], diff = [];

    for (var i = 0; i < arr1.length; i++) {
        a[arr1[i]] = true;
    }

    for (var i = 0; i < arr2.length; i++) {
        if (a[arr2[i]]) {
            delete a[arr2[i]];
        } else {
            a[arr2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}


console.log(diffArray([1,2,3,5], [1,2,3,4,5]));
console.log(diffArray(["grass", "dirt", "pink wool", "dead shrub"], ["grass", "dirt", "dead shrub"]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));