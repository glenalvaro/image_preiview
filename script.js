window.onload = () => {
  
  const frame = document.querySelector('.frame');
  const image = document.querySelector('.image');
  const name = document.querySelector('.name');
  const types = document.querySelector('.type');
  
  // button 
  const button = document.querySelector('#file');
  button.addEventListener('change', function() {
    frame.style.background = 'none';
    const file = this.files[0];
    name.innerText = filter(file.name);
    types.innerText = getType(file);
    renderImage(file);
  })
  
  function filter(filename) {
    let limit = 15;
    let file = filename.split('.');
    let name = `${file[0].substr(0, limit).trim().toLowerCase()}`;
    let ekstension = file[file.length - 1].trim().toLowerCase();
    return (filename.length > limit) ? `${name}.${ekstension}` : filename;
  }
  
  function getType(file) {
    let type = file.type.split('/')[0].trim().toLowerCase();
    let slice = file.name.split('.');
    let ekstension = slice[slice.length - 1].trim().toLowerCase();
    return `${type}/${ekstension}`;
  }
  
  function renderImage(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      image.setAttribute('src', reader.result);
    }
  }
  
}
