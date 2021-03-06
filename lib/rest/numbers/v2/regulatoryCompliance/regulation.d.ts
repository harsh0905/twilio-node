/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2 = require('../../V2');
import { SerializableClass } from '../../../../interfaces';

type RegulationEndUserType = 'individual'|'business';

/**
 * Initialize the RegulationList
 *
 * @param version - Version of the resource
 */
declare function RegulationList(version: V2): RegulationListInstance;

interface RegulationListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): RegulationContext;
  /**
   * Streams RegulationInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: RegulationListInstanceEachOptions, callback?: (item: RegulationInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a regulation
   *
   * @param sid - The unique string that identifies the Regulation resource
   */
  get(sid: string): RegulationContext;
  /**
   * Retrieve a single target page of RegulationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: RegulationPage) => any): Promise<RegulationPage>;
  /**
   * Lists RegulationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: RegulationListInstanceOptions, callback?: (error: Error | null, items: RegulationInstance[]) => any): Promise<RegulationInstance[]>;
  /**
   * Retrieve a single page of RegulationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: RegulationListInstancePageOptions, callback?: (error: Error | null, items: RegulationPage) => any): Promise<RegulationPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property endUserType - The type of End User of the Regulation resource
 * @property isoCountry - The ISO country code of the phone number's country
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property numberType - The type of phone number being regulated
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface RegulationListInstanceEachOptions {
  callback?: (item: RegulationInstance, done: (err?: Error) => void) => void;
  done?: Function;
  endUserType?: RegulationEndUserType;
  isoCountry?: string;
  limit?: number;
  numberType?: string;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property endUserType - The type of End User of the Regulation resource
 * @property isoCountry - The ISO country code of the phone number's country
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property numberType - The type of phone number being regulated
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface RegulationListInstanceOptions {
  endUserType?: RegulationEndUserType;
  isoCountry?: string;
  limit?: number;
  numberType?: string;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property endUserType - The type of End User of the Regulation resource
 * @property isoCountry - The ISO country code of the phone number's country
 * @property numberType - The type of phone number being regulated
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface RegulationListInstancePageOptions {
  endUserType?: RegulationEndUserType;
  isoCountry?: string;
  numberType?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface RegulationPayload extends RegulationResource, Page.TwilioResponsePayload {
}

interface RegulationResource {
  end_user_type: RegulationEndUserType;
  friendly_name: string;
  iso_country: string;
  number_type: string;
  requirements: object;
  sid: string;
  url: string;
}

interface RegulationSolution {
}


declare class RegulationContext {
  /**
   * Initialize the RegulationContext
   *
   * @param version - Version of the resource
   * @param sid - The unique string that identifies the Regulation resource
   */
  constructor(version: V2, sid: string);

  /**
   * fetch a RegulationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RegulationInstance) => any): Promise<RegulationInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class RegulationInstance extends SerializableClass {
  /**
   * Initialize the RegulationContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The unique string that identifies the Regulation resource
   */
  constructor(version: V2, payload: RegulationPayload, sid: string);

  private _proxy: RegulationContext;
  endUserType: RegulationEndUserType;
  /**
   * fetch a RegulationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RegulationInstance) => any): Promise<RegulationInstance>;
  friendlyName: string;
  isoCountry: string;
  numberType: string;
  requirements: object;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class RegulationPage extends Page<V2, RegulationPayload, RegulationResource, RegulationInstance> {
  /**
   * Initialize the RegulationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: RegulationSolution);

  /**
   * Build an instance of RegulationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RegulationPayload): RegulationInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { RegulationContext, RegulationEndUserType, RegulationInstance, RegulationList, RegulationListInstance, RegulationListInstanceEachOptions, RegulationListInstanceOptions, RegulationListInstancePageOptions, RegulationPage, RegulationPayload, RegulationResource, RegulationSolution }
