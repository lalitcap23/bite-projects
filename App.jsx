import Header from "./Header.jsx";
import List from "./list.jsx"
import Student from "./student.jsx"
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import UserGreeting from "./userGreeting.jsx";
import Button1 from "./button1.jsx";
import Pp from "./pp.jsx";
import Mycomponent from "./mycomponet.jsx"
import Counter from "./counter.jsx";

function App() {
  return (
    <> 
      <UserGreeting islogin={true} username="jarry"/>
      <Header />
      <Student name="Lalit" age ="21" isstudent={true} />
      <Student/>
      <Card />
      <Footer />
            <List />
      <Button1/>
      <Mycomponent/>
      <Counter/>
      <pp/>

    </>
  );
}

export default App;
