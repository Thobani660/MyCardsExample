console.log("Start of componet testFunc")
function TestFunc(){
    // void func doesnt return a value
    function PushToList(){

        alert("added something on the list!!");
        console.log("Im fine");

    };


    // gives back a value in  return 
    function SayHello(hi){
        let myGreetings = hi;
        return "Dumela";
    }
    let Greeting = SayHello();
    console.log("Greeting:",Greeting)

    

    // calling void func
    // PushToList()

    return(

        <>

        </>
    )
    console.log("console after the return")

}export default TestFunc;
console.log("End of componet testFunc")
