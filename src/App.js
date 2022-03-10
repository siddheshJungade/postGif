
import './App.css';
import AddPost from './Components/addpost';
import Posts from './Components/Posts';
import AppContext from './Context/AppContext';

function App() {
  return (
    <AppContext>
    <div className="App">
          <AddPost />
          <Posts />
    </div>
    </AppContext>
  );
}

export default App;
