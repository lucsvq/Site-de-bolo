window.onscroll=function(){rolagem()};

function rolagem() {
    if(document.body.scrollTop > 90 || document.documentElement.scrollTop >80) {
        document.getElementsByTagName("header")[0].style.padding="1px 10px";
        document.getElementById("logo-header").style.fontSize="39px";
    }else {
        document.getElementsByTagName("header")[0].style.padding="13px 10px";
        document.getElementById("logo-header").style.fontSize="40px"
    }

}