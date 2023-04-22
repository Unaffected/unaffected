import type { Plugin } from '@unaffected/app'
import type { Gateway } from '@unaffected/gateway'
import http, { EVENT as HTTP } from '@unaffected/gateway/plugin/transport/http'
import ws, { EVENT as WS } from '@unaffected/gateway/plugin/transport/ws'

declare module '@unaffected/app' { interface Application { gateway: Gateway } }

export const EVENT = { HTTP, WS } as const

export const plugin: Plugin = {
  id: 'unaffected:gateway:transport' as const,
  install: async (app) => {
    await app.configure(http)
    await app.configure(ws)
  },
}

export const { id, install } = plugin

export { http }

export default plugin
