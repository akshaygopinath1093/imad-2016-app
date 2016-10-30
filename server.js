var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    article1:{
    title: 'Article-1|Akshay',
    heading: 'Article-one',
    date: '24-10-2016',
    content: `
      <p>
        Hello everyone this is my first article. Bingooo...! Hello everyone this is my first article. Bingooo...!
      </p>
      <p>
        Hello everyone this is my first article. Bingooo...! Hello everyone this is my first article. Bingooo...!
      </p>
       <p>
        Hello everyone this is my first article. Bingooo...! Hello everyone this is my first article. Bingooo...!
      </p>
   `
},
    article2:{
    title: 'Article-2|Akshay',
    heading: 'Article-two',
    date: '23-11-2016',
    content: `
      <p>
        Hello everyone this is my 2nd article. Hello everyone this is my second article. Bingooo...!
      </p>
      <p>
        Hello everyone this is my 2nd article. Hello everyone this is my second article. Bingooo...!
      </p>
   `  
    },
    article3:{
    title: 'Article-3|Akshay',
    heading: 'Article-three',
    date: '14-11-2016',
    content: `
      <p>
        Hello everyone this is my third article.
      </p>  `   
    }
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var htmlTemplate=`<html>
<head>
  <title> ${title}</title>
   <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
 <div class='container'>
    <div>
    <a href= "/">Home</a>
    <div>
    <hr/>
    <h3>
    ${heading}
    </h3>
    <div>
      ${date}
    </div>
    <div>
     ${content}
    </div>
   <div>
 </body>
 </html>`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article1',function (req, res){
   res.send(createTemplate(article1)); 
});

app.get('/article2',function (req, res){
   res.send('this is article2 bingo'); 
});

app.get('/article3',function (req, res){
   res.send('this is article3......'); 
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
