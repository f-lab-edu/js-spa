export default class Component{
    target;

    constructor(target) {
        this.target = target;
        this.render();
        this.init();
        this.setEvent();
    }

    render(){
        this.target.innerHTML = this.template();
    }
    template(){return ""}
    init(){}
    setEvent(){}
}