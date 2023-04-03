import PDFPage from "../../pages/PDFPage";
import Document from "../layouts/document";
import ErrorPage from "../layouts/error-page";


const DocumentsRoutes = {data: [
        {
            path: '/document',
            element: <Document />,
            errorElement: <ErrorPage />,
            children:
            [
                {
                    path: '/document/privacy_policy',
                    element: <PDFPage name="osago.pdf"/>
                }
                ,
                {
                    path: '/document/cookie_policy',
                    element: <PDFPage name="certificate_covid.pdf"/>
                }
            ]
        }
    ]
}

export default DocumentsRoutes;