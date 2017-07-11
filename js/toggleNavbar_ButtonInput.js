  $(function () {
                    $("#injectNavbarHere").load("navBar_ButtonInput.html", function () {
                        //<!--Menu Toggle Script -- >
                        $("#navbarToggleButton").click(function (e) {
                            e.preventDefault();
                            $("#wrapper").toggleClass("toggled");
                            $("#navbarToggleButton").toggleClass("closed");
                        });
                    });
                });
