import request from '@/config/axios'
import type { Dayjs } from 'dayjs';

/** demo联系人信息 */
export interface Contact {
          id: number; // 编号
          name?: string; // 名字
          sex?: number; // 性别
          birthday?: string | Dayjs; // 出生年
          description?: string; // 简介
          avatar: string; // 头像
          ext: string; // 扩展信息
  }

// demo联系人 API
export const ContactApi = {
  // 查询demo联系人分页
  getContactPage: async (params: any) => {
    return await request.get({ url: `/demo/contact/page`, params })
  },

  // 查询demo联系人详情
  getContact: async (id: number) => {
    return await request.get({ url: `/demo/contact/get?id=` + id })
  },

  // 新增demo联系人
  createContact: async (data: Contact) => {
    return await request.post({ url: `/demo/contact/create`, data })
  },

  // 修改demo联系人
  updateContact: async (data: Contact) => {
    return await request.put({ url: `/demo/contact/update`, data })
  },

  // 删除demo联系人
  deleteContact: async (id: number) => {
    return await request.delete({ url: `/demo/contact/delete?id=` + id })
  },

  /** 批量删除demo联系人 */
  deleteContactList: async (ids: number[]) => {
    return await request.delete({ url: `/demo/contact/delete-list?ids=${ids.join(',')}` })
  },

  // 导出demo联系人 Excel
  exportContact: async (params) => {
    return await request.download({ url: `/demo/contact/export-excel`, params })
  }
}