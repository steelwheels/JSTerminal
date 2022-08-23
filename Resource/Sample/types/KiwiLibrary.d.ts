declare enum AccessType {
  append = 2,
  read = 0,
  write = 1
}
declare namespace AccessType {
  function description(param: AccessType): string ;
  const keys: string[] ;
}
declare enum AlertType {
  critical = 3,
  informational = 1,
  warning = 2
}
declare namespace AlertType {
  function description(param: AlertType): string ;
  const keys: string[] ;
}
declare enum Alignment {
  center = 3,
  fill = 2,
  leading = 0,
  trailing = 1
}
declare namespace Alignment {
  function description(param: Alignment): string ;
  const keys: string[] ;
}
declare enum AnimationState {
  idle = 0,
  pause = 2,
  run = 1
}
declare namespace AnimationState {
  function description(param: AnimationState): string ;
  const keys: string[] ;
}
declare enum Authorize {
  authorized = 3,
  denied = 2,
  undetermined = 0
}
declare namespace Authorize {
  function description(param: Authorize): string ;
  const keys: string[] ;
}
declare enum Axis {
  horizontal = 0,
  vertical = 1
}
declare namespace Axis {
  function description(param: Axis): string ;
  const keys: string[] ;
}
declare enum ComparisonResult {
  ascending = -1,
  descending = 1,
  same = 0
}
declare namespace ComparisonResult {
  function description(param: ComparisonResult): string ;
  const keys: string[] ;
}
declare enum Distribution {
  equalSpacing = 3,
  fill = 0,
  fillEqually = 2,
  fillProportinally = 1
}
declare namespace Distribution {
  function description(param: Distribution): string ;
  const keys: string[] ;
}
declare enum ExitCode {
  commaneLineError = 2,
  exception = 4,
  internalError = 1,
  noError = 0,
  syntaxError = 3
}
declare namespace ExitCode {
  function description(param: ExitCode): string ;
  const keys: string[] ;
}
declare enum FileType {
  directory = 2,
  file = 1,
  notExist = 0
}
declare namespace FileType {
  function description(param: FileType): string ;
  const keys: string[] ;
}
declare enum FontSize {
  large = 19,
  regular = 13,
  small = 11
}
declare namespace FontSize {
  function description(param: FontSize): string ;
  const keys: string[] ;
}
declare enum LogLevel {
  debug = 3,
  detail = 4,
  error = 1,
  nolog = 0,
  warning = 2
}
declare namespace LogLevel {
  function description(param: LogLevel): string ;
  const keys: string[] ;
}
declare enum SortOrder {
  decreasing = 1,
  increasing = -1,
  none = 0
}
declare namespace SortOrder {
  function description(param: SortOrder): string ;
  const keys: string[] ;
}
declare enum TextAlign {
  center = 2,
  justfied = 3,
  left = 0,
  normal = 4,
  right = 1
}
declare namespace TextAlign {
  function description(param: TextAlign): string ;
  const keys: string[] ;
}
/**
 * Builtin.d.ts
 */

interface ColorIF {
	red:			number ;
	green:			number ;
	blue:			number ;
	alpha:			number ;

        toString():             string ;
}

interface ConsoleIF {
	log(message: string): void ;
	print(message: string): void ;
	error(message: string): void ;
}

interface ColorManagerIF {
        black:          ColorIF ;
        red:            ColorIF ;
        green:          ColorIF ;
        yellow:         ColorIF ;
        blue:           ColorIF ;
        magenta:        ColorIF ;
        cyan:           ColorIF ;
        white:          ColorIF ;
}

interface CursesIF {
        minColor:	number ;
        maxColor:       number ;
        black:          number ;
        red:            number ;
        green:          number ;
        yellow:         number ;
        blue:           number ;
        magenta:        number ;
        cyan:           number ;
        white:          number ;

        begin(): void ;
        end(): void ;

        width:                  number ;
        height:                 number ;

        foregroundColor:        number ;
        backgroundColor:        number ;

	moveTo(x: number, y: number): boolean ;
	inkey(): string | null ;

	put(str: string): void ;
	fill(x: number, y: number, width: number, height: number, c: string): void ;
}

interface ArrayIF {
	count:	number ;
	values:	[any] ;

	value(index: number): any | null ;
	contains(value: any): boolean ;
	
	set(value: any, index: number): void ;
	append(value: any): void ;
}

interface SetIF {
	count:	number ;
	values:	[any] ;

	value(index: number): any | null ;
	contains(value: any): boolean ;

	insert(value: any): void ;
}

interface DictionaryIF {
	count:	number ;
	keys:   [any] ;
	values: [any] ;

	set(value: any, name: string): void ;
	value(name: string): any | null ;
}

interface EscapeCodeIF {
        backspace():                    string ;
	delete():                       string ;

	cursorUp(delta: number): string ;
	cursorDown(delta: number): string ;
	cursorForward(delta: number): string ;
	cursorBackward(delta: number): string ;
	cursorNextLine(delta: number): string ;
	cursorPreviousLine(delta: number): string ;
	cursorMoveTo(y: number, x: number): string ;

	saveCursorPosition(): string ;
	restoreCursorPosition(): string ;

	eraceFromCursorToEnd(): string ;
	eraceFromCursorToBegin(): string ;
	eraceEntireBuffer(): string ;
	eraceFromCursorToRight(): string ;
	eraceFromCursorToLeft(): string ;
	eraceEntireLine(): string ;

	scrollUp(lines: number): string ;
	scrollDown(lines: number): string ;

	color(type: number, color: number): string ;
	bold(flag: boolean): string ;

	reset(): string
}

interface FileIF {
	getc(): string ;
	getl(): string ;
	put(str: string): void ;
	close(): void ;
}

interface PipeIF {
        reading:        FileIF ;
        writing:        FileIF ;
}

interface PointIF {
	x : number ;
	y : number ;
}

interface RectIF {
	x:		number ;
	y: 		number ;
	width:		number ;
	height:		number ;
}

interface SizeIF {
	width:		number ;
	height:		number ;
}

interface RangeIF {
	location:	number ;
	length:		number ;
}

interface TextIF
{
        core(): any ;
	toString(): string ;
}

interface TextLineIF extends TextIF
{
        set(str: string): void ;
	append(str: string): void ;
	prepend(str: string): void ;
}

interface TextSectionIF extends TextIF
{
	contentCount: number ;

	add(text: TextIF): void ;
	insert(text: TextIF): void ;
	append(str: string): void ;
	prepend(str: string): void ;
}

interface TextRecordIF extends TextIF
{
        columnCount: number ;
	columns: number ;
        append(str: string): void ;
	prepend(str: string): void ;
}

interface TextTableIF extends TextIF
{
        count: number ;
        records: TextRecordIF[] ;

        add(rec: TextRecordIF): void ;
        inert(rec: TextRecordIF): void ;
	append(str: string): void ;
        prepend(str: string): void ;
}

interface ImageIF {
	size: SizeIF ;
}

/* KLGraphicsContext in swift */
interface GraphicsContextIF {
	logicalFrame:	RectIF ;

	setFillColor(col: ColorIF): void ;
	setStrokeColor(col: ColorIF): void ;
	setPenSize(size: number): void ;
	moveTo(x: number, y: number): void ;
	lineTo(x: number, y: number): void ;
	rect(x: number, y: number, width: number, height: number, dofill: boolean): void ;
	circle(x: number, y: number, rad: number, dofill: boolean): void ;
}

interface BitmapIF
{
	width:		number ;
	height:		number ;

	get(x: number, y: number): ColorIF ;
	set(x: number, y: number, color: ColorIF): void ;
}

interface ProcessIF {
	isRunning:	boolean ;
	didFinished:	boolean ;
	exitCode:	number ;
	terminate(): void ;
}

interface URLIF {
	isNull:			boolean ;
	absoluteString:		string ;
	path:			string ;
	appendingPathComponent(comp: string): URLIF | null ;
	loadText():		string | null ;
}

interface StorageIF {
	value(path: string): any ;

	set(value: any, path: string): boolean ;
	append(value: any, path: string): boolean ;
	delete(path: string): boolean

	save(): boolean ;
	toString(): string ;
}

interface RecordIF {
	fieldNames:		string[] ;

	value(name: string):			any ;
	setValue(value: any, name: string):	void ;

	toString(): 		string ;
}

interface PointerValueIF {
	path:			string ;
}

interface TableIF {
	recordCount:		number ;

	readonly defaultFields:	{[name:string]: any} ;

	newRecord():				RecordIF ;
	record(row: number):			RecordIF | null ;
	pointer(value: any, key: string):	PointerValueIF | null ;

	search(value: any, name: string):	RecordIF[] | null ;
	append(record: RecordIF): 		void ;
	appendPointer(pointer: PointerValueIF):	void ;

	remove(index: number):			boolean ;
	save():					boolean ;

	toString(): 		string
}

interface MappingTableIF extends TableIF {

	setFilterFunction(filter: (rec: RecordIF) => boolean): void ;
	addVirtualField(field: string, callback: (rec: RecordIF) => any): void

	sortOrder: 		SortOrder | null ;
	setCompareFunction(compare: (rec0: RecordIF, rec1: RecordIF) => ComparisonResult): void
}

interface SymbolsIF {
	characterA:		URLIF ;
	chevronBackward:	URLIF ;
	chevronForward:		URLIF ;
	handRaised:		URLIF ;
	line1P:			URLIF ;
	line2P:			URLIF ;
	line4P:			URLIF ;
	line8P:			URLIF ;
	line16P:		URLIF ;
	paintbrush:		URLIF ;
	questionmark:		URLIF ;

	oval(filled: boolean):   URLIF ;
	pencil(filled: boolean): URLIF ;
	rectangle(filled: boolean, rounded: boolean): URLIF ;
}

interface ContactDatabaseIF {
	recordCount:		number ;

	authorize(callback: (granted: boolean) => void): void
	load(url: URLIF | null): boolean ;

	record(index: number): RecordIF | null ;
	search(value: any, name: string):	RecordIF[] | null ;
        append(record: RecordIF): void ;
	forEach(callback: (record: RecordIF) => void): void ;
}

interface CollectionIF {
	sectionCount:			number ;
	itemCount(section: number):	number ;

	header(section: number): string | null ;
	footer(section: number): string | null ;

	value(section: number, item: number): URLIF | null ;
	add(header: string, footer: string, item: URLIF[]): void ;

	toStrings(): string[] ;
}

interface SystemPreferenceIF {
	version:		string ;
	logLevel:		number ;
}

interface TerminalPreferenceIF {
	width:			number ;
	height:			number ;
	foregroundColor:	ColorIF ;
	backgroundColor:	ColorIF ;
}

interface UserPreferenceIF {
	homeDirectory: 		URLIF ;
}

interface PreferenceIF {
	system:			SystemPreferenceIF ;
	terminal:		TerminalPreferenceIF ;
	user:			UserPreferenceIF ;
}

/* Singleton object*/
declare var console:		ConsoleIF ;
declare var Color:      	ColorManagerIF ;
declare var Curses:     	CursesIF ;
declare var EscapeCode: 	EscapeCodeIF ;
declare var Contacts:	        ContactDatabaseIF ;
declare var Symbols:		SymbolsIF ;
declare var Preference:		PreferenceIF ;

declare function Pipe(): PipeIF ;
declare function Point(x: number, y: number): PointIF ;
declare function Rect(x: number, y: number, width: number, height: number): RectIF ;
declare function Size(width: number, height: number): SizeIF ;
declare function Collection(): CollectionIF ;
declare function URL(path: string): URLIF | null ;

declare function Storage(path: string): StorageIF | null ;
declare function ArrayStorage(sotrage: string, path: string): ArrayIF | null ;
declare function SetStorage(storage: string, path: string): SetIF | null ;
declare function DictionaryStorage(storage: string, path: string): DictionaryIF | null ;
declare function TableStorage(storage: string, path: string): TableIF | null ;
declare function MappingTableStorage(storage: string, path: string): MappingTableIF | null ;

declare function isArray(value: any): boolean ;
declare function isBitmap(value: any): boolean ;
declare function isBoolean(value: any): boolean ;
declare function isDate(value: any): boolean ;
declare function isNull(value: any): boolean ;
declare function isNumber(value: any): boolean ;
declare function isDictionary(value: any): boolean ;
declare function isRecord(value: any): boolean ;
declare function isObject(value: any): boolean ;
declare function isPoint(value: any): boolean ;
declare function isRect(value: any): boolean ;
declare function isSize(value: any): boolean ;
declare function isString(value: any): boolean ;
declare function isUndefined(value: any): boolean ;
declare function isURL(value: any): boolean ;
declare function isEOF(value: any): boolean ;

declare function toArray(value: any): any[] | null ;
declare function toBitmap(value: any): BitmapIF | null ;
declare function toBoolean(value: any): boolean | null ;
declare function toDate(value: any): object | null ;
declare function toNumber(value: any): number | null ;
declare function toDictionary(value: any): {[name:string]: any} | null ;
declare function toRecord(value: any): RecordIF | null ;
declare function toObject(value: any): object | null ;
declare function toPoint(value: any): PointIF | null ;
declare function toRect(value: any): RectIF | null ;
declare function toSize(value: any): SizeIF | null ;
declare function toString(value: any): string | null ;
declare function toURL(value: any): URLIF | null ;
declare function toText(value: any): TextIF ;

declare function asciiCodeName(code: number): string | null ;

declare function exit(code: number): void ;
declare function sleep(sec: number): boolean ;

declare function TextLine(str: string): TextLineIF ;
declare function TextSection(): TextSectionIF ;
declare function TextRecord(): TextRecordIF ;
declare function TextTable(): TextTableIF ;

declare function _openPanel(title: string, type: number,
					exts: string[], cbfunc: any): void ;
declare function _savePanel(title: string, cbfunc: any): void ;
declare function _run(path: URLIF | string, input: FileIF, output: FileIF, error: FileIF): object | null ;

/// <reference path="Builtin.d.ts" />
/// <reference path="Enum.d.ts" />
declare function isEmptyString(str: string): boolean;
declare function isEmptyObject(obj: object): boolean;
/// <reference path="Builtin.d.ts" />
/// <reference path="Process.d.ts" />
/// <reference path="Enum.d.ts" />
declare function first<T>(arr: T[] | null): T | null;
/// <reference path="Builtin.d.ts" />
/// <reference path="Enum.d.ts" />
declare class File {
    mCore: FileIF;
    constructor(core: FileIF);
    getc(): string;
    getl(): string;
    put(str: string): void;
}
declare var _stdin: FileIF;
declare var _stdout: FileIF;
declare var _stderr: FileIF;
declare const stdin: File;
declare const stdout: File;
declare const stderr: File;
interface JSONFileIF {
    read(file: FileIF): object | null;
    write(file: FileIF, src: object): boolean;
}
declare var _JSONFile: JSONFileIF;
declare class JSONFile {
    constructor();
    read(file: File): object | null;
    write(file: File, src: object): boolean;
}
/// <reference path="Builtin.d.ts" />
/// <reference path="Enum.d.ts" />
interface Math {
    randomInt(min: number, max: number): number;
    clamp(src: number, min: number, max: number): number;
}
declare function int(value: number): number;
declare function compareNumbers(n0: number, n1: number): ComparisonResult;
declare function compareStrings(s0: string, s1: string): ComparisonResult;
/**
 * Debug.ts
 */
/// <reference path="Builtin.d.ts" />
/// <reference path="Enum.d.ts" />
declare function checkVariables(place: string, ...vars: any[]): boolean;
/// <reference path="Builtin.d.ts" />
/// <reference path="Math.d.ts" />
/// <reference path="Enum.d.ts" />
declare function addPoint(p0: PointIF, p1: PointIF): PointIF;
declare function isSamePoints(p0: PointIF, p1: PointIF): boolean;
declare function clampPoint(src: PointIF, x: number, y: number, width: number, height: number): PointIF;
/// <reference path="Builtin.d.ts" />
/// <reference path="Enum.d.ts" />
declare function _waitUntilExitOne(process: ProcessIF): number;
declare function _waitUntilExitAll(processes: ProcessIF[]): number;
declare class Semaphore {
    mValue: {
        [key: string]: number;
    };
    constructor(initval: number);
    signal(): void;
    wait(): void;
}
declare class CancelException extends Error {
    code: number;
    constructor(code: number);
}
declare function _cancel(): void;
declare function openPanel(title: string, type: number, exts: string[]): URLIF | null;
declare function savePanel(title: string): URLIF | null;
declare function run(path: URLIF | string | null, input: FileIF, output: FileIF, error: FileIF): object | null;
/// <reference path="Builtin.d.ts" />
/// <reference path="Enum.d.ts" />
declare function maxLengthOfStrings(strs: string[]): number;
declare function adjustLengthOfStrings(strs: string[]): string[];
declare function pasteStrings(src0: string[], src1: string[], space: string): string[];
declare function isEqualTrimmedStrings(str0: string, str1: string): boolean;
/// <reference path="Builtin.d.ts" />
/// <reference path="Enum.d.ts" />
declare class CFrame {
    mFrame: RectIF;
    mCursorX: number;
    mCursorY: number;
    mForegroundColor: number;
    mBackgroundColor: number;
    constructor(frame: RectIF);
    get frame(): RectIF;
    get foregroundColor(): number;
    set foregroundColor(newcol: number);
    get backgroundColor(): number;
    set backgroundColor(newcol: number);
    fill(pat: string): void;
    moveTo(x: number, y: number): boolean;
    put(str: string): void;
}
/// <reference path="Builtin.d.ts" />
/// <reference path="Enum.d.ts" />
declare type TurtleStatus = {
    x: number;
    y: number;
    angle: number;
};
declare class Turtle {
    mContext: GraphicsContextIF;
    mCurrentX: number;
    mCurrentY: number;
    mCurrentAngle: number;
    mMovingAngle: number;
    mMovingDistance: number;
    mPenSize: number;
    mHistory: TurtleStatus[];
    constructor(ctxt: GraphicsContextIF);
    setup(x: number, y: number, angle: number, pen: number): void;
    get logicalFrame(): RectIF;
    get currentX(): number;
    get currentY(): number;
    get currentAngle(): number;
    get movingAngle(): number;
    set movingAngle(newval: number);
    get movingDistance(): number;
    set movingDistance(newval: number);
    get penSize(): number;
    set penSize(newval: number);
    forward(dodraw: boolean): void;
    turn(doright: boolean): void;
    push(): void;
    pop(): void;
    exec(commands: string): void;
}
/// <reference path="Builtin.d.ts" />
/// <reference path="Process.d.ts" />
/// <reference path="Enum.d.ts" />
declare function requestContactAccess(): boolean;
