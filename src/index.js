/**
 * Advanced Quote Tool for the Editor.js
 *
 * @author Igor Shuvalov «VolgaIgor»
 * @license MIT
 * @see {@link https://github.com/VolgaIgor/editorjs-quote-advanced}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * quote: {
 *   class: QuoteAdvanced,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *     }
 *   },
 * },
 */

/**
 * @typedef {object} QuoteAdvancedToolData
 * @description Quote Advanced Tool's input and output data format
 * @property {string} quote — quote text
 * @property {string} authorName — quote author name
 * @property {string} authorInfo — information about quote author
 * @property {object} file — Image file data returned from backend
 * @property {string} file.url — author image URL
 */

import './index.pcss';

import Ui from './ui';
import Uploader from './uploader';

import { IconQuote } from '@codexteam/icons';

/**
 * @typedef {object} QuoteAdvancedConfig
 * @description Config supported by Tool
 * @property {object} endpoints - upload endpoints
 * @property {string} endpoints.byFile - upload by file
 * @property {string} field - field name for uploaded image
 * @property {string} types - available mime-types
 * @property {string} quotePlaceholder - placeholder for quote field
 * @property {string} authorNamePlaceholder - placeholder for author name field
 * @property {string} authorInfoPlaceholder - placeholder for author info field
 * @property {object} additionalRequestData - any data to send with requests
 * @property {object} additionalRequestHeaders - allows to pass custom headers with Request
 * @property {string} buttonContent - overrides for Select File button
 * @property {object} [uploader] - optional custom uploader
 * @property {function(File): Promise.<UploadResponseFormat>} [uploader.uploadByFile] - method that upload image by File
 */

/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on file uploading
 * @property {number} success - 1 for successful uploading, 0 for failure
 * @property {object} file - Object with file data.
 *                           'url' is required,
 *                           also can contain any additional data that will be saved and passed back
 * @property {string} file.url - [Required] image source URL
 */
export default class QuoteAdvanced {
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: IconQuote,
      title: 'Quote',
    };
  }

  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {QuoteAdvancedToolData} tool.data - previously saved data
   * @param {QuoteAdvancedConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   */
  constructor({ data, config, api, readOnly }) {
    this.api = api;
    this.readOnly = readOnly;

    /**
     * Tool's initial config
     */
    this.config = {
      endpoints: config.endpoints || '',
      additionalRequestData: config.additionalRequestData || {},
      additionalRequestHeaders: config.additionalRequestHeaders || {},
      field: config.field || 'image',
      types: config.types || 'image/*',
      quotePlaceholder: this.api.i18n.t(config.quotePlaceholder || 'Enter quote...'),
      authorNamePlaceholder: this.api.i18n.t(config.authorNamePlaceholder || 'Author name'),
      authorInfoPlaceholder: this.api.i18n.t(config.authorInfoPlaceholder || 'Author summary'),
      buttonContent: config.buttonContent || '',
      uploader: config.uploader || undefined,
      actions: config.actions || [],
    };

    /**
     * Module for file uploading
     */
    this.uploader = new Uploader({
      config: this.config,
      onUpload: (response) => this.onUpload(response),
      onError: (error) => this.uploadingFailed(error),
    });

    /**
     * Module for working with UI
     */
    this.ui = new Ui({
      api,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (src) => {
            this.ui.showPreloader(src);
          },
        });
      },
      onDeleteFile: () => {
        this.image = null;
        this.ui.deleteImage();
      },
    });

    /**
     * Set saved state
     */
    this._data = {};
    this.data = data;
  }

  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.ui.render(this.data);
  }

  /**
   * Allow to press Enter inside the Quote
   *
   * @public
   * @returns {boolean}
   */
  static get enableLineBreaks() {
    return true;
  }

  /**
   * Validate data: check if Image exists
   *
   * @param {QuoteAdvancedToolData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(savedData) {
    return savedData.quote || savedData.authorName;
  }

  /**
   * Return Block data
   *
   * @public
   *
   * @returns {QuoteAdvancedToolData}
   */
  save() {
    const quote = this.ui.nodes.quote;
    const authorName = this.ui.nodes.authorName;
    const authorInfo = this.ui.nodes.authorInfo;

    this._data.quote = quote.innerHTML.trim();
    this._data.authorName = authorName.value.trim();
    this._data.authorInfo = authorInfo.value.trim();

    return this.data;
  }

  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */

  /**
   * Stores all Tool's data
   *
   * @private
   *
   * @param {QuoteAdvancedToolData} data - data in Quote Advanced Tool format
   */
  set data(data) {
    this.image = data.file;

    this._data.quote = data.quote || '';
    this.ui.fillQuote(this._data.quote);

    this._data.authorName = data.authorName || '';
    this.ui.fillAuthorName(this._data.authorName);

    this._data.authorInfo = data.authorInfo || '';
    this.ui.fillAuthorInfo(this._data.authorInfo);
  }

  /**
   * Return Tool data
   *
   * @private
   *
   * @returns {QuoteAdvancedToolData}
   */
  get data() {
    return this._data;
  }

  /**
   * Set new image file
   *
   * @private
   *
   * @param {object} file - uploaded file data
   */
  set image(file) {
    this._data.file = file || {};

    if (file && file.url) {
      this.ui.fillImage(file.url);
    }
  }

  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(response) {
    if (response.success && response.file) {
      this.image = response.file;
    } else {
      this.uploadingFailed('incorrect response: ' + JSON.stringify(response));
    }
  }

  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(errorText) {
    console.log('Image Tool: uploading failed because of', errorText);

    this.api.notifier.show({
      message: this.api.i18n.t('Couldn’t upload image. Please try another.'),
      style: 'error',
    });
    this.ui.hidePreloader();
  }

  /**
   * Show preloader and upload image file
   *
   * @param {File} file - file that is currently uploading (from paste)
   * @returns {void}
   */
  uploadFile(file) {
    this.uploader.uploadByFile(file, {
      onPreview: (src) => {
        this.ui.showPreloader(src);
      },
    });
  }

}
