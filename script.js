/* =====================================================
   BLOODCONNECT - MAIN JAVASCRIPT
   ===================================================== */


/* ================= DONOR SEARCH ================= */

function searchDonors() {

    const bloodGroup =
        document.getElementById("bloodGroup").value;

    const location =
        document.getElementById("location").value.trim();

    const results =
        document.getElementById("donorResults");


    /* Check Blood Group */

    if (bloodGroup === "") {

        results.innerHTML = `
            <div class="search-info">

                <h3>Select a Blood Group</h3>

                <p>
                    Please select the required blood group
                    before searching.
                </p>

            </div>
        `;

        return;
    }


    /* Check Location */

    if (location === "") {

        results.innerHTML = `
            <div class="search-info">

                <h3>Enter a Location</h3>

                <p>
                    Please enter a city or area to find
                    potential donors.
                </p>

            </div>
        `;

        return;
    }


    /* Display Demo Result */

    results.innerHTML = `

        <div class="donor-card">

            <div class="donor-avatar">
                +
            </div>

            <div>

                <h3>
                    Potential Donor
                </h3>

                <p>
                    Blood Group:
                    <strong>${bloodGroup}</strong>
                </p>

                <p>
                    Location:
                    ${location}
                </p>

            </div>

            <span class="available">
                ● Potential Match
            </span>

        </div>

    `;

}


/* ================= DONOR REGISTRATION ================= */

function registerDonor(event) {

    event.preventDefault();

    const name =
        document.getElementById("donorName").value;

    const bloodGroup =
        document.getElementById("donorBloodGroup").value;

    alert(
        "Thank you, " + name +
        "!\n\n" +
        "You have registered as a potential " +
        bloodGroup +
        " blood donor.\n\n" +
        "BloodConnect appreciates your willingness to help."
    );

}


/* ================= BLOOD REQUEST ================= */

function submitBloodRequest(event) {

    event.preventDefault();

    const patient =
        document.getElementById("patientName").value;

    const bloodGroup =
        document.getElementById("requiredBlood").value;

    const hospital =
        document.getElementById("hospital").value;

    alert(
        "Blood request submitted successfully!\n\n" +

        "Patient: " + patient + "\n" +

        "Blood Group: " + bloodGroup + "\n" +

        "Hospital: " + hospital + "\n\n" +

        "Potential donors can now be notified."
    );

}


/* ================= REQUEST HELP ================= */

function requestHelp(bloodGroup, hospital) {

    alert(
        "Thank you for offering to help!\n\n" +

        "Required Blood Group: " +
        bloodGroup + "\n" +

        "Hospital: " +
        hospital + "\n\n" +

        "In the real system, you would be connected " +
        "with the person who submitted the request."
    );

}


/* ================= LOGIN ================= */

function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value;

    alert(
        "Demo Login Successful!\n\n" +

        "Welcome back!\n" +

        "Email: " + email
    );

}


/* ================= REGISTER ================= */

function registerUser(event) {

    event.preventDefault();

    const name =
        document.getElementById("registerName").value;

    const bloodGroup =
        document.getElementById("registerBlood").value;

    alert(
        "Account Created Successfully!\n\n" +

        "Welcome to BloodConnect, " +
        name +
        "!\n\n" +

        "Blood Group: " +
        bloodGroup
    );

}
