const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
   const xPos = e.offsetX;
   const yPos = e.offsetY;
   const spanE = document.createElement("span");
   spanE.style.left = xPos + "px";
   spanE.style.top = yPos + "px";
   const size = Math.random() * 100;
   spanE.style.width = size + "px";
   spanE.style.height= size + "px";
   body.appendChild(spanE);

   setTimeout(() => {
    spanE.remove();
   },3000);
});