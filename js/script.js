$(function() {
  $(".card__container")
    .click(function() {
      var card = $(this).parents(".card");
      if (card.hasClass("card--disabled")) {
        return;
      } else if (!card.hasClass("card--selected")) {
        card.addClass("card--selected");
      } else {
        card.removeClass("card--selected card--hover");
      }
    })
    .mouseleave(function() {
      var card = $(this).parents(".card");
      if (card.hasClass("card--selected")) {
        card.addClass("card--hover");
      } else {
        card.removeClass("card--hover");
      }
    });

  $(".card__add-item").click(function(event) {
    event.preventDefault();
    $(this)
      .parents(".card")
      .addClass("card--selected");
  });
});
