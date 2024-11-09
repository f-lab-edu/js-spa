export default class Component{
    constructor(target) {
        target.innerHTML = this.template();
    }

    template(){return ""}
}