import HomePage from '../Pages/HomePage';
import QuizPage from '../Pages/QuizPage';
import adminPage from '../Pages/AdminPage';
import skinCareList from '../Pages/SkinCareList';
import ProductPage from '../Pages/ProductPage';
import AddProductPage from '../Pages/AddProductPage';
import SimilarProductsPage from '../Pages/SimilarProductsPage';
import ResultsPage from '../Pages/ResultsPage';
import DiagnosisPage from '../Pages/DiagnosisPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import TermsAndConditionsPage from '../Pages/TermsAndConditionsPage';


const routes = {
  '/': HomePage,
  '/quiz': QuizPage,
  '/admin': adminPage,
  '/user/SkinCareList': skinCareList,
  '/products': ProductPage,
  '/admin/products/add': AddProductPage,
  '/similar': SimilarProductsPage,
  '/results': ResultsPage,
  '/diagnosis': DiagnosisPage,
  '/products/add': AddProductPage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/t-and-c': TermsAndConditionsPage
};

export default routes;
