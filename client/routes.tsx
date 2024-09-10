import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import UserForm from './components/UserForm.tsx'
import Layout from './components/Layout.tsx'
import Profile from './components/Profile.tsx'
import Feed from './components/Feed.tsx'
import PostDetails from './components/PostDetail.tsx'
import PostForm from './components/PostForm.tsx'
import SignInFirst from './components/SignInFirst.tsx'
import Following from './components/Following.tsx'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<App />} />
    <Route
      path="/userForm"
      element={<UserForm userID={undefined} isEditing={undefined} />}
    />
    <Route path="/user/:id" element={<Profile />} />
    <Route path="/feed" element={<Feed />} />
    <Route path="/posts/:id" element={<PostDetails />} />
    <Route path="/postForm" element={<PostForm />} />
    <Route path="/signinfirst" element={<SignInFirst />} />
    <Route path="/following" element={<Following />} />
  </Route>,
)

export default routes
