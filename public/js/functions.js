function do_colors(){
			//Culoarea roz

			var random_number = Math.floor(Math.random()*2);
			if(random_number == 1){
				style="background-image:url(images/darker.png)";
			} else {
				style="background-image:url(images/lighter.png)";
			}

			if((i == 2 && j == 2) || (i == 3 && j == 3) || (i == 4 && j == 4) || (i == 5 && j == 5)
				|| (i == 11 && j == 11) || (i == 12 && j == 12) || (i == 13 && j == 13) || (i == 14 && j == 14)
				|| (i == 2 && j == 14) || (i == 3 && j == 13) || (i == 4 && j == 12) || (i == 5 && j == 11)
				|| (i == 14 && j == 2) || (i == 13 && j == 3) || (i == 12 && j == 4) || (i == 11 && j == 5)){
				style = 'background-color:#f4cecd';
			}

			//Culoarea albastra
			if((i == 2 && j == 6) || (i == 2 && j == 10) ||
				(i == 6 && j == 2) || (i == 6 && j == 6) || (i == 6 && j == 10) || (i == 6 && j == 14) ||
				(i == 10 && j == 2) || (i == 10 && j == 6) || (i == 10 && j == 10) || (i == 10 && j == 14) ||
				(i == 14 && j == 6) || (i == 14 && j == 10)){
					style = 'background-color:#66c9e8';
			}

			//Culoarea rosie
			if((i == 1 && j == 1) || (i == 1 && j == 8) || (i == 1 && j == 15) || (i == 8 && j == 1) || (i == 15 && j == 1) || (i == 8 && j == 15) || (i == 15 && j == 8) || (i == 15 && j == 15)){
				style = 'background-color:#ee3940';
			}

			//Culoarea verde #b8cc69
			if(
				(i == 1 && j == 4) || (i == 1 && j == 12) 
				|| (i == 3 && j == 7) || (i == 3 && j == 9) 
				|| (i == 4 && j == 8) 
				|| (i == 4 && j == 1) || (i == 4 && j == 15) 
				|| (i == 7 && j == 3) || (i == 8 && j == 4) || (i == 9 && j == 3) 
				|| (i == 7 && j == 7) || (i == 7 && j == 9) 
				|| (i == 9 && j == 7) || (i == 9 && j == 9) 
				|| (i == 7 && j == 13) || (i == 9 && j == 13) || (i == 8 && j == 12) 
				|| (i == 12 && j == 1) || (i == 12 && j == 15) 
				|| (i == 12 && j == 8) || (i == 13 && j == 7) || (i == 13 && j == 9)
				|| (i == 15 && j == 4)  || (i == 15 && j == 12) 
			){
				style = 'background-color:#b8cc69';
			}
    	}