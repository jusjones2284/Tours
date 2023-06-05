import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removedTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
    
    console.log("right button clicked");
  }

  const fetchTours = async()=>{
        setIsLoading(true);
        try {
          const response = await fetch(url)
          const tours = await response.json()
          setTours(tours);
        } catch (error) {
          console.log(error);
        }
          setIsLoading(false);
      }

  useEffect(()=> {
    setIsLoading(true)
      fetchTours();    
  }, [])

  if(isLoading){
    
    return <main >
              <Loading />
           </main>
  }



  return <main>

    <Tours tours={tours}
    removedTour={removedTour}
    />
  </main>
};
export default App;
