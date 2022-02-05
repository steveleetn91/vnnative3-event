import Vnnative3EventInterface from "./Vnnative3EventInterface";

export default class VnNative3Event implements Vnnative3EventInterface {
    registerEvent(eventName : string,callback : Function, Element : HTMLElement = document.body) : void {
        const event = document.createEvent('Event');
        event.initEvent(`${eventName}`, true, true);
        Element.addEventListener(eventName, (eve : Event) => callback(eve));
    }
    sendEvent(eventName : string, data : Object, Element : HTMLElement = document.body) : void {
        var event;
        if (window.CustomEvent) {
            event = new CustomEvent(eventName, data);
        } else {
            event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, data);
        }
        Element.dispatchEvent(event);
    }
}