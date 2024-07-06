import  express from "express" ;  
import bodyParser from "body-parser";

const port = 3000 ;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



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
    res.render("projects.ejs",{});
})




app.listen(port,()=>{
    console.log("Listening on port 3000");
}); 