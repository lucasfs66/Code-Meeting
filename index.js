/* Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;
Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
 */

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

function meeting(s) {

    let arrayOfNames = s.split(";")
    console.log(arrayOfNames)
}

meeting(s)