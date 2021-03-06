import Component from '@ember/component';

export default Component.extend({
  init() {
    this.fingerPrint = window.ASSET_FINGERPRINT_HASH;
    this._super(...arguments);
  },
  click() {
    let imageId = this.get('image');
    if (imageId !== undefined) {
      this.get('sendDefImage')(imageId);
    }
  }
});

