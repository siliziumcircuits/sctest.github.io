$(document).ready(() => {
  $(".accordion").on("click", (event) => {
    $(".accordion.active").removeClass("active");
    let id = $(event.currentTarget).data("section");
    $(event.currentTarget).addClass("active");
    toggleAccordion(`accordion-item-${id}`);
  });
});

const toggleAccordion = (accordionId) => {
  let elm = $(`#${accordionId}`)[0];
  if ($(`#${accordionId}`).hasClass("active")) {
    elm.style.maxHeight = null;
    $(`#${accordionId}`).removeClass("active");
  } else {
    if ($(".accordion-details.active").length) {
      let prevElem = $(".accordion-details.active")[0];
      prevElem.style.maxHeight = null;
      $(".accordion-details.active").removeClass("active");
    }
    $(`#${accordionId}`).addClass("active");
    elm.style.maxHeight = elm.scrollHeight + "px";
    $(`#${accordionId}`).addClass("active");
  }
};
