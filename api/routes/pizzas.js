const express = require('express');
const {
  readAllPizzas,
  readOnePizza,
  createOnePizza,
  deleteOnePizza,
  updateOnePizza,
} = require('../models/pizzas');
const { authorize, isAdmin } = require('../utils/auths');

const router = express.Router();

/* Read all the pizzas from the menu
   GET /pizzas?order=title : ascending order by title
   GET /pizzas?order=-title : descending order by title
*/
router.get('/', (req, res) => {
  const allPizzasPotentiallyOrdered = readAllPizzas(req?.query?.order);

  return res.json(allPizzasPotentiallyOrdered);
});

// Read the pizza identified by an id in the menu
router.get('/:id', (req, res) => {
  const foundPizza = readOnePizza(req.params.id);

  if (!foundPizza) return res.sendStatus(404);

  return res.json(foundPizza);
});

// Create a pizza to be added to the menu.
router.post('/', authorize, isAdmin, (req, res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const content = req?.body?.content?.length !== 0 ? req.body.content : undefined;

  if (!title || !content) return res.sendStatus(400); // error code '400 Bad request'

  const createdPizza = createOnePizza(title, content);

  return res.json(createdPizza);
});

// Delete a pizza from the menu based on its id
router.delete('/:id', authorize, isAdmin, (req, res) => {
  const deletedPizza = deleteOnePizza(req.params.id);

  if (!deletedPizza) return res.sendStatus(404);

  return res.json(deletedPizza);
});

// Update a pizza based on its id and new values for its parameters
router.patch('/:id', authorize, isAdmin, (req, res) => {
  const title = req?.body?.title;
  const content = req?.body?.content;

  if ((!title && !content) || title?.length === 0 || content?.length === 0) {
    return res.sendStatus(400);
  }

  const updatedPizza = updateOnePizza(req.params.id, { title, content });

  if (!updatedPizza) return res.sendStatus(404);

  return res.json(updatedPizza);
});

module.exports = router;
