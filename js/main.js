$(document).ready(function () {
    var modal = document.getElementById('myModal');

    var img = document.getElementById('myImg');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }
  
});

$(document).ready(function () {
    $('#picture1').click(function() {
         $('#myImg').attr('src','https://goo.gl/WRZLXm')
    });

    $('#picture2').click(function () {
        $('#myImg').attr('src','https://goo.gl/hRvgp6')
    });

    $('#picture3').click(function() {
         $('#myImg').attr('src','https://goo.gl/u6lQzt')
    });

    $('#picture4').click(function() {
         $('#myImg').attr('src','https://goo.gl/teH3Lv')
    });
});
