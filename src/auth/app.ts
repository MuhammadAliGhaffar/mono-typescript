import { AuthB2B } from './auth-b2b';
import { AuthB2C } from './auth-b2c';
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


const b2c = new AuthB2C();
const b2b = new AuthB2B();

function test() {
      if (process.env.BUISNESS_MODEL === "B2B") {
            console.log("B2B Entity Mapper ->" + b2b.entityMapper().model);
            console.log("B2B Token ->" + b2b.getToken());
      } else if (process.env.BUISNESS_MODEL === "B2C") {
            console.log("B2C Data Mapper ->" + b2c.dataMapper().model);
            console.log("B2C Token ->" + b2c.getToken());
      }
}

test();