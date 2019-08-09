module.exports = {

    // events: {new_notification:... .. ..}
    events: {},
    deleteIndexes: [],
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        // this.handlers[subscriber] = handler.name;
        if (!this.events.hasOwnProperty(event)) {
            this.events[event] = [];
        }
        this.events[event].push({subscriber: subscriber, handler: handler.bind(subscriber)});
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        this.events[event] = this.events[event].filter(name => name.subscriber !== subscriber);
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        for (let i = 0; i < this.events[event].length; i++) {
                this.events[event][i].handler();
            }
        return this;
    }
};
