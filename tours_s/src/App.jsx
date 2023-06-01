import { useState, useEffect } from "react";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  useEffect(()=> {
    setIsLoading(true)
    const fetchTours = async()=>{
        try {
          const response = await fetch(url)
          const tours = await response.json()
          console.log(tours);
      
        } catch (error) {
          console.log(error);
      
    }
      }
      fetchTours();    
  }, [])
  return <h2>Tours Starter</h2>;
};
export default App;
