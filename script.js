async function fetchData() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await  response.json()
    createBreedOptions(data.message)
  }
  fetchData();
  
  // Creating Breed Options
  const createBreedOptions = (breedOptions) => {
    const select = document.getElementById('select');
    select.innerHTML =`
      <select class='options' onchange= 'loadPicturesByBreed(this.value)' >
        <option>Choose a dog breed</option>
        ${Object.keys(breedOptions).map((breed) => {
          return `<option>${breed}</option>`
        }
        )}
      </select> 
    `
  }
  
  // loadPicturesByBreed
  async function loadPicturesByBreed(breedName) {
    if(breedName !== 'Choose a dog breed') {
        const response = await fetch(`https://dog.ceo/api/breed/${breedName}/images`)
        const data = await  response.json()
        let resultImg = data.message
        console.log(resultImg )
        const dogImages = document.getElementById('dog-images')
        dogImages.innerHTML = ` <div id="breed-img" style="background-image: url('${resultImg[0]}');"></div>`;
      } else {
    const dogImages = document.getElementById('dog-images')
    dogImages.innerHTML = ``;
  }
  }