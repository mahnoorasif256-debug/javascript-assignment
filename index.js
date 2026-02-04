var weather = prompt(`
 select a weather:
1- winter
2- summer
3- autumn
4- spring
5-rainy
6- windy
7- cloudy    
`).toLowerCase();

if (weather === "winter") {
document.writeln(`
   <div class="win" style="background-image: url(./images/winter.gif);width: 100%;  background-size: cover; background-repeat: no-repeat;  height: 700px;">

  <div class="card mx-auto animate__animated animate__lightSpeedInLeft  animation-duration: 4s" style="width:21rem;">
  <img src="./images/emotions.gif" class="card-img-top img-fluid" alt="...">
  <div class="card-body mt-2">
    <h4 class="card-title fw-bold text-center">Winter Card</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary d-block mx-5">snowing season</a>
  </div>
</div>


</div>
    
 `)

}
 else if (weather === "summer") {
document.writeln(`
  <div class="win" style="background-image: url(./images/cloudy.gif);width: 100%;  background-size: cover; background-repeat: no-repeat;  height: 700px;">

  <div class="card mx-auto animate__animated animate__rubberBand  " style="width:21rem;">
  <img src="./images/haha.gif" class="card-img-top img-fluid" alt="...">
  <div class="card-body mt-2">
    <h4 class="card-title fw-bold text-center">Summer Card</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary d-block mx-5">Summer season</a>
  </div>
</div>


</div>
    
 `)
}
 else if(weather === "autumn") {
document.writeln(`
  <div class="win" style="background-image: url(./images/nature.gif);width: 100%;  background-size: cover; background-repeat: no-repeat;  height: 700px;">

  <div class="card mx-auto animate__animated animate__bounceInDown  animation-duration: 4s" style="width:20rem; ">
  <img style="height: 2%;" src="./images/boy.gif" class="card-img-top img-fluid " alt="...">
  <div class="card-body">
    <h4 class="card-title fw-bold text-center">Autumn Card</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary d-block mx-5">Autumn season</a>
  </div>
</div>


</div>
  
    
 `)
}

 else if (weather === "spring") {
document.writeln(`
 <div class="win" style="background-image: url(./images/butter.gif);width: 100%;  background-size: cover; background-repeat: no-repeat;  height: 700px;">

   <div class="card mx-auto animate__animated animate__rotateIn  animation-duration: 2s" style="width:20rem; ">
   <img style="height: 2%;" src="./images/prince.gif" class="card-img-top img-fluid " alt="...">
   <div class="card-body">
    <h4 class="card-title fw-bold text-center">Spring Card</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary d-block mx-5">Spring season</a>
   </div>
</div>
  
    
 `)
}

 else if (weather === "rainy") {
document.writeln(`
  <div class="win" style="background-image: url(./images/moon.webp);width: 100%;  background-size: cover; background-repeat: no-repeat;  height: 700px;">

   <div class="card mx-auto animate__animated animate__flash animate__slow	2s" style="width:20rem; ">
   <img style="height: 2%;" src="./images/ama.gif" class="card-img-top img-fluid " alt="...">
   <div class="card-body">
    <h4 class="card-title fw-bold text-center">Rainy Card</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary d-block mx-5">Rainy season</a>
   </div>
</div>

    
 `)
}

 else if (weather === "windy") {
document.writeln(`
   <div class="win" style="background-image: url(./images/tree.gif);width: 100%;  background-size: cover; background-repeat: no-repeat;  height: 700px;">

   <div class="card mx-auto animate__animated animate__hinge animate__rollIn" style="width:20rem; ">
   <img style="height: 2%;" src="./images/peppa.gif" class="card-img-top img-fluid " alt="...">
   <div class="card-body">
    <h4 class="card-title fw-bold text-center">Windy Card</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary d-block mx-5">Windy season</a>
   </div>
</div>

    
 `)
}

 else if(weather === "cloudy") {
document.writeln(`
  <div class="win" style="background-image: url(./images/clodee.gif);width: 100%;  background-size: cover; background-repeat: no-repeat;  height: 700px;">

   <div class="card mx-auto animate__animated  animate__zoomInUp" style="width:20rem; ">
   <img style="height: 2%;" src="./images/fly.gif" class="card-img-top img-fluid " alt="...">
   <div class="card-body">
    <h4 class="card-title fw-bold text-center">Cloudy Card</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary d-block mx-5">Cloudy season</a>
   </div>
</div>

    
 `)
}else{
    document.writeln(`
  <div class="win mb-5" style="background-image: url(./images/noise.gif);width: 100%;  background-size: cover; background-repeat: no-repeat;  height: 700px;">

  <h1 class="text-center fw-bold mt-2">Try Again!</h1>


</div>
  
    
 `)
}