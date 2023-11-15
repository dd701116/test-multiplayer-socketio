export default class EventBroker {
    constructor() {
        this.triggers = {};
    }

    async trigger(event, data) {
        if (Object.prototype.hasOwnProperty.call(this.triggers, event)) {
            let promises = [];
            for (const sub of this.triggers[event]) {
                promises.push(sub.callback(data));
            }
            return await Promise.all(promises);
        }
    }
    subscribe(event, callback, priority = 1) {
        if (
            Object.prototype.hasOwnProperty.call(this.triggers, event) &&
            this.triggers[event]
        ) {
            let id = this.triggers[event].length;
            this.triggers[event].push({ callback, priority, id });
            this.triggers[event].sort((subA, subB) => subA.priority - subB.priority);
            return id;
        } else {
            this.triggers[event] = [{ callback, priority, id: 0 }];
            return 0;
        }
    }

    unsubscribe(id, event) {
        if (
            Object.prototype.hasOwnProperty.call(this.triggers, event) &&
            this.triggers[event]
        ) {
            let index = this.triggers[event].findIndex((sub) => sub.id === id);
            if (index !== -1) {
                this.triggers[event].splice(index, 1);
            }
        }
    }

    clearSubscriber(event) {
        if (
            Object.prototype.hasOwnProperty.call(this.triggers, event) &&
            this.triggers[event]
        ) {
            this.triggers[event] = []
        }
    }


}
