module.exports = ngModule => {
  ngModule.directive('formlyJsbinExample', formlyJsbinExample);

  formlyJsbinExample.styles = require('./formly-jsbin-example.css');

  function formlyJsbinExample() {
    return {
      restrict: 'E',
      scope: {
        slug: '@'
      },
      link: function(scope, el) {
        el.replaceWith(angular.element(`
          <div class="formly-jsbin-example">
            <iframe width="100%"
                    height="100%"
                    src="http://jsbin.com/${scope.slug}/embed?output">
            </iframe>
          </div>
        `));
      }
    };
  }
};