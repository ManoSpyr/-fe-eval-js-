



const products = [
  {
    description: "Clothes ~ unisex clothing",
    imageURI:
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/jeans_1f456.png",
    discount: false,
    outOfStock: true,
    category: "clothes",
    price: "",
    discountPerc: "0",
  },
  {
    description: "Food ~ fresh and delicious",
    imageURI:
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/egg_1f95a.png",
    discount: false,
    outOfStock: false,
    category: "food",
    price: "",
    discountPerc: "0",
  },
  {
    description: "refreshing drinks",
    imageURI:
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/312/tropical-drink_1f379.png",
    discount: true,
    outOfStock: false,
    category: "beverage",
  },
  {
    description: "Cooked food ~ for lunch and supper",
    imageURI:
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/spaghetti_1f35d.png",
    discount: false,
    outOfStock: false,
    category: "food",
    discountPerc: "0",
  },
  {
    description: "Fruits",
    imageURI:
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/lemon_1f34b.png",
    discount: false,
    outOfStock: false,
    category: "food",
    price: "",
    discountPerc: "0",
  },
  {
    description: "Clothes ~ only for women",
    imageURI:
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/womans-clothes_1f45a.png",
    discount: true,
    outOfStock: false,
    category: "clothes",
    price: "",
    discountPerc: "10",
  },
  {
    description: "Vegetables",
    imageURI:
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/eggplant_1f346.png",
    discount: false,
    outOfStock: true,
    category: "food",
    price: "",
    discountPerc: "0",
  },
  {
    description: "Sandwiches and toasts",
    imageURI:
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/sandwich_1f96a.png",
    discount: true,
    outOfStock: false,
    category: "food",
    price: "",
    discountPerc: "3",
  },
  {
    description: "Bread and cookies",
    imageURI:
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/bread_1f35e.png",
    discount: false,
    outOfStock: false,
    category: "food",
    price: "",
    discountPerc: "0",
  },
];

function createStoreFront() {
  const parentElement = document.getElementById("storeFront");
  parentElement.innerHTML = "";
  for (let idx in products) {
    // document.write(`<div class="store-item"><img class="food" src="${categObjects[idx].imageURI}"><p>${categObjects[idx].description}</p></div>`)

    const myDiv = document.createElement("div");
    myDiv.className = "store-item"; //So its getting the right style
    parentElement.appendChild(myDiv);

    const myImg = document.createElement("img");
    myImg.src = products[idx].imageURI;

    if (products[idx].category === "food") {
      myImg.className = "food";
    }
    if (products[idx].category === "clothes") {
      myImg.className = "clothes";
    }
    if (products[idx].category === "beverage") {
      myImg.className = "beverage";
    }
    if (products[idx].discount) {
      myImg.classList.add("discount");
    }

    if (products[idx].outOfStock) {
      myImg.classList.add("out-of-stock");
    }

    myDiv.appendChild(myImg);
    const myP = document.createElement("p");
    myP.innerHTML = products[idx].description;
    myDiv.appendChild(myP);
  }
}
function sortOnDescription() {
  products.sort(function comparator(a, b) {
    return a.description === b.description
      ? 0
      : a.description > b.description
      ? 1
      : -1;
  });
  createStoreFront();
}
function sortOnDescriptionDesc() {
  sortOnDescription();
  products.reverse();
  createStoreFront();
}

function discountedFirst() {
  products.sort(function comparator(a, b) {
    return a.discount === b.discount ? 0 : a.discount < b.discount ? 1 : -1;
  });
  createStoreFront();
}


//=========================================================================
//End of code temp notes 
//</script>
// const listType= "ol"
//   const parentElement= document.getElementById("payment")
//   const myUl=document.createElement(listType)
//  parentElement.appendChild(myUl)
//   const firstLi=document.createElement("li")
//   myUl.appendChild(firstLi)
//   firstLi.innerHTML="item1"
//   const otherLi=document.createElement("li")
//   myUl.appendChild(otherLi)
//    otherLi.innerHTML="item2"
//  const l=document.createElement("li")
//  l.innerHTML="item 1"
//  document.getElementById("payment").appendChild(l)
//  }

//  <div class="buttons">
//     <input type="button" value="Bargains first!" onclick="discountedFirst()">
//     <input type="button" value="Description (Asc)" onclick="sortOnDescription()">
//     <input type="button" value="Description (Desc)" onclick="sortOnDescriptionDesc()">
//   </div>

//   <div class="store-front" id="storeFront" name="storeFront">
//   </div>

//   <script>
//       const numbers = [
//         2,
//         3,
//         65,
//         6,
//         45,
//         77,
//         133,
//         56
//       ]
//       console.log(numbers)
//       alert("pause")
//       console.log(numbers.sort(function mySort(a,b){
//         return(a===b) ? 0 : ((a>b) ? 1:-1)
//       }))

//       function mySort(a,b)  //*1way
//        {
//        if(a===b) return 0;
//        if(a>b) return  1;
//        if(a<b)  return -1;
//       }
//         console.log(numbers.sort(function mySort(a,b)// *2 wqy
//       { return (a-b)}))

//     </script>

//    <div class="store-front">
//       <div class="store-item">
//         <img
//           class="clothes out-of-stock"
//           src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/jeans_1f456.png"
//         />
//         <p>Clothes ~ unisex clothing</p>
//       </div>
//       <div class="store-item">
//         <img
//           class="food"
//           src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/egg_1f95a.png"
//         />
//         <p>Food ~ fresh and delicious</p>
//       </div>
//       <div class="store-item">
//         <img
//           class="discount"
//           src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/bouquet_1f490.png"
//         />
//         <p>Flowers ~ for all occasions</p>
//       </div>
//       <div class="store-item">
//         <img
//           class="food"
//           src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/spaghetti_1f35d.png"
//         />
//         <p>Cooked food ~ for lunch and supper</p>
//       </div>
//       <div class="store-item">
//         <img
//           class="food"
//           src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/lemon_1f34b.png"
//         />
//         <p>Fruits</p>
//       </div>
//       <div class="store-item">
//         <img
//           class="discount clothes"
//           src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/womans-clothes_1f45a.png"
//         />
//         <p>Clothes ~ only for women.</p>
//       </div>
//       <div class="store-item">
//         <img
//           class="food out-of-stock"
//           src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/eggplant_1f346.png"
//         />
//         <p>Vegetables</p>
//       </div>
//       <div class="store-item">
//         <img
//           class="food discount"
//           src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/sandwich_1f96a.png"
//         />
//         <p>Sandwiches and toasts</p>
//       </div>
//       <div class="store-item">
//         <img
//           class="food"
//           src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/bread_1f35e.png"
//         />
//         <p>Bread and cookies</p>
//       </div>
//     </div>
//     <div class="payment-methods">
//       <div class="payment-method">
//         <p>Credit card</p>
//         <img
//           src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/credit-card_1f4b3.png"
//         />
//       </div>
//       <div class="payment-method">
//         <p>Cash</p>
//         <img
//           src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/euro-banknote_1f4b6.png"
//         />
//       </div>
//       <div class="payment-method-big">
//         <p>Bitcoin</p>
//         <img src="https://freesvg.org/img/bitcoin-0.png" />
//       </div>
//       <div class="payment-method">
//         <p>Paypal</p>
//         <img src="https://www.paypalobjects.com/webstatic/icon/pp258.png" />
//       </div>
//     </div>
//      <input type="button" value="Speak" onclick="logSomeDome()"> -->
//{/* </body>

// </div>

// </body>
// <script>createStoreFront()</script>

// </html> } */
