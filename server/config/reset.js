import { pool } from './database.js';
import './dotenv.js';
import diaryData from '../data/diaryData.js';

const createDiariesTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS diaries;

    CREATE TABLE IF NOT EXISTS diaries (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      text TEXT NOT NULL,
      content TEXT NOT NULL,
      image_url TEXT,
      description TEXT,
      link TEXT
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
      text: 'INSERT INTO diaries (title, text, content, image_url, description, link) VALUES ($1, $2, $3, $4, $5, $6)'
    }

    const values = [
      diary.title,
      diary.text,
      diary.content,
      diary.image_url,
      diary.description,
      diary.link
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
