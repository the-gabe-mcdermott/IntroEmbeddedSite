  $(function () {
                    $("#injectNavbarHere").load("navBar_BitManipulation.html", function () {
                        //<!--Menu Toggle Script -- >
                        $("#navbarToggleButton").click(function (e) {
                            e.preventDefault();
                            $("#wrapper").toggleClass("toggled");
                            $("#navbarToggleButton").toggleClass("closed");
                        });
                    });
                });