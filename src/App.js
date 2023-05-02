import logo from './logo.svg';
import Home from './components/home';
import Entry from './components/entry';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Wave from 'react-wavify';

const App = () =>  {
  const [notes, setNotes] = useState([
  
    {
      id: nanoid(),
      text: 'DAY one of vit',
      date: '28/04/22',
    }
  ]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-diary-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div>
      <Entry notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
        <Wave 
          fill='#c8a2c8'
          paused={false}
          options={{
            height: 80,
            amplitude: 30,
            speed: 0.15,
            points: 6
          }}
        />
      </div>
    </div>
  );
}

export default App;
