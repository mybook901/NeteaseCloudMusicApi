import { RequestBaseConfig } from './base'

export interface AlbumListStyleRequestConfig extends RequestBaseConfig {
  limit?: number // 默认 10
  offset?: number // 默认 0
  area?: 'Z_H' | 'E_A' | 'KR' | 'JP' // 默认 ALL
}
