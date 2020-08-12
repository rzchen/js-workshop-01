document.addEventListener("DOMContentLoaded", function(){
  let circle = document.querySelector('#circle')
  let target = document.querySelector('#target')

  //source
  circle.addEventListener('drag', function(e){
    let div = document.elementFromPoint(e.clientX, e.clientY)
    if(div.id === 'target'){
      document.querySelector('#target').appendChild(e.target)
    }
    if(div.id === 'source'){
      document.querySelector('#source').appendChild(e.target)
    }
    // console.log(div)
    // console.log('drag')
  })

  // circle.addEventListener('dragstart', function(){
  //   console.log('dragstart')
  // })

  // circle.addEventListener('dragend', function(){
  //   console.log('dragend')
  // })

  // //target
  // target.addEventListener('dragenter', function(){
  //   console.log('dragenter target')
  // })

  // target.addEventListener('dragover', function(e){
  //   console.log('dragover target')
  //   e.preventDefault()
  // })

  // target.addEventListener('dragleave', function(){
  //   console.log('dragleave target')
  // })

  // target.addEventListener('drop', function(e){
    
  //   console.log('drop')
  //   var data = e.dataTransfer.getData("Text");
  //   event.target.appendChild(data);
    
  //   // target.appendChild(document.querySelector())
  // })
})
