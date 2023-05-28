const form = document.querySelector(".note-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // const title = event.target.elements.title.value
  // const content = event.target.elements.content.value
  const { title, content } = event.target.elements;
  const newNote = {
    title: title.value,
    content: content.value,
  };

  createNewNote(newNote);
  renderNotes(notes);
});
