import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  class Character {
    name;
    description;

    constructor(name, description) {
      this.name = name;
      this.description = description;
    }
  }

  const [characters, setCharacters] = useState([]);

  const [newName, setNewName] = useState('');

  const [newDescription, setNewDescription] = useState('');

  function Name({ character }) {
    return (
      <span>
        {'['} <span className={styles.name}>{character.name}</span> {']'}
        <span className={styles.description}>{character.description}</span>
      </span>
    );
  }

  function TableOfNames() {
    return (
      <div>
        {characters.map((character, index) => (
          <Name character={character} key={index} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Bookwriter | Writing Assistant</title>
      </Head>

      <main>
        <input
          type="text"
          id="name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <br />
        <textarea
          id="description"
          cols="30"
          rows="10"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        ></textarea>
        <br />
        <button
          onClick={() => {
            if (!newName == '') {
              setCharacters(
                characters,
                characters.push(new Character(newName, newDescription))
              );
            } else {
              alert('First enter a name for your character!');
            }
            console.log(characters);
          }}
        >
          {'Save >'}
        </button>
        <TableOfNames />
      </main>
    </div>
  );
}
