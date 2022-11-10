import {createBrowserRouter,createRoutesFromElements, Route} from 'react-router-dom'

import ErrorPage from './components/ErrorPage'
import Contact, {loader as loaderContact, action as actionContact} from './routes/Contact'
import EditContact, {action as actionEdit} from './routes/EditContact'
import IndexContact from './routes/IndexContact'
import Root, {action as actionRoot, loader as loaderRoot} from './routes/Root'
import {action as actionDestroy} from './routes/Destroy'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path = '/'
            element = {<Root />}
            loader = {loaderRoot}
            action = {actionRoot}
            errorElement = {<ErrorPage/>}
        >
            <Route errorElement = {<ErrorPage/>}>
                <Route index element={<IndexContact/>} />
                <Route
                    path='contacts/:contactId'
                    element = {<Contact/>}
                    loader = {loaderContact}
                    action = {actionContact}
                />
                <Route 
                    path = 'contacts/:contactId/edit'
                    element = {<EditContact/>}
                    loader = {loaderContact}
                    action = {actionEdit}
                />
                <Route 
                    path = 'contacts/:contactId/destroy'
                    action = {actionDestroy}
                />
            </Route>
        </Route>
    )
);

export default router;