let addCartArr = JSON.parse(localStorage.getItem("CartData")) || [];
let itemsArr = [
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002228.jpg?ver=39.2",
    Name: "The Allu Arjun Combo",
    Varity: "Non veg",
    Price: "₹448.57",
    Offer: "Try Allus fav-1 Hot & Crispy Chicken,1 Smoky Red, Reg Popcorn, Spicy Fries & 1 Dip 20gm",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002340.jpg?ver=39.2",
    Name: "All in One Bucket",
    Varity: "Non veg",
    Price: "₹548.57",
    Offer: "1 Leg, 1 Hot & Crispy, 2 Wings, 2 Strips, 1 Zinger Fillet, 3 Dips [20gm each] & 1 Pepsi 475 ml",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002156.jpg?ver=39.2",
    Name: "PERI PERI 5 Leg Piece Meal",
    Varity: "Non veg Serves 2",
    Price: "₹628.57",
    Offer: "5 Spicy Peri Peri Leg Pieces, 2 Dips (20gm each), 1 Med Fries & 1 Pepsi 475ml",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/sm/D-PR00000892.jpg?ver=39.2",
    Name: "Bucket for Two",
    Varity: "Non veg Serves 2-3",
    Price: "₹599.05",
    Offer: "Flat Rs. 115 off on combo of 2pc Hot & Crispy, 2 pc Smoky Red Chicken & Large Popcorn [serves 2-3]",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/sm/D-PR00002155.jpg?ver=39.2",
    Name: "PERI PERI 10 Leg Piece Bucket & 4 Dips",
    Varity: "Non veg Serves 3-4",
    Price: "₹924.76",
    Offer: "Leg before any wicket! Save 27% on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/sm/D-PR00002157.jpg?ver=39.2",
    Name: "PERI PERI 5 Leg Piece Bucket & 2 Dips",
    Varity: "Non veg Serves 2",
    Price: "₹515.24",
    Offer: "5 Spicy Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"

},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/sm/D-PR00002169.jpg?ver=39.2",
    Name: "Stay Home Bucket",
    Varity: "Non veg Serves 2-3",
    Price: "₹788.57",
    Offer: "Save 21% on 4 Hot & Crispy, 4 Wings, 6 Peri Strips & 2 dips (20gm each)",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
  
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/sm/D-PR00000854.jpg?ver=39.2",
    Name: "Big 12",
    Varity: "Non veg Serves 2- 3",
    Price: "₹748.57",
    Offer: "Save 28% on 6pc Hot & Crispy Chicken, 6 Hot Wings & 2 dips (20gm each)",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/sm/D-PR00002162.jpg?ver=39.2",
    Name: "Mingles Bucket Meal",
    Varity: "Non veg Serves 2",
    Price: "₹499.05",
    Offer: "Save Rs. 71 on 4 Wings,2 Peri Strips, Reg Popcorn, Med Fries & 1 Pepsi 475ml",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K511.jpg?ver=16.58",
    Name: "Big 8",
    Varity: "Non veg Serves 2- 3",
    Price: "₹684.76",
    Offer: "Save 29% on this variety bucket of 4pc Hot & Crispy chicken & 4pc Smoky Red chicken [serves 2- 3 ]",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K511.jpg?ver=16.58",
    Name: "5pc Smoky Red Chicken",
    Varity: "Non veg Serves 2",
    Price: "₹528.57",
    Offer: "Flat 20% off on 5pc Smoky red grilled chicken [serves 2]",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000920.jpg?ver=16.58",
    Name: "8 pc Hot & Crispy Chicken",
    Varity: "Non veg Serves 3-4",
    Price: "₹768.57",
    Offer: "Save Rs. 182 & get 8pc signature Hot & crispy chicken",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000892.jpg?ver=16.58",
    Name: "6 pc Hot & Crispy Chicken",
    Varity: "Non veg Serves 2-3",
    Price: "₹619.05",
    Offer: "Flat 10% off on 6pc signature Hot & crispy chicken [serves 2-3]",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
},
{
    Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/sm/D-PR00000638.jpg?ver=39.2",
    Name: "Ultimate Savings Bucket",
    Varity: "Non veg Serves 2",
    Price: "₹699.05",
    Offer: "Save 35% on 4pc Hot & Crispy, 6 Wings, 4 Strips, 2 Dips (20gm each) & 1 Pepsi 475ml",
    Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
    Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
}
]

ChickenBucket(itemsArr)
function ChickenBucket(itemsArr){
    itemsArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        add.append(addImage)
        add.setAttribute("class","AddButton")

        add.addEventListener("click", function(){
           
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
            }else{
                alert("This item is already added")
            }
            totalPrice();
        })
        
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.append(image,innerBox,add);
        document.querySelector("#bucketBox").append(bucket);
        
    })
}

let newLuanchArr = [
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/sm/D-PR00002144.jpg?ver=39.2",
        Name: "5 Leg Pc & 2 Dips Bucket",
        Varity: "Non veg Serves 2",
        Price: "₹519.05",
        Offer: "Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002319.jpg?ver=39.2",
        Name: "Peri Peri 10 Pc Chicken Strips & 2 Dips",
        Varity: "Non veg Serves 1-2",
        Price: "₹499.05",
        Offer: "Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002141.jpg?ver=39.2",
        Name: "Peri Peri 10 Leg Pc & 4 Dips",
        Varity: "Non veg",
        Price: "₹948.57",
        Offer: "Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002158.jpg?ver=39.2",
        Name: "Peri Peri 6pc Chicken Strips",
        Varity: "Non veg Serves 2-3",
        Price: "₹299.05",
        Offer: "Save 16% on 6 Spicy Peri Peri chicken boneless strips",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
]

NewLuanch(newLuanchArr)

function NewLuanch(newLuanchArr){
    newLuanchArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        add.append(addImage)
        add.setAttribute("class","AddButton2")


        add.addEventListener("click", function(){
           
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
            }else{
                alert("This item is already added")
            }
            totalPrice();
        })
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.setAttribute("class", "box")
        bucket.append(image,innerBox,add);
        document.querySelector("#newLuanch").append(bucket);
    })
        
}

let ChickenRollsArr = [
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002324.jpg?ver=39.13",
        Name: "Classic Chicken Roll & Pepsi Combo",
        Varity: "Non veg Serves 1",
        Price: "₹₹176.19",
        Offer: "Our new Classic Chicken Roll served with Pepsi 475ml",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002325.jpg?ver=39.13",
        Name: "Double Chicken Roll & Pepsi Combo",
        Varity: "Non veg Serves 1",
        Price: "₹₹225.71",
        Offer: "Our new Double Chicken Roll served with Pepsi 475ml",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002067.jpg?ver=16.66",
        Name: "Double Rolls Combo for 2",
        Varity: "Non veg Serves 2",
        Price: "₹₹550.48",
        Offer: "Deal combo of 2 New Double Chicken Rolls, Large Fries, 2 Dips & 1 Pepsi PET [serves 2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002068.jpg?ver=16.66",
        Name: "Single Roll Combo for 2",
        Varity: "Non veg Serves 2",
        Price: "₹₹470.48",
        Offer: "Deal combo of 2 New Single Chicken Rolls, Large Fries, 2 Dips & 1 Pepsi PET [serves 2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002069.jpg?ver=16.66",
        Name: "Double Roll Combo for 1",
        Varity: "Non veg Serves 1",
        Price: "₹₹380.00",
        Offer: "Deal combo of 1 New Double Chicken Roll, Large Fries, 2 Dips & 1 Pepsi PET [serves 1]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002070.jpg?ver=16.66",
        Name: "Single Roll Combo for 1",
        Varity: "Non veg Serves 1",
        Price: "₹₹340.00",
        Offer: "Deal combo of 1 New Single Chicken Roll, Large Fries, 2 Dips & 1 Pepsi PET [serves 1]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002071.jpg?ver=16.66",
        Name: "2 Double Chicken Rolls",
        Varity: "Non veg Serves 2",
        Price: "₹₹335.24",
        Offer: "2 portions of the new Double Chicken Roll at a deal price[serves 2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002072.jpg?ver=16.66",
        Name: "2 Single Chicken Rolls",
        Varity: "Non veg Serves 2",
        Price: "₹₹255.24",
        Offer: "2 portions of the new Single Chicken Roll at a deal price [serves 2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002316.jpg?ver=39.13",
        Name: "2 Double Chicken Roll",
        Varity: "Non veg Serves 2",
        Price: "₹₹328.57",
        Offer: "Double the fun with 2 Double Chicken Rolls",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002315.jpg?ver=39.13",
        Name: "2 Classic Chicken Roll",
        Varity: "Non veg Serves 1",
        Price: "₹₹228.57",
        Offer: "Double the fun with 2 Classic Chicken Rolls",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    }
]

chickenRolls(ChickenRollsArr)

function chickenRolls(ChickenRollsArr){
    ChickenRollsArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        add.append(addImage)
        add.setAttribute("class","AddButton2")


        add.addEventListener("click", function(){
         
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
            }else{
                alert("This item is already added")
            }
            totalPrice();
        })
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.setAttribute("class", "box")
        bucket.append(image,innerBox,add);
        document.querySelector("#chickenRolls").append(bucket);
    })
}

let biryaniArr = [
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002016.jpg?ver=16.66",
        Name: "Classic Biryani Combo",
        Varity: "Non veg Serves 2-3",
        Price: "₹₹740.00",
        Offer: "Large portions of Biryani rice with 2 pc Hot & Crispy, 2 Gravies, 4 Strips & Pepsi PET [serves 2-3]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002017.jpg?ver=16.66",
        Name: "Smoky Grilled Biryani Combo",
        Varity: "Non veg Serves 2-3",
        Price: "₹₹740.00",
        Offer: "Large portions of Biryani rice with 2 pc Smoky Red, 2 Gravies, Med Popcorn & Pepsi PET [serves 2-3]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002052.jpg?ver=16.66",
        Name: "Popcorn Biryani Combo",
        Varity: "Non veg Serves 2-3",
        Price: "₹₹690.48",
        Offer: "Save 33% on signature bucket of 4pc Hot & crispy, 6 Wings, 4 strips, 2 Dips & Pepsi PET [serves 2-3 ]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K626.jpg?ver=16.66",
        Name: "Classic Chicken Biryani Bucket-Large",
        Varity: "Non veg Serves 2",
        Price: "₹₹475.24",
        Offer: "Large portions of Biryani rice served with 2 pc Hot & Crispy Chicken & 2 Gravies [serves 2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K627.jpg?ver=16.66",
        Name: "Popcorn Chicken Biryani Bucket-Large",
        Varity: "Non veg Serves 2",
        Price: "₹₹475.24",
        Offer: "Large portions of Biryani rice served with Chicken Popcorn & 2 Gravies [serves 2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K625.jpg?ver=16.66",
        Name: "Smoky Grilled Biryani Bucket-Large",
        Varity: "Non veg Serves 2",
        Price: "₹₹475.24",
        Offer: "Large portions of Biryani rice served with 2 pc Smoky Red Chicken & 2 Gravies [serves 2]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K623.jpg?ver=16.66",
        Name: "Classic Chicken Biryani Bucket",
        Varity: "Non veg Serves 1",
        Price: "₹₹229.52",
        Offer: "Hyderabadi style Biryani rice served with 1 pc Hot & Crispy & Spicy Gravy [serves 1]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K624.jpg?ver=16.66",
        Name: "Popcorn Chicken Biryani Bucket",
        Varity: "Non veg Serves 1",
        Price: "₹₹229.52",
        Offer: "Hyderabadi style Biryani rice served with Popcorn & Spicy Gravy [serves 1]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K625.jpg?ver=16.66",
        Name: "Smoky Grilled Biryani Bucket",
        Varity: "Non veg Serves 1",
        Price: "₹₹229.52",
        Offer: "Hyderabadi style Biryani rice served with 1 pc Smoky Red & Spicy Gravy [serves 1]",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K622.jpg?ver=16.66",
        Name: "Veg Biryani Bucket",
        Varity: "Veg Serves 1",
        Price: "₹₹188.57",
        Offer: "Hyderabadi style Biryani rice served with Veg Patty & Spicy Gravy [serves 1]",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    }
]

Biryani(biryaniArr)

function Biryani(biryaniArr){
    biryaniArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        add.append(addImage)
        add.setAttribute("class","AddButton2")


        add.addEventListener("click", function(){
            // totalPrice();
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
            }else{
                alert("This item is already added")
            }
            totalPrice();
        })
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.setAttribute("class", "box")
        bucket.append(image,innerBox,add);
        document.querySelector("#Biryani").append(bucket);
    })
}

let BoxMealArr = [
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000999.jpg?ver=16.66",
        Name: "All Chicken BoxNon veg",
        Varity: "Non veg",
        Price: "₹₹189.52",
        Offer: "A Box with your favorites! Get 1 pc Hot & Crispy, 2 Hot Wings & 1 Chicken Strip at a deal price",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001003.jpg?ver=16.66",
        Name: "Zinger Tandoori Box",
        Varity: "Non veg",
        Price: "₹₹313.33",
        Offer: "A deal for the Tandoori lovers : Get 1 Tandoori Zinger, 2 Hot Wings, 1 Veg Patty & Pepsi",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001039.jpg?ver=16.66",
        Name: "Popcorn Biryani Box",
        Varity: "Non veg",
        Price: "₹₹328.57",
        Offer: "Biryani lovers unite : Get 1 Popcorn Biryani Bucket with gravy, 2 Hot Wings & Pepsi",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001004.jpg?ver=16.66",
        Name: "Veg Zinger Box",
        Varity: "Non veg",
        Price: "₹₹313.33",
        Offer: "A deal for the Veg Zinger lovers : Get 1 Veg Zinger, 2 Veg Patties & a Pepsi",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001038.jpg?ver=16.66",
        Name: "Veg Biryani Box",
        Varity: "Veg",
        Price: "₹₹279.05",
        Offer: "Biryani lovers unite : Get 1 Veg Biryani Bucket with gravy, 1 Veg Patty & a Pepsi",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    }
]

boxMeal(BoxMealArr)

function boxMeal(BoxMealArr){
    BoxMealArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        add.append(addImage)
        add.setAttribute("class","AddButton2")


        add.addEventListener("click", function(){
           
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
            }else{
                alert("This item is already added")
            }
            totalPrice();
        })
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.setAttribute("class", "box")
        bucket.append(image,innerBox,add);
        document.querySelector("#boxMeal").append(bucket);
    })
}

let BurgerArr = [
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001025.jpg?ver=16.66",
        Name: "2 Chicken Krisper Burgers",
        Varity: "Non veg",
        Price: "₹228.57",
        Offer: "2 delicious chicken value burgers - at a deal price",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001022.jpg?ver=16.66",
        Name: "2 Veg Krisper Burgers",
        Varity: " Veg",
        Price: "₹158.10",
        Offer: "2 delicious veg value burgers - at a deal price",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001027.jpg?ver=16.66",
        Name: "Chicken & Krispers Combo",
        Varity: "Non veg",
        Price: "₹519.05",
        Offer: "Deal combo of 2 chicken value burgers, 2 pc Hot & Crispy, 2 dips & a chilled Pepsi PET",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K540.jpg?ver=16.66",
        Name: "Tandoori Zinger Burger",
        Varity: "Non veg",
        Price: "₹199.05",
        Offer: "Chicken zinger with a delicious tandoori sauce",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000956.jpg?ver=16.66",
        Name: "Mixed Zinger Doubles",
        Varity: "Non veg",
        Price: "₹348.57",
        Offer: "Best-seller combo of classic chicken zinger & tandoori zinger",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K439.jpg?ver=16.66",
        Name: "Classic Zinger Burger",
        Varity: "Non veg",
        Price: "₹189.52",
        Offer: "Signature burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000730.jpg?ver=16.66",
        Name: "Buddy Meal",
        Varity: "Non veg",
        Price: "₹499.05",
        Offer: "Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K146.jpg?ver=16.66",
        Name: "Veg Zinger Burger",
        Varity: "Veg",
        Price: "₹179.05",
        Offer: "Signature veg burger with crispy patties, veggies & a tangy sauce",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001023.jpg?ver=16.66",
        Name: "2 Veg Krispers Meal",
        Varity: "Veg",
        Price: "₹268.57",
        Offer: "2 veg value burgers, crispy medium fries & 2 delicious dips at a deal price!",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000974.jpg?ver=39.2",
        Name: "Family Feast",
        Varity: "Non Veg",
        Price: "₹859.05",
        Offer: "Family Deal of 3 chicken zingers, med popcorn, med fries & 1 Pepsi 475ml",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    }
]

Burger(BurgerArr)

function Burger(BurgerArr){
    BurgerArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        add.append(addImage)
        add.setAttribute("class","AddButton2")


        add.addEventListener("click", function(){
           
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
            }else{
                alert("This item is already added")
            }
            totalPrice();
        })
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.setAttribute("class", "box")
        bucket.append(image,innerBox,add);
        document.querySelector("#Burgers").append(bucket);
    })
}

let HomeSpecialArr = [
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K617.jpg?ver=39.2",
        Name: "Single Chicken Roll",
        Varity: "Non veg Serves 1",
        Price: "₹119.05",
        Offer: "Street style roll with single chicken strip, onions and two spicy sauce",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002348.jpg?ver=39.2",
        Name: "Chicken Longer Burger & 2 Strips Combo",
        Varity: "Non veg",
        Price: "₹219.05",
        Offer: "Longgg burger with crunchy chicken, onions & a punchy sauce , served with 2 peri peri chicken strips",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K136.jpg?ver=39.2",
        Name: "Regular Popcorn",
        Varity: "Non veg",
        Price: "₹115.24",
        Offer: "Signature bite-sized boneless chicken, with special spices",
        Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002301.jpg?ver=39.2",
        Name: "2 Veg Longer Burger",
        Varity: "Veg",
        Price: "₹198.10",
        Offer: "The really long burger with Veg Patty, Onion, Lettuce and two sauces",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K701.jpg?ver=39.2",
        Name: "Chocolate Lava Cake",
        Varity: "Veg",
        Price: "₹108.57",
        Offer: "Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    }
]

HomeSpecial(HomeSpecialArr)
function HomeSpecial(HomeSpecialArr){
    HomeSpecialArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        add.append(addImage)
        add.setAttribute("class","AddButton2")


        add.addEventListener("click", function(){
            
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
                // window.location.reload()
            }else{
                alert("This item is already added")
                // window.location.reload()
            }
            totalPrice();
        })
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.setAttribute("class", "box")
        bucket.append(image,innerBox,add);
        document.querySelector("#HomeSpecial").append(bucket);
    })
}

let SnacksArr = [
    {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000789.jpg?ver=16.66",
            Name: "Chicken & Fries Bucket",
            Varity: "Non veg",
            Price: "₹₹299.05",
            Offer: "Crowd-favorite combo of 2pc Hot & Crispy chicken with Medium Fries",
            Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000789.jpg?ver=16.66",
            Name: "Popcorn & Fries bucket",
            Varity: "Non veg",
            Price: "₹₹319.05",
            Offer: "Large Chicken Popcorn with Med Fries - at a deal price",
            Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K264.jpg?ver=39.13",
            Name: "Mingles Bucket (Trending)",
            Varity: "Non veg Serves 1-2",
            Price: "₹₹339.05",
            Offer: "Save 13% on this mingle of 4 Wings, 2 chicken peri peri boneless strips & a Reg Popcorn",
            Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002171.jpg?ver=39.13",
            Name: "Mingles Bucket",
            Varity: "Non veg Serves 1-2",
            Price: "₹₹379.05",
            Offer: "Save 13% on this mingle of 4 Wings, 2 Strips & a Reg Popcorn",
            Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K008.jpg?ver=16.66",
            Name: "4pc Hot & Crispy Chicken",
            Varity: "Non veg",
            Price: "₹₹428.57",
            Offer: "4 pcs of signature Hot & crispy chicken at a deal price",
            Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K223.jpg?ver=16.66",
            Name: "Large Popcorn",
            Varity: "Non veg",
            Price: "₹₹228.57",
            Offer: "Signature bite-sized boneless chicken, with special spices",
            Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K137.jpg?ver=39.13",
            Name: "Medium Popcorn",
            Varity: "Non veg",
            Price: "₹₹164.76",
            Offer: "Signature bite-sized boneless chicken, with special spices",
            Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K136.jpg?ver=39.13",
            Name: "Regular Popcorn",
            Varity: "Non veg",
            Price: "₹₹115.24",
            Offer: "Signature bite-sized boneless chicken, with special spices",
            Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K138.jpg?ver=16.66",
            Name: "Large Fries",
            Varity: "Veg",
            Price: "₹₹119.05",
            Offer: "Jazz up your meal with crispy large fries!",
            Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K444.jpg?ver=16.66",
            Name: "2 pcs Smoky Red Chicken",
            Varity: "Non veg",
            Price: "₹₹248.57",
            Offer: "Spicy, red, grilled chicken",
            Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K016.jpg?ver=16.66",
            Name: "Medium Fries",
            Varity: "Veg",
            Price: "₹₹99.05",
            Offer: "Jazz up your meal with Crispy Fries!",
            Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K007.jpg?ver=16.66",
            Name: "2 pc Hot & Crispy Chicken",
            Varity: "Non veg",
            Price: "₹₹229.52",
            Offer: "Signature Hot & crispy chicken",
            Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K443.jpg?ver=16.66",
            Name: "1 pc Smoky Red Chicken",
            Varity: "Non veg",
            Price: "₹₹124.76",
            Offer: "Spicy, red, grilled chicken",
            Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K303.jpg?ver=16.66",
            Name: "4pc Hot Chicken Wings",
            Varity: "Non veg",
            Price: "₹₹164.76",
            Offer: "Seasoned, signature KFC chicken wings",
            Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002159.jpg?ver=39.13",
            Name: "Peri Peri 3pc Chicken Strips",
            Varity: "Non veg",
            Price: "₹₹175.24",
            Offer: "3 Spicy Peri Peri chicken strips",
            Dot: "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K496.jpg?ver=16.66",
            Name: "Choco Mud Pie",
            Varity: " Veg",
            Price: "₹₹128.57",
            Offer: "Chocolate lovers unite! Say hello to our creamy chocolate & cake dessert- a must try!",
            Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K351.jpg?ver=16.66",
            Name: "2 pc Veg Patty",
            Varity: "Veg",
            Price: "₹₹155.24",
            Offer: "Delicious, crispy, veg add-on",
            Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K497.jpg?ver=16.66",
            Name: "Coffee Mousse Cake",
            Varity: "Veg",
            Price: "₹₹128.57",
            Offer: "Coffee, chocolate, cake…whats not to love? Enjoy this for coffee-licious temptations!",
            Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K616.jpg?ver=16.66",
            Name: "Tandoori Masala Dip",
            Varity: "Veg",
            Price: "₹₹28.57",
            Offer: "Special tandoori flavor dip to add a twist to your meal",
            Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K677.jpg?ver=39.13",
            Name: "Biriyani Rice",
            Varity: "Veg",
            Price: "₹₹139.04",
            Offer: "Flavorful aromatic rice to pair with your KFC favorites",
            Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000852.jpg?ver=16.66",
            Name: "Pack of 4 Dips",
            Varity: " Veg",
            Price: "₹₹109.52",
            Offer: "Adding dips is always a good idea!",
            Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K662.jpg?ver=16.66",
            Name: "Nashville Hot Pepper Dip",
            Varity: "Veg",
            Price: "₹₹28.57",
            Offer: "Hot, peppery goodness of Nashville - our new signature dip",
            Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000853.jpg?ver=16.66",
            Name: "Pack of 2 Dips",
            Varity: "Veg",
            Price: "₹₹57.14",
            Offer: "Adding dips is always a good idea!",
            Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        },
        {
            Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K661.jpg?ver=39.13",
            Name: "Dynamite Spicy Mayo Dip-20mg",
            Varity: "Veg",
            Price: "₹₹28.57",
            Offer: "Spicy, punchy mayo -our new signature dip",
            Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
            Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        }
    ]
    
    Snacks(SnacksArr)
    
    function Snacks(SnacksArr){
        SnacksArr.forEach(function(elem){
            let image = document.createElement("img");
            image.setAttribute("src", elem.Image);
            let name = document.createElement("h3");
            name.innerText = elem.Name;
            let non = document.createElement("p")
            non.innerText = elem.Varity
            let dot = document.createElement("img");
            dot.setAttribute("src", elem.Dot)
            let varity = document.createElement("div")
            varity.append(dot,non)
            let offer = document.createElement("p");
            offer.innerText = elem.Offer;
            let price = document.createElement("h3");
            price.innerText = elem.Price;
            let addImage = document.createElement("img");
            addImage.setAttribute("src", elem.Add)
            let add = document.createElement("button");
            add.innerText = "Add to Cart";
            add.append(addImage)
            add.setAttribute("class","AddButton2")
    
    
            add.addEventListener("click", function(){
                
                if(check(elem.Name)===false){
                    addToCart(elem)
                    // window.location.reload()
                    alert("Item added")
                }else{
                    alert("This item is already added")
                    // window.location.reload()
                }
                totalPrice();
            })
            let innerBox = document.createElement("div");
            innerBox.append(name,varity,price,offer)
            let bucket = document.createElement("div");
            bucket.setAttribute("class", "box")
            bucket.append(image,innerBox,add);
            document.querySelector("#Snacks").append(bucket);
        })
    }

let BeveragesArr = [
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K350.jpg?ver=16.66",
        Name: "Pepsi PETVeg",
        Varity: "Veg",
        Price: "₹₹57.14",
        Offer: "Pepsi PET",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K485.jpg?ver=16.66",
        Name: "Pepsi Can 330 ml",
        Varity: "Veg",
        Price: "₹₹57.14",
        Offer: "Pepsi Can 330 ml",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K487.jpg?ver=16.66",
        Name: "7UP Can 330 ml",
        Varity: "Veg",
        Price: "₹₹57.14",
        Offer: "7UP Can 330 ml",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K486.jpg?ver=39.13",
        Name: "Pepsi Black Can 330 ml",
        Varity: "Veg",
        Price: "₹₹57.14",
        Offer: "Pepsi Black Can 330 ml",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    },
    {
        Image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K488.jpg?ver=39.13",
        Name: "Mirinda Can 330 ml",
        Varity: "Veg",
        Price: "₹₹57.14",
        Offer: "Mirinda Can 330 ml",
        Dot: "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg",
        Add: "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
    }
]

Beverages(BeveragesArr)

function Beverages(BeveragesArr){
    BeveragesArr.forEach(function(elem){
        let image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        let name = document.createElement("h3");
        name.innerText = elem.Name;
        let non = document.createElement("p")
        non.innerText = elem.Varity
        let dot = document.createElement("img");
        dot.setAttribute("src", elem.Dot)
        let varity = document.createElement("div")
        varity.append(dot,non)
        let offer = document.createElement("p");
        offer.innerText = elem.Offer;
        let price = document.createElement("h3");
        price.innerText = elem.Price;
        let addImage = document.createElement("img");
        addImage.setAttribute("src", elem.Add)
        let add = document.createElement("button");
        add.innerText = "Add to Cart";
        
        add.append(addImage)
        add.setAttribute("class","AddButton2")


        add.addEventListener("click", function(){
            // totalPrice();
            if(check(elem.Name)===false){
                addToCart(elem)
                alert("Item added")
                // window.location.reload()
            }else{
                alert("This item is already added")
                // window.location.reload()
            }
            totalPrice();
        })
        let innerBox = document.createElement("div");
        innerBox.append(name,varity,price,offer)
        let bucket = document.createElement("div");
        bucket.setAttribute("class", "box")
        bucket.append(image,innerBox,add);
        document.querySelector("#Beverages").append(bucket);
    })
}


function addToCart(elem){
    addCartArr.push(elem);
    // console.log("Hi")
    localStorage.setItem("CartData", JSON.stringify(addCartArr))
}

function check(name){
    let checkCart = addCartArr.filter(function(elem){
        return name === elem.Name
    })
    if(checkCart.length>0){
        return true;
    }else{
        return false;
    }
}
let valueofPrice=0;


function totalPrice(){
let allPrice=JSON.parse(localStorage.getItem("CartData")) || [];

// console.log('hello')
// allPrice.forEach(e=>{
//     console.log(e.Price)
//     valueofPrice+=Number(e.Price);
// })
document.getElementById('pricess').innerText=allPrice.length;
// window.location.reload();
}
totalPrice();
let allData=document.querySelectorAll('.btn')
allData.forEach((e,i)=>{
e.addEventListener('click',function(event){
    allData.forEach(x=>{
        x.style.backgroundColor='white'
        x.style.color='black'
    })
    event.target.style.color='red'

})
})

totalPrice()
