// Change Taps
if ( window.location.pathname == "/" || window.location.pathname == "/index.html" ) {

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
               if ( input.checked === true) {
                    parentElement.parentElement.classList.add( "activate" );
               } else {
                    parentElement.parentElement.classList.remove( "activate" );
               }
          } )
     } )

     // Select Company Size 
     companys.forEach( ( c ) => {
          c.addEventListener( "click", (e) => {
               const companyGroup = e.currentTarget;
               if ( companyGroup.classList.contains("activate") === true) {
                    companyGroup.classList.remove( "activate" )
               } else {
                    companys.forEach( ( co ) => {
                         co.classList.remove( "activate" )
                    } )
                    companyGroup.classList.add( "activate" )
               }
          })
     })


}


// Eye Password Show
if ( window.location.pathname === "/pages/sign-up.html" || window.location.pathname === "/pages/sign-in.html" ) {
     const eyeIconPassword = document.querySelector( ".input-item .pass-icon.btn" );
     const inputPasswordUp = document.querySelector( ".input-item .input-password" )

     eyeIconPassword.addEventListener( 'click', () => {
          if ( inputPasswordUp.type === "password" ) {
               inputPasswordUp.type = "text"
          } else {
               inputPasswordUp.type = "password"
          }
     } )
}
