
window.onscroll = () => scrollFunction();
const scrollFunction = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("AdrianBrand").style.fontSize = "1.25rem";
      document.getElementById("firstNav").style.background = 'linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0.25) 100%)';
      document.getElementById("hiddenbtn").style.background = "white"
    } else {
      document.getElementById("AdrianBrand").style.fontSize = "2.25rem";
      document.getElementById("firstNav").style.background = "transparent" ;
      document.getElementById("hiddenbtn").style.background = "transparent";

    }
  }