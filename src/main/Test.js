import axios from "axios";

const Test = () => {
    axios.get("http://10.125.121.185:8080/station")
    .then(function (response) {
        console.log(response); 
    }).catch(function (error) {
        console.log(error);
    });

    return (
        <></>
    );
}

export default Test;