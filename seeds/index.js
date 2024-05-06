const mongoose= require("mongoose");
const cities = require("./cities");
const {places , descriptors} = require("./seedHelpers");
const Campground= require("../models/campground");


mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp",{
    useNewUrlParser:true,

    useUnifiedTopology:true 
});

const db = mongoose.connection;
db.on("error", console.error.bind (console, "connection error:"));
db.once("open", () => {
console.log("Database connected");
});

const sample = (array) => array [Math.floor(Math.random() * array.length)];



const seedDB = async() =>{
    await Campground.deleteMany({});
    for (let i =0 ; i<50 ; i++){
        const random1000 = Math.floor(Math.random() * 1000 );
        const price= Math.floor(Math.random() *20)  +10 ;
        const camp = new Campground({
            author:'65a62af6de09b8e410b7b68f',
            title: `${sample(descriptors)} ${sample( places )}`,
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eos
             consequatur dolorum dignissimos quas explicabo sapiente voluptas, ad
              voluptates facilis mollitia voluptatum saepe nulla, ut tempore rerum! Aspernatur, laudantium eaque
            Commodi magnam nemo quos est eius veniam blanditiis sunt. 
            Voluptatem aperiam quas deleniti nostrum? Vitae, sequi ratione.
             Facilis repellendus soluta quam fuga quasi voluptatum dolores sint, ipsa vero eaque voluptate.`,
        price,
        geometry: { 
          type: 'Point',
           coordinates: [
            cities[random1000].longitude,
            cities[random1000].latitude,   
           ]
            },

        images:   [
            {
              url: 'https://res.cloudinary.com/dh4ceqwtn/image/upload/v1705994886/yelpcamp/a2tmbdkjyvmtbo2c0gne.jpg',
              filename: 'yelpcamp/a2tmbdkjyvmtbo2c0gne'
            },
            {
              url: 'https://res.cloudinary.com/dh4ceqwtn/image/upload/v1705994886/yelpcamp/qpjsi6wrq2qsgnhoymuc.jpg',
              filename: 'yelpcamp/qpjsi6wrq2qsgnhoymuc'
            }
          ]
            })
        await camp.save();
    } 
    
}
seedDB().then(() =>{
    mongoose.connection.close();
})