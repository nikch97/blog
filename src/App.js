
import './App.css';
import Login from './screens/login';
import SignUp from './screens/signUp';
import { BrowserRouter, Route, Routes, Link, } from 'react-router-dom'
import Profile from './screens/profile';
import AddArticle from './screens/addArticle';
import Articles from './screens/articles';
import ArticleDetail from './screens/articleDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {localStorage.getItem('loginUser') &&
          <nav>
            {/* <Link to="login">Login</Link> */}
            <Link to="profile">Profile</Link>
            <Link to="addArticle">Add Article</Link>
            <Link to="articles">Articles</Link>
            {/* <Link to="articleDetail">Article Detail</Link> */}
          </nav>}
        <Routes>
          <Route path="/" element={<SignUp />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="addArticle" element={<AddArticle />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articleDetail" element={<ArticleDetail />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
