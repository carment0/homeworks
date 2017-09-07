const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');

$(function() {
  // use jquery .each
  $('button.follow-toggle').each( (i, btn) => new FollowToggle(btn, {}) );
  $('nav.user-search').each( (i, search) => new UsersSearch(search) );
});
