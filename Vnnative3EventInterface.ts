export default interface Vnnative3EventInterface {
    registerEvent(eventName : string,callback : Function) : void
    sendEvent(eventName : string,data : Object) : void
}