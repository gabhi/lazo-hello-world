define(['lazoCtl'], function (LazoCtl) {

    'use strict';

    return LazoCtl.extend({

        index: function (options) {
            // load user, fetch data, and create instance
            this.loadModel('user', {
                success: function (user) {
                    // save reference in component context
                    this.ctx.models.user = user;
                    // render index view
                    options.success('index');
                }
            })
        }

    });

});