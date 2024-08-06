import channel from '@/database/channel'
// 通过路径直接去获取
export default defineEventHandler(() => {
  return channel
})
