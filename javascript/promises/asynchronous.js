// what is asynchronous: it is a way to handle operations that take time to complete, such as fetching data from a server or reading a file. In JavaScript, asynchronous operations can be handled using callbacks, promises, or async/await syntax. This allows the program to continue executing other code while waiting for the asynchronous operation to complete, improving performance and responsiveness.
//what is threading: it is a way to run multiple operations concurrently, allowing for better utilization of system resources and improved performance. In JavaScript, threading is not natively supported, but it can be achieved using web workers or other libraries. However, JavaScript's single-threaded nature means that asynchronous operations are often used to achieve similar results without the complexity of managing threads.

//what is synchronous: when the process is executing one by one this manner is known as the synchronous manner. In synchronous programming, each operation must complete before the next one can begin, which can lead to blocking and slower performance for operations that take time to complete.
 
//what is asynchronous: to achieve the parallel execution of threads we use asynch keyword to achieve asynchronous manner of the program. 
/*
async function load() {
        let response=await fetch("https://fakestoreapi.com/products/");
        // console.log(response);
        let data=await response.json();
        console.log(data);

}
load();
  */
 
/*
async function load() {
    try {
        let response = await fetch("https://fakestoreapi.com/products/");
        console.log(response);
        if (!response.ok) {
            // throw new Error("Network response was not ok");
            console.log(`There was a problem ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error(`something went wrong`);
    }
}
load();

*/


let url = "https://fakestoreapi.com/products/";
async function getProducts() {
    try {
        let response = await fetch(url);
        if (!response.ok) {
             console.error("Network response was not ok");
        }
        let data = await response.json();
        console.log(data[19]);
        data.map((value) => {
            console.log(value.title);
            console.log(value.id);
        });
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}
getProducts();
