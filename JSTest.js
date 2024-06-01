const arrNFt = [] ; // create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFt (name , height, weight, eyeColor,job) {

  const nft  = { 
    'name': name,
    'height': height ,
    'weight': weight,
    'eyeColor': eyeColor,
    'job': job
  }
 arrNFt.push(nft);  
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for ( i = 0 ; i < arrNFt.length ; i++) {
    console.log("Name: " + arrNFt[i].name);
    console.log("Height: " + arrNFt[i].height);
    console.log("Weight: " + arrNFt[i].weight);
    console.log("Eyecolor: " + arrNFt[i].eyeColor);
    console.log("Job: " + arrNFt[i].job);
  }
   
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\n" + arrNFt.length);
}

// call your functions below this line
mintNFt("Naman" , 6 , "65 kg" , "Blue" , "student");
listNFTs();
getTotalSupply();
