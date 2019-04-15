/*global fetch*/
	
document.getElementById("button").addEventListener("click", makePOSTRequest);
var url = "https://cors-anywhere.herokuapp.com/http://careerdev-teaching-lujason2015.c9users.io/api";

    function makePOSTRequest() {

        fetch(url, {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                   // username: "Testing",
                    "username": document.getElementById("username").value,
	                "password": document.getElementById("password").value,
                })
            })
            .catch(function(error) {
                console.log('Request failure: ', error);
            });
    }