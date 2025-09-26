const clearButton = document.getElementById('clear-storage');

clearButton.addEventListener('click', () => {
    localStorage.clear();
    displayLocalStorageItems();
    alert('Local storage cleared successfully.');
});

const displayLocalStorageItems = () => {
    const outputDiv = document.getElementById('storage-output');

    // clear previous content if any
    outputDiv.innerHTML = '';

    if (typeof Storage !== 'undefined') {
        if (localStorage.length === 0) {
            outputDiv.innerHTML = `<p>No items found in localstorage</p>`;
            return;
        }
        const ul = document.createElement('ul');

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            const li = document.createElement('li');
            li.textContent = `Key: ${key}, Value ${value}`;
            ul.appendChild(li);
        }
        outputDiv.appendChild(ul);
    } else {
        outputDiv.innerHTML = `<p>Sorry, your browser does not support Web Storage</p>`;
    }
};

window.onload = displayLocalStorageItems();
