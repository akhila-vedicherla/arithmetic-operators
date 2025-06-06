function arth(f,s,o){
    if(o=="+"){
        sum(f,s)}
    else if(o=="-"){
        diff(f,s)
    }
    else if(o=="*"){
        mul(f,s)
    }
    else if(o=="/"){
        div(f,s)
    }
     else if(o=="%"){
        mod(f,s)
    }
}

function sum(f,s){
    console.log(f+s)
}
arth(20,10,"+")
function diff(f,s){
    console.log(f-s)
}
arth(10,5,"-")
function mul(f,s){
    console.log(f*s)
}
arth(15,4,"*")
function div(f,s){
    console.log(f/s)
}
arth(24,2,"/")
function mod(f,s){
    console.log(f%s)
}
arth(7,3,"%")

