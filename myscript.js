
document.getElementById("post_button").addEventListener("click", getPost);
document.getElementById("user_button").addEventListener("click", getUser);


function getPost() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText)
            document.getElementById("output_1").innerHTML = json.title;
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhttp.send();
}

function getUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(data => document.getElementById("output_2").innerHTML = data.name)
        .catch(e => console.log(e))
}
        

$(document).ready( function () {
    $("#todo_button").click( function (e) {
        e.preventDefault();
        $.ajax({
                 url:"https://jsonplaceholder.typicode.com/todos",
                 type:"GET",
                 dataType:"json",
                 success: function(data) {
                     $.each(data, function(key, value){
                         console.log(key)
                         console.log(value)
                        $("#output_3").append(`<br>${value.title}`)
                     })
                 },
                 error: function(data) {
                     console.log(data);
                     $("#output_3").append(`<br>${data.statusText}`);
                 }
               })
    })
})