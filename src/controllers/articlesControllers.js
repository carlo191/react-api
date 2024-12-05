articlesData = require("../data/articles");

// Index - Recupera la lista di tutti i post

function index(req, res) {
  res.json(articlesData);
}

// Show - Recupera i dettagli di un post specifico per ID
function show(req, res) {
  const id = parseInt(req.params.id);
  const post = articlesData.find((article) => article.id === id);

  if (!post) {
    const err = new Error(`id post not found`);
    err.code = 404;
    throw err;
  }

  res.json(article);
}

// Store - Crea un nuovo post
function store(req, res) {
  // Creiamo un nuovo id incrementando l'ultimo id presente
  const newId = articlesData[articlesData.length - 1].id + 1;
  // Creiamo un nuovo oggetto pizza
  const newArticle = {
    id: newId,
    title: req.body.title,

    content: req.body.content,

    image: req.body.image,
    category: req.body.category,
  };
  // Aggiungiamo il nuovo post
  postsData.push(newArticle);
  // controlliamo
  console.log(newArticle);

  // Restituiamo lo status corretto e il post appena creato
  res.status(201);
  res.json(newArticle);
}
// Update - Aggiorna un post esistente tramite ID
function update(req, res) {
  /* Recupero l'id e lo trasformo in numero */
  const id = parseInt(req.params.id);

  /* Cerco il post tramite l'id */
  const article = articlesData.find((article) => article.id === id);

  /* Faccio il controllo*/
  if (!article) {
    const err = new Error(`id post not found`);
    err.code = 404;
    throw err;
  }

  /* Aggiorno il post */
  article.titolo = req.body.title;
  article.contenuto = req.body.content;
  article.immagine = req.body.image;
  article.tags = req.body.category;

  /* Stampo l'Array in console */
  console.log(articlesData);

  /* Genero il post aggiornato */
  res.json(article);
}

// Delete - Elimina un post tramite ID
function destroy(req, res) {
  const id = parseInt(req.params.id);
  const article = articlesData.find((article) => article.id === id);

  if (!article) {
    const err = new Error(`id post not found`);
    err.code = 404;
    throw err;
  }
  const postIndex = postsData.indexOf(article);
  articlesData.splice(articleIndex, 1);

  console.log(articlesData);

  res.sendStatus(204);
}

module.exports = { index, show, store, update, destroy };
