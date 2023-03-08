import { BaseAuth } from './base-auth';
export class AuthB2B extends BaseAuth {
      constructor() {
            super();
      }

      entityMapper() {
            return {
                  model : "B2B",
                  product_name : "PureDome"
            };
      }

      printToken() {
            return this.getToken();
      }
};