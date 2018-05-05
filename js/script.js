$(function() {
  $('.card__inner')
    .click(function() {
      var card = $(this).parents('.card');
      if (card.hasClass('card--disabled')) {
        return;
      } else if (!card.hasClass('card--selected')) {
        card.addClass('card--selected');
        selectedTextAnimation(card);
      } else {
        card.removeClass('card--selected card--hover');
        unselectedTextAnimation(card);
      }
    })
    .mouseleave(function() {
      var card = $(this).parents('.card');
      if (card.hasClass('card--selected')) {
        card.addClass('card--hover');
      } else {
        card.removeClass('card--hover');
      }
    });

  $('.card__add-item').click(function(event) {
    event.preventDefault();
    var card = $(this).parents('.card');
    card.addClass('card--selected');
    selectedTextAnimation(card);
  });

  function selectedTextAnimation(wrap) {
    $('.info__text--default', wrap)
      .stop()
      .fadeOut(200);
    $('.info__text--selected', wrap)
      .stop()
      .fadeIn(500);
  }
  function unselectedTextAnimation(wrap) {
    $('.info__text--selected', wrap)
      .stop()
      .fadeOut(200);
    $('.info__text--default', wrap)
      .stop()
      .fadeIn(500);
  }
});
