// // single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('#my-form'));
// console.log(document.querySelector('h1'));


// // multiple elements
// console.log(document.querySelectorAll('h1'));
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('items'));



// const ul=document.querySelector('.items')
// ul.remove()
// ul.firstElementChild.remove()
// ul.children[1].remove()
//  ul.firstChild.remove()

// ul.firstElementChild.textContent='hello';
//  ul.children[1].innerText='byee';
// ul.lastElementChild.innerHTML='<h1>hello</h1>';

// // css

//  const btn=document.querySelector('.btn')
// btn.style.background='red'

// //events

//  const btn=document.querySelector('.btn')
//  btn.addEventListener('mouseout',(e) => {
//     e.preventDefault()
//     console.log(e.target.className);
//     document.querySelector('#my-form').style.background='blue'
//      document.querySelector('body').style.background='red'

//     document.querySelector('body').classList.add('kya')


//     //text change
//     document.querySelector('.items').lastElementChild.innerHTML='<h1>hello'

//  })

 const myform=document.querySelector('#my-form')
 const nameinput=document.querySelector('#name')
 const emailinput=document.querySelector('#email')
 const msg=document.querySelector('.msg')
 const userlist=document.querySelector('#users')

 myform.addEventListener('submit',onsubmit);

 function onsubmit(e){
     e.preventDefault()
    //  console.log(nameinput.value);
    //  console.log(emailinput.value);

    if(nameinput.value==='' || emailinput.value === '' ) {
        msg.innerHTML='dono bhar chal!!'
        msg.classList.add('error')
        setTimeout(()=> msg.remove(),2500)
    }
     else{
          const li=document.createElement('li')
          li.appendChild(document.createTextNode(`${nameinput.value}
          :${emailinput.value}`));
          userlist.appendChild(li);

          //clear field
          nameinput.value=''
          emailinput.value=''

     }
 }