// duplicate the 1st item 
document.querySelector('.dupBtn').addEventListener('click', function(e) {
    const itemToClone = document.querySelector('.wrapper').cloneNode(true);
    document.body.appendChild(itemToClone);
  });
  
  // toggle color
  let isBlue = true;
  document.querySelector('.colorBtn').addEventListener('click', function(e) {
    if(isBlue){
      document.querySelector('.wrapper').style.backgroundColor = 'red';
    } else {
      document.querySelector('.wrapper').style.backgroundColor = 'blue';
    }
    isBlue = !isBlue;
  });
  
  // change name 
  document.querySelector('.txtBtn').addEventListener('click', function(e) {
    let name = prompt("Rename the collection....");
    if (name) {
      document.querySelector('.wrapper h3').innerText = name;
    }
  });
  
  // delete the last item
  document.querySelector('.deleteBtn').addEventListener('click', function(e) {
    let wantsTo = confirm("Are you sure?");
    if (wantsTo) {
      if (document.querySelector('.wrapper:last-child') !== document.querySelector('.wrapper')) {
        document.querySelector('.wrapper:last-child').remove();      
      }
      else {
        alert("YOU CAN NOT DELETE KEEF!!!!");
      }
    }
  });