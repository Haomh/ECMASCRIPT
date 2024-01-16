var Entity = function(name,delay){
    this.name= name
    this.delay = delay
}
Entity.prototype.greet = function(){
    setTimeout(function(){
       
        console.log('xin chào tên tôi là ', this.name);
    }.bind(this), this.delay)
}
var java = new Entity('java', 5000)
var cpp = new Entity('C++', 30)
java.greet()
java.greet()