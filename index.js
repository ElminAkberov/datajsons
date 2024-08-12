import express from "express"
const app = express()
const port = 9000
app.use("/",(req,res)=>{
    res.json({message:{
        "cocktail": [
            {
                "id":1,
                "name":"A1",
                "img":"https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
                "ingr":["Gin","Grand Marnier","Lemon Juice","Grenadine"]
            },
            {
                "id":2,
                "name":"GG",
                "img":"https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
                "ingr":["Galliano","Ginger ale","Ice"]
            },
            {
                "id":3,
                "name":"50-50",
                "img":"https://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg",
                "ingr":["Vanilla vodka","Grand Marnier","Orange juice"]
            },
            {
                "id":4,
                "name":"Derby",
                "img":"https://www.thecocktaildb.com/images/media/drink/52weey1606772672.jpg",
                "ingr":["Gin","Peach Bitters","Mint"]
            },
            {
                "id":5,
                "name":"Zinger",
                "img":"https://www.thecocktaildb.com/images/media/drink/iixv4l1485620014.jpg",
                "ingr":["Peachtree schnapps","Surge"]
            },
            {
                "id":6,
                "name":"Apello",
                "img":"https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
                "ingr":["Orange juice","Grapefruit juice","Apple juice","Maraschino cherry"]
            },
            {
                "id":7,
                "name":"Casino",
                "img":"https://www.thecocktaildb.com/images/media/drink/1mvjxg1504348579.jpg",
                "ingr":["Gin","Cherry","Maraschino liqueur","Lemon juice","Orange bitters"]
            },
            {
                "id":8,
                "name":"Mojito",
                "img":"https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
                "ingr":["Light rum","Lime","Sugar","Mint","Soda water"]
            },
            {
                "id":9,
                "name":"Paloma",
                "img":"https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg",
                "ingr":["Grape Soda","Tequila"]
            },
            {
                "id":10,
                "name":"Vesuvio",
                "img":"https://www.thecocktaildb.com/images/media/drink/26cq601492976203.jpg",
                "ingr":["Light rum","Sweet Vermouth","Lemon","Egg White","Powdered sugar"]
            },
            {
                "id":11,
                "name":"Stinger",
                "img":"https://www.thecocktaildb.com/images/media/drink/2ahv791504352433.jpg",
                "ingr":["Brandy","White Creme de Menthe"]
            },
            {
                "id":12,
                "name":"Paradise",
                "img":"https://www.thecocktaildb.com/images/media/drink/ejozd71504351060.jpg",
                "ingr":["Gin","Apricot Brandy","Orange Juice"]
            },   
            {
                "id":13,
                "name":"ABC",
                "img":"https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
                "ingr":["Amaretto","Cognac","Baileys irish cream"]
            },   
            {
                "id":14,
                "name":"747",
                "img":"https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
                "ingr":["Kahlua","Frangelico","Baileys irish cream"]
            },   
            {
                "id":15,
                "name":"Ace",
                "img":"https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
                "ingr":["Gin","Grenadine","Milk","Egg White","Heavy cream"]
            },
            {
                "id":16,
                "name":"B-52",
                "img":"https://www.thecocktaildb.com/images/media/drink/5a3vg61504372070.jpg",
                "ingr":["Grand Marnier","Baileys irish cream","Kahlua"]
            },
            {
                "id":17,
                "name":"Smut",
                "img":"https://www.thecocktaildb.com/images/media/drink/rx8k8e1504365812.jpg",
                "ingr":["Peach schnapps","Pepsi Cola","Orange Juice","Red wine"]
            },  
            {
                "id":18,
                "name":"AT&T",
                "img":"https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
                "ingr":["Absolut vodka","Gin","Tonic water"]
            },  
            {
                "id":19,
                "name":"Rose",
                "img":"https://www.thecocktaildb.com/images/media/drink/8kxbvq1504371462.jpg",
                "ingr":["Apricot brandy","Gin","Dry Vermouth","Lemon juice","Grenadine","Powdered sugar"]
            },  
            {
                "id":20,
                "name":"H.D.",
                "img":"https://www.thecocktaildb.com/images/media/drink/upusyu1472667977.jpg",
                "ingr":["Baileys irish cream","Whisky","Coffee"]
            }   
        ]
    }})
})
app.listen(9000,()=>{
    console.log(`Starting Server on Port ${port}`)
})