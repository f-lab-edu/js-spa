export default class Component{
    target;
    state = {};

    constructor(target) {
        this.target = target;
        this.render();
    }

    setState(){}
    render(){
        this.setState()
        this.target.innerHTML = this.template();
        this.setEvent();
    }
    template(){return ""}
    setEvent(){}
}