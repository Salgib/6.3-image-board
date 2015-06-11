var UploadView = Backbone.View.extend({
    template: JST.upload,
    events:{
        'click button.add-image-button': 'addImage',
        'click button.cancel-button': 'clearInfo'
    },
    initialize: function(){
        this.listenTo(this.collection, 'update', this.render);
        this.render();
    },
    render: function(){
        this.$el.html(this.template());
    },
    addImage: function(e){
        e.preventDefault();
        this.collection.create({
          image_url:($('.new-url').val()),
          image_caption:($('.new-caption').val())
        })
        this.clearInfo();


    },
    clearInfo: function(){
        this.$('.new-url').val('');
        this.$('.new-caption').val('');
    }
});

export default UploadView;
