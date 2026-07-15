
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Partner
 * 
 */
export type Partner = $Result.DefaultSelection<Prisma.$PartnerPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model ProfitableItem
 * 
 */
export type ProfitableItem = $Result.DefaultSelection<Prisma.$ProfitableItemPayload>
/**
 * Model OpportunityLock
 * 
 */
export type OpportunityLock = $Result.DefaultSelection<Prisma.$OpportunityLockPayload>
/**
 * Model SnapshotVersion
 * 
 */
export type SnapshotVersion = $Result.DefaultSelection<Prisma.$SnapshotVersionPayload>
/**
 * Model MarketSnapshot
 * 
 */
export type MarketSnapshot = $Result.DefaultSelection<Prisma.$MarketSnapshotPayload>
/**
 * Model StreamingEvent
 * 
 */
export type StreamingEvent = $Result.DefaultSelection<Prisma.$StreamingEventPayload>
/**
 * Model LoadPattern
 * 
 */
export type LoadPattern = $Result.DefaultSelection<Prisma.$LoadPatternPayload>
/**
 * Model RetryPerformance
 * 
 */
export type RetryPerformance = $Result.DefaultSelection<Prisma.$RetryPerformancePayload>
/**
 * Model ExecutionRecord
 * 
 */
export type ExecutionRecord = $Result.DefaultSelection<Prisma.$ExecutionRecordPayload>
/**
 * Model CMSContent
 * 
 */
export type CMSContent = $Result.DefaultSelection<Prisma.$CMSContentPayload>
/**
 * Model AnalyticsLog
 * 
 */
export type AnalyticsLog = $Result.DefaultSelection<Prisma.$AnalyticsLogPayload>
/**
 * Model SessionLog
 * 
 */
export type SessionLog = $Result.DefaultSelection<Prisma.$SessionLogPayload>
/**
 * Model SupportTicket
 * 
 */
export type SupportTicket = $Result.DefaultSelection<Prisma.$SupportTicketPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.partner`: Exposes CRUD operations for the **Partner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partners
    * const partners = await prisma.partner.findMany()
    * ```
    */
  get partner(): Prisma.PartnerDelegate<ExtArgs>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs>;

  /**
   * `prisma.profitableItem`: Exposes CRUD operations for the **ProfitableItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfitableItems
    * const profitableItems = await prisma.profitableItem.findMany()
    * ```
    */
  get profitableItem(): Prisma.ProfitableItemDelegate<ExtArgs>;

  /**
   * `prisma.opportunityLock`: Exposes CRUD operations for the **OpportunityLock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpportunityLocks
    * const opportunityLocks = await prisma.opportunityLock.findMany()
    * ```
    */
  get opportunityLock(): Prisma.OpportunityLockDelegate<ExtArgs>;

  /**
   * `prisma.snapshotVersion`: Exposes CRUD operations for the **SnapshotVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SnapshotVersions
    * const snapshotVersions = await prisma.snapshotVersion.findMany()
    * ```
    */
  get snapshotVersion(): Prisma.SnapshotVersionDelegate<ExtArgs>;

  /**
   * `prisma.marketSnapshot`: Exposes CRUD operations for the **MarketSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketSnapshots
    * const marketSnapshots = await prisma.marketSnapshot.findMany()
    * ```
    */
  get marketSnapshot(): Prisma.MarketSnapshotDelegate<ExtArgs>;

  /**
   * `prisma.streamingEvent`: Exposes CRUD operations for the **StreamingEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StreamingEvents
    * const streamingEvents = await prisma.streamingEvent.findMany()
    * ```
    */
  get streamingEvent(): Prisma.StreamingEventDelegate<ExtArgs>;

  /**
   * `prisma.loadPattern`: Exposes CRUD operations for the **LoadPattern** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoadPatterns
    * const loadPatterns = await prisma.loadPattern.findMany()
    * ```
    */
  get loadPattern(): Prisma.LoadPatternDelegate<ExtArgs>;

  /**
   * `prisma.retryPerformance`: Exposes CRUD operations for the **RetryPerformance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RetryPerformances
    * const retryPerformances = await prisma.retryPerformance.findMany()
    * ```
    */
  get retryPerformance(): Prisma.RetryPerformanceDelegate<ExtArgs>;

  /**
   * `prisma.executionRecord`: Exposes CRUD operations for the **ExecutionRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExecutionRecords
    * const executionRecords = await prisma.executionRecord.findMany()
    * ```
    */
  get executionRecord(): Prisma.ExecutionRecordDelegate<ExtArgs>;

  /**
   * `prisma.cMSContent`: Exposes CRUD operations for the **CMSContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CMSContents
    * const cMSContents = await prisma.cMSContent.findMany()
    * ```
    */
  get cMSContent(): Prisma.CMSContentDelegate<ExtArgs>;

  /**
   * `prisma.analyticsLog`: Exposes CRUD operations for the **AnalyticsLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalyticsLogs
    * const analyticsLogs = await prisma.analyticsLog.findMany()
    * ```
    */
  get analyticsLog(): Prisma.AnalyticsLogDelegate<ExtArgs>;

  /**
   * `prisma.sessionLog`: Exposes CRUD operations for the **SessionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionLogs
    * const sessionLogs = await prisma.sessionLog.findMany()
    * ```
    */
  get sessionLog(): Prisma.SessionLogDelegate<ExtArgs>;

  /**
   * `prisma.supportTicket`: Exposes CRUD operations for the **SupportTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupportTickets
    * const supportTickets = await prisma.supportTicket.findMany()
    * ```
    */
  get supportTicket(): Prisma.SupportTicketDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "account" | "session" | "user" | "verificationToken" | "partner" | "item" | "profitableItem" | "opportunityLock" | "snapshotVersion" | "marketSnapshot" | "streamingEvent" | "loadPattern" | "retryPerformance" | "executionRecord" | "cMSContent" | "analyticsLog" | "sessionLog" | "supportTicket"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Partner: {
        payload: Prisma.$PartnerPayload<ExtArgs>
        fields: Prisma.PartnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          findFirst: {
            args: Prisma.PartnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          findMany: {
            args: Prisma.PartnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          create: {
            args: Prisma.PartnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          createMany: {
            args: Prisma.PartnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          delete: {
            args: Prisma.PartnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          update: {
            args: Prisma.PartnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          deleteMany: {
            args: Prisma.PartnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          aggregate: {
            args: Prisma.PartnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartner>
          }
          groupBy: {
            args: Prisma.PartnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      ProfitableItem: {
        payload: Prisma.$ProfitableItemPayload<ExtArgs>
        fields: Prisma.ProfitableItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfitableItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitableItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfitableItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitableItemPayload>
          }
          findFirst: {
            args: Prisma.ProfitableItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitableItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfitableItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitableItemPayload>
          }
          findMany: {
            args: Prisma.ProfitableItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitableItemPayload>[]
          }
          create: {
            args: Prisma.ProfitableItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitableItemPayload>
          }
          createMany: {
            args: Prisma.ProfitableItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfitableItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitableItemPayload>[]
          }
          delete: {
            args: Prisma.ProfitableItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitableItemPayload>
          }
          update: {
            args: Prisma.ProfitableItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitableItemPayload>
          }
          deleteMany: {
            args: Prisma.ProfitableItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfitableItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfitableItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitableItemPayload>
          }
          aggregate: {
            args: Prisma.ProfitableItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfitableItem>
          }
          groupBy: {
            args: Prisma.ProfitableItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfitableItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfitableItemCountArgs<ExtArgs>
            result: $Utils.Optional<ProfitableItemCountAggregateOutputType> | number
          }
        }
      }
      OpportunityLock: {
        payload: Prisma.$OpportunityLockPayload<ExtArgs>
        fields: Prisma.OpportunityLockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpportunityLockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityLockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpportunityLockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityLockPayload>
          }
          findFirst: {
            args: Prisma.OpportunityLockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityLockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpportunityLockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityLockPayload>
          }
          findMany: {
            args: Prisma.OpportunityLockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityLockPayload>[]
          }
          create: {
            args: Prisma.OpportunityLockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityLockPayload>
          }
          createMany: {
            args: Prisma.OpportunityLockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpportunityLockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityLockPayload>[]
          }
          delete: {
            args: Prisma.OpportunityLockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityLockPayload>
          }
          update: {
            args: Prisma.OpportunityLockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityLockPayload>
          }
          deleteMany: {
            args: Prisma.OpportunityLockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpportunityLockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OpportunityLockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityLockPayload>
          }
          aggregate: {
            args: Prisma.OpportunityLockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpportunityLock>
          }
          groupBy: {
            args: Prisma.OpportunityLockGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpportunityLockGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpportunityLockCountArgs<ExtArgs>
            result: $Utils.Optional<OpportunityLockCountAggregateOutputType> | number
          }
        }
      }
      SnapshotVersion: {
        payload: Prisma.$SnapshotVersionPayload<ExtArgs>
        fields: Prisma.SnapshotVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SnapshotVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SnapshotVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotVersionPayload>
          }
          findFirst: {
            args: Prisma.SnapshotVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SnapshotVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotVersionPayload>
          }
          findMany: {
            args: Prisma.SnapshotVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotVersionPayload>[]
          }
          create: {
            args: Prisma.SnapshotVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotVersionPayload>
          }
          createMany: {
            args: Prisma.SnapshotVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SnapshotVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotVersionPayload>[]
          }
          delete: {
            args: Prisma.SnapshotVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotVersionPayload>
          }
          update: {
            args: Prisma.SnapshotVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotVersionPayload>
          }
          deleteMany: {
            args: Prisma.SnapshotVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SnapshotVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SnapshotVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotVersionPayload>
          }
          aggregate: {
            args: Prisma.SnapshotVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSnapshotVersion>
          }
          groupBy: {
            args: Prisma.SnapshotVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SnapshotVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SnapshotVersionCountArgs<ExtArgs>
            result: $Utils.Optional<SnapshotVersionCountAggregateOutputType> | number
          }
        }
      }
      MarketSnapshot: {
        payload: Prisma.$MarketSnapshotPayload<ExtArgs>
        fields: Prisma.MarketSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>
          }
          findFirst: {
            args: Prisma.MarketSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>
          }
          findMany: {
            args: Prisma.MarketSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>[]
          }
          create: {
            args: Prisma.MarketSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>
          }
          createMany: {
            args: Prisma.MarketSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>[]
          }
          delete: {
            args: Prisma.MarketSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>
          }
          update: {
            args: Prisma.MarketSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.MarketSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MarketSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>
          }
          aggregate: {
            args: Prisma.MarketSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketSnapshot>
          }
          groupBy: {
            args: Prisma.MarketSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<MarketSnapshotCountAggregateOutputType> | number
          }
        }
      }
      StreamingEvent: {
        payload: Prisma.$StreamingEventPayload<ExtArgs>
        fields: Prisma.StreamingEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamingEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamingEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingEventPayload>
          }
          findFirst: {
            args: Prisma.StreamingEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamingEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingEventPayload>
          }
          findMany: {
            args: Prisma.StreamingEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingEventPayload>[]
          }
          create: {
            args: Prisma.StreamingEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingEventPayload>
          }
          createMany: {
            args: Prisma.StreamingEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamingEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingEventPayload>[]
          }
          delete: {
            args: Prisma.StreamingEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingEventPayload>
          }
          update: {
            args: Prisma.StreamingEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingEventPayload>
          }
          deleteMany: {
            args: Prisma.StreamingEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamingEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StreamingEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingEventPayload>
          }
          aggregate: {
            args: Prisma.StreamingEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreamingEvent>
          }
          groupBy: {
            args: Prisma.StreamingEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamingEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamingEventCountArgs<ExtArgs>
            result: $Utils.Optional<StreamingEventCountAggregateOutputType> | number
          }
        }
      }
      LoadPattern: {
        payload: Prisma.$LoadPatternPayload<ExtArgs>
        fields: Prisma.LoadPatternFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoadPatternFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoadPatternPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoadPatternFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoadPatternPayload>
          }
          findFirst: {
            args: Prisma.LoadPatternFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoadPatternPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoadPatternFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoadPatternPayload>
          }
          findMany: {
            args: Prisma.LoadPatternFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoadPatternPayload>[]
          }
          create: {
            args: Prisma.LoadPatternCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoadPatternPayload>
          }
          createMany: {
            args: Prisma.LoadPatternCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoadPatternCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoadPatternPayload>[]
          }
          delete: {
            args: Prisma.LoadPatternDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoadPatternPayload>
          }
          update: {
            args: Prisma.LoadPatternUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoadPatternPayload>
          }
          deleteMany: {
            args: Prisma.LoadPatternDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoadPatternUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoadPatternUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoadPatternPayload>
          }
          aggregate: {
            args: Prisma.LoadPatternAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoadPattern>
          }
          groupBy: {
            args: Prisma.LoadPatternGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoadPatternGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoadPatternCountArgs<ExtArgs>
            result: $Utils.Optional<LoadPatternCountAggregateOutputType> | number
          }
        }
      }
      RetryPerformance: {
        payload: Prisma.$RetryPerformancePayload<ExtArgs>
        fields: Prisma.RetryPerformanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RetryPerformanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryPerformancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RetryPerformanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryPerformancePayload>
          }
          findFirst: {
            args: Prisma.RetryPerformanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryPerformancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RetryPerformanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryPerformancePayload>
          }
          findMany: {
            args: Prisma.RetryPerformanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryPerformancePayload>[]
          }
          create: {
            args: Prisma.RetryPerformanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryPerformancePayload>
          }
          createMany: {
            args: Prisma.RetryPerformanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RetryPerformanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryPerformancePayload>[]
          }
          delete: {
            args: Prisma.RetryPerformanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryPerformancePayload>
          }
          update: {
            args: Prisma.RetryPerformanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryPerformancePayload>
          }
          deleteMany: {
            args: Prisma.RetryPerformanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RetryPerformanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RetryPerformanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryPerformancePayload>
          }
          aggregate: {
            args: Prisma.RetryPerformanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRetryPerformance>
          }
          groupBy: {
            args: Prisma.RetryPerformanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RetryPerformanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RetryPerformanceCountArgs<ExtArgs>
            result: $Utils.Optional<RetryPerformanceCountAggregateOutputType> | number
          }
        }
      }
      ExecutionRecord: {
        payload: Prisma.$ExecutionRecordPayload<ExtArgs>
        fields: Prisma.ExecutionRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRecordPayload>
          }
          findFirst: {
            args: Prisma.ExecutionRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRecordPayload>
          }
          findMany: {
            args: Prisma.ExecutionRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRecordPayload>[]
          }
          create: {
            args: Prisma.ExecutionRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRecordPayload>
          }
          createMany: {
            args: Prisma.ExecutionRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutionRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRecordPayload>[]
          }
          delete: {
            args: Prisma.ExecutionRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRecordPayload>
          }
          update: {
            args: Prisma.ExecutionRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRecordPayload>
          }
          deleteMany: {
            args: Prisma.ExecutionRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExecutionRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRecordPayload>
          }
          aggregate: {
            args: Prisma.ExecutionRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutionRecord>
          }
          groupBy: {
            args: Prisma.ExecutionRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionRecordCountAggregateOutputType> | number
          }
        }
      }
      CMSContent: {
        payload: Prisma.$CMSContentPayload<ExtArgs>
        fields: Prisma.CMSContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CMSContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CMSContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CMSContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CMSContentPayload>
          }
          findFirst: {
            args: Prisma.CMSContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CMSContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CMSContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CMSContentPayload>
          }
          findMany: {
            args: Prisma.CMSContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CMSContentPayload>[]
          }
          create: {
            args: Prisma.CMSContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CMSContentPayload>
          }
          createMany: {
            args: Prisma.CMSContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CMSContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CMSContentPayload>[]
          }
          delete: {
            args: Prisma.CMSContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CMSContentPayload>
          }
          update: {
            args: Prisma.CMSContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CMSContentPayload>
          }
          deleteMany: {
            args: Prisma.CMSContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CMSContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CMSContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CMSContentPayload>
          }
          aggregate: {
            args: Prisma.CMSContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCMSContent>
          }
          groupBy: {
            args: Prisma.CMSContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CMSContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CMSContentCountArgs<ExtArgs>
            result: $Utils.Optional<CMSContentCountAggregateOutputType> | number
          }
        }
      }
      AnalyticsLog: {
        payload: Prisma.$AnalyticsLogPayload<ExtArgs>
        fields: Prisma.AnalyticsLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsLogPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsLogPayload>
          }
          findMany: {
            args: Prisma.AnalyticsLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsLogPayload>[]
          }
          create: {
            args: Prisma.AnalyticsLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsLogPayload>
          }
          createMany: {
            args: Prisma.AnalyticsLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsLogPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsLogPayload>
          }
          update: {
            args: Prisma.AnalyticsLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsLogPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnalyticsLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsLogPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalyticsLog>
          }
          groupBy: {
            args: Prisma.AnalyticsLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsLogCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsLogCountAggregateOutputType> | number
          }
        }
      }
      SessionLog: {
        payload: Prisma.$SessionLogPayload<ExtArgs>
        fields: Prisma.SessionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>
          }
          findFirst: {
            args: Prisma.SessionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>
          }
          findMany: {
            args: Prisma.SessionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>[]
          }
          create: {
            args: Prisma.SessionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>
          }
          createMany: {
            args: Prisma.SessionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>[]
          }
          delete: {
            args: Prisma.SessionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>
          }
          update: {
            args: Prisma.SessionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>
          }
          deleteMany: {
            args: Prisma.SessionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionLogPayload>
          }
          aggregate: {
            args: Prisma.SessionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionLog>
          }
          groupBy: {
            args: Prisma.SessionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionLogCountArgs<ExtArgs>
            result: $Utils.Optional<SessionLogCountAggregateOutputType> | number
          }
        }
      }
      SupportTicket: {
        payload: Prisma.$SupportTicketPayload<ExtArgs>
        fields: Prisma.SupportTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          findFirst: {
            args: Prisma.SupportTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          findMany: {
            args: Prisma.SupportTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>[]
          }
          create: {
            args: Prisma.SupportTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          createMany: {
            args: Prisma.SupportTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupportTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>[]
          }
          delete: {
            args: Prisma.SupportTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          update: {
            args: Prisma.SupportTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          deleteMany: {
            args: Prisma.SupportTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupportTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          aggregate: {
            args: Prisma.SupportTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupportTicket>
          }
          groupBy: {
            args: Prisma.SupportTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportTicketCountArgs<ExtArgs>
            result: $Utils.Optional<SupportTicketCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password_hash: string | null
    role: string | null
    notification_prefs: string | null
    resetToken: string | null
    resetTokenExpires: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password_hash: string | null
    role: string | null
    notification_prefs: string | null
    resetToken: string | null
    resetTokenExpires: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password_hash: number
    role: number
    notification_prefs: number
    resetToken: number
    resetTokenExpires: number
    status: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password_hash?: true
    role?: true
    notification_prefs?: true
    resetToken?: true
    resetTokenExpires?: true
    status?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password_hash?: true
    role?: true
    notification_prefs?: true
    resetToken?: true
    resetTokenExpires?: true
    status?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password_hash?: true
    role?: true
    notification_prefs?: true
    resetToken?: true
    resetTokenExpires?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password_hash: string | null
    role: string
    notification_prefs: string | null
    resetToken: string | null
    resetTokenExpires: Date | null
    status: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password_hash?: boolean
    role?: boolean
    notification_prefs?: boolean
    resetToken?: boolean
    resetTokenExpires?: boolean
    status?: boolean
    createdAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password_hash?: boolean
    role?: boolean
    notification_prefs?: boolean
    resetToken?: boolean
    resetTokenExpires?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password_hash?: boolean
    role?: boolean
    notification_prefs?: boolean
    resetToken?: boolean
    resetTokenExpires?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      password_hash: string | null
      role: string
      notification_prefs: string | null
      resetToken: string | null
      resetTokenExpires: Date | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly notification_prefs: FieldRef<"User", 'String'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpires: FieldRef<"User", 'DateTime'>
    readonly status: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({ 
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }


  /**
   * Model Partner
   */

  export type AggregatePartner = {
    _count: PartnerCountAggregateOutputType | null
    _min: PartnerMinAggregateOutputType | null
    _max: PartnerMaxAggregateOutputType | null
  }

  export type PartnerMinAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    link: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PartnerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    link: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PartnerCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    link: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PartnerMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    link?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type PartnerMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    link?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type PartnerCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    link?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PartnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partner to aggregate.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partners
    **/
    _count?: true | PartnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerMaxAggregateInputType
  }

  export type GetPartnerAggregateType<T extends PartnerAggregateArgs> = {
        [P in keyof T & keyof AggregatePartner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartner[P]>
      : GetScalarType<T[P], AggregatePartner[P]>
  }




  export type PartnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerWhereInput
    orderBy?: PartnerOrderByWithAggregationInput | PartnerOrderByWithAggregationInput[]
    by: PartnerScalarFieldEnum[] | PartnerScalarFieldEnum
    having?: PartnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerCountAggregateInputType | true
    _min?: PartnerMinAggregateInputType
    _max?: PartnerMaxAggregateInputType
  }

  export type PartnerGroupByOutputType = {
    id: string
    name: string
    logo: string
    link: string
    active: boolean
    created_at: Date
    updated_at: Date
    _count: PartnerCountAggregateOutputType | null
    _min: PartnerMinAggregateOutputType | null
    _max: PartnerMaxAggregateOutputType | null
  }

  type GetPartnerGroupByPayload<T extends PartnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerGroupByOutputType[P]>
        }
      >
    >


  export type PartnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    link?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    link?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
    link?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $PartnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      logo: string
      link: string
      active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["partner"]>
    composites: {}
  }

  type PartnerGetPayload<S extends boolean | null | undefined | PartnerDefaultArgs> = $Result.GetResult<Prisma.$PartnerPayload, S>

  type PartnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PartnerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PartnerCountAggregateInputType | true
    }

  export interface PartnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partner'], meta: { name: 'Partner' } }
    /**
     * Find zero or one Partner that matches the filter.
     * @param {PartnerFindUniqueArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerFindUniqueArgs>(args: SelectSubset<T, PartnerFindUniqueArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Partner that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PartnerFindUniqueOrThrowArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Partner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindFirstArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerFindFirstArgs>(args?: SelectSubset<T, PartnerFindFirstArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Partner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindFirstOrThrowArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partners
     * const partners = await prisma.partner.findMany()
     * 
     * // Get first 10 Partners
     * const partners = await prisma.partner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerWithIdOnly = await prisma.partner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnerFindManyArgs>(args?: SelectSubset<T, PartnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Partner.
     * @param {PartnerCreateArgs} args - Arguments to create a Partner.
     * @example
     * // Create one Partner
     * const Partner = await prisma.partner.create({
     *   data: {
     *     // ... data to create a Partner
     *   }
     * })
     * 
     */
    create<T extends PartnerCreateArgs>(args: SelectSubset<T, PartnerCreateArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Partners.
     * @param {PartnerCreateManyArgs} args - Arguments to create many Partners.
     * @example
     * // Create many Partners
     * const partner = await prisma.partner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerCreateManyArgs>(args?: SelectSubset<T, PartnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Partners and returns the data saved in the database.
     * @param {PartnerCreateManyAndReturnArgs} args - Arguments to create many Partners.
     * @example
     * // Create many Partners
     * const partner = await prisma.partner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Partners and only return the `id`
     * const partnerWithIdOnly = await prisma.partner.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartnerCreateManyAndReturnArgs>(args?: SelectSubset<T, PartnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Partner.
     * @param {PartnerDeleteArgs} args - Arguments to delete one Partner.
     * @example
     * // Delete one Partner
     * const Partner = await prisma.partner.delete({
     *   where: {
     *     // ... filter to delete one Partner
     *   }
     * })
     * 
     */
    delete<T extends PartnerDeleteArgs>(args: SelectSubset<T, PartnerDeleteArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Partner.
     * @param {PartnerUpdateArgs} args - Arguments to update one Partner.
     * @example
     * // Update one Partner
     * const partner = await prisma.partner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerUpdateArgs>(args: SelectSubset<T, PartnerUpdateArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Partners.
     * @param {PartnerDeleteManyArgs} args - Arguments to filter Partners to delete.
     * @example
     * // Delete a few Partners
     * const { count } = await prisma.partner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerDeleteManyArgs>(args?: SelectSubset<T, PartnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partners
     * const partner = await prisma.partner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerUpdateManyArgs>(args: SelectSubset<T, PartnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Partner.
     * @param {PartnerUpsertArgs} args - Arguments to update or create a Partner.
     * @example
     * // Update or create a Partner
     * const partner = await prisma.partner.upsert({
     *   create: {
     *     // ... data to create a Partner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partner we want to update
     *   }
     * })
     */
    upsert<T extends PartnerUpsertArgs>(args: SelectSubset<T, PartnerUpsertArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerCountArgs} args - Arguments to filter Partners to count.
     * @example
     * // Count the number of Partners
     * const count = await prisma.partner.count({
     *   where: {
     *     // ... the filter for the Partners we want to count
     *   }
     * })
    **/
    count<T extends PartnerCountArgs>(
      args?: Subset<T, PartnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnerAggregateArgs>(args: Subset<T, PartnerAggregateArgs>): Prisma.PrismaPromise<GetPartnerAggregateType<T>>

    /**
     * Group by Partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerGroupByArgs['orderBy'] }
        : { orderBy?: PartnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partner model
   */
  readonly fields: PartnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Partner model
   */ 
  interface PartnerFieldRefs {
    readonly id: FieldRef<"Partner", 'String'>
    readonly name: FieldRef<"Partner", 'String'>
    readonly logo: FieldRef<"Partner", 'String'>
    readonly link: FieldRef<"Partner", 'String'>
    readonly active: FieldRef<"Partner", 'Boolean'>
    readonly created_at: FieldRef<"Partner", 'DateTime'>
    readonly updated_at: FieldRef<"Partner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Partner findUnique
   */
  export type PartnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner findUniqueOrThrow
   */
  export type PartnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner findFirst
   */
  export type PartnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner findFirstOrThrow
   */
  export type PartnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner findMany
   */
  export type PartnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Filter, which Partners to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner create
   */
  export type PartnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * The data needed to create a Partner.
     */
    data: XOR<PartnerCreateInput, PartnerUncheckedCreateInput>
  }

  /**
   * Partner createMany
   */
  export type PartnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partners.
     */
    data: PartnerCreateManyInput | PartnerCreateManyInput[]
  }

  /**
   * Partner createManyAndReturn
   */
  export type PartnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Partners.
     */
    data: PartnerCreateManyInput | PartnerCreateManyInput[]
  }

  /**
   * Partner update
   */
  export type PartnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * The data needed to update a Partner.
     */
    data: XOR<PartnerUpdateInput, PartnerUncheckedUpdateInput>
    /**
     * Choose, which Partner to update.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner updateMany
   */
  export type PartnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partners.
     */
    data: XOR<PartnerUpdateManyMutationInput, PartnerUncheckedUpdateManyInput>
    /**
     * Filter which Partners to update
     */
    where?: PartnerWhereInput
  }

  /**
   * Partner upsert
   */
  export type PartnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * The filter to search for the Partner to update in case it exists.
     */
    where: PartnerWhereUniqueInput
    /**
     * In case the Partner found by the `where` argument doesn't exist, create a new Partner with this data.
     */
    create: XOR<PartnerCreateInput, PartnerUncheckedCreateInput>
    /**
     * In case the Partner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerUpdateInput, PartnerUncheckedUpdateInput>
  }

  /**
   * Partner delete
   */
  export type PartnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Filter which Partner to delete.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner deleteMany
   */
  export type PartnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partners to delete
     */
    where?: PartnerWhereInput
  }

  /**
   * Partner without action
   */
  export type PartnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    steam_price: number | null
    csfloat_price: number | null
    prev_steam_price: number | null
    prev_csfloat_price: number | null
    volume: number | null
    prev_volume: number | null
    listing_count: number | null
    prev_listing_count: number | null
    opportunity_count: number | null
    competition_score: number | null
    fetch_count: number | null
    comp_update_count: number | null
    sell_velocity: number | null
    demand_intensity: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    steam_price: number | null
    csfloat_price: number | null
    prev_steam_price: number | null
    prev_csfloat_price: number | null
    volume: number | null
    prev_volume: number | null
    listing_count: number | null
    prev_listing_count: number | null
    opportunity_count: number | null
    competition_score: number | null
    fetch_count: number | null
    comp_update_count: number | null
    sell_velocity: number | null
    demand_intensity: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    item_name: string | null
    steam_price: number | null
    csfloat_price: number | null
    prev_steam_price: number | null
    prev_csfloat_price: number | null
    volume: number | null
    prev_volume: number | null
    listing_count: number | null
    prev_listing_count: number | null
    opportunity_count: number | null
    competition_score: number | null
    last_api_timestamp: Date | null
    fetch_count: number | null
    comp_update_count: number | null
    profit_started_at: Date | null
    sell_velocity: number | null
    demand_intensity: number | null
    updated_at: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    item_name: string | null
    steam_price: number | null
    csfloat_price: number | null
    prev_steam_price: number | null
    prev_csfloat_price: number | null
    volume: number | null
    prev_volume: number | null
    listing_count: number | null
    prev_listing_count: number | null
    opportunity_count: number | null
    competition_score: number | null
    last_api_timestamp: Date | null
    fetch_count: number | null
    comp_update_count: number | null
    profit_started_at: Date | null
    sell_velocity: number | null
    demand_intensity: number | null
    updated_at: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    item_name: number
    steam_price: number
    csfloat_price: number
    prev_steam_price: number
    prev_csfloat_price: number
    volume: number
    prev_volume: number
    listing_count: number
    prev_listing_count: number
    opportunity_count: number
    competition_score: number
    last_api_timestamp: number
    fetch_count: number
    comp_update_count: number
    profit_started_at: number
    sell_velocity: number
    demand_intensity: number
    updated_at: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    steam_price?: true
    csfloat_price?: true
    prev_steam_price?: true
    prev_csfloat_price?: true
    volume?: true
    prev_volume?: true
    listing_count?: true
    prev_listing_count?: true
    opportunity_count?: true
    competition_score?: true
    fetch_count?: true
    comp_update_count?: true
    sell_velocity?: true
    demand_intensity?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    steam_price?: true
    csfloat_price?: true
    prev_steam_price?: true
    prev_csfloat_price?: true
    volume?: true
    prev_volume?: true
    listing_count?: true
    prev_listing_count?: true
    opportunity_count?: true
    competition_score?: true
    fetch_count?: true
    comp_update_count?: true
    sell_velocity?: true
    demand_intensity?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    item_name?: true
    steam_price?: true
    csfloat_price?: true
    prev_steam_price?: true
    prev_csfloat_price?: true
    volume?: true
    prev_volume?: true
    listing_count?: true
    prev_listing_count?: true
    opportunity_count?: true
    competition_score?: true
    last_api_timestamp?: true
    fetch_count?: true
    comp_update_count?: true
    profit_started_at?: true
    sell_velocity?: true
    demand_intensity?: true
    updated_at?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    item_name?: true
    steam_price?: true
    csfloat_price?: true
    prev_steam_price?: true
    prev_csfloat_price?: true
    volume?: true
    prev_volume?: true
    listing_count?: true
    prev_listing_count?: true
    opportunity_count?: true
    competition_score?: true
    last_api_timestamp?: true
    fetch_count?: true
    comp_update_count?: true
    profit_started_at?: true
    sell_velocity?: true
    demand_intensity?: true
    updated_at?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    item_name?: true
    steam_price?: true
    csfloat_price?: true
    prev_steam_price?: true
    prev_csfloat_price?: true
    volume?: true
    prev_volume?: true
    listing_count?: true
    prev_listing_count?: true
    opportunity_count?: true
    competition_score?: true
    last_api_timestamp?: true
    fetch_count?: true
    comp_update_count?: true
    profit_started_at?: true
    sell_velocity?: true
    demand_intensity?: true
    updated_at?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    item_name: string
    steam_price: number
    csfloat_price: number
    prev_steam_price: number | null
    prev_csfloat_price: number | null
    volume: number
    prev_volume: number | null
    listing_count: number
    prev_listing_count: number | null
    opportunity_count: number
    competition_score: number
    last_api_timestamp: Date | null
    fetch_count: number
    comp_update_count: number
    profit_started_at: Date | null
    sell_velocity: number
    demand_intensity: number
    updated_at: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item_name?: boolean
    steam_price?: boolean
    csfloat_price?: boolean
    prev_steam_price?: boolean
    prev_csfloat_price?: boolean
    volume?: boolean
    prev_volume?: boolean
    listing_count?: boolean
    prev_listing_count?: boolean
    opportunity_count?: boolean
    competition_score?: boolean
    last_api_timestamp?: boolean
    fetch_count?: boolean
    comp_update_count?: boolean
    profit_started_at?: boolean
    sell_velocity?: boolean
    demand_intensity?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item_name?: boolean
    steam_price?: boolean
    csfloat_price?: boolean
    prev_steam_price?: boolean
    prev_csfloat_price?: boolean
    volume?: boolean
    prev_volume?: boolean
    listing_count?: boolean
    prev_listing_count?: boolean
    opportunity_count?: boolean
    competition_score?: boolean
    last_api_timestamp?: boolean
    fetch_count?: boolean
    comp_update_count?: boolean
    profit_started_at?: boolean
    sell_velocity?: boolean
    demand_intensity?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    item_name?: boolean
    steam_price?: boolean
    csfloat_price?: boolean
    prev_steam_price?: boolean
    prev_csfloat_price?: boolean
    volume?: boolean
    prev_volume?: boolean
    listing_count?: boolean
    prev_listing_count?: boolean
    opportunity_count?: boolean
    competition_score?: boolean
    last_api_timestamp?: boolean
    fetch_count?: boolean
    comp_update_count?: boolean
    profit_started_at?: boolean
    sell_velocity?: boolean
    demand_intensity?: boolean
    updated_at?: boolean
  }


  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      item_name: string
      steam_price: number
      csfloat_price: number
      prev_steam_price: number | null
      prev_csfloat_price: number | null
      volume: number
      prev_volume: number | null
      listing_count: number
      prev_listing_count: number | null
      opportunity_count: number
      competition_score: number
      last_api_timestamp: Date | null
      fetch_count: number
      comp_update_count: number
      profit_started_at: Date | null
      sell_velocity: number
      demand_intensity: number
      updated_at: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */ 
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly item_name: FieldRef<"Item", 'String'>
    readonly steam_price: FieldRef<"Item", 'Float'>
    readonly csfloat_price: FieldRef<"Item", 'Float'>
    readonly prev_steam_price: FieldRef<"Item", 'Float'>
    readonly prev_csfloat_price: FieldRef<"Item", 'Float'>
    readonly volume: FieldRef<"Item", 'Int'>
    readonly prev_volume: FieldRef<"Item", 'Int'>
    readonly listing_count: FieldRef<"Item", 'Int'>
    readonly prev_listing_count: FieldRef<"Item", 'Int'>
    readonly opportunity_count: FieldRef<"Item", 'Int'>
    readonly competition_score: FieldRef<"Item", 'Float'>
    readonly last_api_timestamp: FieldRef<"Item", 'DateTime'>
    readonly fetch_count: FieldRef<"Item", 'Int'>
    readonly comp_update_count: FieldRef<"Item", 'Int'>
    readonly profit_started_at: FieldRef<"Item", 'DateTime'>
    readonly sell_velocity: FieldRef<"Item", 'Float'>
    readonly demand_intensity: FieldRef<"Item", 'Float'>
    readonly updated_at: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
  }


  /**
   * Model ProfitableItem
   */

  export type AggregateProfitableItem = {
    _count: ProfitableItemCountAggregateOutputType | null
    _avg: ProfitableItemAvgAggregateOutputType | null
    _sum: ProfitableItemSumAggregateOutputType | null
    _min: ProfitableItemMinAggregateOutputType | null
    _max: ProfitableItemMaxAggregateOutputType | null
  }

  export type ProfitableItemAvgAggregateOutputType = {
    id: number | null
    buy_price: number | null
    sell_price: number | null
    net_profit: number | null
    profit_percent: number | null
    liquidity_score: number | null
    intelligence_score: number | null
    saturation_score: number | null
    execution_probability: number | null
    slippage_risk: number | null
    market_stability: number | null
    execution_score: number | null
    review_score: number | null
  }

  export type ProfitableItemSumAggregateOutputType = {
    id: number | null
    buy_price: number | null
    sell_price: number | null
    net_profit: number | null
    profit_percent: number | null
    liquidity_score: number | null
    intelligence_score: number | null
    saturation_score: number | null
    execution_probability: number | null
    slippage_risk: number | null
    market_stability: number | null
    execution_score: number | null
    review_score: number | null
  }

  export type ProfitableItemMinAggregateOutputType = {
    id: number | null
    item_name: string | null
    buy_from: string | null
    sell_to: string | null
    buy_price: number | null
    sell_price: number | null
    net_profit: number | null
    profit_percent: number | null
    liquidity_score: number | null
    intelligence_score: number | null
    saturation_score: number | null
    execution_probability: number | null
    slippage_risk: number | null
    market_stability: number | null
    execution_score: number | null
    status: string | null
    review_score: number | null
    is_sniper: boolean | null
    created_at: Date | null
  }

  export type ProfitableItemMaxAggregateOutputType = {
    id: number | null
    item_name: string | null
    buy_from: string | null
    sell_to: string | null
    buy_price: number | null
    sell_price: number | null
    net_profit: number | null
    profit_percent: number | null
    liquidity_score: number | null
    intelligence_score: number | null
    saturation_score: number | null
    execution_probability: number | null
    slippage_risk: number | null
    market_stability: number | null
    execution_score: number | null
    status: string | null
    review_score: number | null
    is_sniper: boolean | null
    created_at: Date | null
  }

  export type ProfitableItemCountAggregateOutputType = {
    id: number
    item_name: number
    buy_from: number
    sell_to: number
    buy_price: number
    sell_price: number
    net_profit: number
    profit_percent: number
    liquidity_score: number
    intelligence_score: number
    saturation_score: number
    execution_probability: number
    slippage_risk: number
    market_stability: number
    execution_score: number
    status: number
    review_score: number
    is_sniper: number
    created_at: number
    _all: number
  }


  export type ProfitableItemAvgAggregateInputType = {
    id?: true
    buy_price?: true
    sell_price?: true
    net_profit?: true
    profit_percent?: true
    liquidity_score?: true
    intelligence_score?: true
    saturation_score?: true
    execution_probability?: true
    slippage_risk?: true
    market_stability?: true
    execution_score?: true
    review_score?: true
  }

  export type ProfitableItemSumAggregateInputType = {
    id?: true
    buy_price?: true
    sell_price?: true
    net_profit?: true
    profit_percent?: true
    liquidity_score?: true
    intelligence_score?: true
    saturation_score?: true
    execution_probability?: true
    slippage_risk?: true
    market_stability?: true
    execution_score?: true
    review_score?: true
  }

  export type ProfitableItemMinAggregateInputType = {
    id?: true
    item_name?: true
    buy_from?: true
    sell_to?: true
    buy_price?: true
    sell_price?: true
    net_profit?: true
    profit_percent?: true
    liquidity_score?: true
    intelligence_score?: true
    saturation_score?: true
    execution_probability?: true
    slippage_risk?: true
    market_stability?: true
    execution_score?: true
    status?: true
    review_score?: true
    is_sniper?: true
    created_at?: true
  }

  export type ProfitableItemMaxAggregateInputType = {
    id?: true
    item_name?: true
    buy_from?: true
    sell_to?: true
    buy_price?: true
    sell_price?: true
    net_profit?: true
    profit_percent?: true
    liquidity_score?: true
    intelligence_score?: true
    saturation_score?: true
    execution_probability?: true
    slippage_risk?: true
    market_stability?: true
    execution_score?: true
    status?: true
    review_score?: true
    is_sniper?: true
    created_at?: true
  }

  export type ProfitableItemCountAggregateInputType = {
    id?: true
    item_name?: true
    buy_from?: true
    sell_to?: true
    buy_price?: true
    sell_price?: true
    net_profit?: true
    profit_percent?: true
    liquidity_score?: true
    intelligence_score?: true
    saturation_score?: true
    execution_probability?: true
    slippage_risk?: true
    market_stability?: true
    execution_score?: true
    status?: true
    review_score?: true
    is_sniper?: true
    created_at?: true
    _all?: true
  }

  export type ProfitableItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfitableItem to aggregate.
     */
    where?: ProfitableItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfitableItems to fetch.
     */
    orderBy?: ProfitableItemOrderByWithRelationInput | ProfitableItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfitableItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfitableItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfitableItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfitableItems
    **/
    _count?: true | ProfitableItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfitableItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfitableItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfitableItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfitableItemMaxAggregateInputType
  }

  export type GetProfitableItemAggregateType<T extends ProfitableItemAggregateArgs> = {
        [P in keyof T & keyof AggregateProfitableItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfitableItem[P]>
      : GetScalarType<T[P], AggregateProfitableItem[P]>
  }




  export type ProfitableItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfitableItemWhereInput
    orderBy?: ProfitableItemOrderByWithAggregationInput | ProfitableItemOrderByWithAggregationInput[]
    by: ProfitableItemScalarFieldEnum[] | ProfitableItemScalarFieldEnum
    having?: ProfitableItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfitableItemCountAggregateInputType | true
    _avg?: ProfitableItemAvgAggregateInputType
    _sum?: ProfitableItemSumAggregateInputType
    _min?: ProfitableItemMinAggregateInputType
    _max?: ProfitableItemMaxAggregateInputType
  }

  export type ProfitableItemGroupByOutputType = {
    id: number
    item_name: string
    buy_from: string
    sell_to: string
    buy_price: number
    sell_price: number
    net_profit: number
    profit_percent: number
    liquidity_score: number
    intelligence_score: number
    saturation_score: number
    execution_probability: number
    slippage_risk: number
    market_stability: number
    execution_score: number
    status: string
    review_score: number
    is_sniper: boolean
    created_at: Date
    _count: ProfitableItemCountAggregateOutputType | null
    _avg: ProfitableItemAvgAggregateOutputType | null
    _sum: ProfitableItemSumAggregateOutputType | null
    _min: ProfitableItemMinAggregateOutputType | null
    _max: ProfitableItemMaxAggregateOutputType | null
  }

  type GetProfitableItemGroupByPayload<T extends ProfitableItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfitableItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfitableItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfitableItemGroupByOutputType[P]>
            : GetScalarType<T[P], ProfitableItemGroupByOutputType[P]>
        }
      >
    >


  export type ProfitableItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item_name?: boolean
    buy_from?: boolean
    sell_to?: boolean
    buy_price?: boolean
    sell_price?: boolean
    net_profit?: boolean
    profit_percent?: boolean
    liquidity_score?: boolean
    intelligence_score?: boolean
    saturation_score?: boolean
    execution_probability?: boolean
    slippage_risk?: boolean
    market_stability?: boolean
    execution_score?: boolean
    status?: boolean
    review_score?: boolean
    is_sniper?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["profitableItem"]>

  export type ProfitableItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item_name?: boolean
    buy_from?: boolean
    sell_to?: boolean
    buy_price?: boolean
    sell_price?: boolean
    net_profit?: boolean
    profit_percent?: boolean
    liquidity_score?: boolean
    intelligence_score?: boolean
    saturation_score?: boolean
    execution_probability?: boolean
    slippage_risk?: boolean
    market_stability?: boolean
    execution_score?: boolean
    status?: boolean
    review_score?: boolean
    is_sniper?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["profitableItem"]>

  export type ProfitableItemSelectScalar = {
    id?: boolean
    item_name?: boolean
    buy_from?: boolean
    sell_to?: boolean
    buy_price?: boolean
    sell_price?: boolean
    net_profit?: boolean
    profit_percent?: boolean
    liquidity_score?: boolean
    intelligence_score?: boolean
    saturation_score?: boolean
    execution_probability?: boolean
    slippage_risk?: boolean
    market_stability?: boolean
    execution_score?: boolean
    status?: boolean
    review_score?: boolean
    is_sniper?: boolean
    created_at?: boolean
  }


  export type $ProfitableItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfitableItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      item_name: string
      buy_from: string
      sell_to: string
      buy_price: number
      sell_price: number
      net_profit: number
      profit_percent: number
      liquidity_score: number
      intelligence_score: number
      saturation_score: number
      execution_probability: number
      slippage_risk: number
      market_stability: number
      execution_score: number
      status: string
      review_score: number
      is_sniper: boolean
      created_at: Date
    }, ExtArgs["result"]["profitableItem"]>
    composites: {}
  }

  type ProfitableItemGetPayload<S extends boolean | null | undefined | ProfitableItemDefaultArgs> = $Result.GetResult<Prisma.$ProfitableItemPayload, S>

  type ProfitableItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProfitableItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProfitableItemCountAggregateInputType | true
    }

  export interface ProfitableItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfitableItem'], meta: { name: 'ProfitableItem' } }
    /**
     * Find zero or one ProfitableItem that matches the filter.
     * @param {ProfitableItemFindUniqueArgs} args - Arguments to find a ProfitableItem
     * @example
     * // Get one ProfitableItem
     * const profitableItem = await prisma.profitableItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfitableItemFindUniqueArgs>(args: SelectSubset<T, ProfitableItemFindUniqueArgs<ExtArgs>>): Prisma__ProfitableItemClient<$Result.GetResult<Prisma.$ProfitableItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProfitableItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProfitableItemFindUniqueOrThrowArgs} args - Arguments to find a ProfitableItem
     * @example
     * // Get one ProfitableItem
     * const profitableItem = await prisma.profitableItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfitableItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfitableItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfitableItemClient<$Result.GetResult<Prisma.$ProfitableItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProfitableItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitableItemFindFirstArgs} args - Arguments to find a ProfitableItem
     * @example
     * // Get one ProfitableItem
     * const profitableItem = await prisma.profitableItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfitableItemFindFirstArgs>(args?: SelectSubset<T, ProfitableItemFindFirstArgs<ExtArgs>>): Prisma__ProfitableItemClient<$Result.GetResult<Prisma.$ProfitableItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProfitableItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitableItemFindFirstOrThrowArgs} args - Arguments to find a ProfitableItem
     * @example
     * // Get one ProfitableItem
     * const profitableItem = await prisma.profitableItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfitableItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfitableItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfitableItemClient<$Result.GetResult<Prisma.$ProfitableItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProfitableItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitableItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfitableItems
     * const profitableItems = await prisma.profitableItem.findMany()
     * 
     * // Get first 10 ProfitableItems
     * const profitableItems = await prisma.profitableItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profitableItemWithIdOnly = await prisma.profitableItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfitableItemFindManyArgs>(args?: SelectSubset<T, ProfitableItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfitableItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProfitableItem.
     * @param {ProfitableItemCreateArgs} args - Arguments to create a ProfitableItem.
     * @example
     * // Create one ProfitableItem
     * const ProfitableItem = await prisma.profitableItem.create({
     *   data: {
     *     // ... data to create a ProfitableItem
     *   }
     * })
     * 
     */
    create<T extends ProfitableItemCreateArgs>(args: SelectSubset<T, ProfitableItemCreateArgs<ExtArgs>>): Prisma__ProfitableItemClient<$Result.GetResult<Prisma.$ProfitableItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProfitableItems.
     * @param {ProfitableItemCreateManyArgs} args - Arguments to create many ProfitableItems.
     * @example
     * // Create many ProfitableItems
     * const profitableItem = await prisma.profitableItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfitableItemCreateManyArgs>(args?: SelectSubset<T, ProfitableItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfitableItems and returns the data saved in the database.
     * @param {ProfitableItemCreateManyAndReturnArgs} args - Arguments to create many ProfitableItems.
     * @example
     * // Create many ProfitableItems
     * const profitableItem = await prisma.profitableItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfitableItems and only return the `id`
     * const profitableItemWithIdOnly = await prisma.profitableItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfitableItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfitableItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfitableItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProfitableItem.
     * @param {ProfitableItemDeleteArgs} args - Arguments to delete one ProfitableItem.
     * @example
     * // Delete one ProfitableItem
     * const ProfitableItem = await prisma.profitableItem.delete({
     *   where: {
     *     // ... filter to delete one ProfitableItem
     *   }
     * })
     * 
     */
    delete<T extends ProfitableItemDeleteArgs>(args: SelectSubset<T, ProfitableItemDeleteArgs<ExtArgs>>): Prisma__ProfitableItemClient<$Result.GetResult<Prisma.$ProfitableItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProfitableItem.
     * @param {ProfitableItemUpdateArgs} args - Arguments to update one ProfitableItem.
     * @example
     * // Update one ProfitableItem
     * const profitableItem = await prisma.profitableItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfitableItemUpdateArgs>(args: SelectSubset<T, ProfitableItemUpdateArgs<ExtArgs>>): Prisma__ProfitableItemClient<$Result.GetResult<Prisma.$ProfitableItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProfitableItems.
     * @param {ProfitableItemDeleteManyArgs} args - Arguments to filter ProfitableItems to delete.
     * @example
     * // Delete a few ProfitableItems
     * const { count } = await prisma.profitableItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfitableItemDeleteManyArgs>(args?: SelectSubset<T, ProfitableItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfitableItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitableItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfitableItems
     * const profitableItem = await prisma.profitableItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfitableItemUpdateManyArgs>(args: SelectSubset<T, ProfitableItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProfitableItem.
     * @param {ProfitableItemUpsertArgs} args - Arguments to update or create a ProfitableItem.
     * @example
     * // Update or create a ProfitableItem
     * const profitableItem = await prisma.profitableItem.upsert({
     *   create: {
     *     // ... data to create a ProfitableItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfitableItem we want to update
     *   }
     * })
     */
    upsert<T extends ProfitableItemUpsertArgs>(args: SelectSubset<T, ProfitableItemUpsertArgs<ExtArgs>>): Prisma__ProfitableItemClient<$Result.GetResult<Prisma.$ProfitableItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProfitableItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitableItemCountArgs} args - Arguments to filter ProfitableItems to count.
     * @example
     * // Count the number of ProfitableItems
     * const count = await prisma.profitableItem.count({
     *   where: {
     *     // ... the filter for the ProfitableItems we want to count
     *   }
     * })
    **/
    count<T extends ProfitableItemCountArgs>(
      args?: Subset<T, ProfitableItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfitableItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfitableItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitableItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfitableItemAggregateArgs>(args: Subset<T, ProfitableItemAggregateArgs>): Prisma.PrismaPromise<GetProfitableItemAggregateType<T>>

    /**
     * Group by ProfitableItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitableItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfitableItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfitableItemGroupByArgs['orderBy'] }
        : { orderBy?: ProfitableItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfitableItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfitableItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfitableItem model
   */
  readonly fields: ProfitableItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfitableItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfitableItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfitableItem model
   */ 
  interface ProfitableItemFieldRefs {
    readonly id: FieldRef<"ProfitableItem", 'Int'>
    readonly item_name: FieldRef<"ProfitableItem", 'String'>
    readonly buy_from: FieldRef<"ProfitableItem", 'String'>
    readonly sell_to: FieldRef<"ProfitableItem", 'String'>
    readonly buy_price: FieldRef<"ProfitableItem", 'Float'>
    readonly sell_price: FieldRef<"ProfitableItem", 'Float'>
    readonly net_profit: FieldRef<"ProfitableItem", 'Float'>
    readonly profit_percent: FieldRef<"ProfitableItem", 'Float'>
    readonly liquidity_score: FieldRef<"ProfitableItem", 'Float'>
    readonly intelligence_score: FieldRef<"ProfitableItem", 'Float'>
    readonly saturation_score: FieldRef<"ProfitableItem", 'Float'>
    readonly execution_probability: FieldRef<"ProfitableItem", 'Float'>
    readonly slippage_risk: FieldRef<"ProfitableItem", 'Float'>
    readonly market_stability: FieldRef<"ProfitableItem", 'Float'>
    readonly execution_score: FieldRef<"ProfitableItem", 'Float'>
    readonly status: FieldRef<"ProfitableItem", 'String'>
    readonly review_score: FieldRef<"ProfitableItem", 'Float'>
    readonly is_sniper: FieldRef<"ProfitableItem", 'Boolean'>
    readonly created_at: FieldRef<"ProfitableItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfitableItem findUnique
   */
  export type ProfitableItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitableItem
     */
    select?: ProfitableItemSelect<ExtArgs> | null
    /**
     * Filter, which ProfitableItem to fetch.
     */
    where: ProfitableItemWhereUniqueInput
  }

  /**
   * ProfitableItem findUniqueOrThrow
   */
  export type ProfitableItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitableItem
     */
    select?: ProfitableItemSelect<ExtArgs> | null
    /**
     * Filter, which ProfitableItem to fetch.
     */
    where: ProfitableItemWhereUniqueInput
  }

  /**
   * ProfitableItem findFirst
   */
  export type ProfitableItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitableItem
     */
    select?: ProfitableItemSelect<ExtArgs> | null
    /**
     * Filter, which ProfitableItem to fetch.
     */
    where?: ProfitableItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfitableItems to fetch.
     */
    orderBy?: ProfitableItemOrderByWithRelationInput | ProfitableItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfitableItems.
     */
    cursor?: ProfitableItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfitableItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfitableItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfitableItems.
     */
    distinct?: ProfitableItemScalarFieldEnum | ProfitableItemScalarFieldEnum[]
  }

  /**
   * ProfitableItem findFirstOrThrow
   */
  export type ProfitableItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitableItem
     */
    select?: ProfitableItemSelect<ExtArgs> | null
    /**
     * Filter, which ProfitableItem to fetch.
     */
    where?: ProfitableItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfitableItems to fetch.
     */
    orderBy?: ProfitableItemOrderByWithRelationInput | ProfitableItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfitableItems.
     */
    cursor?: ProfitableItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfitableItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfitableItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfitableItems.
     */
    distinct?: ProfitableItemScalarFieldEnum | ProfitableItemScalarFieldEnum[]
  }

  /**
   * ProfitableItem findMany
   */
  export type ProfitableItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitableItem
     */
    select?: ProfitableItemSelect<ExtArgs> | null
    /**
     * Filter, which ProfitableItems to fetch.
     */
    where?: ProfitableItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfitableItems to fetch.
     */
    orderBy?: ProfitableItemOrderByWithRelationInput | ProfitableItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfitableItems.
     */
    cursor?: ProfitableItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfitableItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfitableItems.
     */
    skip?: number
    distinct?: ProfitableItemScalarFieldEnum | ProfitableItemScalarFieldEnum[]
  }

  /**
   * ProfitableItem create
   */
  export type ProfitableItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitableItem
     */
    select?: ProfitableItemSelect<ExtArgs> | null
    /**
     * The data needed to create a ProfitableItem.
     */
    data: XOR<ProfitableItemCreateInput, ProfitableItemUncheckedCreateInput>
  }

  /**
   * ProfitableItem createMany
   */
  export type ProfitableItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfitableItems.
     */
    data: ProfitableItemCreateManyInput | ProfitableItemCreateManyInput[]
  }

  /**
   * ProfitableItem createManyAndReturn
   */
  export type ProfitableItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitableItem
     */
    select?: ProfitableItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProfitableItems.
     */
    data: ProfitableItemCreateManyInput | ProfitableItemCreateManyInput[]
  }

  /**
   * ProfitableItem update
   */
  export type ProfitableItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitableItem
     */
    select?: ProfitableItemSelect<ExtArgs> | null
    /**
     * The data needed to update a ProfitableItem.
     */
    data: XOR<ProfitableItemUpdateInput, ProfitableItemUncheckedUpdateInput>
    /**
     * Choose, which ProfitableItem to update.
     */
    where: ProfitableItemWhereUniqueInput
  }

  /**
   * ProfitableItem updateMany
   */
  export type ProfitableItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfitableItems.
     */
    data: XOR<ProfitableItemUpdateManyMutationInput, ProfitableItemUncheckedUpdateManyInput>
    /**
     * Filter which ProfitableItems to update
     */
    where?: ProfitableItemWhereInput
  }

  /**
   * ProfitableItem upsert
   */
  export type ProfitableItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitableItem
     */
    select?: ProfitableItemSelect<ExtArgs> | null
    /**
     * The filter to search for the ProfitableItem to update in case it exists.
     */
    where: ProfitableItemWhereUniqueInput
    /**
     * In case the ProfitableItem found by the `where` argument doesn't exist, create a new ProfitableItem with this data.
     */
    create: XOR<ProfitableItemCreateInput, ProfitableItemUncheckedCreateInput>
    /**
     * In case the ProfitableItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfitableItemUpdateInput, ProfitableItemUncheckedUpdateInput>
  }

  /**
   * ProfitableItem delete
   */
  export type ProfitableItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitableItem
     */
    select?: ProfitableItemSelect<ExtArgs> | null
    /**
     * Filter which ProfitableItem to delete.
     */
    where: ProfitableItemWhereUniqueInput
  }

  /**
   * ProfitableItem deleteMany
   */
  export type ProfitableItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfitableItems to delete
     */
    where?: ProfitableItemWhereInput
  }

  /**
   * ProfitableItem without action
   */
  export type ProfitableItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitableItem
     */
    select?: ProfitableItemSelect<ExtArgs> | null
  }


  /**
   * Model OpportunityLock
   */

  export type AggregateOpportunityLock = {
    _count: OpportunityLockCountAggregateOutputType | null
    _min: OpportunityLockMinAggregateOutputType | null
    _max: OpportunityLockMaxAggregateOutputType | null
  }

  export type OpportunityLockMinAggregateOutputType = {
    id: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type OpportunityLockMaxAggregateOutputType = {
    id: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type OpportunityLockCountAggregateOutputType = {
    id: number
    expires_at: number
    created_at: number
    _all: number
  }


  export type OpportunityLockMinAggregateInputType = {
    id?: true
    expires_at?: true
    created_at?: true
  }

  export type OpportunityLockMaxAggregateInputType = {
    id?: true
    expires_at?: true
    created_at?: true
  }

  export type OpportunityLockCountAggregateInputType = {
    id?: true
    expires_at?: true
    created_at?: true
    _all?: true
  }

  export type OpportunityLockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpportunityLock to aggregate.
     */
    where?: OpportunityLockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpportunityLocks to fetch.
     */
    orderBy?: OpportunityLockOrderByWithRelationInput | OpportunityLockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpportunityLockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpportunityLocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpportunityLocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpportunityLocks
    **/
    _count?: true | OpportunityLockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpportunityLockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpportunityLockMaxAggregateInputType
  }

  export type GetOpportunityLockAggregateType<T extends OpportunityLockAggregateArgs> = {
        [P in keyof T & keyof AggregateOpportunityLock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpportunityLock[P]>
      : GetScalarType<T[P], AggregateOpportunityLock[P]>
  }




  export type OpportunityLockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunityLockWhereInput
    orderBy?: OpportunityLockOrderByWithAggregationInput | OpportunityLockOrderByWithAggregationInput[]
    by: OpportunityLockScalarFieldEnum[] | OpportunityLockScalarFieldEnum
    having?: OpportunityLockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpportunityLockCountAggregateInputType | true
    _min?: OpportunityLockMinAggregateInputType
    _max?: OpportunityLockMaxAggregateInputType
  }

  export type OpportunityLockGroupByOutputType = {
    id: string
    expires_at: Date
    created_at: Date
    _count: OpportunityLockCountAggregateOutputType | null
    _min: OpportunityLockMinAggregateOutputType | null
    _max: OpportunityLockMaxAggregateOutputType | null
  }

  type GetOpportunityLockGroupByPayload<T extends OpportunityLockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpportunityLockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpportunityLockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpportunityLockGroupByOutputType[P]>
            : GetScalarType<T[P], OpportunityLockGroupByOutputType[P]>
        }
      >
    >


  export type OpportunityLockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expires_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["opportunityLock"]>

  export type OpportunityLockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expires_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["opportunityLock"]>

  export type OpportunityLockSelectScalar = {
    id?: boolean
    expires_at?: boolean
    created_at?: boolean
  }


  export type $OpportunityLockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OpportunityLock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expires_at: Date
      created_at: Date
    }, ExtArgs["result"]["opportunityLock"]>
    composites: {}
  }

  type OpportunityLockGetPayload<S extends boolean | null | undefined | OpportunityLockDefaultArgs> = $Result.GetResult<Prisma.$OpportunityLockPayload, S>

  type OpportunityLockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OpportunityLockFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OpportunityLockCountAggregateInputType | true
    }

  export interface OpportunityLockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OpportunityLock'], meta: { name: 'OpportunityLock' } }
    /**
     * Find zero or one OpportunityLock that matches the filter.
     * @param {OpportunityLockFindUniqueArgs} args - Arguments to find a OpportunityLock
     * @example
     * // Get one OpportunityLock
     * const opportunityLock = await prisma.opportunityLock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpportunityLockFindUniqueArgs>(args: SelectSubset<T, OpportunityLockFindUniqueArgs<ExtArgs>>): Prisma__OpportunityLockClient<$Result.GetResult<Prisma.$OpportunityLockPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OpportunityLock that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OpportunityLockFindUniqueOrThrowArgs} args - Arguments to find a OpportunityLock
     * @example
     * // Get one OpportunityLock
     * const opportunityLock = await prisma.opportunityLock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpportunityLockFindUniqueOrThrowArgs>(args: SelectSubset<T, OpportunityLockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpportunityLockClient<$Result.GetResult<Prisma.$OpportunityLockPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OpportunityLock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityLockFindFirstArgs} args - Arguments to find a OpportunityLock
     * @example
     * // Get one OpportunityLock
     * const opportunityLock = await prisma.opportunityLock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpportunityLockFindFirstArgs>(args?: SelectSubset<T, OpportunityLockFindFirstArgs<ExtArgs>>): Prisma__OpportunityLockClient<$Result.GetResult<Prisma.$OpportunityLockPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OpportunityLock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityLockFindFirstOrThrowArgs} args - Arguments to find a OpportunityLock
     * @example
     * // Get one OpportunityLock
     * const opportunityLock = await prisma.opportunityLock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpportunityLockFindFirstOrThrowArgs>(args?: SelectSubset<T, OpportunityLockFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpportunityLockClient<$Result.GetResult<Prisma.$OpportunityLockPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OpportunityLocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityLockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpportunityLocks
     * const opportunityLocks = await prisma.opportunityLock.findMany()
     * 
     * // Get first 10 OpportunityLocks
     * const opportunityLocks = await prisma.opportunityLock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opportunityLockWithIdOnly = await prisma.opportunityLock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpportunityLockFindManyArgs>(args?: SelectSubset<T, OpportunityLockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityLockPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OpportunityLock.
     * @param {OpportunityLockCreateArgs} args - Arguments to create a OpportunityLock.
     * @example
     * // Create one OpportunityLock
     * const OpportunityLock = await prisma.opportunityLock.create({
     *   data: {
     *     // ... data to create a OpportunityLock
     *   }
     * })
     * 
     */
    create<T extends OpportunityLockCreateArgs>(args: SelectSubset<T, OpportunityLockCreateArgs<ExtArgs>>): Prisma__OpportunityLockClient<$Result.GetResult<Prisma.$OpportunityLockPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OpportunityLocks.
     * @param {OpportunityLockCreateManyArgs} args - Arguments to create many OpportunityLocks.
     * @example
     * // Create many OpportunityLocks
     * const opportunityLock = await prisma.opportunityLock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpportunityLockCreateManyArgs>(args?: SelectSubset<T, OpportunityLockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OpportunityLocks and returns the data saved in the database.
     * @param {OpportunityLockCreateManyAndReturnArgs} args - Arguments to create many OpportunityLocks.
     * @example
     * // Create many OpportunityLocks
     * const opportunityLock = await prisma.opportunityLock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OpportunityLocks and only return the `id`
     * const opportunityLockWithIdOnly = await prisma.opportunityLock.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpportunityLockCreateManyAndReturnArgs>(args?: SelectSubset<T, OpportunityLockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityLockPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OpportunityLock.
     * @param {OpportunityLockDeleteArgs} args - Arguments to delete one OpportunityLock.
     * @example
     * // Delete one OpportunityLock
     * const OpportunityLock = await prisma.opportunityLock.delete({
     *   where: {
     *     // ... filter to delete one OpportunityLock
     *   }
     * })
     * 
     */
    delete<T extends OpportunityLockDeleteArgs>(args: SelectSubset<T, OpportunityLockDeleteArgs<ExtArgs>>): Prisma__OpportunityLockClient<$Result.GetResult<Prisma.$OpportunityLockPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OpportunityLock.
     * @param {OpportunityLockUpdateArgs} args - Arguments to update one OpportunityLock.
     * @example
     * // Update one OpportunityLock
     * const opportunityLock = await prisma.opportunityLock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpportunityLockUpdateArgs>(args: SelectSubset<T, OpportunityLockUpdateArgs<ExtArgs>>): Prisma__OpportunityLockClient<$Result.GetResult<Prisma.$OpportunityLockPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OpportunityLocks.
     * @param {OpportunityLockDeleteManyArgs} args - Arguments to filter OpportunityLocks to delete.
     * @example
     * // Delete a few OpportunityLocks
     * const { count } = await prisma.opportunityLock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpportunityLockDeleteManyArgs>(args?: SelectSubset<T, OpportunityLockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpportunityLocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityLockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpportunityLocks
     * const opportunityLock = await prisma.opportunityLock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpportunityLockUpdateManyArgs>(args: SelectSubset<T, OpportunityLockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OpportunityLock.
     * @param {OpportunityLockUpsertArgs} args - Arguments to update or create a OpportunityLock.
     * @example
     * // Update or create a OpportunityLock
     * const opportunityLock = await prisma.opportunityLock.upsert({
     *   create: {
     *     // ... data to create a OpportunityLock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpportunityLock we want to update
     *   }
     * })
     */
    upsert<T extends OpportunityLockUpsertArgs>(args: SelectSubset<T, OpportunityLockUpsertArgs<ExtArgs>>): Prisma__OpportunityLockClient<$Result.GetResult<Prisma.$OpportunityLockPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OpportunityLocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityLockCountArgs} args - Arguments to filter OpportunityLocks to count.
     * @example
     * // Count the number of OpportunityLocks
     * const count = await prisma.opportunityLock.count({
     *   where: {
     *     // ... the filter for the OpportunityLocks we want to count
     *   }
     * })
    **/
    count<T extends OpportunityLockCountArgs>(
      args?: Subset<T, OpportunityLockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpportunityLockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpportunityLock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityLockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OpportunityLockAggregateArgs>(args: Subset<T, OpportunityLockAggregateArgs>): Prisma.PrismaPromise<GetOpportunityLockAggregateType<T>>

    /**
     * Group by OpportunityLock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityLockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OpportunityLockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpportunityLockGroupByArgs['orderBy'] }
        : { orderBy?: OpportunityLockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OpportunityLockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpportunityLockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OpportunityLock model
   */
  readonly fields: OpportunityLockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OpportunityLock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpportunityLockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OpportunityLock model
   */ 
  interface OpportunityLockFieldRefs {
    readonly id: FieldRef<"OpportunityLock", 'String'>
    readonly expires_at: FieldRef<"OpportunityLock", 'DateTime'>
    readonly created_at: FieldRef<"OpportunityLock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OpportunityLock findUnique
   */
  export type OpportunityLockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityLock
     */
    select?: OpportunityLockSelect<ExtArgs> | null
    /**
     * Filter, which OpportunityLock to fetch.
     */
    where: OpportunityLockWhereUniqueInput
  }

  /**
   * OpportunityLock findUniqueOrThrow
   */
  export type OpportunityLockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityLock
     */
    select?: OpportunityLockSelect<ExtArgs> | null
    /**
     * Filter, which OpportunityLock to fetch.
     */
    where: OpportunityLockWhereUniqueInput
  }

  /**
   * OpportunityLock findFirst
   */
  export type OpportunityLockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityLock
     */
    select?: OpportunityLockSelect<ExtArgs> | null
    /**
     * Filter, which OpportunityLock to fetch.
     */
    where?: OpportunityLockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpportunityLocks to fetch.
     */
    orderBy?: OpportunityLockOrderByWithRelationInput | OpportunityLockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpportunityLocks.
     */
    cursor?: OpportunityLockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpportunityLocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpportunityLocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpportunityLocks.
     */
    distinct?: OpportunityLockScalarFieldEnum | OpportunityLockScalarFieldEnum[]
  }

  /**
   * OpportunityLock findFirstOrThrow
   */
  export type OpportunityLockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityLock
     */
    select?: OpportunityLockSelect<ExtArgs> | null
    /**
     * Filter, which OpportunityLock to fetch.
     */
    where?: OpportunityLockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpportunityLocks to fetch.
     */
    orderBy?: OpportunityLockOrderByWithRelationInput | OpportunityLockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpportunityLocks.
     */
    cursor?: OpportunityLockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpportunityLocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpportunityLocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpportunityLocks.
     */
    distinct?: OpportunityLockScalarFieldEnum | OpportunityLockScalarFieldEnum[]
  }

  /**
   * OpportunityLock findMany
   */
  export type OpportunityLockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityLock
     */
    select?: OpportunityLockSelect<ExtArgs> | null
    /**
     * Filter, which OpportunityLocks to fetch.
     */
    where?: OpportunityLockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpportunityLocks to fetch.
     */
    orderBy?: OpportunityLockOrderByWithRelationInput | OpportunityLockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpportunityLocks.
     */
    cursor?: OpportunityLockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpportunityLocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpportunityLocks.
     */
    skip?: number
    distinct?: OpportunityLockScalarFieldEnum | OpportunityLockScalarFieldEnum[]
  }

  /**
   * OpportunityLock create
   */
  export type OpportunityLockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityLock
     */
    select?: OpportunityLockSelect<ExtArgs> | null
    /**
     * The data needed to create a OpportunityLock.
     */
    data: XOR<OpportunityLockCreateInput, OpportunityLockUncheckedCreateInput>
  }

  /**
   * OpportunityLock createMany
   */
  export type OpportunityLockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OpportunityLocks.
     */
    data: OpportunityLockCreateManyInput | OpportunityLockCreateManyInput[]
  }

  /**
   * OpportunityLock createManyAndReturn
   */
  export type OpportunityLockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityLock
     */
    select?: OpportunityLockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OpportunityLocks.
     */
    data: OpportunityLockCreateManyInput | OpportunityLockCreateManyInput[]
  }

  /**
   * OpportunityLock update
   */
  export type OpportunityLockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityLock
     */
    select?: OpportunityLockSelect<ExtArgs> | null
    /**
     * The data needed to update a OpportunityLock.
     */
    data: XOR<OpportunityLockUpdateInput, OpportunityLockUncheckedUpdateInput>
    /**
     * Choose, which OpportunityLock to update.
     */
    where: OpportunityLockWhereUniqueInput
  }

  /**
   * OpportunityLock updateMany
   */
  export type OpportunityLockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OpportunityLocks.
     */
    data: XOR<OpportunityLockUpdateManyMutationInput, OpportunityLockUncheckedUpdateManyInput>
    /**
     * Filter which OpportunityLocks to update
     */
    where?: OpportunityLockWhereInput
  }

  /**
   * OpportunityLock upsert
   */
  export type OpportunityLockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityLock
     */
    select?: OpportunityLockSelect<ExtArgs> | null
    /**
     * The filter to search for the OpportunityLock to update in case it exists.
     */
    where: OpportunityLockWhereUniqueInput
    /**
     * In case the OpportunityLock found by the `where` argument doesn't exist, create a new OpportunityLock with this data.
     */
    create: XOR<OpportunityLockCreateInput, OpportunityLockUncheckedCreateInput>
    /**
     * In case the OpportunityLock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpportunityLockUpdateInput, OpportunityLockUncheckedUpdateInput>
  }

  /**
   * OpportunityLock delete
   */
  export type OpportunityLockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityLock
     */
    select?: OpportunityLockSelect<ExtArgs> | null
    /**
     * Filter which OpportunityLock to delete.
     */
    where: OpportunityLockWhereUniqueInput
  }

  /**
   * OpportunityLock deleteMany
   */
  export type OpportunityLockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpportunityLocks to delete
     */
    where?: OpportunityLockWhereInput
  }

  /**
   * OpportunityLock without action
   */
  export type OpportunityLockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityLock
     */
    select?: OpportunityLockSelect<ExtArgs> | null
  }


  /**
   * Model SnapshotVersion
   */

  export type AggregateSnapshotVersion = {
    _count: SnapshotVersionCountAggregateOutputType | null
    _avg: SnapshotVersionAvgAggregateOutputType | null
    _sum: SnapshotVersionSumAggregateOutputType | null
    _min: SnapshotVersionMinAggregateOutputType | null
    _max: SnapshotVersionMaxAggregateOutputType | null
  }

  export type SnapshotVersionAvgAggregateOutputType = {
    id: number | null
    version: number | null
  }

  export type SnapshotVersionSumAggregateOutputType = {
    id: number | null
    version: number | null
  }

  export type SnapshotVersionMinAggregateOutputType = {
    id: number | null
    version: number | null
    status: string | null
    updated_at: Date | null
  }

  export type SnapshotVersionMaxAggregateOutputType = {
    id: number | null
    version: number | null
    status: string | null
    updated_at: Date | null
  }

  export type SnapshotVersionCountAggregateOutputType = {
    id: number
    version: number
    status: number
    updated_at: number
    _all: number
  }


  export type SnapshotVersionAvgAggregateInputType = {
    id?: true
    version?: true
  }

  export type SnapshotVersionSumAggregateInputType = {
    id?: true
    version?: true
  }

  export type SnapshotVersionMinAggregateInputType = {
    id?: true
    version?: true
    status?: true
    updated_at?: true
  }

  export type SnapshotVersionMaxAggregateInputType = {
    id?: true
    version?: true
    status?: true
    updated_at?: true
  }

  export type SnapshotVersionCountAggregateInputType = {
    id?: true
    version?: true
    status?: true
    updated_at?: true
    _all?: true
  }

  export type SnapshotVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SnapshotVersion to aggregate.
     */
    where?: SnapshotVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnapshotVersions to fetch.
     */
    orderBy?: SnapshotVersionOrderByWithRelationInput | SnapshotVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SnapshotVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnapshotVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnapshotVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SnapshotVersions
    **/
    _count?: true | SnapshotVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SnapshotVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SnapshotVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SnapshotVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SnapshotVersionMaxAggregateInputType
  }

  export type GetSnapshotVersionAggregateType<T extends SnapshotVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateSnapshotVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSnapshotVersion[P]>
      : GetScalarType<T[P], AggregateSnapshotVersion[P]>
  }




  export type SnapshotVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnapshotVersionWhereInput
    orderBy?: SnapshotVersionOrderByWithAggregationInput | SnapshotVersionOrderByWithAggregationInput[]
    by: SnapshotVersionScalarFieldEnum[] | SnapshotVersionScalarFieldEnum
    having?: SnapshotVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SnapshotVersionCountAggregateInputType | true
    _avg?: SnapshotVersionAvgAggregateInputType
    _sum?: SnapshotVersionSumAggregateInputType
    _min?: SnapshotVersionMinAggregateInputType
    _max?: SnapshotVersionMaxAggregateInputType
  }

  export type SnapshotVersionGroupByOutputType = {
    id: number
    version: number
    status: string
    updated_at: Date
    _count: SnapshotVersionCountAggregateOutputType | null
    _avg: SnapshotVersionAvgAggregateOutputType | null
    _sum: SnapshotVersionSumAggregateOutputType | null
    _min: SnapshotVersionMinAggregateOutputType | null
    _max: SnapshotVersionMaxAggregateOutputType | null
  }

  type GetSnapshotVersionGroupByPayload<T extends SnapshotVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SnapshotVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SnapshotVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SnapshotVersionGroupByOutputType[P]>
            : GetScalarType<T[P], SnapshotVersionGroupByOutputType[P]>
        }
      >
    >


  export type SnapshotVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    status?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["snapshotVersion"]>

  export type SnapshotVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    status?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["snapshotVersion"]>

  export type SnapshotVersionSelectScalar = {
    id?: boolean
    version?: boolean
    status?: boolean
    updated_at?: boolean
  }


  export type $SnapshotVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SnapshotVersion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      version: number
      status: string
      updated_at: Date
    }, ExtArgs["result"]["snapshotVersion"]>
    composites: {}
  }

  type SnapshotVersionGetPayload<S extends boolean | null | undefined | SnapshotVersionDefaultArgs> = $Result.GetResult<Prisma.$SnapshotVersionPayload, S>

  type SnapshotVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SnapshotVersionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SnapshotVersionCountAggregateInputType | true
    }

  export interface SnapshotVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SnapshotVersion'], meta: { name: 'SnapshotVersion' } }
    /**
     * Find zero or one SnapshotVersion that matches the filter.
     * @param {SnapshotVersionFindUniqueArgs} args - Arguments to find a SnapshotVersion
     * @example
     * // Get one SnapshotVersion
     * const snapshotVersion = await prisma.snapshotVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SnapshotVersionFindUniqueArgs>(args: SelectSubset<T, SnapshotVersionFindUniqueArgs<ExtArgs>>): Prisma__SnapshotVersionClient<$Result.GetResult<Prisma.$SnapshotVersionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SnapshotVersion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SnapshotVersionFindUniqueOrThrowArgs} args - Arguments to find a SnapshotVersion
     * @example
     * // Get one SnapshotVersion
     * const snapshotVersion = await prisma.snapshotVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SnapshotVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, SnapshotVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SnapshotVersionClient<$Result.GetResult<Prisma.$SnapshotVersionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SnapshotVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotVersionFindFirstArgs} args - Arguments to find a SnapshotVersion
     * @example
     * // Get one SnapshotVersion
     * const snapshotVersion = await prisma.snapshotVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SnapshotVersionFindFirstArgs>(args?: SelectSubset<T, SnapshotVersionFindFirstArgs<ExtArgs>>): Prisma__SnapshotVersionClient<$Result.GetResult<Prisma.$SnapshotVersionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SnapshotVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotVersionFindFirstOrThrowArgs} args - Arguments to find a SnapshotVersion
     * @example
     * // Get one SnapshotVersion
     * const snapshotVersion = await prisma.snapshotVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SnapshotVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, SnapshotVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SnapshotVersionClient<$Result.GetResult<Prisma.$SnapshotVersionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SnapshotVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SnapshotVersions
     * const snapshotVersions = await prisma.snapshotVersion.findMany()
     * 
     * // Get first 10 SnapshotVersions
     * const snapshotVersions = await prisma.snapshotVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const snapshotVersionWithIdOnly = await prisma.snapshotVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SnapshotVersionFindManyArgs>(args?: SelectSubset<T, SnapshotVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotVersionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SnapshotVersion.
     * @param {SnapshotVersionCreateArgs} args - Arguments to create a SnapshotVersion.
     * @example
     * // Create one SnapshotVersion
     * const SnapshotVersion = await prisma.snapshotVersion.create({
     *   data: {
     *     // ... data to create a SnapshotVersion
     *   }
     * })
     * 
     */
    create<T extends SnapshotVersionCreateArgs>(args: SelectSubset<T, SnapshotVersionCreateArgs<ExtArgs>>): Prisma__SnapshotVersionClient<$Result.GetResult<Prisma.$SnapshotVersionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SnapshotVersions.
     * @param {SnapshotVersionCreateManyArgs} args - Arguments to create many SnapshotVersions.
     * @example
     * // Create many SnapshotVersions
     * const snapshotVersion = await prisma.snapshotVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SnapshotVersionCreateManyArgs>(args?: SelectSubset<T, SnapshotVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SnapshotVersions and returns the data saved in the database.
     * @param {SnapshotVersionCreateManyAndReturnArgs} args - Arguments to create many SnapshotVersions.
     * @example
     * // Create many SnapshotVersions
     * const snapshotVersion = await prisma.snapshotVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SnapshotVersions and only return the `id`
     * const snapshotVersionWithIdOnly = await prisma.snapshotVersion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SnapshotVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, SnapshotVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotVersionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SnapshotVersion.
     * @param {SnapshotVersionDeleteArgs} args - Arguments to delete one SnapshotVersion.
     * @example
     * // Delete one SnapshotVersion
     * const SnapshotVersion = await prisma.snapshotVersion.delete({
     *   where: {
     *     // ... filter to delete one SnapshotVersion
     *   }
     * })
     * 
     */
    delete<T extends SnapshotVersionDeleteArgs>(args: SelectSubset<T, SnapshotVersionDeleteArgs<ExtArgs>>): Prisma__SnapshotVersionClient<$Result.GetResult<Prisma.$SnapshotVersionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SnapshotVersion.
     * @param {SnapshotVersionUpdateArgs} args - Arguments to update one SnapshotVersion.
     * @example
     * // Update one SnapshotVersion
     * const snapshotVersion = await prisma.snapshotVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SnapshotVersionUpdateArgs>(args: SelectSubset<T, SnapshotVersionUpdateArgs<ExtArgs>>): Prisma__SnapshotVersionClient<$Result.GetResult<Prisma.$SnapshotVersionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SnapshotVersions.
     * @param {SnapshotVersionDeleteManyArgs} args - Arguments to filter SnapshotVersions to delete.
     * @example
     * // Delete a few SnapshotVersions
     * const { count } = await prisma.snapshotVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SnapshotVersionDeleteManyArgs>(args?: SelectSubset<T, SnapshotVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SnapshotVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SnapshotVersions
     * const snapshotVersion = await prisma.snapshotVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SnapshotVersionUpdateManyArgs>(args: SelectSubset<T, SnapshotVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SnapshotVersion.
     * @param {SnapshotVersionUpsertArgs} args - Arguments to update or create a SnapshotVersion.
     * @example
     * // Update or create a SnapshotVersion
     * const snapshotVersion = await prisma.snapshotVersion.upsert({
     *   create: {
     *     // ... data to create a SnapshotVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SnapshotVersion we want to update
     *   }
     * })
     */
    upsert<T extends SnapshotVersionUpsertArgs>(args: SelectSubset<T, SnapshotVersionUpsertArgs<ExtArgs>>): Prisma__SnapshotVersionClient<$Result.GetResult<Prisma.$SnapshotVersionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SnapshotVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotVersionCountArgs} args - Arguments to filter SnapshotVersions to count.
     * @example
     * // Count the number of SnapshotVersions
     * const count = await prisma.snapshotVersion.count({
     *   where: {
     *     // ... the filter for the SnapshotVersions we want to count
     *   }
     * })
    **/
    count<T extends SnapshotVersionCountArgs>(
      args?: Subset<T, SnapshotVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SnapshotVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SnapshotVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SnapshotVersionAggregateArgs>(args: Subset<T, SnapshotVersionAggregateArgs>): Prisma.PrismaPromise<GetSnapshotVersionAggregateType<T>>

    /**
     * Group by SnapshotVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SnapshotVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SnapshotVersionGroupByArgs['orderBy'] }
        : { orderBy?: SnapshotVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SnapshotVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSnapshotVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SnapshotVersion model
   */
  readonly fields: SnapshotVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SnapshotVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SnapshotVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SnapshotVersion model
   */ 
  interface SnapshotVersionFieldRefs {
    readonly id: FieldRef<"SnapshotVersion", 'Int'>
    readonly version: FieldRef<"SnapshotVersion", 'Int'>
    readonly status: FieldRef<"SnapshotVersion", 'String'>
    readonly updated_at: FieldRef<"SnapshotVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SnapshotVersion findUnique
   */
  export type SnapshotVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotVersion
     */
    select?: SnapshotVersionSelect<ExtArgs> | null
    /**
     * Filter, which SnapshotVersion to fetch.
     */
    where: SnapshotVersionWhereUniqueInput
  }

  /**
   * SnapshotVersion findUniqueOrThrow
   */
  export type SnapshotVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotVersion
     */
    select?: SnapshotVersionSelect<ExtArgs> | null
    /**
     * Filter, which SnapshotVersion to fetch.
     */
    where: SnapshotVersionWhereUniqueInput
  }

  /**
   * SnapshotVersion findFirst
   */
  export type SnapshotVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotVersion
     */
    select?: SnapshotVersionSelect<ExtArgs> | null
    /**
     * Filter, which SnapshotVersion to fetch.
     */
    where?: SnapshotVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnapshotVersions to fetch.
     */
    orderBy?: SnapshotVersionOrderByWithRelationInput | SnapshotVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SnapshotVersions.
     */
    cursor?: SnapshotVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnapshotVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnapshotVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SnapshotVersions.
     */
    distinct?: SnapshotVersionScalarFieldEnum | SnapshotVersionScalarFieldEnum[]
  }

  /**
   * SnapshotVersion findFirstOrThrow
   */
  export type SnapshotVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotVersion
     */
    select?: SnapshotVersionSelect<ExtArgs> | null
    /**
     * Filter, which SnapshotVersion to fetch.
     */
    where?: SnapshotVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnapshotVersions to fetch.
     */
    orderBy?: SnapshotVersionOrderByWithRelationInput | SnapshotVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SnapshotVersions.
     */
    cursor?: SnapshotVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnapshotVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnapshotVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SnapshotVersions.
     */
    distinct?: SnapshotVersionScalarFieldEnum | SnapshotVersionScalarFieldEnum[]
  }

  /**
   * SnapshotVersion findMany
   */
  export type SnapshotVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotVersion
     */
    select?: SnapshotVersionSelect<ExtArgs> | null
    /**
     * Filter, which SnapshotVersions to fetch.
     */
    where?: SnapshotVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnapshotVersions to fetch.
     */
    orderBy?: SnapshotVersionOrderByWithRelationInput | SnapshotVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SnapshotVersions.
     */
    cursor?: SnapshotVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnapshotVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnapshotVersions.
     */
    skip?: number
    distinct?: SnapshotVersionScalarFieldEnum | SnapshotVersionScalarFieldEnum[]
  }

  /**
   * SnapshotVersion create
   */
  export type SnapshotVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotVersion
     */
    select?: SnapshotVersionSelect<ExtArgs> | null
    /**
     * The data needed to create a SnapshotVersion.
     */
    data?: XOR<SnapshotVersionCreateInput, SnapshotVersionUncheckedCreateInput>
  }

  /**
   * SnapshotVersion createMany
   */
  export type SnapshotVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SnapshotVersions.
     */
    data: SnapshotVersionCreateManyInput | SnapshotVersionCreateManyInput[]
  }

  /**
   * SnapshotVersion createManyAndReturn
   */
  export type SnapshotVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotVersion
     */
    select?: SnapshotVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SnapshotVersions.
     */
    data: SnapshotVersionCreateManyInput | SnapshotVersionCreateManyInput[]
  }

  /**
   * SnapshotVersion update
   */
  export type SnapshotVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotVersion
     */
    select?: SnapshotVersionSelect<ExtArgs> | null
    /**
     * The data needed to update a SnapshotVersion.
     */
    data: XOR<SnapshotVersionUpdateInput, SnapshotVersionUncheckedUpdateInput>
    /**
     * Choose, which SnapshotVersion to update.
     */
    where: SnapshotVersionWhereUniqueInput
  }

  /**
   * SnapshotVersion updateMany
   */
  export type SnapshotVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SnapshotVersions.
     */
    data: XOR<SnapshotVersionUpdateManyMutationInput, SnapshotVersionUncheckedUpdateManyInput>
    /**
     * Filter which SnapshotVersions to update
     */
    where?: SnapshotVersionWhereInput
  }

  /**
   * SnapshotVersion upsert
   */
  export type SnapshotVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotVersion
     */
    select?: SnapshotVersionSelect<ExtArgs> | null
    /**
     * The filter to search for the SnapshotVersion to update in case it exists.
     */
    where: SnapshotVersionWhereUniqueInput
    /**
     * In case the SnapshotVersion found by the `where` argument doesn't exist, create a new SnapshotVersion with this data.
     */
    create: XOR<SnapshotVersionCreateInput, SnapshotVersionUncheckedCreateInput>
    /**
     * In case the SnapshotVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SnapshotVersionUpdateInput, SnapshotVersionUncheckedUpdateInput>
  }

  /**
   * SnapshotVersion delete
   */
  export type SnapshotVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotVersion
     */
    select?: SnapshotVersionSelect<ExtArgs> | null
    /**
     * Filter which SnapshotVersion to delete.
     */
    where: SnapshotVersionWhereUniqueInput
  }

  /**
   * SnapshotVersion deleteMany
   */
  export type SnapshotVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SnapshotVersions to delete
     */
    where?: SnapshotVersionWhereInput
  }

  /**
   * SnapshotVersion without action
   */
  export type SnapshotVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotVersion
     */
    select?: SnapshotVersionSelect<ExtArgs> | null
  }


  /**
   * Model MarketSnapshot
   */

  export type AggregateMarketSnapshot = {
    _count: MarketSnapshotCountAggregateOutputType | null
    _avg: MarketSnapshotAvgAggregateOutputType | null
    _sum: MarketSnapshotSumAggregateOutputType | null
    _min: MarketSnapshotMinAggregateOutputType | null
    _max: MarketSnapshotMaxAggregateOutputType | null
  }

  export type MarketSnapshotAvgAggregateOutputType = {
    id: number | null
    version: number | null
    partition: number | null
    price: number | null
  }

  export type MarketSnapshotSumAggregateOutputType = {
    id: number | null
    version: number | null
    partition: number | null
    price: number | null
  }

  export type MarketSnapshotMinAggregateOutputType = {
    id: number | null
    version: number | null
    partition: number | null
    item_name: string | null
    price: number | null
    platform: string | null
    created_at: Date | null
  }

  export type MarketSnapshotMaxAggregateOutputType = {
    id: number | null
    version: number | null
    partition: number | null
    item_name: string | null
    price: number | null
    platform: string | null
    created_at: Date | null
  }

  export type MarketSnapshotCountAggregateOutputType = {
    id: number
    version: number
    partition: number
    item_name: number
    price: number
    platform: number
    created_at: number
    _all: number
  }


  export type MarketSnapshotAvgAggregateInputType = {
    id?: true
    version?: true
    partition?: true
    price?: true
  }

  export type MarketSnapshotSumAggregateInputType = {
    id?: true
    version?: true
    partition?: true
    price?: true
  }

  export type MarketSnapshotMinAggregateInputType = {
    id?: true
    version?: true
    partition?: true
    item_name?: true
    price?: true
    platform?: true
    created_at?: true
  }

  export type MarketSnapshotMaxAggregateInputType = {
    id?: true
    version?: true
    partition?: true
    item_name?: true
    price?: true
    platform?: true
    created_at?: true
  }

  export type MarketSnapshotCountAggregateInputType = {
    id?: true
    version?: true
    partition?: true
    item_name?: true
    price?: true
    platform?: true
    created_at?: true
    _all?: true
  }

  export type MarketSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketSnapshot to aggregate.
     */
    where?: MarketSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketSnapshots to fetch.
     */
    orderBy?: MarketSnapshotOrderByWithRelationInput | MarketSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketSnapshots
    **/
    _count?: true | MarketSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketSnapshotMaxAggregateInputType
  }

  export type GetMarketSnapshotAggregateType<T extends MarketSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketSnapshot[P]>
      : GetScalarType<T[P], AggregateMarketSnapshot[P]>
  }




  export type MarketSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketSnapshotWhereInput
    orderBy?: MarketSnapshotOrderByWithAggregationInput | MarketSnapshotOrderByWithAggregationInput[]
    by: MarketSnapshotScalarFieldEnum[] | MarketSnapshotScalarFieldEnum
    having?: MarketSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketSnapshotCountAggregateInputType | true
    _avg?: MarketSnapshotAvgAggregateInputType
    _sum?: MarketSnapshotSumAggregateInputType
    _min?: MarketSnapshotMinAggregateInputType
    _max?: MarketSnapshotMaxAggregateInputType
  }

  export type MarketSnapshotGroupByOutputType = {
    id: number
    version: number
    partition: number
    item_name: string
    price: number
    platform: string
    created_at: Date
    _count: MarketSnapshotCountAggregateOutputType | null
    _avg: MarketSnapshotAvgAggregateOutputType | null
    _sum: MarketSnapshotSumAggregateOutputType | null
    _min: MarketSnapshotMinAggregateOutputType | null
    _max: MarketSnapshotMaxAggregateOutputType | null
  }

  type GetMarketSnapshotGroupByPayload<T extends MarketSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], MarketSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type MarketSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    partition?: boolean
    item_name?: boolean
    price?: boolean
    platform?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["marketSnapshot"]>

  export type MarketSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    partition?: boolean
    item_name?: boolean
    price?: boolean
    platform?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["marketSnapshot"]>

  export type MarketSnapshotSelectScalar = {
    id?: boolean
    version?: boolean
    partition?: boolean
    item_name?: boolean
    price?: boolean
    platform?: boolean
    created_at?: boolean
  }


  export type $MarketSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketSnapshot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      version: number
      partition: number
      item_name: string
      price: number
      platform: string
      created_at: Date
    }, ExtArgs["result"]["marketSnapshot"]>
    composites: {}
  }

  type MarketSnapshotGetPayload<S extends boolean | null | undefined | MarketSnapshotDefaultArgs> = $Result.GetResult<Prisma.$MarketSnapshotPayload, S>

  type MarketSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MarketSnapshotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MarketSnapshotCountAggregateInputType | true
    }

  export interface MarketSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketSnapshot'], meta: { name: 'MarketSnapshot' } }
    /**
     * Find zero or one MarketSnapshot that matches the filter.
     * @param {MarketSnapshotFindUniqueArgs} args - Arguments to find a MarketSnapshot
     * @example
     * // Get one MarketSnapshot
     * const marketSnapshot = await prisma.marketSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketSnapshotFindUniqueArgs>(args: SelectSubset<T, MarketSnapshotFindUniqueArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MarketSnapshot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MarketSnapshotFindUniqueOrThrowArgs} args - Arguments to find a MarketSnapshot
     * @example
     * // Get one MarketSnapshot
     * const marketSnapshot = await prisma.marketSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MarketSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSnapshotFindFirstArgs} args - Arguments to find a MarketSnapshot
     * @example
     * // Get one MarketSnapshot
     * const marketSnapshot = await prisma.marketSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketSnapshotFindFirstArgs>(args?: SelectSubset<T, MarketSnapshotFindFirstArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MarketSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSnapshotFindFirstOrThrowArgs} args - Arguments to find a MarketSnapshot
     * @example
     * // Get one MarketSnapshot
     * const marketSnapshot = await prisma.marketSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MarketSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketSnapshots
     * const marketSnapshots = await prisma.marketSnapshot.findMany()
     * 
     * // Get first 10 MarketSnapshots
     * const marketSnapshots = await prisma.marketSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketSnapshotWithIdOnly = await prisma.marketSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketSnapshotFindManyArgs>(args?: SelectSubset<T, MarketSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MarketSnapshot.
     * @param {MarketSnapshotCreateArgs} args - Arguments to create a MarketSnapshot.
     * @example
     * // Create one MarketSnapshot
     * const MarketSnapshot = await prisma.marketSnapshot.create({
     *   data: {
     *     // ... data to create a MarketSnapshot
     *   }
     * })
     * 
     */
    create<T extends MarketSnapshotCreateArgs>(args: SelectSubset<T, MarketSnapshotCreateArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MarketSnapshots.
     * @param {MarketSnapshotCreateManyArgs} args - Arguments to create many MarketSnapshots.
     * @example
     * // Create many MarketSnapshots
     * const marketSnapshot = await prisma.marketSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketSnapshotCreateManyArgs>(args?: SelectSubset<T, MarketSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketSnapshots and returns the data saved in the database.
     * @param {MarketSnapshotCreateManyAndReturnArgs} args - Arguments to create many MarketSnapshots.
     * @example
     * // Create many MarketSnapshots
     * const marketSnapshot = await prisma.marketSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketSnapshots and only return the `id`
     * const marketSnapshotWithIdOnly = await prisma.marketSnapshot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MarketSnapshot.
     * @param {MarketSnapshotDeleteArgs} args - Arguments to delete one MarketSnapshot.
     * @example
     * // Delete one MarketSnapshot
     * const MarketSnapshot = await prisma.marketSnapshot.delete({
     *   where: {
     *     // ... filter to delete one MarketSnapshot
     *   }
     * })
     * 
     */
    delete<T extends MarketSnapshotDeleteArgs>(args: SelectSubset<T, MarketSnapshotDeleteArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MarketSnapshot.
     * @param {MarketSnapshotUpdateArgs} args - Arguments to update one MarketSnapshot.
     * @example
     * // Update one MarketSnapshot
     * const marketSnapshot = await prisma.marketSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketSnapshotUpdateArgs>(args: SelectSubset<T, MarketSnapshotUpdateArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MarketSnapshots.
     * @param {MarketSnapshotDeleteManyArgs} args - Arguments to filter MarketSnapshots to delete.
     * @example
     * // Delete a few MarketSnapshots
     * const { count } = await prisma.marketSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketSnapshotDeleteManyArgs>(args?: SelectSubset<T, MarketSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketSnapshots
     * const marketSnapshot = await prisma.marketSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketSnapshotUpdateManyArgs>(args: SelectSubset<T, MarketSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MarketSnapshot.
     * @param {MarketSnapshotUpsertArgs} args - Arguments to update or create a MarketSnapshot.
     * @example
     * // Update or create a MarketSnapshot
     * const marketSnapshot = await prisma.marketSnapshot.upsert({
     *   create: {
     *     // ... data to create a MarketSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends MarketSnapshotUpsertArgs>(args: SelectSubset<T, MarketSnapshotUpsertArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MarketSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSnapshotCountArgs} args - Arguments to filter MarketSnapshots to count.
     * @example
     * // Count the number of MarketSnapshots
     * const count = await prisma.marketSnapshot.count({
     *   where: {
     *     // ... the filter for the MarketSnapshots we want to count
     *   }
     * })
    **/
    count<T extends MarketSnapshotCountArgs>(
      args?: Subset<T, MarketSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketSnapshotAggregateArgs>(args: Subset<T, MarketSnapshotAggregateArgs>): Prisma.PrismaPromise<GetMarketSnapshotAggregateType<T>>

    /**
     * Group by MarketSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: MarketSnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketSnapshot model
   */
  readonly fields: MarketSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MarketSnapshot model
   */ 
  interface MarketSnapshotFieldRefs {
    readonly id: FieldRef<"MarketSnapshot", 'Int'>
    readonly version: FieldRef<"MarketSnapshot", 'Int'>
    readonly partition: FieldRef<"MarketSnapshot", 'Int'>
    readonly item_name: FieldRef<"MarketSnapshot", 'String'>
    readonly price: FieldRef<"MarketSnapshot", 'Float'>
    readonly platform: FieldRef<"MarketSnapshot", 'String'>
    readonly created_at: FieldRef<"MarketSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketSnapshot findUnique
   */
  export type MarketSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which MarketSnapshot to fetch.
     */
    where: MarketSnapshotWhereUniqueInput
  }

  /**
   * MarketSnapshot findUniqueOrThrow
   */
  export type MarketSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which MarketSnapshot to fetch.
     */
    where: MarketSnapshotWhereUniqueInput
  }

  /**
   * MarketSnapshot findFirst
   */
  export type MarketSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which MarketSnapshot to fetch.
     */
    where?: MarketSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketSnapshots to fetch.
     */
    orderBy?: MarketSnapshotOrderByWithRelationInput | MarketSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketSnapshots.
     */
    cursor?: MarketSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketSnapshots.
     */
    distinct?: MarketSnapshotScalarFieldEnum | MarketSnapshotScalarFieldEnum[]
  }

  /**
   * MarketSnapshot findFirstOrThrow
   */
  export type MarketSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which MarketSnapshot to fetch.
     */
    where?: MarketSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketSnapshots to fetch.
     */
    orderBy?: MarketSnapshotOrderByWithRelationInput | MarketSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketSnapshots.
     */
    cursor?: MarketSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketSnapshots.
     */
    distinct?: MarketSnapshotScalarFieldEnum | MarketSnapshotScalarFieldEnum[]
  }

  /**
   * MarketSnapshot findMany
   */
  export type MarketSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which MarketSnapshots to fetch.
     */
    where?: MarketSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketSnapshots to fetch.
     */
    orderBy?: MarketSnapshotOrderByWithRelationInput | MarketSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketSnapshots.
     */
    cursor?: MarketSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketSnapshots.
     */
    skip?: number
    distinct?: MarketSnapshotScalarFieldEnum | MarketSnapshotScalarFieldEnum[]
  }

  /**
   * MarketSnapshot create
   */
  export type MarketSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * The data needed to create a MarketSnapshot.
     */
    data: XOR<MarketSnapshotCreateInput, MarketSnapshotUncheckedCreateInput>
  }

  /**
   * MarketSnapshot createMany
   */
  export type MarketSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketSnapshots.
     */
    data: MarketSnapshotCreateManyInput | MarketSnapshotCreateManyInput[]
  }

  /**
   * MarketSnapshot createManyAndReturn
   */
  export type MarketSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MarketSnapshots.
     */
    data: MarketSnapshotCreateManyInput | MarketSnapshotCreateManyInput[]
  }

  /**
   * MarketSnapshot update
   */
  export type MarketSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * The data needed to update a MarketSnapshot.
     */
    data: XOR<MarketSnapshotUpdateInput, MarketSnapshotUncheckedUpdateInput>
    /**
     * Choose, which MarketSnapshot to update.
     */
    where: MarketSnapshotWhereUniqueInput
  }

  /**
   * MarketSnapshot updateMany
   */
  export type MarketSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketSnapshots.
     */
    data: XOR<MarketSnapshotUpdateManyMutationInput, MarketSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which MarketSnapshots to update
     */
    where?: MarketSnapshotWhereInput
  }

  /**
   * MarketSnapshot upsert
   */
  export type MarketSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * The filter to search for the MarketSnapshot to update in case it exists.
     */
    where: MarketSnapshotWhereUniqueInput
    /**
     * In case the MarketSnapshot found by the `where` argument doesn't exist, create a new MarketSnapshot with this data.
     */
    create: XOR<MarketSnapshotCreateInput, MarketSnapshotUncheckedCreateInput>
    /**
     * In case the MarketSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketSnapshotUpdateInput, MarketSnapshotUncheckedUpdateInput>
  }

  /**
   * MarketSnapshot delete
   */
  export type MarketSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Filter which MarketSnapshot to delete.
     */
    where: MarketSnapshotWhereUniqueInput
  }

  /**
   * MarketSnapshot deleteMany
   */
  export type MarketSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketSnapshots to delete
     */
    where?: MarketSnapshotWhereInput
  }

  /**
   * MarketSnapshot without action
   */
  export type MarketSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
  }


  /**
   * Model StreamingEvent
   */

  export type AggregateStreamingEvent = {
    _count: StreamingEventCountAggregateOutputType | null
    _avg: StreamingEventAvgAggregateOutputType | null
    _sum: StreamingEventSumAggregateOutputType | null
    _min: StreamingEventMinAggregateOutputType | null
    _max: StreamingEventMaxAggregateOutputType | null
  }

  export type StreamingEventAvgAggregateOutputType = {
    partition: number | null
    score: number | null
    retry_count: number | null
  }

  export type StreamingEventSumAggregateOutputType = {
    partition: number | null
    score: number | null
    retry_count: number | null
  }

  export type StreamingEventMinAggregateOutputType = {
    id: string | null
    type: string | null
    partition: number | null
    priority: string | null
    score: number | null
    payload: string | null
    retry_count: number | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StreamingEventMaxAggregateOutputType = {
    id: string | null
    type: string | null
    partition: number | null
    priority: string | null
    score: number | null
    payload: string | null
    retry_count: number | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StreamingEventCountAggregateOutputType = {
    id: number
    type: number
    partition: number
    priority: number
    score: number
    payload: number
    retry_count: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StreamingEventAvgAggregateInputType = {
    partition?: true
    score?: true
    retry_count?: true
  }

  export type StreamingEventSumAggregateInputType = {
    partition?: true
    score?: true
    retry_count?: true
  }

  export type StreamingEventMinAggregateInputType = {
    id?: true
    type?: true
    partition?: true
    priority?: true
    score?: true
    payload?: true
    retry_count?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type StreamingEventMaxAggregateInputType = {
    id?: true
    type?: true
    partition?: true
    priority?: true
    score?: true
    payload?: true
    retry_count?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type StreamingEventCountAggregateInputType = {
    id?: true
    type?: true
    partition?: true
    priority?: true
    score?: true
    payload?: true
    retry_count?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StreamingEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamingEvent to aggregate.
     */
    where?: StreamingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamingEvents to fetch.
     */
    orderBy?: StreamingEventOrderByWithRelationInput | StreamingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StreamingEvents
    **/
    _count?: true | StreamingEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreamingEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreamingEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamingEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamingEventMaxAggregateInputType
  }

  export type GetStreamingEventAggregateType<T extends StreamingEventAggregateArgs> = {
        [P in keyof T & keyof AggregateStreamingEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreamingEvent[P]>
      : GetScalarType<T[P], AggregateStreamingEvent[P]>
  }




  export type StreamingEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamingEventWhereInput
    orderBy?: StreamingEventOrderByWithAggregationInput | StreamingEventOrderByWithAggregationInput[]
    by: StreamingEventScalarFieldEnum[] | StreamingEventScalarFieldEnum
    having?: StreamingEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamingEventCountAggregateInputType | true
    _avg?: StreamingEventAvgAggregateInputType
    _sum?: StreamingEventSumAggregateInputType
    _min?: StreamingEventMinAggregateInputType
    _max?: StreamingEventMaxAggregateInputType
  }

  export type StreamingEventGroupByOutputType = {
    id: string
    type: string
    partition: number
    priority: string
    score: number
    payload: string
    retry_count: number
    status: string
    created_at: Date
    updated_at: Date
    _count: StreamingEventCountAggregateOutputType | null
    _avg: StreamingEventAvgAggregateOutputType | null
    _sum: StreamingEventSumAggregateOutputType | null
    _min: StreamingEventMinAggregateOutputType | null
    _max: StreamingEventMaxAggregateOutputType | null
  }

  type GetStreamingEventGroupByPayload<T extends StreamingEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamingEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamingEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamingEventGroupByOutputType[P]>
            : GetScalarType<T[P], StreamingEventGroupByOutputType[P]>
        }
      >
    >


  export type StreamingEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    partition?: boolean
    priority?: boolean
    score?: boolean
    payload?: boolean
    retry_count?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["streamingEvent"]>

  export type StreamingEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    partition?: boolean
    priority?: boolean
    score?: boolean
    payload?: boolean
    retry_count?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["streamingEvent"]>

  export type StreamingEventSelectScalar = {
    id?: boolean
    type?: boolean
    partition?: boolean
    priority?: boolean
    score?: boolean
    payload?: boolean
    retry_count?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $StreamingEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StreamingEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      partition: number
      priority: string
      score: number
      payload: string
      retry_count: number
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["streamingEvent"]>
    composites: {}
  }

  type StreamingEventGetPayload<S extends boolean | null | undefined | StreamingEventDefaultArgs> = $Result.GetResult<Prisma.$StreamingEventPayload, S>

  type StreamingEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StreamingEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StreamingEventCountAggregateInputType | true
    }

  export interface StreamingEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StreamingEvent'], meta: { name: 'StreamingEvent' } }
    /**
     * Find zero or one StreamingEvent that matches the filter.
     * @param {StreamingEventFindUniqueArgs} args - Arguments to find a StreamingEvent
     * @example
     * // Get one StreamingEvent
     * const streamingEvent = await prisma.streamingEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamingEventFindUniqueArgs>(args: SelectSubset<T, StreamingEventFindUniqueArgs<ExtArgs>>): Prisma__StreamingEventClient<$Result.GetResult<Prisma.$StreamingEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StreamingEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StreamingEventFindUniqueOrThrowArgs} args - Arguments to find a StreamingEvent
     * @example
     * // Get one StreamingEvent
     * const streamingEvent = await prisma.streamingEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamingEventFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamingEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamingEventClient<$Result.GetResult<Prisma.$StreamingEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StreamingEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingEventFindFirstArgs} args - Arguments to find a StreamingEvent
     * @example
     * // Get one StreamingEvent
     * const streamingEvent = await prisma.streamingEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamingEventFindFirstArgs>(args?: SelectSubset<T, StreamingEventFindFirstArgs<ExtArgs>>): Prisma__StreamingEventClient<$Result.GetResult<Prisma.$StreamingEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StreamingEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingEventFindFirstOrThrowArgs} args - Arguments to find a StreamingEvent
     * @example
     * // Get one StreamingEvent
     * const streamingEvent = await prisma.streamingEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamingEventFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamingEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamingEventClient<$Result.GetResult<Prisma.$StreamingEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StreamingEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StreamingEvents
     * const streamingEvents = await prisma.streamingEvent.findMany()
     * 
     * // Get first 10 StreamingEvents
     * const streamingEvents = await prisma.streamingEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamingEventWithIdOnly = await prisma.streamingEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamingEventFindManyArgs>(args?: SelectSubset<T, StreamingEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamingEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StreamingEvent.
     * @param {StreamingEventCreateArgs} args - Arguments to create a StreamingEvent.
     * @example
     * // Create one StreamingEvent
     * const StreamingEvent = await prisma.streamingEvent.create({
     *   data: {
     *     // ... data to create a StreamingEvent
     *   }
     * })
     * 
     */
    create<T extends StreamingEventCreateArgs>(args: SelectSubset<T, StreamingEventCreateArgs<ExtArgs>>): Prisma__StreamingEventClient<$Result.GetResult<Prisma.$StreamingEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StreamingEvents.
     * @param {StreamingEventCreateManyArgs} args - Arguments to create many StreamingEvents.
     * @example
     * // Create many StreamingEvents
     * const streamingEvent = await prisma.streamingEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamingEventCreateManyArgs>(args?: SelectSubset<T, StreamingEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StreamingEvents and returns the data saved in the database.
     * @param {StreamingEventCreateManyAndReturnArgs} args - Arguments to create many StreamingEvents.
     * @example
     * // Create many StreamingEvents
     * const streamingEvent = await prisma.streamingEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StreamingEvents and only return the `id`
     * const streamingEventWithIdOnly = await prisma.streamingEvent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamingEventCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamingEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamingEventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StreamingEvent.
     * @param {StreamingEventDeleteArgs} args - Arguments to delete one StreamingEvent.
     * @example
     * // Delete one StreamingEvent
     * const StreamingEvent = await prisma.streamingEvent.delete({
     *   where: {
     *     // ... filter to delete one StreamingEvent
     *   }
     * })
     * 
     */
    delete<T extends StreamingEventDeleteArgs>(args: SelectSubset<T, StreamingEventDeleteArgs<ExtArgs>>): Prisma__StreamingEventClient<$Result.GetResult<Prisma.$StreamingEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StreamingEvent.
     * @param {StreamingEventUpdateArgs} args - Arguments to update one StreamingEvent.
     * @example
     * // Update one StreamingEvent
     * const streamingEvent = await prisma.streamingEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamingEventUpdateArgs>(args: SelectSubset<T, StreamingEventUpdateArgs<ExtArgs>>): Prisma__StreamingEventClient<$Result.GetResult<Prisma.$StreamingEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StreamingEvents.
     * @param {StreamingEventDeleteManyArgs} args - Arguments to filter StreamingEvents to delete.
     * @example
     * // Delete a few StreamingEvents
     * const { count } = await prisma.streamingEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamingEventDeleteManyArgs>(args?: SelectSubset<T, StreamingEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamingEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StreamingEvents
     * const streamingEvent = await prisma.streamingEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamingEventUpdateManyArgs>(args: SelectSubset<T, StreamingEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StreamingEvent.
     * @param {StreamingEventUpsertArgs} args - Arguments to update or create a StreamingEvent.
     * @example
     * // Update or create a StreamingEvent
     * const streamingEvent = await prisma.streamingEvent.upsert({
     *   create: {
     *     // ... data to create a StreamingEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StreamingEvent we want to update
     *   }
     * })
     */
    upsert<T extends StreamingEventUpsertArgs>(args: SelectSubset<T, StreamingEventUpsertArgs<ExtArgs>>): Prisma__StreamingEventClient<$Result.GetResult<Prisma.$StreamingEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StreamingEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingEventCountArgs} args - Arguments to filter StreamingEvents to count.
     * @example
     * // Count the number of StreamingEvents
     * const count = await prisma.streamingEvent.count({
     *   where: {
     *     // ... the filter for the StreamingEvents we want to count
     *   }
     * })
    **/
    count<T extends StreamingEventCountArgs>(
      args?: Subset<T, StreamingEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamingEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StreamingEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreamingEventAggregateArgs>(args: Subset<T, StreamingEventAggregateArgs>): Prisma.PrismaPromise<GetStreamingEventAggregateType<T>>

    /**
     * Group by StreamingEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreamingEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamingEventGroupByArgs['orderBy'] }
        : { orderBy?: StreamingEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreamingEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamingEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StreamingEvent model
   */
  readonly fields: StreamingEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StreamingEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamingEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StreamingEvent model
   */ 
  interface StreamingEventFieldRefs {
    readonly id: FieldRef<"StreamingEvent", 'String'>
    readonly type: FieldRef<"StreamingEvent", 'String'>
    readonly partition: FieldRef<"StreamingEvent", 'Int'>
    readonly priority: FieldRef<"StreamingEvent", 'String'>
    readonly score: FieldRef<"StreamingEvent", 'Int'>
    readonly payload: FieldRef<"StreamingEvent", 'String'>
    readonly retry_count: FieldRef<"StreamingEvent", 'Int'>
    readonly status: FieldRef<"StreamingEvent", 'String'>
    readonly created_at: FieldRef<"StreamingEvent", 'DateTime'>
    readonly updated_at: FieldRef<"StreamingEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StreamingEvent findUnique
   */
  export type StreamingEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingEvent
     */
    select?: StreamingEventSelect<ExtArgs> | null
    /**
     * Filter, which StreamingEvent to fetch.
     */
    where: StreamingEventWhereUniqueInput
  }

  /**
   * StreamingEvent findUniqueOrThrow
   */
  export type StreamingEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingEvent
     */
    select?: StreamingEventSelect<ExtArgs> | null
    /**
     * Filter, which StreamingEvent to fetch.
     */
    where: StreamingEventWhereUniqueInput
  }

  /**
   * StreamingEvent findFirst
   */
  export type StreamingEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingEvent
     */
    select?: StreamingEventSelect<ExtArgs> | null
    /**
     * Filter, which StreamingEvent to fetch.
     */
    where?: StreamingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamingEvents to fetch.
     */
    orderBy?: StreamingEventOrderByWithRelationInput | StreamingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamingEvents.
     */
    cursor?: StreamingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamingEvents.
     */
    distinct?: StreamingEventScalarFieldEnum | StreamingEventScalarFieldEnum[]
  }

  /**
   * StreamingEvent findFirstOrThrow
   */
  export type StreamingEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingEvent
     */
    select?: StreamingEventSelect<ExtArgs> | null
    /**
     * Filter, which StreamingEvent to fetch.
     */
    where?: StreamingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamingEvents to fetch.
     */
    orderBy?: StreamingEventOrderByWithRelationInput | StreamingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamingEvents.
     */
    cursor?: StreamingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamingEvents.
     */
    distinct?: StreamingEventScalarFieldEnum | StreamingEventScalarFieldEnum[]
  }

  /**
   * StreamingEvent findMany
   */
  export type StreamingEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingEvent
     */
    select?: StreamingEventSelect<ExtArgs> | null
    /**
     * Filter, which StreamingEvents to fetch.
     */
    where?: StreamingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamingEvents to fetch.
     */
    orderBy?: StreamingEventOrderByWithRelationInput | StreamingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StreamingEvents.
     */
    cursor?: StreamingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamingEvents.
     */
    skip?: number
    distinct?: StreamingEventScalarFieldEnum | StreamingEventScalarFieldEnum[]
  }

  /**
   * StreamingEvent create
   */
  export type StreamingEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingEvent
     */
    select?: StreamingEventSelect<ExtArgs> | null
    /**
     * The data needed to create a StreamingEvent.
     */
    data: XOR<StreamingEventCreateInput, StreamingEventUncheckedCreateInput>
  }

  /**
   * StreamingEvent createMany
   */
  export type StreamingEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StreamingEvents.
     */
    data: StreamingEventCreateManyInput | StreamingEventCreateManyInput[]
  }

  /**
   * StreamingEvent createManyAndReturn
   */
  export type StreamingEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingEvent
     */
    select?: StreamingEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StreamingEvents.
     */
    data: StreamingEventCreateManyInput | StreamingEventCreateManyInput[]
  }

  /**
   * StreamingEvent update
   */
  export type StreamingEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingEvent
     */
    select?: StreamingEventSelect<ExtArgs> | null
    /**
     * The data needed to update a StreamingEvent.
     */
    data: XOR<StreamingEventUpdateInput, StreamingEventUncheckedUpdateInput>
    /**
     * Choose, which StreamingEvent to update.
     */
    where: StreamingEventWhereUniqueInput
  }

  /**
   * StreamingEvent updateMany
   */
  export type StreamingEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StreamingEvents.
     */
    data: XOR<StreamingEventUpdateManyMutationInput, StreamingEventUncheckedUpdateManyInput>
    /**
     * Filter which StreamingEvents to update
     */
    where?: StreamingEventWhereInput
  }

  /**
   * StreamingEvent upsert
   */
  export type StreamingEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingEvent
     */
    select?: StreamingEventSelect<ExtArgs> | null
    /**
     * The filter to search for the StreamingEvent to update in case it exists.
     */
    where: StreamingEventWhereUniqueInput
    /**
     * In case the StreamingEvent found by the `where` argument doesn't exist, create a new StreamingEvent with this data.
     */
    create: XOR<StreamingEventCreateInput, StreamingEventUncheckedCreateInput>
    /**
     * In case the StreamingEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamingEventUpdateInput, StreamingEventUncheckedUpdateInput>
  }

  /**
   * StreamingEvent delete
   */
  export type StreamingEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingEvent
     */
    select?: StreamingEventSelect<ExtArgs> | null
    /**
     * Filter which StreamingEvent to delete.
     */
    where: StreamingEventWhereUniqueInput
  }

  /**
   * StreamingEvent deleteMany
   */
  export type StreamingEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamingEvents to delete
     */
    where?: StreamingEventWhereInput
  }

  /**
   * StreamingEvent without action
   */
  export type StreamingEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingEvent
     */
    select?: StreamingEventSelect<ExtArgs> | null
  }


  /**
   * Model LoadPattern
   */

  export type AggregateLoadPattern = {
    _count: LoadPatternCountAggregateOutputType | null
    _avg: LoadPatternAvgAggregateOutputType | null
    _sum: LoadPatternSumAggregateOutputType | null
    _min: LoadPatternMinAggregateOutputType | null
    _max: LoadPatternMaxAggregateOutputType | null
  }

  export type LoadPatternAvgAggregateOutputType = {
    id: number | null
    hour: number | null
    avg_load: number | null
    peak_load: number | null
  }

  export type LoadPatternSumAggregateOutputType = {
    id: number | null
    hour: number | null
    avg_load: number | null
    peak_load: number | null
  }

  export type LoadPatternMinAggregateOutputType = {
    id: number | null
    hour: number | null
    avg_load: number | null
    peak_load: number | null
    updated_at: Date | null
  }

  export type LoadPatternMaxAggregateOutputType = {
    id: number | null
    hour: number | null
    avg_load: number | null
    peak_load: number | null
    updated_at: Date | null
  }

  export type LoadPatternCountAggregateOutputType = {
    id: number
    hour: number
    avg_load: number
    peak_load: number
    updated_at: number
    _all: number
  }


  export type LoadPatternAvgAggregateInputType = {
    id?: true
    hour?: true
    avg_load?: true
    peak_load?: true
  }

  export type LoadPatternSumAggregateInputType = {
    id?: true
    hour?: true
    avg_load?: true
    peak_load?: true
  }

  export type LoadPatternMinAggregateInputType = {
    id?: true
    hour?: true
    avg_load?: true
    peak_load?: true
    updated_at?: true
  }

  export type LoadPatternMaxAggregateInputType = {
    id?: true
    hour?: true
    avg_load?: true
    peak_load?: true
    updated_at?: true
  }

  export type LoadPatternCountAggregateInputType = {
    id?: true
    hour?: true
    avg_load?: true
    peak_load?: true
    updated_at?: true
    _all?: true
  }

  export type LoadPatternAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoadPattern to aggregate.
     */
    where?: LoadPatternWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoadPatterns to fetch.
     */
    orderBy?: LoadPatternOrderByWithRelationInput | LoadPatternOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoadPatternWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoadPatterns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoadPatterns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoadPatterns
    **/
    _count?: true | LoadPatternCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoadPatternAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoadPatternSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoadPatternMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoadPatternMaxAggregateInputType
  }

  export type GetLoadPatternAggregateType<T extends LoadPatternAggregateArgs> = {
        [P in keyof T & keyof AggregateLoadPattern]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoadPattern[P]>
      : GetScalarType<T[P], AggregateLoadPattern[P]>
  }




  export type LoadPatternGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoadPatternWhereInput
    orderBy?: LoadPatternOrderByWithAggregationInput | LoadPatternOrderByWithAggregationInput[]
    by: LoadPatternScalarFieldEnum[] | LoadPatternScalarFieldEnum
    having?: LoadPatternScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoadPatternCountAggregateInputType | true
    _avg?: LoadPatternAvgAggregateInputType
    _sum?: LoadPatternSumAggregateInputType
    _min?: LoadPatternMinAggregateInputType
    _max?: LoadPatternMaxAggregateInputType
  }

  export type LoadPatternGroupByOutputType = {
    id: number
    hour: number
    avg_load: number
    peak_load: number
    updated_at: Date
    _count: LoadPatternCountAggregateOutputType | null
    _avg: LoadPatternAvgAggregateOutputType | null
    _sum: LoadPatternSumAggregateOutputType | null
    _min: LoadPatternMinAggregateOutputType | null
    _max: LoadPatternMaxAggregateOutputType | null
  }

  type GetLoadPatternGroupByPayload<T extends LoadPatternGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoadPatternGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoadPatternGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoadPatternGroupByOutputType[P]>
            : GetScalarType<T[P], LoadPatternGroupByOutputType[P]>
        }
      >
    >


  export type LoadPatternSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hour?: boolean
    avg_load?: boolean
    peak_load?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["loadPattern"]>

  export type LoadPatternSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hour?: boolean
    avg_load?: boolean
    peak_load?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["loadPattern"]>

  export type LoadPatternSelectScalar = {
    id?: boolean
    hour?: boolean
    avg_load?: boolean
    peak_load?: boolean
    updated_at?: boolean
  }


  export type $LoadPatternPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoadPattern"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hour: number
      avg_load: number
      peak_load: number
      updated_at: Date
    }, ExtArgs["result"]["loadPattern"]>
    composites: {}
  }

  type LoadPatternGetPayload<S extends boolean | null | undefined | LoadPatternDefaultArgs> = $Result.GetResult<Prisma.$LoadPatternPayload, S>

  type LoadPatternCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LoadPatternFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LoadPatternCountAggregateInputType | true
    }

  export interface LoadPatternDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoadPattern'], meta: { name: 'LoadPattern' } }
    /**
     * Find zero or one LoadPattern that matches the filter.
     * @param {LoadPatternFindUniqueArgs} args - Arguments to find a LoadPattern
     * @example
     * // Get one LoadPattern
     * const loadPattern = await prisma.loadPattern.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoadPatternFindUniqueArgs>(args: SelectSubset<T, LoadPatternFindUniqueArgs<ExtArgs>>): Prisma__LoadPatternClient<$Result.GetResult<Prisma.$LoadPatternPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LoadPattern that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LoadPatternFindUniqueOrThrowArgs} args - Arguments to find a LoadPattern
     * @example
     * // Get one LoadPattern
     * const loadPattern = await prisma.loadPattern.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoadPatternFindUniqueOrThrowArgs>(args: SelectSubset<T, LoadPatternFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoadPatternClient<$Result.GetResult<Prisma.$LoadPatternPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LoadPattern that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoadPatternFindFirstArgs} args - Arguments to find a LoadPattern
     * @example
     * // Get one LoadPattern
     * const loadPattern = await prisma.loadPattern.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoadPatternFindFirstArgs>(args?: SelectSubset<T, LoadPatternFindFirstArgs<ExtArgs>>): Prisma__LoadPatternClient<$Result.GetResult<Prisma.$LoadPatternPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LoadPattern that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoadPatternFindFirstOrThrowArgs} args - Arguments to find a LoadPattern
     * @example
     * // Get one LoadPattern
     * const loadPattern = await prisma.loadPattern.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoadPatternFindFirstOrThrowArgs>(args?: SelectSubset<T, LoadPatternFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoadPatternClient<$Result.GetResult<Prisma.$LoadPatternPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LoadPatterns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoadPatternFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoadPatterns
     * const loadPatterns = await prisma.loadPattern.findMany()
     * 
     * // Get first 10 LoadPatterns
     * const loadPatterns = await prisma.loadPattern.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loadPatternWithIdOnly = await prisma.loadPattern.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoadPatternFindManyArgs>(args?: SelectSubset<T, LoadPatternFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoadPatternPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LoadPattern.
     * @param {LoadPatternCreateArgs} args - Arguments to create a LoadPattern.
     * @example
     * // Create one LoadPattern
     * const LoadPattern = await prisma.loadPattern.create({
     *   data: {
     *     // ... data to create a LoadPattern
     *   }
     * })
     * 
     */
    create<T extends LoadPatternCreateArgs>(args: SelectSubset<T, LoadPatternCreateArgs<ExtArgs>>): Prisma__LoadPatternClient<$Result.GetResult<Prisma.$LoadPatternPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LoadPatterns.
     * @param {LoadPatternCreateManyArgs} args - Arguments to create many LoadPatterns.
     * @example
     * // Create many LoadPatterns
     * const loadPattern = await prisma.loadPattern.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoadPatternCreateManyArgs>(args?: SelectSubset<T, LoadPatternCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoadPatterns and returns the data saved in the database.
     * @param {LoadPatternCreateManyAndReturnArgs} args - Arguments to create many LoadPatterns.
     * @example
     * // Create many LoadPatterns
     * const loadPattern = await prisma.loadPattern.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoadPatterns and only return the `id`
     * const loadPatternWithIdOnly = await prisma.loadPattern.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoadPatternCreateManyAndReturnArgs>(args?: SelectSubset<T, LoadPatternCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoadPatternPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LoadPattern.
     * @param {LoadPatternDeleteArgs} args - Arguments to delete one LoadPattern.
     * @example
     * // Delete one LoadPattern
     * const LoadPattern = await prisma.loadPattern.delete({
     *   where: {
     *     // ... filter to delete one LoadPattern
     *   }
     * })
     * 
     */
    delete<T extends LoadPatternDeleteArgs>(args: SelectSubset<T, LoadPatternDeleteArgs<ExtArgs>>): Prisma__LoadPatternClient<$Result.GetResult<Prisma.$LoadPatternPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LoadPattern.
     * @param {LoadPatternUpdateArgs} args - Arguments to update one LoadPattern.
     * @example
     * // Update one LoadPattern
     * const loadPattern = await prisma.loadPattern.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoadPatternUpdateArgs>(args: SelectSubset<T, LoadPatternUpdateArgs<ExtArgs>>): Prisma__LoadPatternClient<$Result.GetResult<Prisma.$LoadPatternPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LoadPatterns.
     * @param {LoadPatternDeleteManyArgs} args - Arguments to filter LoadPatterns to delete.
     * @example
     * // Delete a few LoadPatterns
     * const { count } = await prisma.loadPattern.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoadPatternDeleteManyArgs>(args?: SelectSubset<T, LoadPatternDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoadPatterns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoadPatternUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoadPatterns
     * const loadPattern = await prisma.loadPattern.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoadPatternUpdateManyArgs>(args: SelectSubset<T, LoadPatternUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LoadPattern.
     * @param {LoadPatternUpsertArgs} args - Arguments to update or create a LoadPattern.
     * @example
     * // Update or create a LoadPattern
     * const loadPattern = await prisma.loadPattern.upsert({
     *   create: {
     *     // ... data to create a LoadPattern
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoadPattern we want to update
     *   }
     * })
     */
    upsert<T extends LoadPatternUpsertArgs>(args: SelectSubset<T, LoadPatternUpsertArgs<ExtArgs>>): Prisma__LoadPatternClient<$Result.GetResult<Prisma.$LoadPatternPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LoadPatterns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoadPatternCountArgs} args - Arguments to filter LoadPatterns to count.
     * @example
     * // Count the number of LoadPatterns
     * const count = await prisma.loadPattern.count({
     *   where: {
     *     // ... the filter for the LoadPatterns we want to count
     *   }
     * })
    **/
    count<T extends LoadPatternCountArgs>(
      args?: Subset<T, LoadPatternCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoadPatternCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoadPattern.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoadPatternAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoadPatternAggregateArgs>(args: Subset<T, LoadPatternAggregateArgs>): Prisma.PrismaPromise<GetLoadPatternAggregateType<T>>

    /**
     * Group by LoadPattern.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoadPatternGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoadPatternGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoadPatternGroupByArgs['orderBy'] }
        : { orderBy?: LoadPatternGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoadPatternGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoadPatternGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoadPattern model
   */
  readonly fields: LoadPatternFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoadPattern.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoadPatternClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoadPattern model
   */ 
  interface LoadPatternFieldRefs {
    readonly id: FieldRef<"LoadPattern", 'Int'>
    readonly hour: FieldRef<"LoadPattern", 'Int'>
    readonly avg_load: FieldRef<"LoadPattern", 'Float'>
    readonly peak_load: FieldRef<"LoadPattern", 'Float'>
    readonly updated_at: FieldRef<"LoadPattern", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoadPattern findUnique
   */
  export type LoadPatternFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoadPattern
     */
    select?: LoadPatternSelect<ExtArgs> | null
    /**
     * Filter, which LoadPattern to fetch.
     */
    where: LoadPatternWhereUniqueInput
  }

  /**
   * LoadPattern findUniqueOrThrow
   */
  export type LoadPatternFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoadPattern
     */
    select?: LoadPatternSelect<ExtArgs> | null
    /**
     * Filter, which LoadPattern to fetch.
     */
    where: LoadPatternWhereUniqueInput
  }

  /**
   * LoadPattern findFirst
   */
  export type LoadPatternFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoadPattern
     */
    select?: LoadPatternSelect<ExtArgs> | null
    /**
     * Filter, which LoadPattern to fetch.
     */
    where?: LoadPatternWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoadPatterns to fetch.
     */
    orderBy?: LoadPatternOrderByWithRelationInput | LoadPatternOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoadPatterns.
     */
    cursor?: LoadPatternWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoadPatterns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoadPatterns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoadPatterns.
     */
    distinct?: LoadPatternScalarFieldEnum | LoadPatternScalarFieldEnum[]
  }

  /**
   * LoadPattern findFirstOrThrow
   */
  export type LoadPatternFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoadPattern
     */
    select?: LoadPatternSelect<ExtArgs> | null
    /**
     * Filter, which LoadPattern to fetch.
     */
    where?: LoadPatternWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoadPatterns to fetch.
     */
    orderBy?: LoadPatternOrderByWithRelationInput | LoadPatternOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoadPatterns.
     */
    cursor?: LoadPatternWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoadPatterns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoadPatterns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoadPatterns.
     */
    distinct?: LoadPatternScalarFieldEnum | LoadPatternScalarFieldEnum[]
  }

  /**
   * LoadPattern findMany
   */
  export type LoadPatternFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoadPattern
     */
    select?: LoadPatternSelect<ExtArgs> | null
    /**
     * Filter, which LoadPatterns to fetch.
     */
    where?: LoadPatternWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoadPatterns to fetch.
     */
    orderBy?: LoadPatternOrderByWithRelationInput | LoadPatternOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoadPatterns.
     */
    cursor?: LoadPatternWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoadPatterns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoadPatterns.
     */
    skip?: number
    distinct?: LoadPatternScalarFieldEnum | LoadPatternScalarFieldEnum[]
  }

  /**
   * LoadPattern create
   */
  export type LoadPatternCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoadPattern
     */
    select?: LoadPatternSelect<ExtArgs> | null
    /**
     * The data needed to create a LoadPattern.
     */
    data: XOR<LoadPatternCreateInput, LoadPatternUncheckedCreateInput>
  }

  /**
   * LoadPattern createMany
   */
  export type LoadPatternCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoadPatterns.
     */
    data: LoadPatternCreateManyInput | LoadPatternCreateManyInput[]
  }

  /**
   * LoadPattern createManyAndReturn
   */
  export type LoadPatternCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoadPattern
     */
    select?: LoadPatternSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LoadPatterns.
     */
    data: LoadPatternCreateManyInput | LoadPatternCreateManyInput[]
  }

  /**
   * LoadPattern update
   */
  export type LoadPatternUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoadPattern
     */
    select?: LoadPatternSelect<ExtArgs> | null
    /**
     * The data needed to update a LoadPattern.
     */
    data: XOR<LoadPatternUpdateInput, LoadPatternUncheckedUpdateInput>
    /**
     * Choose, which LoadPattern to update.
     */
    where: LoadPatternWhereUniqueInput
  }

  /**
   * LoadPattern updateMany
   */
  export type LoadPatternUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoadPatterns.
     */
    data: XOR<LoadPatternUpdateManyMutationInput, LoadPatternUncheckedUpdateManyInput>
    /**
     * Filter which LoadPatterns to update
     */
    where?: LoadPatternWhereInput
  }

  /**
   * LoadPattern upsert
   */
  export type LoadPatternUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoadPattern
     */
    select?: LoadPatternSelect<ExtArgs> | null
    /**
     * The filter to search for the LoadPattern to update in case it exists.
     */
    where: LoadPatternWhereUniqueInput
    /**
     * In case the LoadPattern found by the `where` argument doesn't exist, create a new LoadPattern with this data.
     */
    create: XOR<LoadPatternCreateInput, LoadPatternUncheckedCreateInput>
    /**
     * In case the LoadPattern was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoadPatternUpdateInput, LoadPatternUncheckedUpdateInput>
  }

  /**
   * LoadPattern delete
   */
  export type LoadPatternDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoadPattern
     */
    select?: LoadPatternSelect<ExtArgs> | null
    /**
     * Filter which LoadPattern to delete.
     */
    where: LoadPatternWhereUniqueInput
  }

  /**
   * LoadPattern deleteMany
   */
  export type LoadPatternDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoadPatterns to delete
     */
    where?: LoadPatternWhereInput
  }

  /**
   * LoadPattern without action
   */
  export type LoadPatternDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoadPattern
     */
    select?: LoadPatternSelect<ExtArgs> | null
  }


  /**
   * Model RetryPerformance
   */

  export type AggregateRetryPerformance = {
    _count: RetryPerformanceCountAggregateOutputType | null
    _avg: RetryPerformanceAvgAggregateOutputType | null
    _sum: RetryPerformanceSumAggregateOutputType | null
    _min: RetryPerformanceMinAggregateOutputType | null
    _max: RetryPerformanceMaxAggregateOutputType | null
  }

  export type RetryPerformanceAvgAggregateOutputType = {
    id: number | null
    delay_range: number | null
    success_count: number | null
    failure_count: number | null
  }

  export type RetryPerformanceSumAggregateOutputType = {
    id: number | null
    delay_range: number | null
    success_count: number | null
    failure_count: number | null
  }

  export type RetryPerformanceMinAggregateOutputType = {
    id: number | null
    delay_range: number | null
    success_count: number | null
    failure_count: number | null
    updated_at: Date | null
  }

  export type RetryPerformanceMaxAggregateOutputType = {
    id: number | null
    delay_range: number | null
    success_count: number | null
    failure_count: number | null
    updated_at: Date | null
  }

  export type RetryPerformanceCountAggregateOutputType = {
    id: number
    delay_range: number
    success_count: number
    failure_count: number
    updated_at: number
    _all: number
  }


  export type RetryPerformanceAvgAggregateInputType = {
    id?: true
    delay_range?: true
    success_count?: true
    failure_count?: true
  }

  export type RetryPerformanceSumAggregateInputType = {
    id?: true
    delay_range?: true
    success_count?: true
    failure_count?: true
  }

  export type RetryPerformanceMinAggregateInputType = {
    id?: true
    delay_range?: true
    success_count?: true
    failure_count?: true
    updated_at?: true
  }

  export type RetryPerformanceMaxAggregateInputType = {
    id?: true
    delay_range?: true
    success_count?: true
    failure_count?: true
    updated_at?: true
  }

  export type RetryPerformanceCountAggregateInputType = {
    id?: true
    delay_range?: true
    success_count?: true
    failure_count?: true
    updated_at?: true
    _all?: true
  }

  export type RetryPerformanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RetryPerformance to aggregate.
     */
    where?: RetryPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RetryPerformances to fetch.
     */
    orderBy?: RetryPerformanceOrderByWithRelationInput | RetryPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RetryPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RetryPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RetryPerformances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RetryPerformances
    **/
    _count?: true | RetryPerformanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RetryPerformanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RetryPerformanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RetryPerformanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RetryPerformanceMaxAggregateInputType
  }

  export type GetRetryPerformanceAggregateType<T extends RetryPerformanceAggregateArgs> = {
        [P in keyof T & keyof AggregateRetryPerformance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRetryPerformance[P]>
      : GetScalarType<T[P], AggregateRetryPerformance[P]>
  }




  export type RetryPerformanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RetryPerformanceWhereInput
    orderBy?: RetryPerformanceOrderByWithAggregationInput | RetryPerformanceOrderByWithAggregationInput[]
    by: RetryPerformanceScalarFieldEnum[] | RetryPerformanceScalarFieldEnum
    having?: RetryPerformanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RetryPerformanceCountAggregateInputType | true
    _avg?: RetryPerformanceAvgAggregateInputType
    _sum?: RetryPerformanceSumAggregateInputType
    _min?: RetryPerformanceMinAggregateInputType
    _max?: RetryPerformanceMaxAggregateInputType
  }

  export type RetryPerformanceGroupByOutputType = {
    id: number
    delay_range: number
    success_count: number
    failure_count: number
    updated_at: Date
    _count: RetryPerformanceCountAggregateOutputType | null
    _avg: RetryPerformanceAvgAggregateOutputType | null
    _sum: RetryPerformanceSumAggregateOutputType | null
    _min: RetryPerformanceMinAggregateOutputType | null
    _max: RetryPerformanceMaxAggregateOutputType | null
  }

  type GetRetryPerformanceGroupByPayload<T extends RetryPerformanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RetryPerformanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RetryPerformanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RetryPerformanceGroupByOutputType[P]>
            : GetScalarType<T[P], RetryPerformanceGroupByOutputType[P]>
        }
      >
    >


  export type RetryPerformanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    delay_range?: boolean
    success_count?: boolean
    failure_count?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["retryPerformance"]>

  export type RetryPerformanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    delay_range?: boolean
    success_count?: boolean
    failure_count?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["retryPerformance"]>

  export type RetryPerformanceSelectScalar = {
    id?: boolean
    delay_range?: boolean
    success_count?: boolean
    failure_count?: boolean
    updated_at?: boolean
  }


  export type $RetryPerformancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RetryPerformance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      delay_range: number
      success_count: number
      failure_count: number
      updated_at: Date
    }, ExtArgs["result"]["retryPerformance"]>
    composites: {}
  }

  type RetryPerformanceGetPayload<S extends boolean | null | undefined | RetryPerformanceDefaultArgs> = $Result.GetResult<Prisma.$RetryPerformancePayload, S>

  type RetryPerformanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RetryPerformanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RetryPerformanceCountAggregateInputType | true
    }

  export interface RetryPerformanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RetryPerformance'], meta: { name: 'RetryPerformance' } }
    /**
     * Find zero or one RetryPerformance that matches the filter.
     * @param {RetryPerformanceFindUniqueArgs} args - Arguments to find a RetryPerformance
     * @example
     * // Get one RetryPerformance
     * const retryPerformance = await prisma.retryPerformance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RetryPerformanceFindUniqueArgs>(args: SelectSubset<T, RetryPerformanceFindUniqueArgs<ExtArgs>>): Prisma__RetryPerformanceClient<$Result.GetResult<Prisma.$RetryPerformancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RetryPerformance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RetryPerformanceFindUniqueOrThrowArgs} args - Arguments to find a RetryPerformance
     * @example
     * // Get one RetryPerformance
     * const retryPerformance = await prisma.retryPerformance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RetryPerformanceFindUniqueOrThrowArgs>(args: SelectSubset<T, RetryPerformanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RetryPerformanceClient<$Result.GetResult<Prisma.$RetryPerformancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RetryPerformance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetryPerformanceFindFirstArgs} args - Arguments to find a RetryPerformance
     * @example
     * // Get one RetryPerformance
     * const retryPerformance = await prisma.retryPerformance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RetryPerformanceFindFirstArgs>(args?: SelectSubset<T, RetryPerformanceFindFirstArgs<ExtArgs>>): Prisma__RetryPerformanceClient<$Result.GetResult<Prisma.$RetryPerformancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RetryPerformance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetryPerformanceFindFirstOrThrowArgs} args - Arguments to find a RetryPerformance
     * @example
     * // Get one RetryPerformance
     * const retryPerformance = await prisma.retryPerformance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RetryPerformanceFindFirstOrThrowArgs>(args?: SelectSubset<T, RetryPerformanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RetryPerformanceClient<$Result.GetResult<Prisma.$RetryPerformancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RetryPerformances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetryPerformanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RetryPerformances
     * const retryPerformances = await prisma.retryPerformance.findMany()
     * 
     * // Get first 10 RetryPerformances
     * const retryPerformances = await prisma.retryPerformance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const retryPerformanceWithIdOnly = await prisma.retryPerformance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RetryPerformanceFindManyArgs>(args?: SelectSubset<T, RetryPerformanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RetryPerformancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RetryPerformance.
     * @param {RetryPerformanceCreateArgs} args - Arguments to create a RetryPerformance.
     * @example
     * // Create one RetryPerformance
     * const RetryPerformance = await prisma.retryPerformance.create({
     *   data: {
     *     // ... data to create a RetryPerformance
     *   }
     * })
     * 
     */
    create<T extends RetryPerformanceCreateArgs>(args: SelectSubset<T, RetryPerformanceCreateArgs<ExtArgs>>): Prisma__RetryPerformanceClient<$Result.GetResult<Prisma.$RetryPerformancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RetryPerformances.
     * @param {RetryPerformanceCreateManyArgs} args - Arguments to create many RetryPerformances.
     * @example
     * // Create many RetryPerformances
     * const retryPerformance = await prisma.retryPerformance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RetryPerformanceCreateManyArgs>(args?: SelectSubset<T, RetryPerformanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RetryPerformances and returns the data saved in the database.
     * @param {RetryPerformanceCreateManyAndReturnArgs} args - Arguments to create many RetryPerformances.
     * @example
     * // Create many RetryPerformances
     * const retryPerformance = await prisma.retryPerformance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RetryPerformances and only return the `id`
     * const retryPerformanceWithIdOnly = await prisma.retryPerformance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RetryPerformanceCreateManyAndReturnArgs>(args?: SelectSubset<T, RetryPerformanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RetryPerformancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RetryPerformance.
     * @param {RetryPerformanceDeleteArgs} args - Arguments to delete one RetryPerformance.
     * @example
     * // Delete one RetryPerformance
     * const RetryPerformance = await prisma.retryPerformance.delete({
     *   where: {
     *     // ... filter to delete one RetryPerformance
     *   }
     * })
     * 
     */
    delete<T extends RetryPerformanceDeleteArgs>(args: SelectSubset<T, RetryPerformanceDeleteArgs<ExtArgs>>): Prisma__RetryPerformanceClient<$Result.GetResult<Prisma.$RetryPerformancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RetryPerformance.
     * @param {RetryPerformanceUpdateArgs} args - Arguments to update one RetryPerformance.
     * @example
     * // Update one RetryPerformance
     * const retryPerformance = await prisma.retryPerformance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RetryPerformanceUpdateArgs>(args: SelectSubset<T, RetryPerformanceUpdateArgs<ExtArgs>>): Prisma__RetryPerformanceClient<$Result.GetResult<Prisma.$RetryPerformancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RetryPerformances.
     * @param {RetryPerformanceDeleteManyArgs} args - Arguments to filter RetryPerformances to delete.
     * @example
     * // Delete a few RetryPerformances
     * const { count } = await prisma.retryPerformance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RetryPerformanceDeleteManyArgs>(args?: SelectSubset<T, RetryPerformanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RetryPerformances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetryPerformanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RetryPerformances
     * const retryPerformance = await prisma.retryPerformance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RetryPerformanceUpdateManyArgs>(args: SelectSubset<T, RetryPerformanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RetryPerformance.
     * @param {RetryPerformanceUpsertArgs} args - Arguments to update or create a RetryPerformance.
     * @example
     * // Update or create a RetryPerformance
     * const retryPerformance = await prisma.retryPerformance.upsert({
     *   create: {
     *     // ... data to create a RetryPerformance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RetryPerformance we want to update
     *   }
     * })
     */
    upsert<T extends RetryPerformanceUpsertArgs>(args: SelectSubset<T, RetryPerformanceUpsertArgs<ExtArgs>>): Prisma__RetryPerformanceClient<$Result.GetResult<Prisma.$RetryPerformancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RetryPerformances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetryPerformanceCountArgs} args - Arguments to filter RetryPerformances to count.
     * @example
     * // Count the number of RetryPerformances
     * const count = await prisma.retryPerformance.count({
     *   where: {
     *     // ... the filter for the RetryPerformances we want to count
     *   }
     * })
    **/
    count<T extends RetryPerformanceCountArgs>(
      args?: Subset<T, RetryPerformanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RetryPerformanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RetryPerformance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetryPerformanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RetryPerformanceAggregateArgs>(args: Subset<T, RetryPerformanceAggregateArgs>): Prisma.PrismaPromise<GetRetryPerformanceAggregateType<T>>

    /**
     * Group by RetryPerformance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetryPerformanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RetryPerformanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RetryPerformanceGroupByArgs['orderBy'] }
        : { orderBy?: RetryPerformanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RetryPerformanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRetryPerformanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RetryPerformance model
   */
  readonly fields: RetryPerformanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RetryPerformance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RetryPerformanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RetryPerformance model
   */ 
  interface RetryPerformanceFieldRefs {
    readonly id: FieldRef<"RetryPerformance", 'Int'>
    readonly delay_range: FieldRef<"RetryPerformance", 'Int'>
    readonly success_count: FieldRef<"RetryPerformance", 'Int'>
    readonly failure_count: FieldRef<"RetryPerformance", 'Int'>
    readonly updated_at: FieldRef<"RetryPerformance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RetryPerformance findUnique
   */
  export type RetryPerformanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryPerformance
     */
    select?: RetryPerformanceSelect<ExtArgs> | null
    /**
     * Filter, which RetryPerformance to fetch.
     */
    where: RetryPerformanceWhereUniqueInput
  }

  /**
   * RetryPerformance findUniqueOrThrow
   */
  export type RetryPerformanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryPerformance
     */
    select?: RetryPerformanceSelect<ExtArgs> | null
    /**
     * Filter, which RetryPerformance to fetch.
     */
    where: RetryPerformanceWhereUniqueInput
  }

  /**
   * RetryPerformance findFirst
   */
  export type RetryPerformanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryPerformance
     */
    select?: RetryPerformanceSelect<ExtArgs> | null
    /**
     * Filter, which RetryPerformance to fetch.
     */
    where?: RetryPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RetryPerformances to fetch.
     */
    orderBy?: RetryPerformanceOrderByWithRelationInput | RetryPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RetryPerformances.
     */
    cursor?: RetryPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RetryPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RetryPerformances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RetryPerformances.
     */
    distinct?: RetryPerformanceScalarFieldEnum | RetryPerformanceScalarFieldEnum[]
  }

  /**
   * RetryPerformance findFirstOrThrow
   */
  export type RetryPerformanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryPerformance
     */
    select?: RetryPerformanceSelect<ExtArgs> | null
    /**
     * Filter, which RetryPerformance to fetch.
     */
    where?: RetryPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RetryPerformances to fetch.
     */
    orderBy?: RetryPerformanceOrderByWithRelationInput | RetryPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RetryPerformances.
     */
    cursor?: RetryPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RetryPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RetryPerformances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RetryPerformances.
     */
    distinct?: RetryPerformanceScalarFieldEnum | RetryPerformanceScalarFieldEnum[]
  }

  /**
   * RetryPerformance findMany
   */
  export type RetryPerformanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryPerformance
     */
    select?: RetryPerformanceSelect<ExtArgs> | null
    /**
     * Filter, which RetryPerformances to fetch.
     */
    where?: RetryPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RetryPerformances to fetch.
     */
    orderBy?: RetryPerformanceOrderByWithRelationInput | RetryPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RetryPerformances.
     */
    cursor?: RetryPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RetryPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RetryPerformances.
     */
    skip?: number
    distinct?: RetryPerformanceScalarFieldEnum | RetryPerformanceScalarFieldEnum[]
  }

  /**
   * RetryPerformance create
   */
  export type RetryPerformanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryPerformance
     */
    select?: RetryPerformanceSelect<ExtArgs> | null
    /**
     * The data needed to create a RetryPerformance.
     */
    data: XOR<RetryPerformanceCreateInput, RetryPerformanceUncheckedCreateInput>
  }

  /**
   * RetryPerformance createMany
   */
  export type RetryPerformanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RetryPerformances.
     */
    data: RetryPerformanceCreateManyInput | RetryPerformanceCreateManyInput[]
  }

  /**
   * RetryPerformance createManyAndReturn
   */
  export type RetryPerformanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryPerformance
     */
    select?: RetryPerformanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RetryPerformances.
     */
    data: RetryPerformanceCreateManyInput | RetryPerformanceCreateManyInput[]
  }

  /**
   * RetryPerformance update
   */
  export type RetryPerformanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryPerformance
     */
    select?: RetryPerformanceSelect<ExtArgs> | null
    /**
     * The data needed to update a RetryPerformance.
     */
    data: XOR<RetryPerformanceUpdateInput, RetryPerformanceUncheckedUpdateInput>
    /**
     * Choose, which RetryPerformance to update.
     */
    where: RetryPerformanceWhereUniqueInput
  }

  /**
   * RetryPerformance updateMany
   */
  export type RetryPerformanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RetryPerformances.
     */
    data: XOR<RetryPerformanceUpdateManyMutationInput, RetryPerformanceUncheckedUpdateManyInput>
    /**
     * Filter which RetryPerformances to update
     */
    where?: RetryPerformanceWhereInput
  }

  /**
   * RetryPerformance upsert
   */
  export type RetryPerformanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryPerformance
     */
    select?: RetryPerformanceSelect<ExtArgs> | null
    /**
     * The filter to search for the RetryPerformance to update in case it exists.
     */
    where: RetryPerformanceWhereUniqueInput
    /**
     * In case the RetryPerformance found by the `where` argument doesn't exist, create a new RetryPerformance with this data.
     */
    create: XOR<RetryPerformanceCreateInput, RetryPerformanceUncheckedCreateInput>
    /**
     * In case the RetryPerformance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RetryPerformanceUpdateInput, RetryPerformanceUncheckedUpdateInput>
  }

  /**
   * RetryPerformance delete
   */
  export type RetryPerformanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryPerformance
     */
    select?: RetryPerformanceSelect<ExtArgs> | null
    /**
     * Filter which RetryPerformance to delete.
     */
    where: RetryPerformanceWhereUniqueInput
  }

  /**
   * RetryPerformance deleteMany
   */
  export type RetryPerformanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RetryPerformances to delete
     */
    where?: RetryPerformanceWhereInput
  }

  /**
   * RetryPerformance without action
   */
  export type RetryPerformanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryPerformance
     */
    select?: RetryPerformanceSelect<ExtArgs> | null
  }


  /**
   * Model ExecutionRecord
   */

  export type AggregateExecutionRecord = {
    _count: ExecutionRecordCountAggregateOutputType | null
    _avg: ExecutionRecordAvgAggregateOutputType | null
    _sum: ExecutionRecordSumAggregateOutputType | null
    _min: ExecutionRecordMinAggregateOutputType | null
    _max: ExecutionRecordMaxAggregateOutputType | null
  }

  export type ExecutionRecordAvgAggregateOutputType = {
    buy_price: number | null
    sell_price: number | null
  }

  export type ExecutionRecordSumAggregateOutputType = {
    buy_price: number | null
    sell_price: number | null
  }

  export type ExecutionRecordMinAggregateOutputType = {
    id: string | null
    idempotency_key: string | null
    item_name: string | null
    buy_price: number | null
    sell_price: number | null
    status: string | null
    tx_hash: string | null
    created_at: Date | null
  }

  export type ExecutionRecordMaxAggregateOutputType = {
    id: string | null
    idempotency_key: string | null
    item_name: string | null
    buy_price: number | null
    sell_price: number | null
    status: string | null
    tx_hash: string | null
    created_at: Date | null
  }

  export type ExecutionRecordCountAggregateOutputType = {
    id: number
    idempotency_key: number
    item_name: number
    buy_price: number
    sell_price: number
    status: number
    tx_hash: number
    created_at: number
    _all: number
  }


  export type ExecutionRecordAvgAggregateInputType = {
    buy_price?: true
    sell_price?: true
  }

  export type ExecutionRecordSumAggregateInputType = {
    buy_price?: true
    sell_price?: true
  }

  export type ExecutionRecordMinAggregateInputType = {
    id?: true
    idempotency_key?: true
    item_name?: true
    buy_price?: true
    sell_price?: true
    status?: true
    tx_hash?: true
    created_at?: true
  }

  export type ExecutionRecordMaxAggregateInputType = {
    id?: true
    idempotency_key?: true
    item_name?: true
    buy_price?: true
    sell_price?: true
    status?: true
    tx_hash?: true
    created_at?: true
  }

  export type ExecutionRecordCountAggregateInputType = {
    id?: true
    idempotency_key?: true
    item_name?: true
    buy_price?: true
    sell_price?: true
    status?: true
    tx_hash?: true
    created_at?: true
    _all?: true
  }

  export type ExecutionRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionRecord to aggregate.
     */
    where?: ExecutionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionRecords to fetch.
     */
    orderBy?: ExecutionRecordOrderByWithRelationInput | ExecutionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExecutionRecords
    **/
    _count?: true | ExecutionRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExecutionRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExecutionRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionRecordMaxAggregateInputType
  }

  export type GetExecutionRecordAggregateType<T extends ExecutionRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutionRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutionRecord[P]>
      : GetScalarType<T[P], AggregateExecutionRecord[P]>
  }




  export type ExecutionRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionRecordWhereInput
    orderBy?: ExecutionRecordOrderByWithAggregationInput | ExecutionRecordOrderByWithAggregationInput[]
    by: ExecutionRecordScalarFieldEnum[] | ExecutionRecordScalarFieldEnum
    having?: ExecutionRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionRecordCountAggregateInputType | true
    _avg?: ExecutionRecordAvgAggregateInputType
    _sum?: ExecutionRecordSumAggregateInputType
    _min?: ExecutionRecordMinAggregateInputType
    _max?: ExecutionRecordMaxAggregateInputType
  }

  export type ExecutionRecordGroupByOutputType = {
    id: string
    idempotency_key: string
    item_name: string
    buy_price: number
    sell_price: number
    status: string
    tx_hash: string | null
    created_at: Date
    _count: ExecutionRecordCountAggregateOutputType | null
    _avg: ExecutionRecordAvgAggregateOutputType | null
    _sum: ExecutionRecordSumAggregateOutputType | null
    _min: ExecutionRecordMinAggregateOutputType | null
    _max: ExecutionRecordMaxAggregateOutputType | null
  }

  type GetExecutionRecordGroupByPayload<T extends ExecutionRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionRecordGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idempotency_key?: boolean
    item_name?: boolean
    buy_price?: boolean
    sell_price?: boolean
    status?: boolean
    tx_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["executionRecord"]>

  export type ExecutionRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idempotency_key?: boolean
    item_name?: boolean
    buy_price?: boolean
    sell_price?: boolean
    status?: boolean
    tx_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["executionRecord"]>

  export type ExecutionRecordSelectScalar = {
    id?: boolean
    idempotency_key?: boolean
    item_name?: boolean
    buy_price?: boolean
    sell_price?: boolean
    status?: boolean
    tx_hash?: boolean
    created_at?: boolean
  }


  export type $ExecutionRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExecutionRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idempotency_key: string
      item_name: string
      buy_price: number
      sell_price: number
      status: string
      tx_hash: string | null
      created_at: Date
    }, ExtArgs["result"]["executionRecord"]>
    composites: {}
  }

  type ExecutionRecordGetPayload<S extends boolean | null | undefined | ExecutionRecordDefaultArgs> = $Result.GetResult<Prisma.$ExecutionRecordPayload, S>

  type ExecutionRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExecutionRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExecutionRecordCountAggregateInputType | true
    }

  export interface ExecutionRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExecutionRecord'], meta: { name: 'ExecutionRecord' } }
    /**
     * Find zero or one ExecutionRecord that matches the filter.
     * @param {ExecutionRecordFindUniqueArgs} args - Arguments to find a ExecutionRecord
     * @example
     * // Get one ExecutionRecord
     * const executionRecord = await prisma.executionRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutionRecordFindUniqueArgs>(args: SelectSubset<T, ExecutionRecordFindUniqueArgs<ExtArgs>>): Prisma__ExecutionRecordClient<$Result.GetResult<Prisma.$ExecutionRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ExecutionRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExecutionRecordFindUniqueOrThrowArgs} args - Arguments to find a ExecutionRecord
     * @example
     * // Get one ExecutionRecord
     * const executionRecord = await prisma.executionRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutionRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutionRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutionRecordClient<$Result.GetResult<Prisma.$ExecutionRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ExecutionRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionRecordFindFirstArgs} args - Arguments to find a ExecutionRecord
     * @example
     * // Get one ExecutionRecord
     * const executionRecord = await prisma.executionRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutionRecordFindFirstArgs>(args?: SelectSubset<T, ExecutionRecordFindFirstArgs<ExtArgs>>): Prisma__ExecutionRecordClient<$Result.GetResult<Prisma.$ExecutionRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ExecutionRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionRecordFindFirstOrThrowArgs} args - Arguments to find a ExecutionRecord
     * @example
     * // Get one ExecutionRecord
     * const executionRecord = await prisma.executionRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutionRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutionRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutionRecordClient<$Result.GetResult<Prisma.$ExecutionRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ExecutionRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExecutionRecords
     * const executionRecords = await prisma.executionRecord.findMany()
     * 
     * // Get first 10 ExecutionRecords
     * const executionRecords = await prisma.executionRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionRecordWithIdOnly = await prisma.executionRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutionRecordFindManyArgs>(args?: SelectSubset<T, ExecutionRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ExecutionRecord.
     * @param {ExecutionRecordCreateArgs} args - Arguments to create a ExecutionRecord.
     * @example
     * // Create one ExecutionRecord
     * const ExecutionRecord = await prisma.executionRecord.create({
     *   data: {
     *     // ... data to create a ExecutionRecord
     *   }
     * })
     * 
     */
    create<T extends ExecutionRecordCreateArgs>(args: SelectSubset<T, ExecutionRecordCreateArgs<ExtArgs>>): Prisma__ExecutionRecordClient<$Result.GetResult<Prisma.$ExecutionRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ExecutionRecords.
     * @param {ExecutionRecordCreateManyArgs} args - Arguments to create many ExecutionRecords.
     * @example
     * // Create many ExecutionRecords
     * const executionRecord = await prisma.executionRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutionRecordCreateManyArgs>(args?: SelectSubset<T, ExecutionRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExecutionRecords and returns the data saved in the database.
     * @param {ExecutionRecordCreateManyAndReturnArgs} args - Arguments to create many ExecutionRecords.
     * @example
     * // Create many ExecutionRecords
     * const executionRecord = await prisma.executionRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExecutionRecords and only return the `id`
     * const executionRecordWithIdOnly = await prisma.executionRecord.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutionRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutionRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionRecordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ExecutionRecord.
     * @param {ExecutionRecordDeleteArgs} args - Arguments to delete one ExecutionRecord.
     * @example
     * // Delete one ExecutionRecord
     * const ExecutionRecord = await prisma.executionRecord.delete({
     *   where: {
     *     // ... filter to delete one ExecutionRecord
     *   }
     * })
     * 
     */
    delete<T extends ExecutionRecordDeleteArgs>(args: SelectSubset<T, ExecutionRecordDeleteArgs<ExtArgs>>): Prisma__ExecutionRecordClient<$Result.GetResult<Prisma.$ExecutionRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ExecutionRecord.
     * @param {ExecutionRecordUpdateArgs} args - Arguments to update one ExecutionRecord.
     * @example
     * // Update one ExecutionRecord
     * const executionRecord = await prisma.executionRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutionRecordUpdateArgs>(args: SelectSubset<T, ExecutionRecordUpdateArgs<ExtArgs>>): Prisma__ExecutionRecordClient<$Result.GetResult<Prisma.$ExecutionRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ExecutionRecords.
     * @param {ExecutionRecordDeleteManyArgs} args - Arguments to filter ExecutionRecords to delete.
     * @example
     * // Delete a few ExecutionRecords
     * const { count } = await prisma.executionRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutionRecordDeleteManyArgs>(args?: SelectSubset<T, ExecutionRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExecutionRecords
     * const executionRecord = await prisma.executionRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutionRecordUpdateManyArgs>(args: SelectSubset<T, ExecutionRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExecutionRecord.
     * @param {ExecutionRecordUpsertArgs} args - Arguments to update or create a ExecutionRecord.
     * @example
     * // Update or create a ExecutionRecord
     * const executionRecord = await prisma.executionRecord.upsert({
     *   create: {
     *     // ... data to create a ExecutionRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExecutionRecord we want to update
     *   }
     * })
     */
    upsert<T extends ExecutionRecordUpsertArgs>(args: SelectSubset<T, ExecutionRecordUpsertArgs<ExtArgs>>): Prisma__ExecutionRecordClient<$Result.GetResult<Prisma.$ExecutionRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ExecutionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionRecordCountArgs} args - Arguments to filter ExecutionRecords to count.
     * @example
     * // Count the number of ExecutionRecords
     * const count = await prisma.executionRecord.count({
     *   where: {
     *     // ... the filter for the ExecutionRecords we want to count
     *   }
     * })
    **/
    count<T extends ExecutionRecordCountArgs>(
      args?: Subset<T, ExecutionRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExecutionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExecutionRecordAggregateArgs>(args: Subset<T, ExecutionRecordAggregateArgs>): Prisma.PrismaPromise<GetExecutionRecordAggregateType<T>>

    /**
     * Group by ExecutionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExecutionRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionRecordGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExecutionRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExecutionRecord model
   */
  readonly fields: ExecutionRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExecutionRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExecutionRecord model
   */ 
  interface ExecutionRecordFieldRefs {
    readonly id: FieldRef<"ExecutionRecord", 'String'>
    readonly idempotency_key: FieldRef<"ExecutionRecord", 'String'>
    readonly item_name: FieldRef<"ExecutionRecord", 'String'>
    readonly buy_price: FieldRef<"ExecutionRecord", 'Float'>
    readonly sell_price: FieldRef<"ExecutionRecord", 'Float'>
    readonly status: FieldRef<"ExecutionRecord", 'String'>
    readonly tx_hash: FieldRef<"ExecutionRecord", 'String'>
    readonly created_at: FieldRef<"ExecutionRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExecutionRecord findUnique
   */
  export type ExecutionRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRecord
     */
    select?: ExecutionRecordSelect<ExtArgs> | null
    /**
     * Filter, which ExecutionRecord to fetch.
     */
    where: ExecutionRecordWhereUniqueInput
  }

  /**
   * ExecutionRecord findUniqueOrThrow
   */
  export type ExecutionRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRecord
     */
    select?: ExecutionRecordSelect<ExtArgs> | null
    /**
     * Filter, which ExecutionRecord to fetch.
     */
    where: ExecutionRecordWhereUniqueInput
  }

  /**
   * ExecutionRecord findFirst
   */
  export type ExecutionRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRecord
     */
    select?: ExecutionRecordSelect<ExtArgs> | null
    /**
     * Filter, which ExecutionRecord to fetch.
     */
    where?: ExecutionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionRecords to fetch.
     */
    orderBy?: ExecutionRecordOrderByWithRelationInput | ExecutionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionRecords.
     */
    cursor?: ExecutionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionRecords.
     */
    distinct?: ExecutionRecordScalarFieldEnum | ExecutionRecordScalarFieldEnum[]
  }

  /**
   * ExecutionRecord findFirstOrThrow
   */
  export type ExecutionRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRecord
     */
    select?: ExecutionRecordSelect<ExtArgs> | null
    /**
     * Filter, which ExecutionRecord to fetch.
     */
    where?: ExecutionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionRecords to fetch.
     */
    orderBy?: ExecutionRecordOrderByWithRelationInput | ExecutionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionRecords.
     */
    cursor?: ExecutionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionRecords.
     */
    distinct?: ExecutionRecordScalarFieldEnum | ExecutionRecordScalarFieldEnum[]
  }

  /**
   * ExecutionRecord findMany
   */
  export type ExecutionRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRecord
     */
    select?: ExecutionRecordSelect<ExtArgs> | null
    /**
     * Filter, which ExecutionRecords to fetch.
     */
    where?: ExecutionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionRecords to fetch.
     */
    orderBy?: ExecutionRecordOrderByWithRelationInput | ExecutionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExecutionRecords.
     */
    cursor?: ExecutionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionRecords.
     */
    skip?: number
    distinct?: ExecutionRecordScalarFieldEnum | ExecutionRecordScalarFieldEnum[]
  }

  /**
   * ExecutionRecord create
   */
  export type ExecutionRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRecord
     */
    select?: ExecutionRecordSelect<ExtArgs> | null
    /**
     * The data needed to create a ExecutionRecord.
     */
    data: XOR<ExecutionRecordCreateInput, ExecutionRecordUncheckedCreateInput>
  }

  /**
   * ExecutionRecord createMany
   */
  export type ExecutionRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExecutionRecords.
     */
    data: ExecutionRecordCreateManyInput | ExecutionRecordCreateManyInput[]
  }

  /**
   * ExecutionRecord createManyAndReturn
   */
  export type ExecutionRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRecord
     */
    select?: ExecutionRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ExecutionRecords.
     */
    data: ExecutionRecordCreateManyInput | ExecutionRecordCreateManyInput[]
  }

  /**
   * ExecutionRecord update
   */
  export type ExecutionRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRecord
     */
    select?: ExecutionRecordSelect<ExtArgs> | null
    /**
     * The data needed to update a ExecutionRecord.
     */
    data: XOR<ExecutionRecordUpdateInput, ExecutionRecordUncheckedUpdateInput>
    /**
     * Choose, which ExecutionRecord to update.
     */
    where: ExecutionRecordWhereUniqueInput
  }

  /**
   * ExecutionRecord updateMany
   */
  export type ExecutionRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExecutionRecords.
     */
    data: XOR<ExecutionRecordUpdateManyMutationInput, ExecutionRecordUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionRecords to update
     */
    where?: ExecutionRecordWhereInput
  }

  /**
   * ExecutionRecord upsert
   */
  export type ExecutionRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRecord
     */
    select?: ExecutionRecordSelect<ExtArgs> | null
    /**
     * The filter to search for the ExecutionRecord to update in case it exists.
     */
    where: ExecutionRecordWhereUniqueInput
    /**
     * In case the ExecutionRecord found by the `where` argument doesn't exist, create a new ExecutionRecord with this data.
     */
    create: XOR<ExecutionRecordCreateInput, ExecutionRecordUncheckedCreateInput>
    /**
     * In case the ExecutionRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionRecordUpdateInput, ExecutionRecordUncheckedUpdateInput>
  }

  /**
   * ExecutionRecord delete
   */
  export type ExecutionRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRecord
     */
    select?: ExecutionRecordSelect<ExtArgs> | null
    /**
     * Filter which ExecutionRecord to delete.
     */
    where: ExecutionRecordWhereUniqueInput
  }

  /**
   * ExecutionRecord deleteMany
   */
  export type ExecutionRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionRecords to delete
     */
    where?: ExecutionRecordWhereInput
  }

  /**
   * ExecutionRecord without action
   */
  export type ExecutionRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRecord
     */
    select?: ExecutionRecordSelect<ExtArgs> | null
  }


  /**
   * Model CMSContent
   */

  export type AggregateCMSContent = {
    _count: CMSContentCountAggregateOutputType | null
    _min: CMSContentMinAggregateOutputType | null
    _max: CMSContentMaxAggregateOutputType | null
  }

  export type CMSContentMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    updated_at: Date | null
  }

  export type CMSContentMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    updated_at: Date | null
  }

  export type CMSContentCountAggregateOutputType = {
    id: number
    key: number
    value: number
    description: number
    updated_at: number
    _all: number
  }


  export type CMSContentMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updated_at?: true
  }

  export type CMSContentMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updated_at?: true
  }

  export type CMSContentCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updated_at?: true
    _all?: true
  }

  export type CMSContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CMSContent to aggregate.
     */
    where?: CMSContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CMSContents to fetch.
     */
    orderBy?: CMSContentOrderByWithRelationInput | CMSContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CMSContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CMSContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CMSContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CMSContents
    **/
    _count?: true | CMSContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CMSContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CMSContentMaxAggregateInputType
  }

  export type GetCMSContentAggregateType<T extends CMSContentAggregateArgs> = {
        [P in keyof T & keyof AggregateCMSContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCMSContent[P]>
      : GetScalarType<T[P], AggregateCMSContent[P]>
  }




  export type CMSContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CMSContentWhereInput
    orderBy?: CMSContentOrderByWithAggregationInput | CMSContentOrderByWithAggregationInput[]
    by: CMSContentScalarFieldEnum[] | CMSContentScalarFieldEnum
    having?: CMSContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CMSContentCountAggregateInputType | true
    _min?: CMSContentMinAggregateInputType
    _max?: CMSContentMaxAggregateInputType
  }

  export type CMSContentGroupByOutputType = {
    id: string
    key: string
    value: string
    description: string | null
    updated_at: Date
    _count: CMSContentCountAggregateOutputType | null
    _min: CMSContentMinAggregateOutputType | null
    _max: CMSContentMaxAggregateOutputType | null
  }

  type GetCMSContentGroupByPayload<T extends CMSContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CMSContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CMSContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CMSContentGroupByOutputType[P]>
            : GetScalarType<T[P], CMSContentGroupByOutputType[P]>
        }
      >
    >


  export type CMSContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["cMSContent"]>

  export type CMSContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["cMSContent"]>

  export type CMSContentSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updated_at?: boolean
  }


  export type $CMSContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CMSContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      description: string | null
      updated_at: Date
    }, ExtArgs["result"]["cMSContent"]>
    composites: {}
  }

  type CMSContentGetPayload<S extends boolean | null | undefined | CMSContentDefaultArgs> = $Result.GetResult<Prisma.$CMSContentPayload, S>

  type CMSContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CMSContentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CMSContentCountAggregateInputType | true
    }

  export interface CMSContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CMSContent'], meta: { name: 'CMSContent' } }
    /**
     * Find zero or one CMSContent that matches the filter.
     * @param {CMSContentFindUniqueArgs} args - Arguments to find a CMSContent
     * @example
     * // Get one CMSContent
     * const cMSContent = await prisma.cMSContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CMSContentFindUniqueArgs>(args: SelectSubset<T, CMSContentFindUniqueArgs<ExtArgs>>): Prisma__CMSContentClient<$Result.GetResult<Prisma.$CMSContentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CMSContent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CMSContentFindUniqueOrThrowArgs} args - Arguments to find a CMSContent
     * @example
     * // Get one CMSContent
     * const cMSContent = await prisma.cMSContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CMSContentFindUniqueOrThrowArgs>(args: SelectSubset<T, CMSContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CMSContentClient<$Result.GetResult<Prisma.$CMSContentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CMSContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CMSContentFindFirstArgs} args - Arguments to find a CMSContent
     * @example
     * // Get one CMSContent
     * const cMSContent = await prisma.cMSContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CMSContentFindFirstArgs>(args?: SelectSubset<T, CMSContentFindFirstArgs<ExtArgs>>): Prisma__CMSContentClient<$Result.GetResult<Prisma.$CMSContentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CMSContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CMSContentFindFirstOrThrowArgs} args - Arguments to find a CMSContent
     * @example
     * // Get one CMSContent
     * const cMSContent = await prisma.cMSContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CMSContentFindFirstOrThrowArgs>(args?: SelectSubset<T, CMSContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CMSContentClient<$Result.GetResult<Prisma.$CMSContentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CMSContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CMSContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CMSContents
     * const cMSContents = await prisma.cMSContent.findMany()
     * 
     * // Get first 10 CMSContents
     * const cMSContents = await prisma.cMSContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cMSContentWithIdOnly = await prisma.cMSContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CMSContentFindManyArgs>(args?: SelectSubset<T, CMSContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CMSContentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CMSContent.
     * @param {CMSContentCreateArgs} args - Arguments to create a CMSContent.
     * @example
     * // Create one CMSContent
     * const CMSContent = await prisma.cMSContent.create({
     *   data: {
     *     // ... data to create a CMSContent
     *   }
     * })
     * 
     */
    create<T extends CMSContentCreateArgs>(args: SelectSubset<T, CMSContentCreateArgs<ExtArgs>>): Prisma__CMSContentClient<$Result.GetResult<Prisma.$CMSContentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CMSContents.
     * @param {CMSContentCreateManyArgs} args - Arguments to create many CMSContents.
     * @example
     * // Create many CMSContents
     * const cMSContent = await prisma.cMSContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CMSContentCreateManyArgs>(args?: SelectSubset<T, CMSContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CMSContents and returns the data saved in the database.
     * @param {CMSContentCreateManyAndReturnArgs} args - Arguments to create many CMSContents.
     * @example
     * // Create many CMSContents
     * const cMSContent = await prisma.cMSContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CMSContents and only return the `id`
     * const cMSContentWithIdOnly = await prisma.cMSContent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CMSContentCreateManyAndReturnArgs>(args?: SelectSubset<T, CMSContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CMSContentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CMSContent.
     * @param {CMSContentDeleteArgs} args - Arguments to delete one CMSContent.
     * @example
     * // Delete one CMSContent
     * const CMSContent = await prisma.cMSContent.delete({
     *   where: {
     *     // ... filter to delete one CMSContent
     *   }
     * })
     * 
     */
    delete<T extends CMSContentDeleteArgs>(args: SelectSubset<T, CMSContentDeleteArgs<ExtArgs>>): Prisma__CMSContentClient<$Result.GetResult<Prisma.$CMSContentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CMSContent.
     * @param {CMSContentUpdateArgs} args - Arguments to update one CMSContent.
     * @example
     * // Update one CMSContent
     * const cMSContent = await prisma.cMSContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CMSContentUpdateArgs>(args: SelectSubset<T, CMSContentUpdateArgs<ExtArgs>>): Prisma__CMSContentClient<$Result.GetResult<Prisma.$CMSContentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CMSContents.
     * @param {CMSContentDeleteManyArgs} args - Arguments to filter CMSContents to delete.
     * @example
     * // Delete a few CMSContents
     * const { count } = await prisma.cMSContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CMSContentDeleteManyArgs>(args?: SelectSubset<T, CMSContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CMSContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CMSContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CMSContents
     * const cMSContent = await prisma.cMSContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CMSContentUpdateManyArgs>(args: SelectSubset<T, CMSContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CMSContent.
     * @param {CMSContentUpsertArgs} args - Arguments to update or create a CMSContent.
     * @example
     * // Update or create a CMSContent
     * const cMSContent = await prisma.cMSContent.upsert({
     *   create: {
     *     // ... data to create a CMSContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CMSContent we want to update
     *   }
     * })
     */
    upsert<T extends CMSContentUpsertArgs>(args: SelectSubset<T, CMSContentUpsertArgs<ExtArgs>>): Prisma__CMSContentClient<$Result.GetResult<Prisma.$CMSContentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CMSContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CMSContentCountArgs} args - Arguments to filter CMSContents to count.
     * @example
     * // Count the number of CMSContents
     * const count = await prisma.cMSContent.count({
     *   where: {
     *     // ... the filter for the CMSContents we want to count
     *   }
     * })
    **/
    count<T extends CMSContentCountArgs>(
      args?: Subset<T, CMSContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CMSContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CMSContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CMSContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CMSContentAggregateArgs>(args: Subset<T, CMSContentAggregateArgs>): Prisma.PrismaPromise<GetCMSContentAggregateType<T>>

    /**
     * Group by CMSContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CMSContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CMSContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CMSContentGroupByArgs['orderBy'] }
        : { orderBy?: CMSContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CMSContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCMSContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CMSContent model
   */
  readonly fields: CMSContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CMSContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CMSContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CMSContent model
   */ 
  interface CMSContentFieldRefs {
    readonly id: FieldRef<"CMSContent", 'String'>
    readonly key: FieldRef<"CMSContent", 'String'>
    readonly value: FieldRef<"CMSContent", 'String'>
    readonly description: FieldRef<"CMSContent", 'String'>
    readonly updated_at: FieldRef<"CMSContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CMSContent findUnique
   */
  export type CMSContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CMSContent
     */
    select?: CMSContentSelect<ExtArgs> | null
    /**
     * Filter, which CMSContent to fetch.
     */
    where: CMSContentWhereUniqueInput
  }

  /**
   * CMSContent findUniqueOrThrow
   */
  export type CMSContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CMSContent
     */
    select?: CMSContentSelect<ExtArgs> | null
    /**
     * Filter, which CMSContent to fetch.
     */
    where: CMSContentWhereUniqueInput
  }

  /**
   * CMSContent findFirst
   */
  export type CMSContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CMSContent
     */
    select?: CMSContentSelect<ExtArgs> | null
    /**
     * Filter, which CMSContent to fetch.
     */
    where?: CMSContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CMSContents to fetch.
     */
    orderBy?: CMSContentOrderByWithRelationInput | CMSContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CMSContents.
     */
    cursor?: CMSContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CMSContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CMSContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CMSContents.
     */
    distinct?: CMSContentScalarFieldEnum | CMSContentScalarFieldEnum[]
  }

  /**
   * CMSContent findFirstOrThrow
   */
  export type CMSContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CMSContent
     */
    select?: CMSContentSelect<ExtArgs> | null
    /**
     * Filter, which CMSContent to fetch.
     */
    where?: CMSContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CMSContents to fetch.
     */
    orderBy?: CMSContentOrderByWithRelationInput | CMSContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CMSContents.
     */
    cursor?: CMSContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CMSContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CMSContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CMSContents.
     */
    distinct?: CMSContentScalarFieldEnum | CMSContentScalarFieldEnum[]
  }

  /**
   * CMSContent findMany
   */
  export type CMSContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CMSContent
     */
    select?: CMSContentSelect<ExtArgs> | null
    /**
     * Filter, which CMSContents to fetch.
     */
    where?: CMSContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CMSContents to fetch.
     */
    orderBy?: CMSContentOrderByWithRelationInput | CMSContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CMSContents.
     */
    cursor?: CMSContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CMSContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CMSContents.
     */
    skip?: number
    distinct?: CMSContentScalarFieldEnum | CMSContentScalarFieldEnum[]
  }

  /**
   * CMSContent create
   */
  export type CMSContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CMSContent
     */
    select?: CMSContentSelect<ExtArgs> | null
    /**
     * The data needed to create a CMSContent.
     */
    data: XOR<CMSContentCreateInput, CMSContentUncheckedCreateInput>
  }

  /**
   * CMSContent createMany
   */
  export type CMSContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CMSContents.
     */
    data: CMSContentCreateManyInput | CMSContentCreateManyInput[]
  }

  /**
   * CMSContent createManyAndReturn
   */
  export type CMSContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CMSContent
     */
    select?: CMSContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CMSContents.
     */
    data: CMSContentCreateManyInput | CMSContentCreateManyInput[]
  }

  /**
   * CMSContent update
   */
  export type CMSContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CMSContent
     */
    select?: CMSContentSelect<ExtArgs> | null
    /**
     * The data needed to update a CMSContent.
     */
    data: XOR<CMSContentUpdateInput, CMSContentUncheckedUpdateInput>
    /**
     * Choose, which CMSContent to update.
     */
    where: CMSContentWhereUniqueInput
  }

  /**
   * CMSContent updateMany
   */
  export type CMSContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CMSContents.
     */
    data: XOR<CMSContentUpdateManyMutationInput, CMSContentUncheckedUpdateManyInput>
    /**
     * Filter which CMSContents to update
     */
    where?: CMSContentWhereInput
  }

  /**
   * CMSContent upsert
   */
  export type CMSContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CMSContent
     */
    select?: CMSContentSelect<ExtArgs> | null
    /**
     * The filter to search for the CMSContent to update in case it exists.
     */
    where: CMSContentWhereUniqueInput
    /**
     * In case the CMSContent found by the `where` argument doesn't exist, create a new CMSContent with this data.
     */
    create: XOR<CMSContentCreateInput, CMSContentUncheckedCreateInput>
    /**
     * In case the CMSContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CMSContentUpdateInput, CMSContentUncheckedUpdateInput>
  }

  /**
   * CMSContent delete
   */
  export type CMSContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CMSContent
     */
    select?: CMSContentSelect<ExtArgs> | null
    /**
     * Filter which CMSContent to delete.
     */
    where: CMSContentWhereUniqueInput
  }

  /**
   * CMSContent deleteMany
   */
  export type CMSContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CMSContents to delete
     */
    where?: CMSContentWhereInput
  }

  /**
   * CMSContent without action
   */
  export type CMSContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CMSContent
     */
    select?: CMSContentSelect<ExtArgs> | null
  }


  /**
   * Model AnalyticsLog
   */

  export type AggregateAnalyticsLog = {
    _count: AnalyticsLogCountAggregateOutputType | null
    _min: AnalyticsLogMinAggregateOutputType | null
    _max: AnalyticsLogMaxAggregateOutputType | null
  }

  export type AnalyticsLogMinAggregateOutputType = {
    id: string | null
    ip: string | null
    user_agent: string | null
    page: string | null
    timestamp: Date | null
  }

  export type AnalyticsLogMaxAggregateOutputType = {
    id: string | null
    ip: string | null
    user_agent: string | null
    page: string | null
    timestamp: Date | null
  }

  export type AnalyticsLogCountAggregateOutputType = {
    id: number
    ip: number
    user_agent: number
    page: number
    timestamp: number
    _all: number
  }


  export type AnalyticsLogMinAggregateInputType = {
    id?: true
    ip?: true
    user_agent?: true
    page?: true
    timestamp?: true
  }

  export type AnalyticsLogMaxAggregateInputType = {
    id?: true
    ip?: true
    user_agent?: true
    page?: true
    timestamp?: true
  }

  export type AnalyticsLogCountAggregateInputType = {
    id?: true
    ip?: true
    user_agent?: true
    page?: true
    timestamp?: true
    _all?: true
  }

  export type AnalyticsLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsLog to aggregate.
     */
    where?: AnalyticsLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsLogs to fetch.
     */
    orderBy?: AnalyticsLogOrderByWithRelationInput | AnalyticsLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalyticsLogs
    **/
    _count?: true | AnalyticsLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsLogMaxAggregateInputType
  }

  export type GetAnalyticsLogAggregateType<T extends AnalyticsLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalyticsLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalyticsLog[P]>
      : GetScalarType<T[P], AggregateAnalyticsLog[P]>
  }




  export type AnalyticsLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsLogWhereInput
    orderBy?: AnalyticsLogOrderByWithAggregationInput | AnalyticsLogOrderByWithAggregationInput[]
    by: AnalyticsLogScalarFieldEnum[] | AnalyticsLogScalarFieldEnum
    having?: AnalyticsLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsLogCountAggregateInputType | true
    _min?: AnalyticsLogMinAggregateInputType
    _max?: AnalyticsLogMaxAggregateInputType
  }

  export type AnalyticsLogGroupByOutputType = {
    id: string
    ip: string
    user_agent: string
    page: string
    timestamp: Date
    _count: AnalyticsLogCountAggregateOutputType | null
    _min: AnalyticsLogMinAggregateOutputType | null
    _max: AnalyticsLogMaxAggregateOutputType | null
  }

  type GetAnalyticsLogGroupByPayload<T extends AnalyticsLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsLogGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsLogGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    user_agent?: boolean
    page?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["analyticsLog"]>

  export type AnalyticsLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    user_agent?: boolean
    page?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["analyticsLog"]>

  export type AnalyticsLogSelectScalar = {
    id?: boolean
    ip?: boolean
    user_agent?: boolean
    page?: boolean
    timestamp?: boolean
  }


  export type $AnalyticsLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalyticsLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ip: string
      user_agent: string
      page: string
      timestamp: Date
    }, ExtArgs["result"]["analyticsLog"]>
    composites: {}
  }

  type AnalyticsLogGetPayload<S extends boolean | null | undefined | AnalyticsLogDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsLogPayload, S>

  type AnalyticsLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnalyticsLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnalyticsLogCountAggregateInputType | true
    }

  export interface AnalyticsLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalyticsLog'], meta: { name: 'AnalyticsLog' } }
    /**
     * Find zero or one AnalyticsLog that matches the filter.
     * @param {AnalyticsLogFindUniqueArgs} args - Arguments to find a AnalyticsLog
     * @example
     * // Get one AnalyticsLog
     * const analyticsLog = await prisma.analyticsLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsLogFindUniqueArgs>(args: SelectSubset<T, AnalyticsLogFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsLogClient<$Result.GetResult<Prisma.$AnalyticsLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AnalyticsLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnalyticsLogFindUniqueOrThrowArgs} args - Arguments to find a AnalyticsLog
     * @example
     * // Get one AnalyticsLog
     * const analyticsLog = await prisma.analyticsLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsLogClient<$Result.GetResult<Prisma.$AnalyticsLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AnalyticsLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsLogFindFirstArgs} args - Arguments to find a AnalyticsLog
     * @example
     * // Get one AnalyticsLog
     * const analyticsLog = await prisma.analyticsLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsLogFindFirstArgs>(args?: SelectSubset<T, AnalyticsLogFindFirstArgs<ExtArgs>>): Prisma__AnalyticsLogClient<$Result.GetResult<Prisma.$AnalyticsLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AnalyticsLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsLogFindFirstOrThrowArgs} args - Arguments to find a AnalyticsLog
     * @example
     * // Get one AnalyticsLog
     * const analyticsLog = await prisma.analyticsLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsLogClient<$Result.GetResult<Prisma.$AnalyticsLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AnalyticsLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalyticsLogs
     * const analyticsLogs = await prisma.analyticsLog.findMany()
     * 
     * // Get first 10 AnalyticsLogs
     * const analyticsLogs = await prisma.analyticsLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsLogWithIdOnly = await prisma.analyticsLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsLogFindManyArgs>(args?: SelectSubset<T, AnalyticsLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AnalyticsLog.
     * @param {AnalyticsLogCreateArgs} args - Arguments to create a AnalyticsLog.
     * @example
     * // Create one AnalyticsLog
     * const AnalyticsLog = await prisma.analyticsLog.create({
     *   data: {
     *     // ... data to create a AnalyticsLog
     *   }
     * })
     * 
     */
    create<T extends AnalyticsLogCreateArgs>(args: SelectSubset<T, AnalyticsLogCreateArgs<ExtArgs>>): Prisma__AnalyticsLogClient<$Result.GetResult<Prisma.$AnalyticsLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AnalyticsLogs.
     * @param {AnalyticsLogCreateManyArgs} args - Arguments to create many AnalyticsLogs.
     * @example
     * // Create many AnalyticsLogs
     * const analyticsLog = await prisma.analyticsLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsLogCreateManyArgs>(args?: SelectSubset<T, AnalyticsLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalyticsLogs and returns the data saved in the database.
     * @param {AnalyticsLogCreateManyAndReturnArgs} args - Arguments to create many AnalyticsLogs.
     * @example
     * // Create many AnalyticsLogs
     * const analyticsLog = await prisma.analyticsLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalyticsLogs and only return the `id`
     * const analyticsLogWithIdOnly = await prisma.analyticsLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AnalyticsLog.
     * @param {AnalyticsLogDeleteArgs} args - Arguments to delete one AnalyticsLog.
     * @example
     * // Delete one AnalyticsLog
     * const AnalyticsLog = await prisma.analyticsLog.delete({
     *   where: {
     *     // ... filter to delete one AnalyticsLog
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsLogDeleteArgs>(args: SelectSubset<T, AnalyticsLogDeleteArgs<ExtArgs>>): Prisma__AnalyticsLogClient<$Result.GetResult<Prisma.$AnalyticsLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AnalyticsLog.
     * @param {AnalyticsLogUpdateArgs} args - Arguments to update one AnalyticsLog.
     * @example
     * // Update one AnalyticsLog
     * const analyticsLog = await prisma.analyticsLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsLogUpdateArgs>(args: SelectSubset<T, AnalyticsLogUpdateArgs<ExtArgs>>): Prisma__AnalyticsLogClient<$Result.GetResult<Prisma.$AnalyticsLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AnalyticsLogs.
     * @param {AnalyticsLogDeleteManyArgs} args - Arguments to filter AnalyticsLogs to delete.
     * @example
     * // Delete a few AnalyticsLogs
     * const { count } = await prisma.analyticsLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsLogDeleteManyArgs>(args?: SelectSubset<T, AnalyticsLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalyticsLogs
     * const analyticsLog = await prisma.analyticsLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsLogUpdateManyArgs>(args: SelectSubset<T, AnalyticsLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnalyticsLog.
     * @param {AnalyticsLogUpsertArgs} args - Arguments to update or create a AnalyticsLog.
     * @example
     * // Update or create a AnalyticsLog
     * const analyticsLog = await prisma.analyticsLog.upsert({
     *   create: {
     *     // ... data to create a AnalyticsLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalyticsLog we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsLogUpsertArgs>(args: SelectSubset<T, AnalyticsLogUpsertArgs<ExtArgs>>): Prisma__AnalyticsLogClient<$Result.GetResult<Prisma.$AnalyticsLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AnalyticsLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsLogCountArgs} args - Arguments to filter AnalyticsLogs to count.
     * @example
     * // Count the number of AnalyticsLogs
     * const count = await prisma.analyticsLog.count({
     *   where: {
     *     // ... the filter for the AnalyticsLogs we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsLogCountArgs>(
      args?: Subset<T, AnalyticsLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalyticsLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnalyticsLogAggregateArgs>(args: Subset<T, AnalyticsLogAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsLogAggregateType<T>>

    /**
     * Group by AnalyticsLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnalyticsLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsLogGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalyticsLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalyticsLog model
   */
  readonly fields: AnalyticsLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalyticsLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnalyticsLog model
   */ 
  interface AnalyticsLogFieldRefs {
    readonly id: FieldRef<"AnalyticsLog", 'String'>
    readonly ip: FieldRef<"AnalyticsLog", 'String'>
    readonly user_agent: FieldRef<"AnalyticsLog", 'String'>
    readonly page: FieldRef<"AnalyticsLog", 'String'>
    readonly timestamp: FieldRef<"AnalyticsLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalyticsLog findUnique
   */
  export type AnalyticsLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsLog
     */
    select?: AnalyticsLogSelect<ExtArgs> | null
    /**
     * Filter, which AnalyticsLog to fetch.
     */
    where: AnalyticsLogWhereUniqueInput
  }

  /**
   * AnalyticsLog findUniqueOrThrow
   */
  export type AnalyticsLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsLog
     */
    select?: AnalyticsLogSelect<ExtArgs> | null
    /**
     * Filter, which AnalyticsLog to fetch.
     */
    where: AnalyticsLogWhereUniqueInput
  }

  /**
   * AnalyticsLog findFirst
   */
  export type AnalyticsLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsLog
     */
    select?: AnalyticsLogSelect<ExtArgs> | null
    /**
     * Filter, which AnalyticsLog to fetch.
     */
    where?: AnalyticsLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsLogs to fetch.
     */
    orderBy?: AnalyticsLogOrderByWithRelationInput | AnalyticsLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsLogs.
     */
    cursor?: AnalyticsLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsLogs.
     */
    distinct?: AnalyticsLogScalarFieldEnum | AnalyticsLogScalarFieldEnum[]
  }

  /**
   * AnalyticsLog findFirstOrThrow
   */
  export type AnalyticsLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsLog
     */
    select?: AnalyticsLogSelect<ExtArgs> | null
    /**
     * Filter, which AnalyticsLog to fetch.
     */
    where?: AnalyticsLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsLogs to fetch.
     */
    orderBy?: AnalyticsLogOrderByWithRelationInput | AnalyticsLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsLogs.
     */
    cursor?: AnalyticsLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsLogs.
     */
    distinct?: AnalyticsLogScalarFieldEnum | AnalyticsLogScalarFieldEnum[]
  }

  /**
   * AnalyticsLog findMany
   */
  export type AnalyticsLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsLog
     */
    select?: AnalyticsLogSelect<ExtArgs> | null
    /**
     * Filter, which AnalyticsLogs to fetch.
     */
    where?: AnalyticsLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsLogs to fetch.
     */
    orderBy?: AnalyticsLogOrderByWithRelationInput | AnalyticsLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalyticsLogs.
     */
    cursor?: AnalyticsLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsLogs.
     */
    skip?: number
    distinct?: AnalyticsLogScalarFieldEnum | AnalyticsLogScalarFieldEnum[]
  }

  /**
   * AnalyticsLog create
   */
  export type AnalyticsLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsLog
     */
    select?: AnalyticsLogSelect<ExtArgs> | null
    /**
     * The data needed to create a AnalyticsLog.
     */
    data: XOR<AnalyticsLogCreateInput, AnalyticsLogUncheckedCreateInput>
  }

  /**
   * AnalyticsLog createMany
   */
  export type AnalyticsLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalyticsLogs.
     */
    data: AnalyticsLogCreateManyInput | AnalyticsLogCreateManyInput[]
  }

  /**
   * AnalyticsLog createManyAndReturn
   */
  export type AnalyticsLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsLog
     */
    select?: AnalyticsLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AnalyticsLogs.
     */
    data: AnalyticsLogCreateManyInput | AnalyticsLogCreateManyInput[]
  }

  /**
   * AnalyticsLog update
   */
  export type AnalyticsLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsLog
     */
    select?: AnalyticsLogSelect<ExtArgs> | null
    /**
     * The data needed to update a AnalyticsLog.
     */
    data: XOR<AnalyticsLogUpdateInput, AnalyticsLogUncheckedUpdateInput>
    /**
     * Choose, which AnalyticsLog to update.
     */
    where: AnalyticsLogWhereUniqueInput
  }

  /**
   * AnalyticsLog updateMany
   */
  export type AnalyticsLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalyticsLogs.
     */
    data: XOR<AnalyticsLogUpdateManyMutationInput, AnalyticsLogUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsLogs to update
     */
    where?: AnalyticsLogWhereInput
  }

  /**
   * AnalyticsLog upsert
   */
  export type AnalyticsLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsLog
     */
    select?: AnalyticsLogSelect<ExtArgs> | null
    /**
     * The filter to search for the AnalyticsLog to update in case it exists.
     */
    where: AnalyticsLogWhereUniqueInput
    /**
     * In case the AnalyticsLog found by the `where` argument doesn't exist, create a new AnalyticsLog with this data.
     */
    create: XOR<AnalyticsLogCreateInput, AnalyticsLogUncheckedCreateInput>
    /**
     * In case the AnalyticsLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsLogUpdateInput, AnalyticsLogUncheckedUpdateInput>
  }

  /**
   * AnalyticsLog delete
   */
  export type AnalyticsLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsLog
     */
    select?: AnalyticsLogSelect<ExtArgs> | null
    /**
     * Filter which AnalyticsLog to delete.
     */
    where: AnalyticsLogWhereUniqueInput
  }

  /**
   * AnalyticsLog deleteMany
   */
  export type AnalyticsLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsLogs to delete
     */
    where?: AnalyticsLogWhereInput
  }

  /**
   * AnalyticsLog without action
   */
  export type AnalyticsLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsLog
     */
    select?: AnalyticsLogSelect<ExtArgs> | null
  }


  /**
   * Model SessionLog
   */

  export type AggregateSessionLog = {
    _count: SessionLogCountAggregateOutputType | null
    _min: SessionLogMinAggregateOutputType | null
    _max: SessionLogMaxAggregateOutputType | null
  }

  export type SessionLogMinAggregateOutputType = {
    id: string | null
    ip: string | null
    device_type: string | null
    browser: string | null
    start_time: Date | null
  }

  export type SessionLogMaxAggregateOutputType = {
    id: string | null
    ip: string | null
    device_type: string | null
    browser: string | null
    start_time: Date | null
  }

  export type SessionLogCountAggregateOutputType = {
    id: number
    ip: number
    device_type: number
    browser: number
    start_time: number
    _all: number
  }


  export type SessionLogMinAggregateInputType = {
    id?: true
    ip?: true
    device_type?: true
    browser?: true
    start_time?: true
  }

  export type SessionLogMaxAggregateInputType = {
    id?: true
    ip?: true
    device_type?: true
    browser?: true
    start_time?: true
  }

  export type SessionLogCountAggregateInputType = {
    id?: true
    ip?: true
    device_type?: true
    browser?: true
    start_time?: true
    _all?: true
  }

  export type SessionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionLog to aggregate.
     */
    where?: SessionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionLogs to fetch.
     */
    orderBy?: SessionLogOrderByWithRelationInput | SessionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionLogs
    **/
    _count?: true | SessionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionLogMaxAggregateInputType
  }

  export type GetSessionLogAggregateType<T extends SessionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionLog[P]>
      : GetScalarType<T[P], AggregateSessionLog[P]>
  }




  export type SessionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionLogWhereInput
    orderBy?: SessionLogOrderByWithAggregationInput | SessionLogOrderByWithAggregationInput[]
    by: SessionLogScalarFieldEnum[] | SessionLogScalarFieldEnum
    having?: SessionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionLogCountAggregateInputType | true
    _min?: SessionLogMinAggregateInputType
    _max?: SessionLogMaxAggregateInputType
  }

  export type SessionLogGroupByOutputType = {
    id: string
    ip: string
    device_type: string
    browser: string
    start_time: Date
    _count: SessionLogCountAggregateOutputType | null
    _min: SessionLogMinAggregateOutputType | null
    _max: SessionLogMaxAggregateOutputType | null
  }

  type GetSessionLogGroupByPayload<T extends SessionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionLogGroupByOutputType[P]>
            : GetScalarType<T[P], SessionLogGroupByOutputType[P]>
        }
      >
    >


  export type SessionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    device_type?: boolean
    browser?: boolean
    start_time?: boolean
  }, ExtArgs["result"]["sessionLog"]>

  export type SessionLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    device_type?: boolean
    browser?: boolean
    start_time?: boolean
  }, ExtArgs["result"]["sessionLog"]>

  export type SessionLogSelectScalar = {
    id?: boolean
    ip?: boolean
    device_type?: boolean
    browser?: boolean
    start_time?: boolean
  }


  export type $SessionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ip: string
      device_type: string
      browser: string
      start_time: Date
    }, ExtArgs["result"]["sessionLog"]>
    composites: {}
  }

  type SessionLogGetPayload<S extends boolean | null | undefined | SessionLogDefaultArgs> = $Result.GetResult<Prisma.$SessionLogPayload, S>

  type SessionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionLogCountAggregateInputType | true
    }

  export interface SessionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionLog'], meta: { name: 'SessionLog' } }
    /**
     * Find zero or one SessionLog that matches the filter.
     * @param {SessionLogFindUniqueArgs} args - Arguments to find a SessionLog
     * @example
     * // Get one SessionLog
     * const sessionLog = await prisma.sessionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionLogFindUniqueArgs>(args: SelectSubset<T, SessionLogFindUniqueArgs<ExtArgs>>): Prisma__SessionLogClient<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SessionLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionLogFindUniqueOrThrowArgs} args - Arguments to find a SessionLog
     * @example
     * // Get one SessionLog
     * const sessionLog = await prisma.sessionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionLogClient<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SessionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionLogFindFirstArgs} args - Arguments to find a SessionLog
     * @example
     * // Get one SessionLog
     * const sessionLog = await prisma.sessionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionLogFindFirstArgs>(args?: SelectSubset<T, SessionLogFindFirstArgs<ExtArgs>>): Prisma__SessionLogClient<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SessionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionLogFindFirstOrThrowArgs} args - Arguments to find a SessionLog
     * @example
     * // Get one SessionLog
     * const sessionLog = await prisma.sessionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionLogClient<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SessionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionLogs
     * const sessionLogs = await prisma.sessionLog.findMany()
     * 
     * // Get first 10 SessionLogs
     * const sessionLogs = await prisma.sessionLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionLogWithIdOnly = await prisma.sessionLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionLogFindManyArgs>(args?: SelectSubset<T, SessionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SessionLog.
     * @param {SessionLogCreateArgs} args - Arguments to create a SessionLog.
     * @example
     * // Create one SessionLog
     * const SessionLog = await prisma.sessionLog.create({
     *   data: {
     *     // ... data to create a SessionLog
     *   }
     * })
     * 
     */
    create<T extends SessionLogCreateArgs>(args: SelectSubset<T, SessionLogCreateArgs<ExtArgs>>): Prisma__SessionLogClient<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SessionLogs.
     * @param {SessionLogCreateManyArgs} args - Arguments to create many SessionLogs.
     * @example
     * // Create many SessionLogs
     * const sessionLog = await prisma.sessionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionLogCreateManyArgs>(args?: SelectSubset<T, SessionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionLogs and returns the data saved in the database.
     * @param {SessionLogCreateManyAndReturnArgs} args - Arguments to create many SessionLogs.
     * @example
     * // Create many SessionLogs
     * const sessionLog = await prisma.sessionLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionLogs and only return the `id`
     * const sessionLogWithIdOnly = await prisma.sessionLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SessionLog.
     * @param {SessionLogDeleteArgs} args - Arguments to delete one SessionLog.
     * @example
     * // Delete one SessionLog
     * const SessionLog = await prisma.sessionLog.delete({
     *   where: {
     *     // ... filter to delete one SessionLog
     *   }
     * })
     * 
     */
    delete<T extends SessionLogDeleteArgs>(args: SelectSubset<T, SessionLogDeleteArgs<ExtArgs>>): Prisma__SessionLogClient<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SessionLog.
     * @param {SessionLogUpdateArgs} args - Arguments to update one SessionLog.
     * @example
     * // Update one SessionLog
     * const sessionLog = await prisma.sessionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionLogUpdateArgs>(args: SelectSubset<T, SessionLogUpdateArgs<ExtArgs>>): Prisma__SessionLogClient<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SessionLogs.
     * @param {SessionLogDeleteManyArgs} args - Arguments to filter SessionLogs to delete.
     * @example
     * // Delete a few SessionLogs
     * const { count } = await prisma.sessionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionLogDeleteManyArgs>(args?: SelectSubset<T, SessionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionLogs
     * const sessionLog = await prisma.sessionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionLogUpdateManyArgs>(args: SelectSubset<T, SessionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SessionLog.
     * @param {SessionLogUpsertArgs} args - Arguments to update or create a SessionLog.
     * @example
     * // Update or create a SessionLog
     * const sessionLog = await prisma.sessionLog.upsert({
     *   create: {
     *     // ... data to create a SessionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionLog we want to update
     *   }
     * })
     */
    upsert<T extends SessionLogUpsertArgs>(args: SelectSubset<T, SessionLogUpsertArgs<ExtArgs>>): Prisma__SessionLogClient<$Result.GetResult<Prisma.$SessionLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SessionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionLogCountArgs} args - Arguments to filter SessionLogs to count.
     * @example
     * // Count the number of SessionLogs
     * const count = await prisma.sessionLog.count({
     *   where: {
     *     // ... the filter for the SessionLogs we want to count
     *   }
     * })
    **/
    count<T extends SessionLogCountArgs>(
      args?: Subset<T, SessionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionLogAggregateArgs>(args: Subset<T, SessionLogAggregateArgs>): Prisma.PrismaPromise<GetSessionLogAggregateType<T>>

    /**
     * Group by SessionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionLogGroupByArgs['orderBy'] }
        : { orderBy?: SessionLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionLog model
   */
  readonly fields: SessionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SessionLog model
   */ 
  interface SessionLogFieldRefs {
    readonly id: FieldRef<"SessionLog", 'String'>
    readonly ip: FieldRef<"SessionLog", 'String'>
    readonly device_type: FieldRef<"SessionLog", 'String'>
    readonly browser: FieldRef<"SessionLog", 'String'>
    readonly start_time: FieldRef<"SessionLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SessionLog findUnique
   */
  export type SessionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Filter, which SessionLog to fetch.
     */
    where: SessionLogWhereUniqueInput
  }

  /**
   * SessionLog findUniqueOrThrow
   */
  export type SessionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Filter, which SessionLog to fetch.
     */
    where: SessionLogWhereUniqueInput
  }

  /**
   * SessionLog findFirst
   */
  export type SessionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Filter, which SessionLog to fetch.
     */
    where?: SessionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionLogs to fetch.
     */
    orderBy?: SessionLogOrderByWithRelationInput | SessionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionLogs.
     */
    cursor?: SessionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionLogs.
     */
    distinct?: SessionLogScalarFieldEnum | SessionLogScalarFieldEnum[]
  }

  /**
   * SessionLog findFirstOrThrow
   */
  export type SessionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Filter, which SessionLog to fetch.
     */
    where?: SessionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionLogs to fetch.
     */
    orderBy?: SessionLogOrderByWithRelationInput | SessionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionLogs.
     */
    cursor?: SessionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionLogs.
     */
    distinct?: SessionLogScalarFieldEnum | SessionLogScalarFieldEnum[]
  }

  /**
   * SessionLog findMany
   */
  export type SessionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Filter, which SessionLogs to fetch.
     */
    where?: SessionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionLogs to fetch.
     */
    orderBy?: SessionLogOrderByWithRelationInput | SessionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionLogs.
     */
    cursor?: SessionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionLogs.
     */
    skip?: number
    distinct?: SessionLogScalarFieldEnum | SessionLogScalarFieldEnum[]
  }

  /**
   * SessionLog create
   */
  export type SessionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * The data needed to create a SessionLog.
     */
    data: XOR<SessionLogCreateInput, SessionLogUncheckedCreateInput>
  }

  /**
   * SessionLog createMany
   */
  export type SessionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionLogs.
     */
    data: SessionLogCreateManyInput | SessionLogCreateManyInput[]
  }

  /**
   * SessionLog createManyAndReturn
   */
  export type SessionLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SessionLogs.
     */
    data: SessionLogCreateManyInput | SessionLogCreateManyInput[]
  }

  /**
   * SessionLog update
   */
  export type SessionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * The data needed to update a SessionLog.
     */
    data: XOR<SessionLogUpdateInput, SessionLogUncheckedUpdateInput>
    /**
     * Choose, which SessionLog to update.
     */
    where: SessionLogWhereUniqueInput
  }

  /**
   * SessionLog updateMany
   */
  export type SessionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionLogs.
     */
    data: XOR<SessionLogUpdateManyMutationInput, SessionLogUncheckedUpdateManyInput>
    /**
     * Filter which SessionLogs to update
     */
    where?: SessionLogWhereInput
  }

  /**
   * SessionLog upsert
   */
  export type SessionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * The filter to search for the SessionLog to update in case it exists.
     */
    where: SessionLogWhereUniqueInput
    /**
     * In case the SessionLog found by the `where` argument doesn't exist, create a new SessionLog with this data.
     */
    create: XOR<SessionLogCreateInput, SessionLogUncheckedCreateInput>
    /**
     * In case the SessionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionLogUpdateInput, SessionLogUncheckedUpdateInput>
  }

  /**
   * SessionLog delete
   */
  export type SessionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
    /**
     * Filter which SessionLog to delete.
     */
    where: SessionLogWhereUniqueInput
  }

  /**
   * SessionLog deleteMany
   */
  export type SessionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionLogs to delete
     */
    where?: SessionLogWhereInput
  }

  /**
   * SessionLog without action
   */
  export type SessionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionLog
     */
    select?: SessionLogSelect<ExtArgs> | null
  }


  /**
   * Model SupportTicket
   */

  export type AggregateSupportTicket = {
    _count: SupportTicketCountAggregateOutputType | null
    _min: SupportTicketMinAggregateOutputType | null
    _max: SupportTicketMaxAggregateOutputType | null
  }

  export type SupportTicketMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    message: string | null
    reply: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SupportTicketMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    message: string | null
    reply: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SupportTicketCountAggregateOutputType = {
    id: number
    name: number
    email: number
    message: number
    reply: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SupportTicketMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    reply?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type SupportTicketMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    reply?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type SupportTicketCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    reply?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SupportTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportTicket to aggregate.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupportTickets
    **/
    _count?: true | SupportTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportTicketMaxAggregateInputType
  }

  export type GetSupportTicketAggregateType<T extends SupportTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateSupportTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupportTicket[P]>
      : GetScalarType<T[P], AggregateSupportTicket[P]>
  }




  export type SupportTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportTicketWhereInput
    orderBy?: SupportTicketOrderByWithAggregationInput | SupportTicketOrderByWithAggregationInput[]
    by: SupportTicketScalarFieldEnum[] | SupportTicketScalarFieldEnum
    having?: SupportTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportTicketCountAggregateInputType | true
    _min?: SupportTicketMinAggregateInputType
    _max?: SupportTicketMaxAggregateInputType
  }

  export type SupportTicketGroupByOutputType = {
    id: string
    name: string
    email: string
    message: string
    reply: string | null
    status: string
    created_at: Date
    updated_at: Date
    _count: SupportTicketCountAggregateOutputType | null
    _min: SupportTicketMinAggregateOutputType | null
    _max: SupportTicketMaxAggregateOutputType | null
  }

  type GetSupportTicketGroupByPayload<T extends SupportTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportTicketGroupByOutputType[P]>
            : GetScalarType<T[P], SupportTicketGroupByOutputType[P]>
        }
      >
    >


  export type SupportTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    reply?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["supportTicket"]>

  export type SupportTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    reply?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["supportTicket"]>

  export type SupportTicketSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    reply?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $SupportTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupportTicket"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      message: string
      reply: string | null
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["supportTicket"]>
    composites: {}
  }

  type SupportTicketGetPayload<S extends boolean | null | undefined | SupportTicketDefaultArgs> = $Result.GetResult<Prisma.$SupportTicketPayload, S>

  type SupportTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupportTicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupportTicketCountAggregateInputType | true
    }

  export interface SupportTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupportTicket'], meta: { name: 'SupportTicket' } }
    /**
     * Find zero or one SupportTicket that matches the filter.
     * @param {SupportTicketFindUniqueArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportTicketFindUniqueArgs>(args: SelectSubset<T, SupportTicketFindUniqueArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SupportTicket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupportTicketFindUniqueOrThrowArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SupportTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindFirstArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportTicketFindFirstArgs>(args?: SelectSubset<T, SupportTicketFindFirstArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SupportTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindFirstOrThrowArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SupportTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupportTickets
     * const supportTickets = await prisma.supportTicket.findMany()
     * 
     * // Get first 10 SupportTickets
     * const supportTickets = await prisma.supportTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportTicketWithIdOnly = await prisma.supportTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportTicketFindManyArgs>(args?: SelectSubset<T, SupportTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SupportTicket.
     * @param {SupportTicketCreateArgs} args - Arguments to create a SupportTicket.
     * @example
     * // Create one SupportTicket
     * const SupportTicket = await prisma.supportTicket.create({
     *   data: {
     *     // ... data to create a SupportTicket
     *   }
     * })
     * 
     */
    create<T extends SupportTicketCreateArgs>(args: SelectSubset<T, SupportTicketCreateArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SupportTickets.
     * @param {SupportTicketCreateManyArgs} args - Arguments to create many SupportTickets.
     * @example
     * // Create many SupportTickets
     * const supportTicket = await prisma.supportTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportTicketCreateManyArgs>(args?: SelectSubset<T, SupportTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupportTickets and returns the data saved in the database.
     * @param {SupportTicketCreateManyAndReturnArgs} args - Arguments to create many SupportTickets.
     * @example
     * // Create many SupportTickets
     * const supportTicket = await prisma.supportTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupportTickets and only return the `id`
     * const supportTicketWithIdOnly = await prisma.supportTicket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupportTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, SupportTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SupportTicket.
     * @param {SupportTicketDeleteArgs} args - Arguments to delete one SupportTicket.
     * @example
     * // Delete one SupportTicket
     * const SupportTicket = await prisma.supportTicket.delete({
     *   where: {
     *     // ... filter to delete one SupportTicket
     *   }
     * })
     * 
     */
    delete<T extends SupportTicketDeleteArgs>(args: SelectSubset<T, SupportTicketDeleteArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SupportTicket.
     * @param {SupportTicketUpdateArgs} args - Arguments to update one SupportTicket.
     * @example
     * // Update one SupportTicket
     * const supportTicket = await prisma.supportTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportTicketUpdateArgs>(args: SelectSubset<T, SupportTicketUpdateArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SupportTickets.
     * @param {SupportTicketDeleteManyArgs} args - Arguments to filter SupportTickets to delete.
     * @example
     * // Delete a few SupportTickets
     * const { count } = await prisma.supportTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportTicketDeleteManyArgs>(args?: SelectSubset<T, SupportTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupportTickets
     * const supportTicket = await prisma.supportTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportTicketUpdateManyArgs>(args: SelectSubset<T, SupportTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupportTicket.
     * @param {SupportTicketUpsertArgs} args - Arguments to update or create a SupportTicket.
     * @example
     * // Update or create a SupportTicket
     * const supportTicket = await prisma.supportTicket.upsert({
     *   create: {
     *     // ... data to create a SupportTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupportTicket we want to update
     *   }
     * })
     */
    upsert<T extends SupportTicketUpsertArgs>(args: SelectSubset<T, SupportTicketUpsertArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SupportTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketCountArgs} args - Arguments to filter SupportTickets to count.
     * @example
     * // Count the number of SupportTickets
     * const count = await prisma.supportTicket.count({
     *   where: {
     *     // ... the filter for the SupportTickets we want to count
     *   }
     * })
    **/
    count<T extends SupportTicketCountArgs>(
      args?: Subset<T, SupportTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupportTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupportTicketAggregateArgs>(args: Subset<T, SupportTicketAggregateArgs>): Prisma.PrismaPromise<GetSupportTicketAggregateType<T>>

    /**
     * Group by SupportTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupportTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportTicketGroupByArgs['orderBy'] }
        : { orderBy?: SupportTicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupportTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupportTicket model
   */
  readonly fields: SupportTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupportTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupportTicket model
   */ 
  interface SupportTicketFieldRefs {
    readonly id: FieldRef<"SupportTicket", 'String'>
    readonly name: FieldRef<"SupportTicket", 'String'>
    readonly email: FieldRef<"SupportTicket", 'String'>
    readonly message: FieldRef<"SupportTicket", 'String'>
    readonly reply: FieldRef<"SupportTicket", 'String'>
    readonly status: FieldRef<"SupportTicket", 'String'>
    readonly created_at: FieldRef<"SupportTicket", 'DateTime'>
    readonly updated_at: FieldRef<"SupportTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupportTicket findUnique
   */
  export type SupportTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket findUniqueOrThrow
   */
  export type SupportTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket findFirst
   */
  export type SupportTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportTickets.
     */
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket findFirstOrThrow
   */
  export type SupportTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportTickets.
     */
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket findMany
   */
  export type SupportTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Filter, which SupportTickets to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket create
   */
  export type SupportTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * The data needed to create a SupportTicket.
     */
    data: XOR<SupportTicketCreateInput, SupportTicketUncheckedCreateInput>
  }

  /**
   * SupportTicket createMany
   */
  export type SupportTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupportTickets.
     */
    data: SupportTicketCreateManyInput | SupportTicketCreateManyInput[]
  }

  /**
   * SupportTicket createManyAndReturn
   */
  export type SupportTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SupportTickets.
     */
    data: SupportTicketCreateManyInput | SupportTicketCreateManyInput[]
  }

  /**
   * SupportTicket update
   */
  export type SupportTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * The data needed to update a SupportTicket.
     */
    data: XOR<SupportTicketUpdateInput, SupportTicketUncheckedUpdateInput>
    /**
     * Choose, which SupportTicket to update.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket updateMany
   */
  export type SupportTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupportTickets.
     */
    data: XOR<SupportTicketUpdateManyMutationInput, SupportTicketUncheckedUpdateManyInput>
    /**
     * Filter which SupportTickets to update
     */
    where?: SupportTicketWhereInput
  }

  /**
   * SupportTicket upsert
   */
  export type SupportTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * The filter to search for the SupportTicket to update in case it exists.
     */
    where: SupportTicketWhereUniqueInput
    /**
     * In case the SupportTicket found by the `where` argument doesn't exist, create a new SupportTicket with this data.
     */
    create: XOR<SupportTicketCreateInput, SupportTicketUncheckedCreateInput>
    /**
     * In case the SupportTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportTicketUpdateInput, SupportTicketUncheckedUpdateInput>
  }

  /**
   * SupportTicket delete
   */
  export type SupportTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Filter which SupportTicket to delete.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket deleteMany
   */
  export type SupportTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportTickets to delete
     */
    where?: SupportTicketWhereInput
  }

  /**
   * SupportTicket without action
   */
  export type SupportTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
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

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const PartnerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo',
    link: 'link',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PartnerScalarFieldEnum = (typeof PartnerScalarFieldEnum)[keyof typeof PartnerScalarFieldEnum]


  export const ItemScalarFieldEnum: {
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

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ProfitableItemScalarFieldEnum: {
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

  export type ProfitableItemScalarFieldEnum = (typeof ProfitableItemScalarFieldEnum)[keyof typeof ProfitableItemScalarFieldEnum]


  export const OpportunityLockScalarFieldEnum: {
    id: 'id',
    expires_at: 'expires_at',
    created_at: 'created_at'
  };

  export type OpportunityLockScalarFieldEnum = (typeof OpportunityLockScalarFieldEnum)[keyof typeof OpportunityLockScalarFieldEnum]


  export const SnapshotVersionScalarFieldEnum: {
    id: 'id',
    version: 'version',
    status: 'status',
    updated_at: 'updated_at'
  };

  export type SnapshotVersionScalarFieldEnum = (typeof SnapshotVersionScalarFieldEnum)[keyof typeof SnapshotVersionScalarFieldEnum]


  export const MarketSnapshotScalarFieldEnum: {
    id: 'id',
    version: 'version',
    partition: 'partition',
    item_name: 'item_name',
    price: 'price',
    platform: 'platform',
    created_at: 'created_at'
  };

  export type MarketSnapshotScalarFieldEnum = (typeof MarketSnapshotScalarFieldEnum)[keyof typeof MarketSnapshotScalarFieldEnum]


  export const StreamingEventScalarFieldEnum: {
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

  export type StreamingEventScalarFieldEnum = (typeof StreamingEventScalarFieldEnum)[keyof typeof StreamingEventScalarFieldEnum]


  export const LoadPatternScalarFieldEnum: {
    id: 'id',
    hour: 'hour',
    avg_load: 'avg_load',
    peak_load: 'peak_load',
    updated_at: 'updated_at'
  };

  export type LoadPatternScalarFieldEnum = (typeof LoadPatternScalarFieldEnum)[keyof typeof LoadPatternScalarFieldEnum]


  export const RetryPerformanceScalarFieldEnum: {
    id: 'id',
    delay_range: 'delay_range',
    success_count: 'success_count',
    failure_count: 'failure_count',
    updated_at: 'updated_at'
  };

  export type RetryPerformanceScalarFieldEnum = (typeof RetryPerformanceScalarFieldEnum)[keyof typeof RetryPerformanceScalarFieldEnum]


  export const ExecutionRecordScalarFieldEnum: {
    id: 'id',
    idempotency_key: 'idempotency_key',
    item_name: 'item_name',
    buy_price: 'buy_price',
    sell_price: 'sell_price',
    status: 'status',
    tx_hash: 'tx_hash',
    created_at: 'created_at'
  };

  export type ExecutionRecordScalarFieldEnum = (typeof ExecutionRecordScalarFieldEnum)[keyof typeof ExecutionRecordScalarFieldEnum]


  export const CMSContentScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description',
    updated_at: 'updated_at'
  };

  export type CMSContentScalarFieldEnum = (typeof CMSContentScalarFieldEnum)[keyof typeof CMSContentScalarFieldEnum]


  export const AnalyticsLogScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    user_agent: 'user_agent',
    page: 'page',
    timestamp: 'timestamp'
  };

  export type AnalyticsLogScalarFieldEnum = (typeof AnalyticsLogScalarFieldEnum)[keyof typeof AnalyticsLogScalarFieldEnum]


  export const SessionLogScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    device_type: 'device_type',
    browser: 'browser',
    start_time: 'start_time'
  };

  export type SessionLogScalarFieldEnum = (typeof SessionLogScalarFieldEnum)[keyof typeof SessionLogScalarFieldEnum]


  export const SupportTicketScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    message: 'message',
    reply: 'reply',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SupportTicketScalarFieldEnum = (typeof SupportTicketScalarFieldEnum)[keyof typeof SupportTicketScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password_hash?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    notification_prefs?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password_hash?: SortOrderInput | SortOrder
    role?: SortOrder
    notification_prefs?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpires?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    resetToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password_hash?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    notification_prefs?: StringNullableFilter<"User"> | string | null
    resetTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email" | "resetToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password_hash?: SortOrderInput | SortOrder
    role?: SortOrder
    notification_prefs?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpires?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password_hash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    notification_prefs?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    status?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type PartnerWhereInput = {
    AND?: PartnerWhereInput | PartnerWhereInput[]
    OR?: PartnerWhereInput[]
    NOT?: PartnerWhereInput | PartnerWhereInput[]
    id?: StringFilter<"Partner"> | string
    name?: StringFilter<"Partner"> | string
    logo?: StringFilter<"Partner"> | string
    link?: StringFilter<"Partner"> | string
    active?: BoolFilter<"Partner"> | boolean
    created_at?: DateTimeFilter<"Partner"> | Date | string
    updated_at?: DateTimeFilter<"Partner"> | Date | string
  }

  export type PartnerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    link?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PartnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PartnerWhereInput | PartnerWhereInput[]
    OR?: PartnerWhereInput[]
    NOT?: PartnerWhereInput | PartnerWhereInput[]
    name?: StringFilter<"Partner"> | string
    logo?: StringFilter<"Partner"> | string
    link?: StringFilter<"Partner"> | string
    active?: BoolFilter<"Partner"> | boolean
    created_at?: DateTimeFilter<"Partner"> | Date | string
    updated_at?: DateTimeFilter<"Partner"> | Date | string
  }, "id">

  export type PartnerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    link?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PartnerCountOrderByAggregateInput
    _max?: PartnerMaxOrderByAggregateInput
    _min?: PartnerMinOrderByAggregateInput
  }

  export type PartnerScalarWhereWithAggregatesInput = {
    AND?: PartnerScalarWhereWithAggregatesInput | PartnerScalarWhereWithAggregatesInput[]
    OR?: PartnerScalarWhereWithAggregatesInput[]
    NOT?: PartnerScalarWhereWithAggregatesInput | PartnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Partner"> | string
    name?: StringWithAggregatesFilter<"Partner"> | string
    logo?: StringWithAggregatesFilter<"Partner"> | string
    link?: StringWithAggregatesFilter<"Partner"> | string
    active?: BoolWithAggregatesFilter<"Partner"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Partner"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Partner"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    item_name?: StringFilter<"Item"> | string
    steam_price?: FloatFilter<"Item"> | number
    csfloat_price?: FloatFilter<"Item"> | number
    prev_steam_price?: FloatNullableFilter<"Item"> | number | null
    prev_csfloat_price?: FloatNullableFilter<"Item"> | number | null
    volume?: IntFilter<"Item"> | number
    prev_volume?: IntNullableFilter<"Item"> | number | null
    listing_count?: IntFilter<"Item"> | number
    prev_listing_count?: IntNullableFilter<"Item"> | number | null
    opportunity_count?: IntFilter<"Item"> | number
    competition_score?: FloatFilter<"Item"> | number
    last_api_timestamp?: DateTimeNullableFilter<"Item"> | Date | string | null
    fetch_count?: IntFilter<"Item"> | number
    comp_update_count?: IntFilter<"Item"> | number
    profit_started_at?: DateTimeNullableFilter<"Item"> | Date | string | null
    sell_velocity?: FloatFilter<"Item"> | number
    demand_intensity?: FloatFilter<"Item"> | number
    updated_at?: DateTimeFilter<"Item"> | Date | string
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    item_name?: SortOrder
    steam_price?: SortOrder
    csfloat_price?: SortOrder
    prev_steam_price?: SortOrderInput | SortOrder
    prev_csfloat_price?: SortOrderInput | SortOrder
    volume?: SortOrder
    prev_volume?: SortOrderInput | SortOrder
    listing_count?: SortOrder
    prev_listing_count?: SortOrderInput | SortOrder
    opportunity_count?: SortOrder
    competition_score?: SortOrder
    last_api_timestamp?: SortOrderInput | SortOrder
    fetch_count?: SortOrder
    comp_update_count?: SortOrder
    profit_started_at?: SortOrderInput | SortOrder
    sell_velocity?: SortOrder
    demand_intensity?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    item_name?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    steam_price?: FloatFilter<"Item"> | number
    csfloat_price?: FloatFilter<"Item"> | number
    prev_steam_price?: FloatNullableFilter<"Item"> | number | null
    prev_csfloat_price?: FloatNullableFilter<"Item"> | number | null
    volume?: IntFilter<"Item"> | number
    prev_volume?: IntNullableFilter<"Item"> | number | null
    listing_count?: IntFilter<"Item"> | number
    prev_listing_count?: IntNullableFilter<"Item"> | number | null
    opportunity_count?: IntFilter<"Item"> | number
    competition_score?: FloatFilter<"Item"> | number
    last_api_timestamp?: DateTimeNullableFilter<"Item"> | Date | string | null
    fetch_count?: IntFilter<"Item"> | number
    comp_update_count?: IntFilter<"Item"> | number
    profit_started_at?: DateTimeNullableFilter<"Item"> | Date | string | null
    sell_velocity?: FloatFilter<"Item"> | number
    demand_intensity?: FloatFilter<"Item"> | number
    updated_at?: DateTimeFilter<"Item"> | Date | string
  }, "id" | "item_name">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    item_name?: SortOrder
    steam_price?: SortOrder
    csfloat_price?: SortOrder
    prev_steam_price?: SortOrderInput | SortOrder
    prev_csfloat_price?: SortOrderInput | SortOrder
    volume?: SortOrder
    prev_volume?: SortOrderInput | SortOrder
    listing_count?: SortOrder
    prev_listing_count?: SortOrderInput | SortOrder
    opportunity_count?: SortOrder
    competition_score?: SortOrder
    last_api_timestamp?: SortOrderInput | SortOrder
    fetch_count?: SortOrder
    comp_update_count?: SortOrder
    profit_started_at?: SortOrderInput | SortOrder
    sell_velocity?: SortOrder
    demand_intensity?: SortOrder
    updated_at?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    item_name?: StringWithAggregatesFilter<"Item"> | string
    steam_price?: FloatWithAggregatesFilter<"Item"> | number
    csfloat_price?: FloatWithAggregatesFilter<"Item"> | number
    prev_steam_price?: FloatNullableWithAggregatesFilter<"Item"> | number | null
    prev_csfloat_price?: FloatNullableWithAggregatesFilter<"Item"> | number | null
    volume?: IntWithAggregatesFilter<"Item"> | number
    prev_volume?: IntNullableWithAggregatesFilter<"Item"> | number | null
    listing_count?: IntWithAggregatesFilter<"Item"> | number
    prev_listing_count?: IntNullableWithAggregatesFilter<"Item"> | number | null
    opportunity_count?: IntWithAggregatesFilter<"Item"> | number
    competition_score?: FloatWithAggregatesFilter<"Item"> | number
    last_api_timestamp?: DateTimeNullableWithAggregatesFilter<"Item"> | Date | string | null
    fetch_count?: IntWithAggregatesFilter<"Item"> | number
    comp_update_count?: IntWithAggregatesFilter<"Item"> | number
    profit_started_at?: DateTimeNullableWithAggregatesFilter<"Item"> | Date | string | null
    sell_velocity?: FloatWithAggregatesFilter<"Item"> | number
    demand_intensity?: FloatWithAggregatesFilter<"Item"> | number
    updated_at?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type ProfitableItemWhereInput = {
    AND?: ProfitableItemWhereInput | ProfitableItemWhereInput[]
    OR?: ProfitableItemWhereInput[]
    NOT?: ProfitableItemWhereInput | ProfitableItemWhereInput[]
    id?: IntFilter<"ProfitableItem"> | number
    item_name?: StringFilter<"ProfitableItem"> | string
    buy_from?: StringFilter<"ProfitableItem"> | string
    sell_to?: StringFilter<"ProfitableItem"> | string
    buy_price?: FloatFilter<"ProfitableItem"> | number
    sell_price?: FloatFilter<"ProfitableItem"> | number
    net_profit?: FloatFilter<"ProfitableItem"> | number
    profit_percent?: FloatFilter<"ProfitableItem"> | number
    liquidity_score?: FloatFilter<"ProfitableItem"> | number
    intelligence_score?: FloatFilter<"ProfitableItem"> | number
    saturation_score?: FloatFilter<"ProfitableItem"> | number
    execution_probability?: FloatFilter<"ProfitableItem"> | number
    slippage_risk?: FloatFilter<"ProfitableItem"> | number
    market_stability?: FloatFilter<"ProfitableItem"> | number
    execution_score?: FloatFilter<"ProfitableItem"> | number
    status?: StringFilter<"ProfitableItem"> | string
    review_score?: FloatFilter<"ProfitableItem"> | number
    is_sniper?: BoolFilter<"ProfitableItem"> | boolean
    created_at?: DateTimeFilter<"ProfitableItem"> | Date | string
  }

  export type ProfitableItemOrderByWithRelationInput = {
    id?: SortOrder
    item_name?: SortOrder
    buy_from?: SortOrder
    sell_to?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    net_profit?: SortOrder
    profit_percent?: SortOrder
    liquidity_score?: SortOrder
    intelligence_score?: SortOrder
    saturation_score?: SortOrder
    execution_probability?: SortOrder
    slippage_risk?: SortOrder
    market_stability?: SortOrder
    execution_score?: SortOrder
    status?: SortOrder
    review_score?: SortOrder
    is_sniper?: SortOrder
    created_at?: SortOrder
  }

  export type ProfitableItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfitableItemWhereInput | ProfitableItemWhereInput[]
    OR?: ProfitableItemWhereInput[]
    NOT?: ProfitableItemWhereInput | ProfitableItemWhereInput[]
    item_name?: StringFilter<"ProfitableItem"> | string
    buy_from?: StringFilter<"ProfitableItem"> | string
    sell_to?: StringFilter<"ProfitableItem"> | string
    buy_price?: FloatFilter<"ProfitableItem"> | number
    sell_price?: FloatFilter<"ProfitableItem"> | number
    net_profit?: FloatFilter<"ProfitableItem"> | number
    profit_percent?: FloatFilter<"ProfitableItem"> | number
    liquidity_score?: FloatFilter<"ProfitableItem"> | number
    intelligence_score?: FloatFilter<"ProfitableItem"> | number
    saturation_score?: FloatFilter<"ProfitableItem"> | number
    execution_probability?: FloatFilter<"ProfitableItem"> | number
    slippage_risk?: FloatFilter<"ProfitableItem"> | number
    market_stability?: FloatFilter<"ProfitableItem"> | number
    execution_score?: FloatFilter<"ProfitableItem"> | number
    status?: StringFilter<"ProfitableItem"> | string
    review_score?: FloatFilter<"ProfitableItem"> | number
    is_sniper?: BoolFilter<"ProfitableItem"> | boolean
    created_at?: DateTimeFilter<"ProfitableItem"> | Date | string
  }, "id">

  export type ProfitableItemOrderByWithAggregationInput = {
    id?: SortOrder
    item_name?: SortOrder
    buy_from?: SortOrder
    sell_to?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    net_profit?: SortOrder
    profit_percent?: SortOrder
    liquidity_score?: SortOrder
    intelligence_score?: SortOrder
    saturation_score?: SortOrder
    execution_probability?: SortOrder
    slippage_risk?: SortOrder
    market_stability?: SortOrder
    execution_score?: SortOrder
    status?: SortOrder
    review_score?: SortOrder
    is_sniper?: SortOrder
    created_at?: SortOrder
    _count?: ProfitableItemCountOrderByAggregateInput
    _avg?: ProfitableItemAvgOrderByAggregateInput
    _max?: ProfitableItemMaxOrderByAggregateInput
    _min?: ProfitableItemMinOrderByAggregateInput
    _sum?: ProfitableItemSumOrderByAggregateInput
  }

  export type ProfitableItemScalarWhereWithAggregatesInput = {
    AND?: ProfitableItemScalarWhereWithAggregatesInput | ProfitableItemScalarWhereWithAggregatesInput[]
    OR?: ProfitableItemScalarWhereWithAggregatesInput[]
    NOT?: ProfitableItemScalarWhereWithAggregatesInput | ProfitableItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProfitableItem"> | number
    item_name?: StringWithAggregatesFilter<"ProfitableItem"> | string
    buy_from?: StringWithAggregatesFilter<"ProfitableItem"> | string
    sell_to?: StringWithAggregatesFilter<"ProfitableItem"> | string
    buy_price?: FloatWithAggregatesFilter<"ProfitableItem"> | number
    sell_price?: FloatWithAggregatesFilter<"ProfitableItem"> | number
    net_profit?: FloatWithAggregatesFilter<"ProfitableItem"> | number
    profit_percent?: FloatWithAggregatesFilter<"ProfitableItem"> | number
    liquidity_score?: FloatWithAggregatesFilter<"ProfitableItem"> | number
    intelligence_score?: FloatWithAggregatesFilter<"ProfitableItem"> | number
    saturation_score?: FloatWithAggregatesFilter<"ProfitableItem"> | number
    execution_probability?: FloatWithAggregatesFilter<"ProfitableItem"> | number
    slippage_risk?: FloatWithAggregatesFilter<"ProfitableItem"> | number
    market_stability?: FloatWithAggregatesFilter<"ProfitableItem"> | number
    execution_score?: FloatWithAggregatesFilter<"ProfitableItem"> | number
    status?: StringWithAggregatesFilter<"ProfitableItem"> | string
    review_score?: FloatWithAggregatesFilter<"ProfitableItem"> | number
    is_sniper?: BoolWithAggregatesFilter<"ProfitableItem"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"ProfitableItem"> | Date | string
  }

  export type OpportunityLockWhereInput = {
    AND?: OpportunityLockWhereInput | OpportunityLockWhereInput[]
    OR?: OpportunityLockWhereInput[]
    NOT?: OpportunityLockWhereInput | OpportunityLockWhereInput[]
    id?: StringFilter<"OpportunityLock"> | string
    expires_at?: DateTimeFilter<"OpportunityLock"> | Date | string
    created_at?: DateTimeFilter<"OpportunityLock"> | Date | string
  }

  export type OpportunityLockOrderByWithRelationInput = {
    id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type OpportunityLockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OpportunityLockWhereInput | OpportunityLockWhereInput[]
    OR?: OpportunityLockWhereInput[]
    NOT?: OpportunityLockWhereInput | OpportunityLockWhereInput[]
    expires_at?: DateTimeFilter<"OpportunityLock"> | Date | string
    created_at?: DateTimeFilter<"OpportunityLock"> | Date | string
  }, "id">

  export type OpportunityLockOrderByWithAggregationInput = {
    id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    _count?: OpportunityLockCountOrderByAggregateInput
    _max?: OpportunityLockMaxOrderByAggregateInput
    _min?: OpportunityLockMinOrderByAggregateInput
  }

  export type OpportunityLockScalarWhereWithAggregatesInput = {
    AND?: OpportunityLockScalarWhereWithAggregatesInput | OpportunityLockScalarWhereWithAggregatesInput[]
    OR?: OpportunityLockScalarWhereWithAggregatesInput[]
    NOT?: OpportunityLockScalarWhereWithAggregatesInput | OpportunityLockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OpportunityLock"> | string
    expires_at?: DateTimeWithAggregatesFilter<"OpportunityLock"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"OpportunityLock"> | Date | string
  }

  export type SnapshotVersionWhereInput = {
    AND?: SnapshotVersionWhereInput | SnapshotVersionWhereInput[]
    OR?: SnapshotVersionWhereInput[]
    NOT?: SnapshotVersionWhereInput | SnapshotVersionWhereInput[]
    id?: IntFilter<"SnapshotVersion"> | number
    version?: IntFilter<"SnapshotVersion"> | number
    status?: StringFilter<"SnapshotVersion"> | string
    updated_at?: DateTimeFilter<"SnapshotVersion"> | Date | string
  }

  export type SnapshotVersionOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
  }

  export type SnapshotVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SnapshotVersionWhereInput | SnapshotVersionWhereInput[]
    OR?: SnapshotVersionWhereInput[]
    NOT?: SnapshotVersionWhereInput | SnapshotVersionWhereInput[]
    version?: IntFilter<"SnapshotVersion"> | number
    status?: StringFilter<"SnapshotVersion"> | string
    updated_at?: DateTimeFilter<"SnapshotVersion"> | Date | string
  }, "id">

  export type SnapshotVersionOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
    _count?: SnapshotVersionCountOrderByAggregateInput
    _avg?: SnapshotVersionAvgOrderByAggregateInput
    _max?: SnapshotVersionMaxOrderByAggregateInput
    _min?: SnapshotVersionMinOrderByAggregateInput
    _sum?: SnapshotVersionSumOrderByAggregateInput
  }

  export type SnapshotVersionScalarWhereWithAggregatesInput = {
    AND?: SnapshotVersionScalarWhereWithAggregatesInput | SnapshotVersionScalarWhereWithAggregatesInput[]
    OR?: SnapshotVersionScalarWhereWithAggregatesInput[]
    NOT?: SnapshotVersionScalarWhereWithAggregatesInput | SnapshotVersionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SnapshotVersion"> | number
    version?: IntWithAggregatesFilter<"SnapshotVersion"> | number
    status?: StringWithAggregatesFilter<"SnapshotVersion"> | string
    updated_at?: DateTimeWithAggregatesFilter<"SnapshotVersion"> | Date | string
  }

  export type MarketSnapshotWhereInput = {
    AND?: MarketSnapshotWhereInput | MarketSnapshotWhereInput[]
    OR?: MarketSnapshotWhereInput[]
    NOT?: MarketSnapshotWhereInput | MarketSnapshotWhereInput[]
    id?: IntFilter<"MarketSnapshot"> | number
    version?: IntFilter<"MarketSnapshot"> | number
    partition?: IntFilter<"MarketSnapshot"> | number
    item_name?: StringFilter<"MarketSnapshot"> | string
    price?: FloatFilter<"MarketSnapshot"> | number
    platform?: StringFilter<"MarketSnapshot"> | string
    created_at?: DateTimeFilter<"MarketSnapshot"> | Date | string
  }

  export type MarketSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrder
    partition?: SortOrder
    item_name?: SortOrder
    price?: SortOrder
    platform?: SortOrder
    created_at?: SortOrder
  }

  export type MarketSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MarketSnapshotWhereInput | MarketSnapshotWhereInput[]
    OR?: MarketSnapshotWhereInput[]
    NOT?: MarketSnapshotWhereInput | MarketSnapshotWhereInput[]
    version?: IntFilter<"MarketSnapshot"> | number
    partition?: IntFilter<"MarketSnapshot"> | number
    item_name?: StringFilter<"MarketSnapshot"> | string
    price?: FloatFilter<"MarketSnapshot"> | number
    platform?: StringFilter<"MarketSnapshot"> | string
    created_at?: DateTimeFilter<"MarketSnapshot"> | Date | string
  }, "id">

  export type MarketSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrder
    partition?: SortOrder
    item_name?: SortOrder
    price?: SortOrder
    platform?: SortOrder
    created_at?: SortOrder
    _count?: MarketSnapshotCountOrderByAggregateInput
    _avg?: MarketSnapshotAvgOrderByAggregateInput
    _max?: MarketSnapshotMaxOrderByAggregateInput
    _min?: MarketSnapshotMinOrderByAggregateInput
    _sum?: MarketSnapshotSumOrderByAggregateInput
  }

  export type MarketSnapshotScalarWhereWithAggregatesInput = {
    AND?: MarketSnapshotScalarWhereWithAggregatesInput | MarketSnapshotScalarWhereWithAggregatesInput[]
    OR?: MarketSnapshotScalarWhereWithAggregatesInput[]
    NOT?: MarketSnapshotScalarWhereWithAggregatesInput | MarketSnapshotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MarketSnapshot"> | number
    version?: IntWithAggregatesFilter<"MarketSnapshot"> | number
    partition?: IntWithAggregatesFilter<"MarketSnapshot"> | number
    item_name?: StringWithAggregatesFilter<"MarketSnapshot"> | string
    price?: FloatWithAggregatesFilter<"MarketSnapshot"> | number
    platform?: StringWithAggregatesFilter<"MarketSnapshot"> | string
    created_at?: DateTimeWithAggregatesFilter<"MarketSnapshot"> | Date | string
  }

  export type StreamingEventWhereInput = {
    AND?: StreamingEventWhereInput | StreamingEventWhereInput[]
    OR?: StreamingEventWhereInput[]
    NOT?: StreamingEventWhereInput | StreamingEventWhereInput[]
    id?: StringFilter<"StreamingEvent"> | string
    type?: StringFilter<"StreamingEvent"> | string
    partition?: IntFilter<"StreamingEvent"> | number
    priority?: StringFilter<"StreamingEvent"> | string
    score?: IntFilter<"StreamingEvent"> | number
    payload?: StringFilter<"StreamingEvent"> | string
    retry_count?: IntFilter<"StreamingEvent"> | number
    status?: StringFilter<"StreamingEvent"> | string
    created_at?: DateTimeFilter<"StreamingEvent"> | Date | string
    updated_at?: DateTimeFilter<"StreamingEvent"> | Date | string
  }

  export type StreamingEventOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    partition?: SortOrder
    priority?: SortOrder
    score?: SortOrder
    payload?: SortOrder
    retry_count?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StreamingEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StreamingEventWhereInput | StreamingEventWhereInput[]
    OR?: StreamingEventWhereInput[]
    NOT?: StreamingEventWhereInput | StreamingEventWhereInput[]
    type?: StringFilter<"StreamingEvent"> | string
    partition?: IntFilter<"StreamingEvent"> | number
    priority?: StringFilter<"StreamingEvent"> | string
    score?: IntFilter<"StreamingEvent"> | number
    payload?: StringFilter<"StreamingEvent"> | string
    retry_count?: IntFilter<"StreamingEvent"> | number
    status?: StringFilter<"StreamingEvent"> | string
    created_at?: DateTimeFilter<"StreamingEvent"> | Date | string
    updated_at?: DateTimeFilter<"StreamingEvent"> | Date | string
  }, "id">

  export type StreamingEventOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    partition?: SortOrder
    priority?: SortOrder
    score?: SortOrder
    payload?: SortOrder
    retry_count?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: StreamingEventCountOrderByAggregateInput
    _avg?: StreamingEventAvgOrderByAggregateInput
    _max?: StreamingEventMaxOrderByAggregateInput
    _min?: StreamingEventMinOrderByAggregateInput
    _sum?: StreamingEventSumOrderByAggregateInput
  }

  export type StreamingEventScalarWhereWithAggregatesInput = {
    AND?: StreamingEventScalarWhereWithAggregatesInput | StreamingEventScalarWhereWithAggregatesInput[]
    OR?: StreamingEventScalarWhereWithAggregatesInput[]
    NOT?: StreamingEventScalarWhereWithAggregatesInput | StreamingEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StreamingEvent"> | string
    type?: StringWithAggregatesFilter<"StreamingEvent"> | string
    partition?: IntWithAggregatesFilter<"StreamingEvent"> | number
    priority?: StringWithAggregatesFilter<"StreamingEvent"> | string
    score?: IntWithAggregatesFilter<"StreamingEvent"> | number
    payload?: StringWithAggregatesFilter<"StreamingEvent"> | string
    retry_count?: IntWithAggregatesFilter<"StreamingEvent"> | number
    status?: StringWithAggregatesFilter<"StreamingEvent"> | string
    created_at?: DateTimeWithAggregatesFilter<"StreamingEvent"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"StreamingEvent"> | Date | string
  }

  export type LoadPatternWhereInput = {
    AND?: LoadPatternWhereInput | LoadPatternWhereInput[]
    OR?: LoadPatternWhereInput[]
    NOT?: LoadPatternWhereInput | LoadPatternWhereInput[]
    id?: IntFilter<"LoadPattern"> | number
    hour?: IntFilter<"LoadPattern"> | number
    avg_load?: FloatFilter<"LoadPattern"> | number
    peak_load?: FloatFilter<"LoadPattern"> | number
    updated_at?: DateTimeFilter<"LoadPattern"> | Date | string
  }

  export type LoadPatternOrderByWithRelationInput = {
    id?: SortOrder
    hour?: SortOrder
    avg_load?: SortOrder
    peak_load?: SortOrder
    updated_at?: SortOrder
  }

  export type LoadPatternWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    hour?: number
    AND?: LoadPatternWhereInput | LoadPatternWhereInput[]
    OR?: LoadPatternWhereInput[]
    NOT?: LoadPatternWhereInput | LoadPatternWhereInput[]
    avg_load?: FloatFilter<"LoadPattern"> | number
    peak_load?: FloatFilter<"LoadPattern"> | number
    updated_at?: DateTimeFilter<"LoadPattern"> | Date | string
  }, "id" | "hour">

  export type LoadPatternOrderByWithAggregationInput = {
    id?: SortOrder
    hour?: SortOrder
    avg_load?: SortOrder
    peak_load?: SortOrder
    updated_at?: SortOrder
    _count?: LoadPatternCountOrderByAggregateInput
    _avg?: LoadPatternAvgOrderByAggregateInput
    _max?: LoadPatternMaxOrderByAggregateInput
    _min?: LoadPatternMinOrderByAggregateInput
    _sum?: LoadPatternSumOrderByAggregateInput
  }

  export type LoadPatternScalarWhereWithAggregatesInput = {
    AND?: LoadPatternScalarWhereWithAggregatesInput | LoadPatternScalarWhereWithAggregatesInput[]
    OR?: LoadPatternScalarWhereWithAggregatesInput[]
    NOT?: LoadPatternScalarWhereWithAggregatesInput | LoadPatternScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LoadPattern"> | number
    hour?: IntWithAggregatesFilter<"LoadPattern"> | number
    avg_load?: FloatWithAggregatesFilter<"LoadPattern"> | number
    peak_load?: FloatWithAggregatesFilter<"LoadPattern"> | number
    updated_at?: DateTimeWithAggregatesFilter<"LoadPattern"> | Date | string
  }

  export type RetryPerformanceWhereInput = {
    AND?: RetryPerformanceWhereInput | RetryPerformanceWhereInput[]
    OR?: RetryPerformanceWhereInput[]
    NOT?: RetryPerformanceWhereInput | RetryPerformanceWhereInput[]
    id?: IntFilter<"RetryPerformance"> | number
    delay_range?: IntFilter<"RetryPerformance"> | number
    success_count?: IntFilter<"RetryPerformance"> | number
    failure_count?: IntFilter<"RetryPerformance"> | number
    updated_at?: DateTimeFilter<"RetryPerformance"> | Date | string
  }

  export type RetryPerformanceOrderByWithRelationInput = {
    id?: SortOrder
    delay_range?: SortOrder
    success_count?: SortOrder
    failure_count?: SortOrder
    updated_at?: SortOrder
  }

  export type RetryPerformanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    delay_range?: number
    AND?: RetryPerformanceWhereInput | RetryPerformanceWhereInput[]
    OR?: RetryPerformanceWhereInput[]
    NOT?: RetryPerformanceWhereInput | RetryPerformanceWhereInput[]
    success_count?: IntFilter<"RetryPerformance"> | number
    failure_count?: IntFilter<"RetryPerformance"> | number
    updated_at?: DateTimeFilter<"RetryPerformance"> | Date | string
  }, "id" | "delay_range">

  export type RetryPerformanceOrderByWithAggregationInput = {
    id?: SortOrder
    delay_range?: SortOrder
    success_count?: SortOrder
    failure_count?: SortOrder
    updated_at?: SortOrder
    _count?: RetryPerformanceCountOrderByAggregateInput
    _avg?: RetryPerformanceAvgOrderByAggregateInput
    _max?: RetryPerformanceMaxOrderByAggregateInput
    _min?: RetryPerformanceMinOrderByAggregateInput
    _sum?: RetryPerformanceSumOrderByAggregateInput
  }

  export type RetryPerformanceScalarWhereWithAggregatesInput = {
    AND?: RetryPerformanceScalarWhereWithAggregatesInput | RetryPerformanceScalarWhereWithAggregatesInput[]
    OR?: RetryPerformanceScalarWhereWithAggregatesInput[]
    NOT?: RetryPerformanceScalarWhereWithAggregatesInput | RetryPerformanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RetryPerformance"> | number
    delay_range?: IntWithAggregatesFilter<"RetryPerformance"> | number
    success_count?: IntWithAggregatesFilter<"RetryPerformance"> | number
    failure_count?: IntWithAggregatesFilter<"RetryPerformance"> | number
    updated_at?: DateTimeWithAggregatesFilter<"RetryPerformance"> | Date | string
  }

  export type ExecutionRecordWhereInput = {
    AND?: ExecutionRecordWhereInput | ExecutionRecordWhereInput[]
    OR?: ExecutionRecordWhereInput[]
    NOT?: ExecutionRecordWhereInput | ExecutionRecordWhereInput[]
    id?: StringFilter<"ExecutionRecord"> | string
    idempotency_key?: StringFilter<"ExecutionRecord"> | string
    item_name?: StringFilter<"ExecutionRecord"> | string
    buy_price?: FloatFilter<"ExecutionRecord"> | number
    sell_price?: FloatFilter<"ExecutionRecord"> | number
    status?: StringFilter<"ExecutionRecord"> | string
    tx_hash?: StringNullableFilter<"ExecutionRecord"> | string | null
    created_at?: DateTimeFilter<"ExecutionRecord"> | Date | string
  }

  export type ExecutionRecordOrderByWithRelationInput = {
    id?: SortOrder
    idempotency_key?: SortOrder
    item_name?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    status?: SortOrder
    tx_hash?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type ExecutionRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    idempotency_key?: string
    AND?: ExecutionRecordWhereInput | ExecutionRecordWhereInput[]
    OR?: ExecutionRecordWhereInput[]
    NOT?: ExecutionRecordWhereInput | ExecutionRecordWhereInput[]
    item_name?: StringFilter<"ExecutionRecord"> | string
    buy_price?: FloatFilter<"ExecutionRecord"> | number
    sell_price?: FloatFilter<"ExecutionRecord"> | number
    status?: StringFilter<"ExecutionRecord"> | string
    tx_hash?: StringNullableFilter<"ExecutionRecord"> | string | null
    created_at?: DateTimeFilter<"ExecutionRecord"> | Date | string
  }, "id" | "idempotency_key">

  export type ExecutionRecordOrderByWithAggregationInput = {
    id?: SortOrder
    idempotency_key?: SortOrder
    item_name?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    status?: SortOrder
    tx_hash?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ExecutionRecordCountOrderByAggregateInput
    _avg?: ExecutionRecordAvgOrderByAggregateInput
    _max?: ExecutionRecordMaxOrderByAggregateInput
    _min?: ExecutionRecordMinOrderByAggregateInput
    _sum?: ExecutionRecordSumOrderByAggregateInput
  }

  export type ExecutionRecordScalarWhereWithAggregatesInput = {
    AND?: ExecutionRecordScalarWhereWithAggregatesInput | ExecutionRecordScalarWhereWithAggregatesInput[]
    OR?: ExecutionRecordScalarWhereWithAggregatesInput[]
    NOT?: ExecutionRecordScalarWhereWithAggregatesInput | ExecutionRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExecutionRecord"> | string
    idempotency_key?: StringWithAggregatesFilter<"ExecutionRecord"> | string
    item_name?: StringWithAggregatesFilter<"ExecutionRecord"> | string
    buy_price?: FloatWithAggregatesFilter<"ExecutionRecord"> | number
    sell_price?: FloatWithAggregatesFilter<"ExecutionRecord"> | number
    status?: StringWithAggregatesFilter<"ExecutionRecord"> | string
    tx_hash?: StringNullableWithAggregatesFilter<"ExecutionRecord"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ExecutionRecord"> | Date | string
  }

  export type CMSContentWhereInput = {
    AND?: CMSContentWhereInput | CMSContentWhereInput[]
    OR?: CMSContentWhereInput[]
    NOT?: CMSContentWhereInput | CMSContentWhereInput[]
    id?: StringFilter<"CMSContent"> | string
    key?: StringFilter<"CMSContent"> | string
    value?: StringFilter<"CMSContent"> | string
    description?: StringNullableFilter<"CMSContent"> | string | null
    updated_at?: DateTimeFilter<"CMSContent"> | Date | string
  }

  export type CMSContentOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updated_at?: SortOrder
  }

  export type CMSContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: CMSContentWhereInput | CMSContentWhereInput[]
    OR?: CMSContentWhereInput[]
    NOT?: CMSContentWhereInput | CMSContentWhereInput[]
    value?: StringFilter<"CMSContent"> | string
    description?: StringNullableFilter<"CMSContent"> | string | null
    updated_at?: DateTimeFilter<"CMSContent"> | Date | string
  }, "id" | "key">

  export type CMSContentOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    _count?: CMSContentCountOrderByAggregateInput
    _max?: CMSContentMaxOrderByAggregateInput
    _min?: CMSContentMinOrderByAggregateInput
  }

  export type CMSContentScalarWhereWithAggregatesInput = {
    AND?: CMSContentScalarWhereWithAggregatesInput | CMSContentScalarWhereWithAggregatesInput[]
    OR?: CMSContentScalarWhereWithAggregatesInput[]
    NOT?: CMSContentScalarWhereWithAggregatesInput | CMSContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CMSContent"> | string
    key?: StringWithAggregatesFilter<"CMSContent"> | string
    value?: StringWithAggregatesFilter<"CMSContent"> | string
    description?: StringNullableWithAggregatesFilter<"CMSContent"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"CMSContent"> | Date | string
  }

  export type AnalyticsLogWhereInput = {
    AND?: AnalyticsLogWhereInput | AnalyticsLogWhereInput[]
    OR?: AnalyticsLogWhereInput[]
    NOT?: AnalyticsLogWhereInput | AnalyticsLogWhereInput[]
    id?: StringFilter<"AnalyticsLog"> | string
    ip?: StringFilter<"AnalyticsLog"> | string
    user_agent?: StringFilter<"AnalyticsLog"> | string
    page?: StringFilter<"AnalyticsLog"> | string
    timestamp?: DateTimeFilter<"AnalyticsLog"> | Date | string
  }

  export type AnalyticsLogOrderByWithRelationInput = {
    id?: SortOrder
    ip?: SortOrder
    user_agent?: SortOrder
    page?: SortOrder
    timestamp?: SortOrder
  }

  export type AnalyticsLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalyticsLogWhereInput | AnalyticsLogWhereInput[]
    OR?: AnalyticsLogWhereInput[]
    NOT?: AnalyticsLogWhereInput | AnalyticsLogWhereInput[]
    ip?: StringFilter<"AnalyticsLog"> | string
    user_agent?: StringFilter<"AnalyticsLog"> | string
    page?: StringFilter<"AnalyticsLog"> | string
    timestamp?: DateTimeFilter<"AnalyticsLog"> | Date | string
  }, "id">

  export type AnalyticsLogOrderByWithAggregationInput = {
    id?: SortOrder
    ip?: SortOrder
    user_agent?: SortOrder
    page?: SortOrder
    timestamp?: SortOrder
    _count?: AnalyticsLogCountOrderByAggregateInput
    _max?: AnalyticsLogMaxOrderByAggregateInput
    _min?: AnalyticsLogMinOrderByAggregateInput
  }

  export type AnalyticsLogScalarWhereWithAggregatesInput = {
    AND?: AnalyticsLogScalarWhereWithAggregatesInput | AnalyticsLogScalarWhereWithAggregatesInput[]
    OR?: AnalyticsLogScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsLogScalarWhereWithAggregatesInput | AnalyticsLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalyticsLog"> | string
    ip?: StringWithAggregatesFilter<"AnalyticsLog"> | string
    user_agent?: StringWithAggregatesFilter<"AnalyticsLog"> | string
    page?: StringWithAggregatesFilter<"AnalyticsLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AnalyticsLog"> | Date | string
  }

  export type SessionLogWhereInput = {
    AND?: SessionLogWhereInput | SessionLogWhereInput[]
    OR?: SessionLogWhereInput[]
    NOT?: SessionLogWhereInput | SessionLogWhereInput[]
    id?: StringFilter<"SessionLog"> | string
    ip?: StringFilter<"SessionLog"> | string
    device_type?: StringFilter<"SessionLog"> | string
    browser?: StringFilter<"SessionLog"> | string
    start_time?: DateTimeFilter<"SessionLog"> | Date | string
  }

  export type SessionLogOrderByWithRelationInput = {
    id?: SortOrder
    ip?: SortOrder
    device_type?: SortOrder
    browser?: SortOrder
    start_time?: SortOrder
  }

  export type SessionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionLogWhereInput | SessionLogWhereInput[]
    OR?: SessionLogWhereInput[]
    NOT?: SessionLogWhereInput | SessionLogWhereInput[]
    ip?: StringFilter<"SessionLog"> | string
    device_type?: StringFilter<"SessionLog"> | string
    browser?: StringFilter<"SessionLog"> | string
    start_time?: DateTimeFilter<"SessionLog"> | Date | string
  }, "id">

  export type SessionLogOrderByWithAggregationInput = {
    id?: SortOrder
    ip?: SortOrder
    device_type?: SortOrder
    browser?: SortOrder
    start_time?: SortOrder
    _count?: SessionLogCountOrderByAggregateInput
    _max?: SessionLogMaxOrderByAggregateInput
    _min?: SessionLogMinOrderByAggregateInput
  }

  export type SessionLogScalarWhereWithAggregatesInput = {
    AND?: SessionLogScalarWhereWithAggregatesInput | SessionLogScalarWhereWithAggregatesInput[]
    OR?: SessionLogScalarWhereWithAggregatesInput[]
    NOT?: SessionLogScalarWhereWithAggregatesInput | SessionLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionLog"> | string
    ip?: StringWithAggregatesFilter<"SessionLog"> | string
    device_type?: StringWithAggregatesFilter<"SessionLog"> | string
    browser?: StringWithAggregatesFilter<"SessionLog"> | string
    start_time?: DateTimeWithAggregatesFilter<"SessionLog"> | Date | string
  }

  export type SupportTicketWhereInput = {
    AND?: SupportTicketWhereInput | SupportTicketWhereInput[]
    OR?: SupportTicketWhereInput[]
    NOT?: SupportTicketWhereInput | SupportTicketWhereInput[]
    id?: StringFilter<"SupportTicket"> | string
    name?: StringFilter<"SupportTicket"> | string
    email?: StringFilter<"SupportTicket"> | string
    message?: StringFilter<"SupportTicket"> | string
    reply?: StringNullableFilter<"SupportTicket"> | string | null
    status?: StringFilter<"SupportTicket"> | string
    created_at?: DateTimeFilter<"SupportTicket"> | Date | string
    updated_at?: DateTimeFilter<"SupportTicket"> | Date | string
  }

  export type SupportTicketOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    reply?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SupportTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupportTicketWhereInput | SupportTicketWhereInput[]
    OR?: SupportTicketWhereInput[]
    NOT?: SupportTicketWhereInput | SupportTicketWhereInput[]
    name?: StringFilter<"SupportTicket"> | string
    email?: StringFilter<"SupportTicket"> | string
    message?: StringFilter<"SupportTicket"> | string
    reply?: StringNullableFilter<"SupportTicket"> | string | null
    status?: StringFilter<"SupportTicket"> | string
    created_at?: DateTimeFilter<"SupportTicket"> | Date | string
    updated_at?: DateTimeFilter<"SupportTicket"> | Date | string
  }, "id">

  export type SupportTicketOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    reply?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SupportTicketCountOrderByAggregateInput
    _max?: SupportTicketMaxOrderByAggregateInput
    _min?: SupportTicketMinOrderByAggregateInput
  }

  export type SupportTicketScalarWhereWithAggregatesInput = {
    AND?: SupportTicketScalarWhereWithAggregatesInput | SupportTicketScalarWhereWithAggregatesInput[]
    OR?: SupportTicketScalarWhereWithAggregatesInput[]
    NOT?: SupportTicketScalarWhereWithAggregatesInput | SupportTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupportTicket"> | string
    name?: StringWithAggregatesFilter<"SupportTicket"> | string
    email?: StringWithAggregatesFilter<"SupportTicket"> | string
    message?: StringWithAggregatesFilter<"SupportTicket"> | string
    reply?: StringNullableWithAggregatesFilter<"SupportTicket"> | string | null
    status?: StringWithAggregatesFilter<"SupportTicket"> | string
    created_at?: DateTimeWithAggregatesFilter<"SupportTicket"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SupportTicket"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password_hash?: string | null
    role?: string
    notification_prefs?: string | null
    resetToken?: string | null
    resetTokenExpires?: Date | string | null
    status?: string
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password_hash?: string | null
    role?: string
    notification_prefs?: string | null
    resetToken?: string | null
    resetTokenExpires?: Date | string | null
    status?: string
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    notification_prefs?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    notification_prefs?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password_hash?: string | null
    role?: string
    notification_prefs?: string | null
    resetToken?: string | null
    resetTokenExpires?: Date | string | null
    status?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    notification_prefs?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    notification_prefs?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerCreateInput = {
    id?: string
    name: string
    logo: string
    link: string
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PartnerUncheckedCreateInput = {
    id?: string
    name: string
    logo: string
    link: string
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PartnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerCreateManyInput = {
    id?: string
    name: string
    logo: string
    link: string
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PartnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    item_name: string
    steam_price: number
    csfloat_price: number
    prev_steam_price?: number | null
    prev_csfloat_price?: number | null
    volume: number
    prev_volume?: number | null
    listing_count?: number
    prev_listing_count?: number | null
    opportunity_count?: number
    competition_score?: number
    last_api_timestamp?: Date | string | null
    fetch_count?: number
    comp_update_count?: number
    profit_started_at?: Date | string | null
    sell_velocity?: number
    demand_intensity?: number
    updated_at?: Date | string
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    item_name: string
    steam_price: number
    csfloat_price: number
    prev_steam_price?: number | null
    prev_csfloat_price?: number | null
    volume: number
    prev_volume?: number | null
    listing_count?: number
    prev_listing_count?: number | null
    opportunity_count?: number
    competition_score?: number
    last_api_timestamp?: Date | string | null
    fetch_count?: number
    comp_update_count?: number
    profit_started_at?: Date | string | null
    sell_velocity?: number
    demand_intensity?: number
    updated_at?: Date | string
  }

  export type ItemUpdateInput = {
    item_name?: StringFieldUpdateOperationsInput | string
    steam_price?: FloatFieldUpdateOperationsInput | number
    csfloat_price?: FloatFieldUpdateOperationsInput | number
    prev_steam_price?: NullableFloatFieldUpdateOperationsInput | number | null
    prev_csfloat_price?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: IntFieldUpdateOperationsInput | number
    prev_volume?: NullableIntFieldUpdateOperationsInput | number | null
    listing_count?: IntFieldUpdateOperationsInput | number
    prev_listing_count?: NullableIntFieldUpdateOperationsInput | number | null
    opportunity_count?: IntFieldUpdateOperationsInput | number
    competition_score?: FloatFieldUpdateOperationsInput | number
    last_api_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fetch_count?: IntFieldUpdateOperationsInput | number
    comp_update_count?: IntFieldUpdateOperationsInput | number
    profit_started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_velocity?: FloatFieldUpdateOperationsInput | number
    demand_intensity?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    steam_price?: FloatFieldUpdateOperationsInput | number
    csfloat_price?: FloatFieldUpdateOperationsInput | number
    prev_steam_price?: NullableFloatFieldUpdateOperationsInput | number | null
    prev_csfloat_price?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: IntFieldUpdateOperationsInput | number
    prev_volume?: NullableIntFieldUpdateOperationsInput | number | null
    listing_count?: IntFieldUpdateOperationsInput | number
    prev_listing_count?: NullableIntFieldUpdateOperationsInput | number | null
    opportunity_count?: IntFieldUpdateOperationsInput | number
    competition_score?: FloatFieldUpdateOperationsInput | number
    last_api_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fetch_count?: IntFieldUpdateOperationsInput | number
    comp_update_count?: IntFieldUpdateOperationsInput | number
    profit_started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_velocity?: FloatFieldUpdateOperationsInput | number
    demand_intensity?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyInput = {
    id?: number
    item_name: string
    steam_price: number
    csfloat_price: number
    prev_steam_price?: number | null
    prev_csfloat_price?: number | null
    volume: number
    prev_volume?: number | null
    listing_count?: number
    prev_listing_count?: number | null
    opportunity_count?: number
    competition_score?: number
    last_api_timestamp?: Date | string | null
    fetch_count?: number
    comp_update_count?: number
    profit_started_at?: Date | string | null
    sell_velocity?: number
    demand_intensity?: number
    updated_at?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    item_name?: StringFieldUpdateOperationsInput | string
    steam_price?: FloatFieldUpdateOperationsInput | number
    csfloat_price?: FloatFieldUpdateOperationsInput | number
    prev_steam_price?: NullableFloatFieldUpdateOperationsInput | number | null
    prev_csfloat_price?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: IntFieldUpdateOperationsInput | number
    prev_volume?: NullableIntFieldUpdateOperationsInput | number | null
    listing_count?: IntFieldUpdateOperationsInput | number
    prev_listing_count?: NullableIntFieldUpdateOperationsInput | number | null
    opportunity_count?: IntFieldUpdateOperationsInput | number
    competition_score?: FloatFieldUpdateOperationsInput | number
    last_api_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fetch_count?: IntFieldUpdateOperationsInput | number
    comp_update_count?: IntFieldUpdateOperationsInput | number
    profit_started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_velocity?: FloatFieldUpdateOperationsInput | number
    demand_intensity?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    steam_price?: FloatFieldUpdateOperationsInput | number
    csfloat_price?: FloatFieldUpdateOperationsInput | number
    prev_steam_price?: NullableFloatFieldUpdateOperationsInput | number | null
    prev_csfloat_price?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: IntFieldUpdateOperationsInput | number
    prev_volume?: NullableIntFieldUpdateOperationsInput | number | null
    listing_count?: IntFieldUpdateOperationsInput | number
    prev_listing_count?: NullableIntFieldUpdateOperationsInput | number | null
    opportunity_count?: IntFieldUpdateOperationsInput | number
    competition_score?: FloatFieldUpdateOperationsInput | number
    last_api_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fetch_count?: IntFieldUpdateOperationsInput | number
    comp_update_count?: IntFieldUpdateOperationsInput | number
    profit_started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_velocity?: FloatFieldUpdateOperationsInput | number
    demand_intensity?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfitableItemCreateInput = {
    item_name: string
    buy_from: string
    sell_to: string
    buy_price: number
    sell_price: number
    net_profit: number
    profit_percent: number
    liquidity_score?: number
    intelligence_score?: number
    saturation_score?: number
    execution_probability?: number
    slippage_risk?: number
    market_stability?: number
    execution_score?: number
    status?: string
    review_score?: number
    is_sniper?: boolean
    created_at?: Date | string
  }

  export type ProfitableItemUncheckedCreateInput = {
    id?: number
    item_name: string
    buy_from: string
    sell_to: string
    buy_price: number
    sell_price: number
    net_profit: number
    profit_percent: number
    liquidity_score?: number
    intelligence_score?: number
    saturation_score?: number
    execution_probability?: number
    slippage_risk?: number
    market_stability?: number
    execution_score?: number
    status?: string
    review_score?: number
    is_sniper?: boolean
    created_at?: Date | string
  }

  export type ProfitableItemUpdateInput = {
    item_name?: StringFieldUpdateOperationsInput | string
    buy_from?: StringFieldUpdateOperationsInput | string
    sell_to?: StringFieldUpdateOperationsInput | string
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    net_profit?: FloatFieldUpdateOperationsInput | number
    profit_percent?: FloatFieldUpdateOperationsInput | number
    liquidity_score?: FloatFieldUpdateOperationsInput | number
    intelligence_score?: FloatFieldUpdateOperationsInput | number
    saturation_score?: FloatFieldUpdateOperationsInput | number
    execution_probability?: FloatFieldUpdateOperationsInput | number
    slippage_risk?: FloatFieldUpdateOperationsInput | number
    market_stability?: FloatFieldUpdateOperationsInput | number
    execution_score?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    review_score?: FloatFieldUpdateOperationsInput | number
    is_sniper?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfitableItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    buy_from?: StringFieldUpdateOperationsInput | string
    sell_to?: StringFieldUpdateOperationsInput | string
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    net_profit?: FloatFieldUpdateOperationsInput | number
    profit_percent?: FloatFieldUpdateOperationsInput | number
    liquidity_score?: FloatFieldUpdateOperationsInput | number
    intelligence_score?: FloatFieldUpdateOperationsInput | number
    saturation_score?: FloatFieldUpdateOperationsInput | number
    execution_probability?: FloatFieldUpdateOperationsInput | number
    slippage_risk?: FloatFieldUpdateOperationsInput | number
    market_stability?: FloatFieldUpdateOperationsInput | number
    execution_score?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    review_score?: FloatFieldUpdateOperationsInput | number
    is_sniper?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfitableItemCreateManyInput = {
    id?: number
    item_name: string
    buy_from: string
    sell_to: string
    buy_price: number
    sell_price: number
    net_profit: number
    profit_percent: number
    liquidity_score?: number
    intelligence_score?: number
    saturation_score?: number
    execution_probability?: number
    slippage_risk?: number
    market_stability?: number
    execution_score?: number
    status?: string
    review_score?: number
    is_sniper?: boolean
    created_at?: Date | string
  }

  export type ProfitableItemUpdateManyMutationInput = {
    item_name?: StringFieldUpdateOperationsInput | string
    buy_from?: StringFieldUpdateOperationsInput | string
    sell_to?: StringFieldUpdateOperationsInput | string
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    net_profit?: FloatFieldUpdateOperationsInput | number
    profit_percent?: FloatFieldUpdateOperationsInput | number
    liquidity_score?: FloatFieldUpdateOperationsInput | number
    intelligence_score?: FloatFieldUpdateOperationsInput | number
    saturation_score?: FloatFieldUpdateOperationsInput | number
    execution_probability?: FloatFieldUpdateOperationsInput | number
    slippage_risk?: FloatFieldUpdateOperationsInput | number
    market_stability?: FloatFieldUpdateOperationsInput | number
    execution_score?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    review_score?: FloatFieldUpdateOperationsInput | number
    is_sniper?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfitableItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    buy_from?: StringFieldUpdateOperationsInput | string
    sell_to?: StringFieldUpdateOperationsInput | string
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    net_profit?: FloatFieldUpdateOperationsInput | number
    profit_percent?: FloatFieldUpdateOperationsInput | number
    liquidity_score?: FloatFieldUpdateOperationsInput | number
    intelligence_score?: FloatFieldUpdateOperationsInput | number
    saturation_score?: FloatFieldUpdateOperationsInput | number
    execution_probability?: FloatFieldUpdateOperationsInput | number
    slippage_risk?: FloatFieldUpdateOperationsInput | number
    market_stability?: FloatFieldUpdateOperationsInput | number
    execution_score?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    review_score?: FloatFieldUpdateOperationsInput | number
    is_sniper?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityLockCreateInput = {
    id: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type OpportunityLockUncheckedCreateInput = {
    id: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type OpportunityLockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityLockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityLockCreateManyInput = {
    id: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type OpportunityLockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityLockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotVersionCreateInput = {
    version?: number
    status?: string
    updated_at?: Date | string
  }

  export type SnapshotVersionUncheckedCreateInput = {
    id?: number
    version?: number
    status?: string
    updated_at?: Date | string
  }

  export type SnapshotVersionUpdateInput = {
    version?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotVersionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotVersionCreateManyInput = {
    id?: number
    version?: number
    status?: string
    updated_at?: Date | string
  }

  export type SnapshotVersionUpdateManyMutationInput = {
    version?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotVersionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketSnapshotCreateInput = {
    version: number
    partition?: number
    item_name: string
    price: number
    platform: string
    created_at?: Date | string
  }

  export type MarketSnapshotUncheckedCreateInput = {
    id?: number
    version: number
    partition?: number
    item_name: string
    price: number
    platform: string
    created_at?: Date | string
  }

  export type MarketSnapshotUpdateInput = {
    version?: IntFieldUpdateOperationsInput | number
    partition?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketSnapshotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    partition?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketSnapshotCreateManyInput = {
    id?: number
    version: number
    partition?: number
    item_name: string
    price: number
    platform: string
    created_at?: Date | string
  }

  export type MarketSnapshotUpdateManyMutationInput = {
    version?: IntFieldUpdateOperationsInput | number
    partition?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketSnapshotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    partition?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamingEventCreateInput = {
    id?: string
    type: string
    partition?: number
    priority?: string
    score?: number
    payload: string
    retry_count?: number
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StreamingEventUncheckedCreateInput = {
    id?: string
    type: string
    partition?: number
    priority?: string
    score?: number
    payload: string
    retry_count?: number
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StreamingEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    partition?: IntFieldUpdateOperationsInput | number
    priority?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    payload?: StringFieldUpdateOperationsInput | string
    retry_count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamingEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    partition?: IntFieldUpdateOperationsInput | number
    priority?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    payload?: StringFieldUpdateOperationsInput | string
    retry_count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamingEventCreateManyInput = {
    id?: string
    type: string
    partition?: number
    priority?: string
    score?: number
    payload: string
    retry_count?: number
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StreamingEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    partition?: IntFieldUpdateOperationsInput | number
    priority?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    payload?: StringFieldUpdateOperationsInput | string
    retry_count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamingEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    partition?: IntFieldUpdateOperationsInput | number
    priority?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    payload?: StringFieldUpdateOperationsInput | string
    retry_count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoadPatternCreateInput = {
    hour: number
    avg_load?: number
    peak_load?: number
    updated_at?: Date | string
  }

  export type LoadPatternUncheckedCreateInput = {
    id?: number
    hour: number
    avg_load?: number
    peak_load?: number
    updated_at?: Date | string
  }

  export type LoadPatternUpdateInput = {
    hour?: IntFieldUpdateOperationsInput | number
    avg_load?: FloatFieldUpdateOperationsInput | number
    peak_load?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoadPatternUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hour?: IntFieldUpdateOperationsInput | number
    avg_load?: FloatFieldUpdateOperationsInput | number
    peak_load?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoadPatternCreateManyInput = {
    id?: number
    hour: number
    avg_load?: number
    peak_load?: number
    updated_at?: Date | string
  }

  export type LoadPatternUpdateManyMutationInput = {
    hour?: IntFieldUpdateOperationsInput | number
    avg_load?: FloatFieldUpdateOperationsInput | number
    peak_load?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoadPatternUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hour?: IntFieldUpdateOperationsInput | number
    avg_load?: FloatFieldUpdateOperationsInput | number
    peak_load?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetryPerformanceCreateInput = {
    delay_range: number
    success_count?: number
    failure_count?: number
    updated_at?: Date | string
  }

  export type RetryPerformanceUncheckedCreateInput = {
    id?: number
    delay_range: number
    success_count?: number
    failure_count?: number
    updated_at?: Date | string
  }

  export type RetryPerformanceUpdateInput = {
    delay_range?: IntFieldUpdateOperationsInput | number
    success_count?: IntFieldUpdateOperationsInput | number
    failure_count?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetryPerformanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    delay_range?: IntFieldUpdateOperationsInput | number
    success_count?: IntFieldUpdateOperationsInput | number
    failure_count?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetryPerformanceCreateManyInput = {
    id?: number
    delay_range: number
    success_count?: number
    failure_count?: number
    updated_at?: Date | string
  }

  export type RetryPerformanceUpdateManyMutationInput = {
    delay_range?: IntFieldUpdateOperationsInput | number
    success_count?: IntFieldUpdateOperationsInput | number
    failure_count?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetryPerformanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    delay_range?: IntFieldUpdateOperationsInput | number
    success_count?: IntFieldUpdateOperationsInput | number
    failure_count?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionRecordCreateInput = {
    id?: string
    idempotency_key: string
    item_name: string
    buy_price: number
    sell_price: number
    status?: string
    tx_hash?: string | null
    created_at?: Date | string
  }

  export type ExecutionRecordUncheckedCreateInput = {
    id?: string
    idempotency_key: string
    item_name: string
    buy_price: number
    sell_price: number
    status?: string
    tx_hash?: string | null
    created_at?: Date | string
  }

  export type ExecutionRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idempotency_key?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idempotency_key?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionRecordCreateManyInput = {
    id?: string
    idempotency_key: string
    item_name: string
    buy_price: number
    sell_price: number
    status?: string
    tx_hash?: string | null
    created_at?: Date | string
  }

  export type ExecutionRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    idempotency_key?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idempotency_key?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CMSContentCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updated_at?: Date | string
  }

  export type CMSContentUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updated_at?: Date | string
  }

  export type CMSContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CMSContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CMSContentCreateManyInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updated_at?: Date | string
  }

  export type CMSContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CMSContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsLogCreateInput = {
    id?: string
    ip: string
    user_agent: string
    page: string
    timestamp?: Date | string
  }

  export type AnalyticsLogUncheckedCreateInput = {
    id?: string
    ip: string
    user_agent: string
    page: string
    timestamp?: Date | string
  }

  export type AnalyticsLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsLogCreateManyInput = {
    id?: string
    ip: string
    user_agent: string
    page: string
    timestamp?: Date | string
  }

  export type AnalyticsLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionLogCreateInput = {
    id?: string
    ip: string
    device_type: string
    browser: string
    start_time?: Date | string
  }

  export type SessionLogUncheckedCreateInput = {
    id?: string
    ip: string
    device_type: string
    browser: string
    start_time?: Date | string
  }

  export type SessionLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionLogCreateManyInput = {
    id?: string
    ip: string
    device_type: string
    browser: string
    start_time?: Date | string
  }

  export type SessionLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketCreateInput = {
    id?: string
    name: string
    email: string
    message: string
    reply?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SupportTicketUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    message: string
    reply?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SupportTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketCreateManyInput = {
    id?: string
    name: string
    email: string
    message: string
    reply?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SupportTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    notification_prefs?: SortOrder
    resetToken?: SortOrder
    resetTokenExpires?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    notification_prefs?: SortOrder
    resetToken?: SortOrder
    resetTokenExpires?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    notification_prefs?: SortOrder
    resetToken?: SortOrder
    resetTokenExpires?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PartnerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    link?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PartnerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    link?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PartnerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    link?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    item_name?: SortOrder
    steam_price?: SortOrder
    csfloat_price?: SortOrder
    prev_steam_price?: SortOrder
    prev_csfloat_price?: SortOrder
    volume?: SortOrder
    prev_volume?: SortOrder
    listing_count?: SortOrder
    prev_listing_count?: SortOrder
    opportunity_count?: SortOrder
    competition_score?: SortOrder
    last_api_timestamp?: SortOrder
    fetch_count?: SortOrder
    comp_update_count?: SortOrder
    profit_started_at?: SortOrder
    sell_velocity?: SortOrder
    demand_intensity?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    steam_price?: SortOrder
    csfloat_price?: SortOrder
    prev_steam_price?: SortOrder
    prev_csfloat_price?: SortOrder
    volume?: SortOrder
    prev_volume?: SortOrder
    listing_count?: SortOrder
    prev_listing_count?: SortOrder
    opportunity_count?: SortOrder
    competition_score?: SortOrder
    fetch_count?: SortOrder
    comp_update_count?: SortOrder
    sell_velocity?: SortOrder
    demand_intensity?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    item_name?: SortOrder
    steam_price?: SortOrder
    csfloat_price?: SortOrder
    prev_steam_price?: SortOrder
    prev_csfloat_price?: SortOrder
    volume?: SortOrder
    prev_volume?: SortOrder
    listing_count?: SortOrder
    prev_listing_count?: SortOrder
    opportunity_count?: SortOrder
    competition_score?: SortOrder
    last_api_timestamp?: SortOrder
    fetch_count?: SortOrder
    comp_update_count?: SortOrder
    profit_started_at?: SortOrder
    sell_velocity?: SortOrder
    demand_intensity?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    item_name?: SortOrder
    steam_price?: SortOrder
    csfloat_price?: SortOrder
    prev_steam_price?: SortOrder
    prev_csfloat_price?: SortOrder
    volume?: SortOrder
    prev_volume?: SortOrder
    listing_count?: SortOrder
    prev_listing_count?: SortOrder
    opportunity_count?: SortOrder
    competition_score?: SortOrder
    last_api_timestamp?: SortOrder
    fetch_count?: SortOrder
    comp_update_count?: SortOrder
    profit_started_at?: SortOrder
    sell_velocity?: SortOrder
    demand_intensity?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    steam_price?: SortOrder
    csfloat_price?: SortOrder
    prev_steam_price?: SortOrder
    prev_csfloat_price?: SortOrder
    volume?: SortOrder
    prev_volume?: SortOrder
    listing_count?: SortOrder
    prev_listing_count?: SortOrder
    opportunity_count?: SortOrder
    competition_score?: SortOrder
    fetch_count?: SortOrder
    comp_update_count?: SortOrder
    sell_velocity?: SortOrder
    demand_intensity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ProfitableItemCountOrderByAggregateInput = {
    id?: SortOrder
    item_name?: SortOrder
    buy_from?: SortOrder
    sell_to?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    net_profit?: SortOrder
    profit_percent?: SortOrder
    liquidity_score?: SortOrder
    intelligence_score?: SortOrder
    saturation_score?: SortOrder
    execution_probability?: SortOrder
    slippage_risk?: SortOrder
    market_stability?: SortOrder
    execution_score?: SortOrder
    status?: SortOrder
    review_score?: SortOrder
    is_sniper?: SortOrder
    created_at?: SortOrder
  }

  export type ProfitableItemAvgOrderByAggregateInput = {
    id?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    net_profit?: SortOrder
    profit_percent?: SortOrder
    liquidity_score?: SortOrder
    intelligence_score?: SortOrder
    saturation_score?: SortOrder
    execution_probability?: SortOrder
    slippage_risk?: SortOrder
    market_stability?: SortOrder
    execution_score?: SortOrder
    review_score?: SortOrder
  }

  export type ProfitableItemMaxOrderByAggregateInput = {
    id?: SortOrder
    item_name?: SortOrder
    buy_from?: SortOrder
    sell_to?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    net_profit?: SortOrder
    profit_percent?: SortOrder
    liquidity_score?: SortOrder
    intelligence_score?: SortOrder
    saturation_score?: SortOrder
    execution_probability?: SortOrder
    slippage_risk?: SortOrder
    market_stability?: SortOrder
    execution_score?: SortOrder
    status?: SortOrder
    review_score?: SortOrder
    is_sniper?: SortOrder
    created_at?: SortOrder
  }

  export type ProfitableItemMinOrderByAggregateInput = {
    id?: SortOrder
    item_name?: SortOrder
    buy_from?: SortOrder
    sell_to?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    net_profit?: SortOrder
    profit_percent?: SortOrder
    liquidity_score?: SortOrder
    intelligence_score?: SortOrder
    saturation_score?: SortOrder
    execution_probability?: SortOrder
    slippage_risk?: SortOrder
    market_stability?: SortOrder
    execution_score?: SortOrder
    status?: SortOrder
    review_score?: SortOrder
    is_sniper?: SortOrder
    created_at?: SortOrder
  }

  export type ProfitableItemSumOrderByAggregateInput = {
    id?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    net_profit?: SortOrder
    profit_percent?: SortOrder
    liquidity_score?: SortOrder
    intelligence_score?: SortOrder
    saturation_score?: SortOrder
    execution_probability?: SortOrder
    slippage_risk?: SortOrder
    market_stability?: SortOrder
    execution_score?: SortOrder
    review_score?: SortOrder
  }

  export type OpportunityLockCountOrderByAggregateInput = {
    id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type OpportunityLockMaxOrderByAggregateInput = {
    id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type OpportunityLockMinOrderByAggregateInput = {
    id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type SnapshotVersionCountOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
  }

  export type SnapshotVersionAvgOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
  }

  export type SnapshotVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
  }

  export type SnapshotVersionMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
  }

  export type SnapshotVersionSumOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
  }

  export type MarketSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    partition?: SortOrder
    item_name?: SortOrder
    price?: SortOrder
    platform?: SortOrder
    created_at?: SortOrder
  }

  export type MarketSnapshotAvgOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    partition?: SortOrder
    price?: SortOrder
  }

  export type MarketSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    partition?: SortOrder
    item_name?: SortOrder
    price?: SortOrder
    platform?: SortOrder
    created_at?: SortOrder
  }

  export type MarketSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    partition?: SortOrder
    item_name?: SortOrder
    price?: SortOrder
    platform?: SortOrder
    created_at?: SortOrder
  }

  export type MarketSnapshotSumOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    partition?: SortOrder
    price?: SortOrder
  }

  export type StreamingEventCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    partition?: SortOrder
    priority?: SortOrder
    score?: SortOrder
    payload?: SortOrder
    retry_count?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StreamingEventAvgOrderByAggregateInput = {
    partition?: SortOrder
    score?: SortOrder
    retry_count?: SortOrder
  }

  export type StreamingEventMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    partition?: SortOrder
    priority?: SortOrder
    score?: SortOrder
    payload?: SortOrder
    retry_count?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StreamingEventMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    partition?: SortOrder
    priority?: SortOrder
    score?: SortOrder
    payload?: SortOrder
    retry_count?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StreamingEventSumOrderByAggregateInput = {
    partition?: SortOrder
    score?: SortOrder
    retry_count?: SortOrder
  }

  export type LoadPatternCountOrderByAggregateInput = {
    id?: SortOrder
    hour?: SortOrder
    avg_load?: SortOrder
    peak_load?: SortOrder
    updated_at?: SortOrder
  }

  export type LoadPatternAvgOrderByAggregateInput = {
    id?: SortOrder
    hour?: SortOrder
    avg_load?: SortOrder
    peak_load?: SortOrder
  }

  export type LoadPatternMaxOrderByAggregateInput = {
    id?: SortOrder
    hour?: SortOrder
    avg_load?: SortOrder
    peak_load?: SortOrder
    updated_at?: SortOrder
  }

  export type LoadPatternMinOrderByAggregateInput = {
    id?: SortOrder
    hour?: SortOrder
    avg_load?: SortOrder
    peak_load?: SortOrder
    updated_at?: SortOrder
  }

  export type LoadPatternSumOrderByAggregateInput = {
    id?: SortOrder
    hour?: SortOrder
    avg_load?: SortOrder
    peak_load?: SortOrder
  }

  export type RetryPerformanceCountOrderByAggregateInput = {
    id?: SortOrder
    delay_range?: SortOrder
    success_count?: SortOrder
    failure_count?: SortOrder
    updated_at?: SortOrder
  }

  export type RetryPerformanceAvgOrderByAggregateInput = {
    id?: SortOrder
    delay_range?: SortOrder
    success_count?: SortOrder
    failure_count?: SortOrder
  }

  export type RetryPerformanceMaxOrderByAggregateInput = {
    id?: SortOrder
    delay_range?: SortOrder
    success_count?: SortOrder
    failure_count?: SortOrder
    updated_at?: SortOrder
  }

  export type RetryPerformanceMinOrderByAggregateInput = {
    id?: SortOrder
    delay_range?: SortOrder
    success_count?: SortOrder
    failure_count?: SortOrder
    updated_at?: SortOrder
  }

  export type RetryPerformanceSumOrderByAggregateInput = {
    id?: SortOrder
    delay_range?: SortOrder
    success_count?: SortOrder
    failure_count?: SortOrder
  }

  export type ExecutionRecordCountOrderByAggregateInput = {
    id?: SortOrder
    idempotency_key?: SortOrder
    item_name?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    status?: SortOrder
    tx_hash?: SortOrder
    created_at?: SortOrder
  }

  export type ExecutionRecordAvgOrderByAggregateInput = {
    buy_price?: SortOrder
    sell_price?: SortOrder
  }

  export type ExecutionRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    idempotency_key?: SortOrder
    item_name?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    status?: SortOrder
    tx_hash?: SortOrder
    created_at?: SortOrder
  }

  export type ExecutionRecordMinOrderByAggregateInput = {
    id?: SortOrder
    idempotency_key?: SortOrder
    item_name?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    status?: SortOrder
    tx_hash?: SortOrder
    created_at?: SortOrder
  }

  export type ExecutionRecordSumOrderByAggregateInput = {
    buy_price?: SortOrder
    sell_price?: SortOrder
  }

  export type CMSContentCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updated_at?: SortOrder
  }

  export type CMSContentMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updated_at?: SortOrder
  }

  export type CMSContentMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updated_at?: SortOrder
  }

  export type AnalyticsLogCountOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    user_agent?: SortOrder
    page?: SortOrder
    timestamp?: SortOrder
  }

  export type AnalyticsLogMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    user_agent?: SortOrder
    page?: SortOrder
    timestamp?: SortOrder
  }

  export type AnalyticsLogMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    user_agent?: SortOrder
    page?: SortOrder
    timestamp?: SortOrder
  }

  export type SessionLogCountOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    device_type?: SortOrder
    browser?: SortOrder
    start_time?: SortOrder
  }

  export type SessionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    device_type?: SortOrder
    browser?: SortOrder
    start_time?: SortOrder
  }

  export type SessionLogMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    device_type?: SortOrder
    browser?: SortOrder
    start_time?: SortOrder
  }

  export type SupportTicketCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    reply?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SupportTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    reply?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SupportTicketMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    reply?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password_hash?: string | null
    role?: string
    notification_prefs?: string | null
    resetToken?: string | null
    resetTokenExpires?: Date | string | null
    status?: string
    createdAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password_hash?: string | null
    role?: string
    notification_prefs?: string | null
    resetToken?: string | null
    resetTokenExpires?: Date | string | null
    status?: string
    createdAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    notification_prefs?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    notification_prefs?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password_hash?: string | null
    role?: string
    notification_prefs?: string | null
    resetToken?: string | null
    resetTokenExpires?: Date | string | null
    status?: string
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password_hash?: string | null
    role?: string
    notification_prefs?: string | null
    resetToken?: string | null
    resetTokenExpires?: Date | string | null
    status?: string
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    notification_prefs?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    notification_prefs?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PartnerDefaultArgs instead
     */
    export type PartnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PartnerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemDefaultArgs instead
     */
    export type ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfitableItemDefaultArgs instead
     */
    export type ProfitableItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfitableItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OpportunityLockDefaultArgs instead
     */
    export type OpportunityLockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OpportunityLockDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SnapshotVersionDefaultArgs instead
     */
    export type SnapshotVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SnapshotVersionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MarketSnapshotDefaultArgs instead
     */
    export type MarketSnapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MarketSnapshotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StreamingEventDefaultArgs instead
     */
    export type StreamingEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StreamingEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LoadPatternDefaultArgs instead
     */
    export type LoadPatternArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LoadPatternDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RetryPerformanceDefaultArgs instead
     */
    export type RetryPerformanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RetryPerformanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExecutionRecordDefaultArgs instead
     */
    export type ExecutionRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExecutionRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CMSContentDefaultArgs instead
     */
    export type CMSContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CMSContentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnalyticsLogDefaultArgs instead
     */
    export type AnalyticsLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnalyticsLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionLogDefaultArgs instead
     */
    export type SessionLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupportTicketDefaultArgs instead
     */
    export type SupportTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupportTicketDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}