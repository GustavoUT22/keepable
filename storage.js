const initialNotes = [
    {title: "note 1", content: "hellowwwwwwww world"},
    {title: "note 2", content: "the lide is so hard"},
    {title: "note 3", content: "I only know that I know nothing"},
    {title: "note 4", content: "I didnt do my cv yet"},
    {title: "note 5", content: "I have to do the assigment"},
    {title: "note 6", content: "I do this project"}
  ]
  
  const notesFromStorage = JSON.parse(localStorage.getItem("notes"))
  const notes = notesFromStorage || initialNotes