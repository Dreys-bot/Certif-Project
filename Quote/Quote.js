const couleur = ["blue", "green" ,"pink", "orange"];
        const button = document.getElementById("tweet-quote");
        const citation = document.querySelectorAll("#text p");
        const auteur =  document.querySelectorAll("#author p");

        const newQuote = document.getElementById("new-quote");

          
        var i = Math.floor(Math.random() * couleur.length);  
          
          citation[i].style.opacity = 1;
          citation[i].style.color = couleur[i];

          auteur[i].style.opacity = 1;
          auteur[i].style.color = couleur[i];
          
          document.body.style.background = couleur[i];
          button.style.background = couleur[i];
           newQuote.style.background = couleur[i];
          
        newQuote.addEventListener('click', function(){
          var i = Math.floor(Math.random() * couleur.length);//Génère un index aléatoire pour le tableau de couleurs

          document.body.style.background = couleur[i];
          button.style.background = couleur[i];
          newQuote.style.background = couleur[i];
          for(let j=0; j<auteur.length; j++){
            citation[j].style.opacity = 0;
            auteur[j].style.opacity = 0;
          }

          citation[i].style.opacity = 1;
          citation[i].style.color = couleur[i];

          auteur[i].style.opacity = 1;
          auteur[i].style.color = couleur[i];


          });

