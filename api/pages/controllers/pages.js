'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async webhook(ctx) {
        const pageID = ctx.params.id || 'default';
        const page = await strapi.services.pages.findOne({page_id: pageID});
        if (!page) {
            ctx.status = 404;
            ctx.body = { message: 'Page not found' };
        }
       ctx.body = await strapi.services.pages.webhook(ctx,page);
    }
};
