
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Game
 * 
 */
export type Game = {
  id: string
  filePath: string
  settings: Prisma.JsonValue
  latestFrame: Prisma.JsonValue
  stats: Prisma.JsonValue
  gameEnd: Prisma.JsonValue
}

/**
 * Model Character
 * 
 */
export type Character = {
  id: string
  number: number
  name: string
  shortName: string
  colors: string[]
}

/**
 * Model Player
 * 
 */
export type Player = {
  id: string
  playerIndex: number | null
  port: number | null
  characterColor: number | null
  startStocks: number | null
  type: number | null
  teamId: number | null
  controllerFix: string | null
  nametag: string | null
  displayName: string | null
  connectCode: string
  gameId: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Games
 * const games = await prisma.game.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Games
   * const games = await prisma.game.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void



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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<GlobalReject>;

  /**
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.CharacterDelegate<GlobalReject>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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

  /**
   * Prisma Client JS version: 3.7.0
   * Query Engine version: 8746e055198f517658c08a0c426c7eec87f5a85f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Game: 'Game',
    Character: 'Character',
    Player: 'Player'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GameCountOutputType
   */


  export type GameCountOutputType = {
    players: number
  }

  export type GameCountOutputTypeSelect = {
    players?: boolean
  }

  export type GameCountOutputTypeGetPayload<
    S extends boolean | null | undefined | GameCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? GameCountOutputType
    : S extends undefined
    ? never
    : S extends GameCountOutputTypeArgs
    ?'include' extends U
    ? GameCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof GameCountOutputType ?GameCountOutputType [P]
  : 
     never
  } 
    : GameCountOutputType
  : GameCountOutputType




  // Custom InputTypes

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     * 
    **/
    select?: GameCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Game
   */


  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    filePath: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    filePath: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    filePath: number
    settings: number
    latestFrame: number
    stats: number
    gameEnd: number
    _all: number
  }


  export type GameMinAggregateInputType = {
    id?: true
    filePath?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    filePath?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    filePath?: true
    settings?: true
    latestFrame?: true
    stats?: true
    gameEnd?: true
    _all?: true
  }

  export type GameAggregateArgs = {
    /**
     * Filter which Game to aggregate.
     * 
    **/
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     * 
    **/
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs = {
    where?: GameWhereInput
    orderBy?: Enumerable<GameOrderByWithAggregationInput>
    by: Array<GameScalarFieldEnum>
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }


  export type GameGroupByOutputType = {
    id: string
    filePath: string
    settings: JsonValue
    latestFrame: JsonValue
    stats: JsonValue
    gameEnd: JsonValue
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Promise<
    Array<
      PickArray<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect = {
    id?: boolean
    filePath?: boolean
    settings?: boolean
    latestFrame?: boolean
    stats?: boolean
    gameEnd?: boolean
    players?: boolean | PlayerFindManyArgs
    _count?: boolean | GameCountOutputTypeArgs
  }

  export type GameInclude = {
    players?: boolean | PlayerFindManyArgs
    _count?: boolean | GameCountOutputTypeArgs
  }

  export type GameGetPayload<
    S extends boolean | null | undefined | GameArgs,
    U = keyof S
      > = S extends true
        ? Game
    : S extends undefined
    ? never
    : S extends GameArgs | GameFindManyArgs
    ?'include' extends U
    ? Game  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'players'
        ? Array < PlayerGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? GameCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Game ?Game [P]
  : 
          P extends 'players'
        ? Array < PlayerGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? GameCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Game
  : Game


  type GameCountArgs = Merge<
    Omit<GameFindManyArgs, 'select' | 'include'> & {
      select?: GameCountAggregateInputType | true
    }
  >

  export interface GameDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GameFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Game'> extends True ? CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>> : CheckSelect<T, Prisma__GameClient<Game | null >, Prisma__GameClient<GameGetPayload<T> | null >>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GameFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Game'> extends True ? CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>> : CheckSelect<T, Prisma__GameClient<Game | null >, Prisma__GameClient<GameGetPayload<T> | null >>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameFindManyArgs>(
      args?: SelectSubset<T, GameFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Game>>, PrismaPromise<Array<GameGetPayload<T>>>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
    **/
    create<T extends GameCreateArgs>(
      args: SelectSubset<T, GameCreateArgs>
    ): CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>>

    /**
     * Create many Games.
     *     @param {GameCreateManyArgs} args - Arguments to create many Games.
     *     @example
     *     // Create many Games
     *     const game = await prisma.game.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GameCreateManyArgs>(
      args?: SelectSubset<T, GameCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
    **/
    delete<T extends GameDeleteArgs>(
      args: SelectSubset<T, GameDeleteArgs>
    ): CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameUpdateArgs>(
      args: SelectSubset<T, GameUpdateArgs>
    ): CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameDeleteManyArgs>(
      args?: SelectSubset<T, GameDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameUpdateManyArgs>(
      args: SelectSubset<T, GameUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
    **/
    upsert<T extends GameUpsertArgs>(
      args: SelectSubset<T, GameUpsertArgs>
    ): CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>>

    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
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
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GameClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    players<T extends PlayerFindManyArgs = {}>(args?: Subset<T, PlayerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Player>>, PrismaPromise<Array<PlayerGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Throw an Error if a Game can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Game to fetch.
     * 
    **/
    where: GameWhereUniqueInput
  }


  /**
   * Game findFirst
   */
  export type GameFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Throw an Error if a Game can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Game to fetch.
     * 
    **/
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     * 
    **/
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     * 
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     * 
    **/
    distinct?: Enumerable<GameScalarFieldEnum>
  }


  /**
   * Game findMany
   */
  export type GameFindManyArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter, which Games to fetch.
     * 
    **/
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     * 
    **/
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     * 
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GameScalarFieldEnum>
  }


  /**
   * Game create
   */
  export type GameCreateArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * The data needed to create a Game.
     * 
    **/
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }


  /**
   * Game createMany
   */
  export type GameCreateManyArgs = {
    data: Enumerable<GameCreateManyInput>
  }


  /**
   * Game update
   */
  export type GameUpdateArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * The data needed to update a Game.
     * 
    **/
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     * 
    **/
    where: GameWhereUniqueInput
  }


  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs = {
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    where?: GameWhereInput
  }


  /**
   * Game upsert
   */
  export type GameUpsertArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * The filter to search for the Game to update in case it exists.
     * 
    **/
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     * 
    **/
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }


  /**
   * Game delete
   */
  export type GameDeleteArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter which Game to delete.
     * 
    **/
    where: GameWhereUniqueInput
  }


  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs = {
    where?: GameWhereInput
  }


  /**
   * Game without action
   */
  export type GameArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
  }



  /**
   * Model Character
   */


  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterAvgAggregateOutputType = {
    number: number | null
  }

  export type CharacterSumAggregateOutputType = {
    number: number | null
  }

  export type CharacterMinAggregateOutputType = {
    id: string | null
    number: number | null
    name: string | null
    shortName: string | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: string | null
    number: number | null
    name: string | null
    shortName: string | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    number: number
    name: number
    shortName: number
    colors: number
    _all: number
  }


  export type CharacterAvgAggregateInputType = {
    number?: true
  }

  export type CharacterSumAggregateInputType = {
    number?: true
  }

  export type CharacterMinAggregateInputType = {
    id?: true
    number?: true
    name?: true
    shortName?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    number?: true
    name?: true
    shortName?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    number?: true
    name?: true
    shortName?: true
    colors?: true
    _all?: true
  }

  export type CharacterAggregateArgs = {
    /**
     * Filter which Character to aggregate.
     * 
    **/
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     * 
    **/
    orderBy?: Enumerable<CharacterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type CharacterGroupByArgs = {
    where?: CharacterWhereInput
    orderBy?: Enumerable<CharacterOrderByWithAggregationInput>
    by: Array<CharacterScalarFieldEnum>
    having?: CharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _avg?: CharacterAvgAggregateInputType
    _sum?: CharacterSumAggregateInputType
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }


  export type CharacterGroupByOutputType = {
    id: string
    number: number
    name: string
    shortName: string
    colors: string[]
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Promise<
    Array<
      PickArray<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSelect = {
    id?: boolean
    number?: boolean
    name?: boolean
    shortName?: boolean
    colors?: boolean
  }

  export type CharacterGetPayload<
    S extends boolean | null | undefined | CharacterArgs,
    U = keyof S
      > = S extends true
        ? Character
    : S extends undefined
    ? never
    : S extends CharacterArgs | CharacterFindManyArgs
    ?'include' extends U
    ? Character 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Character ?Character [P]
  : 
     never
  } 
    : Character
  : Character


  type CharacterCountArgs = Merge<
    Omit<CharacterFindManyArgs, 'select' | 'include'> & {
      select?: CharacterCountAggregateInputType | true
    }
  >

  export interface CharacterDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CharacterFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CharacterFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Character'> extends True ? CheckSelect<T, Prisma__CharacterClient<Character>, Prisma__CharacterClient<CharacterGetPayload<T>>> : CheckSelect<T, Prisma__CharacterClient<Character | null >, Prisma__CharacterClient<CharacterGetPayload<T> | null >>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CharacterFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CharacterFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Character'> extends True ? CheckSelect<T, Prisma__CharacterClient<Character>, Prisma__CharacterClient<CharacterGetPayload<T>>> : CheckSelect<T, Prisma__CharacterClient<Character | null >, Prisma__CharacterClient<CharacterGetPayload<T> | null >>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CharacterFindManyArgs>(
      args?: SelectSubset<T, CharacterFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Character>>, PrismaPromise<Array<CharacterGetPayload<T>>>>

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
    **/
    create<T extends CharacterCreateArgs>(
      args: SelectSubset<T, CharacterCreateArgs>
    ): CheckSelect<T, Prisma__CharacterClient<Character>, Prisma__CharacterClient<CharacterGetPayload<T>>>

    /**
     * Create many Characters.
     *     @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     *     @example
     *     // Create many Characters
     *     const character = await prisma.character.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CharacterCreateManyArgs>(
      args?: SelectSubset<T, CharacterCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
    **/
    delete<T extends CharacterDeleteArgs>(
      args: SelectSubset<T, CharacterDeleteArgs>
    ): CheckSelect<T, Prisma__CharacterClient<Character>, Prisma__CharacterClient<CharacterGetPayload<T>>>

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CharacterUpdateArgs>(
      args: SelectSubset<T, CharacterUpdateArgs>
    ): CheckSelect<T, Prisma__CharacterClient<Character>, Prisma__CharacterClient<CharacterGetPayload<T>>>

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CharacterDeleteManyArgs>(
      args?: SelectSubset<T, CharacterDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CharacterUpdateManyArgs>(
      args: SelectSubset<T, CharacterUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
    **/
    upsert<T extends CharacterUpsertArgs>(
      args: SelectSubset<T, CharacterUpsertArgs>
    ): CheckSelect<T, Prisma__CharacterClient<Character>, Prisma__CharacterClient<CharacterGetPayload<T>>>

    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
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
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CharacterClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Character
     * 
    **/
    select?: CharacterSelect | null
    /**
     * Throw an Error if a Character can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Character to fetch.
     * 
    **/
    where: CharacterWhereUniqueInput
  }


  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Character
     * 
    **/
    select?: CharacterSelect | null
    /**
     * Throw an Error if a Character can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Character to fetch.
     * 
    **/
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     * 
    **/
    orderBy?: Enumerable<CharacterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     * 
    **/
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     * 
    **/
    distinct?: Enumerable<CharacterScalarFieldEnum>
  }


  /**
   * Character findMany
   */
  export type CharacterFindManyArgs = {
    /**
     * Select specific fields to fetch from the Character
     * 
    **/
    select?: CharacterSelect | null
    /**
     * Filter, which Characters to fetch.
     * 
    **/
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     * 
    **/
    orderBy?: Enumerable<CharacterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     * 
    **/
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CharacterScalarFieldEnum>
  }


  /**
   * Character create
   */
  export type CharacterCreateArgs = {
    /**
     * Select specific fields to fetch from the Character
     * 
    **/
    select?: CharacterSelect | null
    /**
     * The data needed to create a Character.
     * 
    **/
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
  }


  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs = {
    data: Enumerable<CharacterCreateManyInput>
  }


  /**
   * Character update
   */
  export type CharacterUpdateArgs = {
    /**
     * Select specific fields to fetch from the Character
     * 
    **/
    select?: CharacterSelect | null
    /**
     * The data needed to update a Character.
     * 
    **/
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
    /**
     * Choose, which Character to update.
     * 
    **/
    where: CharacterWhereUniqueInput
  }


  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs = {
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    where?: CharacterWhereInput
  }


  /**
   * Character upsert
   */
  export type CharacterUpsertArgs = {
    /**
     * Select specific fields to fetch from the Character
     * 
    **/
    select?: CharacterSelect | null
    /**
     * The filter to search for the Character to update in case it exists.
     * 
    **/
    where: CharacterWhereUniqueInput
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     * 
    **/
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
  }


  /**
   * Character delete
   */
  export type CharacterDeleteArgs = {
    /**
     * Select specific fields to fetch from the Character
     * 
    **/
    select?: CharacterSelect | null
    /**
     * Filter which Character to delete.
     * 
    **/
    where: CharacterWhereUniqueInput
  }


  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs = {
    where?: CharacterWhereInput
  }


  /**
   * Character without action
   */
  export type CharacterArgs = {
    /**
     * Select specific fields to fetch from the Character
     * 
    **/
    select?: CharacterSelect | null
  }



  /**
   * Model Player
   */


  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    playerIndex: number | null
    port: number | null
    characterColor: number | null
    startStocks: number | null
    type: number | null
    teamId: number | null
  }

  export type PlayerSumAggregateOutputType = {
    playerIndex: number | null
    port: number | null
    characterColor: number | null
    startStocks: number | null
    type: number | null
    teamId: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: string | null
    playerIndex: number | null
    port: number | null
    characterColor: number | null
    startStocks: number | null
    type: number | null
    teamId: number | null
    controllerFix: string | null
    nametag: string | null
    displayName: string | null
    connectCode: string | null
    gameId: string | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: string | null
    playerIndex: number | null
    port: number | null
    characterColor: number | null
    startStocks: number | null
    type: number | null
    teamId: number | null
    controllerFix: string | null
    nametag: string | null
    displayName: string | null
    connectCode: string | null
    gameId: string | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    playerIndex: number
    port: number
    characterColor: number
    startStocks: number
    type: number
    teamId: number
    controllerFix: number
    nametag: number
    displayName: number
    connectCode: number
    gameId: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    playerIndex?: true
    port?: true
    characterColor?: true
    startStocks?: true
    type?: true
    teamId?: true
  }

  export type PlayerSumAggregateInputType = {
    playerIndex?: true
    port?: true
    characterColor?: true
    startStocks?: true
    type?: true
    teamId?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    playerIndex?: true
    port?: true
    characterColor?: true
    startStocks?: true
    type?: true
    teamId?: true
    controllerFix?: true
    nametag?: true
    displayName?: true
    connectCode?: true
    gameId?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    playerIndex?: true
    port?: true
    characterColor?: true
    startStocks?: true
    type?: true
    teamId?: true
    controllerFix?: true
    nametag?: true
    displayName?: true
    connectCode?: true
    gameId?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    playerIndex?: true
    port?: true
    characterColor?: true
    startStocks?: true
    type?: true
    teamId?: true
    controllerFix?: true
    nametag?: true
    displayName?: true
    connectCode?: true
    gameId?: true
    _all?: true
  }

  export type PlayerAggregateArgs = {
    /**
     * Filter which Player to aggregate.
     * 
    **/
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     * 
    **/
    orderBy?: Enumerable<PlayerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs = {
    where?: PlayerWhereInput
    orderBy?: Enumerable<PlayerOrderByWithAggregationInput>
    by: Array<PlayerScalarFieldEnum>
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }


  export type PlayerGroupByOutputType = {
    id: string
    playerIndex: number | null
    port: number | null
    characterColor: number | null
    startStocks: number | null
    type: number | null
    teamId: number | null
    controllerFix: string | null
    nametag: string | null
    displayName: string | null
    connectCode: string
    gameId: string | null
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Promise<
    Array<
      PickArray<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect = {
    id?: boolean
    playerIndex?: boolean
    port?: boolean
    characterColor?: boolean
    startStocks?: boolean
    type?: boolean
    teamId?: boolean
    controllerFix?: boolean
    nametag?: boolean
    displayName?: boolean
    connectCode?: boolean
    Game?: boolean | GameArgs
    gameId?: boolean
  }

  export type PlayerInclude = {
    Game?: boolean | GameArgs
  }

  export type PlayerGetPayload<
    S extends boolean | null | undefined | PlayerArgs,
    U = keyof S
      > = S extends true
        ? Player
    : S extends undefined
    ? never
    : S extends PlayerArgs | PlayerFindManyArgs
    ?'include' extends U
    ? Player  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Game'
        ? GameGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Player ?Player [P]
  : 
          P extends 'Game'
        ? GameGetPayload<S['select'][P]> | null : never
  } 
    : Player
  : Player


  type PlayerCountArgs = Merge<
    Omit<PlayerFindManyArgs, 'select' | 'include'> & {
      select?: PlayerCountAggregateInputType | true
    }
  >

  export interface PlayerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlayerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PlayerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Player'> extends True ? CheckSelect<T, Prisma__PlayerClient<Player>, Prisma__PlayerClient<PlayerGetPayload<T>>> : CheckSelect<T, Prisma__PlayerClient<Player | null >, Prisma__PlayerClient<PlayerGetPayload<T> | null >>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlayerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PlayerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Player'> extends True ? CheckSelect<T, Prisma__PlayerClient<Player>, Prisma__PlayerClient<PlayerGetPayload<T>>> : CheckSelect<T, Prisma__PlayerClient<Player | null >, Prisma__PlayerClient<PlayerGetPayload<T> | null >>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlayerFindManyArgs>(
      args?: SelectSubset<T, PlayerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Player>>, PrismaPromise<Array<PlayerGetPayload<T>>>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
    **/
    create<T extends PlayerCreateArgs>(
      args: SelectSubset<T, PlayerCreateArgs>
    ): CheckSelect<T, Prisma__PlayerClient<Player>, Prisma__PlayerClient<PlayerGetPayload<T>>>

    /**
     * Create many Players.
     *     @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     *     @example
     *     // Create many Players
     *     const player = await prisma.player.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlayerCreateManyArgs>(
      args?: SelectSubset<T, PlayerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
    **/
    delete<T extends PlayerDeleteArgs>(
      args: SelectSubset<T, PlayerDeleteArgs>
    ): CheckSelect<T, Prisma__PlayerClient<Player>, Prisma__PlayerClient<PlayerGetPayload<T>>>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlayerUpdateArgs>(
      args: SelectSubset<T, PlayerUpdateArgs>
    ): CheckSelect<T, Prisma__PlayerClient<Player>, Prisma__PlayerClient<PlayerGetPayload<T>>>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlayerDeleteManyArgs>(
      args?: SelectSubset<T, PlayerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlayerUpdateManyArgs>(
      args: SelectSubset<T, PlayerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
    **/
    upsert<T extends PlayerUpsertArgs>(
      args: SelectSubset<T, PlayerUpsertArgs>
    ): CheckSelect<T, Prisma__PlayerClient<Player>, Prisma__PlayerClient<PlayerGetPayload<T>>>

    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
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
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PlayerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Game<T extends GameArgs = {}>(args?: Subset<T, GameArgs>): CheckSelect<T, Prisma__GameClient<Game | null >, Prisma__GameClient<GameGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
    /**
     * Throw an Error if a Player can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Player to fetch.
     * 
    **/
    where: PlayerWhereUniqueInput
  }


  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
    /**
     * Throw an Error if a Player can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Player to fetch.
     * 
    **/
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     * 
    **/
    orderBy?: Enumerable<PlayerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     * 
    **/
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     * 
    **/
    distinct?: Enumerable<PlayerScalarFieldEnum>
  }


  /**
   * Player findMany
   */
  export type PlayerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
    /**
     * Filter, which Players to fetch.
     * 
    **/
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     * 
    **/
    orderBy?: Enumerable<PlayerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     * 
    **/
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PlayerScalarFieldEnum>
  }


  /**
   * Player create
   */
  export type PlayerCreateArgs = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
    /**
     * The data needed to create a Player.
     * 
    **/
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }


  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs = {
    data: Enumerable<PlayerCreateManyInput>
  }


  /**
   * Player update
   */
  export type PlayerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
    /**
     * The data needed to update a Player.
     * 
    **/
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     * 
    **/
    where: PlayerWhereUniqueInput
  }


  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs = {
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    where?: PlayerWhereInput
  }


  /**
   * Player upsert
   */
  export type PlayerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
    /**
     * The filter to search for the Player to update in case it exists.
     * 
    **/
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     * 
    **/
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }


  /**
   * Player delete
   */
  export type PlayerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
    /**
     * Filter which Player to delete.
     * 
    **/
    where: PlayerWhereUniqueInput
  }


  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs = {
    where?: PlayerWhereInput
  }


  /**
   * Player without action
   */
  export type PlayerArgs = {
    /**
     * Select specific fields to fetch from the Player
     * 
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlayerInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const GameScalarFieldEnum: {
    id: 'id',
    filePath: 'filePath',
    settings: 'settings',
    latestFrame: 'latestFrame',
    stats: 'stats',
    gameEnd: 'gameEnd'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const CharacterScalarFieldEnum: {
    id: 'id',
    number: 'number',
    name: 'name',
    shortName: 'shortName',
    colors: 'colors'
  };

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    playerIndex: 'playerIndex',
    port: 'port',
    characterColor: 'characterColor',
    startStocks: 'startStocks',
    type: 'type',
    teamId: 'teamId',
    controllerFix: 'controllerFix',
    nametag: 'nametag',
    displayName: 'displayName',
    connectCode: 'connectCode',
    gameId: 'gameId'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type GameWhereInput = {
    AND?: Enumerable<GameWhereInput>
    OR?: Enumerable<GameWhereInput>
    NOT?: Enumerable<GameWhereInput>
    id?: StringFilter | string
    filePath?: StringFilter | string
    settings?: JsonFilter
    latestFrame?: JsonFilter
    stats?: JsonFilter
    gameEnd?: JsonFilter
    players?: PlayerListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    filePath?: SortOrder
    settings?: SortOrder
    latestFrame?: SortOrder
    stats?: SortOrder
    gameEnd?: SortOrder
    players?: PlayerOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = {
    id?: string
  }

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    filePath?: SortOrder
    settings?: SortOrder
    latestFrame?: SortOrder
    stats?: SortOrder
    gameEnd?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GameScalarWhereWithAggregatesInput>
    OR?: Enumerable<GameScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GameScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    filePath?: StringWithAggregatesFilter | string
    settings?: JsonWithAggregatesFilter
    latestFrame?: JsonWithAggregatesFilter
    stats?: JsonWithAggregatesFilter
    gameEnd?: JsonWithAggregatesFilter
  }

  export type CharacterWhereInput = {
    AND?: Enumerable<CharacterWhereInput>
    OR?: Enumerable<CharacterWhereInput>
    NOT?: Enumerable<CharacterWhereInput>
    id?: StringFilter | string
    number?: IntFilter | number
    name?: StringFilter | string
    shortName?: StringFilter | string
    colors?: StringNullableListFilter
  }

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    colors?: SortOrder
  }

  export type CharacterWhereUniqueInput = {
    id?: string
    number?: number
    name?: string
    shortName?: string
    number_name_shortName?: CharacterNumberNameShortNameCompoundUniqueInput
  }

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    colors?: SortOrder
    _count?: CharacterCountOrderByAggregateInput
    _avg?: CharacterAvgOrderByAggregateInput
    _max?: CharacterMaxOrderByAggregateInput
    _min?: CharacterMinOrderByAggregateInput
    _sum?: CharacterSumOrderByAggregateInput
  }

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CharacterScalarWhereWithAggregatesInput>
    OR?: Enumerable<CharacterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CharacterScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    number?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    shortName?: StringWithAggregatesFilter | string
    colors?: StringNullableListFilter
  }

  export type PlayerWhereInput = {
    AND?: Enumerable<PlayerWhereInput>
    OR?: Enumerable<PlayerWhereInput>
    NOT?: Enumerable<PlayerWhereInput>
    id?: StringFilter | string
    playerIndex?: IntNullableFilter | number | null
    port?: IntNullableFilter | number | null
    characterColor?: IntNullableFilter | number | null
    startStocks?: IntNullableFilter | number | null
    type?: IntNullableFilter | number | null
    teamId?: IntNullableFilter | number | null
    controllerFix?: StringNullableFilter | string | null
    nametag?: StringNullableFilter | string | null
    displayName?: StringNullableFilter | string | null
    connectCode?: StringFilter | string
    Game?: XOR<GameRelationFilter, GameWhereInput> | null
    gameId?: StringNullableFilter | string | null
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    playerIndex?: SortOrder
    port?: SortOrder
    characterColor?: SortOrder
    startStocks?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
    controllerFix?: SortOrder
    nametag?: SortOrder
    displayName?: SortOrder
    connectCode?: SortOrder
    Game?: GameOrderByWithRelationInput
    gameId?: SortOrder
  }

  export type PlayerWhereUniqueInput = {
    id?: string
    connectCode?: string
  }

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    playerIndex?: SortOrder
    port?: SortOrder
    characterColor?: SortOrder
    startStocks?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
    controllerFix?: SortOrder
    nametag?: SortOrder
    displayName?: SortOrder
    connectCode?: SortOrder
    gameId?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PlayerScalarWhereWithAggregatesInput>
    OR?: Enumerable<PlayerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PlayerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    playerIndex?: IntNullableWithAggregatesFilter | number | null
    port?: IntNullableWithAggregatesFilter | number | null
    characterColor?: IntNullableWithAggregatesFilter | number | null
    startStocks?: IntNullableWithAggregatesFilter | number | null
    type?: IntNullableWithAggregatesFilter | number | null
    teamId?: IntNullableWithAggregatesFilter | number | null
    controllerFix?: StringNullableWithAggregatesFilter | string | null
    nametag?: StringNullableWithAggregatesFilter | string | null
    displayName?: StringNullableWithAggregatesFilter | string | null
    connectCode?: StringWithAggregatesFilter | string
    gameId?: StringNullableWithAggregatesFilter | string | null
  }

  export type GameCreateInput = {
    id?: string
    filePath: string
    settings: InputJsonValue
    latestFrame: InputJsonValue
    stats: InputJsonValue
    gameEnd: InputJsonValue
    players?: PlayerCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    filePath: string
    settings: InputJsonValue
    latestFrame: InputJsonValue
    stats: InputJsonValue
    gameEnd: InputJsonValue
    players?: PlayerUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    settings?: InputJsonValue | InputJsonValue
    latestFrame?: InputJsonValue | InputJsonValue
    stats?: InputJsonValue | InputJsonValue
    gameEnd?: InputJsonValue | InputJsonValue
    players?: PlayerUpdateManyWithoutGameInput
  }

  export type GameUncheckedUpdateInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    settings?: InputJsonValue | InputJsonValue
    latestFrame?: InputJsonValue | InputJsonValue
    stats?: InputJsonValue | InputJsonValue
    gameEnd?: InputJsonValue | InputJsonValue
    players?: PlayerUncheckedUpdateManyWithoutGameInput
  }

  export type GameCreateManyInput = {
    id?: string
    filePath: string
    settings: InputJsonValue
    latestFrame: InputJsonValue
    stats: InputJsonValue
    gameEnd: InputJsonValue
  }

  export type GameUpdateManyMutationInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    settings?: InputJsonValue | InputJsonValue
    latestFrame?: InputJsonValue | InputJsonValue
    stats?: InputJsonValue | InputJsonValue
    gameEnd?: InputJsonValue | InputJsonValue
  }

  export type GameUncheckedUpdateManyInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    settings?: InputJsonValue | InputJsonValue
    latestFrame?: InputJsonValue | InputJsonValue
    stats?: InputJsonValue | InputJsonValue
    gameEnd?: InputJsonValue | InputJsonValue
  }

  export type CharacterCreateInput = {
    id?: string
    number: number
    name: string
    shortName: string
    colors?: CharacterCreatecolorsInput | Enumerable<string>
  }

  export type CharacterUncheckedCreateInput = {
    id?: string
    number: number
    name: string
    shortName: string
    colors?: CharacterCreatecolorsInput | Enumerable<string>
  }

  export type CharacterUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    colors?: CharacterUpdatecolorsInput | Enumerable<string>
  }

  export type CharacterUncheckedUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    colors?: CharacterUpdatecolorsInput | Enumerable<string>
  }

  export type CharacterCreateManyInput = {
    id?: string
    number: number
    name: string
    shortName: string
    colors?: CharacterCreateManycolorsInput | Enumerable<string>
  }

  export type CharacterUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    colors?: CharacterUpdatecolorsInput | Enumerable<string>
  }

  export type CharacterUncheckedUpdateManyInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    colors?: CharacterUpdatecolorsInput | Enumerable<string>
  }

  export type PlayerCreateInput = {
    id?: string
    playerIndex?: number | null
    port?: number | null
    characterColor?: number | null
    startStocks?: number | null
    type?: number | null
    teamId?: number | null
    controllerFix?: string | null
    nametag?: string | null
    displayName?: string | null
    connectCode: string
    Game?: GameCreateNestedOneWithoutPlayersInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: string
    playerIndex?: number | null
    port?: number | null
    characterColor?: number | null
    startStocks?: number | null
    type?: number | null
    teamId?: number | null
    controllerFix?: string | null
    nametag?: string | null
    displayName?: string | null
    connectCode: string
    gameId?: string | null
  }

  export type PlayerUpdateInput = {
    playerIndex?: NullableIntFieldUpdateOperationsInput | number | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    characterColor?: NullableIntFieldUpdateOperationsInput | number | null
    startStocks?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    controllerFix?: NullableStringFieldUpdateOperationsInput | string | null
    nametag?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    connectCode?: StringFieldUpdateOperationsInput | string
    Game?: GameUpdateOneWithoutPlayersInput
  }

  export type PlayerUncheckedUpdateInput = {
    playerIndex?: NullableIntFieldUpdateOperationsInput | number | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    characterColor?: NullableIntFieldUpdateOperationsInput | number | null
    startStocks?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    controllerFix?: NullableStringFieldUpdateOperationsInput | string | null
    nametag?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    connectCode?: StringFieldUpdateOperationsInput | string
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerCreateManyInput = {
    id?: string
    playerIndex?: number | null
    port?: number | null
    characterColor?: number | null
    startStocks?: number | null
    type?: number | null
    teamId?: number | null
    controllerFix?: string | null
    nametag?: string | null
    displayName?: string | null
    connectCode: string
    gameId?: string | null
  }

  export type PlayerUpdateManyMutationInput = {
    playerIndex?: NullableIntFieldUpdateOperationsInput | number | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    characterColor?: NullableIntFieldUpdateOperationsInput | number | null
    startStocks?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    controllerFix?: NullableStringFieldUpdateOperationsInput | string | null
    nametag?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    connectCode?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    playerIndex?: NullableIntFieldUpdateOperationsInput | number | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    characterColor?: NullableIntFieldUpdateOperationsInput | number | null
    startStocks?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    controllerFix?: NullableStringFieldUpdateOperationsInput | string | null
    nametag?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    connectCode?: StringFieldUpdateOperationsInput | string
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type PlayerListRelationFilter = {
    every?: PlayerWhereInput
    some?: PlayerWhereInput
    none?: PlayerWhereInput
  }

  export type PlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    filePath?: SortOrder
    settings?: SortOrder
    latestFrame?: SortOrder
    stats?: SortOrder
    gameEnd?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    filePath?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    filePath?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type CharacterNumberNameShortNameCompoundUniqueInput = {
    number: number
    name: string
    shortName: string
  }

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    colors?: SortOrder
  }

  export type CharacterAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
  }

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
  }

  export type CharacterSumOrderByAggregateInput = {
    number?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type GameRelationFilter = {
    is?: GameWhereInput | null
    isNot?: GameWhereInput | null
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    playerIndex?: SortOrder
    port?: SortOrder
    characterColor?: SortOrder
    startStocks?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
    controllerFix?: SortOrder
    nametag?: SortOrder
    displayName?: SortOrder
    connectCode?: SortOrder
    gameId?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    playerIndex?: SortOrder
    port?: SortOrder
    characterColor?: SortOrder
    startStocks?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    playerIndex?: SortOrder
    port?: SortOrder
    characterColor?: SortOrder
    startStocks?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
    controllerFix?: SortOrder
    nametag?: SortOrder
    displayName?: SortOrder
    connectCode?: SortOrder
    gameId?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    playerIndex?: SortOrder
    port?: SortOrder
    characterColor?: SortOrder
    startStocks?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
    controllerFix?: SortOrder
    nametag?: SortOrder
    displayName?: SortOrder
    connectCode?: SortOrder
    gameId?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    playerIndex?: SortOrder
    port?: SortOrder
    characterColor?: SortOrder
    startStocks?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type PlayerCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<PlayerCreateWithoutGameInput>, Enumerable<PlayerUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutGameInput>
    createMany?: PlayerCreateManyGameInputEnvelope
    connect?: Enumerable<PlayerWhereUniqueInput>
  }

  export type PlayerUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<PlayerCreateWithoutGameInput>, Enumerable<PlayerUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutGameInput>
    createMany?: PlayerCreateManyGameInputEnvelope
    connect?: Enumerable<PlayerWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PlayerUpdateManyWithoutGameInput = {
    create?: XOR<Enumerable<PlayerCreateWithoutGameInput>, Enumerable<PlayerUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutGameInput>
    upsert?: Enumerable<PlayerUpsertWithWhereUniqueWithoutGameInput>
    createMany?: PlayerCreateManyGameInputEnvelope
    set?: Enumerable<PlayerWhereUniqueInput>
    disconnect?: Enumerable<PlayerWhereUniqueInput>
    delete?: Enumerable<PlayerWhereUniqueInput>
    connect?: Enumerable<PlayerWhereUniqueInput>
    update?: Enumerable<PlayerUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<PlayerUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<PlayerScalarWhereInput>
  }

  export type PlayerUncheckedUpdateManyWithoutGameInput = {
    create?: XOR<Enumerable<PlayerCreateWithoutGameInput>, Enumerable<PlayerUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutGameInput>
    upsert?: Enumerable<PlayerUpsertWithWhereUniqueWithoutGameInput>
    createMany?: PlayerCreateManyGameInputEnvelope
    set?: Enumerable<PlayerWhereUniqueInput>
    disconnect?: Enumerable<PlayerWhereUniqueInput>
    delete?: Enumerable<PlayerWhereUniqueInput>
    connect?: Enumerable<PlayerWhereUniqueInput>
    update?: Enumerable<PlayerUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<PlayerUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<PlayerScalarWhereInput>
  }

  export type CharacterCreatecolorsInput = {
    set: Enumerable<string>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CharacterUpdatecolorsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type CharacterCreateManycolorsInput = {
    set: Enumerable<string>
  }

  export type GameCreateNestedOneWithoutPlayersInput = {
    create?: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlayersInput
    connect?: GameWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GameUpdateOneWithoutPlayersInput = {
    create?: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlayersInput
    upsert?: GameUpsertWithoutPlayersInput
    disconnect?: boolean
    delete?: boolean
    connect?: GameWhereUniqueInput
    update?: XOR<GameUpdateWithoutPlayersInput, GameUncheckedUpdateWithoutPlayersInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type PlayerCreateWithoutGameInput = {
    id?: string
    playerIndex?: number | null
    port?: number | null
    characterColor?: number | null
    startStocks?: number | null
    type?: number | null
    teamId?: number | null
    controllerFix?: string | null
    nametag?: string | null
    displayName?: string | null
    connectCode: string
  }

  export type PlayerUncheckedCreateWithoutGameInput = {
    id?: string
    playerIndex?: number | null
    port?: number | null
    characterColor?: number | null
    startStocks?: number | null
    type?: number | null
    teamId?: number | null
    controllerFix?: string | null
    nametag?: string | null
    displayName?: string | null
    connectCode: string
  }

  export type PlayerCreateOrConnectWithoutGameInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutGameInput, PlayerUncheckedCreateWithoutGameInput>
  }

  export type PlayerCreateManyGameInputEnvelope = {
    data: Enumerable<PlayerCreateManyGameInput>
  }

  export type PlayerUpsertWithWhereUniqueWithoutGameInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutGameInput, PlayerUncheckedUpdateWithoutGameInput>
    create: XOR<PlayerCreateWithoutGameInput, PlayerUncheckedCreateWithoutGameInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutGameInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutGameInput, PlayerUncheckedUpdateWithoutGameInput>
  }

  export type PlayerUpdateManyWithWhereWithoutGameInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutPlayersInput>
  }

  export type PlayerScalarWhereInput = {
    AND?: Enumerable<PlayerScalarWhereInput>
    OR?: Enumerable<PlayerScalarWhereInput>
    NOT?: Enumerable<PlayerScalarWhereInput>
    id?: StringFilter | string
    playerIndex?: IntNullableFilter | number | null
    port?: IntNullableFilter | number | null
    characterColor?: IntNullableFilter | number | null
    startStocks?: IntNullableFilter | number | null
    type?: IntNullableFilter | number | null
    teamId?: IntNullableFilter | number | null
    controllerFix?: StringNullableFilter | string | null
    nametag?: StringNullableFilter | string | null
    displayName?: StringNullableFilter | string | null
    connectCode?: StringFilter | string
    gameId?: StringNullableFilter | string | null
  }

  export type GameCreateWithoutPlayersInput = {
    id?: string
    filePath: string
    settings: InputJsonValue
    latestFrame: InputJsonValue
    stats: InputJsonValue
    gameEnd: InputJsonValue
  }

  export type GameUncheckedCreateWithoutPlayersInput = {
    id?: string
    filePath: string
    settings: InputJsonValue
    latestFrame: InputJsonValue
    stats: InputJsonValue
    gameEnd: InputJsonValue
  }

  export type GameCreateOrConnectWithoutPlayersInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
  }

  export type GameUpsertWithoutPlayersInput = {
    update: XOR<GameUpdateWithoutPlayersInput, GameUncheckedUpdateWithoutPlayersInput>
    create: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
  }

  export type GameUpdateWithoutPlayersInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    settings?: InputJsonValue | InputJsonValue
    latestFrame?: InputJsonValue | InputJsonValue
    stats?: InputJsonValue | InputJsonValue
    gameEnd?: InputJsonValue | InputJsonValue
  }

  export type GameUncheckedUpdateWithoutPlayersInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    settings?: InputJsonValue | InputJsonValue
    latestFrame?: InputJsonValue | InputJsonValue
    stats?: InputJsonValue | InputJsonValue
    gameEnd?: InputJsonValue | InputJsonValue
  }

  export type PlayerCreateManyGameInput = {
    id?: string
    playerIndex?: number | null
    port?: number | null
    characterColor?: number | null
    startStocks?: number | null
    type?: number | null
    teamId?: number | null
    controllerFix?: string | null
    nametag?: string | null
    displayName?: string | null
    connectCode: string
  }

  export type PlayerUpdateWithoutGameInput = {
    playerIndex?: NullableIntFieldUpdateOperationsInput | number | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    characterColor?: NullableIntFieldUpdateOperationsInput | number | null
    startStocks?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    controllerFix?: NullableStringFieldUpdateOperationsInput | string | null
    nametag?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    connectCode?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerUncheckedUpdateWithoutGameInput = {
    playerIndex?: NullableIntFieldUpdateOperationsInput | number | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    characterColor?: NullableIntFieldUpdateOperationsInput | number | null
    startStocks?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    controllerFix?: NullableStringFieldUpdateOperationsInput | string | null
    nametag?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    connectCode?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerUncheckedUpdateManyWithoutPlayersInput = {
    playerIndex?: NullableIntFieldUpdateOperationsInput | number | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    characterColor?: NullableIntFieldUpdateOperationsInput | number | null
    startStocks?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    controllerFix?: NullableStringFieldUpdateOperationsInput | string | null
    nametag?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    connectCode?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}