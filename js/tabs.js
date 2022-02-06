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


$(document).ready(function () {
  $('.tabs-links__item').click(function (e) {
    e.preventDefault()

    $('.tabs-links__item').removeClass('tabs-links__item--active')
    $('.tabs-content__item').removeClass('tabs-content__item--active')

    $(this).addClass('tabs-links__item--active')
    $($(this).attr('href')).addClass('tabs-content__item--active')
  })

  $('.tabs-links__item:first').click()
})