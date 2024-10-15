import axios from 'axios'

import { requests } from './request'

export const uploadFileToS3 = async (file: any, fileObj: any): Promise<any> => {
  return axios
    .post(`${requests.documentPreSigned}`, fileObj)
    .then((response) => {
      return response?.data?.data
    })
    .then((result) => {
      const headers = {
        'Content-Type': fileObj?.mimeType,
      }

      return axios
        .put(`${result?.presignedUrl}`, file, { headers })
        .then((res) => {
          fileObj = { ...fileObj, fileName: result?.fileName }
          return fileObj
        })
        .then((res2) => {
          return axios
            .post(`${requests.documentPostSigned}`, fileObj)
            .then((res3) => {
              const fileRes = res3?.data ? res3?.data?.data : {}
              return fileRes?.id
            })
            .catch((err) => {
              // toast.error('Please try again! Image not ulpoaded')
              console.warn(err)
              return false
            })
        })
        .catch((err) => {
          // toast.error('Please try again! Image not ulpoaded')
          console.warn(err)
          return false
        })
    })
    .catch((err) => {
      // toast.error('Please try again! Image not ulpoaded')
      console.warn(err)
      return false
    })
}
