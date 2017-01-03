/**
 * Created by Vanessa on 2/1/2017.
 */
(function (window) {
  window.__env = window.__env || {};

  // API url
  window.__env.apiUrl = 'http://localhost:8081';

  // Base url
  window.__env.baseUrl = '/api/';
  window.__env.auth = window.__env.apiUrl + window.__env.baseUrl + 'login';

  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;
}(this));
