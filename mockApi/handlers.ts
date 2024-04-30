import { http, HttpResponse } from 'msw';
import { mockData } from './mockData';
export const handlers = [
  http.get(`https://api.github.com/repos/ViktorAfk/test-issues/issues?state=all`, () => {
    return HttpResponse.json(mockData)
  })
]