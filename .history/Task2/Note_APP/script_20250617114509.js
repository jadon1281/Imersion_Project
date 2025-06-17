document.querySelector('.add').addEventListener('click', () => {
  const notesList = document.querySelector('.notes-list');

  const newNote = document.createElement('div');
  newNote.className = 'note pink';
  newNote.textContent = 'New note added!';

  notesList.appendChild(newNote);
});
