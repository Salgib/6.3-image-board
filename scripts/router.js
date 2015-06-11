import ImageView from './view/index'
import {ImagesCollection} from './models/image';
import UploadView from './view/upload'

var Router = Backbone.Router.extend({

    routes:{
        '': 'index',
        'upload': 'upload'
    },
    initialize: function(){

        this.images = new ImagesCollection();
    },
    image: function(){
        var uploadView = new UploadView({collection: this.images});


      var imageView = new ImageView({collection: this.images});
        this.images.fetch();
        $('.image-board').prepend(uploadView.el).append(imageView.el);


    },
    upload: function (){

    }
});

export default new Router();
