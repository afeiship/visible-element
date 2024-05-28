/**
 * @description 实现可见性管理的类
 * 说明一下，为什么是 show/close，而不是 show-hide
 * 对应的是标准 HTML dialog 的方法设计，起初也觉得不是特别合理，但看到除了 Dialog之外，还有 Details、Summary 等元素，这样设计就显得合理了。
 * 另外，show/close 也更贴近实际场景，毕竟用户的操作习惯往往是先展示内容，再决定是否关闭。
 */
const EventOptions = { once: true };

export type VisibleState = 'show' | 'showed' | 'close' | 'closed';

interface VisibleElementOptions {
  minDuration?: number;
  onShow?: () => void;
  onShowed?: () => void;
  onClose?: () => void;
  onClosed?: () => void;
  onChange?: (status: VisibleState) => void;
}

class VisibleElement {
  public element: HTMLElement;
  public options: VisibleElementOptions;
  private latestTs = 0;
  private timerId: number | undefined;

  private immediatelyShow() {
    this.element.removeAttribute('hidden');
    if (this.isOpenedElement) (this.element as HTMLDialogElement).show();
  }

  private immediatelyClose() {
    this.element.hidden = true;
    if (this.isOpenedElement) (this.element as HTMLDialogElement).close();
  }

  private checkMinDuration() {
    const nowTs = Date.now();
    const minDuration = this.options.minDuration as number;
    if (nowTs - this.latestTs < minDuration) {
      return false;
    }
    this.latestTs = nowTs;
    return true;
  }

  constructor(inElement: HTMLElement, inOptions?: VisibleElementOptions) {
    this.element = inElement;
    this.options = inOptions || { minDuration: 100 };
  }

  get isOpenedElement() {
    return 'open' in this.element;
  }

  get visible() {
    if (!this.element) return false;
    return this.element.offsetWidth > 0 && this.element.offsetHeight > 0;
  }

  show() {
    if (this.visible) return;
    if (!this.element) return;
    const { onShow, onShowed, onChange } = this.options;
    this.latestTs = Date.now();
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
    if (!this.element) return;
    const { onClose, onClosed, onChange, minDuration } = this.options;
    if (!this.checkMinDuration()) {
      if (this.timerId) clearTimeout(this.timerId);
      this.timerId = setTimeout(() => {
        this.close();
      }, minDuration as number) as unknown as number;
      return;
    }
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
