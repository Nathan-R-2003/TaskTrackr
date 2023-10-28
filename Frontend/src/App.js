import logo from './logo.svg';
import './App.css';

const user = {
  name: "Nathan Rodriguez",
  password: "ajsbcasivci",
} 

function App() {
  return (
    <div class = "App-background">
      <TopBar></TopBar>
      <div class = "header-container">
        <h1 class = "header"> Your Tasks </h1>
      </div>
      <CardContainer></CardContainer>
    </div>
  );
}

function CardContainer() {
  return (
    <div class = "container">

    </div>
  )

}

function Card() {
  return (
    <button>
      <div>
        
      </div>
    </button>
  )
}

function TopBar() {
  return (
    <div class = "top-bar">
      <p class = "text"> Welcome {user.name}</p>
      <LogoutButton></LogoutButton>
    </div>
  )
}

function LogoutButton() {
  return (
    <button class="logout-button">
      Logout
    </button>
  )
}

export default App;
