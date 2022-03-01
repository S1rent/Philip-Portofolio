$(document).ready(function() {
    let buttonTop = document.getElementById("btn-top")
    buttonTop.style.display = "none"

    setupWindowListener()
    setupNavigation()
    scrollHandler(buttonTop)
    setupStylingFromResolution()
    setupButtonScrollToTop(buttonTop)
    
    loadProjectsData()
    loadCertificatesData()
})

function loadProjectsData() {
    const data = [
        {
            projectIcon: "assets/ic-bimob.png",
            projectTitle: "Binus Mobile for Student",
            projectDescription: "Binus Mobile for Student is an Learning Management System developed specifically for Students to enhance and support their learning experience in BINUS University",
            projectLink: "https://apps.apple.com/id/app/binus-mobile-for-student/id1441962329"
        },
        {
            projectIcon: "assets/ic-bimobl.png",
            projectTitle: "Binus Mobile for Lecturer",
            projectDescription: "Binus Mobile for Lecturer is an Learning Management System developed specifically for Lecturers to enhance and support their teaching experience in BINUS University",
            projectLink: "https://apps.apple.com/id/app/binus-mobile-for-lecturer/id1442060377?l=id"
        },
        {
            projectIcon: "assets/ic-bimobp.png",
            projectTitle: "Binus Mobile for Parent",
            projectDescription: "Binus Mobile for Parent is an application that's developed for Parent, so they are able to access relevant information for their child's activity in BINUS University.",
            projectLink: "https://apps.apple.com/id/app/binus-mobile-for-parent/id1524738118"
        },
        {
            projectIcon: "assets/ic-bimay.png",
            projectTitle: "BINUSMAYA",
            projectDescription: "BINUSMAYA is the newest Learning Management System developed for Students and Lecturers to enhance and support their activity in BINUS University",
            projectLink: "https://apps.apple.com/id/app/binusmaya/id1499309793?l=id"
        },
    ]

    data.forEach(projectData => {
        document.getElementById("profile-projects-list-web").innerHTML += 
        `
            <article class="d-flex">
                <img class="rounded-10" src="${ projectData.projectIcon }">
                <div class="px-4">
                    <h4 class="fw-bold">${ projectData.projectTitle }</h4>
                    <h6>${ projectData.projectDescription }</h6>
                    <a href="${ projectData.projectLink }" target="_blank">
                        <button class="btn-view">
                            <h6 class="m-0">View</h6>
                        </button>
                    </a>
                </div>
            </article>
        `

        document.getElementById("profile-projects-list-mobile").innerHTML += 
        `
            <article class="d-flex">
                <img class="rounded-10" src="${ projectData.projectIcon }">
                <div class="px-4">
                    <h4 class="fw-bold">${ projectData.projectTitle }</h4>
                    <h6>${ projectData.projectDescription }</h6>
                    <a href="${ projectData.projectLink }" target="_blank">
                        <button class="btn-view">
                            <h6 class="m-0">View</h6>
                        </button>
                    </a>
                </div>
            </article>
        `
     });
}

function loadCertificatesData() {
    const data = [
        "/assets/Certificates/bp-12.png",
        "/assets/Certificates/iccsai.png",
        "/assets/Certificates/ios-expert.png",
        "/assets/Certificates/ios-bfaa.png",
        "/assets/Certificates/ios-p.png",
        "/assets/Certificates/andro-bfaa.png",
        "/assets/Certificates/andro-p.png",
        "/assets/Certificates/rn-binus.png",
        "/assets/Certificates/itdiv-am.png",
        "/assets/Certificates/web-trainner.png",
        "/assets/Certificates/mobile-trainner.png",
        "/assets/Certificates/pf-score.png",
    ]

    data.forEach(certificateData => {
       document.getElementById("profile-cna-list-web").innerHTML += `<img src="${certificateData}">`
       document.getElementById("profile-cna-list-mobile").innerHTML += `<img src="${certificateData}">`
    });
}

function setupWindowListener() {
    const windowListener = () => {
        $("#btn-sidebar", window.parent.document).css({
            "display": (window.innerWidth <= 1250) ? "block" : "none"
        })
        $("#web-nav", window.parent.document).css({
            "display": (window.innerWidth <= 1250) ? "none" : "flex"
        })
    }
    windowListener()
    window.onresize = function() {
        windowListener()
    }
}

function setupNavigation() {
    $("#nav-prof-mobile").click(function() {
        navigateToProfile()
    })
    
    $("#nav-edu-mobile").click(function() {
        navigateToEducations()
    })

    $("#nav-exp-mobile").click(function() {
        navigateToExperiences()
    })

    $("#nav-skill-mobile").click(function() {
        navigateToSkills()
    })

    $("#nav-proj-mobile").click(function() {
        navigateToProjects()
    })

    $("#nav-cna-mobile").click(function() {
        navigateToCertificatesAndAchievements()
    })

    $("#nav-prof").click(function() {
        navigateToProfile()
    })
    
    $("#nav-edu").click(function() {
        navigateToEducations()
    })

    $("#nav-exp").click(function() {
        navigateToExperiences()
    })

    $("#nav-skill").click(function() {
        navigateToSkills()
    })

    $("#nav-proj").click(function() {
        navigateToProjects()
    })

    $("#nav-cna").click(function() {
        navigateToCertificatesAndAchievements()
    })
}

function setupStylingFromResolution() {
    checkResolution()
    $(window).resize(function() {
        checkResolution()
    })
}

function setupButtonScrollToTop(buttonTop) {
    window.onscroll = function() {
        scrollHandler(buttonTop)
    }

    $("#btn-top").click(function() {
        scrollTop()
    })

    $('#btn-top').on('mouseenter', function(e) {
        $('#icn-arrow-top').css({
            "filter": "invert(97%) sepia(100%) saturate(12%) hue-rotate(211deg) brightness(102%) contrast(104%)"
        })
    })

    $('#btn-top').on('mouseleave', function(e) {
        $('#icn-arrow-top').css({
            "filter": "invert(0%) sepia(5%) saturate(7482%) hue-rotate(261deg) brightness(98%) contrast(106%)"
        })
    })
}

function scrollHandler(buttonTop) {
    if (document.documentElement.scrollTop < 200) {
        buttonTop.style.display = "none"
    } else {
        buttonTop.style.display = "flex"
    }
}

function scrollTop() {
    resetActiveLinks()
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

function checkResolution() {
    $("#profile-sm-detail", window.parent.document).css({
        "display": (window.innerWidth <= 1033) ? "block" : "none"
    })
    $("#profile-detail", window.parent.document).css({
        "display": (window.innerWidth > 1033) ? "block" : "none"
    })
}

function resetActiveLinks() {

    setTimeout(function () {
        $('#offcanvasNavbar').offcanvas('hide')
    }, 500);

    document.getElementById('nav-prof-mobile').classList.remove("active")
    document.getElementById('nav-edu-mobile').classList.remove("active")
    document.getElementById('nav-exp-mobile').classList.remove("active")
    document.getElementById('nav-skill-mobile').classList.remove("active")
    document.getElementById('nav-proj-mobile').classList.remove("active")
    document.getElementById('nav-cna-mobile').classList.remove("active")
    
    document.getElementById('nav-prof').classList.remove("active")
    document.getElementById('nav-edu').classList.remove("active")
    document.getElementById('nav-exp').classList.remove("active")
    document.getElementById('nav-skill').classList.remove("active")
    document.getElementById('nav-proj').classList.remove("active")
    document.getElementById('nav-cna').classList.remove("active")
}

function navigateToProfile() {
    resetActiveLinks()
    document.getElementById('nav-prof-mobile').classList.add("active")
    document.getElementById('nav-prof').classList.add("active")
    document.getElementById('profnav').scrollIntoView()
}

function navigateToEducations() {
    resetActiveLinks()
    document.getElementById('nav-edu-mobile').classList.add("active")
    document.getElementById('nav-edu').classList.add("active")
    if (window.innerWidth <= 1033) {
        document.getElementById('edunav-mobile').scrollIntoView()
    } else {
        document.getElementById('edunav').scrollIntoView()
    }
}

function navigateToExperiences() {
    resetActiveLinks()
    document.getElementById('nav-exp-mobile').classList.add("active")
    document.getElementById('nav-exp').classList.add("active")
    if (window.innerWidth <= 1033) {
        document.getElementById('expnav-mobile').scrollIntoView()
    } else {
        document.getElementById('expnav').scrollIntoView()
    }
}

function navigateToSkills() {
    resetActiveLinks()
    document.getElementById('nav-skill-mobile').classList.add("active")
    document.getElementById('nav-skill').classList.add("active")
    if (window.innerWidth <= 1033) {
        document.getElementById('skillnav-mobile').scrollIntoView()
    } else {
        document.getElementById('skillnav').scrollIntoView()
    }
}

function navigateToProjects() {
    resetActiveLinks()
    document.getElementById('nav-proj-mobile').classList.add("active")
    document.getElementById('nav-proj').classList.add("active")
    if (window.innerWidth <= 1033) {
        document.getElementById('projnav-mobile').scrollIntoView()
    } else {
        document.getElementById('projnav').scrollIntoView()
    }
}

function navigateToCertificatesAndAchievements() {
    resetActiveLinks()
    document.getElementById('nav-cna-mobile').classList.add("active")
    document.getElementById('nav-cna').classList.add("active")
    if (window.innerWidth <= 1033) {
        document.getElementById('cnanav-mobile').scrollIntoView()
    } else {
        document.getElementById('cnanav').scrollIntoView()
    }
}