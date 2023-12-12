import HomePage from '../Pages/HomePage';
import QuizPage from '../Pages/QuizPage';
import adminPage from '../Pages/AdminPage';
import skinCareList from '../Pages/SkinCareList';
import ProductPage from '../Pages/ProductPage';
import AddProductPage from '../Pages/AddProductPage';
import SimilarProductsPage from '../Pages/SimilarProductsPage';
import ResultsPage from '../Pages/ResultsPage';
import LoginPage from '../Pages/LoginPage';


const routes = {
  '/': HomePage,
  '/quiz': QuizPage,
  '/admin': adminPage,
  '/user/SkinCareList': skinCareList,
  '/products': ProductPage,
  '/admin/products/add': AddProductPage,
  '/similar': SimilarProductsPage,
  '/results': ResultsPage,
  '/products/add': AddProductPage,
  '/login': LoginPage,
};

export default routes;
