function incDec(plusMinus){
                var plusMinus = parseInt(plusMinus);
                var currentLife = parseInt(document.getElementById("Calories").innerHTML) + plusMinus;

			if (currentLife > 20000)
			{
		    currentLife = 20000;
            }
            else
            {
                document.getElementById("Calories").innerHTML = currentLife;

            }

        }

function reset() {

        document.getElementById("Calories").innerHTML = 0;

        }