const fetchData = (setData, setError, setLoading, query = "") => {
    fetch(`https://fakestoreapi.com/products/${query}`,  { mode: "cors" })
    .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
        
      })
    .then(json=> setData(json))
    .catch(error => setError(error))
    .finally(setLoading(false))
  
}

export default fetchData