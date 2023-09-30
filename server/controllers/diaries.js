// controllers/diaries.js
import { pool } from '../config/database.js'

const getDiaries = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM diaries ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const searchDiaries = async (req, res) => {
    try {
        const { attribute, value } = req.params;
        const results = await pool.query(`SELECT * FROM diaries WHERE ${attribute} = $1 ORDER BY id ASC`, [value])
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
    getDiaries,
    searchDiaries
}
