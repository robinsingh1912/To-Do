$("form").submit((e) => {
  e.preventDefault();
  console.log($("#search").val());
  const value = $("#search").val();

  if (!value) return;

  $("#myUl").prepend(` <div class="input-group d-flex">
  <li class="list-group-item pl-5 flex-grow-1">${value}</li>
  <div class="input-group-append">
      <button class="btn btn-outline-danger" type="button">x</button>
  </div>
</div>`);
  const close = $(".btn-outline-danger");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement.parentElement;
      $(div).remove();
    };
  }

  $(".d-flex")
    .unbind()
    .click((ev) => {
      if (ev.target.nodeName === "LI") {
        console.log(ev);
        ev.target.classList.toggle("checked");
      }
    });
  $("form").trigger("reset");
  //$("#search").val("");
});
