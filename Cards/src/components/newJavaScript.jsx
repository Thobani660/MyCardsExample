function NewJava(){
    let topic ="JS"
    let shortStudy= "I'm learning "+ " " + topic +" today";
        console.log(shortStudy)
    var joke ="Just because i know Js,it Doesnt mean I Know JS..";
    let oldJoke= "false";
    let $punchline = "English teacher:theseAre called semicolons, we wont be using em that much"
    

    if (oldJoke === true){
        alert($punchline);
    }else {
        alert(joke)
    }

    let scoops =5;
    while (scoops > 0){
        console.log("Another Scoop!<br> ",);
        scoops = scoops -1;
    }
    console.log("Lests buy another one")


    let word = "bottles";
    let count = 9;
    while (count > 0) {
     console.log(count + " " + word + " of beer on the wall");
     console.log(count + " " + word + " of beer,");
     console.log("Take one down, pass it around,");
     count = count - 1;
     if (count > 0) {
     console.log(count + " " + word + " of beer on the wall.");
     } else {
     console.log("No more " + word + " of beer on the wall.");
     }
    }
    return(
        <>
        </>
    )
}export default NewJava