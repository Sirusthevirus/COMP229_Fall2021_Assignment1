//IIFE immediately invoked function expression
//FileName: "App.js"
//Name: "Ashley Turnbull"
//Student ID: 301190323
//Date: 2021-10-03

(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(button of deleteButtons){
            button.addEventListener('click', (event)=>{
                if (!confirm('Are you sure?')){
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();