import { IconPicture, IconTrash } from '@codexteam/icons';
import { make } from './utils/dom';

/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 */
export default class Ui {
  /**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {Function} ui.onDeleteFile - callback for clicks on Delete file button
   */
  constructor({ api, config, onSelectFile, onDeleteFile }) {
    this.api = api;
    this.config = config;
    this.onSelectFile = onSelectFile;
    this.onDeleteFile = onDeleteFile;
    this.nodes = {
      wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),

      quote: make('div', [this.CSS.input, this.CSS.quote], {
        contentEditable: true,
        // innerHTML: this.data.quote,
      }),

      imageContainer: make('div', [this.CSS.imageContainer]),
      imageEl: undefined,
      imagePreloader: make('div', this.CSS.imagePreloader),
      fileButton: this.createFileButton(),
      deleteButton: this.createDeleteButton(),

      authorName: make('input', [this.CSS.input, this.CSS.authorName]),
      authorInfo: make('input', [this.CSS.input, this.CSS.authorInfo]),
    };

    /**
     * Create base structure
     *  <wrapper>
     *    <quote />
     *    <author-container>
     *      <image-container>
     *        <image />
     *        <image-preloader />
     *        <select-file-button />
     *        <delete-image-button />
     *      </image-container>
     *      <container>
     *        <author-name />
     *        <author-info />
     *      </container>
     *    </author-container>
     *  </wrapper>
     */
    this.nodes.imageContainer.appendChild(this.nodes.imagePreloader);
    this.nodes.imageContainer.appendChild(this.nodes.fileButton);
    this.nodes.imageContainer.appendChild(this.nodes.deleteButton);

    let container = make('div', [this.CSS.authorInputs]);
    this.nodes.authorName.placeholder = this.config.authorNamePlaceholder;
    container.appendChild(this.nodes.authorName);
    this.nodes.authorInfo.placeholder = this.config.authorInfoPlaceholder;
    container.appendChild(this.nodes.authorInfo);

    let authorContainer = make('div', [this.CSS.author]);
    authorContainer.appendChild(this.nodes.imageContainer);
    authorContainer.appendChild(container);

    this.nodes.quote.dataset.placeholder = this.config.quotePlaceholder;
    this.nodes.wrapper.appendChild(this.nodes.quote);
    this.nodes.wrapper.appendChild(authorContainer);
  }

  /**
   * CSS classes
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,

      /**
       * Tool's classes
       */
      wrapper: 'quote-adv',

      quote: 'quote-adv_quote',

      imageContainer: 'quote-adv__image',
      imagePreloader: 'quote-adv__image-preloader',
      imageEl: 'quote-adv__image-picture',

      author: 'quote-adv_author',
      authorInputs: 'quote-adv_author-inputs',
      authorName: 'quote-adv_author-name',
      authorInfo: 'quote-adv_author-info',

      deleteButton: 'quote-adv_delete-button',
    };
  };

  /**
   * Ui statuses:
   * - empty
   * - uploading
   * - filled
   *
   * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
   */
  static get status() {
    return {
      EMPTY: 'empty',
      UPLOADING: 'loading',
      FILLED: 'filled',
    };
  }

  /**
   * Renders tool UI
   *
   * @param {ImageToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(toolData) {
    if (!toolData.file || Object.keys(toolData.file).length === 0) {
      this.toggleStatus(Ui.status.EMPTY);
    } else {
      this.toggleStatus(Ui.status.UPLOADING);
    }

    return this.nodes.wrapper;
  }

  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const button = make('div', [this.CSS.button]);

    button.innerHTML = this.config.buttonContent || `${IconPicture} ${this.api.i18n.t('Select an Image')}`;

    button.addEventListener('click', () => {
      this.onSelectFile();
    });

    return button;
  }

  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createDeleteButton() {
    const button = make('div', [this.CSS.deleteButton]);

    button.innerHTML = IconTrash;

    button.addEventListener('click', () => {
      this.onDeleteFile();
    });

    return button;
  }

  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(src) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${src})`;

    this.toggleStatus(Ui.status.UPLOADING);
  }

  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = '';
    this.toggleStatus(Ui.status.EMPTY);
  }

  deleteImage() {
    this.nodes.imageContainer.removeChild(this.nodes.imageEl);
    this.nodes.imageEl = undefined;
    this.toggleStatus(Ui.status.EMPTY);
  }

  /**
   * Shows an image
   *
   * @param {string} url - image source
   * @returns {void}
   */
  fillImage(url) {
    const attributes = {
      src: url,
    };

    /**
     * We use eventName variable because IMG and VIDEO tags have different event to be called on source load
     * - IMG: load
     * - VIDEO: loadeddata
     *
     * @type {string}
     */
    let eventName = 'load';

    /**
     * Compose tag with defined attributes
     *
     * @type {Element}
     */
    this.nodes.imageEl = make('IMG', this.CSS.imageEl, attributes);

    /**
     * Add load event listener
     */
    this.nodes.imageEl.addEventListener(eventName, () => {
      this.toggleStatus(Ui.status.FILLED);

      /**
       * Preloader does not exists on first rendering with presaved data
       */
      if (this.nodes.imagePreloader) {
        this.nodes.imagePreloader.style.backgroundImage = '';
      }
    });

    this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }

  /**
   * Shows quote input
   *
   * @param {string} text - quote text
   * @returns {void}
   */
  fillQuote(text) {
    if (this.nodes.quote) {
      this.nodes.quote.innerHTML = text;
    }
  }

  /**
   * Shows author name input
   *
   * @param {string} text - author name
   * @returns {void}
   */
  fillAuthorName(text) {
    if (this.nodes.authorName) {
      this.nodes.authorName.value = text;
    }
  }

  /**
   * Shows author info input
   *
   * @param {string} text - author info
   * @returns {void}
   */
  fillAuthorInfo(text) {
    if (this.nodes.authorInfo) {
      this.nodes.authorInfo.value = text;
    }
  }

  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(status) {
    for (const statusType in Ui.status) {
      if (Object.prototype.hasOwnProperty.call(Ui.status, statusType)) {
        this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${Ui.status[statusType]}`, status === Ui.status[statusType]);
      }
    }
  }
}

