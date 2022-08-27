// let x = 'ali haider';

// console.log(x.slice());
// console.log(x.substring());
// console.log(x.substr());
// console.log(x.startsWith('ali',0));
// console.log(x.endsWith('r',));


// let x =[1,2,3,[4,5,6,[7,8,9]]]
// console.log(x[3][3][1])
// let x =[1,2,3,[4,5,6,[7,8,9]]]
// x[3][3][1]=2;
// console.log(x)


// let x =[1,2,3,[4,5,6,[7,8,9]]]
// // x.push([3],[9])
// // x.unshift(9,9)

// x.shift(9,9)
// console.log(x)

// let x =[1,8,3,[4,9,6,[7,2,5]]]
// x.splice(0,2,'ali')
// x.slice()
// console.log(x.indexOf(7))
// console.log(x.reverse())

// let x =['ali','haider','ahmed']
// console.log(x.sort())

// let x =['ali','haider','ahmed']
// let c =['ali','karem','omar']

// console.log(x.join(' # '))

// console.log(x.concat(c))


// let x='ali';
// let y='ahmed';

// console.log(x==y)

// let d =['ali','ahmed','hassen','mazen' ]
// let x='ali'
// for(let i = 0;i>x.length;i)
// {
// console.log(x[i]);
// }



// let f=['BMW','MERc','HONDA'];
// let g=[2020,2021,2022];
// let r=['white','red','black']
// for(let i =0;i<f.length;i++)
// {
//     console.log( `${f[i]}`);
//     for(let j =0 ;j<g.length;j++)
//     {
//         console.log(`Models:${g[j]}`);
//         for(let s=0;s<r.length;s++)
//         {
//             console.log(`color:${r[s]}`)
//         }
//         console.log('_______________________')
//     }
//     console.log('_______________________')
// }


// let T =['asd','fgh','ert','ali',2,5,6,7];
// for (i=0 ;i<T.length;i++)
// {
//     if(typeof T[i]=='number')
//     {
//         continue;   
//     }
//     if(T[i]=='ert')
//     {
//         continue;
//         //   استبعاد
//     }
//     console.log(T[i])
// }

// let i=0;
// while(i<3)

// {document.write('<h1>hel</h1>')
// i++
// }

// let i=0;
// do{
//     document.write('<h1>hello</h1>')
//     i++;
// }
// while(i<3);

// function haider(age)
// {
//     let res =age*365;
//     console.log(res);
// }
// haider(23)
// haider(22)
// function pro(pris ,texst ,ads)
// {
//     return 2;
// }
// var x =10;
// console .log('hello');


// function calc( ...number )
// {
//     let result =0;
//     for (let i =0;i <number.length;i++){
//         result +=number[i]
//     }
//     console.log(result);
// }calc(12,34,45);


// let tit = 'BMW';
// let prs = 3000;
// let col ='white';
// let Models = 2022;

// let car={
//     tit:"BMW",
//      prs : 3000,
//      col :'white',
//      Models : 2022,

// hello: function(){
//     return 'hello';
// }


// };
// console.log(car.tit);


// let user1 ={
//     name:'haider',
//     getName:function(){
//         return `hello ${this.name}`;
//     }
// }

// let user2 = Object.create(user1);
// user2.name ='ali'
// console.log(user2.getName());
// let a1 = {
//     num1:1 ,
//     hello:function(){
//         return 'hello';
//     }
// }
// let a2 = {
//     num2:2 ,
// }
// let a3 = {
//     num3:3 ,
// }
// let a4 =Object.assign(a1,a2)
// a4.num2=22;
// a4.r='haider';
// console.log(a4)

// let head = document.getElementsByTagName('h1');


// console.log(head);

// let center = document.getElementById('center') 
// console.log(center.outerHTML)

// let center = document.getElementById('center') 
// console.log(center.innerHTML)



// let conter = document.getElementById('conter');

// conter.innerText = 'hello haider';
// conter.style.backgroundColor ='#444';
// conter.style.color ='#fa0';
// conter.style.borderLeft ='7px solid #fa0';
// conter.style.padding = '10px';

//1- انشاء العنصر
// let container = document.createElement('div');
// let  head =  document.createElement('h1');
// let img = document.createElement('img');

// 2-اضافه المحتوى

// let content =document.createTextNode('hello haider');
// head.appendChild(content);
// img.src = 'https://1.bp.blogspot.com/-2slWqWffak4/X6z0J6jd05I/AAAAAAAARZM/FLMRm3YVO7Y67amBiTwmxkrsC-OlFiDvACLcBGAsYHQ/s400/%25D8%25B5%25D9%2588%25D8%25B1-%25D8%25B4%25D8%25A8%25D8%25A7%25D8%25A8-%25D8%25B5%25D9%2588%25D8%25B1-%25D8%25B4%25D8%25A8%25D8%25A7%25D8%25A8%25D9%258A%25D8%25A9-%25D8%25B1%25D8%25A7%25D8%25A6%25D8%25B9%25D8%25A9-%25D8%25A7%25D8%25AC%25D9%2585%25D9%2584-%25D8%25B5%25D9%2588%25D8%25B1-%25D8%25B4%25D8%25A8%25D8%25A7%25D8%25A8.jpg' ;

// container.appendChild(head);
// container.appendChild( img);

// document.body.appendChild(container);
// container.style.backgroundColor ='#444';
// container.style.color='#fa0';
// container.style.borderLeft ='7px solid #fa0';
// container.style.padding = '10px';

// let names =['ahmed','ali','gamel','haider','abdelaa','rahman'];
// let ages =['18 years old','20 years old','22 years old','23 years old','24 years old','19 years old'];
// let container = document.createElement('div');
// document.body.appendChild(container);
// container.style.textAlign ='center';
// function element(name,ages){
//     let card = document.createElement('div');
//     let title = document.createElement('h1');
//     let age =document.createElement('p');
//     let img =document.createElement('img');

//     let head =document.createTextNode( name);
//     let ageCo=document.createTextNode(ages);
//     img.src = 'https://1.bp.blogspot.com/-2slWqWffak4/X6z0J6jd05I/AAAAAAAARZM/FLMRm3YVO7Y67amBiTwmxkrsC-OlFiDvACLcBGAsYHQ/s400/%25D8%25B5%25D9%2588%25D8%25B1-%25D8%25B4%25D8%25A8%25D8%25A7%25D8%25A8-%25D8%25B5%25D9%2588%25D8%25B1-%25D8%25B4%25D8%25A8%25D8%25A7%25D8%25A8%25D9%258A%25D8%25A9-%25D8%25B1%25D8%25A7%25D8%25A6%25D8%25B9%25D8%25A9-%25D8%25A7%25D8%25AC%25D9%2585%25D9%2584-%25D8%25B5%25D9%2588%25D8%25B1-%25D8%25B4%25D8%25A8%25D8%25A7%25D8%25A8.jpg';
//     title.appendChild(head);
//     age.appendChild(ageCo);

//     card.style.width='200px';
//     card.style.padding='10px';
//     card.style.background='#444';
//     card.style.color='#fff'
//     card.style.margin='4px';
//     card.style.display='inline-block';
//     img.style.width='100%';


//     card.appendChild(title);
//     card.appendChild(age);
//     card.appendChild(img);


//  container.appendChild(card);


// }
// let btn = document.getElementById('btn');
// btn.toggle= function(){
//     for(let i =0;i<6;i++){
//         element( names[i],ages[i]); 
//     }
// }


// let dollar = document.getElementById('dollar');
// let denar = document.getElementById('denar');

// dollar.onkeyup=function(){
//     denar.value =dollar.value*1.48 ;
// }
// denar.onkeyup=function(){
//    dollar.value =denar.value/1.48;
// }


// let after =document.getElementById('after');
// let before =document.getElementById('before');
// let append =document.getElementById('append');

// let content =document.getElementById('content');
// let container =document.getElementById('container');

// container.style.backgroundColor = '#ffa';
// container.style.height = '50px';

// after.onclick = function(){
//     container.after(content)
// }
// before.onclick = function(){
//     container.before(content)
// }
// append.onclick = function(){
//     container.append(content)
// }

// let btnOpen = document.getElementsById('open');
// let btnClose = document.getElementsById('close');
// let container = document.querySelector('.container');

// btnClose.onclick = function(){
//     container.classList.add('hide');
//   this.classList.add('hide');
//   btnOpen.classList.remove('hide')
// }  
// btnOpen.onclick= function(){
//     this.classList.add('hide'); 
//     btnClose.classList.remove('hide');
//     btnClose.btnClose.remove('hide')
// }








// let txt = document.getElementById('txt');
// let btn = document.getElementById('btn');

// window.onload = function(){
//     txt.focus();
// }



// let btn = document.getElementById('btn');
// window.onscroll = function(){
//     if(scrollY >= 400 ){
//         btn.style.display = 'block';
//     }else{
//         btn.style.display = 'none'; 
//     }
// }

// btn.onclick = function(){
//     scroll({
//       left:0,
//       top:0,  
//       behavior:"smooth"
//     })
// }
//  let hello= setTimeout(function(){
//   console.log('hello')
// },1000)
// clearTimeout(hello)
// let i= 1;
// let hello = setInterval (function(){
//     console.log(i++)
//     if(i ==10){
//         clearInterval(hello);
//     }
// },1000)

// localStorage.setItem('name','haider');
// localStorage.name = 'haider';

// console.log(localStorage.getItem ('name'))
// console.log(localStorage.name)
// let text = document.getElementById('text');

// if(localStorage.length > 0){
//     text.value = localStorage.getItem('text')
// }

// text.onkeyup = function(){
//     localStorage.setItem('text',text.value)
// }

let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');


let tmp ;
let mod = 'create';

function getTotal()
{
   if(price.value != ''){
    let result = (+price.value + +taxes.value + +ads.value  )
    - +discount.value;
    total.innerHTML = result;
    total.style.background = '#040'
   }else{
    total.innerHTML = '';
    total.style.background = '#a00da0'
   }
}


let dataPro;
if(localStorage.product !=null){
    dataPro = JSON.parse(localStorage.product)
}else{
    dataPro = [];
}



submit.onclick = function(){
    let newPro = {
        title:title.value,
        taxes:taxes.value,
        price:price.value,
        ads:ads.value,
        discount:discount.value,
        count:count.value,
        category:category.value,
        total:total.innerHTML,
    }
    if(price.value != '' &&title.value != ''&&category.value !=''&&newPro.count <=100)
    if(mod ==='create' ){
        if(newPro.count> 1){
            for(let i = 0; i < newPro.count;i++){
                dataPro.push(newPro);
            }
        }else{
            dataPro.push(newPro);
          
        }
        clearData()
    }else{
        dataPro[  tmp    ] = newPro;
        mod = 'create';
        submit.innerHTML = 'create';
        count.style.display = 'block';
   
    }


    
    localStorage.setItem('product',     JSON.stringify(dataPro)        );
   
    showData()
}

function clearData()
{
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    count.value = '';
    category.value = '';
    total.innerHTML = '';
}





function showData()
{
    getTotal()
    let table = '';
    for (let i = 0; i < dataPro.length;i++)
    {
        table += `
        <tr>
          
          <td>${i+1}</td>
          <td>${dataPro[i].title}</td>
          <td>${dataPro[i].parse}</td>
          <td>${dataPro[i].taxes}</td>
          <td>${dataPro[i].ads}</td>
          <td>${dataPro[i].discount}</td>
          <td>${dataPro[i].total}</td>
          <td>${dataPro[i].category}</td>
          <td><button onclick = "updateData(${i})" id="update">update</button></td>
          <td><button onclick="deleteData( ${i} )" id="delete">delete</button></td>
        </tr>
        `;
        
    }

    document.getElementById('tbody').innerHTML=table; 

    let btnDelete = document.getElementById('deleteAll') ; 
    if(dataPro.length > 0 ){
        btnDelete.innerHTML = `
        <button onclick="deleteAll() " >delete All(${dataPro.length})</button>`

    }else{
        btnDelete.innerHTML = '';
    }
}showData()
 


function deleteData(i)
{
 dataPro.splice(i,1);
 localStorage.product = JSON.stringify(dataPro);
 showData()
}

function deleteAll(){
    localStorage.clear();
    dataPro.splice(0);
    showData();
}

function updateData(i){
    title.value = dataPro[i].title;
    price.value = dataPro[i]. price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    getTotal()
    count.style.display = 'none';
    category.value = dataPro[i].category;
    submit.innerHTML = 'update';
    mod = 'update';
    tmp =i;
    scroll({
        top : 0,
        behavior:"smooth",
    })
}

let searchMood = 'title';

function getSearchMood(id)
{   let search = document.getElementById('search');
   if (id == 'searchTitle'){
    searchMood = 'title';
    
   }else{
    searchMood = 'Category';
   }
   search.placeholder = 'Search By '+searchMood;
    search.focus()
    search.value = '';
    showData();

}

function searchData(value)
{   
     let table = '';
   if( searchMood == 'title'){
    for (let i = 0; i< dataPro.length;i++){
        if(dataPro[i].title.includes(value)){
           
            table += `
            <tr>
              
              <td>${i}</td>
              <td>${dataPro[i].title}</td>
              <td>${dataPro[i].parse}</td>
              <td>${dataPro[i].taxes}</td>
              <td>${dataPro[i].ads}</td>
              <td>${dataPro[i].discount}</td>
              <td>${dataPro[i].total}</td>
              <td>${dataPro[i].category}</td>
              <td><button onclick = "updateData(${i})" id="update">update</button></td>
              <td><button onclick="deleteData( ${i} )" id="delete">delete</button></td>
            </tr>
            `;
        }
    }

   }else{
    for (let i = 0; i< dataPro.length;i++){
        if(dataPro[i].category.includes(value)){
            
            table += `
                <tr>
              
                 <td>${i}</td>
                 <td>${dataPro[i].title}</td>
                 <td>${dataPro[i].parse}</td>
                 <td>${dataPro[i].taxes}</td>
                 <td>${dataPro[i].ads}</td>
                 <td>${dataPro[i].discount}</td>
                 <td>${dataPro[i].total}</td>
                 <td>${dataPro[i].category}</td>
                   <td><button onclick = "updateData(${i})" id="update">update</button></td>
                   <td><button onclick="deleteData( ${i} )" id="delete">delete</button></td>
                 </tr>
            `;
        }
    }
 }
   document.getElementById('tbody').innerHTML=table; 
}