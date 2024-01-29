import logo from './logo.svg'
import './App.css'
import ButtonComponent from './ButtonComponent'
import ImageComponent from './ImageComponent'

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>First React App</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ButtonComponent showButton="Button 1" />
          <ButtonComponent showButton="Button 2" />
          <ButtonComponent showButton="Button 3" />
          <ImageComponent
            fotoSource="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/260px-FullMoon2010.jpg"
            altSource="foto_luna"
          />
          <ImageComponent
            fotoSource="https://rgaonline.it/wp-content/uploads/2019/07/Lupo.jpg"
            altSource="foto_lupo"
          />
          <ImageComponent
            fotoSource="https://media.tenor.com/ysSq_JG8y8oAAAAe/shiba-max-max-shiba.png"
            altSource="foto_max"
          />
        </header>
      </div>
    </>
  )
}

export default App
