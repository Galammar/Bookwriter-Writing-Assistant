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
        <span
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: character.description }}
        ></span>
      </span>
    );
  }

  function TableOfNames() {
    return (
      <div className={styles.tableOfNames}>
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
        <link
          rel="icon"
          href="https://primalfear.wiki.gg/images/f/f3/Fire_Feather.png"
          type="image/x-icon"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.leftSideBar}>
          <div className={styles.textedDivider}>Create new character:</div>
          <input
            type="text"
            id="name"
            value={newName}
            placeholder={'Name'}
            onChange={(e) => setNewName(e.target.value)}
          />
          <br />
          <textarea
            id="description"
            className={styles.textareaDescription}
            placeholder={
              'Description appears when hovering over the character`s name'
            }
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
              setNewName('');
              setNewDescription('');
            }}
          >
            {'Save >'}
          </button>
          <div className={styles.textedDivider}>Characters:</div>
          <TableOfNames />
        </div>

        <div className={styles.mainPart}>
          <textarea
            name="editor"
            id="editor"
            className={styles.editor}
          ></textarea>
        </div>

        <div className={styles.rightSideBar}></div>
      </main>
    </div>
  );
}
