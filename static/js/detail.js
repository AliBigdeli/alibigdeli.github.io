$.getJSON('details.json', function (data) {
  //$('meta#ogtitle').attr("content", `${data.Profile.General.FirstName} ${data.Profile.General.LastName} Resume`);
  //$('meta#ogurl').attr("content", window.location.href);
  //$('meta#ogimage').attr("content", `${data.Profile.General.Avatar}`);

  $("#Avatar").attr("src", data.Profile.General.Avatar);
  $('h3#Name').text(data.Profile.General.FirstName + " " + data.Profile.General.LastName);
  $('title').text(`${data.Profile.General.FirstName} ${data.Profile.General.LastName} Resume`);
  $('#Email').text(data.Profile.General.Email);
  $("a#Email").attr("href", `mailto:${data.Profile.General.Email}`);
  $('#Phone').text(data.Profile.General.Phone);
  $('#BirthDate').text(data.Profile.General.BirthDate);
  $('#Address').text(data.Profile.General.Address);
  for (let skill of data.Profile.LangTech) {
    $("#LangTech").append("<div class=\"title text-white\">" + skill.Name + "</div>");
  }
  for (let skill of data.Profile.Skills) {
    $("#Skills").append("<div class=\"title text-white\">" + skill.Name + "</div>");
  }
  for (let object of data.Profile.Socials) {
    $("#Socials").append(`<div class="title text-white py-1"><a class="link-light text-decoration-none" href="${object.link}"><img src="${object.icon}" width="25" height="25"> ${object.name} </a></div>`);
  }
  for (let object of data.Profile.Educations) {
    $("#Educations").append(`<div class="jobster-candidate-timeline">
        <div class="jobster-timeline-item">
          <div class="jobster-timeline-cricle">
            <i class="far fa-circle"></i>
            </div>
            <div class="jobster-timeline-info">
              <div class="dashboard-timeline-info">
                <span class="jobster-timeline-time">${object.from} - ${object.to} </span>
                <h6 class="mb-2">${object.grade} in ${object.in}</h6>
                <span>- ${object.institute} </span>
                <p class="mt-2">${object.descriptions}</p>
            </div>
          </div>
        </div>
      </div>`);
  }
  for (let object of data.Profile.Work) {
    $("#Work").append(`<div class= "jobster-candidate-timeline" >
      <div class="jobster-timeline-item">
        <div class="jobster-timeline-cricle">
          <i class="far fa-circle"></i>
        </div>
        <div class="jobster-timeline-info">
          <div class="dashboard-timeline-info">
            <span class="jobster-timeline-time">${object.from} to ${object.to}</span>
            <h6 class="mb-2">${object.title}</h6>
            <span>- ${object.company} (${object.mode}) - ${object.city} </span>
            <p class="mt-2">${object.descriptions}</p>
          </div>
        </div>
      </div>                    
      </div>`);
  }
  if (data.Profile.Achievements.length > 0) {
    ('#Awards').text(`<div class="timeline-box mt-4">
              <h4 class="resume-experience-title">Awards:</h4>
              <div id="Achievements"></div>
            </div>`);
  }
  for (let object of data.Profile.Achievements) {
    $("#Achievements").append(`<div class="jobster-candidate-timeline">
                <div class="jobster-timeline-item">
                  <div class="jobster-timeline-cricle">
                    <i class="far fa-circle"></i>
                  </div>
                  <div class="jobster-timeline-info">
                    <div class="dashboard-timeline-info">
                      <span class="jobster-timeline-time">${object.time}</span>
                      <h6 class="mb-2">${object.title}</h6>                          
                      <p class="mt-2">${object.descriptions}</p>
                    </div>
                  </div>
                </div> 
              </div>`)
  }
});