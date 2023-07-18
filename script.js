// Необходимо получить массив объектов ToDO с сервера https://jsonplaceholder.typicode.com/users/1/todos 
// используя fetch (см. код написанный в классе) и отобразить их на странице

let url = 'https://jsonplaceholder.typicode.com/users/1/todos';

function loadToDo() {
  let myObject = fetch(url);
  myObject.then((myObject) => {
    dataPromise = myObject.json();
    dataPromise.then((res) => {
      //console.log(res);
      let arrObject = res;

      console.log(arrObject);

      const ListUl = document.getElementById('taskUl');

      arrObject.forEach((element) => {
        //console.log('123');

        const li = document.createElement('li');
        li.textContent = `userId: ${element.userId} id: ${element.id} 
        title: ${element.title}  completed: ${element.completed}`;
        ListUl.append(li);
      });
    });
  });
}

loadToDo();
