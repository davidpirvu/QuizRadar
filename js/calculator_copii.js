function tatiCatFacAdunareaNumerelor(a,b) {
    console.info("primul numar este"+ a)
    console.info ("al doilea este"+b)
    var max=b;
    var min=a;
    if(a > b) {
        console.info(a+ " este mai mare ca "+ b);
        max=a;
        min=b;
    }

    console.info("numarul cel mai mare este"+ max);
    console.info("vom numara" + min +"degetele");

    //min=min-1

    for(min--;min >= 0; min-- ) {
      //aici vrem sa numaram
        max++;
        console.info("avem " + max+ " degetele, au ramas "+ min + " degete");

    }
    return max;



}
var rezultat=tatiCatFacAdunareaNumerelor(3,5);

console.info(rezultat);

rezultat=tatiCatFacAdunareaNumerelor(7,2);




