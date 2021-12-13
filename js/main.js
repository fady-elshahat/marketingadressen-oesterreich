// Change Taps in Main page
const tabs = document.querySelectorAll( "#tabs-list .item-tabs" );
const tabsArray = Array.from( tabs );
const tabsContent = document.querySelectorAll( ".content-tabs > div" );
const divsArray = Array.from( tabsContent );
const Inputcards = Array.from( document.querySelectorAll( ".card-branch .body-card input" ) );
const companys = Array.from( document.querySelectorAll( ".company-group" ) );



// Move in Tabs
tabsArray.forEach( ( el ) => {
     el.addEventListener( "click", ( e ) => {
          tabsArray.forEach( ( el ) => {
               el.classList.remove( "activate" );
          } )
          e.currentTarget.classList.add( "activate" )
          divsArray.forEach( ( div ) => {
               div.style.display = "none"
          } )
          document.querySelector( e.currentTarget.dataset.cont ).style.display = "block";
     } )
} )

// Select Card Branch
Inputcards.forEach( ( input ) => {

     input.addEventListener( "click", ( e ) => {
          const parentElement = input.parentElement;
          if ( input.checked === true ) {
               parentElement.parentElement.classList.add( "activate" );
          } else {
               parentElement.parentElement.classList.remove( "activate" );
          }
     } )
} )

// Select Company Size 
companys.forEach( ( c ) => {
     c.addEventListener( "click", ( e ) => {
          const companyGroup = e.currentTarget;
          if ( companyGroup.classList.contains( "activate" ) === true ) {
               companyGroup.classList.remove( "activate" )
          } else {
               companyGroup.classList.add( "activate" )
          }
     } )
} )

window.onload = function () {
     slideOne();
     slideTwo();
}
// Range Slider
const sliderOne = document.getElementById( "year-range1" );
const sliderTwo = document.getElementById( "year-range2" );
const displayValueOne = document.getElementById( "value-one" );
const displayValueTwo = document.getElementById( "value-two" );
const minGap = 0;
const sliderTrack = document.querySelector( ".slider-track" );
const sliderMaxValue = document.getElementById( "year-range1" ).max;
function slideOne() {
     if ( parseInt( sliderTwo.value ) - parseInt( sliderOne.value ) <= minGap ) {
          sliderOne.value = parseInt( sliderTwo.value ) - minGap;
     }
     displayValueOne.textContent = sliderOne.value;
     fillColor();
}
function slideTwo() {
     if ( parseInt( sliderTwo.value ) - parseInt( sliderOne.value ) <= minGap ) {
          sliderTwo.value = parseInt( sliderOne.value ) + minGap;
     }
     displayValueTwo.textContent = sliderTwo.value;
     fillColor();
}
function fillColor() {
     percent1 = ( sliderOne.value / sliderMaxValue ) * 100;
     percent2 = ( sliderTwo.value / sliderMaxValue ) * 100;
     sliderTrack.style.background = `linear-gradient(to right, #E2E2E2 ${ percent1 }% , #4C4C4C ${ percent1 }% , #4C4C4C ${ percent2 }%, #E2E2E2 ${ percent2 }%)`;
}

// Select Sales Class
const salesClasses = Array.from( document.querySelectorAll( ".chart-item" ) );
salesClasses.forEach( ( el ) => {
     el.addEventListener( "click", ( e ) => {
          const classes = e.currentTarget;
          if ( classes.classList.contains( "activate" ) === true ) {
               classes.classList.remove( "activate" )
          } else {
               classes.classList.add( "activate" )
          }

     } )
} )

// Select Legal Form
const legalItems = Array.from( document.querySelectorAll( ".legal-item" ) );
legalItems.forEach( ( item ) => {
     item.addEventListener( "click", ( e ) => {
          const legalItem = e.currentTarget
          if ( legalItem.classList.contains( "activate" ) === true ) {
               legalItem.classList.remove( "activate" )
          } else {
               legalItems.forEach( ( i ) => {
                    i.classList.remove( "activate" )
               } )
               legalItem.classList.add( "activate" )
          }

     } )
} )


// Move in Locaation Tabs

const tabsLocaation = Array.from( document.querySelectorAll( ".item-locaation" ) )
const divsLocaation = Array.from( document.querySelectorAll( ".content-locaation > div" ) )

tabsLocaation.forEach( ( el ) => {
     el.addEventListener( "click", ( e ) => {
          tabsLocaation.forEach( ( el ) => {
               el.classList.remove( "activate" );
          } )
          e.currentTarget.classList.add( "activate" )
          divsLocaation.forEach( ( div ) => {
               div.style.display = "none"
          } )
          document.querySelector( e.currentTarget.dataset.loca ).style.display = "block";
     } )
} )



// Select State Item
const stateItems = Array.from( document.querySelectorAll( ".federal-states .state-item" ) );
stateItems.forEach( ( item ) => {
     item.addEventListener( "click", ( e ) => {
          const stateItem = e.currentTarget
          if ( stateItem.classList.contains( "activate" ) === true ) {
               stateItem.classList.remove( "activate" )
          } else {
               stateItem.classList.add( "activate" )
          }
     } )
} )

navigator.geolocation.getCurrentPosition( ( e ) => {

     const { latitude, longitude } = e.coords
     $( '#somecomponent' ).locationpicker(
          {
               location: {
                    latitude: latitude,
                    longitude: longitude
               },
               radius: 500,
               inputBinding: {
                    latitudeInput:null,
                    longitudeInput: null,
                    radiusInput: 500,
                    locationNameInput: $( '#input-search-map' )
               },
               addressFormat: 'postal_code',
               enableAutocomplete: true
          }
     );
} )





