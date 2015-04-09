define(['lazoApp'], function (LazoApp) {

    'use strict';

    return LazoApp.extend({

        initialize: function (callback) {
            // set the default page title
            this.setDefaultTitle('LazoJS • Hello World');
            // return control to lazo
            return callback();
        }

    });

});