prop1 = ['"1" />4','"0" />1','"0" />2','"0" />3','"0" />5','"0" />31','"0" />27','"0" />24'];
prop2 = ['"1" />31','"0" />4','"0" />6','"0" />24','"0" />27','"0" />12','"0" />2','"0" />3'];
prop3 = ['"1" />20 200 km','"0" />20 000 km','"0" />14 000 km','"0" />3 880 km','"0" />2 000 km',
            '"0" />1 400 km','"0" />24 000 km','"0" />12 000 km'];

prop = [prop1,prop2,prop3];

tq = ['q1', 'q2','q3'];
tn = ['"q1"','"q2"','"q3"'];
tnb = [0,0,0,0,0,0,0,0];
nbp = 8;

function init(m)
{
    quest = document.getElementById(tq[m]);
    quest.innerHtml="";
    code = "";
    for (i=0; i<nbp; i++)
    {
        tnb[i]=0;
    }
    for (i=0; i<nbp; i++)
    {
        n = Math.floor(Math.random() * nbp);
        while (tnb[n]>0)
        {
            n = Math.floor(Math.random() * nbp);
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
                +"<a href=gl_exercice3.1.html target='_blank'><b class='abas'>Exercice 3.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c6p3q3',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
