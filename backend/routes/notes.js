const router = require("express").Router();
const pool = require("../db");

/* Create note */
router.post("/", async (req, res) => {
  const { content } = req.body;
  const newNote = await pool.query(
    "INSERT INTO notes (content) VALUES ($1) RETURNING *",
    [content]
  );
  res.json(newNote.rows[0]);
});

/* Get all notes */
router.get("/", async (req, res) => {
  const allNotes = await pool.query("SELECT * FROM notes ORDER BY id DESC");
  res.json(allNotes.rows);
});

/* Delete note */
router.delete("/:id", async (req, res) => {
  await pool.query("DELETE FROM notes WHERE id = $1", [req.params.id]);
  res.json("Note deleted");
});

module.exports = router;
