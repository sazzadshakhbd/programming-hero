import Country from "../components/Country";

const { createBrowserRouter } = require("react-router-dom");
const { default: Countries } = require("../components/Countries");

export const router = createBrowserRouter([
    {
        path: '/',
        loader: async () => {
            return fetch('https://restcountries.com/v3.1/all');
        },
        element: <Countries></Countries>
    },
    {
        path: '/country/:name',
        loader: async ({ params }) => {
            return fetch(`https://restcountries.com/v3.1/name/${params.name}`)
        },
        element: <Country></Country>
    }
]);