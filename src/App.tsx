import style from "./App.module.css"; 
import Card from './components/Card'; 

function App() {
  return <div className="App">
    <header className={style.headerContainer}>
      <h1>worddic</h1>
    </header>
    <Card />

    <footer className={style.footerContainer}>
      <div className={style.contactContainer}>
        <a href="https://github.com/lucsamsilva" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/luccasmsilva/" target="_blank">Linkedin</a>
      </div>
      <p>Copyright &copy; 2023</p>

    </footer>
  </div>
}

export default App
