//function add(a, b) {
//    return a+b;
//}
//console.log(add(2,3));

// avec 2 parametres
//const add = (a,b) => a+b;
//console.log(add(2,3));

// avec 1 parametre
//let num = 2;
//const square = num => num*num;
//console.log(square(2));

// Pas de parametre
//const random = () => Math.random();
//console.log(random());

//const greet = name => {
//    const msg = 'Bonjour ' + name;
//    console.log(msg);
//}
//greet ('Martin');

//fetch('https://jsonplaceholder.typicode.com/posts')
//.then (response => response.json())
//.then (data => console.log(data))
//.catch(error => console.log(error));

//TP#2***********************************************

//fetch('https://jsonplaceholder.typicode.com/users')
//.then (response => response.json())
//.then (data => {
//    let output = '<h2>List of users</h2>';
//    data.forEach(function(element) {
//        output+=element.name + ' - ' 
//        output+=element.phone + '<br/>'  
//     });
    // console.log(output)
//    document.getElementById('user').innerHTML = output
//     console.log(data);
//});
//***********************************************//

//fetch('book1.csv')
//.then (response => response.text())
//.then (data => console.log(data))

//fetch('data.json')
//.then (response => response.json())
//.then (data => console.log(data))

//Setting error display (flag red)***************************//

fetch ('data.json')
.then (response => {
    if(!response.ok){
        throw new Error('Erreur de requete ' + response.status);
    }
    return response.json()
})
//.then (data => console.log(data))
//.catch(error =>console.log(error))
//.catch(error =>console.error(error))
//************************************//
//Console browser:
//age:30
//email:"paul@pauline.com"
//name: "Paul" 
//************************************//
.then (result => {
    let output = '<h2>Personage Public</h2>'
    //*Converting from txt to object form json*****//
    Object.keys(result).forEach(function(key) {
            output += result[key] + '<br/>';
            console.log(key, result[key]);             
        });
        
    document.getElementById('user').innerHTML = output
    //console.log(result)
})
//.catch(error =>console.error(error))
//browser:Personage Public
//        Paul
//        30
//        paul@pauline.com