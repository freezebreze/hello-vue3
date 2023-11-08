type EventCallback = (...args: any[]) => void

interface UnsubscribeFunction {
  (): void
}

class UpgradeEventBus2 {
  private eventMap: Record<string, Record<string, EventCallback>> = {}
  private maxListeners: number
  private callbackId: number = 0

  constructor(maxListeners: number = Infinity) {
    this.maxListeners = maxListeners
  }

  subscribe(
    eventName: string,
    funCallback: EventCallback,
  ): UnsubscribeFunction {
    if (!this.eventMap[eventName]) {
      this.eventMap[eventName] = {}
    }

    if (
      this.maxListeners !== Infinity &&
      Object.keys(this.eventMap[eventName]).length >= this.maxListeners
    ) {
      console.warn(`该事件 ${eventName} 超过了最大监听数`)
    }

    const thisCallbackId = String(this.callbackId++)
    this.eventMap[eventName][thisCallbackId] = funCallback

    return () => {
      delete this.eventMap[eventName][thisCallbackId]
      if (Object.keys(this.eventMap[eventName]).length === 0) {
        delete this.eventMap[eventName]
      }
    }
  }

  emit(eventName: string, ...args: any[]): void {
    const callbackList = this.eventMap[eventName]

    if (!callbackList) {
      console.warn(`从未订阅过此事件 ${eventName}`)
      return
    }

    for (const [id, callback] of Object.entries(callbackList)) {
      callback(...args)
      if (id.startsWith('one')) {
        delete callbackList[id]
      }
    }
  }

  clear(eventName: string): void {
    if (!eventName) {
      console.warn(`需提供要被清除的事件名称 ${eventName}`)
      return
    }

    Reflect.deleteProperty(this.eventMap, eventName)
  }

  clearAll(): void {
    this.eventMap = {}
  }

  subscribeOne(
    eventName: string,
    callback: EventCallback,
  ): UnsubscribeFunction {
    if (!this.eventMap[eventName]) {
      this.eventMap[eventName] = {}
    }

    const theCallbackId = 'one' + String(this.callbackId++)
    this.eventMap[eventName][theCallbackId] = callback

    return () => {
      delete this.eventMap[eventName][theCallbackId]
      if (Object.keys(this.eventMap[eventName]).length === 0) {
        delete this.eventMap[eventName]
      }
    }
  }
}

export default UpgradeEventBus2
