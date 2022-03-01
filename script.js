import * as Data from './data.js'

$(document).ready(function() {
    let buttonTop = document.getElementById("btn-top")
    buttonTop.style.display = "none"

    setupWindowListener()
    setupNavigation()
    scrollHandler(buttonTop)
    setupStylingFromResolution()
    setupButtonScrollToTop(buttonTop)
    
    loadEducationData()
    loadExperienceData()
    loadSkillsData()
    loadProjectsData()
    loadCertificatesData()
})

function loadEducationData() {
    Data.educationData.forEach(educationData => {
        Data.educationTargetSection.forEach(targetSection => {
            let items = ""
            educationData.details.forEach(item => {
                items +=
                `
                    <li class="item-details">
                        <h5>${ item.detailTitle }</h5> ${ item.description }
                    </li>
                `
            });
            document.getElementById(targetSection).innerHTML += 
            `
                <article class="education-item">
                    <img class="rounded-10" src="${ educationData.educationIcon }">
                    <div class="px-4">
                        <h4>${ educationData.title }</h4>
                        <h6>
                            <i>${ educationData.timeline }</i>
                        </h6>
                        <hr>
                        <ul>
                            ${ items }
                        </ul>
                    </div>
                </article>
            `
        });
    });
}

function loadExperienceData() {
    Data.experienceData.forEach(experienceData => {
        Data.experienceTargetSection.forEach(targetSection => {
            let items = ""
            experienceData.details.forEach(item => {
                let jobDeskItems = ""
                item.jobDesks.forEach(jobDesk => {
                    jobDeskItems += 
                    `
                        <li>${ jobDesk }</li>
                    `
                });
                items +=
                `
                    <li class="item-details">
                        <h5>${ item.detailTitle }</h5>
                        <h6>
                            <i>${ item.detailTimeline }</i>
                        </h6>
                        <ul>
                            ${ jobDeskItems }
                        </ul>
                    </li>
                `
            });
            document.getElementById(targetSection).innerHTML += 
            `
                <article class="education-item">
                    <img class="rounded-10" src="${ experienceData.experienceIcon }">
                    <div class="px-4">
                        <h4>${ experienceData.title }</h4>
                        <h6>
                            <i>${ experienceData.timeline }</i>
                        </h6>
                        <hr>
                        <ul>
                            ${ items }
                        </ul>
                    </div>
                </article>
            `
        });
    });
}

function loadSkillsData() {
    Data.skillData.forEach(skillData => {
        let items = ""

        skillData.items.forEach(item => {
            items += 
            `
                <div class="slp-wrapper">
                    <h5 class="fw-bolder">${ item.skillName }</h5>
                    <div class="progress bg-dark rounded-pill">
                        <div class="progress-bar bg-cream" role="progressbar" style="width: ${ item.progress }%"></div>
                    </div>
                </div>
            `
        });

        Data.skillTargetSection.forEach(section => {
            document.getElementById(section).innerHTML += 
            `
                <li>
                    <article>
                        <h4>${ skillData.title }</h4>
                        <div class="skill-language-progress mt-4 d-flex flex-wrap justify-content-between">
                            ${ items }
                        </div>
                    </article>
                </li>
            `
            });
    });
}

function loadProjectsData() {
    Data.projectData.forEach(projectData => {
        Data.projectTargetSection.forEach(section => {
            document.getElementById(section).innerHTML += 
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
     });
}

function loadCertificatesData() {
    Data.certificateData.forEach(certificateData => {
        Data.certificateTargetSection.forEach(section => {
            document.getElementById(section).innerHTML += `<img src="${certificateData}">`
        });
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
        "display": (window.innerWidth <= 1210) ? "block" : "none"
    })
    $("#footer-section-mobile", window.parent.document).css({
        "display": (window.innerWidth <= 1210) ? "block" : "none"
    })
    $("#profile-detail", window.parent.document).css({
        "display": (window.innerWidth > 1210) ? "block" : "none"
    })
    $("#footer-section-web", window.parent.document).css({
        "display": (window.innerWidth > 1210) ? "block" : "none"
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
    if (window.innerWidth <= 1210) {
        document.getElementById('edunav-mobile').scrollIntoView()
    } else {
        document.getElementById('edunav').scrollIntoView()
    }
}

function navigateToExperiences() {
    resetActiveLinks()
    document.getElementById('nav-exp-mobile').classList.add("active")
    document.getElementById('nav-exp').classList.add("active")
    if (window.innerWidth <= 1210) {
        document.getElementById('expnav-mobile').scrollIntoView()
    } else {
        document.getElementById('expnav').scrollIntoView()
    }
}

function navigateToSkills() {
    resetActiveLinks()
    document.getElementById('nav-skill-mobile').classList.add("active")
    document.getElementById('nav-skill').classList.add("active")
    if (window.innerWidth <= 1210) {
        document.getElementById('skillnav-mobile').scrollIntoView()
    } else {
        document.getElementById('skillnav').scrollIntoView()
    }
}

function navigateToProjects() {
    resetActiveLinks()
    document.getElementById('nav-proj-mobile').classList.add("active")
    document.getElementById('nav-proj').classList.add("active")
    if (window.innerWidth <= 1210) {
        document.getElementById('projnav-mobile').scrollIntoView()
    } else {
        document.getElementById('projnav').scrollIntoView()
    }
}

function navigateToCertificatesAndAchievements() {
    resetActiveLinks()
    document.getElementById('nav-cna-mobile').classList.add("active")
    document.getElementById('nav-cna').classList.add("active")
    if (window.innerWidth <= 1210) {
        document.getElementById('cnanav-mobile').scrollIntoView()
    } else {
        document.getElementById('cnanav').scrollIntoView()
    }
}