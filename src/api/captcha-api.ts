/**
 * 验证码api
 */
import { get } from '@/utils/request'

export const captchaApi = {
  /**
   * 获取验证码
   */
  getCaptcha: () => {
    return get('/captcha/get', {})
  },
}
