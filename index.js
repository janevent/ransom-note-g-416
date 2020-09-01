function buildHistogram(magazine){
  let sortedMagazine = magazine.sort();
  let magazineHistorgram = {};
  sortedMagazine.forEach( (letter) => {
    if(letter in magazineHistorgram ){
      magazineHistorgram[letter]++;
    }else{
      magazineHistorgram[letter] = 1;
    }
  })
  
  return magazineHistorgram
}

function canBuildNote(){
  
}