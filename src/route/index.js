import HomePage from '../pages/HomesPage/HomePage';
import UserPage from '../pages/UsersPage/UserPage';
import ProductPage from '../pages/ProductsPage/ProductPage';
import NotFoundPages from '../pages/NotFoundsPage/NotFoundPage';
import TypeProductPage from '../pages/TypeProductPages/TypeProductPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
export const route = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },
    {
        path: '/user',
        page: UserPage,
        isShowHeader: true,
    },
    {
        path: '/products',
        page: ProductPage,
        isShowHeader: true,
    },
    {
        path: '/:type',
        page: TypeProductPage,
        isShowHeader: true,
    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: false,
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: false,
    },
    {
        path: '/product-detail',
        page: ProductDetailPage,
        isShowHeader: true,
    },
    {
        path: '*',
        page: NotFoundPages,
    },
];
