
const characterCreateFormHandler = async (event) => {
   event.preventDefault();

   const charName = document.getElementById("char-name").value;
   const charHeight = document.getElementById("char-height").value;
   const charClass = document.getElementById("char-class").value;
   const bgColor = document.getElementById("char-background-color").value;


   
   console.log(charName, charHeight, charClass, bgColor);
   // if (email && password) {
   //   const response = await fetch('/api/users/login', {
   //     method: 'POST',
   //     body: JSON.stringify({ email, password }),
   //     headers: { 'Content-Type': 'application/json' },
   //   });

   //   if (response.ok) {
   //     document.location.replace('/');
   //   } else {
   //     alert('Failed to log in');
   //   }
   // }
};

document
   .querySelector('#character-create-form')
   .addEventListener('submit', characterCreateFormHandler);
