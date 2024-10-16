 // testcomment to check whether git locally uses a different account that the github 
import  express from "express" ;  
import bodyParser from "body-parser";
import fs from "fs" ;
import appendFile from "fs" ;

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

app.post("/send",(req,res)=>{
    console.log(req.body);
    var responsesData = fs.readFileSync('responses.json') ;
    var data = JSON.parse(responsesData) ; 
    data.push(req.body);
    var toWrite = JSON.stringify(data);
    fs.writeFile("responses.json",toWrite,(err) => {}); 
    res.redirect("/contact");
});

app.get("/projects",(req,res)=>{

    var data = JSON.parse(projectsData);
    res.render("projects.ejs",{projects:data});
})




app.listen(port,()=>{
    console.log("Listening on port 3000");
}); 
