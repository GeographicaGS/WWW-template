app.view.Home = Backbone.View.extend({
    _template : _.template( $('#home_template').html() ),
    
    initialize: function() {
        this.render();
    },
    
    onClose: function(){
        // Remove events on close
        this.stopListening();
    },
    
    render: function() {
        this.$el.html(this._template());
        return this;
    }
});