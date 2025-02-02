import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'

import SignInForm from './components/SignIn/SignInForm'
import SignUpForm from './components/Signup/SignUpForm'
import ListAllTasks from './components/TaskLists/ListAllTasks'
import ListAssignedTasks from './components/TaskLists/ListAssignedTasks'
import ListMyTasks from './components/TaskLists/ListMyTasks'
import GetTaskDetails from './components/GetTaskDetails/GetTaskDetails'
import ListTaskComments from './components/ListTaskComments/ListTaskComments'
import CreateTaskForm from './components/CreateTask/CreateTaskForm'
import TaskHistory from './components/TaskLists/TaskHistory'
import Dashboard from './components/Dashboard/Dashboard'
import EditTaskForm from './components/EditTask/EditTaskForm'
import Home from './components/Home'
import App from './App'

import './index.css'

const BASE_URL = import.meta.env.BASE_URL
if (!BASE_URL) {
    throw new Error('BASE_URL is not defined')
}

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: 'signup',
                    element: <SignUpForm />,
                },
                {
                    path: 'signin',
                    element: <SignInForm />,
                },
                {
                    path: 'tasks',
                    element: <ListAllTasks />,
                },
                {
                    path: 'assigned-tasks/mine',
                    element: <ListAssignedTasks />,
                },
                {
                    path: 'tasks/mine',
                    element: <ListMyTasks />,
                },
                {
                    path: 'tasks/:taskId',
                    element: <GetTaskDetails />,
                },
                {
                    path: 'tasks/:taskId/comments',
                    element: <ListTaskComments />,
                },
                {
                    path: 'tasks/create',
                    element: <CreateTaskForm />,
                },
                {
                    path: 'tasks/history',
                    element: <TaskHistory />,
                },
                {
                    path: 'dashboard',
                    element: <Dashboard />,
                },
                {
                    path: 'tasks/:taskId/update',
                    element: <EditTaskForm />,
                },
            ],
        },
    ],
    {
        basename: BASE_URL,
    }
)

const rootElement = document.getElementById('root')
if (!rootElement) {
    throw new Error('root element was not found!')
}

// Log out the environment variables while you are developing and deploying
// This will help debug things
console.table(import.meta.env)

const root = ReactDOM.createRoot(rootElement)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
