console.log("Hello, World!");
var packageInfo = [
    { "id": "A1", "status": "arrived", "timestamp": 1 },
    { "id": "A1", "status": "processing", "timestamp": 2 },
    { "id": "A1", "status": "processing", "timestamp": 3 },
    { "id": "A2", "status": "arrived", "timestamp": 4 },
    { "id": "", "status": "processing", "timestamp": 5 },
    { "id": "A2", "status": "dispatched", "timestamp": 6 },
    { "id": "A3", "status": "arrived", "timestamp": 7 },
    { "id": "A3", "status": "processing", "timestamp": 8 },
    { "id": "A3", "status": "arrived", "timestamp": 9 }
]
var i = 0;
var mylist = [];
for (i; i < packageInfo.length; i++) {
    var previous = packageInfo[i - 1] ? packageInfo[i - 1] : "Start Index out of bound";
    var current = packageInfo[i];
    var next = packageInfo[i + 1] ? packageInfo[i + 1] : "End Index out of bound";

    // console.log(current, previous, next);


    if (current.id == "") {
        console.log("Current ID is empty at index " + i + " with timestamp " + current.timestamp);
        mylist.push(i);
        continue;
    }

    if (previous != undefined && previous.id == current.id) {
        // console.log("Previous ID: " + previous.id + " Current ID: " + current.id);
        if (previous.status == "arrived" && current.timestamp > previous.timestamp) {
            console.log("Previous status is arrived");
            if (current.status != "processing") {
                console.log("Current status is not processing");
                mylist.push(packageInfo.indexOf(current));
                continue;
            }
        }
        else if (previous.status == "processing" && current.timestamp > previous.timestamp) {
            if (current.status != "dispatched") {
                console.log("Current status is not dispatched");
                mylist.push(packageInfo.indexOf(current));
                continue;
            }
        }
    }
}
console.log(mylist);
var x = [];
x.push(1);
x.push(2);
x.push(3);
x.push(4);
if (x.indexOf(3) == -1) {
    console.log(x + "  3 is not in the array");
}
x.pop(5);
console.log(x)
// if (x == "") {
//     console.log(packageInfo[i] + "\n at index " + i + " missing an ID at timestamp " + packageInfo[i].timestamp);
// }

// var y = packageInfo[i].status;
// if (y == "arrived") {
//     if (i + 1 < packageInfo.length) {
//         if (packageInfo[i + 1].status == "arrived") {
//             console.log(packageInfo[i] + "\n at index " + i + " has a duplicate status at timestamp " + packageInfo[i].timestamp);
//         }
//     }
// }

// }