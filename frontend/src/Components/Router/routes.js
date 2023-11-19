import HomePage from '../Pages/HomePage';
import QuizPage from '../Pages/QuizPage';
import adminPage from '../Pages/AdminPage';
import ProductPage from '../Pages/ProductPage';
import AddProductPage from '../Pages/AddProductPage';


const routes = {
  '/': HomePage,
  '/quiz': QuizPage,
  '/admin': adminPage,
  '/product': ProductPage,
  '/products/add': AddProductPage
};

export default routes;
