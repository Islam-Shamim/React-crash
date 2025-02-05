
import './App.css';
import Counter from './components/Counter';

function App() {
  const clickHandler = () => {
    alert('Button Clicked');
  }
  const clickHandler2 = () => {
    alert('Button Clicked 2');
  }
  const addToFour = (num) =>{
    alert(4+num);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome again React</h2>
        <Counter></Counter>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis officia nesciunt. Quidem nemo, earum ipsa labore perspiciatis in eos! Laborum sequi praesentium ea neque, consequatur molestiae accusamus libero necessitatibus.</p>
      </header>

      <div className='space-x-2'>
        <button onClick={clickHandler}>Click Here</button>
        <button onClick={clickHandler2}>Click Here2</button>
        <button onClick={()=>alert("No:2, I am here.")}>Click Here3</button>
        <button onClick={()=>addToFour(3)}>Click Here4</button>
      </div>
    </div>
  );
}

export default App;
