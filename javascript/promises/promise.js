let url = "https://fakestoreapi.com/products/";

let promise = new Promise((resolve, reject) => {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            reject(error);
            console.log("Something went wrong");
        })
        .then((data) => {
            console.log(data[19]);
            // console.log(data[19].title);
            // resolve(data);
            data.map((value) => {
                console.log(value.title);
                console.log(value.id);
            });
        })     
});
  