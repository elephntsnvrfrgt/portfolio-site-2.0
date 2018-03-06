var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

function getInertia(destinationValue, value, inertia) {
  var valueToAdd = Math.abs((destinationValue - value) * inertia) >= 0.01 ? (destinationValue - value) * inertia : destinationValue - value;
  value += valueToAdd;

  return value;
}

var smoothScroll = function () {
  function smoothScroll() {
    _classCallCheck(this, smoothScroll);

    this.$body = document.querySelector('body');
    this.$mainWrapper = document.querySelector('#scrollwrapper');
    this.$window = window;

    this.SCROLL_INERTIA = 0.05;
    this.sY = null; // scroll Y
    this.siY = null; // scroll inertia Y

    this.bindEvents();
    this.onResize();

    requestAnimationFrame(this.updateProps.bind(this));
    requestAnimationFrame(this.scrollContent.bind(this));
  }

  _createClass(smoothScroll, [{
    key: 'bindEvents',
    value: function bindEvents() {
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      this.height = this.$mainWrapper.offsetHeight;
    }
  }, {
    key: 'updateProps',
    value: function updateProps() {
      this.sY = this.$window.scrollY || this.$window.pageYOffset;
      this.siY = getInertia(this.sY, this.siY, this.SCROLL_INERTIA);

      //console.log(this.siY);
      requestAnimationFrame(this.updateProps.bind(this));
    }
  }, {
    key: 'scrollContent',
    value: function scrollContent() {

      var bottom = this.$mainWrapper.getBoundingClientRect().bottom;
      var wHeight = this.$window.innerHeight;

      this.$mainWrapper.style.transform = 'translateY(' + -this.siY + 'px)';

      requestAnimationFrame(this.scrollContent.bind(this));
    }
  }]);

  return smoothScroll;
}();

new smoothScroll();
