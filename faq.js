const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

//applying array method, reference: https://www.youtube.com/watch?v=SXb5LN_opbA
//applying change event, example: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;

    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
