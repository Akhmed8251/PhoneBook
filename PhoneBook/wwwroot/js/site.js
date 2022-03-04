
//Для пользователя
$(".filter-search__btn").on('click', function () {
    $.ajax({
        type: "POST",
        url: "Home/GetCustomers",
        data: { "text": $(".filter-search__input").val() },
        beforeSend: function () {
            $("#results").text("Ваш запрос обрабатывается");
        },
        success: function (response) {
            $("#results").html(response);
        }
    });
});

$(".filter-select select").on('change', function () {
    $.ajax({
        type: "POST",
        url: "Home/GetCustomers",
        data: { "id": this.options[this.selectedIndex].value },
        beforeSend: function () {
            $("#results").text("Ваш запрос обрабатывается");
            $(this).prop("disabled", true);
        },
        success: function (response) {
            $("#results").html(response);
            $(this).prop("disabled", false);
        }
    });
});

//Для админа
$("#admin-search").on('click', function () {
    $.ajax({
        type: "POST",
        url: "admin/Customer/GetCustomers",
        data: { "text": $(".filter-search__input").val() },
        beforeSend: function () {
            $("#results").text("Ваш запрос обрабатывается");
        },
        success: function (response) {
            $("#results").html(response);
        }
    });
});

$("#admin-select select").on('change', function () {
    $.ajax({
        type: "POST",
        url: "admin/Customer/GetCustomers",
        data: { "id": this.options[this.selectedIndex].value },
        beforeSend: function () {
            $("#results").text("Ваш запрос обрабатывается");
            $(this).prop("disabled", true);
        },
        success: function (response) {
            $("#results").html(response);
            $(this).prop("disabled", false);
        }
    });
});

$("#structure").on('click', function () {
    $.ajax({
        type: "POST",
        url: "admin/Structure/GetStructures",
        success: function (response) {
            $("#results").html(response);
        }
    });
});

$(".header__user-text").on('click', function (e) {
    if ($(".header__user-text span").hasClass("auth")) {
        return false;
    }

    e.preventDefault();
    $('.popup').fadeIn(400);
    $('body').addClass('no-scroll');
});


$('.close-popup, .popup__area').on('click', function () {
    $('.popup').fadeOut(400);
    $('body').removeClass('no-scroll');
});