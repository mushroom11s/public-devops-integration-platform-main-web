import request from '@/utils/request'
// menu detail
export function getMenuDetails() {
  return request({
    url: 'http://localhost:8022/menu.json',
    method: 'get',
  })
}
