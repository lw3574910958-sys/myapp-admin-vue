/**
 * 文件上传
 */
import { post } from '@/utils/request'

export const uploadFileApi = {
  /**
   * 上传文件
   * @param param 请求参数
   * @return 请求结果
   */
  uploadFile: (param: any) => {
    return post('/upload/file', param)
  },
}
