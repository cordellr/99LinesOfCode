let friends = ["Greg", "Ash", "Tanner", "Travis", "JJ"];

for (f = 0; f < friends.length; f++) {
    let friend = friends[f]; {
        for (n = 99; n > 0; n--) {
            let lessOne = n - 1;
            if (n > 1) {
                console.log(n + " lines of code in the file, " + n + " lines of code; " + friend + " strikes one out, clears it all out, " + lessOne + " lines of code in the file.");
            } else {
                console.log("1 line of code in the file, 1 line of code; " + friend + " strikes one out, clears it all out, no more lines of code in the file.");
            }
        }
    }
};

