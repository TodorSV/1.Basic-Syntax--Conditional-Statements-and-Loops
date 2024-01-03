function world(string) {
    if (string == "England" || string == "USA") {
        console.log("English");
    } else if (string == "Spain" || string == "Argentina" || string == "Mexico") {
        console.log("Spanish");
    } else {
        console.log("unknown")
    }
}
world("Argentina")