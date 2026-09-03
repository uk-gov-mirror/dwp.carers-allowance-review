
// Add your routes here
 
module.exports = function (router) {

router.post('/overpayments/repaying-overpayment-answer', function(request, response) {
 
    var repayingOverpayment = request.session.data['repayingOverpayment']
    if (repayingOverpayment == "Yes"){
        response.redirect("/overpayments/Overpayment-because-of-your-PAYE")
    } else if(repayingOverpayment == "No") {
        response.redirect("/overpayments/You-cannot-use-this-form")
    } else {
        response.redirect("/overpayments/Overpayment-because-of-your-PAYE")
    }
})
 

router.post('/overpayments/take-part-in-future-research-answer', function(request, response) {
 
    var takePartInResearch = request.session.data['takePartInResearch']
    if (takePartInResearch == "Yes"){
        response.redirect("/overpayments/how-would-you-like-to-be-contacted")
    } else if(takePartInResearch == "No") {
        response.redirect("/overpayments/declaration")
    } else {
        response.redirect("/overpayments/how-would-you-like-to-be-contacted")
    }
})


router.post('/overpayments/because-of-paye', function(request, response) {
 
    var becauseOfPAYE = request.session.data['becauseOfPAYE']
    if (becauseOfPAYE == "Yes"){
        response.redirect("/overpayments/what-is-your-name")
    } else if(becauseOfPAYE == "No") {
        response.redirect("/overpayments/You-cannot-use-this-form")
    } else {
        response.redirect("/overpayments/what-is-your-name")
     }
})




// CREATE YOUR ROUTES ABOVE

}