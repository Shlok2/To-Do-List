
module.exports.getDate = getDate; 
module.exports.getDay = getDay;

function getDate(){

    let today = new Date();

    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    }

    // This is format for toLocaleDateString in which object options
    // give info of what type of date we want.Like we want
    // "long"-> in words ; "numeric" -> in numbers
    // Eg -> Thursday,June 15
    let day = today.toLocaleDateString("en-US",options);
    return day;
}

function getDay(){
    let today = new Date();

    let options = {
        weekday: "long"
    };

    let day = today.toLocaleDateString("en-US",options);

    return day;
}