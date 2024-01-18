$(document).ready(function () {
  let homeNav = $('#homeNav')
  let aboutNav = $('#aboutNav')
  let educationNav = $('#educationNav')
  let skillsNav = $('#skillsNav')
  let socialNav = $('#socialNav')
  let projectsNav = $('#projectsNav')
  let contactNav = $('#contactNav')
  let navItems = $('.nav-link')

  homeNav.click(function () {
    navItems.removeClass('active');
    $(this).addClass('active');
  })
  aboutNav.click(function () {
    navItems.removeClass('active');
    $(this).addClass('active');
  })
  educationNav.click(function () {
    navItems.removeClass('active');
    $(this).addClass('active');
  })
  skillsNav.click(function () {
    navItems.removeClass('active');
    $(this).addClass('active');
  })
  socialNav.click(function () {
    navItems.removeClass('active');
    $(this).addClass('active');
  })
  projectsNav.click(function () {
    navItems.removeClass('active');
    $(this).addClass('active');
  })
  contactNav.click(function () {
    navItems.removeClass('active');
    $(this).addClass('active');
  })
});
