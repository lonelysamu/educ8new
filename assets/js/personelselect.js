document.querySelector('#contentbox').addEventListener('click', (e) => {
    if (e.target.classList.contains("statusbutton") == true){
        y = Array.from(document.querySelector('#contentbox').getElementsByClassName("statusbutton")).indexOf(e.target);

        if(e.target.innerHTML == "More Info"){

            document.querySelectorAll(".maincard")[y].classList = "col-12 col-md-11 col-xxl-10 p-0 m-0 maincard mt-4";
            document.querySelectorAll(".imgcard")[y].classList = "col-10 col-md-4 col-xl-3 imgcard text-center anchor";
            document.querySelectorAll(".descard")[y].classList.remove("d-none");

            e.target.innerHTML = "Less Info";

        }
        else{
            document.querySelectorAll(".maincard")[y].classList = "col-10 col-md-6 col-lg-4 col-xxl-3 p-0 m-0 maincard mt-4";
            document.querySelectorAll(".imgcard")[y].classList = "col-12 imgcard text-center anchor";
            document.querySelectorAll(".descard")[y].classList.add("d-none");

            e.target.innerHTML = "More Info";


        }
    }
})