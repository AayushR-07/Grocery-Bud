var items = groceryItems;

//Render app
function render () {
    var $app = $("#app");
    $app.empty();

    var $itemElement = createItems(items);
    $app.append($itemElement);

}

//Initialize app
$(document).ready(function (){
    render();
});

//updating app.js

function editCompleted(itemId){
    items = $.map(items, function(item){
        if(item.id === itemId){
            return $.extend({},item, {completed: !item.completed});
        }
        return item;

    });

    render();
}


//Remove Item Function
function removeItem(itemId) {
  items = items.filter((item) => item.id !== itemId);
  setLocalStorage(items);
  render();
  setTimeout(() => alert("Item Deleted Successfully!"), 0);
}