import { BaseAuth } from './base-auth';
export class AuthB2C extends BaseAuth {
      constructor() {
            super();
      }

      dataMapper() {
            return {
                  model: "B2C",
                  product_name: "PureVPN"
            };
      }

      printToken() {
            return this.getToken();
      }
};


