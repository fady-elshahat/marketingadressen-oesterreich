// // Change Taps in Check Out page


const tabsCheck = Array.from( document.querySelectorAll( ".tabs-list-check .item-check" ) );
const contentCheck = Array.from( document.querySelectorAll( ".content-tabs-check > div" ) );

tabsCheck.forEach( ( tab ) => {
     tab.addEventListener( "click", ( e ) => {
          tabsCheck.forEach( ( el ) => {
               el.classList.remove( "activate" )
          } )
          const targetElemant = e.currentTarget;
          console.log( targetElemant );
          targetElemant.classList.add( "activate" );
          contentCheck.forEach( ( div ) => {
               div.style.display = "none"
          } )
          document.querySelector( targetElemant.dataset.check ).style.display = "block";

     } )

} )