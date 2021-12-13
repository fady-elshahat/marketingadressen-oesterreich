// Select Payment Method



const paymentMethods = Array.from( document.querySelectorAll( ".payment-item" ) )

paymentMethods.forEach( ( payment ) => {
     payment.addEventListener( "click", ( e ) => {
          const paymentMethod = e.currentTarget;

          if ( paymentMethod.classList.contains( "activate" ) === true ) {
               paymentMethod.classList.remove( "activate" )
          } else {
               paymentMethods.forEach( ( pay ) => {
                    pay.classList.remove( "activate" )
               } )
               paymentMethod.classList.add( "activate" )
          }
     } )
} )
// Change Currency Valeu Function 
const selectCurrency = document.getElementById( "currency" );

selectCurrency.addEventListener( "change", () => {
     const inputPayment = document.querySelector( "#input-currency" );
     const option = selectCurrency.options[ selectCurrency.selectedIndex ].value;

     if ( option === "USD" ) {
          inputPayment.value = ""
          inputPayment.value = inputPayment.value + " $";
     } else if ( option === "EUR" ) {
          inputPayment.value = ""
          inputPayment.value = inputPayment.value + " €"
     }

} )