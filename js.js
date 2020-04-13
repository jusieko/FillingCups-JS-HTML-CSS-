window.addEventListener('load', function (evt) {

    kubek = document.getElementsByClassName("kubek")
    const kubki = Array.from(kubek)
    //kolor = document.getElementsByClassName("kolor")[0]
    //console.log(kolor)
    var interval;

    for (let i = 0; i < kubki.length; i++) {
        kubki[i].addEventListener('mousedown', function (evt) {
            var napelnienie;
            var kolor = kubki[i].childNodes[1]
            console.log(kolor)

            var test = kolor

            interval = setInterval(function (kolor) {
                //console.log("test")
                napelnienie = test.offsetHeight
                if (napelnienie <= 118) {
                    test.style.height = "" + (napelnienie + 1).toString() + "px"
                }
                else{
                    console.log(kubki[i])
                    kubki[i].style.cursor = "wait"
                    clearInterval(interval);
                }

            }, 20);

        })

        kubki[i].addEventListener('mouseup', function () {
            clearInterval(interval);
        });
        kubki[i].addEventListener('mouseleave', function () {
            clearInterval(interval);
        });
    }



});
