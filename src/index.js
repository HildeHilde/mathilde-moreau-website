import $ from 'jquery';

const newsec = $('#education');
const newsec2 = $('#work');

/*$('a.project-title').click(function(event) { event.preventDefault(); });*/

// $('.link-to-json').click(() => {
const requestEducation = fetch('http://www.if3projets.net/wad19/mathilde/assets/datas/education.json')
  .then((response) => response.json())
  .then((data) => {
    $('#about').after(newsec);
    $.each(data.education, (i, study) => {
      $('.package').append(`<h3>${study.where}</h3> <p class="post-title">${study.when}</p><ul class="item"></ul>`);
      $.each(study.what, (item) => {
        $('.item').append(`<li class="el">${study.what[item]}</li>`);
      });
    });
  });

const requestWork = fetch('http://www.if3projets.net/wad19/mathilde/assets/datas/works.json')
  .then((response2) => response2.json())
  .then((data2) => {
    newsec.after(newsec2);
    $.each(data2.works, (i, work) => {
      $('.package2').append(`<h3>${work.title}</h3> <p class="post-title">${work.location} | ${work.date}</p><ul class="item2"></ul>`);
      $.each(work.descriptions, (element) => {
        $('.item2').append(`<li class="el">${work.descriptions[element]}</li>`);
      });
    });
  });


$.when(requestEducation, requestWork).then(() => {
  $('#education').show();
  $('#work').show();
  $('.link-to-json').hide();
});
// });
