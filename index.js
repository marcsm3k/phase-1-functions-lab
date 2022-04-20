
  function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
  }

  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    
    return 264 * distanceFromHqInBlocks(someValue);
  }
  
  function distanceTravelledInFeet(start, destination) {
      
    return 264 * Math.abs(start - destination);
    
  }

  function calculatesFarePrice(start, destination) {
      distanceTravelledInFeet(start, destination); 

    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0; 
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && 
            distanceTravelledInFeet(start,destination) < 2000) {
        return (distanceTravelledInFeet(start, destination)- 400) * .02;
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && 
            distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    }
    else if(distanceTravelledInFeet(start,destination) > 2500) {
        return 'cannot travel that far';
    }
  }