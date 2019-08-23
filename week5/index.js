module.exports = {

    // events: {new_notification:... .. ..}
    events: {},
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
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
        if (!this.events.hasOwnProperty(event))
            return this;
        this.events[event] = this.events[event].filter(name => name.subscriber !== subscriber);
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if (!this.events.hasOwnProperty(event))
            return this;
        for (let i = 0; i < this.events[event].length; i++) {
                this.events[event][i].handler();
            }
        return this;
    }
};
