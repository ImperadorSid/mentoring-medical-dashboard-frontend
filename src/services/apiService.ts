import axios from 'axios'
import { env } from '../configs/env'

export const apiService = axios.create({
  baseURL: `${env.apiHost}:${env.apiPort}`,
})
