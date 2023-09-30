import { pool } from './database.js';
import './dotenv.js';
import diaryData from '../data/diaryData.js';

const createDiariesTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS diaries;

    CREATE TABLE IF NOT EXISTS diaries (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_on DATE NOT NULL,
      author TEXT NOT NULL
    )
  `;

  try {
    await pool.query(createTableQuery);
    console.log('🎉 diaries table created successfully');
  } catch (err) {
    console.error('⚠️ error creating diaries table', err);
  }
}

const seedDiariesTable = async () => {
  await createDiariesTable();

  diaryData.forEach((diary) => {
    const insertQuery = {
      text: 'INSERT INTO diaries (title, content, created_on, author) VALUES ($1, $2, $3, $4)'
    }

    const values = [
      diary.title,
      diary.content,
      diary.created_on,
      diary.author
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting diary', err);
        return;
      }
      console.log(`✅ ${diary.title} added successfully`);
    });
  });
}

seedDiariesTable();
