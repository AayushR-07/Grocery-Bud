// Create SingleItem Element
//updated
function createSingleItem(item) {
  
   const div = document.createElement("div");
  div.className = "single-item";

  $div.innerHTML =`
    <input type="checkbox" ${item.completed ? "checked" : ""} />
    <p style="text-decoration: ${item.completed ? "line-through" : "none"}">
      ${item.name}
    </p>
    <button class="btn icon-btn edit-btn" type="button">
      <i class="fa-regular fa-pen-to-square"></i>
    </button>
    <button class="btn icon-btn remove-btn" type="button">
      <i class="fa-regular fa-trash-can"></i>
    </button>
  `;

  //Add event listener for checkbox
  const checkbox = div.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change",() => editCompleted(item.id));


  //Add event listener for remove button
    const removeBtn = div.querySelector('.remove-btn');
  checkbox.addEventListener("click",() => editCompleted(item.id));


  //Add event listener for edit button
    const editBtn = div.querySelector('.edit-btn');
  checkbox.addEventListener("click",() => editCompleted(item.id));
  
  return $div;
}

