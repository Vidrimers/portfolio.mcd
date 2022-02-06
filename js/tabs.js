$(document).ready(function () {
  $('.original-link').click(function (e) {
    e.preventDefault()
    
    $('.original-link').removeClass('original-link--active')
    $('.info-block__items').removeClass('info-block__items--active')

    $(this).addClass('original-link--active')
    $($(this).attr('href')).addClass('info-block__items--active')
  })

  $('.original-link:last').click()
})