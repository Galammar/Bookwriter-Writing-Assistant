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

  class Chapter {
    title;
    id;
    notes;
    content = '';

    constructor(title, notes) {
      this.title = title;
      this.id = chapters.length;
      this.notes = notes;
    }
  }

  const [characters, setCharacters] = useState([]);

  const [newName, setNewName] = useState('');

  const [newDescription, setNewDescription] = useState('');

  const [chapters, setChapters] = useState([]);

  const [newTitle, setNewTitle] = useState('');

  const [newNotes, setNewNotes] = useState('');

  const [currentID, setCurrentID] = useState(Number);

  const [currentChapter, setCurrentChapter] = useState('');

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

  function Title({ chapter }) {
    return (
      <span>
        {'['}{' '}
        <span
          className={styles.name}
          onClick={() => setCurrentChapter(chapters[chapter.id].content)}
        >
          {chapter.title}
        </span>{' '}
        {']'}
        <span
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: chapter.notes }}
        ></span>
      </span>
    );
  }

  function TableOfNames() {
    return (
      <div className={styles.table}>
        {characters.map((character, index) => (
          <Name character={character} key={index} />
        ))}
      </div>
    );
  }

  function TableOfChapters() {
    return (
      <div className={styles.table}>
        {chapters.map((chapter, index) => (
          <Title chapter={chapter} key={index} />
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
        <div className={styles.sideBar}>
          <div className={styles.topTextedDivider}>Create new character:</div>
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
            className={styles.textarea}
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
            value={chapters[currentID].content}
            onChange={(e) => {
              chapters[currentID].content = e.target.value;
            }}
          ></textarea>
          <button>{'Save >'}</button>
        </div>

        <div className={styles.sideBar}>
          <div className={styles.topTextedDivider}>Create new chapter:</div>
          <input
            type="text"
            id="title"
            value={newTitle}
            placeholder={'Title'}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <br />
          <textarea
            id="notes"
            className={styles.textarea}
            placeholder={'Notes appear when hovering over the chapter`s name'}
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
          ></textarea>
          <br />
          <button
            onClick={() => {
              if (!newTitle == '') {
                setChapters(
                  chapters,
                  chapters.push(new Chapter(newTitle, newNotes))
                );
              } else {
                alert('First enter a title for your chapter!');
              }
              setNewTitle('');
              setNewNotes('');
            }}
          >
            {'Save >'}
          </button>
          <div className={styles.textedDivider}>Chapters:</div>
          <TableOfChapters />
        </div>
      </main>
    </div>
  );
}
