/* =========================================================
   🩸 BLOODREACH — CREATIVE INTERACTIVE JAVASCRIPT
   Community Blood Donation Platform
========================================================= */


/* =========================================================
   GLOBAL HELPERS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeRevealAnimations();
    initializeCounters();
    initializeDate();
    initializePasswordTools();
    initializeFormEnhancements();

});


/* =========================================================
   🔔 BEAUTIFUL TOAST NOTIFICATION
========================================================= */

function showToast(message, type = "success") {

    let oldToast = document.querySelector(".br-toast");

    if (oldToast) {
        oldToast.remove();
    }


    const toast = document.createElement("div");

    toast.className = "br-toast";


    const icon =
        type === "error" ? "⚠️" :
        type === "info" ? "💡" :
        "❤️";


    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>

        <span class="toast-message">
            ${message}
        </span>

        <button onclick="this.parentElement.remove()">
            ×
        </button>
    `;


    toast.style.cssText = `
        position:fixed;
        right:25px;
        bottom:25px;
        z-index:99999;
        display:flex;
        align-items:center;
        gap:12px;
        max-width:380px;
        padding:16px 18px;
        background:#ffffff;
        color:#24171a;
        border-radius:18px;
        box-shadow:0 18px 45px rgba(80,15,25,.18);
        border-left:5px solid ${
            type === "error" ? "#d51e39" : "#c9152b"
        };
        font-size:14px;
        animation:brToastIn .4s ease;
    `;


    document.body.appendChild(toast);


    setTimeout(() => {

        if (toast) {
            toast.style.animation = "brToastOut .4s ease";

            setTimeout(() => toast.remove(), 350);
        }

    }, 4000);
}


/* =========================================================
   ✨ ADD TOAST ANIMATIONS
========================================================= */

const toastStyle = document.createElement("style");

toastStyle.innerHTML = `

@keyframes brToastIn {

    from {
        opacity:0;
        transform:translateY(25px) scale(.95);
    }

    to {
        opacity:1;
        transform:translateY(0) scale(1);
    }

}


@keyframes brToastOut {

    from {
        opacity:1;
        transform:translateY(0);
    }

    to {
        opacity:0;
        transform:translateY(20px);
    }

}


.br-toast button {
    border:none;
    background:none;
    font-size:20px;
    cursor:pointer;
    color:#999;
}


.br-toast button:hover {
    color:#c9152b;
}

`;

document.head.appendChild(toastStyle);



/* =========================================================
   🔍 CREATIVE DONOR SEARCH
========================================================= */

function searchDonors() {

    const bloodGroup =
        document.getElementById("bloodGroup")?.value;

    const location =
        document.getElementById("location")?.value.trim();

    const results =
        document.getElementById("donorResults");


    if (!results) return;


    if (!bloodGroup) {

        showToast(
            "Please choose a blood group first.",
            "error"
        );

        return;
    }


    if (!location) {

        showToast(
            "Tell us your city or area.",
            "error"
        );

        return;
    }


    results.innerHTML = `

        <div class="search-info">

            <div style="
                text-align:center;
                padding:20px;
            ">

                <div style="
                    font-size:35px;
                    animation:brPulse 1s infinite;
                ">
                    🩸
                </div>

                <h3>
                    Finding potential matches...
                </h3>

                <p>
                    Searching ${location}
                    for ${bloodGroup} donors.
                </p>

            </div>

        </div>

    `;


    setTimeout(() => {

        results.innerHTML = `

            <div class="donor-card">

                <div class="donor-avatar">
                    🩸
                </div>

                <div>

                    <h3>
                        Potential Match Found
                    </h3>

                    <p>
                        Blood Group:
                        <strong>${bloodGroup}</strong>
                    </p>

                    <p>
                        📍 ${location}
                    </p>

                    <p style="
                        color:#168443;
                        font-size:13px;
                        font-weight:700;
                    ">
                        ● Potentially Available
                    </p>

                </div>

                <button
                    class="btn btn-primary"
                    onclick="
                        contactDonor(
                            '${bloodGroup}',
                            '${location}'
                        )
                    "
                >
                    ❤️ Connect
                </button>

            </div>

        `;


        showToast(
            "Potential donor match found! 🩸"
        );

    }, 1200);

}



/* =========================================================
   ❤️ CONTACT DONOR
========================================================= */

function contactDonor(bloodGroup, location) {

    showToast(
        `Potential ${bloodGroup} donor found near ${location}.`
    );

}



/* =========================================================
   ❤️ DONOR REGISTRATION
========================================================= */

function registerDonor(event) {

    event.preventDefault();


    const form = event.target;


    const name =
        document.getElementById("fullName")?.value ||
        form.querySelector('input[type="text"]')?.value ||
        "Donor";


    const bloodGroup =
        document.getElementById("donorBloodGroup")?.value ||
        "";


    const donorData = {

        name:name,

        bloodGroup:bloodGroup,

        registeredAt:
            new Date().toISOString()

    };


    localStorage.setItem(
        "bloodReachDonor",
        JSON.stringify(donorData)
    );


    createSuccessCard(
        form,
        "You're officially a BloodReach donor! ❤️",
        "Thank you for choosing to be someone else's hope."
    );


    showToast(
        "Donor registration completed! ❤️"
    );

}



/* =========================================================
   🚨 BLOOD REQUEST
========================================================= */

function submitBloodRequest(event) {

    event.preventDefault();


    const form = event.target;


    const patient =
        document.getElementById("patientName")?.value ||
        "Patient";


    const bloodGroup =
        document.getElementById("requiredBloodGroup")?.value ||
        "Blood group";


    const hospital =
        document.getElementById("hospital")?.value ||
        "Hospital";


    const requestData = {

        patient:patient,

        bloodGroup:bloodGroup,

        hospital:hospital,

        createdAt:
            new Date().toISOString()

    };


    localStorage.setItem(
        "bloodReachRequest",
        JSON.stringify(requestData)
    );


    createSuccessCard(
        form,
        "Blood request received 🚨",
        `${bloodGroup} requirement at ${hospital} has been recorded in this demo.`
    );


    showToast(
        "Blood request submitted successfully."
    );

}



/* =========================================================
   ✨ SUCCESS CARD
========================================================= */

function createSuccessCard(
    form,
    title,
    message
) {

    form.innerHTML = `

        <div style="
            text-align:center;
            padding:35px 15px;
        ">

            <div style="
                width:85px;
                height:85px;
                margin:0 auto 20px;
                border-radius:50%;
                background:#fce5e8;
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:42px;
                animation:brSuccess .7s ease;
            ">
                ❤️
            </div>

            <h2 style="
                color:#c9152b;
                margin-bottom:12px;
            ">
                ${title}
            </h2>

            <p style="
                color:#756b6d;
                margin-bottom:25px;
            ">
                ${message}
            </p>

            <button
                class="btn btn-primary"
                onclick="location.reload()"
            >
                Continue
            </button>

        </div>

    `;
}



/* =========================================================
   🔐 LOGIN
========================================================= */

function loginUser(event) {

    event.preventDefault();


    const email =
        document.getElementById("loginEmail")?.value.trim();

    const password =
        document.getElementById("loginPassword")?.value;


    if (!email || !password) {

        showToast(
            "Please enter your email and password.",
            "error"
        );

        return;
    }


    if (password.length < 6) {

        showToast(
            "Password should contain at least 6 characters.",
            "error"
        );

        return;
    }


    const button =
        event.target.querySelector("button[type='submit']");


    buttonLoading(
        button,
        "Signing you in..."
    );


    setTimeout(() => {

        button.innerHTML = "✓ Logged In";

        showToast(
            `Welcome back! ❤️`
        );


    }, 1200);

}



/* =========================================================
   📝 SIGN UP
========================================================= */

function registerUser(event) {

    event.preventDefault();


    const name =
        document.getElementById("signupName")?.value.trim();


    const email =
        document.getElementById("signupEmail")?.value.trim();


    const password =
        document.getElementById("signupPassword")?.value;


    const confirmPassword =
        document.getElementById("confirmPassword")?.value;


    if (password !== confirmPassword) {

        showToast(
            "Passwords do not match.",
            "error"
        );

        return;
    }


    if (password.length < 6) {

        showToast(
            "Create a password with at least 6 characters.",
            "error"
        );

        return;
    }


    const user = {

        name:name,

        email:email,

        createdAt:
            new Date().toISOString()

    };


    localStorage.setItem(
        "bloodReachUser",
        JSON.stringify(user)
    );


    showToast(
        `Welcome to BloodReach, ${name}! ❤️`
    );


    setTimeout(() => {

        window.location.href =
            "login.html";

    }, 1800);

}



/* =========================================================
   🔵 GOOGLE LOGIN
========================================================= */

function googleLogin() {

    socialDemo(
        "Google"
    );

}



/* =========================================================
   🔵 FACEBOOK LOGIN
========================================================= */

function facebookLogin() {

    socialDemo(
        "Facebook"
    );

}



/* =========================================================
   🔵 GOOGLE SIGNUP
========================================================= */

function googleSignup() {

    socialDemo(
        "Google"
    );

}



/* =========================================================
   🔵 FACEBOOK SIGNUP
========================================================= */

function facebookSignup() {

    socialDemo(
        "Facebook"
    );

}



/* =========================================================
   SOCIAL LOGIN DEMO
========================================================= */

function socialDemo(provider) {

    showToast(
        `${provider} authentication selected.`
    );


    setTimeout(() => {

        showToast(
            "Demo mode: connect Firebase OAuth for real authentication.",
            "info"
        );

    }, 1800);

}



/* =========================================================
   🔑 FORGOT PASSWORD
========================================================= */

function forgotPassword() {

    const email =
        document.getElementById("loginEmail")?.value.trim();


    if (!email) {

        showToast(
            "Enter your email first.",
            "error"
        );

        return;
    }


    showToast(
        `Password reset link demo prepared for ${email}.`
    );

}



/* =========================================================
   ❤️ I CAN HELP
========================================================= */

function requestHelp(
    bloodGroup,
    hospital
) {

    showToast(
        `Thank you! You offered help for ${bloodGroup} at ${hospital}. ❤️`
    );


    setTimeout(() => {

        showToast(
            "In the complete platform, the requester would be contacted here.",
            "info"
        );

    }, 1800);

}



/* =========================================================
   🏥 BLOOD BANK SEARCH
========================================================= */

function searchBloodBanks() {

    const city =
        document.getElementById("bankCity")?.value.trim();


    const type =
        document.getElementById("bankType")?.value;


    const results =
        document.getElementById("bankResults");


    if (!results) return;


    if (!city) {

        showToast(
            "Enter a city or location.",
            "error"
        );

        return;
    }


    results.innerHTML = `

        <div class="search-info">

            <div style="
                text-align:center;
                padding:15px;
            ">

                <div style="
                    font-size:32px;
                ">
                    🏥
                </div>

                <h3>
                    Blood banks near ${city}
                </h3>

                <p>
                    Showing sample results
                    ${type ? "for " + type : ""}.
                </p>

            </div>

        </div>

    `;


    showToast(
        `Searching blood banks near ${city}...`
    );

}



/* =========================================================
   ⏳ BUTTON LOADING
========================================================= */

function buttonLoading(
    button,
    text
) {

    if (!button) return;


    button.dataset.originalText =
        button.innerHTML;


    button.disabled = true;


    button.innerHTML = `

        <span style="
            display:inline-block;
            width:15px;
            height:15px;
            border:2px solid rgba(255,255,255,.5);
            border-top-color:white;
            border-radius:50%;
            animation:brSpin .7s linear infinite;
            margin-right:8px;
            vertical-align:middle;
        "></span>

        ${text}

    `;

}



/* =========================================================
   👁️ PASSWORD SHOW / HIDE
========================================================= */

function initializePasswordTools() {

    const passwords =
        document.querySelectorAll(
            'input[type="password"]'
        );


    passwords.forEach(password => {

        const wrapper =
            password.parentElement;


        if (!wrapper) return;


        const button =
            document.createElement("button");


        button.type = "button";

        button.innerHTML = "👁️";

        button.title =
            "Show / hide password";


        button.style.cssText = `
            position:absolute;
            right:12px;
            bottom:11px;
            border:none;
            background:none;
            cursor:pointer;
            font-size:16px;
        `;


        wrapper.style.position =
            "relative";


        wrapper.appendChild(button);


        button.addEventListener(
            "click",
            () => {

                if (
                    password.type ===
                    "password"
                ) {

                    password.type =
                        "text";

                    button.innerHTML =
                        "🙈";

                } else {

                    password.type =
                        "password";

                    button.innerHTML =
                        "👁️";

                }

            }
        );

    });

}



/* =========================================================
   💪 PASSWORD STRENGTH
========================================================= */

function initializeFormEnhancements() {

    const password =
        document.getElementById(
            "signupPassword"
        );


    if (!password) return;


    const strength =
        document.createElement("div");


    strength.style.cssText = `
        height:5px;
        margin-top:8px;
        border-radius:10px;
        background:#eee;
        overflow:hidden;
    `;


    const bar =
        document.createElement("div");


    bar.style.cssText = `
        height:100%;
        width:0;
        border-radius:10px;
        transition:.3s;
    `;


    strength.appendChild(bar);

    password.parentElement.appendChild(
        strength
    );


    password.addEventListener(
        "input",
        () => {

            const value =
                password.value;


            let score = 0;


            if (value.length >= 6)
                score++;


            if (/[A-Z]/.test(value))
                score++;


            if (/[0-9]/.test(value))
                score++;


            if (/[^A-Za-z0-9]/.test(value))
                score++;


            const widths =
                ["0%", "25%", "50%", "75%", "100%"];


            bar.style.width =
                widths[score];

        }
    );

}



/* =========================================================
   📅 DATE CONTROL
========================================================= */

function initializeDate() {

    const dateInput =
        document.getElementById(
            "requiredDate"
        );


    if (!dateInput) return;


    const today =
        new Date()
        .toISOString()
        .split("T")[0];


    dateInput.min =
        today;

}



/* =========================================================
   📊 ANIMATED STAT COUNTERS
========================================================= */

function initializeCounters() {

    const stats =
        document.querySelectorAll(
            ".stat h3"
        );


    if (!stats.length) return;


    stats.forEach(stat => {

        const original =
            stat.textContent.trim();


        const number =
            parseInt(
                original.replace(/\D/g, "")
            );


        if (isNaN(number)) return;


        let current = 0;


        const suffix =
            original.replace(
                /[0-9]/g,
                ""
            );


        const duration = 1200;


        const steps =
            Math.max(
                30,
                Math.floor(
                    duration / 25
                )
            );


        const increment =
            number / steps;


        const timer =
            setInterval(() => {

                current += increment;


                if (
                    current >=
                    number
                ) {

                    current =
                        number;

                    clearInterval(timer);

                }


                stat.textContent =
                    Math.floor(current)
                    + suffix;

            }, 25);

    });

}



/* =========================================================
   ✨ SCROLL REVEAL
========================================================= */

function initializeRevealAnimations() {

    const elements =
        document.querySelectorAll(
            ".quick-card, .request-card, .bank-card, .donor-card, .emergency-card"
        );


    if (!elements.length) return;


    elements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .6s ease, transform .6s ease";

    });


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold:0.12
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });

}



/* =========================================================
   🎨 EXTRA ANIMATIONS
========================================================= */

const creativeStyle =
    document.createElement("style");


creativeStyle.innerHTML = `

@keyframes brPulse {

    0%,100% {
        transform:scale(1);
    }

    50% {
        transform:scale(1.15);
    }

}


@keyframes brSpin {

    to {
        transform:rotate(360deg);
    }

}


@keyframes brSuccess {

    0% {
        transform:scale(.4);
        opacity:0;
    }

    70% {
        transform:scale(1.15);
    }

    100% {
        transform:scale(1);
        opacity:1;
    }

}

`;

document.head.appendChild(
    creativeStyle
);
