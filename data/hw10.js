// JavaScript source code 
//function displayThings() {
//    alert("hit");
   
//}
$(document).ready(function () {
    debugger;
    

   
});
 var xhr = new XMLHttpRequest();
 function displayThings() {        
     xhr.onload = function () {
        
            if (xhr.status === 200) {
                responseObject = JSON.parse(xhr.responseText);

                var newContent = '';
                for (var i = 0; i < responseObject.gems.length; i++) {
                    newContent += '<div class= "gems">';
                    newContent += '<a href = " + responseObject.gems[i].img>"';
                    newContent += '<h3>' + responseObject.gems[i].name + '</h3></a><br/>';
                    newContent += '<p>' + responseObject.gems[i].info + '</p>';
                    newContent += '</div>';
                }
                document.getElementById('things').innerHTML = newContent;
            }
        };
        xhr.open('GET', 'data/entities.json', true);
        xhr.send(null);
 }


