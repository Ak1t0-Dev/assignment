import './App.css';
import data from './data.json'
import { UserCard } from './components/UserCard/UserCard';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <main className="main">
      <Header className="header" />
      <div className="usercard-container">
        {
          data.map((item) => {
            return < UserCard data={item} key={item.id} />
          })
        }
      </div>
      <Footer className="footer" />
    </main>
  );
}

export default App;
