import Header from "./Header.jsx";
import List from "./list.jsx"
import Student from "./student.jsx"
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx"; 
import UserGreeting from "./userGreeting.jsx";

function App() {
  return (
    <> 
      <UserGreeting islogin={true} username="jarry"/>
      <Header />
      <Student name="Lalit" age ="21" isstudent={true} />
      <Student/>
      <Card />
      <Footer />
      <Button />  
      <List />

    </>
  );
}

export default App;
