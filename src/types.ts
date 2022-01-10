import type { FrameEntryType, GameEndType, GameStartType, MetadataType, StatsType } from '@slippi/slippi-js';

export enum Stat {
  OPENINGS_PER_KILL = 'opk',
  DAMAGE_PER_OPENING = 'dpo',
  NEUTRAL_WINS = 'nw',
  KILL_MOVES = 'mckm',
  NEUTRAL_OPENER_MOVES = 'mcno',
  INPUTS_PER_MINUTE = 'ipm',
  AVG_KILL_PERCENT = 'akp',
  DAMAGE_DONE = 'tdd',
  EARLY_KILLS = 'ek',
  LATE_DEATHS = 'ld',
  SELF_DESTRUCTS = 'sd',
  HIGH_DAMAGE_PUNISHES = 'hdp',

  // Custom
  FIRST_BLOOD = 'fb',
  L_CANCEL = 'lc',
}
type GameFileName = string;
type GameDateCreated = string;

export type GameId = `${GameFileName}.${GameDateCreated}`;

export interface GameData {
  id: GameId;
  filePath: string;
  settings: GameStartType | null;
  // frames: FramesType;
  stats: StatsType | null;
  metadata: MetadataType | null;
  latestFrame: FrameEntryType | null;
  gameEnd: GameEndType | null;
  winner: number | null;
}

export interface StatCalculationResult {
  result: unknown;
  simple: unknown;
}

export type StatCalculation = (games: GameData[], playerIndex: number) => StatCalculationResult;

export interface StatDefinition {
  name: string;
  type: string;
  betterDirection?: string;
  recommendedRounding?: number;
  calculate: StatCalculation;
}

export interface Player {
  playerIndex: number;
  port: number;
  characterId: number;
  characterColor: number;
  startStocks: number;
  type: number;
  teamId: number;
  controllerFix: string;
  nametag: string;
  displayName: string;
  connectCode: string;
}

export interface Setting {
  slpVersion: string;
  isTeams: boolean;
  isPAL: boolean;
  stageId: number;
  players: Player[];
  scene: number;
  gameMode: number;
}

export interface Stock {
  playerIndex: number;
  startFrame: number;
  endFrame: number;
  startPercent: number;
  endPercent: number;
  currentPercent: number;
  count: number;
  deathAnimation: number;
}

export interface Move {
  playerIndex: number;
  frame: number;
  moveId: number;
  hitCount: number;
  damage: number;
}

export interface Conversion {
  playerIndex: number;
  lastHitBy: number;
  startFrame: number;
  endFrame: number;
  startPercent: number;
  currentPercent: number;
  endPercent: number;
  moves: Move[];
  didKill: boolean;
  openingType: string;
}

export interface Move {
  playerIndex: number;
  frame: number;
  moveId: number;
  hitCount: number;
  damage: number;
}

export interface Combo {
  playerIndex: number;
  startFrame: number;
  endFrame: number;
  startPercent: number;
  currentPercent: number;
  endPercent: number;
  moves: Move[];
  didKill: boolean;
  lastHitBy: number;
}

export interface LCancelCount {
  success: number;
  fail: number;
}

export interface GrabCount {
  success: number;
  fail: number;
}

export interface ThrowCount {
  up: number;
  forward: number;
  back: number;
  down: number;
}

export interface GroundTechCount {
  backward: number;
  forward: number;
  neutral: number;
  fail: number;
}

export interface WallTechCount {
  success: number;
  fail: number;
}

export interface ActionCount {
  playerIndex: number;
  wavedashCount: number;
  wavelandCount: number;
  airDodgeCount: number;
  dashDanceCount: number;
  spotDodgeCount: number;
  ledgegrabCount: number;
  rollCount: number;
  lCancelCount: LCancelCount;
  grabCount: GrabCount;
  throwCount: ThrowCount;
  groundTechCount: GroundTechCount;
  wallTechCount: WallTechCount;
}

export interface InputCount {
  buttons: number;
  triggers: number;
  cstick: number;
  joystick: number;
  total: number;
}

export interface SuccessfulConversion {
  count: number;
  total: number;
  ratio: number;
}

export interface InputsPerMinute {
  count: number;
  total: number;
  ratio: number;
}

export interface DigitalInputsPerMinute {
  count: number;
  total: number;
  ratio: number;
}

export interface OpeningsPerKill {
  count: number;
  total: number;
  ratio: number;
}

export interface DamagePerOpening {
  count: number;
  total: number;
  ratio: number;
}

export interface NeutralWinRatio {
  count: number;
  total: number;
  ratio: number;
}

export interface CounterHitRatio {
  count: number;
  total: number;
  ratio: number;
}

export interface BeneficialTradeRatio {
  count: number;
  total: number;
  ratio?: any;
}

export interface Overall {
  playerIndex: number;
  inputCounts: InputCount;
  conversionCount: number;
  totalDamage: number;
  killCount: number;
  successfulConversions: SuccessfulConversion;
  inputsPerMinute: InputsPerMinute;
  digitalInputsPerMinute: DigitalInputsPerMinute;
  openingsPerKill: OpeningsPerKill;
  damagePerOpening: DamagePerOpening;
  neutralWinRatio: NeutralWinRatio;
  counterHitRatio: CounterHitRatio;
  beneficialTradeRatio: BeneficialTradeRatio;
}

// export interface Stat {
// 	lastFrame: number;
// 	playableFrameCount: number;
// 	stocks: Stock[];
// 	conversions: Conversion[];
// 	combos: Combo[];
// 	actionCounts: ActionCount[];
// 	overall: Overall[];
// 	gameComplete: boolean;
// }

export interface Name {
  netplay: string;
  code: string;
}

export interface Character {
  2: number;
}

export interface Name {
  netplay: string;
  code: string;
}

export interface Character {
  18: number;
}

export interface Player {
  0: 0;
  1: 1;
}

export interface Metadata {
  startAt: string;
  lastFrame: number;
  players: Player;
  playedOn: string;
}

export interface Pre {
  frame: number;
  playerIndex: number;
  isFollower: boolean;
  seed: number;
  actionStateId: number;
  positionX: number;
  positionY: number;
  facingDirection: number;
  joystickX: number;
  joystickY: number;
  cStickX: number;
  cStickY: number;
  trigger: number;
  buttons: number;
  physicalButtons: number;
  physicalLTrigger: number;
  physicalRTrigger: number;
  percent: number;
}

export interface SelfInducedSpeed {
  airX: number;
  y: number;
  attackX: number;
  attackY: number;
  groundX: number;
}

export interface Post {
  frame: number;
  playerIndex: number;
  isFollower: boolean;
  internalCharacterId: number;
  actionStateId: number;
  positionX: number;
  positionY: number;
  facingDirection: number;
  percent: number;
  shieldSize: number;
  lastAttackLanded: number;
  currentComboCount: number;
  lastHitBy: number;
  stocksRemaining: number;
  actionStateCounter: number;
  miscActionState: number;
  isAirborne: boolean;
  lastGroundId: number;
  jumpsRemaining: number;
  lCancelStatus: number;
  hurtboxCollisionState: number;
  selfInducedSpeeds: SelfInducedSpeed;
}

export interface Player {
  pre: Pre;
  post: Post;
}

export interface LatestFrame {
  players: Player[];
  frame: number;
  isTransferComplete: boolean;
}

export interface GameEnd {
  gameEndMethod: number;
  lrasInitiatorIndex: number;
}

export interface RootObject {
  filePath: string;
  settings: Setting;
  stats: Stat;
  metadata: Metadata;
  latestFrame: LatestFrame;
  gameEnd: GameEnd;
  winner: number;
}
