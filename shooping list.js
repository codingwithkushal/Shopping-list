
    
// function addItem() {
//     const itemValue = document.getElementById('itemInput').value;

//     if (itemValue) {

//         const newDiv = document.createElement('div');
//         newDiv.className = 'item d-flex justify-content-between align-items-center mb-2 p-2 bg-white border rounded';

//         newDiv.innerHTML = `
//             <span>${itemValue}</span>
//             <button class="btn btn-danger btn-sm remove-item">X</button>`;


//         document.getElementById('itemContainer').appendChild(newDiv);

       
//         document.getElementById('itemInput').value = '';

//         newDiv.querySelector('.remove-item').addEventListener('click', function() {
//             newDiv.remove();
//         });
//         document.getElementById('removedAll').addEventListener('click', function () {
//             newDiv.remove();
//         })
//     }
// }


// document.getElementById('itemInput').addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         addItem();
//     }
// });

// document.getElementById('addToCartButton').addEventListener('click', addItem);



// function itemInputs(e) {
//     if (e.code === 'Digit1') {
//         console.log('Number 1 key was pressed.');
//       }
//   }

// itemInputs.addEventListener('keypress', onkeydown)



// const itemInput = document.getElementById('itemInput');
// const heading = document.querySelector('h1');

// function onInput(e) {
//     heading.textContent = e.target.value;
// }

// itemInput.addEventListener('input', onInput);

// const form = document.getElementById('item-form');

// function onSubmit(e) {
//     e.preventDefault();

//     const items = document.getElementById('item-input').value;
//     const prority = document.getElementById('priority-input');
//     console.log(items, prority.value);
  
// }

// form.addEventListener('submit', onSubmit);