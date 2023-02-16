// delete character
const delCharacter = async (event) => {

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/characters/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete character');
      }
    }
    console.log('yay delete');
  };
  
  document
  .querySelector('.char-list')
  .addEventListener('click', delCharacter);