const loadClassChoices = async (event) => {
   let classChoiceDiv = document.getElementById("class-choice");
   fetch('/api/classes')
      .then(function (response) {
         return response.json();
      }).then(function (classes) {
         for (let i in classes) {
            let c = classes[i];
            let label, input;
            label = document.createElement('label');
            label.innerHTML = c.class_name;
            input = document.createElement('input');
            input.name = 'class-choice';
            input.type = 'radio';
            input.value = c.id;
            label.appendChild(input);
            classChoiceDiv.appendChild(label);
            classChoiceDiv.appendChild(document.createElement('br'));
         }
      });
}

loadClassChoices();

const characterCreateFormHandler = async (event) => {
   event.preventDefault();

   const charName = document.getElementById("char-name").value;
   const charAge = document.getElementById("char-age").value;
   const charHeight = document.getElementById("char-height").value;
   const charClassId =document.querySelector('input[name="class-choice"]:checked').value;
   const bgColor = document.getElementById("char-background-color").value;
   let Characters = [];

   const characterStats = {
      name: charName,
      age: charAge,
      height: charHeight,
      class_id: 1,
      background_color: bgColor
   }

   // Characters.push(characterStats);
   document.querySelector('form').reset;
   // console.log(charName, charHeight, charClass, bgColor);


   if (characterStats) {
      const response = await fetch('/api/characters/create', {
         method: 'POST',
         body: JSON.stringify(characterStats),
         headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
         console.log(response);
         //  document.location.replace('/views/layouts/character-sheet.');
      } else {
         alert('Failed to create Character');
      }
   }




};

document
   .querySelector('#character-create-form')
   .addEventListener('submit', characterCreateFormHandler);
