// Your code here
const dorger = document.getElementById("dodger")
document.addEventListener("keydown", function(e){
   
        const newbottom = dorger.style.bottom.replace("px", "");
        const bottomInt = parseInt(newbottom)


        const newleft =dorger.style.left.replace("px", "");
        const leftint =parseInt(newleft);
        
        if(e.key ==="ArrowLeft"){
            if(leftint >=0){
                dorger.style.left = `${leftint-1}px`

            }
            else{
                alert("game over")
            }
       

    }else if(e.key ==="ArrowRight"){
        
        if(leftint <=360){
            dorger.style.left = `${leftint+1}px`

        }else{
            alert("game over")
        }

    }else if(e.key ==="ArrowDown"){
        
        if(bottomInt >= 0){
            dorger.style.bottom = `${bottomInt-1}px`

        }else{
            alert("game over")
        }
    
    }else if(e.key ==="ArrowUp"){
        
        if(bottomInt <=380){
            dorger.style.bottom = `${bottomInt+1}px`

        }else{
            alert("game over")
        }

    }else{
        alert("Click the right key")
    }
    
 })




 
