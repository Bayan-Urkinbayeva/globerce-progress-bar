import { useState } from 'react';
import './styles/App.scss';
import Body from './components/Body';
import Header from './components/Header';
function App() {
  const [isShow, setIsShow] = useState(1);
  const handleClick1 = () => {
    setIsShow(2)
  }
  const handleClick2 = () => {
    setIsShow(1)
  }
  return (
    <div className="App">
      <Header isshow={isShow} click1={handleClick1} click2={handleClick2}  />
      <Body isshow={isShow} />
    </div>
  );
}

export default App;
