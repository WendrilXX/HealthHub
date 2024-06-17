import { useEffect, useState } from 'react';

import './styles.css';

export const Anotacoes = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [selectedNote, setSelectedNote] = useState(-1);
    const [ notes, setNotes ] = useState([]);

    const handleShowClick = () => {
        setIsHidden(false);
        document.body.style.backgroundColor = "gray";
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleHideClick();

        const newNotes = [...notes];
        const [ date, body ] = event.target;
        const note = {
            date: date.value,
            body: body.value
        }
        newNotes.push(note)
        setNotes(newNotes);
    }
    const handleHideClick = () => {
        setIsHidden(true);
        document.body.style.backgroundColor = "white";
    }

    const handleBodyClick= () => {
        setSelectedNote(-1);
        document.body.style.backgroundColor = "white";
    }

    return(
        <div className='notesPage'>
            <h1>Anotações Diárias</h1>
            <div className='anotacoesDiv'>
                {notes.map((note, index) => {
                    return(
                        <div className='anotacao' key={index} onClick={() => {
                            setSelectedNote(index);
                            document.body.style.backgroundColor = "gray";
                        }}>
                            <h3 id={index}>Data: {note.date}</h3>
                        </div>
                    )
                })}
                {selectedNote >= 0 && (
                    <div className='corpoAnotacao'>
                        <h4>Anotação dia {notes[selectedNote].date}:</h4>
                        <p>{notes[selectedNote].body}</p>
                        <button type='button' className='hideBody' onClick={handleBodyClick}>Fechar</button>
                    </div>
                )}
            </div>
            <div className='containerForm'>
                {!isHidden && 
                    <div className='anotacoesForm' onSubmit={handleSubmit} >
                        <button type='button' className='hideForm' onClick={handleHideClick}>X</button>
                        <form action="#" method='get' id='note' hidden>
                            <label htmlFor="date">
                                Data: 
                                <input type="text" id='date' placeholder='__/__/__'/>
                            </label>
                            <label htmlFor="body">
                                Corpo: 
                                <input type="text" id='body'/>
                            </label>
                            <button type='submit' className='botaoForm'>Criar</button>
                        </form>
                    </div>}           
                {isHidden && <button type='button' className='botaoForm' onClick={handleShowClick}>Criar Anotação</button>}
            </div>
        </div>
    )
};