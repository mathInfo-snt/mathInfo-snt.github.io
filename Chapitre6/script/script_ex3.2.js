function derexo()
{
    if(typeof localStorage!='undefined') 
    {
        localStorage.setItem('c6p3e2',1);
    }
}

var prop = ['<b style="color:red;">a = 260 km</b>, <b style="color:blue;">b = 174 km</b> et <b style="color:green;">c = 327 km</b>',
            '<b style="color:red;">a = 284 km</b>, <b style="color:blue;">b = 340 km</b> et <b style="color:green;">c = 432 km</b>',
            '<b style="color:red;">a = 340 km</b>, <b style="color:blue;">b = 517 km</b> et <b style="color:green;">c = 170 km</b>',
            '<b style="color:red;">a = 490 km</b>, <b style="color:blue;">b = 433 km</b> et <b style="color:green;">c = 292 km</b>'];
var rep1 = ["dijon","nancy","nantes","bordeaux"];

var nb = [0];

nbp = 4;

function init1()
{
    var n = Math.floor(Math.random() * nbp);
    sol=prop[n];
    document.write(sol);
    nb[0]=n;
}

function verif1(nom_form,nom_zone,nu)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var repo = document.forms[nom_form].elements[nom_zone].value;
    repo = repo.toLowerCase();
    repo=repo.replace(/ /g,"");
    if (repo==rep1[nb[nu]])
    {
        sp[0].innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp[0].innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
    }
}

