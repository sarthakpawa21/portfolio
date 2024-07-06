import  express from "express" ;  
import bodyParser from "body-parser";
import fs from "fs" ;

var projectsData = fs.readFileSync('public/data/projects.json') ;

const port = 3000 ;
const app = express();
var bodyparser = bodyParser ; 

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json()) ;



app.get("/",(req,res)=>{
    res.render("index.ejs",{});
})

app.get("/about",(req,res)=>{
    res.render("about.ejs",{});
})
app.get("/contact",(req,res)=>{
    res.render("contact.ejs",{});
})
app.get("/projects",(req,res)=>{

    var data = JSON.parse(projectsData);
    console.log(data) ;
    res.render("projects.ejs",{projects:data});
})




app.listen(port,()=>{
    console.log("Listening on port 3000");
}); 