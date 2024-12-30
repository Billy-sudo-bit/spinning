const winnerList = document.getElementById('winnerList');
const removeButton = document.getElementById('removeButton');

// Remove the selected winner from the list
let selectedWinner = null;

winnerList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        // Reset the previously selected winner's style
        if (selectedWinner) {
            selectedWinner.style.backgroundColor = '';
        }

        // Set the new selected winner
        selectedWinner = e.target;
        selectedWinner.style.backgroundColor = '#f0f0f0';
    }
});

removeButton.addEventListener('click', function () {
    if (selectedWinner) {
        selectedWinner.remove(); // Remove the selected winner
        selectedWinner = null; // Reset the selected winner
    } else {
        alert('Please select a winner to remove.');
    }
});
