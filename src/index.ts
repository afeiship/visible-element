const EventOptions = { once: true };

export type VisibleState = 'show' | 'showed' | 'close' | 'closed';

interface VisibleElementOptions {
  onShow?: () => void;
  onShowed?: () => void;
  onClose?: () => void;
  onClosed?: () => void;
  onChange?: (status: VisibleState) => void;
}

class VisibleElement {
  private readonly element: HTMLElement;
  private readonly options: VisibleElementOptions;

  private immediatelyShow() {
    this.element.removeAttribute('hidden');
    if (this.isOpenedElement) (this.element as HTMLDialogElement).show();
  }

  private immediatelyClose() {
    this.element.hidden = true;
    if (this.isOpenedElement) (this.element as HTMLDialogElement).close();
  }

  constructor(inElement: HTMLElement, inOptions?: VisibleElementOptions) {
    this.element = inElement;
    this.options = inOptions || {};
  }

  get isOpenedElement() {
    return 'open' in this.element;
  }

  get visible() {
    return this.element.offsetWidth > 0 && this.element.offsetHeight > 0;
  }

  show() {
    if (this.visible) return;
    const { onShow, onShowed, onChange } = this.options;
    onShow?.();
    onChange?.('show');
    this.immediatelyShow();
    this.element.setAttribute('data-visible', 'true');
    this.element.addEventListener('webkitAnimationEnd', () => {
      onShowed?.();
      onChange?.('showed');
    }, EventOptions);
  }

  close() {
    if (!this.visible) return;
    const { onClose, onClosed, onChange } = this.options;
    onClose?.();
    onChange?.('close');
    this.element.setAttribute('data-visible', 'false');
    this.element.addEventListener('webkitAnimationEnd', () => {
      this.immediatelyClose();
      onClosed?.();
      onChange?.('closed');
    }, EventOptions);
  }

  toggle() {
    this.to(!this.visible);
  }

  to(value: boolean) {
    if (value) {
      this.show();
    } else {
      this.close();
    }
  }
}

export default VisibleElement;
