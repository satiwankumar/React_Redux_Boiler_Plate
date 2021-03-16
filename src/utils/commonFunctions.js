module.exports = {
    getSerial :(per_page,current_page,index=0)=>{

        let starting = per_page * (current_page - 1);
        index++;
        return starting + index;
    }
    
}