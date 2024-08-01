import { useState } from "react";

function State(){
    let count = 0;
    function setCount(num){
         count= num

    }setCount()

    // const [myList,setList] =useState([]);

    const list = [];
    function setList(){
        list = [10,20,30];
        
    }setList


    return(
        <>
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est diam, facilisis eu ligula et, tristique luctus mi. Pellentesque malesuada ipsum ut eros laoreet, a ornare massa venenatis. Sed interdum luctus metus eget maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Nulla nec mauris dui. In quis suscipit tellus. Phasellus dictum volutpat accumsan. Suspendisse potenti. Aenean mattis dapibus blandit. Duis tincidunt ut neque eget congue. Curabitur a nibh aliquet, posuere diam sit amet, rutrum odio. Mauris accumsan libero tellus. Cras leo dolor, condimentum commodo consequat non, varius a lacus. Integer urna massa, pellentesque eu sapien et, malesuada venenatis libero.
            </p>
        </div>
        </>
    )
}export default State