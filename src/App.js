import Header from "./components/Header"
import TravelCard from "./components/TravelCard"
import data from "./data"


export default  function App() {
   
  const cards = data.map(item => {

     return (
       <TravelCard
       key={item.id}
       item={item}
       />
     )
  })
  return (
    <div className="App">
      <Header />
      {cards}

  
    </div>
  );
}


