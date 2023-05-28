
//Delete Note 
function deleteNote(note) {
  const index = notes.indexOf(note)
  notes.splice(index,1)

  localStorage.setItem("notes", JSON.stringify(notes))
}

//Create Element
function createNoteEl(note) {
  const li = document.createElement("li");
  li.classList.add("note");

  const noteDetails = document.createElement("div");
  noteDetails.classList.add("note-details");

  const title = document.createElement("h3");
  title.textContent = note.title;

  const content = document.createElement("p");
  content.textContent = note.content;

  const noteActions = document.createElement("div");
  noteActions.classList.add("note-actions");

  const colorButton = document.createElement("button");
  colorButton.classList.add("color-button");
  colorButton.textContent = "COLOR";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "DELETE";

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "assets/icons/delete.svg";
  deleteIcon.alt = "Delete note";

  const colorIcon = document.createElement("img");
  colorIcon.src = "assets/icons/color.svg";
  colorIcon.alt = "Change color";

  li.appendChild(noteDetails);
  li.appendChild(noteActions);
  noteDetails.appendChild(title);
  noteDetails.appendChild(content);
  noteActions.appendChild(colorButton);
  noteActions.appendChild(deleteButton);
  deleteButton.appendChild(deleteIcon);
  colorButton.appendChild(colorIcon);

  deleteButton.addEventListener("click", (event) => {
     deleteNote(note)
     renderNotes(notes)
  })
  return li;

}

//MOSTRAR LAS NOTAS
function renderNotes(notes) {
  const notesList = document.querySelector(".notes");
  notesList.innerHTML = "";

  notes.forEach((note) => {
    const noteEl = createNoteEl(note);
    notesList.appendChild(noteEl);
  });
}

renderNotes(notes);



// function addNote(noteID) {

// }
