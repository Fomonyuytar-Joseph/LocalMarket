const categories = [
    {
        id: 1,
        img: require('../assets/CategoryImages/shoe.webp'),
        heading: 'Shoe',
        paragraph: 'Lorem Ipsum is simply dummy text',
        backgroundColor: '#F6AFB0',
    },
    {
        id: 2,
        img: require('../assets/CategoryImages/iphone13.png'),
        heading: 'Phones',
        paragraph: 'Lorem Ipsum is simply dummy text',
        backgroundColor: '#8ECC81',
    },
    {
        id: 3,
        img: require('../assets/CategoryImages/shirt.png'),
        heading: 'Dresses',
        paragraph: 'Lorem Ipsum is simply dummy text',
        backgroundColor: '#80CEEE',
    },
    {
        id: 4,
        img: require('../assets/CategoryImages/cosmetics3.jpg'),
        heading: 'Cosmetics',
        paragraph: 'Lorem Ipsum is simply dummy text',
        backgroundColor: '#80CEEE',
    }
];








const Sliderdata= [
    {
      title: 'First Game',
      image: require('../assets/images/dad.jpg'),
    },
    {
      title: 'Second Game',
      image: require('../assets/images/computer.jpg'),
    },
    {
      title: 'Third Game',
      image: require('../assets/images/toys.jpg'),
    },
    {
      title: 'Fourth Game',
      image: require('../assets/images/beauty.jpg'),
    },
  ];


  const Productdata=[{
         id:1,
         name:'ps4',
         img:require('../assets/images/ps4.jpg'),
         price:100,
        },
     {  
         id:2,
        name:'xbox',
        img:require('../assets/images/xbox.jpg'),
        price:100
    },

        {
       id:3,
       name:'ps5',
       img:require('../assets/images/ps5.jpg'),
       price:100


        }
    
    
    
    ]


    const Shopsdata=[
        {
       id:1,
       heading:'phone shop',

       img:require('../assets/ShopImages/shop.png'),
          
    
            },
        {
       id:2,
       heading:'caffe shop',

       img:require('../assets/ShopImages/cafe.jpg'),
          
    
            },
        {
       id:3,
       heading:'Nike Shop',

       img:require('../assets/ShopImages/nike.png'),
          
    
            },
        {
       id:4,
       heading:'Online Shop',

       img:require('../assets/ShopImages/shop2.jpg'),
          
    
            },
];


const  NewProductdata=[
    {
      id:1,
      heading:'Shoe',
      img:require('../assets/NewImages/point.png'),
  },
    {
      id:2,
      heading:'Iphone X',
      img:require('../assets/NewImages/iphonex.jpg'),
  },
    {
      id:3,
      heading:'School Bag',
      img:require('../assets/NewImages/bag2.jpg'),
  },
    {
      id:4,
      heading:'adidas shoe',
      img:require('../assets/NewImages/adidas2.jpg'),
  },
] 

export {categories,Sliderdata ,Productdata,Shopsdata ,NewProductdata}
