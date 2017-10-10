/**
 * Created by Laptop on 6/20/2017.
 */
//primul script
console.info("salut");

function getInfo(name) {
    var msg = "hello" + " " + name+ ","+ "welcome at fastTrackIT.";
    return msg;
}
var info = getInfo("Razvan");
console.info(info);

console.info (2+3);

function adunaNumere (a,b) {
    var rezultat = a + b;
    rezultat = rezultat *0.9;
    return rezultat;
}
var calculat = adunaNumere (2,8);
console.info (calculat);

function numaratoare(a,b,c,d,e) {
    console.info(a);
    console.info(b);
    console.info(c);
    console.info(d);
    console.info(e);
    var rez;
    rez = a+b+c+d+e;
    return rez;
}
var rezultatlaapelare = numaratoare(1,2,3,4,5);
console.info(rezultatlaapelare);

function nume(Closca)  {
    var msg="closca cu pui are 3 oua:"+Closca;
    return msg;

}

var af=nume("oulet ousor ou");
console.info(af);

console.info("cloceste ouale si ies 3 pui la adunare")

function adunarea(a,b,c){
    var rez;
    rez=a+b+c
    return rez;

}
var rezulta=adunarea(1,1,1);
console.info(rezulta);

console.info("pe care ii cheama");

function cuib(nume_pui) {
    var nr="cu prima litera mare:"+" " + nume_pui
    return nr
}

var x=cuib("puiut"+ " "+"puisor"+ " "+"pui");
console.info(x)



