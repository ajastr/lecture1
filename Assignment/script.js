// get reference to sliders
// listen to slider events

function changeStep() {

  const x_slider = document.getElementById( "StepPixel" )
  const y_slider = document.getElementById( "StepCNN" )

  let pixel_img = document.getElementById( 'Pixel' )
  let cnn_img = document.getElementById( 'CNN' )

  // get slider values
  const pixelModelStep = x_slider.valueAsNumber
  const cnnModelStep = y_slider.valueAsNumber

  // update labels
  document.getElementById( 'x_label' ).innerHTML = "Learning Step - Pixel Model " + pixelModelStep
  document.getElementById( 'y_label' ).innerHTML = "Learning Step - CNN Model " + cnnModelStep

  const pixel_src = "https://github.com/ajastr/Neural-Structural-Optimization-Study/blob/master/Images/Pixel_Model/anchored_suspended_bridge_128x128_0.1_pixel_" + (pixelModelStep-1).toString() +".jpg?raw=true" ;
  const cnn_scr = "https://github.com/ajastr/Neural-Structural-Optimization-Study/blob/master/Images/CNN_Model/anchored_suspended_bridge_128x128_0.1_cnn_" + (cnnModelStep-1).toString() +".jpg?raw=true" ;


  pixel_img.src = pixel_src ;
  cnn_img.src = cnn_scr;




 /* // make table items
  for ( i = 0; i < rows; i ++ ) {

    // create a table row
    const row = document.createElement( 'tr' )
    table.appendChild( row )

    for ( j = 0; j < columns; j ++ ) {

      // create a table cell
      const cell = document.createElement( 'td' )
      cell.innerText = i + ',' + j

      // uncomment to generate a random background color for cell on mouseover
      // const color = Math.floor( Math.random() * 16777215 ).toString( 16 )

      // cell.addEventListener( 'mouseover', function () {
      //   cell.style.background = '#' + color
      // }, false )

      // cell.addEventListener( 'mouseout', function () {
      //   cell.style.background = 'white'
      // }, false )

      row.appendChild( cell )

    }
    */
  //}
}
