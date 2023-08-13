import './App.css';
import Sidebar from './components/js/Sidebar';
import Feed from './components/js/Feed';
import Widgets from './components/js/Widgets';

function App() {
  return (
    <div className="app">
          <Sidebar />
          <Feed />
          <Widgets />
    </div>
  );
}

export default App;