import './App.css';
import InboxMail from './components/InboxMail/InboxMail'
import Navbar from './components/Navbar/Navbar'
import EmailGenerateBox from './components/EmailGenerateBox/EmailGenerateBox'


function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <Navbar />
          <EmailGenerateBox />
        </div>
      </div>
      <InboxMail />
    </>
  );
}

export default App;
