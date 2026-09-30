function searchDonors() {

    const bloodGroup =
        document.getElementById("bloodGroup").value;

    const location =
        document.getElementById("location").value;

    const results =
        document.getElementById("donorResults");

    if (bloodGroup === "" || location === "") {

        results.innerHTML = `
            <div class="donor-card">
                ⚠️ Please select a blood group
                and enter a location.
            </div>
        `;

        return;
    }

    results.innerHTML = `
        <div class="donor-card">

            <div class="donor-avatar">
                👤
            </div>

            <div>
                <h3>Potential Donor</h3>

                <p>
                    Blood Group:
                    <strong>${bloodGroup}</strong>
                </p>

                <p>
                    📍 ${location}
                </p>
            </div>

            <span class="available">
                ● Potential Match
            </span>

        </div>
    `;
}


function registerDonor(event) {

    event.preventDefault();

    alert(
        "❤️ Thank you for registering as a potential donor!"
    );

}


function submitBloodRequest(event) {

    event.preventDefault();

    alert(
        "🚨 Your blood request has been submitted successfully!"
    );

}


function loginUser(event) {

    event.preventDefault();

    alert(
        "Login functionality will be connected later."
    );

}


function registerUser(event) {

    event.preventDefault();

    alert(
        "❤️ Account created successfully!"
    );

}
