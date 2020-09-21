$(document).ready(function () {
  items = localStorage.getItem("todo");
  $("#myUl").html(items);
  deleteListener();
  completeListner();
});

$("form").submit((e) => {
  e.preventDefault();
  //console.log($("#search").val());
  const value = $("#search").val();

  if (!value) return;
  $("#myUl").prepend(` <div class="input-group d-flex">
  <li class="list-group-item pl-5 flex-grow-1">${value}</li>
  <div class="input-group-append">
      <button class="btn btn-outline-danger" type="button">x</button>
  </div>
</div>`);

  deleteListener();
  completeListner();
  $("form").trigger("reset");
  //$("#search").val("");
});

function updateStorage() {
  HTML = document.getElementById("myUl").innerHTML;
  localStorage.setItem("todo", HTML);
}

function deleteListener() {
  const close = $(".btn-outline-danger");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement.parentElement;
      $(div).remove();
      updateStorage();
    };
    updateStorage();
  }
}

function completeListner() {
  $(".d-flex")
    .unbind()
    .click((ev) => {
      if (ev.target.nodeName === "LI") {
        ev.target.classList.toggle("checked");
        updateStorage();
      }
    });
}
