import { HttpStatus } from '@nestjs/common';
import axios from 'axios';
import '../custom.env';

/**
 * This is used to serialize object to query strings
 * @param obj
 */
export const serialize = (obj) => {
  const keys = Object.keys(obj);
  if (!keys.length) {
    return '';
  }
  return '?' + (keys.reduce((a, k) => {
    a.push(k + '=' + encodeURIComponent(obj[k]));
    return a;
  }, []).join('&'));
};


/***
 * This is the route strategy to be used to route api calls to their respective micro service
 * while logging the request and response as at complete cycle.
 * @param req
 */
export const routeStrategy = async (req) => {
  const { query, body, headers, originalUrl, method } = req;
  // using service_01 as default baseUrl to one of the microservice system to enable testing.
  // this should have been an exception thrown or bad request if `serviceId` is not present in header request.
  const baseUrl = process.env[headers.serviceId || 'SERVICE_01'];
  console.log({ method, baseUrl });
  const url = baseUrl + originalUrl + serialize(query);
  const statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
  try {
    const config = { headers };
    let res;
    switch (method.toUpperCase()) {
      case 'POST':
        res = await axios.post(url, body || {}, config);
        break;
      case 'PUT':
        res = await axios.put(url, body || {}, config);
        break;
      case 'PATCH':
        return await axios.patch(url, body || {}, config);
      case 'DELETE':
        res = (await axios.delete(url, config));
        break;
      case 'GET':
        res = (await axios.get(url, config));
        break;
      default:
        return { statusCode, message: 'UNKNOWN METHOD', data: null };
    }
    return {data: res.data, statusCode: res.status || res.statusCode, message: res.message };
  } catch (e) {
    return { statusCode, message: e.message, data: null };
  }
};
