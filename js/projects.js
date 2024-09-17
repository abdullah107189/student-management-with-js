var reader = new FileReader();

    reader.onload = function(event){
           var dataUri = event.target.result,
               img = document.createElement("img");

               img.src =  dataUri;
               document.body.appendChild(img);
    };

    reader.onerror = function(event){
           console.log("File could not be read: " + event.target.error.code);
    };

reader.readAsDataURL("/uploads/extras/item_a/image1.png");