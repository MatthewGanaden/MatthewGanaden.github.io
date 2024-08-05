function displayProject(project) {
    // Reset all buttons
    document.getElementById("design").style.background = "none";
    document.getElementById("webDev").style.background = "none";
    document.getElementById("others").style.background = "none";
    document.getElementById("design").style.fontWeight = "400";
    document.getElementById("webDev").style.fontWeight = "400";
    document.getElementById("others").style.fontWeight = "400";

    // Update the selected button
    document.getElementById(project).style.fontWeight = "700";
    document.getElementById(project).style.background = "#fff";

    let title, description, videoSrc, href;
    if (project === 'design') {
        title = 'Design';
        description = 'I have an experience with freelancing video editing and motion graphics. I also helped in making mobile app designs when I was in the university.';
        videoSrc = 'style/vid/design.mp4';
        href = 'https://drive.google.com/drive/folders/1SDV6Uyw2G84z5x7Cz7VCl3Ql1gu_1u_s?usp=sharing';
    } else if (project === 'webDev') {
        title = 'Web Development';
        description = 'I have an experience working with an agency to make their web design come to life using wordpress. I also learned some programming languages in the university.';
        videoSrc = 'style/vid/webDev.mp4';
        href = 'https://drive.google.com/drive/folders/1VSrTNcxOb8sdVdt4W9_p8qmGK9otYa4R?usp=sharing';
    } else if (project === 'others') {
        title = 'Testing and Arduino';
        description = 'I have used my knowledge in selenium to create a custom facebook scraper for our thesis. I have also tried tinkering with arduino for a competition.';
        videoSrc = 'style/vid/others.mp4';
        href = 'https://drive.google.com/drive/folders/194v2NPjxBbGFOK2l43Vj63Az0C2rNk2B?usp=sharing';
    }

    document.getElementById("title").innerHTML = title;
    document.getElementById("description").innerHTML = description;
    document.getElementById("videoSrc").src = videoSrc;
    document.getElementById("portfolioLink").href = href;

    // load the video to apply the new source
    document.querySelector('video').load();
}