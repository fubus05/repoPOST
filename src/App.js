import   { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom' ;
import Main from "./comp/main";
import Post from "./comp/post";

const App = () => {
  return (
        <Router>
          <Routes>
                <Route element={<Main/>} path="/"/>
                <Route element={<Post/>} path="/posts/:id"/>
          </Routes>
        </Router>
  );
}

export default App;
