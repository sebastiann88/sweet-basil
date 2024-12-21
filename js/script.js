$(document).ready(function() {
  //images loaded
  const $grid = $('.grid');
  $grid.imagesLoaded(function () {
      $grid.isotope({
          itemSelector: '.element-item',
          layoutMode: 'packery'
      });
  });

  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $(".btn").click(function () {
      $(".btn").removeClass("active");
      // $(".tab").addClass("active"); // instead of this do the below 
      $(this).addClass("active");   
  });

  if ( jQuery().hoverdir ) {
        jQuery( 'a.portfolio-piece:hover div.portfolio-item' ).each( function() {
          jQuery( this ).hoverdir();
      } );
    } // /hoverdir
	});