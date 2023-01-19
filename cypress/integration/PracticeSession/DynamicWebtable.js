///<reference types='Cypress'/>

describe('Practice session', function () {

   it('Dynamic webtable practice', function () {

      //Navigating to the URL
      cy.visit('https://www.cricbuzz.com/live-cricket-scorecard/59951/ind-vs-sl-1st-t20i-sri-lanka-tour-of-india-2023')


      //Get the column of the bowler name and then iterate the column and pulled the text and uses the next method
       
      cy.get('#innings_1 div.cb-col.cb-col-33 span.text-gray').each(($e1, index, $list) => {

         const wickets = $e1.text()

         if (wickets.includes("Hasaranga")) {

            cy.get('#innings_1 div.cb-col.cb-col-100.cb-scrd-itms div.cb-col.cb-col-33').eq(index).next().then(function (score) {

               const batsmanScore = score.text()
               expect(batsmanScore).to.equal('37')
            })
         }




      })



   })




})