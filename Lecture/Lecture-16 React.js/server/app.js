const express=require("express");
const app=express()
const genres=require('./genres');
const movies=require('./movies');
app.use(express.json())     //accept data coming
app.get("/genres",function(req,res){
    res.status(200).json({
        genres
    });
});
app.get("/movies",function(req,res){
    res.status(200).json({
        movies:movies.getMovies()
    });
});
app.post("/saveMovie",function(req,res){
    const data=req.body;
    // console.log(data);
    const movie=movies.saveMovie(data);
    console.log(movie);
    res.status(200).json({movie})
})

app.listen(4000);
console.log("Server is running at port 4000")