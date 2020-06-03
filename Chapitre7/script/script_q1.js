prop1 = ['"1" />1971','"0" />1967','"0" />1969','"0" />1970','"0" />1974','"0" />1980','"0" />1984','"0" />1998','"0" />1999','"0" />2007'];
prop2 = ['"0" />1971','"0" />1967','"0" />1969','"0" />1970','"0" />1974','"0" />1980','"0" />1984','"1" />1998','"0" />1999','"0" />2007'];
prop3 = ['"0" />1971','"1" />1967','"0" />1969','"0" />1970','"0" />1974','"0" />1980','"0" />1984','"0" />1998','"0" />1999','"0" />2007'];
prop4 = ['"1" />10 millions','"0" />1 millions','"0" />mille','"0" />10 milles','"0" />1 milliard','"0" />10 milliards',
'"0" />100 milles','"0" />100 millions','"0" />100 milliards','"0" />10'];

prop = [prop1,prop2,prop3,prop4];

tq = ['q1', 'q2','q3','q4'];
tn = ['"q1"','"q2"','"q3"','"q4"'];
tnb = [0,0,0,0,0,0,0,0,0,0];
nbr=10;

function init(m)
{
    quest = document.getElementById(tq[m]);
    quest.innerHtml="";
    code = "";
    for (i=0; i<nbr; i++)
    {
        tnb[i]=0;
    }
    for (i=0; i<nbr; i++)
    {
        n = Math.floor(Math.random() * nbr);
        while (tnb[n]>0)
        {
            n = Math.floor(Math.random() * nbr);
        }
        code = code +'<input name='+tn[m]+' type="radio" value='+prop[m][n]+'<br>';
        tnb[n]=1;
    }
    quest.innerHTML = code;
}

function verification(nb)
{
    var somme=0;
    var tab = document.getElementsByName("sq");
    var afrep = document.getElementById("message");
    for (var question=1; question<=nb; question++)
    {
        var tableau_de_questions = document.forms['quizz'].elements['q'+question];
        var mauvais = true;
        for(var i=0; i<tableau_de_questions.length;i++)
        {
            if (tableau_de_questions[i].checked && tableau_de_questions[i].value=="1")
            {
                somme++;
                mauvais=false;
                tab[question-1].innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
            }
            else
            {
                tableau_de_questions[i].checked = false;
            }
        }
        if (mauvais)
        {
            tab[question-1].innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
            init(question-1);
        }
    }
    if (somme==nb)
    {
        afrep.innerHTML="<span class='reponse_juste'>"+"Toutes les réponses sont correctes ! Vous pouvez passer à la suite : " 
                +"<a href=ie_exercice1.1.html target='_blank'><b class='abas'>Exercice 1.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c7p1q1',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
