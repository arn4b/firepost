export default function makeId(length) {
    var result = "";
    var charecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqratuvwxyz";
    var charectersLength = charecters.length;
    for(var i = 0; i< length; i++)
    {
        result += charecters.charAt(Math.floor(Math.random() * charectersLength));
    }

    return result;
}