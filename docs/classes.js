const Max_withDraw_amount =20000
class AtmMachine{
    totalCash=1000000;
    _isAuthenciated =1000000;

    constructor(number,pin)

    withdraw(amounttoWithdraw) {
        if(amounttoWithdraw>Max_withDraw_amount){
            return {
                status :false,
                message : :amount is greater than max limit"
            };
        }
        
        if(this.totalCash-amounttoWithdraw<0){
            return{
                status:false,
                message:"atm doesnt have enought cash"

            };
            this.totalCash=this.totalCash-amounttoWithdraw;
            return{
                status:true,
                message:"amount with drawn"

            }
        }
    }
};
get totalCash(){
    return "Rs." +this.totalCash();

}
set totalCash(newAmount){
    this.totalCash=newAmount

}
const vamsi=new AtmMachine(number, pin);

