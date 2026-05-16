 var tablinks = document.getElementsByClassName("tab-limks");
    var tabcontents = document.getElementsByClassName("tab-content");

    function opentab(tabname) {

        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }

        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }

        event.currentTarget.classList.add("active-link");

        document.getElementById(tabname).classList.add("active-tab");
    }



    var sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = "0";
    }
    function closemenu() {
        sidemenu.style.right = "-200px";
    }



    const scriptURL = 'https://script.google.com/macros/s/AKfycbzG7QmmlVDSisCsQ18oY4ULqlMYNZFR8WRPtGsMDiSvoAoD-SkibeGTsnaIr4cEMxPbwQ/exec'

    const form = document.forms['submit-to-google-sheet']

    const msg = document.getElementById("msg")

    const submitBtn = document.getElementById("submit-btn")

    form.addEventListener('submit', e => {

        e.preventDefault()

        submitBtn.innerHTML = "Sending..."
        submitBtn.disabled = true

        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })

            .then(response => response.json())

            .then(response => {

                msg.classList.add("show-msg")

                msg.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            Message Sent Successfully
        `

                form.reset()

                submitBtn.innerHTML = "Submit"
                submitBtn.disabled = false

                setTimeout(() => {

                    msg.classList.remove("show-msg")

                }, 3000)

            })

            .catch(error => {

                msg.classList.add("error-msg")

                msg.innerHTML = `
            <i class="fa-solid fa-circle-xmark"></i>
            Something went wrong
        `

                submitBtn.innerHTML = "Submit"
                submitBtn.disabled = false
            })

    })