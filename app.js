const { send } = require("process");

express = require("express");
app = express();

hotel = require("./student.json");


app.get("/details", function(req, res)
{
    nameList = [];
    hotel.forEach(element =>
    {
        nameList.push(element.name) 
    });
    res.send(nameList);
})


app.get("/searchByName", function(req, res)
{
    keyword = req.query.sName;
    searchCity = [];
    hotel.forEach(element =>
    {
        if(keyword == element.city)
        {
            searchCity.push(element.name); 
        }
    });
    res.send(searchCity);
})


app.get("/searchByState", function(req, res)
{
    keyword = req.query.sType;
    searchType = [];
    hotel.forEach(element =>
    {
        if(keyword == element.type)
        {
            searchType.push(element.name); 
        }
    });
    res.send(searchType);
})


app.get("/searchByModeOfLiving", function(req, res)
{
    keyword = req.query.sModeOfLiving;
    searchModeOfLiving = [];
    hotel.forEach(element =>
    {
        for (const key in element.ModeOfLiving)
        {
            if(keyword == element.ModeOfLiving[key])
            {
                searchModeOfLiving.push(element.name);
            }
        }
    });
    res.send(searchModeOfLiving);
})


// Server Listening...
app.listen(3000, function(req, res)
{
    console.log("Server listening to port 3000");
})
