// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Users",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#exists
             * @methodOf lbServices.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findOne
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#updateAll
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#count
             * @methodOf lbServices.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$updateAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Users/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createChangeStream
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#confirm
             * @methodOf lbServices.User
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#resetPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Organisation
 * @header lbServices.Organisation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Organisation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Organisation",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/organisations/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Organisation.employees.findById() instead.
            "prototype$__findById__employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/employees/:fk",
              method: "GET",
            },

            // INTERNAL. Use Organisation.employees.destroyById() instead.
            "prototype$__destroyById__employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/employees/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.employees.updateById() instead.
            "prototype$__updateById__employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/employees/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Organisation.vouchers.findById() instead.
            "prototype$__findById__vouchers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/vouchers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Organisation.vouchers.destroyById() instead.
            "prototype$__destroyById__vouchers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/vouchers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.vouchers.updateById() instead.
            "prototype$__updateById__vouchers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/vouchers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Organisation.overtimes.findById() instead.
            "prototype$__findById__overtimes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/overtimes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Organisation.overtimes.destroyById() instead.
            "prototype$__destroyById__overtimes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/overtimes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.overtimes.updateById() instead.
            "prototype$__updateById__overtimes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/overtimes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Organisation.departments.findById() instead.
            "prototype$__findById__departments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/departments/:fk",
              method: "GET",
            },

            // INTERNAL. Use Organisation.departments.destroyById() instead.
            "prototype$__destroyById__departments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/departments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.departments.updateById() instead.
            "prototype$__updateById__departments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/departments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Organisation.dailyProductionAndOvertimeReports.findById() instead.
            "prototype$__findById__dailyProductionAndOvertimeReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/dailyProductionAndOvertimeReports/:fk",
              method: "GET",
            },

            // INTERNAL. Use Organisation.dailyProductionAndOvertimeReports.destroyById() instead.
            "prototype$__destroyById__dailyProductionAndOvertimeReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/dailyProductionAndOvertimeReports/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.dailyProductionAndOvertimeReports.updateById() instead.
            "prototype$__updateById__dailyProductionAndOvertimeReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/dailyProductionAndOvertimeReports/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Organisation.employees() instead.
            "prototype$__get__employees": {
              isArray: true,
              url: urlBase + "/organisations/:id/employees",
              method: "GET",
            },

            // INTERNAL. Use Organisation.employees.create() instead.
            "prototype$__create__employees": {
              url: urlBase + "/organisations/:id/employees",
              method: "POST",
            },

            // INTERNAL. Use Organisation.employees.destroyAll() instead.
            "prototype$__delete__employees": {
              url: urlBase + "/organisations/:id/employees",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.employees.count() instead.
            "prototype$__count__employees": {
              url: urlBase + "/organisations/:id/employees/count",
              method: "GET",
            },

            // INTERNAL. Use Organisation.vouchers() instead.
            "prototype$__get__vouchers": {
              isArray: true,
              url: urlBase + "/organisations/:id/vouchers",
              method: "GET",
            },

            // INTERNAL. Use Organisation.vouchers.create() instead.
            "prototype$__create__vouchers": {
              url: urlBase + "/organisations/:id/vouchers",
              method: "POST",
            },

            // INTERNAL. Use Organisation.vouchers.destroyAll() instead.
            "prototype$__delete__vouchers": {
              url: urlBase + "/organisations/:id/vouchers",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.vouchers.count() instead.
            "prototype$__count__vouchers": {
              url: urlBase + "/organisations/:id/vouchers/count",
              method: "GET",
            },

            // INTERNAL. Use Organisation.overtimes() instead.
            "prototype$__get__overtimes": {
              isArray: true,
              url: urlBase + "/organisations/:id/overtimes",
              method: "GET",
            },

            // INTERNAL. Use Organisation.overtimes.create() instead.
            "prototype$__create__overtimes": {
              url: urlBase + "/organisations/:id/overtimes",
              method: "POST",
            },

            // INTERNAL. Use Organisation.overtimes.destroyAll() instead.
            "prototype$__delete__overtimes": {
              url: urlBase + "/organisations/:id/overtimes",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.overtimes.count() instead.
            "prototype$__count__overtimes": {
              url: urlBase + "/organisations/:id/overtimes/count",
              method: "GET",
            },

            // INTERNAL. Use Organisation.departments() instead.
            "prototype$__get__departments": {
              isArray: true,
              url: urlBase + "/organisations/:id/departments",
              method: "GET",
            },

            // INTERNAL. Use Organisation.departments.create() instead.
            "prototype$__create__departments": {
              url: urlBase + "/organisations/:id/departments",
              method: "POST",
            },

            // INTERNAL. Use Organisation.departments.destroyAll() instead.
            "prototype$__delete__departments": {
              url: urlBase + "/organisations/:id/departments",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.departments.count() instead.
            "prototype$__count__departments": {
              url: urlBase + "/organisations/:id/departments/count",
              method: "GET",
            },

            // INTERNAL. Use Organisation.dailyProductionAndOvertimeReports() instead.
            "prototype$__get__dailyProductionAndOvertimeReports": {
              isArray: true,
              url: urlBase + "/organisations/:id/dailyProductionAndOvertimeReports",
              method: "GET",
            },

            // INTERNAL. Use Organisation.dailyProductionAndOvertimeReports.create() instead.
            "prototype$__create__dailyProductionAndOvertimeReports": {
              url: urlBase + "/organisations/:id/dailyProductionAndOvertimeReports",
              method: "POST",
            },

            // INTERNAL. Use Organisation.dailyProductionAndOvertimeReports.destroyAll() instead.
            "prototype$__delete__dailyProductionAndOvertimeReports": {
              url: urlBase + "/organisations/:id/dailyProductionAndOvertimeReports",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.dailyProductionAndOvertimeReports.count() instead.
            "prototype$__count__dailyProductionAndOvertimeReports": {
              url: urlBase + "/organisations/:id/dailyProductionAndOvertimeReports/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Organisation#create
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Organisation` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/organisations",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Organisation#createMany
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Organisation` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/organisations",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Organisation#upsert
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Organisation` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/organisations",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Organisation#exists
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/organisations/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Organisation#findById
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Organisation` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/organisations/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Organisation#find
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Organisation` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/organisations",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Organisation#findOne
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Organisation` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/organisations/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Organisation#updateAll
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/organisations/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Organisation#deleteById
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Organisation` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/organisations/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Organisation#count
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/organisations/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Organisation#prototype$updateAttributes
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Organisation` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/organisations/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Organisation#createChangeStream
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/organisations/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Organisation#updateOrCreate
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Organisation` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Organisation#update
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Organisation#destroyById
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Organisation` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Organisation#removeById
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Organisation` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Organisation#modelName
        * @propertyOf lbServices.Organisation
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Organisation`.
        */
        R.modelName = "Organisation";

    /**
     * @ngdoc object
     * @name lbServices.Organisation.employees
     * @header lbServices.Organisation.employees
     * @object
     * @description
     *
     * The object `Organisation.employees` groups methods
     * manipulating `Employee` instances related to `Organisation`.
     *
     * Call {@link lbServices.Organisation#employees Organisation.employees()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Organisation#employees
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Queries employees of organisation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::get::Organisation::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.employees#count
             * @methodOf lbServices.Organisation.employees
             *
             * @description
             *
             * Counts employees of organisation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.employees.count = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::count::Organisation::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.employees#create
             * @methodOf lbServices.Organisation.employees
             *
             * @description
             *
             * Creates a new instance in employees of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees.create = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::create::Organisation::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.employees#createMany
             * @methodOf lbServices.Organisation.employees
             *
             * @description
             *
             * Creates a new instance in employees of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees.createMany = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::createMany::Organisation::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.employees#destroyAll
             * @methodOf lbServices.Organisation.employees
             *
             * @description
             *
             * Deletes all employees of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employees.destroyAll = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::delete::Organisation::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.employees#destroyById
             * @methodOf lbServices.Organisation.employees
             *
             * @description
             *
             * Delete a related item by id for employees.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for employees
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employees.destroyById = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::destroyById::Organisation::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.employees#findById
             * @methodOf lbServices.Organisation.employees
             *
             * @description
             *
             * Find a related item by id for employees.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for employees
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees.findById = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::findById::Organisation::employees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.employees#updateById
             * @methodOf lbServices.Organisation.employees
             *
             * @description
             *
             * Update a related item by id for employees.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for employees
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employees.updateById = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::updateById::Organisation::employees"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Organisation.vouchers
     * @header lbServices.Organisation.vouchers
     * @object
     * @description
     *
     * The object `Organisation.vouchers` groups methods
     * manipulating `Voucher` instances related to `Organisation`.
     *
     * Call {@link lbServices.Organisation#vouchers Organisation.vouchers()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Organisation#vouchers
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Queries vouchers of organisation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
        R.vouchers = function() {
          var TargetResource = $injector.get("Voucher");
          var action = TargetResource["::get::Organisation::vouchers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.vouchers#count
             * @methodOf lbServices.Organisation.vouchers
             *
             * @description
             *
             * Counts vouchers of organisation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.vouchers.count = function() {
          var TargetResource = $injector.get("Voucher");
          var action = TargetResource["::count::Organisation::vouchers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.vouchers#create
             * @methodOf lbServices.Organisation.vouchers
             *
             * @description
             *
             * Creates a new instance in vouchers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
        R.vouchers.create = function() {
          var TargetResource = $injector.get("Voucher");
          var action = TargetResource["::create::Organisation::vouchers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.vouchers#createMany
             * @methodOf lbServices.Organisation.vouchers
             *
             * @description
             *
             * Creates a new instance in vouchers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
        R.vouchers.createMany = function() {
          var TargetResource = $injector.get("Voucher");
          var action = TargetResource["::createMany::Organisation::vouchers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.vouchers#destroyAll
             * @methodOf lbServices.Organisation.vouchers
             *
             * @description
             *
             * Deletes all vouchers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.vouchers.destroyAll = function() {
          var TargetResource = $injector.get("Voucher");
          var action = TargetResource["::delete::Organisation::vouchers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.vouchers#destroyById
             * @methodOf lbServices.Organisation.vouchers
             *
             * @description
             *
             * Delete a related item by id for vouchers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for vouchers
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.vouchers.destroyById = function() {
          var TargetResource = $injector.get("Voucher");
          var action = TargetResource["::destroyById::Organisation::vouchers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.vouchers#findById
             * @methodOf lbServices.Organisation.vouchers
             *
             * @description
             *
             * Find a related item by id for vouchers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for vouchers
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
        R.vouchers.findById = function() {
          var TargetResource = $injector.get("Voucher");
          var action = TargetResource["::findById::Organisation::vouchers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.vouchers#updateById
             * @methodOf lbServices.Organisation.vouchers
             *
             * @description
             *
             * Update a related item by id for vouchers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for vouchers
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
        R.vouchers.updateById = function() {
          var TargetResource = $injector.get("Voucher");
          var action = TargetResource["::updateById::Organisation::vouchers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Organisation.overtimes
     * @header lbServices.Organisation.overtimes
     * @object
     * @description
     *
     * The object `Organisation.overtimes` groups methods
     * manipulating `Overtime` instances related to `Organisation`.
     *
     * Call {@link lbServices.Organisation#overtimes Organisation.overtimes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Organisation#overtimes
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Queries overtimes of organisation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
        R.overtimes = function() {
          var TargetResource = $injector.get("Overtime");
          var action = TargetResource["::get::Organisation::overtimes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.overtimes#count
             * @methodOf lbServices.Organisation.overtimes
             *
             * @description
             *
             * Counts overtimes of organisation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.overtimes.count = function() {
          var TargetResource = $injector.get("Overtime");
          var action = TargetResource["::count::Organisation::overtimes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.overtimes#create
             * @methodOf lbServices.Organisation.overtimes
             *
             * @description
             *
             * Creates a new instance in overtimes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
        R.overtimes.create = function() {
          var TargetResource = $injector.get("Overtime");
          var action = TargetResource["::create::Organisation::overtimes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.overtimes#createMany
             * @methodOf lbServices.Organisation.overtimes
             *
             * @description
             *
             * Creates a new instance in overtimes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
        R.overtimes.createMany = function() {
          var TargetResource = $injector.get("Overtime");
          var action = TargetResource["::createMany::Organisation::overtimes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.overtimes#destroyAll
             * @methodOf lbServices.Organisation.overtimes
             *
             * @description
             *
             * Deletes all overtimes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.overtimes.destroyAll = function() {
          var TargetResource = $injector.get("Overtime");
          var action = TargetResource["::delete::Organisation::overtimes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.overtimes#destroyById
             * @methodOf lbServices.Organisation.overtimes
             *
             * @description
             *
             * Delete a related item by id for overtimes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for overtimes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.overtimes.destroyById = function() {
          var TargetResource = $injector.get("Overtime");
          var action = TargetResource["::destroyById::Organisation::overtimes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.overtimes#findById
             * @methodOf lbServices.Organisation.overtimes
             *
             * @description
             *
             * Find a related item by id for overtimes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for overtimes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
        R.overtimes.findById = function() {
          var TargetResource = $injector.get("Overtime");
          var action = TargetResource["::findById::Organisation::overtimes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.overtimes#updateById
             * @methodOf lbServices.Organisation.overtimes
             *
             * @description
             *
             * Update a related item by id for overtimes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for overtimes
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
        R.overtimes.updateById = function() {
          var TargetResource = $injector.get("Overtime");
          var action = TargetResource["::updateById::Organisation::overtimes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Organisation.departments
     * @header lbServices.Organisation.departments
     * @object
     * @description
     *
     * The object `Organisation.departments` groups methods
     * manipulating `Department` instances related to `Organisation`.
     *
     * Call {@link lbServices.Organisation#departments Organisation.departments()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Organisation#departments
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Queries departments of organisation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
        R.departments = function() {
          var TargetResource = $injector.get("Department");
          var action = TargetResource["::get::Organisation::departments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.departments#count
             * @methodOf lbServices.Organisation.departments
             *
             * @description
             *
             * Counts departments of organisation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.departments.count = function() {
          var TargetResource = $injector.get("Department");
          var action = TargetResource["::count::Organisation::departments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.departments#create
             * @methodOf lbServices.Organisation.departments
             *
             * @description
             *
             * Creates a new instance in departments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
        R.departments.create = function() {
          var TargetResource = $injector.get("Department");
          var action = TargetResource["::create::Organisation::departments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.departments#createMany
             * @methodOf lbServices.Organisation.departments
             *
             * @description
             *
             * Creates a new instance in departments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
        R.departments.createMany = function() {
          var TargetResource = $injector.get("Department");
          var action = TargetResource["::createMany::Organisation::departments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.departments#destroyAll
             * @methodOf lbServices.Organisation.departments
             *
             * @description
             *
             * Deletes all departments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.departments.destroyAll = function() {
          var TargetResource = $injector.get("Department");
          var action = TargetResource["::delete::Organisation::departments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.departments#destroyById
             * @methodOf lbServices.Organisation.departments
             *
             * @description
             *
             * Delete a related item by id for departments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for departments
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.departments.destroyById = function() {
          var TargetResource = $injector.get("Department");
          var action = TargetResource["::destroyById::Organisation::departments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.departments#findById
             * @methodOf lbServices.Organisation.departments
             *
             * @description
             *
             * Find a related item by id for departments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for departments
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
        R.departments.findById = function() {
          var TargetResource = $injector.get("Department");
          var action = TargetResource["::findById::Organisation::departments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.departments#updateById
             * @methodOf lbServices.Organisation.departments
             *
             * @description
             *
             * Update a related item by id for departments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for departments
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
        R.departments.updateById = function() {
          var TargetResource = $injector.get("Department");
          var action = TargetResource["::updateById::Organisation::departments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Organisation.dailyProductionAndOvertimeReports
     * @header lbServices.Organisation.dailyProductionAndOvertimeReports
     * @object
     * @description
     *
     * The object `Organisation.dailyProductionAndOvertimeReports` groups methods
     * manipulating `DailyProductionAndOvertimeReport` instances related to `Organisation`.
     *
     * Call {@link lbServices.Organisation#dailyProductionAndOvertimeReports Organisation.dailyProductionAndOvertimeReports()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Organisation#dailyProductionAndOvertimeReports
             * @methodOf lbServices.Organisation
             *
             * @description
             *
             * Queries dailyProductionAndOvertimeReports of organisation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
        R.dailyProductionAndOvertimeReports = function() {
          var TargetResource = $injector.get("DailyProductionAndOvertimeReport");
          var action = TargetResource["::get::Organisation::dailyProductionAndOvertimeReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.dailyProductionAndOvertimeReports#count
             * @methodOf lbServices.Organisation.dailyProductionAndOvertimeReports
             *
             * @description
             *
             * Counts dailyProductionAndOvertimeReports of organisation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.dailyProductionAndOvertimeReports.count = function() {
          var TargetResource = $injector.get("DailyProductionAndOvertimeReport");
          var action = TargetResource["::count::Organisation::dailyProductionAndOvertimeReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.dailyProductionAndOvertimeReports#create
             * @methodOf lbServices.Organisation.dailyProductionAndOvertimeReports
             *
             * @description
             *
             * Creates a new instance in dailyProductionAndOvertimeReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
        R.dailyProductionAndOvertimeReports.create = function() {
          var TargetResource = $injector.get("DailyProductionAndOvertimeReport");
          var action = TargetResource["::create::Organisation::dailyProductionAndOvertimeReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.dailyProductionAndOvertimeReports#createMany
             * @methodOf lbServices.Organisation.dailyProductionAndOvertimeReports
             *
             * @description
             *
             * Creates a new instance in dailyProductionAndOvertimeReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
        R.dailyProductionAndOvertimeReports.createMany = function() {
          var TargetResource = $injector.get("DailyProductionAndOvertimeReport");
          var action = TargetResource["::createMany::Organisation::dailyProductionAndOvertimeReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.dailyProductionAndOvertimeReports#destroyAll
             * @methodOf lbServices.Organisation.dailyProductionAndOvertimeReports
             *
             * @description
             *
             * Deletes all dailyProductionAndOvertimeReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.dailyProductionAndOvertimeReports.destroyAll = function() {
          var TargetResource = $injector.get("DailyProductionAndOvertimeReport");
          var action = TargetResource["::delete::Organisation::dailyProductionAndOvertimeReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.dailyProductionAndOvertimeReports#destroyById
             * @methodOf lbServices.Organisation.dailyProductionAndOvertimeReports
             *
             * @description
             *
             * Delete a related item by id for dailyProductionAndOvertimeReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for dailyProductionAndOvertimeReports
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.dailyProductionAndOvertimeReports.destroyById = function() {
          var TargetResource = $injector.get("DailyProductionAndOvertimeReport");
          var action = TargetResource["::destroyById::Organisation::dailyProductionAndOvertimeReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.dailyProductionAndOvertimeReports#findById
             * @methodOf lbServices.Organisation.dailyProductionAndOvertimeReports
             *
             * @description
             *
             * Find a related item by id for dailyProductionAndOvertimeReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for dailyProductionAndOvertimeReports
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
        R.dailyProductionAndOvertimeReports.findById = function() {
          var TargetResource = $injector.get("DailyProductionAndOvertimeReport");
          var action = TargetResource["::findById::Organisation::dailyProductionAndOvertimeReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Organisation.dailyProductionAndOvertimeReports#updateById
             * @methodOf lbServices.Organisation.dailyProductionAndOvertimeReports
             *
             * @description
             *
             * Update a related item by id for dailyProductionAndOvertimeReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for dailyProductionAndOvertimeReports
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
        R.dailyProductionAndOvertimeReports.updateById = function() {
          var TargetResource = $injector.get("DailyProductionAndOvertimeReport");
          var action = TargetResource["::updateById::Organisation::dailyProductionAndOvertimeReports"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Employee
 * @header lbServices.Employee
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Employee` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Employee",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/employees/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$__findById__accessTokens
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$__destroyById__accessTokens
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$__updateById__accessTokens
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Employee.vouchers.findById() instead.
            "prototype$__findById__vouchers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/vouchers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Employee.vouchers.destroyById() instead.
            "prototype$__destroyById__vouchers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/vouchers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.vouchers.updateById() instead.
            "prototype$__updateById__vouchers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/vouchers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Employee.overtimes.findById() instead.
            "prototype$__findById__overtimes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/overtimes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Employee.overtimes.destroyById() instead.
            "prototype$__destroyById__overtimes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/overtimes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.overtimes.updateById() instead.
            "prototype$__updateById__overtimes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/overtimes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Employee.departments() instead.
            "prototype$__get__departments": {
              url: urlBase + "/employees/:id/departments",
              method: "GET",
            },

            // INTERNAL. Use Employee.departments.create() instead.
            "prototype$__create__departments": {
              url: urlBase + "/employees/:id/departments",
              method: "POST",
            },

            // INTERNAL. Use Employee.departments.update() instead.
            "prototype$__update__departments": {
              url: urlBase + "/employees/:id/departments",
              method: "PUT",
            },

            // INTERNAL. Use Employee.departments.destroy() instead.
            "prototype$__destroy__departments": {
              url: urlBase + "/employees/:id/departments",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.dailyProductionAndOvertimeReports.findById() instead.
            "prototype$__findById__dailyProductionAndOvertimeReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/dailyProductionAndOvertimeReports/:fk",
              method: "GET",
            },

            // INTERNAL. Use Employee.dailyProductionAndOvertimeReports.destroyById() instead.
            "prototype$__destroyById__dailyProductionAndOvertimeReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/dailyProductionAndOvertimeReports/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.dailyProductionAndOvertimeReports.updateById() instead.
            "prototype$__updateById__dailyProductionAndOvertimeReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/dailyProductionAndOvertimeReports/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$__get__accessTokens
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Queries accessTokens of employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/employees/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$__create__accessTokens
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/employees/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$__delete__accessTokens
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/employees/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$__count__accessTokens
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Counts accessTokens of employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/employees/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use Employee.vouchers() instead.
            "prototype$__get__vouchers": {
              isArray: true,
              url: urlBase + "/employees/:id/vouchers",
              method: "GET",
            },

            // INTERNAL. Use Employee.vouchers.create() instead.
            "prototype$__create__vouchers": {
              url: urlBase + "/employees/:id/vouchers",
              method: "POST",
            },

            // INTERNAL. Use Employee.vouchers.destroyAll() instead.
            "prototype$__delete__vouchers": {
              url: urlBase + "/employees/:id/vouchers",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.vouchers.count() instead.
            "prototype$__count__vouchers": {
              url: urlBase + "/employees/:id/vouchers/count",
              method: "GET",
            },

            // INTERNAL. Use Employee.overtimes() instead.
            "prototype$__get__overtimes": {
              isArray: true,
              url: urlBase + "/employees/:id/overtimes",
              method: "GET",
            },

            // INTERNAL. Use Employee.overtimes.create() instead.
            "prototype$__create__overtimes": {
              url: urlBase + "/employees/:id/overtimes",
              method: "POST",
            },

            // INTERNAL. Use Employee.overtimes.destroyAll() instead.
            "prototype$__delete__overtimes": {
              url: urlBase + "/employees/:id/overtimes",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.overtimes.count() instead.
            "prototype$__count__overtimes": {
              url: urlBase + "/employees/:id/overtimes/count",
              method: "GET",
            },

            // INTERNAL. Use Employee.dailyProductionAndOvertimeReports() instead.
            "prototype$__get__dailyProductionAndOvertimeReports": {
              isArray: true,
              url: urlBase + "/employees/:id/dailyProductionAndOvertimeReports",
              method: "GET",
            },

            // INTERNAL. Use Employee.dailyProductionAndOvertimeReports.create() instead.
            "prototype$__create__dailyProductionAndOvertimeReports": {
              url: urlBase + "/employees/:id/dailyProductionAndOvertimeReports",
              method: "POST",
            },

            // INTERNAL. Use Employee.dailyProductionAndOvertimeReports.destroyAll() instead.
            "prototype$__delete__dailyProductionAndOvertimeReports": {
              url: urlBase + "/employees/:id/dailyProductionAndOvertimeReports",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.dailyProductionAndOvertimeReports.count() instead.
            "prototype$__count__dailyProductionAndOvertimeReports": {
              url: urlBase + "/employees/:id/dailyProductionAndOvertimeReports/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#create
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/employees",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#createMany
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/employees",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#upsert
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/employees",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#exists
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/employees/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#findById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/employees/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#find
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/employees",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#findOne
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/employees/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#updateAll
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/employees/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#deleteById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/employees/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#count
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/employees/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$updateAttributes
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/employees/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#createChangeStream
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/employees/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#login
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/employees/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#logout
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/employees/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#confirm
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/employees/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#resetPassword
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/employees/reset",
              method: "POST",
            },

            // INTERNAL. Use Organisation.employees.findById() instead.
            "::findById::Organisation::employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/employees/:fk",
              method: "GET",
            },

            // INTERNAL. Use Organisation.employees.destroyById() instead.
            "::destroyById::Organisation::employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/employees/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.employees.updateById() instead.
            "::updateById::Organisation::employees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/employees/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Organisation.employees() instead.
            "::get::Organisation::employees": {
              isArray: true,
              url: urlBase + "/organisations/:id/employees",
              method: "GET",
            },

            // INTERNAL. Use Organisation.employees.create() instead.
            "::create::Organisation::employees": {
              url: urlBase + "/organisations/:id/employees",
              method: "POST",
            },

            // INTERNAL. Use Organisation.employees.createMany() instead.
            "::createMany::Organisation::employees": {
              isArray: true,
              url: urlBase + "/organisations/:id/employees",
              method: "POST",
            },

            // INTERNAL. Use Organisation.employees.destroyAll() instead.
            "::delete::Organisation::employees": {
              url: urlBase + "/organisations/:id/employees",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.employees.count() instead.
            "::count::Organisation::employees": {
              url: urlBase + "/organisations/:id/employees/count",
              method: "GET",
            },

            // INTERNAL. Use Voucher.employee() instead.
            "::get::Voucher::employee": {
              url: urlBase + "/vouchers/:id/employee",
              method: "GET",
            },

            // INTERNAL. Use Overtime.employee() instead.
            "::get::Overtime::employee": {
              url: urlBase + "/overtimes/:id/employee",
              method: "GET",
            },

            // INTERNAL. Use Department.coordinator() instead.
            "::get::Department::coordinator": {
              url: urlBase + "/departments/:id/coordinator",
              method: "GET",
            },

            // INTERNAL. Use Department.coordinator.create() instead.
            "::create::Department::coordinator": {
              url: urlBase + "/departments/:id/coordinator",
              method: "POST",
            },

            // INTERNAL. Use Department.coordinator.createMany() instead.
            "::createMany::Department::coordinator": {
              isArray: true,
              url: urlBase + "/departments/:id/coordinator",
              method: "POST",
            },

            // INTERNAL. Use Department.coordinator.update() instead.
            "::update::Department::coordinator": {
              url: urlBase + "/departments/:id/coordinator",
              method: "PUT",
            },

            // INTERNAL. Use Department.coordinator.destroy() instead.
            "::destroy::Department::coordinator": {
              url: urlBase + "/departments/:id/coordinator",
              method: "DELETE",
            },

            // INTERNAL. Use DailyProductionAndOvertimeReport.employee() instead.
            "::get::DailyProductionAndOvertimeReport::employee": {
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/employee",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#getCurrent
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/employees" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Employee#updateOrCreate
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Employee#update
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Employee#destroyById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Employee#removeById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Employee#getCachedCurrent
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Employee#login} or
         * {@link lbServices.Employee#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Employee instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Employee#isAuthenticated
         * @methodOf lbServices.Employee
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Employee#getCurrentId
         * @methodOf lbServices.Employee
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Employee#modelName
        * @propertyOf lbServices.Employee
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Employee`.
        */
        R.modelName = "Employee";

    /**
     * @ngdoc object
     * @name lbServices.Employee.vouchers
     * @header lbServices.Employee.vouchers
     * @object
     * @description
     *
     * The object `Employee.vouchers` groups methods
     * manipulating `Voucher` instances related to `Employee`.
     *
     * Call {@link lbServices.Employee#vouchers Employee.vouchers()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Employee#vouchers
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Queries vouchers of employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
        R.vouchers = function() {
          var TargetResource = $injector.get("Voucher");
          var action = TargetResource["::get::Employee::vouchers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.vouchers#count
             * @methodOf lbServices.Employee.vouchers
             *
             * @description
             *
             * Counts vouchers of employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.vouchers.count = function() {
          var TargetResource = $injector.get("Voucher");
          var action = TargetResource["::count::Employee::vouchers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.vouchers#create
             * @methodOf lbServices.Employee.vouchers
             *
             * @description
             *
             * Creates a new instance in vouchers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
        R.vouchers.create = function() {
          var TargetResource = $injector.get("Voucher");
          var action = TargetResource["::create::Employee::vouchers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.vouchers#createMany
             * @methodOf lbServices.Employee.vouchers
             *
             * @description
             *
             * Creates a new instance in vouchers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
        R.vouchers.createMany = function() {
          var TargetResource = $injector.get("Voucher");
          var action = TargetResource["::createMany::Employee::vouchers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.vouchers#destroyAll
             * @methodOf lbServices.Employee.vouchers
             *
             * @description
             *
             * Deletes all vouchers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.vouchers.destroyAll = function() {
          var TargetResource = $injector.get("Voucher");
          var action = TargetResource["::delete::Employee::vouchers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.vouchers#destroyById
             * @methodOf lbServices.Employee.vouchers
             *
             * @description
             *
             * Delete a related item by id for vouchers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for vouchers
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.vouchers.destroyById = function() {
          var TargetResource = $injector.get("Voucher");
          var action = TargetResource["::destroyById::Employee::vouchers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.vouchers#findById
             * @methodOf lbServices.Employee.vouchers
             *
             * @description
             *
             * Find a related item by id for vouchers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for vouchers
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
        R.vouchers.findById = function() {
          var TargetResource = $injector.get("Voucher");
          var action = TargetResource["::findById::Employee::vouchers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.vouchers#updateById
             * @methodOf lbServices.Employee.vouchers
             *
             * @description
             *
             * Update a related item by id for vouchers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for vouchers
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
        R.vouchers.updateById = function() {
          var TargetResource = $injector.get("Voucher");
          var action = TargetResource["::updateById::Employee::vouchers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Employee.overtimes
     * @header lbServices.Employee.overtimes
     * @object
     * @description
     *
     * The object `Employee.overtimes` groups methods
     * manipulating `Overtime` instances related to `Employee`.
     *
     * Call {@link lbServices.Employee#overtimes Employee.overtimes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Employee#overtimes
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Queries overtimes of employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
        R.overtimes = function() {
          var TargetResource = $injector.get("Overtime");
          var action = TargetResource["::get::Employee::overtimes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.overtimes#count
             * @methodOf lbServices.Employee.overtimes
             *
             * @description
             *
             * Counts overtimes of employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.overtimes.count = function() {
          var TargetResource = $injector.get("Overtime");
          var action = TargetResource["::count::Employee::overtimes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.overtimes#create
             * @methodOf lbServices.Employee.overtimes
             *
             * @description
             *
             * Creates a new instance in overtimes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
        R.overtimes.create = function() {
          var TargetResource = $injector.get("Overtime");
          var action = TargetResource["::create::Employee::overtimes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.overtimes#createMany
             * @methodOf lbServices.Employee.overtimes
             *
             * @description
             *
             * Creates a new instance in overtimes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
        R.overtimes.createMany = function() {
          var TargetResource = $injector.get("Overtime");
          var action = TargetResource["::createMany::Employee::overtimes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.overtimes#destroyAll
             * @methodOf lbServices.Employee.overtimes
             *
             * @description
             *
             * Deletes all overtimes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.overtimes.destroyAll = function() {
          var TargetResource = $injector.get("Overtime");
          var action = TargetResource["::delete::Employee::overtimes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.overtimes#destroyById
             * @methodOf lbServices.Employee.overtimes
             *
             * @description
             *
             * Delete a related item by id for overtimes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for overtimes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.overtimes.destroyById = function() {
          var TargetResource = $injector.get("Overtime");
          var action = TargetResource["::destroyById::Employee::overtimes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.overtimes#findById
             * @methodOf lbServices.Employee.overtimes
             *
             * @description
             *
             * Find a related item by id for overtimes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for overtimes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
        R.overtimes.findById = function() {
          var TargetResource = $injector.get("Overtime");
          var action = TargetResource["::findById::Employee::overtimes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.overtimes#updateById
             * @methodOf lbServices.Employee.overtimes
             *
             * @description
             *
             * Update a related item by id for overtimes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for overtimes
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
        R.overtimes.updateById = function() {
          var TargetResource = $injector.get("Overtime");
          var action = TargetResource["::updateById::Employee::overtimes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Employee.departments
     * @header lbServices.Employee.departments
     * @object
     * @description
     *
     * The object `Employee.departments` groups methods
     * manipulating `Department` instances related to `Employee`.
     *
     * Call {@link lbServices.Employee#departments Employee.departments()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Employee#departments
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Fetches hasOne relation departments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
        R.departments = function() {
          var TargetResource = $injector.get("Department");
          var action = TargetResource["::get::Employee::departments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.departments#create
             * @methodOf lbServices.Employee.departments
             *
             * @description
             *
             * Creates a new instance in departments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
        R.departments.create = function() {
          var TargetResource = $injector.get("Department");
          var action = TargetResource["::create::Employee::departments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.departments#createMany
             * @methodOf lbServices.Employee.departments
             *
             * @description
             *
             * Creates a new instance in departments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
        R.departments.createMany = function() {
          var TargetResource = $injector.get("Department");
          var action = TargetResource["::createMany::Employee::departments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.departments#destroy
             * @methodOf lbServices.Employee.departments
             *
             * @description
             *
             * Deletes departments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.departments.destroy = function() {
          var TargetResource = $injector.get("Department");
          var action = TargetResource["::destroy::Employee::departments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.departments#update
             * @methodOf lbServices.Employee.departments
             *
             * @description
             *
             * Update departments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
        R.departments.update = function() {
          var TargetResource = $injector.get("Department");
          var action = TargetResource["::update::Employee::departments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Employee.dailyProductionAndOvertimeReports
     * @header lbServices.Employee.dailyProductionAndOvertimeReports
     * @object
     * @description
     *
     * The object `Employee.dailyProductionAndOvertimeReports` groups methods
     * manipulating `DailyProductionAndOvertimeReport` instances related to `Employee`.
     *
     * Call {@link lbServices.Employee#dailyProductionAndOvertimeReports Employee.dailyProductionAndOvertimeReports()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Employee#dailyProductionAndOvertimeReports
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Queries dailyProductionAndOvertimeReports of employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
        R.dailyProductionAndOvertimeReports = function() {
          var TargetResource = $injector.get("DailyProductionAndOvertimeReport");
          var action = TargetResource["::get::Employee::dailyProductionAndOvertimeReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.dailyProductionAndOvertimeReports#count
             * @methodOf lbServices.Employee.dailyProductionAndOvertimeReports
             *
             * @description
             *
             * Counts dailyProductionAndOvertimeReports of employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.dailyProductionAndOvertimeReports.count = function() {
          var TargetResource = $injector.get("DailyProductionAndOvertimeReport");
          var action = TargetResource["::count::Employee::dailyProductionAndOvertimeReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.dailyProductionAndOvertimeReports#create
             * @methodOf lbServices.Employee.dailyProductionAndOvertimeReports
             *
             * @description
             *
             * Creates a new instance in dailyProductionAndOvertimeReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
        R.dailyProductionAndOvertimeReports.create = function() {
          var TargetResource = $injector.get("DailyProductionAndOvertimeReport");
          var action = TargetResource["::create::Employee::dailyProductionAndOvertimeReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.dailyProductionAndOvertimeReports#createMany
             * @methodOf lbServices.Employee.dailyProductionAndOvertimeReports
             *
             * @description
             *
             * Creates a new instance in dailyProductionAndOvertimeReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
        R.dailyProductionAndOvertimeReports.createMany = function() {
          var TargetResource = $injector.get("DailyProductionAndOvertimeReport");
          var action = TargetResource["::createMany::Employee::dailyProductionAndOvertimeReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.dailyProductionAndOvertimeReports#destroyAll
             * @methodOf lbServices.Employee.dailyProductionAndOvertimeReports
             *
             * @description
             *
             * Deletes all dailyProductionAndOvertimeReports of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.dailyProductionAndOvertimeReports.destroyAll = function() {
          var TargetResource = $injector.get("DailyProductionAndOvertimeReport");
          var action = TargetResource["::delete::Employee::dailyProductionAndOvertimeReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.dailyProductionAndOvertimeReports#destroyById
             * @methodOf lbServices.Employee.dailyProductionAndOvertimeReports
             *
             * @description
             *
             * Delete a related item by id for dailyProductionAndOvertimeReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for dailyProductionAndOvertimeReports
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.dailyProductionAndOvertimeReports.destroyById = function() {
          var TargetResource = $injector.get("DailyProductionAndOvertimeReport");
          var action = TargetResource["::destroyById::Employee::dailyProductionAndOvertimeReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.dailyProductionAndOvertimeReports#findById
             * @methodOf lbServices.Employee.dailyProductionAndOvertimeReports
             *
             * @description
             *
             * Find a related item by id for dailyProductionAndOvertimeReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for dailyProductionAndOvertimeReports
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
        R.dailyProductionAndOvertimeReports.findById = function() {
          var TargetResource = $injector.get("DailyProductionAndOvertimeReport");
          var action = TargetResource["::findById::Employee::dailyProductionAndOvertimeReports"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employee.dailyProductionAndOvertimeReports#updateById
             * @methodOf lbServices.Employee.dailyProductionAndOvertimeReports
             *
             * @description
             *
             * Update a related item by id for dailyProductionAndOvertimeReports.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for dailyProductionAndOvertimeReports
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
        R.dailyProductionAndOvertimeReports.updateById = function() {
          var TargetResource = $injector.get("DailyProductionAndOvertimeReport");
          var action = TargetResource["::updateById::Employee::dailyProductionAndOvertimeReports"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Voucher
 * @header lbServices.Voucher
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Voucher` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Voucher",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/vouchers/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Voucher.employee() instead.
            "prototype$__get__employee": {
              url: urlBase + "/vouchers/:id/employee",
              method: "GET",
            },

            // INTERNAL. Use Voucher.expenses.findById() instead.
            "prototype$__findById__expenses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vouchers/:id/expenses/:fk",
              method: "GET",
            },

            // INTERNAL. Use Voucher.expenses.destroyById() instead.
            "prototype$__destroyById__expenses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vouchers/:id/expenses/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Voucher.expenses.updateById() instead.
            "prototype$__updateById__expenses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vouchers/:id/expenses/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Voucher.expenses() instead.
            "prototype$__get__expenses": {
              isArray: true,
              url: urlBase + "/vouchers/:id/expenses",
              method: "GET",
            },

            // INTERNAL. Use Voucher.expenses.create() instead.
            "prototype$__create__expenses": {
              url: urlBase + "/vouchers/:id/expenses",
              method: "POST",
            },

            // INTERNAL. Use Voucher.expenses.destroyAll() instead.
            "prototype$__delete__expenses": {
              url: urlBase + "/vouchers/:id/expenses",
              method: "DELETE",
            },

            // INTERNAL. Use Voucher.expenses.count() instead.
            "prototype$__count__expenses": {
              url: urlBase + "/vouchers/:id/expenses/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Voucher#create
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/vouchers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Voucher#createMany
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/vouchers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Voucher#upsert
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/vouchers",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Voucher#exists
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/vouchers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Voucher#findById
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/vouchers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Voucher#find
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/vouchers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Voucher#findOne
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/vouchers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Voucher#updateAll
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/vouchers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Voucher#deleteById
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/vouchers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Voucher#count
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/vouchers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Voucher#prototype$updateAttributes
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/vouchers/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Voucher#createChangeStream
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/vouchers/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Organisation.vouchers.findById() instead.
            "::findById::Organisation::vouchers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/vouchers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Organisation.vouchers.destroyById() instead.
            "::destroyById::Organisation::vouchers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/vouchers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.vouchers.updateById() instead.
            "::updateById::Organisation::vouchers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/vouchers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Organisation.vouchers() instead.
            "::get::Organisation::vouchers": {
              isArray: true,
              url: urlBase + "/organisations/:id/vouchers",
              method: "GET",
            },

            // INTERNAL. Use Organisation.vouchers.create() instead.
            "::create::Organisation::vouchers": {
              url: urlBase + "/organisations/:id/vouchers",
              method: "POST",
            },

            // INTERNAL. Use Organisation.vouchers.createMany() instead.
            "::createMany::Organisation::vouchers": {
              isArray: true,
              url: urlBase + "/organisations/:id/vouchers",
              method: "POST",
            },

            // INTERNAL. Use Organisation.vouchers.destroyAll() instead.
            "::delete::Organisation::vouchers": {
              url: urlBase + "/organisations/:id/vouchers",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.vouchers.count() instead.
            "::count::Organisation::vouchers": {
              url: urlBase + "/organisations/:id/vouchers/count",
              method: "GET",
            },

            // INTERNAL. Use Employee.vouchers.findById() instead.
            "::findById::Employee::vouchers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/vouchers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Employee.vouchers.destroyById() instead.
            "::destroyById::Employee::vouchers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/vouchers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.vouchers.updateById() instead.
            "::updateById::Employee::vouchers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/vouchers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Employee.vouchers() instead.
            "::get::Employee::vouchers": {
              isArray: true,
              url: urlBase + "/employees/:id/vouchers",
              method: "GET",
            },

            // INTERNAL. Use Employee.vouchers.create() instead.
            "::create::Employee::vouchers": {
              url: urlBase + "/employees/:id/vouchers",
              method: "POST",
            },

            // INTERNAL. Use Employee.vouchers.createMany() instead.
            "::createMany::Employee::vouchers": {
              isArray: true,
              url: urlBase + "/employees/:id/vouchers",
              method: "POST",
            },

            // INTERNAL. Use Employee.vouchers.destroyAll() instead.
            "::delete::Employee::vouchers": {
              url: urlBase + "/employees/:id/vouchers",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.vouchers.count() instead.
            "::count::Employee::vouchers": {
              url: urlBase + "/employees/:id/vouchers/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Voucher#updateOrCreate
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Voucher#update
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Voucher#destroyById
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Voucher#removeById
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Voucher` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Voucher#modelName
        * @propertyOf lbServices.Voucher
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Voucher`.
        */
        R.modelName = "Voucher";


            /**
             * @ngdoc method
             * @name lbServices.Voucher#employee
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Fetches belongsTo relation employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employee = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::get::Voucher::employee"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Voucher.expenses
     * @header lbServices.Voucher.expenses
     * @object
     * @description
     *
     * The object `Voucher.expenses` groups methods
     * manipulating `Expense` instances related to `Voucher`.
     *
     * Call {@link lbServices.Voucher#expenses Voucher.expenses()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Voucher#expenses
             * @methodOf lbServices.Voucher
             *
             * @description
             *
             * Queries expenses of voucher.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expense` object.)
             * </em>
             */
        R.expenses = function() {
          var TargetResource = $injector.get("Expense");
          var action = TargetResource["::get::Voucher::expenses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Voucher.expenses#count
             * @methodOf lbServices.Voucher.expenses
             *
             * @description
             *
             * Counts expenses of voucher.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.expenses.count = function() {
          var TargetResource = $injector.get("Expense");
          var action = TargetResource["::count::Voucher::expenses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Voucher.expenses#create
             * @methodOf lbServices.Voucher.expenses
             *
             * @description
             *
             * Creates a new instance in expenses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expense` object.)
             * </em>
             */
        R.expenses.create = function() {
          var TargetResource = $injector.get("Expense");
          var action = TargetResource["::create::Voucher::expenses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Voucher.expenses#createMany
             * @methodOf lbServices.Voucher.expenses
             *
             * @description
             *
             * Creates a new instance in expenses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expense` object.)
             * </em>
             */
        R.expenses.createMany = function() {
          var TargetResource = $injector.get("Expense");
          var action = TargetResource["::createMany::Voucher::expenses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Voucher.expenses#destroyAll
             * @methodOf lbServices.Voucher.expenses
             *
             * @description
             *
             * Deletes all expenses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.expenses.destroyAll = function() {
          var TargetResource = $injector.get("Expense");
          var action = TargetResource["::delete::Voucher::expenses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Voucher.expenses#destroyById
             * @methodOf lbServices.Voucher.expenses
             *
             * @description
             *
             * Delete a related item by id for expenses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for expenses
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.expenses.destroyById = function() {
          var TargetResource = $injector.get("Expense");
          var action = TargetResource["::destroyById::Voucher::expenses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Voucher.expenses#findById
             * @methodOf lbServices.Voucher.expenses
             *
             * @description
             *
             * Find a related item by id for expenses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for expenses
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expense` object.)
             * </em>
             */
        R.expenses.findById = function() {
          var TargetResource = $injector.get("Expense");
          var action = TargetResource["::findById::Voucher::expenses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Voucher.expenses#updateById
             * @methodOf lbServices.Voucher.expenses
             *
             * @description
             *
             * Update a related item by id for expenses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for expenses
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expense` object.)
             * </em>
             */
        R.expenses.updateById = function() {
          var TargetResource = $injector.get("Expense");
          var action = TargetResource["::updateById::Voucher::expenses"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Expense
 * @header lbServices.Expense
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Expense` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Expense",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/expenses/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Expense#create
             * @methodOf lbServices.Expense
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expense` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/expenses",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expense#createMany
             * @methodOf lbServices.Expense
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expense` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/expenses",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expense#upsert
             * @methodOf lbServices.Expense
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expense` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/expenses",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expense#exists
             * @methodOf lbServices.Expense
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/expenses/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expense#findById
             * @methodOf lbServices.Expense
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expense` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/expenses/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expense#find
             * @methodOf lbServices.Expense
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expense` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/expenses",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expense#findOne
             * @methodOf lbServices.Expense
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expense` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/expenses/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expense#updateAll
             * @methodOf lbServices.Expense
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/expenses/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expense#deleteById
             * @methodOf lbServices.Expense
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expense` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/expenses/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expense#count
             * @methodOf lbServices.Expense
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/expenses/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expense#prototype$updateAttributes
             * @methodOf lbServices.Expense
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expense` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/expenses/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expense#createChangeStream
             * @methodOf lbServices.Expense
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/expenses/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Voucher.expenses.findById() instead.
            "::findById::Voucher::expenses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vouchers/:id/expenses/:fk",
              method: "GET",
            },

            // INTERNAL. Use Voucher.expenses.destroyById() instead.
            "::destroyById::Voucher::expenses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vouchers/:id/expenses/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Voucher.expenses.updateById() instead.
            "::updateById::Voucher::expenses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vouchers/:id/expenses/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Voucher.expenses() instead.
            "::get::Voucher::expenses": {
              isArray: true,
              url: urlBase + "/vouchers/:id/expenses",
              method: "GET",
            },

            // INTERNAL. Use Voucher.expenses.create() instead.
            "::create::Voucher::expenses": {
              url: urlBase + "/vouchers/:id/expenses",
              method: "POST",
            },

            // INTERNAL. Use Voucher.expenses.createMany() instead.
            "::createMany::Voucher::expenses": {
              isArray: true,
              url: urlBase + "/vouchers/:id/expenses",
              method: "POST",
            },

            // INTERNAL. Use Voucher.expenses.destroyAll() instead.
            "::delete::Voucher::expenses": {
              url: urlBase + "/vouchers/:id/expenses",
              method: "DELETE",
            },

            // INTERNAL. Use Voucher.expenses.count() instead.
            "::count::Voucher::expenses": {
              url: urlBase + "/vouchers/:id/expenses/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Expense#updateOrCreate
             * @methodOf lbServices.Expense
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expense` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Expense#update
             * @methodOf lbServices.Expense
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Expense#destroyById
             * @methodOf lbServices.Expense
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expense` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Expense#removeById
             * @methodOf lbServices.Expense
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expense` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Expense#modelName
        * @propertyOf lbServices.Expense
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Expense`.
        */
        R.modelName = "Expense";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Overtime
 * @header lbServices.Overtime
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Overtime` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Overtime",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/overtimes/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Overtime.employee() instead.
            "prototype$__get__employee": {
              url: urlBase + "/overtimes/:id/employee",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Overtime#create
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/overtimes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Overtime#createMany
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/overtimes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Overtime#upsert
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/overtimes",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Overtime#exists
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/overtimes/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Overtime#findById
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/overtimes/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Overtime#find
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/overtimes",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Overtime#findOne
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/overtimes/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Overtime#updateAll
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/overtimes/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Overtime#deleteById
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/overtimes/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Overtime#count
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/overtimes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Overtime#prototype$updateAttributes
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/overtimes/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Overtime#createChangeStream
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/overtimes/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Organisation.overtimes.findById() instead.
            "::findById::Organisation::overtimes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/overtimes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Organisation.overtimes.destroyById() instead.
            "::destroyById::Organisation::overtimes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/overtimes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.overtimes.updateById() instead.
            "::updateById::Organisation::overtimes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/overtimes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Organisation.overtimes() instead.
            "::get::Organisation::overtimes": {
              isArray: true,
              url: urlBase + "/organisations/:id/overtimes",
              method: "GET",
            },

            // INTERNAL. Use Organisation.overtimes.create() instead.
            "::create::Organisation::overtimes": {
              url: urlBase + "/organisations/:id/overtimes",
              method: "POST",
            },

            // INTERNAL. Use Organisation.overtimes.createMany() instead.
            "::createMany::Organisation::overtimes": {
              isArray: true,
              url: urlBase + "/organisations/:id/overtimes",
              method: "POST",
            },

            // INTERNAL. Use Organisation.overtimes.destroyAll() instead.
            "::delete::Organisation::overtimes": {
              url: urlBase + "/organisations/:id/overtimes",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.overtimes.count() instead.
            "::count::Organisation::overtimes": {
              url: urlBase + "/organisations/:id/overtimes/count",
              method: "GET",
            },

            // INTERNAL. Use Employee.overtimes.findById() instead.
            "::findById::Employee::overtimes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/overtimes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Employee.overtimes.destroyById() instead.
            "::destroyById::Employee::overtimes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/overtimes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.overtimes.updateById() instead.
            "::updateById::Employee::overtimes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/overtimes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Employee.overtimes() instead.
            "::get::Employee::overtimes": {
              isArray: true,
              url: urlBase + "/employees/:id/overtimes",
              method: "GET",
            },

            // INTERNAL. Use Employee.overtimes.create() instead.
            "::create::Employee::overtimes": {
              url: urlBase + "/employees/:id/overtimes",
              method: "POST",
            },

            // INTERNAL. Use Employee.overtimes.createMany() instead.
            "::createMany::Employee::overtimes": {
              isArray: true,
              url: urlBase + "/employees/:id/overtimes",
              method: "POST",
            },

            // INTERNAL. Use Employee.overtimes.destroyAll() instead.
            "::delete::Employee::overtimes": {
              url: urlBase + "/employees/:id/overtimes",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.overtimes.count() instead.
            "::count::Employee::overtimes": {
              url: urlBase + "/employees/:id/overtimes/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Overtime#updateOrCreate
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Overtime#update
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Overtime#destroyById
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Overtime#removeById
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Overtime` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Overtime#modelName
        * @propertyOf lbServices.Overtime
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Overtime`.
        */
        R.modelName = "Overtime";


            /**
             * @ngdoc method
             * @name lbServices.Overtime#employee
             * @methodOf lbServices.Overtime
             *
             * @description
             *
             * Fetches belongsTo relation employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employee = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::get::Overtime::employee"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Department
 * @header lbServices.Department
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Department` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Department",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/departments/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Department.coordinator() instead.
            "prototype$__get__coordinator": {
              url: urlBase + "/departments/:id/coordinator",
              method: "GET",
            },

            // INTERNAL. Use Department.coordinator.create() instead.
            "prototype$__create__coordinator": {
              url: urlBase + "/departments/:id/coordinator",
              method: "POST",
            },

            // INTERNAL. Use Department.coordinator.update() instead.
            "prototype$__update__coordinator": {
              url: urlBase + "/departments/:id/coordinator",
              method: "PUT",
            },

            // INTERNAL. Use Department.coordinator.destroy() instead.
            "prototype$__destroy__coordinator": {
              url: urlBase + "/departments/:id/coordinator",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Department#create
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/departments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Department#createMany
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/departments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Department#upsert
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/departments",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Department#exists
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/departments/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Department#findById
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/departments/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Department#find
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/departments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Department#findOne
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/departments/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Department#updateAll
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/departments/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Department#deleteById
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/departments/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Department#count
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/departments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Department#prototype$updateAttributes
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/departments/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Department#createChangeStream
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/departments/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Organisation.departments.findById() instead.
            "::findById::Organisation::departments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/departments/:fk",
              method: "GET",
            },

            // INTERNAL. Use Organisation.departments.destroyById() instead.
            "::destroyById::Organisation::departments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/departments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.departments.updateById() instead.
            "::updateById::Organisation::departments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/departments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Organisation.departments() instead.
            "::get::Organisation::departments": {
              isArray: true,
              url: urlBase + "/organisations/:id/departments",
              method: "GET",
            },

            // INTERNAL. Use Organisation.departments.create() instead.
            "::create::Organisation::departments": {
              url: urlBase + "/organisations/:id/departments",
              method: "POST",
            },

            // INTERNAL. Use Organisation.departments.createMany() instead.
            "::createMany::Organisation::departments": {
              isArray: true,
              url: urlBase + "/organisations/:id/departments",
              method: "POST",
            },

            // INTERNAL. Use Organisation.departments.destroyAll() instead.
            "::delete::Organisation::departments": {
              url: urlBase + "/organisations/:id/departments",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.departments.count() instead.
            "::count::Organisation::departments": {
              url: urlBase + "/organisations/:id/departments/count",
              method: "GET",
            },

            // INTERNAL. Use Employee.departments() instead.
            "::get::Employee::departments": {
              url: urlBase + "/employees/:id/departments",
              method: "GET",
            },

            // INTERNAL. Use Employee.departments.create() instead.
            "::create::Employee::departments": {
              url: urlBase + "/employees/:id/departments",
              method: "POST",
            },

            // INTERNAL. Use Employee.departments.createMany() instead.
            "::createMany::Employee::departments": {
              isArray: true,
              url: urlBase + "/employees/:id/departments",
              method: "POST",
            },

            // INTERNAL. Use Employee.departments.update() instead.
            "::update::Employee::departments": {
              url: urlBase + "/employees/:id/departments",
              method: "PUT",
            },

            // INTERNAL. Use Employee.departments.destroy() instead.
            "::destroy::Employee::departments": {
              url: urlBase + "/employees/:id/departments",
              method: "DELETE",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Department#updateOrCreate
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Department#update
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Department#destroyById
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Department#removeById
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Department` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Department#modelName
        * @propertyOf lbServices.Department
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Department`.
        */
        R.modelName = "Department";

    /**
     * @ngdoc object
     * @name lbServices.Department.coordinator
     * @header lbServices.Department.coordinator
     * @object
     * @description
     *
     * The object `Department.coordinator` groups methods
     * manipulating `Employee` instances related to `Department`.
     *
     * Call {@link lbServices.Department#coordinator Department.coordinator()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Department#coordinator
             * @methodOf lbServices.Department
             *
             * @description
             *
             * Fetches hasOne relation coordinator.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.coordinator = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::get::Department::coordinator"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Department.coordinator#create
             * @methodOf lbServices.Department.coordinator
             *
             * @description
             *
             * Creates a new instance in coordinator of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.coordinator.create = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::create::Department::coordinator"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Department.coordinator#createMany
             * @methodOf lbServices.Department.coordinator
             *
             * @description
             *
             * Creates a new instance in coordinator of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.coordinator.createMany = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::createMany::Department::coordinator"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Department.coordinator#destroy
             * @methodOf lbServices.Department.coordinator
             *
             * @description
             *
             * Deletes coordinator of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.coordinator.destroy = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::destroy::Department::coordinator"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Department.coordinator#update
             * @methodOf lbServices.Department.coordinator
             *
             * @description
             *
             * Update coordinator of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.coordinator.update = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::update::Department::coordinator"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.DailyProductionAndOvertimeReport
 * @header lbServices.DailyProductionAndOvertimeReport
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `DailyProductionAndOvertimeReport` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "DailyProductionAndOvertimeReport",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/DailyProductionAndOvertimeReports/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use DailyProductionAndOvertimeReport.employee() instead.
            "prototype$__get__employee": {
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/employee",
              method: "GET",
            },

            // INTERNAL. Use DailyProductionAndOvertimeReport.jobdetails.findById() instead.
            "prototype$__findById__jobdetails": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/jobdetails/:fk",
              method: "GET",
            },

            // INTERNAL. Use DailyProductionAndOvertimeReport.jobdetails.destroyById() instead.
            "prototype$__destroyById__jobdetails": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/jobdetails/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use DailyProductionAndOvertimeReport.jobdetails.updateById() instead.
            "prototype$__updateById__jobdetails": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/jobdetails/:fk",
              method: "PUT",
            },

            // INTERNAL. Use DailyProductionAndOvertimeReport.jobdetails() instead.
            "prototype$__get__jobdetails": {
              isArray: true,
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/jobdetails",
              method: "GET",
            },

            // INTERNAL. Use DailyProductionAndOvertimeReport.jobdetails.create() instead.
            "prototype$__create__jobdetails": {
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/jobdetails",
              method: "POST",
            },

            // INTERNAL. Use DailyProductionAndOvertimeReport.jobdetails.destroyAll() instead.
            "prototype$__delete__jobdetails": {
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/jobdetails",
              method: "DELETE",
            },

            // INTERNAL. Use DailyProductionAndOvertimeReport.jobdetails.count() instead.
            "prototype$__count__jobdetails": {
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/jobdetails/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#create
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/DailyProductionAndOvertimeReports",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#createMany
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/DailyProductionAndOvertimeReports",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#upsert
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/DailyProductionAndOvertimeReports",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#exists
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#findById
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/DailyProductionAndOvertimeReports/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#find
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/DailyProductionAndOvertimeReports",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#findOne
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/DailyProductionAndOvertimeReports/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#updateAll
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/DailyProductionAndOvertimeReports/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#deleteById
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/DailyProductionAndOvertimeReports/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#count
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/DailyProductionAndOvertimeReports/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#prototype$updateAttributes
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/DailyProductionAndOvertimeReports/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#createChangeStream
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/DailyProductionAndOvertimeReports/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Organisation.dailyProductionAndOvertimeReports.findById() instead.
            "::findById::Organisation::dailyProductionAndOvertimeReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/dailyProductionAndOvertimeReports/:fk",
              method: "GET",
            },

            // INTERNAL. Use Organisation.dailyProductionAndOvertimeReports.destroyById() instead.
            "::destroyById::Organisation::dailyProductionAndOvertimeReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/dailyProductionAndOvertimeReports/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.dailyProductionAndOvertimeReports.updateById() instead.
            "::updateById::Organisation::dailyProductionAndOvertimeReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/organisations/:id/dailyProductionAndOvertimeReports/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Organisation.dailyProductionAndOvertimeReports() instead.
            "::get::Organisation::dailyProductionAndOvertimeReports": {
              isArray: true,
              url: urlBase + "/organisations/:id/dailyProductionAndOvertimeReports",
              method: "GET",
            },

            // INTERNAL. Use Organisation.dailyProductionAndOvertimeReports.create() instead.
            "::create::Organisation::dailyProductionAndOvertimeReports": {
              url: urlBase + "/organisations/:id/dailyProductionAndOvertimeReports",
              method: "POST",
            },

            // INTERNAL. Use Organisation.dailyProductionAndOvertimeReports.createMany() instead.
            "::createMany::Organisation::dailyProductionAndOvertimeReports": {
              isArray: true,
              url: urlBase + "/organisations/:id/dailyProductionAndOvertimeReports",
              method: "POST",
            },

            // INTERNAL. Use Organisation.dailyProductionAndOvertimeReports.destroyAll() instead.
            "::delete::Organisation::dailyProductionAndOvertimeReports": {
              url: urlBase + "/organisations/:id/dailyProductionAndOvertimeReports",
              method: "DELETE",
            },

            // INTERNAL. Use Organisation.dailyProductionAndOvertimeReports.count() instead.
            "::count::Organisation::dailyProductionAndOvertimeReports": {
              url: urlBase + "/organisations/:id/dailyProductionAndOvertimeReports/count",
              method: "GET",
            },

            // INTERNAL. Use Employee.dailyProductionAndOvertimeReports.findById() instead.
            "::findById::Employee::dailyProductionAndOvertimeReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/dailyProductionAndOvertimeReports/:fk",
              method: "GET",
            },

            // INTERNAL. Use Employee.dailyProductionAndOvertimeReports.destroyById() instead.
            "::destroyById::Employee::dailyProductionAndOvertimeReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/dailyProductionAndOvertimeReports/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.dailyProductionAndOvertimeReports.updateById() instead.
            "::updateById::Employee::dailyProductionAndOvertimeReports": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employees/:id/dailyProductionAndOvertimeReports/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Employee.dailyProductionAndOvertimeReports() instead.
            "::get::Employee::dailyProductionAndOvertimeReports": {
              isArray: true,
              url: urlBase + "/employees/:id/dailyProductionAndOvertimeReports",
              method: "GET",
            },

            // INTERNAL. Use Employee.dailyProductionAndOvertimeReports.create() instead.
            "::create::Employee::dailyProductionAndOvertimeReports": {
              url: urlBase + "/employees/:id/dailyProductionAndOvertimeReports",
              method: "POST",
            },

            // INTERNAL. Use Employee.dailyProductionAndOvertimeReports.createMany() instead.
            "::createMany::Employee::dailyProductionAndOvertimeReports": {
              isArray: true,
              url: urlBase + "/employees/:id/dailyProductionAndOvertimeReports",
              method: "POST",
            },

            // INTERNAL. Use Employee.dailyProductionAndOvertimeReports.destroyAll() instead.
            "::delete::Employee::dailyProductionAndOvertimeReports": {
              url: urlBase + "/employees/:id/dailyProductionAndOvertimeReports",
              method: "DELETE",
            },

            // INTERNAL. Use Employee.dailyProductionAndOvertimeReports.count() instead.
            "::count::Employee::dailyProductionAndOvertimeReports": {
              url: urlBase + "/employees/:id/dailyProductionAndOvertimeReports/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#updateOrCreate
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#update
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#destroyById
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#removeById
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DailyProductionAndOvertimeReport` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.DailyProductionAndOvertimeReport#modelName
        * @propertyOf lbServices.DailyProductionAndOvertimeReport
        * @description
        * The name of the model represented by this $resource,
        * i.e. `DailyProductionAndOvertimeReport`.
        */
        R.modelName = "DailyProductionAndOvertimeReport";


            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#employee
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Fetches belongsTo relation employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R.employee = function() {
          var TargetResource = $injector.get("Employee");
          var action = TargetResource["::get::DailyProductionAndOvertimeReport::employee"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.DailyProductionAndOvertimeReport.jobdetails
     * @header lbServices.DailyProductionAndOvertimeReport.jobdetails
     * @object
     * @description
     *
     * The object `DailyProductionAndOvertimeReport.jobdetails` groups methods
     * manipulating `Jobdetail` instances related to `DailyProductionAndOvertimeReport`.
     *
     * Call {@link lbServices.DailyProductionAndOvertimeReport#jobdetails DailyProductionAndOvertimeReport.jobdetails()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport#jobdetails
             * @methodOf lbServices.DailyProductionAndOvertimeReport
             *
             * @description
             *
             * Queries jobdetails of DailyProductionAndOvertimeReport.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jobdetail` object.)
             * </em>
             */
        R.jobdetails = function() {
          var TargetResource = $injector.get("Jobdetail");
          var action = TargetResource["::get::DailyProductionAndOvertimeReport::jobdetails"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport.jobdetails#count
             * @methodOf lbServices.DailyProductionAndOvertimeReport.jobdetails
             *
             * @description
             *
             * Counts jobdetails of DailyProductionAndOvertimeReport.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.jobdetails.count = function() {
          var TargetResource = $injector.get("Jobdetail");
          var action = TargetResource["::count::DailyProductionAndOvertimeReport::jobdetails"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport.jobdetails#create
             * @methodOf lbServices.DailyProductionAndOvertimeReport.jobdetails
             *
             * @description
             *
             * Creates a new instance in jobdetails of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jobdetail` object.)
             * </em>
             */
        R.jobdetails.create = function() {
          var TargetResource = $injector.get("Jobdetail");
          var action = TargetResource["::create::DailyProductionAndOvertimeReport::jobdetails"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport.jobdetails#createMany
             * @methodOf lbServices.DailyProductionAndOvertimeReport.jobdetails
             *
             * @description
             *
             * Creates a new instance in jobdetails of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jobdetail` object.)
             * </em>
             */
        R.jobdetails.createMany = function() {
          var TargetResource = $injector.get("Jobdetail");
          var action = TargetResource["::createMany::DailyProductionAndOvertimeReport::jobdetails"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport.jobdetails#destroyAll
             * @methodOf lbServices.DailyProductionAndOvertimeReport.jobdetails
             *
             * @description
             *
             * Deletes all jobdetails of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.jobdetails.destroyAll = function() {
          var TargetResource = $injector.get("Jobdetail");
          var action = TargetResource["::delete::DailyProductionAndOvertimeReport::jobdetails"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport.jobdetails#destroyById
             * @methodOf lbServices.DailyProductionAndOvertimeReport.jobdetails
             *
             * @description
             *
             * Delete a related item by id for jobdetails.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for jobdetails
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.jobdetails.destroyById = function() {
          var TargetResource = $injector.get("Jobdetail");
          var action = TargetResource["::destroyById::DailyProductionAndOvertimeReport::jobdetails"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport.jobdetails#findById
             * @methodOf lbServices.DailyProductionAndOvertimeReport.jobdetails
             *
             * @description
             *
             * Find a related item by id for jobdetails.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for jobdetails
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jobdetail` object.)
             * </em>
             */
        R.jobdetails.findById = function() {
          var TargetResource = $injector.get("Jobdetail");
          var action = TargetResource["::findById::DailyProductionAndOvertimeReport::jobdetails"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DailyProductionAndOvertimeReport.jobdetails#updateById
             * @methodOf lbServices.DailyProductionAndOvertimeReport.jobdetails
             *
             * @description
             *
             * Update a related item by id for jobdetails.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for jobdetails
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jobdetail` object.)
             * </em>
             */
        R.jobdetails.updateById = function() {
          var TargetResource = $injector.get("Jobdetail");
          var action = TargetResource["::updateById::DailyProductionAndOvertimeReport::jobdetails"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Jobdetail
 * @header lbServices.Jobdetail
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Jobdetail` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Jobdetail",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/jobdetails/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Jobdetail#create
             * @methodOf lbServices.Jobdetail
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jobdetail` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/jobdetails",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jobdetail#createMany
             * @methodOf lbServices.Jobdetail
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jobdetail` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/jobdetails",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jobdetail#upsert
             * @methodOf lbServices.Jobdetail
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jobdetail` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/jobdetails",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jobdetail#exists
             * @methodOf lbServices.Jobdetail
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/jobdetails/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jobdetail#findById
             * @methodOf lbServices.Jobdetail
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jobdetail` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/jobdetails/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jobdetail#find
             * @methodOf lbServices.Jobdetail
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jobdetail` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/jobdetails",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jobdetail#findOne
             * @methodOf lbServices.Jobdetail
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jobdetail` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/jobdetails/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jobdetail#updateAll
             * @methodOf lbServices.Jobdetail
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/jobdetails/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jobdetail#deleteById
             * @methodOf lbServices.Jobdetail
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jobdetail` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/jobdetails/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jobdetail#count
             * @methodOf lbServices.Jobdetail
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/jobdetails/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jobdetail#prototype$updateAttributes
             * @methodOf lbServices.Jobdetail
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jobdetail` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/jobdetails/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Jobdetail#createChangeStream
             * @methodOf lbServices.Jobdetail
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/jobdetails/change-stream",
              method: "POST",
            },

            // INTERNAL. Use DailyProductionAndOvertimeReport.jobdetails.findById() instead.
            "::findById::DailyProductionAndOvertimeReport::jobdetails": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/jobdetails/:fk",
              method: "GET",
            },

            // INTERNAL. Use DailyProductionAndOvertimeReport.jobdetails.destroyById() instead.
            "::destroyById::DailyProductionAndOvertimeReport::jobdetails": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/jobdetails/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use DailyProductionAndOvertimeReport.jobdetails.updateById() instead.
            "::updateById::DailyProductionAndOvertimeReport::jobdetails": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/jobdetails/:fk",
              method: "PUT",
            },

            // INTERNAL. Use DailyProductionAndOvertimeReport.jobdetails() instead.
            "::get::DailyProductionAndOvertimeReport::jobdetails": {
              isArray: true,
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/jobdetails",
              method: "GET",
            },

            // INTERNAL. Use DailyProductionAndOvertimeReport.jobdetails.create() instead.
            "::create::DailyProductionAndOvertimeReport::jobdetails": {
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/jobdetails",
              method: "POST",
            },

            // INTERNAL. Use DailyProductionAndOvertimeReport.jobdetails.createMany() instead.
            "::createMany::DailyProductionAndOvertimeReport::jobdetails": {
              isArray: true,
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/jobdetails",
              method: "POST",
            },

            // INTERNAL. Use DailyProductionAndOvertimeReport.jobdetails.destroyAll() instead.
            "::delete::DailyProductionAndOvertimeReport::jobdetails": {
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/jobdetails",
              method: "DELETE",
            },

            // INTERNAL. Use DailyProductionAndOvertimeReport.jobdetails.count() instead.
            "::count::DailyProductionAndOvertimeReport::jobdetails": {
              url: urlBase + "/DailyProductionAndOvertimeReports/:id/jobdetails/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Jobdetail#updateOrCreate
             * @methodOf lbServices.Jobdetail
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jobdetail` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Jobdetail#update
             * @methodOf lbServices.Jobdetail
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Jobdetail#destroyById
             * @methodOf lbServices.Jobdetail
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jobdetail` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Jobdetail#removeById
             * @methodOf lbServices.Jobdetail
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Jobdetail` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Jobdetail#modelName
        * @propertyOf lbServices.Jobdetail
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Jobdetail`.
        */
        R.modelName = "Jobdetail";



        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
