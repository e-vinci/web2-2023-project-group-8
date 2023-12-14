import HomePage from '../Pages/HomePage';
import QuizPage from '../Pages/QuizPage';
import adminPage from '../Pages/AdminPage';
import skinCareList from '../Pages/SkinCareList';
import ProductPage from '../Pages/ProductPage';
import AddProductPage from '../Pages/AddProductPage';
import SimilarProductsPage from '../Pages/SimilarProductsPage';
import DiagnosisPage from '../Pages/DiagnosisPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';


const routes = {
  '/': HomePage,
  '/quiz': QuizPage,
  '/admin': adminPage,
  '/user/SkinCareList': skinCareList,
  '/products': ProductPage,
  '/admin/products/add': AddProductPage,
  '/similar': SimilarProductsPage,
  '/results': DiagnosisPage,
  '/products/add': AddProductPage,
  '/login': LoginPage,
  '/register': RegisterPage,
};

export default routes;
