function injectSidebar()
{
	$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
        $("#test").html();
    });
});
}


function injectSidebarTest()
{
	
	var insert;
	insert = "<p>Blah</p>";
	/*
	insert =  "<!-- Sidebar -->
			  <div id="sidebar-wrapper">
                        <ul class="sidebar-nav">
                                <li class="sidebar-brand">
                                        <a href="index.html">Intro Emb. Sys.</a>
                                </li>
                                <li>
                                        <a href="intro.html">Introduction</a>
                                </li>
                                <li>
                                        <a href="introToElectricity.html">Crash Course in Electricity</a>
                                </li>
                                <li>
                                        <a href="dataSheets.html">Data Sheets</a>
                                </li>
                                <li>
                                        <a href="bitManipulation.html">Bit Manipulation</a>
                                </li>
                                <li>
                                        <a href="glossaryAndIndex.html">Glossary/Index</a>
                                </li>
                        </ul>
        </div>
        <!-- /#sidebar-wrapper -->";

	*/
	
	
	document.getElementById("place-sidebar").innerHTML = insert;
	
	
}