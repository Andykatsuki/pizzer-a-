menu_list_array = ["Veg Margherita Pizza",
                    "Chicken Tandoori Pizza",
                    "veg Supreme Pizza",
                    "paneer Tikka Pizza",
                    "Deluxe Veggie Pizza",
                    "Veg Extravaganza Pizza"];

function getmenu(){
var htmldata="";
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++)
   {htmldata=htmldata+menu_list_array[i]+ '<br>'
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata=""
for(var i=0;i<menu_list_array.length;i++){
   htmldata=htmldata+imgtags+menu_list_array[i]+'<br>';
}
}
function add_top(){
   var item=document.getElementById("add_item").value;
   menu_list_array.push(item);
   add_item();
}