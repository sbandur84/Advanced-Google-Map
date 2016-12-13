wayPointsInput = document.getElementsByTagName("input");
        for ( var i = 0; i < wayPointsInput.length; i++){
        	if ( wayPointsInput[i].className == "waypointInput" ){
        		waypts.push({
              			location: wayPointsInput[i].value,
              			stopover: true
        		}
        	}
        
        }
