$(document).ready(function () {
    $('#slider1, #slider2, #slider3').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $('.plus-cart').click(function () {
        var id = $(this).attr("pid").toString();
        var eml = this.parentNode.children[2];
        $.ajax({
            type: "GET",
            url: "/pluscart",
            data: {
                prod_id: id
            },
            success: function (data) {
                eml.innerText = data.quantity;
                document.getElementById("amount").innerText = data.amount;
                document.getElementById("totalamount").innerText = data.totalamount;
            }
        });
    });

    $('.minus-cart').click(function () {
        var id = $(this).attr("pid").toString();
        var eml = this.parentNode.children[2];
    
        $.ajax({
            type: "GET",
            url: "/minuscart/",  
            data: {
                prod_id: id
            },
            success: function (data) {
                eml.innerText = data.quantity;
                document.getElementById("amount").innerText = data.amount;
                document.getElementById("totalamount").innerText = data.totalamount;
            },
            error: function (xhr) {
                console.log("Error:", xhr.responseText);
            }
        });
    });
    
    $('.remove-cart').click(function () {
        var id = $(this).attr("pid").toString();
        var eml = this;
        console.log(id)
        $.ajax({
            type: "GET",
            url: "/removecart/",
            data: {
                prod_id: id
            },
            success: function (data) {
                console.log("delete")
                document.getElementById("amount").innerText = data.amount;
                document.getElementById("totalamount").innerText = data.totalamount;
                eml.parentNode.parentNode.parentNode.parentNode.remove()
            }
        });
    });
});
