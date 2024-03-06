const sortItems = (setData, setLoading, query = "") => {
    fetch(`https://fakestoreapi.com/products/${query}`,  { mode: "cors" })
    .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
    .then(json=> setData(json))
    .finally(setLoading(false))
  
}

export default sortItems