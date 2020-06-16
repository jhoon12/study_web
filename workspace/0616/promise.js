// function getData(callback){
//     return new Promise(function(resolve, reject){
//         // $.get('url', function(response){
//         //     resolve(response);
//         // });
//         fetch("url", )
//     });
// }

// getData().then(function(tableData){
//     console.log(tableData);
// });

// Axios.get("url").then(function(res){
//     console.log(res);
// }) 

// console.log(1);

// async() => {
//     const rss = await Axios.get("url");
    
//     console.log(res);
// }

function plus(a, b, callback) { 
    var sum = a + b;
    callback(sum);
  }  
  
  plus(2, 3, (result)=>{
      console.log(result);
  })

