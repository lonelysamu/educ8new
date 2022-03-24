document.querySelector('#speakerbox').addEventListener('click', (e) => {
    if (e.target.classList.contains("loadspeakerbutton") == true) {
        y = Array.from(document.querySelector('#speakerbox').getElementsByClassName("loadspeakerbutton")).indexOf(e.target);

        if (document.querySelectorAll(".speakerdesbox")[y].classList.contains("d-none") == true) {

            document.querySelectorAll(".speakermainbox")[y].classList = "col-12 p-0 speakermainbox";
            document.querySelectorAll(".speakercardbox")[y].classList = "col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3 text-center sticky-lg-top p-2 pt-5 speakercardbox";
            document.querySelectorAll(".speakerdesbox")[y].classList.remove("d-none");
        }
        else {
            document.querySelectorAll(".speakermainbox")[y].classList = "col-6 col-lg-4 col-xl-3 p-0 speakermainbox";
            document.querySelectorAll(".speakercardbox")[y].classList = "col-12 text-center sticky-lg-top pt-5 speakercardbox";
            document.querySelectorAll(".speakerdesbox")[y].classList.add("d-none");
        }

    }
})