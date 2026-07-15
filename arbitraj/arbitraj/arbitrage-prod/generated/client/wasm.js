
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  password_hash: 'password_hash',
  role: 'role',
  notification_prefs: 'notification_prefs',
  resetToken: 'resetToken',
  resetTokenExpires: 'resetTokenExpires',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.PartnerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  logo: 'logo',
  link: 'link',
  active: 'active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ItemScalarFieldEnum = {
  id: 'id',
  item_name: 'item_name',
  steam_price: 'steam_price',
  csfloat_price: 'csfloat_price',
  prev_steam_price: 'prev_steam_price',
  prev_csfloat_price: 'prev_csfloat_price',
  volume: 'volume',
  prev_volume: 'prev_volume',
  listing_count: 'listing_count',
  prev_listing_count: 'prev_listing_count',
  opportunity_count: 'opportunity_count',
  competition_score: 'competition_score',
  last_api_timestamp: 'last_api_timestamp',
  fetch_count: 'fetch_count',
  comp_update_count: 'comp_update_count',
  profit_started_at: 'profit_started_at',
  sell_velocity: 'sell_velocity',
  demand_intensity: 'demand_intensity',
  updated_at: 'updated_at'
};

exports.Prisma.ProfitableItemScalarFieldEnum = {
  id: 'id',
  item_name: 'item_name',
  buy_from: 'buy_from',
  sell_to: 'sell_to',
  buy_price: 'buy_price',
  sell_price: 'sell_price',
  net_profit: 'net_profit',
  profit_percent: 'profit_percent',
  liquidity_score: 'liquidity_score',
  intelligence_score: 'intelligence_score',
  saturation_score: 'saturation_score',
  execution_probability: 'execution_probability',
  slippage_risk: 'slippage_risk',
  market_stability: 'market_stability',
  execution_score: 'execution_score',
  status: 'status',
  review_score: 'review_score',
  is_sniper: 'is_sniper',
  created_at: 'created_at'
};

exports.Prisma.OpportunityLockScalarFieldEnum = {
  id: 'id',
  expires_at: 'expires_at',
  created_at: 'created_at'
};

exports.Prisma.SnapshotVersionScalarFieldEnum = {
  id: 'id',
  version: 'version',
  status: 'status',
  updated_at: 'updated_at'
};

exports.Prisma.MarketSnapshotScalarFieldEnum = {
  id: 'id',
  version: 'version',
  partition: 'partition',
  item_name: 'item_name',
  price: 'price',
  platform: 'platform',
  created_at: 'created_at'
};

exports.Prisma.StreamingEventScalarFieldEnum = {
  id: 'id',
  type: 'type',
  partition: 'partition',
  priority: 'priority',
  score: 'score',
  payload: 'payload',
  retry_count: 'retry_count',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.LoadPatternScalarFieldEnum = {
  id: 'id',
  hour: 'hour',
  avg_load: 'avg_load',
  peak_load: 'peak_load',
  updated_at: 'updated_at'
};

exports.Prisma.RetryPerformanceScalarFieldEnum = {
  id: 'id',
  delay_range: 'delay_range',
  success_count: 'success_count',
  failure_count: 'failure_count',
  updated_at: 'updated_at'
};

exports.Prisma.ExecutionRecordScalarFieldEnum = {
  id: 'id',
  idempotency_key: 'idempotency_key',
  item_name: 'item_name',
  buy_price: 'buy_price',
  sell_price: 'sell_price',
  status: 'status',
  tx_hash: 'tx_hash',
  created_at: 'created_at'
};

exports.Prisma.CMSContentScalarFieldEnum = {
  id: 'id',
  key: 'key',
  value: 'value',
  description: 'description',
  updated_at: 'updated_at'
};

exports.Prisma.AnalyticsLogScalarFieldEnum = {
  id: 'id',
  ip: 'ip',
  user_agent: 'user_agent',
  page: 'page',
  timestamp: 'timestamp'
};

exports.Prisma.SessionLogScalarFieldEnum = {
  id: 'id',
  ip: 'ip',
  device_type: 'device_type',
  browser: 'browser',
  start_time: 'start_time'
};

exports.Prisma.SupportTicketScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  message: 'message',
  reply: 'reply',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Account: 'Account',
  Session: 'Session',
  User: 'User',
  VerificationToken: 'VerificationToken',
  Partner: 'Partner',
  Item: 'Item',
  ProfitableItem: 'ProfitableItem',
  OpportunityLock: 'OpportunityLock',
  SnapshotVersion: 'SnapshotVersion',
  MarketSnapshot: 'MarketSnapshot',
  StreamingEvent: 'StreamingEvent',
  LoadPattern: 'LoadPattern',
  RetryPerformance: 'RetryPerformance',
  ExecutionRecord: 'ExecutionRecord',
  CMSContent: 'CMSContent',
  AnalyticsLog: 'AnalyticsLog',
  SessionLog: 'SessionLog',
  SupportTicket: 'SupportTicket'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
